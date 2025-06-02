"use client";
import { useEffect, useState } from "react";
import { scrollToAppForm } from "@/utils/scroll";
import { calculateTimeRemaining } from "@/utils/countdown";
import { generateRandomToastMessage } from "@/utils/toast";
import toast from "react-hot-toast";

const END_DATE = new Date();
END_DATE.setDate(new Date().getDate() + 1);
END_DATE.setHours(23, 59, 59, 999);

const FixedBanner = () => {
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

    let timeOut: NodeJS.Timeout | null = null;

    // 토스트 메시지 표시 함수
    const showToast = () => {
      toast.success(generateRandomToastMessage(), {
        duration: 3000,
        position: "bottom-center",
        // style: {
        //   background: "rgba(0, 0, 0, 0.8)",
        //   color: "#fff",
        //   fontSize: "14px",
        // },
      });

      // 다음 토스트 메시지를 위한 타이머 설정
      const nextTimeout = Math.random() * 10000 + 800; // 0.8초 ~ 10초
      timeOut = setTimeout(showToast, nextTimeout);
    };

    // 초기 토스트 메시지 표시
    showToast();

    return () => {
      clearInterval(timer);
      if (timeOut) {
        clearTimeout(timeOut);
      }
    };
  }, []);

  const handleApplyClick = () => {
    scrollToAppForm();
  };

  return (
    <div
      className={`fixed right-0 bottom-0 left-0 z-10 bg-black py-3 transition-transform`}
    >
      <div className="container-2xl">
        <div className="flex flex-col justify-between rounded-md bg-neutral-800 p-2.5 pl-3.5 md:flex-row md:items-center md:p-3">
          <div className="py-1 md:pl-2">
            <h4 className="mb-1 text-sm font-bold">
              📦 선착순 100명 상담비 무료 + 사은품 지급 🎁
            </h4>
            {/* <p className="text-xs">
              부담 없이 신청하고, 사은품까지 받아가는 절호의 기회 놓치지 마세요!
            </p> */}
          </div>
          <div className="flex w-full items-center justify-between gap-8 md:w-auto">
            <div className="flex items-center gap-1 text-xs">
              마감까지
              <span className="inline-block rounded-sm bg-black p-1 text-[#00B8FF]">
                {timeLeft.hours}시간
              </span>
              <span className="inline-block rounded-sm bg-black p-1 text-[#00B8FF]">
                {timeLeft.minutes}분
              </span>
              남음
            </div>
            <button
              className="cursor-pointer rounded-md bg-white px-5 py-3 text-sm font-bold text-black md:p-3.5"
              onClick={handleApplyClick}
            >
              지금 신청하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedBanner;
