"use client";
import Image from "next/image";
import { Autoplay, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const images = [
  "/keyvisual/kipa-main-kv01.webp",
  "/keyvisual/kipa-main-kv02.webp",
  "/keyvisual/kipa-main-kv03.webp",
  "/keyvisual/kipa-main-kv04.webp",
  "/keyvisual/kipa-main-kv05.webp",
];

const KeyVisualSwiper = () => {
  return (
    <Swiper
      modules={[Autoplay, Parallax]}
      autoplay={{ delay: 3000, disableOnInteraction: true }}
      speed={1000}
      parallax={true}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} data-swiper-parallax-x="-23%">
          <div className="aspect-[4/3] overflow-hidden md:aspect-[8/3]">
            <Image
              src={image}
              alt="Key Visual"
              width={1440}
              height={1440}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default KeyVisualSwiper;
