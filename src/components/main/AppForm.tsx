"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import TextInputBox from "@/components/form/TextInputBox";
import SelectBox from "../form/SelectBox";

export interface FormData {
  time: string;
  name: string;
  birth: string;
  contact: string;
  contact2?: string;
  consult1?: string;
  consult23?: string[];
  etcText1?: string;
  etcText23?: string;
}

const AppForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );
  const [time, setTime] = useState<string>("");

  const validateForm = (data: FormData): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    // Validate name
    if (!data.name) {
      newErrors.name = "이름을 입력해주세요.";
    } else if (!/^[^0-9]{2,50}$/.test(data.name)) {
      newErrors.name = "이름은 2-50자의 문자만 입력 가능합니다. (숫자 제외)";
    }

    // Validate age
    if (!data.birth) {
      newErrors.birth = "생년월일을 입력해주세요.";
    } else if (
      !/^\d{4}\/((0[1-9])|(1[0-2]))\/((0[1-9])|([12][0-9])|(3[01]))$/.test(
        data.birth,
      )
    ) {
      newErrors.birth =
        "생년월일은 YYYY/MM/DD 형식으로 입력해주세요. (ex.1989/10/12)";
    }

    // Validate contact
    if (!data.contact) {
      newErrors.contact = "연락처를 입력해주세요.";
    } else if (
      !/^\+?[0-9-]{4,20}$/.test(data.contact) &&
      !/^[a-zA-Z0-9._-]{4,20}$/.test(data.contact)
    ) {
      newErrors.contact = "올바른 전화번호 형식을 입력해주세요.";
    }

    if (time === "") {
      newErrors.time = "상담 요청 시간을 선택해주세요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTime = e.target.value;
    if (selectedTime !== "") {
      setTime(selectedTime);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      name: formData.get("name") as string,
      birth: formData.get("birth") as string,
      contact: formData.get("contact") as string,
      contact2: formData.get("contact2") as string,
      time,
    };

    if (!validateForm(data)) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Store form data in sessionStorage
      sessionStorage.setItem("formData", JSON.stringify(data));

      // Redirect to payment page
      router.push("/payment");
    } catch (error) {
      console.error("Error redirecting to payment:", error);
      toast.error("페이지 이동 중 오류가 발생했습니다. 다시 시도 해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <aside
      className="mb-6 flex-1 [scrollbar-color:theme(colors.neutral.800)_transparent] [scrollbar-width:thin] xl:sticky xl:top-4 xl:h-[calc(100dvh-114px)] xl:max-w-[340px] xl:overflow-auto [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb:hover]:bg-gray-500 [&::-webkit-scrollbar-track]:bg-transparent"
      id="app-form"
    >
      <h3 className="mb-4 text-lg font-bold break-keep md:text-2xl">
        지금 신청 하면 사은품 증정 및 참가비 무료
      </h3>
      <form onSubmit={handleSubmit}>
        <SelectBox
          label="상담 요청 시간"
          name="time"
          defaultValue=""
          error={errors.time}
          onChange={handleTimeChange}
          required
        />
        <TextInputBox
          type="text"
          label="이름"
          name="name"
          placeholder="예약자와 입금자명이 일치해야 합니다"
          required
          error={errors.name}
        />
        <TextInputBox
          type="text"
          label="생년월일"
          name="birth"
          placeholder="(ex.1989/10/12)"
          required
          error={errors.birth}
        />
        <TextInputBox
          type="text"
          label="연락처"
          name="contact"
          placeholder="(ex.00000000)"
          required
          error={errors.contact}
        />
        <TextInputBox
          type="text"
          label="비상연락망 (ex. Kipa-fair)"
          name="contact2"
          placeholder="(페이스북 계정명/페이스북 링크)"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-6 block w-full cursor-pointer bg-white p-3 font-bold text-black ${
            isSubmitting ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          {isSubmitting ? "처리 중..." : "신청하기"}
        </button>
      </form>
    </aside>
  );
};

export default AppForm;
