"use client";
import { scrollToAppForm } from "@/utils/scroll";
import { track } from "@/utils/pixel";

const HeaderApplyButton = () => {
  const handleApplyClick = () => {
    scrollToAppForm();
    track("Lead");
  };

  return (
    <button className="cursor-pointer text-white" onClick={handleApplyClick}>
      <span>Одоо бүртгүүлэх</span>
    </button>
  );
};

export default HeaderApplyButton;
