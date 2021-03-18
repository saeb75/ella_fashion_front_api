import React from "react";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import img from "../../../assents/3.webp";
import img2 from "../../../assents/4.jpg";
import img3 from "../../../assents/saeb.webp";
import img4 from "../../../assents/1.webp";
import img5 from "../../../assents/2.webp";
import star from "../../../assents/star.png";

import styled from "styled-components";
import { theme } from "../../../Global";
import { BsStarFill } from "react-icons/bs";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const data = [
  {
    img: img,
    brand: "marc",
    name: "abore et dolore magna aliqua",
    stars: 5,
    price: 139.0,
  },
  {
    img: img2,
    brand: "g-star",
    name: "laboris nisi ut aliquip exea",
    stars: 5,
    price: 139.0,
  },
  {
    img: img3,
    brand: "chanel",
    name: "olore eu fugiat nulla pariatur",
    stars: 5,
    price: 139.0,
  },
  {
    img: img4,
    brand: "zara",
    name: "sunt in culpa qui officia deserunt",
    stars: 5,
    price: 139.0,
  },
  {
    img: img5,
    brand: "burberry",
    name: " aliqua. Ut enim ad minim veniam",
    stars: 5,
    price: 139.0,
  },
  {
    img: img,
    brand: "gucci",
    name: " dolor sit amet, consectetur",
    stars: 5,
    price: 139.0,
  },
  {
    img: img3,
    brand: "g-star",
    name: "officia deserunt mollit anim ",
    stars: 5,
    price: 139.0,
  },
  {
    img: img5,
    brand: "chanel",
    name: " voluptate velit esse cillum",
    stars: 5,
    price: 139.0,
  },
];

const SwiperSlider = () => {
  return (
    <div className="Cswiper">
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        /*  pagination={{ clickable: true }} */
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((item) => {
          return (
            <SwiperSlide>
              <SlideContainer>
                <ImageContainer>
                  <Img src={item.img} style={{ width: "100%" }} />
                </ImageContainer>

                <SlideInfo>
                  <Brand>{item.brand}</Brand>
                  <ProductName>{item.name}</ProductName>
                  <Stars>
                    {[1, 2, 3, 4, 5].map((item) => (
                      <img src={star} width="20" style={{ margin: 2 }} />
                    ))}
                  </Stars>
                  <Price>${item.price}</Price>
                </SlideInfo>
              </SlideContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
const ImageContainer = styled.div`
  flex: 1;
`;
const SlideContainer = styled.div`
  width: 100%;
  display: flex;
`;
const Img = styled.img`
  width: 100%;
`;
const SlideInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
  padding: 20px 0px;
`;
const Brand = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: ${theme.fontBlack};
  text-transform: uppercase;
`;

const ProductName = styled.p`
  font-weight: 500;
  font-size: 14px;
  text-transform: capitalize;
  color: ${theme.fontBlack};
  line-height: 20px;
`;

const Stars = styled.div`
  display: flex;
`;
const Price = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 16px;
`;
export default SwiperSlider;
