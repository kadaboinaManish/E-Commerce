import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle"
import b1 from '../assets/images/banner/banner.png';
import b2 from '../assets/images/banner/banner_kids.png';
import b3 from '../assets/images/banner/banner_mens.png';

const HomeBanner = () => {
  return (
    <div className="mt-0">
      <Swiper
      modules={[Navigation,EffectFade]}
        navigation
        effect ={'fade'}
        autoplay ={{delay: 300}}
        className="w-full"
        speed={800}
        slidesPerView={1}
        loop = {true}
      >
        <SwiperSlide className="swiperslide">
            <img 
            className="w-full h-auto object-cover"
            src={b1}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={b2}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={b3}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBanner;
