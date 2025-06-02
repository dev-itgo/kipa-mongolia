/* eslint-disable jsx-a11y/alt-text */
"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { MainPointImage } from "@/data/points";
import { Autoplay } from "swiper/modules";

type MainPointSwiperProps = {
  images: MainPointImage[];
};

const MainPointSwiper = ({ images }: MainPointSwiperProps) => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: true }}
      speed={1000}
    >
      {images.map((img) => (
        <SwiperSlide key={img.src}>
          <div className="aspect-[4/3] md:aspect-video">
            <Image {...img} className="h-full w-full object-cover" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainPointSwiper;
