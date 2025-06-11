"use client";
// import Paypal from "@/components/payment/Paypal";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Checkbox, Label } from "flowbite-react";
import { FormData } from "@/components/main/AppForm";
import postForm from "@/utils/postForm";
import ConsultFormData from "@/components/payment/ConsultFormData";
import ConsultRadio from "@/components/form/ConsultRadio";
import ConsultCheckbox from "@/components/form/ConsultCheckbox";

const PaymentPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAgree, setIsAgree] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [consult1, setConsult1] = useState<string>("");
  const [consult23, setConsult23] = useState<string[]>([]);
  const [etcText1, setEtcText1] = useState<string>("");
  const [etcText23, setEtcText23] = useState<string>("");
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Get form data from sessionStorage
    const storedData = sessionStorage.getItem("formData");
    if (!storedData) {
      // If no form data exists, redirect to home page
      router.push("/");
      return;
    }

    // Check if there's an existing submission
    const existingUid = sessionStorage.getItem("submissionUid");
    if (existingUid) {
      router.push("/payment/complete");
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

  useEffect(() => {
    if (isProcessing) {
      window.scrollTo(0, 0);
    }
  }, [isProcessing]);

  // Check form validity whenever consult fields change
  useEffect(() => {
    const isValid = Boolean(consult1 && consult23.length > 0);
    setIsFormValid(isValid);
  }, [consult1, consult23]);

  const handleBack = () => {
    router.back();
    sessionStorage.removeItem("formData");
  };

  const handleConsult1Change = (value: string, etcText?: string) => {
    if (value === "기타: ") {
      if (etcText) {
        setEtcText1(etcText);
        setConsult1(value + etcText);
      } else {
        setEtcText1("");
        setConsult1(value);
      }
    } else {
      setEtcText1("");
      setConsult1(value);
    }
  };

  const handleConsult23Change = (
    value: string,
    checked: boolean,
    etcText?: string,
  ) => {
    if (checked) {
      // 기타가 이미 있는지 확인 - consult23에서 확인해야 함
      const hasEtc = consult23.some((item) => item.startsWith("기타: "));

      if (value === "기타: " && !hasEtc) {
        if (etcText) {
          setEtcText23(etcText);
          setConsult23([...consult23, value + etcText]);
        } else {
          setConsult23([...consult23, value]);
        }
      } else if (value === "기타: " && hasEtc && etcText) {
        // 기존 기타 항목을 업데이트
        const updatedConsult23 = consult23.map((item) =>
          item.startsWith("기타: ") ? value + etcText : item,
        );
        setEtcText23(etcText);
        setConsult23(updatedConsult23);
      } else if (value !== "기타: ") {
        setConsult23([...consult23, value]);
      }
    } else {
      if (value === "기타: ") {
        setConsult23(consult23.filter((item) => !item.startsWith("기타: ")));
        setEtcText23("");
      } else {
        setConsult23(consult23.filter((item) => item !== value));
      }
    }
  };

  const validateConsultFields = (): boolean => {
    const newErrors: Partial<Record<string, string>> = {};

    // Validate consult1 (radio button - required)
    if (!consult1) {
      newErrors.consult1 = "상담 내용을 선택해주세요.";
    }

    // Validate consult23 (checkbox - at least one required)
    if (!consult23 || consult23.length === 0) {
      newErrors.consult23 = "상담 내용을 최소 1개 이상 선택해주세요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData) {
      toast.error("데이터를 불러오는데 실패했습니다.");
      return;
    }
    if (!isAgree) {
      toast.error("약관에 동의해주세요.");
      return;
    }

    // Validate consult fields
    if (!validateConsultFields()) {
      return;
    }

    setIsProcessing(true);
    // Generate a unique ID for this submission
    const submissionUid = crypto.randomUUID();
    sessionStorage.setItem("submissionUid", submissionUid);

    // Update formData with consult fields
    const completeFormData = {
      ...formData,
      consult1,
      consult23,
      etcText1,
      etcText23,
    };

    await postForm(completeFormData);
    toast.success("신청이 완료되었습니다.", {
      duration: 5000,
    });
    router.push("/payment/complete");
  };

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-md">
        <div className="flex flex-col gap-10 p-4">
          <h1 className="text-2xl font-bold">신청 페이지</h1>
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

  if (isProcessing) {
    return (
      <div className="container mx-auto max-w-md">
        <div className="flex h-screen items-center justify-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline h-10 w-10 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
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
        <ConsultFormData formData={{ ...formData!, consult1, consult23 }} />

        {/* 상담 분야 선택 섹션 */}
        <div className="rounded-lg bg-[#181818] p-6">
          <h2 className="mb-4 text-xl font-bold">상담 분야 선택</h2>
          <div className="space-y-4">
            <div>
              <ConsultRadio value={consult1} onChange={handleConsult1Change} />
              {errors.consult1 && (
                <p className="mt-1 text-sm text-red-500">{errors.consult1}</p>
              )}
            </div>
            <div>
              <ConsultCheckbox
                value={consult23}
                onChange={handleConsult23Change}
              />
              {errors.consult23 && (
                <p className="mt-1 text-sm text-red-500">{errors.consult23}</p>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-[#181818] p-6 font-bold">
          <h2 className="mb-4 text-xl">예약금 입금 안내</h2>
          <p className="mb-4">
            ✉️ 입금 계좌 정보: <br />
            입금 계좌 정보 : Khan Bank 5133150834 (Ж. Цэнгэлмаа)
            <br />
            입금 금액 : ₮50,000 MNT 계좌입금 할 때, 이름/전화번호/예약시간을
            작성해서 보내주셔야 합니다.
          </p>
          <h3>✅ 입금 유의사항</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li className="">
              입금자명 기준으로 예약이 확인되며, 입금 순서에 따라 상담 시간이
              배정됩니다.
            </li>
            <li className="">
              예약금은 상담회 당일 노쇼 방지를 위한 용도이며, 참석 시 전액
              환불됩니다.
            </li>
            <li className="">
              상담회 미참석 시 예약금은 환불되지 않으니 이 점 꼭 유의해 주세요.
            </li>
          </ul>
          <p className="mt-4">
            입금 후, 반드시 페이스북 메시지로 입금 안내 메시지를 보내주세요.
            <br />
            👉{" "}
            <a
              href="https://www.facebook.com/profile.php?id=61574271616315&locale=ko_KR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00b0fb] underline"
            >
              KIPA 몽골 페이스북 링크
            </a>
          </p>
        </div>
      </div>
      <div className="px-4">
        <div className="mt-6 bg-[#181818] p-4">
          <div className="flex items-center">
            <Checkbox
              id="agree-check"
              className="bg-transparent"
              checked={isAgree}
              onChange={(e) => setIsAgree(e.target.checked)}
              required
            />
            <Label htmlFor="agree-check" className="ml-2 text-sm text-white">
              <span className="text-xs">
                위 내용을 확인했으며 신청에 동의합니다
              </span>
              <span className="text-[10px] text-gray-400"> (필수)</span>
            </Label>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            disabled={!isAgree || !isFormValid}
            className={`mt-6 block w-full p-3 font-bold text-white ${
              isAgree && isFormValid
                ? "cursor-pointer bg-[#00b0fb]"
                : "cursor-not-allowed bg-gray-500"
            }`}
          >
            신청하기
          </button>
          <button
            type="button"
            className="mt-3 block w-full cursor-pointer p-3 text-center font-bold"
            onClick={handleBack}
          >
            다시 작성하기
          </button>
        </form>
      </div>
      {/* <Paypal onProcessingChange={setIsProcessing} /> */}
    </div>
  );
};

export default PaymentPage;
