"use client";
import toast from "react-hot-toast";
import { MdOutlineContentCopy } from "react-icons/md";

const COPY_ADDRESS =
  "Энх Тайваны Өргөн Чөлөө 17 Блю Скай Цамхаг, СБД - 1 хороо, Улаанбаатар 14240";

const MainLocationCopyBtn = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(COPY_ADDRESS);
    toast.success("주소가 복사되었습니다.");
  };

  return (
    <button
      className="flex cursor-pointer items-center gap-2 rounded-md border-1 border-white px-5 py-3 text-sm font-bold hover:bg-neutral-800 md:p-3.5"
      onClick={handleCopy}
    >
      <MdOutlineContentCopy />
      주소 복사
    </button>
  );
};

export default MainLocationCopyBtn;
