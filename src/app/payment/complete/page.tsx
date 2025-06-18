"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { track } from "@/utils/pixel";
import { FormData } from "@/components/main/AppForm";
import ConsultFormComplete from "@/components/payment/ConsultFormComplete";

const PaymentCompletePage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleViewContent = () => {
    track("ViewContent");
  };

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
        <ConsultFormComplete formData={formData} />
        <div className="rounded-lg bg-[#181818] p-6">
          <h3 className="mb-3 font-bold">
            ✅ Захиалга утга дээрх нэрээр баталгаажна, Төлбөрийн дарааллаар цаг
            хуваарилна.
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li className="">
              Зөвлөгөөнд ирсэн тохиолдолд 100% буцаан олгоно.
            </li>
            <li className="">
              Ирээгүй тохиолдолд төлбөр буцаагдахгүйг анхаарна уу.
            </li>
            <li className="">
              Фэйсбүүк чатаар Барьцаа төлбөр явуулсан мэдээлэл явуулбал цаг
              баталгаажуулаад эргээд хэлэх болно.
            </li>
            <li className="">
              Гүйлгээ хийгээд, Заавал Фэйсбүүк чатаар зургийг нь явуулж
              баталгаажуулна уу.
            </li>
          </ul>
        </div>
        <div className="">
          <a
            href="https://www.facebook.com/profile.php?id=61574271616315"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block w-full cursor-pointer bg-white p-3 text-center font-bold text-black"
            onClick={handleViewContent}
          >
            KiPAгийн албан ёсны Facebook пэйжруу баримтын зургаа явуулах
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentCompletePage;
