import React from "react";

const MainTimer = () => {
  return (
    <div className="h-[190px] bg-[#282828] pt-7.5">
      <h4 className="text-center text-lg font-bold md:text-xl">
        시간이 지나면 [최대 10만원] 혜택이 사라져요
      </h4>
      <div className="mt-4 flex items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-1 rounded-md bg-[rgba(255,255,255,0.7)] p-4 md:w-[120px]">
          <span className="text-lg font-bold text-black md:text-2xl">0일</span>
        </div>
        <div className="flex items-center justify-center gap-1 rounded-md bg-[rgba(255,255,255,0.7)] p-4 md:w-[120px]">
          <span className="text-lg font-bold text-black md:text-2xl">
            5시간
          </span>
        </div>
        <div className="flex items-center justify-center gap-1 rounded-md bg-[rgba(255,255,255,0.7)] p-4 md:w-[120px]">
          <span className="text-lg font-bold text-black md:text-2xl">47분</span>
        </div>
        <div className="flex items-center justify-center gap-1 rounded-md bg-[rgba(255,255,255,0.7)] p-4 md:w-[120px]">
          <span className="text-lg font-bold text-black md:text-2xl">1초</span>
        </div>
      </div>
    </div>
  );
};

export default MainTimer;
