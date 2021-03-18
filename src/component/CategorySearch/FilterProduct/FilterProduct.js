import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import ListSlider from "../../Home/ListSlider/ListSlider";
import { filterData } from "../../../Data/filterData";
import { data } from "../../../Data/SliderData";
import { AiOutlineClose } from "react-icons/ai";
const FilterProduct = ({ SetOpen }) => {
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
          <ColorFilter />
        </FilterSection>
        <FilterSection title="size">
          <SizeFilter />
        </FilterSection>
        <FilterSection title="price">
          <PriceFilter />
        </FilterSection>
        <FilterSection title="brand">
          <BrandFilter />
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
const ColorFilter = () => {
  let colorData = ["black", "beige", "pink"];
  return (
    <div className="colorSection py-2 pt-2 pb-5">
      {colorData.map((item) => {
        return <li style={{ backgroundColor: item }}></li>;
      })}
    </div>
  );
};
const SizeFilter = () => {
  let sizeData = ["xs", "s", "m", "x", "xl", "2x"];
  return (
    <div className="sizeSection py-2 pt-2 pb-5">
      {sizeData.map((item) => {
        return (
          <li>
            <input type="checkbox" />
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
      {sizeData.map((item) => {
        return (
          <li>
            <input type="checkbox" />
            <span>{item}</span>
          </li>
        );
      })}
    </div>
  );
};
const BrandFilter = () => {
  let sizeData = ["gucci", "zara", "anna", "donatello", "benjamin"];
  return (
    <div className="priceSection py-2 pt-2 pb-5">
      {sizeData.map((item) => {
        return (
          <li>
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
      {sizeData.map((item) => {
        return (
          <li>
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
