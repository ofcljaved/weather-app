import ErrorHandler from "@/utils/ErrorHandler";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.nextUrl);
    const query = searchParams.get("q");
    const res = await fetch(`http://localhost:4000/api/v1/search?q=${query}`);
    const data = await res.json();
    if (!data.result.length) {
      throw new ErrorHandler("No such Location", 422);
    }
    return NextResponse.json(data.result);
  } catch (error) {
    console.log(error);
    const errorResponse =
      error.code === 422 ? error.message : "Currently search is not working";
    return NextResponse.json(null, { errorResponse });
  }
}
