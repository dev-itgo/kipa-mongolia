"use client";
import { scrollToAppForm } from "@/utils/scroll";
import { track } from "@/utils/pixel";

const MainCouponApplyButton = () => {
  const handleApplyClick = () => {
    scrollToAppForm();
    track("Lead");
  };
  return (
    <button
      className="w-full cursor-pointer bg-[#00b0fb] p-2 font-bold text-white md:p-3 md:text-[16px]"
      onClick={handleApplyClick}
    >
      Одоо бүртгүүлэх
    </button>
  );
};

export default MainCouponApplyButton;
