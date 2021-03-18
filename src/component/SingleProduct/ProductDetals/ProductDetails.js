import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import star from "../../../assents/star.png";
import fire from "../../../assents/fire.png";
import { AiOutlineHeart } from "react-icons/ai";
import AccordionMenu from "../AccordionMenu/AccordionMenu";
const ProductDetails = ({ data, changeData, image }) => {
  let [size, setSize] = useState(data.size[0]);
  return (
    <div className="product_details p-4">
      <div className="product_details_link">
        <NavLink to="/">Home</NavLink>/<p>{data.name}</p>
      </div>
      <section>
        <p className="product_details_name   my-5">{data.name}</p>
      </section>
      <div className="product_details_reviews  my-2">
        <section>
          {[1, 2, 3, 4, 5].map((item, index) => {
            return <img src={star} key={index} className="star" />;
          })}
        </section>
        <p>no reviews</p>
        <section>
          <img src={fire} className="fire" />
          <p>5 sold in last 25 hours</p>
        </section>
      </div>
      <div className="product_details_info my-2 ">
        <section>
          <p>Vendor : </p>
          <p>{data.Vendor}</p>
        </section>
        <section>
          <p>Availability : </p>
          <p>{data.Availability}</p>
        </section>
        <section>
          <p>Product Type :</p>
          <p>{data.ProductType}</p>
        </section>
      </div>
      <p className="product_details_price  mt-5 mb-2">${data.price}.00</p>
      <p className="product_details_desc  my-2 ">{data.desc}</p>
      <div className="product_details_color  my-5">
        <section className="product_details_color_title">
          <p>color :</p>
          <p>white </p>
        </section>
        <section className="product_details_color_img">
          {image.map((item, index) => {
            return (
              <img
                src={item}
                key={index}
                onClick={() => changeData(item, index)}
              />
            );
          })}
        </section>
      </div>
      <div className="product_details_size my-3 ">
        <section className="product_details_color_title my-1">
          <p>size :</p>
          <p>{size}</p>
        </section>
        <section>
          {data.size.map((item, index) => {
            return (
              <div
                className={`size_box ${size === item ? "active" : ""} `}
                key={index}
                onClick={() => setSize(item)}
              >
                {item}
              </div>
            );
          })}
        </section>
      </div>
      <div className="product_details_addToCart my-3">
        <input type="number" value="1" />
        <button className="add_to_cart mx-2">add to cart</button>
        <button className="like">
          <AiOutlineHeart />
        </button>
      </div>
      <div className="product_details_buy  my-3">
        <button>buy it now</button>
      </div>
      <div className="product_details_addToCart">
        <AccordionMenu />
      </div>
    </div>
  );
};

export default ProductDetails;
