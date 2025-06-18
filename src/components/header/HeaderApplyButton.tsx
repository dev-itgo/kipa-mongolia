"use client";
import ReactPixel from "react-facebook-pixel";
import { scrollToAppForm } from "@/utils/scroll";

const HeaderApplyButton = () => {
  const handleApplyClick = () => {
    scrollToAppForm();
    ReactPixel.track("Lead");
  };

  return (
    <button className="cursor-pointer text-white" onClick={handleApplyClick}>
      <span>Одоо бүртгүүлэх</span>
    </button>
  );
};

export default HeaderApplyButton;
