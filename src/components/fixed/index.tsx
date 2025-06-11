"use client";
import { useEffect } from "react";
import { scrollToAppForm } from "@/utils/scroll";
import toast from "react-hot-toast";

const FixedBanner = () => {
  useEffect(() => {
    let timeOut: NodeJS.Timeout | null = null;

    // 현재 보고 있는 사람 수를 랜덤하게 생성하는 함수
    const generateViewersMessage = () => {
      const viewersCount = Math.floor(Math.random() * 41) + 10; // 10~50명 사이
      return `현재 ${viewersCount}명이 신청중입니다.`;
    };

    // 토스트 메시지 표시 함수
    const showToast = () => {
      toast.success(generateViewersMessage(), {
        duration: 10000,
        position: "bottom-center",
        // style: {
        //   background: "rgba(0, 0, 0, 0.8)",
        //   color: "#fff",
        //   fontSize: "14px",
        // },
      });

      // 다음 토스트 메시지를 위한 타이머 설정
      const nextTimeout = Math.random() * 20000 + 10000; // 10초 ~ 30초
      timeOut = setTimeout(showToast, nextTimeout);
    };

    // 5초 후에 첫 번째 토스트 메시지 표시
    timeOut = setTimeout(showToast, 2000);

    return () => {
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
        <div className="rounded-md bg-neutral-800 p-2.5 pl-3.5 md:p-3">
          <div className="flex w-full items-center justify-between gap-8 md:w-auto">
            <div className="py-1 md:pl-2">
              <h4 className="mb-1 text-sm font-bold">
                📦 선착순 100명 상담비 무료 + 사은품 지급 🎁
              </h4>
            </div>
            <button
              className="shrink-0 cursor-pointer rounded-md bg-white px-5 py-3 text-sm font-bold text-black md:p-3.5"
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
