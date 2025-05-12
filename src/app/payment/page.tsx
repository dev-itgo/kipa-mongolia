"use client";
import Paypal from "@/components/payment/Paypal";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  age: string;
  contact: string;
  etc?: string;
}

const PaymentPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get form data from sessionStorage
    const storedData = sessionStorage.getItem("formData");
    if (!storedData) {
      // If no form data exists, redirect to home page
      router.push("/");
      return;
    }

    try {
      const parsedData = JSON.parse(storedData);
      setFormData(parsedData);
    } catch (error) {
      console.error("Error parsing form data:", error);
      router.push("/");
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-md">
        <div className="flex flex-col gap-10 p-4">
          <h1 className="text-2xl font-bold">결제 페이지</h1>
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

  if (!formData) {
    return null;
  }

  return (
    <div className="container mx-auto max-w-md">
      <div className="mb-5 flex flex-col gap-10 p-4">
        <h1 className="text-2xl font-bold">결제 페이지</h1>

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
        <Paypal />
      </div>
    </div>
  );
};

export default PaymentPage;
