import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { GrSplit, GrSplits } from "react-icons/gr";
import { GoSettings } from "react-icons/go";
import { useDispatch } from "react-redux";
import { OPEN_OVERLAY } from "../../../Actions/actionType";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { getProducts } from "../../../Actions/productAction";
const queryString = require("query-string");
const SortBy = ({ setOpen }) => {
  const [sort, setSort] = useState(null);
  const [order, setOrder] = useState(null);
  const dispatch = useDispatch();
  const handleOpenFilter = () => {
    setOpen(true);
    dispatch({ type: OPEN_OVERLAY });
  };

  let history = useHistory();
  const { slug } = useParams();
  let location = useLocation();
  let Url = queryString.parse(location.search);
  let filterObj = {};
  const handleSort = (e) => {
    let sortOrder = e.target.value.split(" ");

    let sizeCheck = typeof Url.size;
    let brandCheck = typeof Url.brand;
    let sizeList = Url.size ? Url.size : [];
    let brandList = Url.brand ? Url.brand : [];
    if (brandCheck == "string") {
      brandList = [];
      brandList.push(Url.brand);
    }
    if (sizeCheck == "string") {
      sizeList = [];
      sizeList.push(Url.size);
    }

    dispatch(
      getProducts(
        slug,
        Url.color ? Url.color : "",
        sizeList,
        Url.min_price ? [Url.min_price, Url.max_price] : [],
        brandList,
        sortOrder[0],
        sortOrder[1]
      )
    );
    if (sizeList.length > 0) {
      filterObj.size = sizeList;
    }
    if (brandList.length > 0) {
      filterObj.brand = brandList;
    }
    if (Url.min_price) {
      filterObj.max_price = Url.max_price;
      filterObj.min_price = Url.min_price;
    }
    if (Url.color) {
      filterObj.color = Url.color;
    }

    filterObj.order = sortOrder[1];
    filterObj.sort = sortOrder[0];
    const stringified = queryString.stringify(filterObj);
    history.push(`${location.pathname}?${stringified}`);
  };
  return (
    <Container className="category_sort_by">
      <div className="category_sort_by_container py-3">
        {/* <div className="grid_view">
          <p>view as </p>
          <div className="grid_icons">
            <GrSplit />
            <GrSplits />
          </div>
        </div> */}
        <div className="category_sort_by_title">
          <div>
            <span>home</span> / <span>New In</span>
          </div>
        </div>

        <div>
          <div className="category_sort_by_select">
            {/* <div className="pageItems">
              <p>items per page </p>
              <Form.Control
                as="select"
                size="sm"
                onChange={() => console.log("object")}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Form.Control>
            </div> */}
            <div>
              <p>sort by </p>
              <Form.Control
                as="select"
                size="sm"
                onChange={handleSort}
                value={`${Url.sort} ${Url.order}`}
              >
                <option value="created desc"></option>
                <option value="price desc">descresing by price</option>
                <option value="price asc">increasing by price</option>
              </Form.Control>
            </div>
          </div>
        </div>
        <div className="filterToggle" onClick={handleOpenFilter}>
          <GoSettings />
        </div>
      </div>
      <hr />
    </Container>
  );
};

export default SortBy;
