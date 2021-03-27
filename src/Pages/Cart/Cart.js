import React from "react";
import Footer from "../../component/Home/Footer/Footer";
import Header from "../../component/Home/Header/Header";
import NewsSignup from "../../component/Home/NewsSignup/NewsSignup";
import Menu from "../../component/Home/Menu/Menu";
import CartBody from "../../component/Cart/CartBody";
import ListSliderContainer from "../../component/Home/ListSliderContainer/ListSliderContainer";
const Cart = () => {
  return (
    <>
      <Header />
      <Menu />
      <CartBody />
      <ListSliderContainer title="Related Products" viewAll={true} />
      <NewsSignup />
      <Footer />
    </>
  );
};

export default Cart;
