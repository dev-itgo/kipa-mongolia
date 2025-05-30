"use client";
import Image from "next/image";
import { Autoplay, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const images = [
  "https://fastly.picsum.photos/id/805/1440/1440.jpg?hmac=gP0jIOEu9npER7tI7uMBtzmctbQFAsUfd2d3j5FvRx8",
  "https://fastly.picsum.photos/id/688/1440/1440.jpg?hmac=-qK3XoBqyUeaZieAKFZQ4piNcEvW4okF6PUNekUwvbM",
  "https://fastly.picsum.photos/id/961/1440/1440.jpg?hmac=5rUYg78LsEA6jmroIj9mHf_6HYO9zr2dEnf0pqZBwhw",
  "https://fastly.picsum.photos/id/435/1440/1440.jpg?hmac=xBssH7rVwaIpTvpH8lRV7jNvdGSK_IaRX2Ya3nQ3tTE",
  "https://fastly.picsum.photos/id/204/1440/1440.jpg?hmac=xLolIe8tCu5LAGFT5jcpEVLz7vyGtjbXcg5MuGKGtzc",
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
          <div className="h-[480px] overflow-hidden">
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
