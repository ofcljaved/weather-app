import ErrorHandler from '@/utils/ErrorHandler';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.nextUrl);
    const query = searchParams.get('q');
    const res = await fetch(
      `https://geonames.onrender.com/api/v1/search?q=${query}&limit=15`
    );
    if (res.status === 404) {
      throw new ErrorHandler("API doesn't exist", res.status);
    }
    if (res.status === 500) {
      throw new ErrorHandler('Internal server error', res.status);
    }
    const data = await res.json();
    if (!data.result.length) {
      throw new ErrorHandler('No such Location', 422);
    }
    return NextResponse.json(data.result);
  } catch (error) {
    console.log(error);
    const errorResponse =
      error.code === 422 ? error.message : 'Currently search is not working';
    return NextResponse.json({ errorResponse }, { status: error.code || 500 });
  }
}
