"use client";
import { scrollToAppForm } from "@/utils/scroll";

const MainCouponApplyButton = () => {
  const handleApplyClick = () => {
    scrollToAppForm();
  };
  return (
    <button
      className="w-full cursor-pointer bg-[#00b0fb] p-2 font-bold text-white md:p-3 md:text-[16px]"
      onClick={handleApplyClick}
    >
      지금 신청하기
    </button>
  );
};

export default MainCouponApplyButton;
