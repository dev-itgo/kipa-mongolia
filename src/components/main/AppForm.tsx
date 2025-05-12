"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Checkbox, Label } from "flowbite-react";
import TextInputBox from "@/components/form/TextInputBox";
import PolicyModal from "@/components/modal/PolicyModal";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  age: string;
  contact: string;
  etc?: string;
}

const AppForm = () => {
  const router = useRouter();
  const [isPrivacyAgree, setIsPrivacyAgree] = useState(false);
  const [isMarketingAgree, setIsMarketingAgree] = useState(false);
  const [isOpenPolicyModal, setIsOpenPolicyModal] = useState(false);
  const [isOpenMarketingModal, setIsOpenMarketingModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );

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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!isPrivacyAgree || !isMarketingAgree) {
      toast.error("모든 약관에 동의해주세요.");
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      name: formData.get("name") as string,
      age: formData.get("age") as string,
      contact: formData.get("contact") as string,
      etc: formData.get("etc") as string,
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

  const handleMasterCheck = (checked: boolean) => {
    setIsPrivacyAgree(checked);
    setIsMarketingAgree(checked);
  };

  const handlePrivacyAgree = () => {
    setIsPrivacyAgree(true);
    setIsOpenPolicyModal(false);
  };

  const handleMarketingAgree = () => {
    setIsMarketingAgree(true);
    setIsOpenMarketingModal(false);
  };

  const handlePrivacyReject = () => {
    setIsPrivacyAgree(false);
    setIsOpenPolicyModal(false);
  };

  const handleMarketingReject = () => {
    setIsMarketingAgree(false);
    setIsOpenMarketingModal(false);
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
          required
          error={errors.age}
        />
        <TextInputBox
          type="text"
          label="LINE ID or 연락처"
          name="contact"
          placeholder="LINE ID or 연락처"
          required
          error={errors.contact}
        />
        <TextInputBox
          type="text"
          label="기타 문의사항"
          name="etc"
          placeholder="문의사항을 입력해주세요."
        />

        <div className="mt-6 flex items-center">
          <Checkbox
            id="master-check"
            className="bg-transparent"
            checked={isPrivacyAgree && isMarketingAgree}
            onChange={(e) => handleMasterCheck(e.target.checked)}
          />
          <Label htmlFor="master-check" className="ml-2 text-[15px] text-white">
            전체 이용약관에 동의
          </Label>
        </div>
        <div className="mt-4 space-y-3 bg-[#181818] p-4">
          <div className="flex items-center">
            <Checkbox
              id="privacy-check"
              className="bg-transparent"
              checked={isPrivacyAgree}
              onChange={(e) => setIsPrivacyAgree(e.target.checked)}
              required
            />
            <Label htmlFor="privacy-check" className="ml-2 text-sm text-white">
              <span className="text-xs">개인정보 취급방침 동의</span>
              <span className="text-[10px] text-gray-400"> (필수)</span>
            </Label>
            <span
              className="ml-2 cursor-pointer text-xs text-gray-400"
              onClick={() => setIsOpenPolicyModal(true)}
            >
              자세히 보기
            </span>
          </div>

          <div className="flex items-center">
            <Checkbox
              id="marketing-check"
              className="bg-transparent"
              checked={isMarketingAgree}
              onChange={(e) => setIsMarketingAgree(e.target.checked)}
              required
            />
            <Label
              htmlFor="marketing-check"
              className="ml-2 text-sm text-white"
            >
              <span className="text-xs">마케팅 정보 수신 동의</span>
              <span className="text-[10px] text-gray-400"> (필수)</span>
            </Label>
            <span
              className="ml-2 cursor-pointer text-xs text-gray-400"
              onClick={() => setIsOpenMarketingModal(true)}
            >
              자세히 보기
            </span>
          </div>
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
      <PolicyModal
        title="개인정보 취급방침"
        open={isOpenPolicyModal}
        setOpen={setIsOpenPolicyModal}
        onAgree={handlePrivacyAgree}
        onReject={handlePrivacyReject}
      >
        <p className="text-black">개인정보 취급방침</p>
      </PolicyModal>
      <PolicyModal
        title="마케팅 정보 수신 동의"
        open={isOpenMarketingModal}
        setOpen={setIsOpenMarketingModal}
        onAgree={handleMarketingAgree}
        onReject={handleMarketingReject}
      >
        <p className="text-black">마케팅 정보 수신 동의</p>
      </PolicyModal>
    </aside>
  );
};

export default AppForm;
