"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import MainReviewItem from "./MainReviewItem";
import { ReviewData } from "@/data/review";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type MainReviewsSwiperProps = {
  data: ReviewData[];
};

const MainReviewsSwiper = ({ data }: MainReviewsSwiperProps) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000, disableOnInteraction: true }}
      speed={1000}
      pagination={{
        dynamicBullets: true,
      }}
      className="reviews-swiper"
    >
      {data.map((review) => (
        <SwiperSlide key={review.id}>
          <MainReviewItem {...review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainReviewsSwiper;
