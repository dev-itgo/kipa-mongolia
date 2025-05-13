"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import TextInputBox from "@/components/form/TextInputBox";
import SelectBox from "../form/SelectBox";
import { IoIosClose } from "react-icons/io";

export interface FormData {
  name: string;
  age: string;
  contact: string;
  time: string[];
}

const AppForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );
  const [times, setTimes] = useState<string[]>([]);

  const validateForm = (data: FormData): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    // Validate name
    if (!data.name) {
      newErrors.name = "이름을 입력해주세요.";
    } else if (!/^[^0-9]{2,50}$/.test(data.name)) {
      newErrors.name = "이름은 2-50자의 문자만 입력 가능합니다. (숫자 제외)";
    }

    // Validate age
    if (!data.age) {
      newErrors.age = "나이를 입력해주세요.";
    } else {
      const numAge = parseInt(data.age);
      if (isNaN(numAge) || numAge < 1 || numAge > 100) {
        newErrors.age = "나이는 1-100 사이의 숫자만 입력 가능합니다.";
      }
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
      age: formData.get("age") as string,
      contact: formData.get("contact") as string,
      time: times,
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
      className="mb-6 flex-1 md:sticky md:top-17 md:max-w-[340px]"
      id="app-form"
    >
      <h3 className="mb-4 text-2xl font-bold break-keep">
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
          type="number"
          label="나이"
          name="age"
          placeholder="나이를 입력해주세요."
          min={2}
          max={100}
          required
          error={errors.age}
        />
        <TextInputBox
          type="text"
          label="바이버 & 연락처"
          name="contact"
          placeholder="바이버 & 연락처"
          required
          error={errors.contact}
        />
        {/* <TextInputBox
          type="text"
          label="기타 문의사항"
          name="etc"
          placeholder="문의사항을 입력해주세요."
        /> */}
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
              <span>{time}</span>
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
