import React, { useState } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../node_modules/swiper/swiper.scss";
import "../../../../node_modules/swiper/components/navigation/navigation.scss";
import "../../../../node_modules/swiper/components/pagination/pagination.scss";
import "../../../../node_modules/swiper/components/scrollbar/scrollbar.scss";

import styled from "styled-components";

import ListSliderCard from "./ListSliderCard";
const ListSlider = ({ data, slide, navigation, oneSlide }) => {
  return (
    <div className="list_slider py-5 ">
      <div className="Cswiper ">
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            380: {
              slidesPerView: oneSlide ? 1 : 2,
            },
            640: {
              slidesPerView: oneSlide ? 1 : 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: oneSlide ? 1 : 2,
            },
            900: {
              slidesPerView: oneSlide ? 1 : 3,
            },
            1200: {
              slidesPerView: slide,
            },
          }}
          spaceBetween={20}
          navigation={navigation}
          /*     pagination={{ clickable: true }} */
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <SlideContainer className="slideContainer">
                  <ListSliderCard item={item} />
                </SlideContainer>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ListSlider;

const SlideContainer = styled.div`
  width: 100%;
  cursor: pointer;
`;
