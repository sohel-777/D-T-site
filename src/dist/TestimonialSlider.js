import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination, } from 'swiper/modules';
import { register } from 'swiper/element/bundle';

import slide_image_2 from "./images/durga.jpg";
import slide_image_3 from "./images/durga.jpg";
import slide_image_1 from "./images/durga.jpg";
import slide_image_4 from "./images/durga.jpg";
import slide_image_5 from "./images/durga.jpg";
import slide_image_6 from "./images/durga.jpg";
import slide_image_7 from "./images/durga.jpg";

const TestimonialSlider = ({ testimonialData }) => {
  register();

  return (
    <>
      <Swiper
        effect={'coverflow'}
        loop={true}
       
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"5"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
       
        modules={[EffectCoverflow, Pagination,]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide_image_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
