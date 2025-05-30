"use client";

import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

export default function ToastProvider() {
  const [bottom, setBottom] = useState(136);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBottom(125);
      } else {
        setBottom(90);
      }
    };

    // 초기 설정
    handleResize();

    // 리사이즈 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 클린업
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Toaster
      position="bottom-center"
      containerStyle={{
        top: 20,
        left: 20,
        bottom,
        right: 20,
      }}
    />
  );
}
