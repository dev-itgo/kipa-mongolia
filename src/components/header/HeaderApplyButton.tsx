"use client";

import { scrollToAppForm } from "@/utils/scroll";

const HeaderApplyButton = () => {
  const handleApplyClick = () => {
    scrollToAppForm();
  };

  return (
    <button className="cursor-pointer text-white" onClick={handleApplyClick}>
      <span>Одоо бүртгүүлэх</span>
    </button>
  );
};

export default HeaderApplyButton;
