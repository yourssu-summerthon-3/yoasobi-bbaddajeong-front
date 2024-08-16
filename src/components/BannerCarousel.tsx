"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import 추천조합1 from "../../public/추천조합1.svg";
import 추천조합2 from "../../public/추천조합2.svg";
import "./BannerCarousel.style.css"

export default function BannerCarousel() {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="w-full mt-2"
    >
      <SwiperSlide>
        <Image
          src={추천조합1}
          alt="추천 조합 1"
          layout="responsive"
          className="rounded-lg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={추천조합2}
          alt="추천 조합 2"
          layout="responsive"
          className="rounded-lg"
        />
      </SwiperSlide>
    </Swiper>
  );
}
