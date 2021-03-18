import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import glass from "../../../assents/glass.webp";
import img12 from "../../../assents/cardImage/1.webp";
import img3 from "../../../assents/cardImage/5.jpg";

import InfoBanner from "../InfoBanner/InfoBanner";
import ListSliderCard from "../ListSlider/ListSliderCard";
let data = {
  img: img12,
  brand: "chanel",
  name: "olore eu fugiat nulla pariatur",
  stars: 5,
  images: [img12, img3],
  price: 569.0,
};
const FeaturedProduct = () => {
  return (
    <Container className="py-5 featured_products">
      <Row>
        <Col lg="6" md="12" className="featured_products_image">
          <img src={glass} />
          {/*    <InfoBanner /> */}
        </Col>
        <Col lg="6" md="12" className="featured_products_col">
          <div className="featured_products_card">
            <ListSliderCard item={data} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedProduct;
