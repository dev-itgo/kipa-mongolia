"use client";

import { scrollToAppForm } from "@/utils/scroll";

const HeaderApplyButton = () => {
  const handleApplyClick = () => {
    scrollToAppForm();
  };

  return (
    <button className="cursor-pointer text-white" onClick={handleApplyClick}>
      <span>지금 신청하기</span>
    </button>
  );
};

export default HeaderApplyButton;
