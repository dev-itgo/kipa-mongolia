"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import TextInputBox from "@/components/form/TextInputBox";
import SelectBox from "../form/SelectBox";
import { IoIosClose } from "react-icons/io";
import ConsultCheckbox from "../form/CounsultCheckbox";

export interface FormData {
  time: string[];
  name: string;
  birth: string;
  contact: string;
  contact2?: string;
  consult: string[];
  etcText?: string;
}

const AppForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );
  const [times, setTimes] = useState<string[]>([]);
  const [consult, setConsult] = useState<string[]>([]);
  const [etcText, setEtcText] = useState<string>("");

  const handleConsultChange = (
    value: string,
    checked: boolean,
    etcText?: string,
  ) => {
    if (checked) {
      // 기타가 이미 있는지 확인
      const hasEtc = consult.includes("기타: ");
      if (value === "기타: " && !hasEtc) {
        setConsult([...consult, value]);
      } else if (value !== "기타: ") {
        setConsult([...consult, value]);
      }
      if (value === "기타: " && etcText) {
        setEtcText(etcText);
      }
    } else {
      setConsult(consult.filter((item) => item !== value));
      if (value === "기타: ") {
        setEtcText("");
      }
    }
  };

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
    } else if (!/^[0-9]{8}$/.test(data.birth)) {
      newErrors.birth = "생년월일은 8자리의 숫자만 입력 가능합니다.";
    }

    // Validate contact
    if (!data.contact) {
      newErrors.contact = "연락처를 입력해주세요.";
    } else if (
      !/^\+?[0-9-]{4,20}$/.test(data.contact) &&
      !/^[a-zA-Z0-9._-]{4,20}$/.test(data.contact)
    ) {
      newErrors.contact = "올바른 전화번호 형식 또는 LINE ID를 입력해주세요.";
    }

    if (times.length === 0) {
      newErrors.time = "상담 요청 시간을 선택해주세요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTime = e.target.value;
    if (selectedTime !== "") {
      setTimes([...times, selectedTime]);
    }
  };

  const handleDeleteTime = (timeToDelete: string) => {
    setTimes(times.filter((time) => time !== timeToDelete));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      name: formData.get("name") as string,
      birth: formData.get("birth") as string,
      contact: formData.get("contact") as string,
      time: times,
      consult,
      etcText,
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
      className="mb-6 flex-1 [scrollbar-color:theme(colors.neutral.800)_transparent] [scrollbar-width:thin] xl:sticky xl:top-17 xl:h-[calc(100dvh-164px)] xl:max-w-[340px] xl:overflow-auto [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb:hover]:bg-gray-500 [&::-webkit-scrollbar-track]:bg-transparent"
      id="app-form"
    >
      <h3 className="mb-4 text-lg font-bold break-keep">
        지금 신청 하면 사은품 증정 및 참가비 무료
      </h3>
      <form onSubmit={handleSubmit}>
        <TextInputBox
          type="text"
          label="이름"
          name="name"
          placeholder="이름을 입력해주세요."
          required
          error={errors.name}
        />
        <TextInputBox
          type="text"
          label="생년월일"
          name="birth"
          placeholder="나이를 입력해주세요."
          required
          error={errors.birth}
        />
        <TextInputBox
          type="text"
          label="연락처"
          name="contact"
          placeholder="연락처"
          required
          error={errors.contact}
        />
        <TextInputBox
          type="text"
          label="비상연락망"
          name="contact2"
          placeholder="(연락처 / 바이브ID / 페이스북 계정명)"
        />
        <ConsultCheckbox value={consult} onChange={handleConsultChange} />
        <SelectBox
          label="상담 요청 시간"
          name="time"
          defaultValue=""
          error={errors.time}
          onChange={handleTimeChange}
        />
        <div className="mt-2 space-y-2">
          {times.map((time) => (
            <div
              key={time}
              className="flex items-center justify-between rounded bg-gray-800 p-2"
            >
              <span>6월 29일(일) / {time}</span>
              <button
                type="button"
                onClick={() => handleDeleteTime(time)}
                className="text-red-500 hover:text-red-700"
              >
                <IoIosClose size={24} />
              </button>
            </div>
          ))}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-6 block w-full cursor-pointer bg-white p-3 font-bold text-black ${
            isSubmitting ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          {isSubmitting ? "신청 중..." : "신청하기"}
        </button>
      </form>
    </aside>
  );
};

export default AppForm;
