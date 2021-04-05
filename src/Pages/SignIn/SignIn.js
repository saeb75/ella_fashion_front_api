import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_OVERLAY } from "../../Actions/actionType";
import Overlay from "../../component/General/Overlay/Overlay";
import Footer from "../../component/Home/Footer/Footer";
import Header from "../../component/Home/Header/Header";
import Menu from "../../component/Home/Menu/Menu";
import NewsSignup from "../../component/Home/NewsSignup/NewsSignup";
import SignInForm from "../../component/SignIn/SignInForm";
import { animateScroll as scroll } from "react-scroll";
const SignIn = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <div>
      <Overlay />
      <Header />
      <Menu />
      <SignInForm />
      <NewsSignup />
      <Footer />
    </div>
  );
};

export default SignIn;
