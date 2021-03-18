import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../../assents/newCollections/1.webp";
import img2 from "../../../assents/newCollections/2.webp";
import useScroll from "../../animations/useScroll";
import { motion, useAnimation } from "framer-motion";
import { fade, right } from "../../animations/animations";

const NewCollection = ({ data }) => {
  const [element, controls] = useScroll();

  return (
    <Container className="new_collection py-5">
      {data.map((item) => {
        return (
          <Row>
            <Col xl="6" md="12">
              <div className="imageScale">
                <img src={item.img} />
              </div>
            </Col>
            <Col xl="6" md="12">
              <div className="new_collection_info">
                <p className="new_collection_category py-3">{item.category}</p>
                <p className="new_collection_title text-center py-3">
                  {item.title}
                </p>
                <p className="new_collection_desc text-center py-3">
                  {item.desc}
                </p>
                {item.button && (
                  <button className="new_collection_button py-3 my-3">
                    shop the collection
                  </button>
                )}
              </div>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default NewCollection;
