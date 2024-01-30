import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
const Slider = () => {
  return (
    <div style={{ width: "80rem", height: "20rem", margin: "auto" }}>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            className="item-image"
            src="images/s1.png"
            alt="item image"
            width={150}
            height={150}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="item-image"
            src="images/s2.png"
            alt="item image"
            width={150}
            height={150}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="item-image"
            src="images/s3.png"
            alt="item image"
            width={150}
            height={150}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="item-image"
            src="images/s4.png"
            alt="item image"
            width={150}
            height={150}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="item-image"
            src="images/s5.png"
            alt="item image"
            width={150}
            height={150}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="item-image"
            src="images/s6.png"
            alt="item image"
            width={150}
            height={150}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="item-image"
            src="images/s1.png"
            alt="item image"
            width={150}
            height={150}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
