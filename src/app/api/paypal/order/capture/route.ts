import { base, generateAccessToken } from "@/utils/getToken";
import { NextRequest, NextResponse } from "next/server";

// 파일 상단에 임시 메모리 DB 타입 선언 추가
declare global {
  // eslint-disable-next-line no-var
  var orderStatusMap: Map<string, string> | undefined;
}
const orderStatusMap: Map<string, string> =
  globalThis.orderStatusMap || new Map();
globalThis.orderStatusMap = orderStatusMap;

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

  // 중복 결제 방지: 이미 결제된 주문인지 확인
  if (
    orderStatusMap.has(orderID) &&
    orderStatusMap.get(orderID) === "COMPLETED"
  ) {
    return NextResponse.json({
      ok: false,
      code: 409,
      msg: "이미 결제된 주문입니다.",
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
    // 결제 성공 시 상태 저장
    if (jsonResponse.status === "COMPLETED") {
      orderStatusMap.set(orderID, "COMPLETED");
    }
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
