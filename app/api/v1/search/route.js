import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.nextUrl);
    const query = searchParams.get("q");
    const res = await fetch(`http://localhost:4000/api/v1/search?q=${query}`);
    const data = await res.json();
    if (!data.result.length) {
      throw new Error("No such Location");
    }
    console.log(result);
    return NextResponse.json(true);
  } catch (error) {
    console.log(error);
    return NextResponse.json(false);
  }
}
