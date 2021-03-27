import React, { useEffect } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../node_modules/swiper/swiper.scss";
import "../../../../node_modules/swiper/components/navigation/navigation.scss";
import "../../../../node_modules/swiper/components/pagination/pagination.scss";
import "../../../../node_modules/swiper/components/scrollbar/scrollbar.scss";

import styled from "styled-components";

import InfoBanner from "../InfoBanner/InfoBanner";
import { useDispatch, useSelector } from "react-redux";
import { getMainSlider } from "../../../Actions/sliderAction";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const MainSlider = () => {
  const dispatch = useDispatch();

  const slider = useSelector((state) => state.slider);
  useEffect(() => {
    dispatch(getMainSlider());
  }, []);
  return (
    <div className="Cswiper mainSlider">
      {slider.mainSlider && (
        <Swiper
          /*   breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 1,
          },
        }} */

          navigation
          pagination={{ clickable: true }}
          /*  pagination={{ clickable: true }} */
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {slider.mainSlider.slides.map((item) => {
            return (
              <SwiperSlide key={item.image.image} className="slide_container">
                <SlideContainer>
                  <img
                    src={item.image.image}
                    style={{ width: "100%", height: "90%" }}
                  />
                  {item.infoTitle && <InfoBanner item={item} />}
                </SlideContainer>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};
const SlideContainer = styled.div`
  width: 100%;
`;
export default MainSlider;
