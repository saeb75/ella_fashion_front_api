import React, { useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import img1 from "../../../assents/1.webp";
import img2 from "../../../assents/2.webp";
import img3 from "../../../assents/3.webp";
import img4 from "../../../assents/4.webp";

const CategoryList = ({ items, categoryImg, category }) => {
  return (
    <>
      <Container fluid className="py-3" style={{ backgroundColor: "white" }}>
        <Container style={{ maxWidth: 1250 }} className="trand__anime">
          <Row>
            <Col md="7">
              <div className="category_container">
                <ul className="category_list">
                  {items.length > 0 &&
                    items.map((item, index) => {
                      return (
                        <Navlist
                          key={index}
                          to={`/category/${item.slug}`}
                          image={item.categoryImg.image}
                        >
                          {item.name}
                        </Navlist>
                      );
                    })}
                </ul>
              </div>
            </Col>
            <Col md="5">
              <div className="all_category_products">
                <Navlist to={`/category/${category}`} image={categoryImg}>
                  {category}
                </Navlist>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default CategoryList;
const Navlist = styled(NavLink)`
  background: linear-gradient(
      to left,
      rgba(41, 51, 85, 0.8),
      rgba(41, 51, 85, 0.1)
    ),
    url(${({ image }) => image});
  color: white;
`;
