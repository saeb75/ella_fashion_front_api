import React, { useEffect, useState } from "react";
import ListSliderCard from "../../Home/ListSlider/ListSliderCard";
import { data } from "../../../Data/productList";
import { Col, Row } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { toTop, parents } from "../../animations/animations";
import { useInView } from "react-intersection-observer";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";
const ProductList = () => {
  let controls = useAnimation();
  let [element, view] = useInView();
  if (view) {
    controls.start("show");
  } else {
    controls.start("show");
  }
  const product = useSelector((state) => state.product);
  return (
    <div ref={element}>
      <motion.div variants={parents} ref={element} animate={controls}>
        <Row>
          {product.productsByCategories.map((item, index) => {
            return (
              <Col
                key={index}
                className="slideContainer"
                md="4"
                xs="6"
                lg="4"
                variants={toTop}
              >
                <ProductCard item={item} />
              </Col>
            );
          })}
        </Row>
      </motion.div>
    </div>
  );
};

export default ProductList;
