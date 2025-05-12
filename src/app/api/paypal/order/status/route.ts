import { base, generateAccessToken } from "@/utils/getToken";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const orderID = searchParams.get("orderId");

  if (!orderID) {
    return NextResponse.json({
      ok: false,
      code: 400,
      msg: "Order ID is required",
    });
  }

  try {
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders/${orderID}`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      method: "GET",
    });

    const jsonResponse = await response.json();

    return NextResponse.json({
      ok: true,
      status: jsonResponse.status,
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
