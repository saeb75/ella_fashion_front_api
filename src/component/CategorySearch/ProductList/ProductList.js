import React, { useEffect, useState } from "react";
import ListSliderCard from "../../Home/ListSlider/ListSliderCard";
import { data } from "../../../Data/productList";
import { Col, Row } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { toTop, parents } from "../../animations/animations";
import { useInView } from "react-intersection-observer";
const ProductList = () => {
  let controls = useAnimation();
  let [element, view] = useInView();
  if (view) {
    controls.start("show");
  } else {
    controls.start("show");
  }

  return (
    <div ref={element}>
      <motion.div variants={parents} ref={element} animate={controls}>
        <Row>
          {data.map((item, index) => {
            return (
              <Col
                key={index}
                className="slideContainer"
                md="6"
                xs="6"
                lg="6"
                variants={toTop}
              >
                <ListSliderCard item={item} />
              </Col>
            );
          })}
        </Row>
      </motion.div>
    </div>
  );
};

export default ProductList;
