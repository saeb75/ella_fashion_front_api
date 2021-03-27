import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import ListSlider from "../../Home/ListSlider/ListSlider";
import { filterData } from "../../../Data/filterData";
import { data } from "../../../Data/SliderData";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import useUnique from "../../../helper/useUnique";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { getProducts } from "../../../Actions/productAction";
import { prices } from "../../../helper/FixPrice";
const queryString = require("query-string");
const FilterProduct = ({ SetOpen }) => {
  const location = useLocation();
  let Url = queryString.parse(location.search);

  const [color, setColor] = useState("");
  const [size, setSize] = useState([]);
  const [price, setPrice] = useState([]);
  const [brand, setBrand] = useState([]);

  const product = useSelector((state) => state.product);
  const { slug } = useParams();
  let { colors, sizes, brands } = useUnique(product, "color");

  const history = useHistory();

  const dispatch = useDispatch();
  // handle color size
  const handleColor = (item) => {
    setColor(item.enName);
    dispatch(getProducts(slug, item.enName, size, price, brand));
    let filterObj = {};
    filterObj.color = item.enName;

    if (size) {
      filterObj.size = size;
    }
    if (price.length > 0) {
      filterObj.max_price = price[1];
      filterObj.min_price = price[0];
    }
    if (brand) {
      filterObj.brand = brand;
    }
    const stringified = queryString.stringify(filterObj);
    history.push(`${location.pathname}?${stringified}`);
  };

  // handle brand size
  const handleSize = (e, item) => {
    if (e.target.checked) {
      setSize([...size, item]);
      dispatch(getProducts(slug, color, [...size, item], price, brand));
      let filterObj = {};
      filterObj.size = [...size, item];
      if (color) {
        filterObj.color = color;
      }
      if (price > 0) {
        filterObj.max_price = price[1];
        filterObj.min_price = price[0];
      }
      if (brand) {
        filterObj.brand = brand;
      }
      const stringified = queryString.stringify(filterObj);
      console.log(stringified);
      history.push(`${location.pathname}?${stringified}`);
    } else {
      let newList = size.filter((_item) => _item != item);

      setSize(newList);
      let filterObj = {};
      filterObj.size = [...newList];
      if (color) {
        filterObj.color = color;
      }
      if (brand) {
        filterObj.brand = brand;
      }
      if (price > 0) {
        filterObj.max_price = price[1];
        filterObj.min_price = price[0];
      }
      dispatch(getProducts(slug, color, [...newList], price, brand));
      const stringified = queryString.stringify(filterObj);
      console.log(stringified);
      history.push(`${location.pathname}?${stringified}`);
    }
  };
  // handle brand filter
  const HandleBrand = (e, item) => {
    if (e.target.checked) {
      setBrand([...brand, item]);
      dispatch(getProducts(slug, color, size, price, [...brand, item]));
      let filterObj = {};
      filterObj.brand = [...brand, item];
      if (size) {
        filterObj.size = size;
      }

      if (color) {
        filterObj.color = color;
      }
      if (price > 0) {
        filterObj.max_price = price[1];
        filterObj.min_price = price[0];
      }
      const stringified = queryString.stringify(filterObj);

      history.push(`${location.pathname}?${stringified}`);
    } else {
      let newList = brand.filter((_item) => _item != item);

      setBrand(newList);
      let filterObj = {};
      filterObj.brand = [...newList];
      if (color) {
        filterObj.color = color;
      }
      if (size) {
        filterObj.size = size;
      }
      if (price > 0) {
        filterObj.max_price = price[1];
        filterObj.min_price = price[0];
      }
      dispatch(getProducts(slug, color, size, price, [...newList]));
      const stringified = queryString.stringify(filterObj);
      console.log(stringified);
      history.push(`${location.pathname}?${stringified}`);
    }
  };
  // handle price filter
  const handlePrice = (e, item) => {
    if (item.array.length > 0) {
      setPrice(item.array);
      let filterObj = {};
      dispatch(getProducts(slug, color, size, item.array, brand));
      if (size) {
        filterObj.size = size;
      }
      if (color) {
        filterObj.color = color;
      }
      if (brand) {
        filterObj.brand = brand;
      }
      if (item.array.length > 0) {
        filterObj.min_price = item.array[0];
        filterObj.max_price = item.array[1];
      }
      const stringified = queryString.stringify(filterObj);

      history.push(`${location.pathname}?${stringified}`);
    } else {
      let filterObj = {};
      setPrice([]);

      dispatch(getProducts(slug, color, size, [], brand));
      if (size) {
        filterObj.size = size;
      }
      if (color) {
        filterObj.color = color;
      }

      const stringified = queryString.stringify(filterObj);

      history.push(`${location.pathname}?${stringified}`);
    }
  };

  const clearFilter = () => {
    setColor("");
    setSize([]);
    setPrice([]);
    setBrand([]);
    dispatch(getProducts(slug));
    history.push(`${location.pathname}`);
  };

  useEffect(() => {
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
        brandList
      )
    );

    setColor(Url.color ? Url.color : "");
    setSize(sizeList);
    setPrice(Url.min_price ? [Url.min_price, Url.max_price] : []);
    setBrand(brandList);
  }, []);

  return (
    <div className="filter_products">
      <div
        className="filter_products_close  mb-5"
        onClick={() => SetOpen(false)}
      >
        <AiOutlineClose />
      </div>
      <ul className="filter_products_list">
        <FilterSection title="categories">
          <CategoryFilter />
        </FilterSection>
        <FilterSection title="color">
          <ColorFilter
            colors={colors}
            color={color}
            handleColor={handleColor}
          />
        </FilterSection>
        <FilterSection title="size">
          <SizeFilter sizes={sizes} handleSize={handleSize} size={size} />
        </FilterSection>
        <FilterSection title="price">
          <PriceFilter handlePrice={handlePrice} price={price} />
        </FilterSection>
        <FilterSection title="brand">
          <BrandFilter
            brands={brands}
            HandleBrand={HandleBrand}
            brand={brand}
          />
        </FilterSection>
        <FilterSection title="product type">
          <ProductTypeFilter />
        </FilterSection>
        {color || size ? (
          <div className="clear_filter">
            <button onClick={clearFilter}>clear filter</button>
          </div>
        ) : null}
      </ul>
      <div className="filter_slider">
        <li>featured products</li>
        <ListSlider data={data} slide={1} navigation={true} oneSlide={true} />
      </div>
    </div>
  );
};

