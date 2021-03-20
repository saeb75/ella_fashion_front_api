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
const queryString = require("query-string");
const FilterProduct = ({ SetOpen }) => {
  const location = useLocation();
  let Url = queryString.parse(location.search);

  const [color, setColor] = useState(Url.color ? Url.color : "");
  const [size, setSize] = useState(Url.size ? Url.size : []);
  const product = useSelector((state) => state.product);
  const { slug } = useParams();
  let colors = useUnique(product, "color");
  let sizes = useUnique(product, "size");
  let brand = [];
  const history = useHistory();

  const dispatch = useDispatch();
  const handleColor = (item) => {
    setColor(item.enName);
    dispatch(getProducts(slug, item.enName, size));
    let filterObj = {};
    filterObj.color = item.enName;
    if (size) {
      filterObj.size = size;
    }
    const stringified = queryString.stringify(filterObj);
    history.push(`${location.pathname}?${stringified}`);
  };
  const handleSize = (e, item) => {
    if (e.target.checked) {
      setSize([...size, item]);
      dispatch(getProducts(slug, color, [...size, item]));
      let filterObj = {};
      filterObj.size = [...size, item];
      if (color) {
        filterObj.color = color;
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
      dispatch(getProducts(slug, color, [...newList]));
      const stringified = queryString.stringify(filterObj);
      console.log(stringified);
      history.push(`${location.pathname}?${stringified}`);
    }
  };

  useEffect(() => {
    let check = typeof Url.size;

    if (check == "string") {
      dispatch(
        getProducts(
          slug,
          Url.color ? Url.color : "",
          Url.size ? [Url.size] : ""
        )
      );
    } else {
      dispatch(
        getProducts(slug, Url.color ? Url.color : "", Url.size ? Url.size : "")
      );
    }

    setColor(Url.color ? Url.color : "");
    setSize(Url.size ? Url.size : []);
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
          <PriceFilter />
        </FilterSection>
        <FilterSection title="brand">
          <BrandFilter brand={brand} />
        </FilterSection>
        <FilterSection title="product type">
          <ProductTypeFilter />
        </FilterSection>
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
const PriceFilter = () => {
  let sizeData = [
    "less than 100$",
    "100$ - 200$",
    "200$ - 300$",
    "400$ - 500$",
    "above 500$",
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
const BrandFilter = ({ brand }) => {
  return (
    <div className="priceSection py-2 pt-2 pb-5">
      {brand.map((item, index) => {
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
// const FilterSection = ({ title, children }) => {
//     const [open, setOpen] = useState(false);
//     const [height, setHeight] = useState("");
//     let bodyHeight = useRef();

//     useEffect(() => {
//       setHeight(bodyHeight.current.offsetHeight);
//       console.log(bodyHeight.current.offsetHeight);
//     }, []);

//     return (
//       <div className="filter_section">
//         <li onClick={() => setOpen(!open)}>
//           <span>{open ? "-" : "+"}</span> {title}
//         </li>
//         <div ref={bodyHeight}>
//           <FilterBody
//             /*    className={`filter_section_children `} */
//             active={open}
//             height={height}
//           >
//             {children}
//           </FilterBody>
//         </div>
//       </div>
//     );
//   };

//   const FilterBody = styled.div`
//     height: 0px;
//     overflow: hidden;
//     transition: 0.4s height;
//     ${({ active, height }) => (active ? `height : ${height}px` : "")}
//   `;

//   const CategoryFilter = () => {
//     return (
//       <div className="CategoryFilter p-1">
//         <li>melasuda sarcus</li>
//         <li>melasuda sarcus</li>
//         <li>melasuda sarcus</li>
//       </div>
//     );
//   };
