import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import img1 from "../../../assents/cardImage/11.webp";
import img2 from "../../../assents/cardImage/12.webp";
import img3 from "../../../assents/cardImage/13.webp";
import img4 from "../../../assents/cardImage/20.jpg";
import img5 from "../../../assents/cardImage/4.jpg";
import img11 from "../../../assents/cardImage/19.webp";
import img12 from "../../../assents/cardImage/17.webp";
import ListSlider from "../ListSlider/ListSlider";

const CollectionProducts = ({ data }) => {
  return (
    <Container className="collection_products">
      <Row>
        <Col md="12" lg="3" className="list_slider flex-center">
          <div className="list_slider_header ">
            <p className="list_slider_title">Also in collection</p>
            <p className="slider_view_button">view all</p>
          </div>
        </Col>
        <Col md="12" lg="9">
          <ListSlider data={data} slide={3} navigation={false} />
        </Col>
      </Row>
    </Container>
  );
};

export default CollectionProducts;
