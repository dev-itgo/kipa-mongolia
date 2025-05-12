import { base, generateAccessToken } from "@/utils/getToken";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";
export async function POST(request: NextRequest) {
  const payload = await request.json();
  const { orderID } = payload;

  if (!orderID) {
    return NextResponse.json({
      ok: false,
      code: 400,
      msg: "Invalid Order ID",
    });
  }

  try {
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders/${orderID}/capture`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      method: "POST",
    });

    const jsonResponse = await response.json();
    return NextResponse.json({
      code: response.status,
      ok: true,
      data: jsonResponse,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      ok: false,
      code: 500,
      msg: "Internal Server Error",
    });
  }
}
