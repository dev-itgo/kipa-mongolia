"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PaypalResponse } from "@/types/paypal";

interface FormData {
  name: string;
  age: string;
  contact: string;
  etc?: string;
}

const PaymentCompletePage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData | null>(null);
  const [paypalData, setPaypalData] = useState<PaypalResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedFormData = sessionStorage.getItem("formData");
    const storedPaypalData = sessionStorage.getItem("paypalData");

    if (!storedFormData || !storedPaypalData) {
      router.push("/");
      return;
    }

    let popstateRegistered = false;
    let handlePopState: (() => void) | null = null;

    const checkStatusAndProceed = async () => {
      try {
        const parsedFormData = JSON.parse(storedFormData);
        const parsedPaypalData = JSON.parse(storedPaypalData);

        // 결제 상태 체크
        const orderID = parsedPaypalData?.data?.id;
        if (!orderID) {
          router.replace("/");
          return;
        }

        // 최대 3번까지 재시도
        let retryCount = 0;
        let paymentStatus = null;

        while (retryCount < 3) {
          try {
            const res = await fetch(
              `/api/paypal/order/status?orderId=${orderID}`,
            );
            const data = await res.json();
            paymentStatus = data.status;

            if (paymentStatus === "COMPLETED") {
              break;
            }

            // COMPLETED가 아닌 경우 잠시 대기 후 재시도
            await new Promise((resolve) => setTimeout(resolve, 1000));
            retryCount++;
          } catch (error) {
            console.error(`Retry ${retryCount + 1} failed:`, error);
            retryCount++;
          }
        }

        if (paymentStatus !== "COMPLETED") {
          router.replace("/payment");
          return;
        }

        // 결제가 완료된 경우에만 데이터 설정
        setFormData(parsedFormData);
        setPaypalData(parsedPaypalData);

        // popstate 이벤트 리스너 설정
        handlePopState = () => {
          router.replace("/");
        };
        window.addEventListener("popstate", handlePopState);
        popstateRegistered = true;

        // 모든 처리가 완료된 후에만 세션 스토리지 정리
        sessionStorage.removeItem("formData");
        sessionStorage.removeItem("paypalData");
      } catch (error) {
        console.error("Error parsing data:", error);
        router.push("/");
      } finally {
        setIsLoading(false);
      }
    };

    checkStatusAndProceed();

    return () => {
      if (popstateRegistered && handlePopState) {
        window.removeEventListener("popstate", handlePopState);
      }
    };
  }, [router]);

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-md">
        <div className="flex flex-col gap-10 p-4">
          <h1 className="text-2xl font-bold">결제 완료</h1>
          <div className="rounded-lg bg-[#181818] p-6">
            <div className="animate-pulse space-y-4">
              <div className="h-4 w-3/4 rounded bg-gray-700"></div>
              <div className="h-4 w-1/2 rounded bg-gray-700"></div>
              <div className="h-4 w-2/3 rounded bg-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!formData || !paypalData) {
    return null;
  }

  const paymentCapture = paypalData.data.purchase_units[0].payments.captures[0];

  return (
    <div className="container mx-auto max-w-md">
      <div className="mb-5 flex flex-col gap-10 p-4">
        <h1 className="text-2xl font-bold">결제 완료</h1>

        <div className="rounded-lg bg-[#181818] p-6">
          <h2 className="mb-4 text-xl font-bold">신청 정보</h2>
          <div className="space-y-4">
            <div>
              <span className="font-bold">이름:</span> {formData.name}
            </div>
            <div>
              <span className="font-bold">나이:</span> {formData.age}
            </div>
            <div>
              <span className="font-bold">연락처:</span> {formData.contact}
            </div>
            {formData.etc && (
              <div>
                <span className="font-bold">기타 문의사항:</span> {formData.etc}
              </div>
            )}
          </div>
        </div>

        <div className="rounded-lg bg-[#181818] p-6">
          <h2 className="mb-4 text-xl font-bold">결제 정보</h2>
          <div className="space-y-4">
            <div>
              <span className="font-bold">결제 ID:</span> {paymentCapture.id}
            </div>
            <div>
              <span className="font-bold">결제 상태:</span>{" "}
              {paymentCapture.status}
            </div>
            <div>
              <span className="font-bold">결제 금액:</span>{" "}
              {paymentCapture.amount.value}{" "}
              {paymentCapture.amount.currency_code}
            </div>
            <div>
              <span className="font-bold">결제 시간:</span>{" "}
              {new Date(paymentCapture.create_time).toLocaleString()}
            </div>
            <div>
              <span className="font-bold">결제자:</span>{" "}
              {paypalData.data.payer.name.given_name}{" "}
              {paypalData.data.payer.name.surname}
            </div>
            <div>
              <span className="font-bold">결제자 이메일:</span>{" "}
              {paypalData.data.payer.email_address}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href="/"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
          >
            홈으로 이동
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCompletePage;
