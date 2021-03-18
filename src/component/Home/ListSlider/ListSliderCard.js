import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../Global";
import star from "../../../assents/star.png";
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
const ListSliderCard = ({ item }) => {
  const [state, setState] = useState(item.img);
  return (
    <div className="list_slider_card">
      <div className="list_slider_image">
        <img src={state} style={{ width: "100%", height: "100%" }} />
        <img
          src={item.images[1]}
          className="imageHover"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="new_discount_Container">
          {item.new && <span className="new">New</span>}
          {item.percent && <span className="discount">-{item.percent}%</span>}
        </div>

        <button>Add To Cart</button>
      </div>
      <SlideInfo>
        <Brand>
          {item.brand}
          <AiOutlineHeart style={{ cursor: "pointer" }} />
        </Brand>
        <div className="list_slider_Product_color">
          {item.images.map((_item) => {
            return (
              <img
                src={_item}
                className={state == _item && "active"}
                onClick={() => setState(_item)}
              />
            );
          })}
        </div>
        <ProductName>{item.name}</ProductName>
        <Price>${item.price}</Price>
        <Stars>
          {[1, 2, 3, 4, 5].map((item) => (
            <img src={star} width="15" />
          ))}
        </Stars>
      </SlideInfo>
    </div>
  );
};

export default ListSliderCard;
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
