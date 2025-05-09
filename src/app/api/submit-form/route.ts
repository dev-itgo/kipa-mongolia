import { NextResponse } from "next/server";
import { doc } from "@/utils/google-sheet";
import type { FormData } from "@/utils/google-sheet";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const data: FormData = await request.json();

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({
      이름: data.name,
      나이: data.age,
      연락처: data.contact,
      문의사항: data.etc || "",
      신청일시: new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error adding row to Google Sheet:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit form" },
      { status: 500 },
    );
  }
}
