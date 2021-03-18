import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import img13 from "../../../assents/cardImage/23.jpg";
import img5 from "../../../assents/cardImage/18.webp";
import img2 from "../../../assents/cardImage/22.jpg";
import ListSliderCard from "../ListSlider/ListSliderCard";
const CartSection = ({ setCart }) => {
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
  return (
    <div className="px-3 py-3 cart_section_container">
      <div className="cart_section_close" onClick={() => setCart(false)}>
        <AiOutlineClose />
        <span>close</span>
      </div>
      <h2 className="cart_section_title">your bag</h2>
      <p className="item_quantity">1 items</p>
      <div className="cart_section_products mt-4">
        {data.map((item, index) => {
          return <CartCard key={index} item={item} />;
        })}
      </div>
      <hr />
      <div className="cart_info">
        <section className="total_price">
          <p>total</p>
          <p>$269</p>
        </section>
        <section className="shipping">
          <p>shipping</p>
          <p> Taxes and shipping fee will be calculated at checkout</p>
        </section>
        <section className="cart_button mt-5">
          <section>
            <input type="checkbox" className="mr-2" />
            <p>I agree with the Terms & conditions</p>
          </section>
          <section>
            <button>checkout</button>
            <button>view cart</button>
          </section>
          <section className="cart_featured">
            <ListSliderCard item={fetured} />
          </section>
        </section>
      </div>
    </div>
  );
};

export default CartSection;

const CartCard = ({ item }) => {
  return (
    <div className="cart_product">
      <section className="product_img">
        <img src={item.img} />
      </section>
      <section className="px-3">
        <p className="product_name">{item.name}</p>
        <p className="product_info">white / m</p>
        <h6 className="product_price">${item.price}</h6>
        <input className="product_quantity" value={1} type="number" />
      </section>
      <section>
        <AiOutlineClose />
      </section>
    </div>
  );
};
