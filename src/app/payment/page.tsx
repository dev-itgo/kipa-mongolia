"use client";
// import Paypal from "@/components/payment/Paypal";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Checkbox, Label } from "flowbite-react";
import PolicyModal from "@/components/modal/PolicyModal";
import { FormData } from "@/components/main/AppForm";
import postForm from "@/utils/postForm";
import Privacy from "@/components/policy/Privacy";
import Marketing from "@/components/policy/Marketing";

const PaymentPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPrivacyAgree, setIsPrivacyAgree] = useState(false);
  const [isMarketingAgree, setIsMarketingAgree] = useState(false);
  const [isOpenPolicyModal, setIsOpenPolicyModal] = useState(false);
  const [isOpenMarketingModal, setIsOpenMarketingModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

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

  const handleBack = () => {
    router.back();
    sessionStorage.removeItem("formData");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData) {
      toast.error("데이터를 불러오는데 실패했습니다.");
      return;
    }
    if (!isPrivacyAgree || !isMarketingAgree) {
      toast.error("모든 약관에 동의해주세요.");
      return;
    }

    setIsProcessing(true);
    // Generate a unique ID for this submission
    const submissionUid = crypto.randomUUID();
    sessionStorage.setItem("submissionUid", submissionUid);

    await postForm(formData);
    toast.success("신청이 완료되었습니다.", {
      duration: 5000,
    });
    router.push("/payment/complete");
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

  const handleMasterCheck = (checked: boolean) => {
    setIsPrivacyAgree(checked);
    setIsMarketingAgree(checked);
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
            <div>
              <span className="font-bold">상담 요청 시간:</span>{" "}
              {formData.time.join(", ")}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4">
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
        <form onSubmit={handleSubmit}>
          <button
            type="button"
            className="mt-6 block w-full cursor-pointer border-1 border-white p-3 text-center font-bold"
            onClick={handleBack}
          >
            다시 작성하기
          </button>
          <button
            type="submit"
            className="mt-3 block w-full cursor-pointer bg-white p-3 font-bold text-black"
          >
            신청하기
          </button>
        </form>
        <PolicyModal
          title="개인정보 취급방침"
          open={isOpenPolicyModal}
          setOpen={setIsOpenPolicyModal}
          onAgree={handlePrivacyAgree}
          onReject={handlePrivacyReject}
        >
          <Privacy />
        </PolicyModal>
        <PolicyModal
          title="마케팅 정보 수신 동의"
          open={isOpenMarketingModal}
          setOpen={setIsOpenMarketingModal}
          onAgree={handleMarketingAgree}
          onReject={handleMarketingReject}
        >
          <Marketing />
        </PolicyModal>
      </div>
      {/* <Paypal onProcessingChange={setIsProcessing} /> */}
    </div>
  );
};

export default PaymentPage;
