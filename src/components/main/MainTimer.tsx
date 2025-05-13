"use client";
import React, { useState, useEffect } from "react";
import { calculateTimeRemaining, END_DATE } from "@/utils/countdown";

const MainTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const initialTime = calculateTimeRemaining(END_DATE);
    setTimeLeft(initialTime);

    const timer = setInterval(() => {
      const time = calculateTimeRemaining(END_DATE);
      setTimeLeft(time);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="h-[190px] bg-[#282828] pt-7.5">
      <h4 className="text-center text-lg font-bold md:text-xl">
        시간이 지나면 [최대 10만원] 혜택이 사라져요
      </h4>
      <div className="mt-4 flex items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-1 rounded-md bg-[rgba(255,255,255,0.7)] p-4 md:w-[120px]">
          <span className="text-lg font-bold text-black md:text-2xl">
            {timeLeft.days}일
          </span>
        </div>
        <div className="flex items-center justify-center gap-1 rounded-md bg-[rgba(255,255,255,0.7)] p-4 md:w-[120px]">
          <span className="text-lg font-bold text-black md:text-2xl">
            {timeLeft.hours}시간
          </span>
        </div>
        <div className="flex items-center justify-center gap-1 rounded-md bg-[rgba(255,255,255,0.7)] p-4 md:w-[120px]">
          <span className="text-lg font-bold text-black md:text-2xl">
            {timeLeft.minutes}분
          </span>
        </div>
        <div className="flex items-center justify-center gap-1 rounded-md bg-[rgba(255,255,255,0.7)] p-4 md:w-[120px]">
          <span className="text-lg font-bold text-black md:text-2xl">
            {timeLeft.seconds}초
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainTimer;
