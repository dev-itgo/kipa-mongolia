"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { track } from "@/utils/pixel";
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
      newErrors.name = "Нэрээ оруулна уу.";
    } else if (!/^[^0-9]{2,50}$/.test(data.name)) {
      newErrors.name =
        "Нэрийг 2-50 тэмдэгтээр, зөвхөн үсгээр оруулна уу. (тоо оруулах боломжгүй)";
    }

    // Validate age
    if (!data.birth) {
      newErrors.birth = "Төрсөн огноогоо оруулна уу.";
    } else if (
      !/^\d{4}\/((0[1-9])|(1[0-2]))\/((0[1-9])|([12][0-9])|(3[01]))$/.test(
        data.birth,
      )
    ) {
      newErrors.birth =
        "Төрсөн огноог YYYY/MM/DD дараалалаар оруулна уу. (жишээ: 1989/10/12)";
    }

    // Validate contact
    if (!data.contact) {
      newErrors.contact = "Холбогдох утасны дугаараа оруулна уу.";
    } else if (
      !/^\+?[0-9-]{4,20}$/.test(data.contact) &&
      !/^[a-zA-Z0-9._-]{4,20}$/.test(data.contact)
    ) {
      newErrors.contact = "утасны дугаарын форматаар оруулна уу.";
    }

    if (time === "") {
      newErrors.time = "Зөвлөгөө авах хүсэлтэй цагийн хуваарийг сонгоно уу.";
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
    track("Lead");

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
      toast.error("Error redirecting to payment.");
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
        Одоо захиалга хийсэн тохиолдолд зөвлөгөө үнэ төлбөргүй + гарын бэлэгтэй
      </h3>
      <form onSubmit={handleSubmit}>
        <SelectBox
          label="Зөвлөгөө авах цаг : 10:00-21:00"
          name="time"
          defaultValue=""
          error={errors.time}
          onChange={handleTimeChange}
          required
        />
        <TextInputBox
          type="text"
          label="Овог нэр"
          name="name"
          placeholder="шилжүүлэгчийн нэртэй ижил байх"
          required
          error={errors.name}
        />
        <TextInputBox
          type="text"
          label="Төрсөн он/сар/өдөр"
          name="birth"
          placeholder="(ex.1989/10/12)"
          required
          error={errors.birth}
        />
        <TextInputBox
          type="text"
          label="Утас"
          name="contact"
          placeholder="(ex.00000000)"
          required
          error={errors.contact}
        />
        <TextInputBox
          type="text"
          label="Яаралтай үед холбогдох мэдээлэл"
          name="contact2"
          placeholder="fb нэр / fb линк"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-6 block w-full cursor-pointer bg-white p-3 font-bold text-black ${
            isSubmitting ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          {isSubmitting ? "Боловсруулж байна…" : "Бүртгүүлэх"}
        </button>
      </form>
    </aside>
  );
};

export default AppForm;
