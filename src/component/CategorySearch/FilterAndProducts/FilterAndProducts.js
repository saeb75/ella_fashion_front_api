import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FilterProduct from "../FilterProduct/FilterProduct";
import ProductList from "../ProductList/ProductList";
import SortBy from "../SortBy/SortBy";

const FilterAndProducts = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const overlay = useSelector((state) => state.overlay);
  useEffect(() => {
    if (!overlay.open) {
      setOpen(false);
    }
  }, [overlay.open]);
  return (
    <>
      <SortBy setOpen={setOpen} />
      <Container className="py-4">
        <Row>
          <Col
            xl="3"
            className={`filter_Product_col  py-5 pl-5 ${open ? "active" : ""}`}
          >
            <FilterProduct SetOpen={setOpen} />
          </Col>
          <Col xl="9">
            <ProductList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FilterAndProducts;
