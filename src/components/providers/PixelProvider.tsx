"use client";
import dynamic from "next/dynamic";

const PixelTracker = dynamic(() => import("./PixelTracker"), { ssr: false });

const PixelProvider = () => {
  return <PixelTracker />;
};

export default PixelProvider;
