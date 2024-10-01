"use client"; // Ensure this line is present for Next.js

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { reviews } from "@/utils/data";
import ReviewCard from "./ReviewCard";
import SwiperNavButton from "./SwipperNavButton";

interface Details{
    number:number;
    tailwindValue:string
}

const Slide = ({number,tailwindValue}:Details) => {

  return (
    <Swiper
      // Cast the style prop to extend CSSProperties with custom variables
      style={
        {
          "--swiper-navigation-color": "000",
          "--swiper-navigation-size": "20px",
        } as React.CSSProperties
      }
      slidesPerView={1}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1300: {
          slidesPerView: number, // Adjust to your desired value
          spaceBetween: 20,
        },
      }}
      navigation={false}
      modules={[Autoplay, Navigation]}
      className={tailwindValue}
    >
        {
            reviews.map((review,index)=>(
                <SwiperSlide key={index}>
                    <ReviewCard rating={12} id={review.id} review={review.review} image={review.image} name={review.name} dep={review.dep}  />

                </SwiperSlide>
            ))
        }
        <SwiperNavButton/>
      
    </Swiper>
  );
};

export default Slide;
