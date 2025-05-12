import { base, generateAccessToken } from "@/utils/getToken";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";
export async function POST(request: NextRequest) {
  const reqPayload = await request.json();
  const { price } = reqPayload;

  if (!price) {
    return NextResponse.json({
      ok: false,
      code: 400,
      msg: "Invalid Price",
    });
  }

  try {
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders`;

    const payload = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: price,
          },
        },
      ],
    };

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      method: "POST",
      body: JSON.stringify(payload),
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
