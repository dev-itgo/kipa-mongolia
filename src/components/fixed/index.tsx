"use client";
import { scrollToAppForm } from "@/utils/scroll";
import { useEffect, useState, useCallback, useRef } from "react";

const FixedBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY.current) {
      // Scrolling up
      setIsVisible(true);
    } else {
      // Scrolling down
      setIsVisible(false);
    }

    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleApplyClick = () => {
    scrollToAppForm();
  };

  return (
    <div
      className={`fixed right-0 bottom-0 left-0 bg-black py-3 transition-transform ${isVisible ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="container-2xl">
        <div className="flex flex-col items-center justify-between rounded-md bg-[#333] p-3 md:flex-row">
          <div className="mb-2 md:mb-0 md:pl-2">
            <h4 className="mb-1 text-sm font-bold">
              📦 선착순 100명 상담비 무료 + 사은품 지급 🎁
            </h4>
            <p className="text-xs">
              부담 없이 신청하고, 사은품까지 받아가는 절호의 기회 놓치지 마세요!
            </p>
          </div>
          <div className="flex w-full items-center justify-between gap-8 md:w-auto">
            <div className="flex items-center gap-1 text-xs">
              마감까지
              <span className="inline-block rounded-sm bg-black p-1 text-[#00B8FF]">
                0일
              </span>
              <span className="inline-block rounded-sm bg-black p-1 text-[#00B8FF]">
                5시간
              </span>
              <span className="inline-block rounded-sm bg-black p-1 text-[#00B8FF]">
                47분
              </span>
              남음
            </div>
            <button
              className="rounded-md bg-white p-2 text-xs font-bold text-black md:p-3.5 md:text-sm"
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
