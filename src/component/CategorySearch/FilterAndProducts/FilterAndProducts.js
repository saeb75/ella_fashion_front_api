import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import FilterProduct from "../FilterProduct/FilterProduct";
import ProductList from "../ProductList/ProductList";

const FilterAndProducts = ({ open, setOpen }) => {
  return (
    <Container className="py-4">
      <Row>
        <Col
          xl="3"
          className={`filter_Product_col ${open ? "active py-5 pl-5" : ""}`}
        >
          <FilterProduct SetOpen={setOpen} />
        </Col>
        <Col xl="9">
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
};

export default FilterAndProducts;
