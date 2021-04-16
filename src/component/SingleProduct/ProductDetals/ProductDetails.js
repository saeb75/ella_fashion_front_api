import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import star from "../../../assents/star.png";
import fire from "../../../assents/fire.png";
import { AiOutlineHeart } from "react-icons/ai";
import AccordionMenu from "../AccordionMenu/AccordionMenu";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Actions/cartAction";
const ProductDetails = ({ data, changeData, image, product }) => {
  let [sizes, setSizes] = useState("");

  let [colros, setColros] = useState("");

  let [availableSize, setAvailableSize] = useState("");
  let [cartItems, setCartItems] = useState({
    size: "",
    color: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  let { name, price, description, productDetails } = product;
  let colorList = [];
  let sizeList = [];
  let availableSizeList = [];
  useEffect(() => {
    if (productDetails) {
      productDetails.map((item) => {
        sizeList.push(item.size);
      });
      productDetails.map((item) => {
        colorList.push(item.color);
      });
      colorList = [
        ...new Map(colorList.map((item) => [item["prName"], item])).values(),
      ];
      sizeList = [...new Set(sizeList)];
      setSizes(sizeList);
      setColros(colorList);
      setCartItems({ ...cartItems, color: colorList[0] });
      availableSizeList = productDetails.map(
        (_item) => _item.color.enName == colorList[0].enName && _item.size
      );
      setAvailableSize(availableSizeList);
    }
  }, [productDetails]);

  const handleChange = (item, filter) => {
    availableSizeList = [];
    setCartItems({ ...cartItems, color: item });
    availableSizeList = productDetails.map(
      (_item) => _item.color.enName == item.enName && _item.size
    );
    setAvailableSize(availableSizeList);
  };
  const handleAvailableSize = (item) => {
    console.log(availableSize, item);
    if (availableSize.includes(item)) {
      return true;
    } else {
      return false;
    }
  };
  let addProductToCart = () => {
    if (cartItems.size && cartItems.color) {
      dispatch(addToCart(product, cartItems.size, cartItems.color));
      history.push("/cart");
    }
  };

  return (
    <div className="product_details p-4">
      <div className="product_details_link">
        <NavLink to="/">Home</NavLink>/<p>{data.name}</p>
      </div>
      <section>
        <p className="product_details_name   my-5">{name}</p>
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
      <p className="product_details_price  mt-5 mb-2">${price}.00</p>
      <p className="product_details_desc  my-2 ">{description}</p>
      <div className="product_details_color  my-5">
        <section className="product_details_color_title">
          <p>color :</p>
          <p>
            {cartItems.color ? cartItems.color.enName : "please choose a color"}{" "}
          </p>
        </section>
        <section className="product_details_color_box ">
          {colros.length > 0 &&
            colros.map((item, index) => {
              return (
                <div
                  className={`color_box ${
                    cartItems.color === item ? "active" : ""
                  }`}
                  style={{ backgroundColor: `#${item.code}` }}
                  onClick={() => handleChange(item, "color")}
                >
                  {item.enName}
                </div>
              );
            })}
        </section>
      </div>
      <div className="product_details_size my-3 ">
        <section className="product_details_color_title my-1">
          <p>size :</p>
          <p>{cartItems.size ? cartItems.size : "please choose a size"}</p>
        </section>
        <section>
          {sizes.length > 0 &&
            sizes.map((item, index) => {
              return (
                <>
                  {handleAvailableSize(item) ? (
                    <div
                      className={`size_box   `}
                      key={index}
                      onClick={() => setCartItems({ ...cartItems, size: item })}
                    >
                      {item}
                    </div>
                  ) : (
                    <div className={`size_box  unAvailable `} key={index}>
                      {item}
                    </div>
                  )}
                </>
              );
            })}
        </section>
      </div>
      <div className="product_details_addToCart my-3">
        <input type="number" value="1" />
        {cartItems.size ? (
          <button className="add_to_cart mx-2" onClick={addProductToCart}>
            add to cart
          </button>
        ) : (
          <button className="add_to_cart disable mx-2">
            please choose a size
          </button>
        )}

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
