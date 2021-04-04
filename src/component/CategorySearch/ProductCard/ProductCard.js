import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../../Global";
import star from "../../../assents/star.png";
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import moment from "moment";
import { NavLink } from "react-router-dom";
const ProductCard = ({ item }) => {
  const [state, setState] = useState();
  const [colorList, setColorList] = useState([]);
  let listColor = [];

  useEffect(() => {
    if (item.productDetails) {
      item.productDetails.map((_item) => {
        listColor.push(_item.color);
      });
      setColorList(listColor);
      setState(listColor[0].code);
    }
  }, [item]);
  console.log(item);
  return (
    <div className="list_slider_card">
      <div className="list_slider_image">
        <img
          src={item.productImg[0].img.image}
          style={{ width: "100%", height: "100%" }}
        />
        <img
          src={item.productImg[1].img.image}
          className="imageHover"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="new_discount_Container">
          {moment.duration().asDays(item.createdAt) < 20 && (
            <span className="new">New</span>
          )}
          {/*   {item.percent && <span className="discount">-{item.percent}%</span>}*/}
        </div>

        {/*        <button>Add To Cart</button> */}
        <NavLink
          to={`/product/${item.slug}`}
          className="product_cart_overley_link"
        ></NavLink>
      </div>
      <SlideInfo>
        <Brand>
          {item.brand}
          <AiOutlineHeart style={{ cursor: "pointer" }} />
        </Brand>
        <div className="list_slider_Product_color">
          {colorList.map((_item, index) => {
            return (
              <div
                onClick={() => setState(_item.code)}
                className={`${state === _item.code ? "active" : ""}`}
                style={{ backgroundColor: `#${_item.code}` }}
              ></div>
            );
          })}
        </div>
        <ProductName>
          <NavLink to={`/product/${item.slug}`}> {item.name}</NavLink>
        </ProductName>
        <Price>${item.price}</Price>
        <Stars>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <img src={star} width="15" key={index} />
          ))}
        </Stars>
      </SlideInfo>
    </div>
  );
};

export default ProductCard;
const Img = styled.img`
  width: 100%;
`;

const SlideInfo = styled.div`
  flex: 1;
  display: flex;
  height: 160px;
  background-color: white;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 10px;
`;
const Brand = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: ${theme.fontBlack};
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
`;

const ProductName = styled.p`
  font-weight: 500;
  font-size: 14px;
  text-transform: capitalize;
  color: ${theme.fontBlack};
  line-height: 20px;
`;

const Stars = styled.div`
  display: flex;
`;
const Price = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 16px;
`;
