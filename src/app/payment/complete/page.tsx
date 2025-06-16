"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FormData } from "@/components/main/AppForm";
import { useRouter } from "next/navigation";
import ConsultFormData from "@/components/payment/ConsultFormData";

const PaymentCompletePage = () => {
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
      // Clear form data from sessionStorage after successful load
      sessionStorage.removeItem("formData");
    } catch (error) {
      console.error("Error parsing form data:", error);
      router.push("/");
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  // Prevent back navigation
  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function () {
      window.history.pushState(null, "", window.location.href);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-md">
        <div className="flex flex-col gap-10 p-4">
          {/* <h1 className="text-2xl font-bold">신청 완료 페이지</h1> */}
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
        {/* <h1 className="text-2xl font-bold">Өргөдөл амжилттай бүртгэгдлээ.</h1> */}
        <ConsultFormData formData={formData} />
        <div className="rounded-lg bg-[#181818] p-6">
          <p className="mb-4">Зөвлөгөө авах хүсэлт амжилттай илгээгдлээ.</p>
          <p className="mb-4">
            Зөвлөгөөний урьдчилгаа төлбөр баталгаажсаны дараа Захиалга
            баталгаажсан тухай мессеж авснаар эцэслэн баталгаажна. <br />
            Хэрэв төлбөр орж баталгаажаагүй бол зөвлөгөө автоматаар цуцлагдана.
          </p>
          <p className="mb-4">
            Бүх орлого бүрэн хянагдаж, Дарааллаар мэдээлэл хүргэгдэж байна.{" "}
            <br />
            Баталгаажуулахад тодорхой хугацаа шаардагдаж болзошгүй ч Та тайван
            хүлээнэ үү, баярлалаа.
          </p>
        </div>
        <div className="">
          <Link
            href="/"
            className="mt-3 block w-full cursor-pointer bg-white p-3 text-center font-bold text-black"
          >
            Нүүр хуудас руу буцах
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCompletePage;
