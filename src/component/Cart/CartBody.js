import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import img13 from "../../assents/cardImage/23.jpg";
import img5 from "../../assents/cardImage/18.webp";
import img2 from "../../assents/cardImage/22.jpg";
import cart1 from "../../assents/cart1.jpg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { removeFromCart } from "../../Actions/cartAction";
const CartBody = () => {
  const [countries, setCountries] = useState([{ country: "" }]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries")
      .then((res) => setCountries([...countries, ...res.data.data]))
      .catch((err) => console.log(err));
  }, []);

  const handleCity = (item) => {
    let listOfCity = countries.find((_item) => _item.country == item);
    setCities(listOfCity);
  };
  const dispatch = useDispatch();
  const removeItem = (color, size, id) => {
    dispatch(removeFromCart(color, size, id));
  };
  return (
    <>
      <Container className="cart_body_container pb-5 mb-5">
        <div className="cart_body_header pb-3 pt-1">
          <p className="cart_body_header_title">my cart</p>
          <div className="cart_body_header_links mt-3 ">
            <NavLink to="/">home</NavLink> / <p>shopping cart </p>
          </div>
        </div>
        <Row className="my-4">
          <Col lg="8">
            <CartTable removeItem={removeItem} />
          </Col>
          <Col lg="4">
            <OrderSummary
              handleCity={handleCity}
              countries={countries}
              cities={cities}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartBody;
let data = [
  {
    img: img13,
    brand: "marc",
    name: "abore et dolore magna aliqua",
    stars: 5,
    price: 269.0,
    new: true,
    percent: 20,
  },
];
let fetured = {
  img: img5,
  brand: "burberry",
  images: [img5, img2],
  name: " aliqua. Ut enim ad minim veniam",
  stars: 5,
  price: 393.0,
};
const CartTable = ({ removeItem }) => {
  const cart = useSelector((state) => state.cart);
  let { cartItems } = cart;
  return (
    <>
      <div className="cart_table ">
        <div className="cart_table_header">
          <div className="cart_table_header_products">products</div>
          <div className="cart_table_header_price">PRICE</div>
          <div className="cart_table_header_quantity">QUANTITY</div>
          <div className="cart_table_header_total">total</div>
          <div className="cart_table_header_remove"></div>
        </div>
        {Object.keys(cartItems).map((key, index) => (
          <div className="cart_table_details mt-5">
            <div className="cart_table_details_products">
              <>
                <div className="cart_table_details_products_image">
                  <img src={cartItems[key].productImg[0].img.image} />
                </div>
                <div className="cart_table_details_products_info">
                  <p className="cart_product_name">Ut enim ad minim veniam</p>
                  <div className="cart_product_size_color">
                    <p>
                      {cartItems[key].color.enName} / {cartItems[key].size}
                    </p>
                  </div>
                  <div className="cart_product_brand">
                    <p>{cartItems[key].brand}</p>
                  </div>
                </div>
              </>
            </div>
            <div className="cart_table_details_price">
              $ {cartItems[key].price}
            </div>
            <div className="cart_table_details_quantity">
              <input type="number" value={cartItems[key].qty} />
            </div>
            <div className="cart_table_details_total">
              $ {cartItems[key].price * cartItems[key].qty}
            </div>
            <div
              className="cart_table_details_remove "
              onClick={() =>
                removeItem(
                  cartItems[key].color,
                  cartItems[key].size,
                  cartItems[key]._id
                )
              }
            >
              <AiOutlineClose />
            </div>
          </div>
        ))}
        <hr />
        <p>Secure Shopping Guarantee.</p>
        <img src={cart1} />
      </div>
    </>
  );
};

const OrderSummary = ({ countries, handleCity, cities }) => {
  return (
    <>
      <div className="order_summary">
        <section className="order_summary_title py-3 ">
          <p>order summary</p>
          <hr />
        </section>

        <section className="order_summary_sub pb-3">
          <p>sub total</p>
          <p>$393.0</p>
        </section>
        <hr />
        <section className="order_summary_comment">
          <p>Additional comments</p>
          <textarea placeholder="Special instruction for seller..." />
        </section>
        <section className="order_summary_title py-3 ">
          <p>GET SHIPPING ESTIMATES</p>
          <hr />
        </section>

        <section className="order_summary_location pb-3 ">
          <p>select your country</p>
          <Form.Control
            as="select"
            size="sm"
            onChange={(e) => handleCity(e.target.value)}
          >
            {countries.map((item) => {
              return <option value={item.country}>{item.country}</option>;
            })}
          </Form.Control>
          <p className="mt-3">select your city</p>
          <Form.Control
            as="select"
            size="sm"
            onChange={() => console.log("object")}
          >
            {cities.cities &&
              cities.cities.map((item) => {
                console.log(cities);
                return <option>{item}</option>;
              })}
          </Form.Control>
          <button>calculate SHIPPING</button>
        </section>
        <hr />
        <section className="order_summary_total py-3 ">
          <p> total</p>
          <p>$393.0</p>
        </section>
        <button className="proceed">proceed to checkout </button>
        <button>continue to SHopping</button>
      </div>
    </>
  );
};