export default FilterProduct;

const FilterSection = ({ title, children }) => {
  const [open, setOpen] = useState(true);
  const [height, setHeight] = useState("");
  let saeb = useRef();

  useEffect(() => {
    setHeight(saeb.current.offsetHeight);
  }, []);

  return (
    <div className="filter_section">
      <li onClick={() => setOpen(!open)}>
        <span>{open ? "-" : "+"}</span> {title}
      </li>
      <FilterBody height={height} active={open}>
        <div ref={saeb} className={`filter_section_children `}>
          {children}
        </div>
      </FilterBody>
    </div>
  );
};
const FilterBody = styled.div`
  height: 0px;
  overflow: hidden;
  transition: 0.4s height;
  ${({ active, height }) => (active ? `height:${height}px` : "")}
`;
const CategoryFilter = () => {
  return (
    <div className="CategoryFilter py-2 pt-2 pb-5">
      <li>melasuda sarcus</li>
    </div>
  );
};
const ColorFilter = ({ colors, handleColor, color }) => {
  return (
    <div className="colorSection py-2 pt-2 pb-5">
      {colors.map((item, index) => {
        return (
          <li
            key={index}
            onClick={() => handleColor(item)}
            style={{ backgroundColor: ` #${item.code}` }}
            className={`${color === item.enName ? "active" : ""}`}
          ></li>
        );
      })}
    </div>
  );
};
const SizeFilter = ({ sizes, handleSize, size }) => {
  const handleChecked = (item) => {
    if (size.includes(item)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="sizeSection py-2 pt-2 pb-5">
      {sizes.map((item, index) => {
        return (
          <li key={index}>
            {handleChecked(item) ? (
              <input
                type="checkbox"
                onChange={(e) => handleSize(e, item)}
                checked
              />
            ) : (
              <input type="checkbox" onChange={(e) => handleSize(e, item)} />
            )}

            <span>{item}</span>
          </li>
        );
      })}
    </div>
  );
};
const PriceFilter = ({ handlePrice, price }) => {
  return (
    <div className="priceSection py-2 pt-2 pb-5">
      {prices.map((item, index) => {
        return (
          <li key={index}>
            {price[0] == item.array[0] ? (
              <input
                type="radio"
                name="price"
                onChange={(e) => handlePrice(e, item)}
                checked
              />
            ) : (
              <input
                type="radio"
                name="price"
                onChange={(e) => handlePrice(e, item)}
              />
            )}

            <span>{item.name}</span>
          </li>
        );
      })}
    </div>
  );
};
const BrandFilter = ({ brands, HandleBrand, brand }) => {
  const handleChecked = (item) => {
    if (brand.includes(item)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="sizeSection py-2 pt-2 pb-5">
      {brands?.map((item, index) => {
        return (
          <li key={index}>
            {handleChecked(item) ? (
              <input
                type="checkbox"
                onChange={(e) => HandleBrand(e, item)}
                checked
              />
            ) : (
              <input type="checkbox" onChange={(e) => HandleBrand(e, item)} />
            )}
            <span>{item}</span>
          </li>
        );
      })}
    </div>
  );
};
const ProductTypeFilter = () => {
  let sizeData = [
    "Dincidunteros",
    "Cosmopolis",
    "Solutmades",
    "donatello",
    "Loremous Comodous",
  ];
  return (
    <div className="priceSection py-2 pt-2 pb-5">
      {sizeData.map((item, index) => {
        return (
          <li key={index}>
            <input type="checkbox" />
            <span>{item}</span>
          </li>
        );
      })}
    </div>
  );
};
