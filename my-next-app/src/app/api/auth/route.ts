import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
  console.log("POST request received");
  const { email } = await req.json();

  if (!email) {
    console.log("Email is missing");
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  } else {
    //check if user is permium user
    if (true) {
      return NextResponse.json({ isUser: true });
    } else {
      return NextResponse.json({ isUser: false });
    }
    console.log("Email received:", email);
    return NextResponse.json({ message: email });
  }
}

export async function OPTIONS(req: Request) {
  console.log("OPTIONS request received");
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
