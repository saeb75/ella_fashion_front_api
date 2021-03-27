import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../node_modules/swiper/swiper.scss";
import "../../../../node_modules/swiper/components/navigation/navigation.scss";
import "../../../../node_modules/swiper/components/pagination/pagination.scss";
import "../../../../node_modules/swiper/components/scrollbar/scrollbar.scss";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import img13 from "../../../assents/cardImage/30.webp";
import img5 from "../../../assents/cardImage/18.webp";
import img2 from "../../../assents/cardImage/22.jpg";
import img4 from "../../../assents/cardImage/23.webp";
import ReactImageMagnify from "react-image-magnify";
import ProductDetails from "../ProductDetals/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../../Actions/productAction";
import { useParams } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
let data = {
  img: img5,
  brand: "marc",
  name: "abore et dolore magna aliqua",
  images: [img2, img13, img5, img4],
  stars: 5,
  price: 269.0,
  new: true,
  percent: 20,
  size: ["s", "m", "l", "xl"],
  Vendor: "G-Star",
  Availability: " 5 In stock",
  ProductType: "Dincidunteros",
  desc:
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et...",
};

const ProductInfo = () => {
  const [image, setImage] = useState(data.images);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  let { slug } = useParams();
  useEffect(() => {
    scroll.scrollToTop();
    dispatch(getSingleProduct(slug));
  }, []);
  const changeData = (img, index) => {
    let newList = [...image];
    let deletList = newList.splice(index, 1);
    console.log({ delet: newList });
    let addList = newList.splice(0, 0, img);
    setImage(newList);
  };

  return (
    <Container fluid>
      <Row>
        <Col lg="6" sm="12" className="saeb">
          <div className="myFix">
            <ProductSlider product={product.singleProduct} />
          </div>
        </Col>
        <Col lg="6" sm="12" className="saeb">
          <ProductDetails
            data={data}
            changeData={changeData}
            image={image}
            product={product.singleProduct}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductInfo;

const ProductSlider = ({ data, image, product }) => {
  const { productImg } = product;
  return (
    <div>
      <div className="Cswiper productInfo ">
        {product && (
          <Swiper
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 1,
              },
            }}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            /*  pagination={{ clickable: true }} */
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {productImg.length > 0 &&
              productImg.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="slide_container">
                    <SlideContainer>
                      <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: "Wristwatch by Ted Baker London",
                            isFluidWidth: true,
                            sizes:
                              "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                            src: item.img.image,
                          },
                          largeImage: {
                            src: item.img.image,
                            width: 1200,
                            height: 1800,
                          },
                          enlargedImagePosition: "over",
                        }}
                      />
                    </SlideContainer>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        )}
      </div>
    </div>
  );
};
const SlideContainer = styled.div`
  width: 100%;
`;
