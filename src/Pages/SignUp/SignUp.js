import React, { useEffect } from "react";
import Footer from "../../component/Home/Footer/Footer";
import Header from "../../component/Home/Header/Header";
import Menu from "../../component/Home/Menu/Menu";
import NewsSignup from "../../component/Home/NewsSignup/NewsSignup";
import SignUpForm from "../../component/SignUp/SignUpForm";
import Overlay from "../../component/General/Overlay/Overlay";
import { animateScroll as scroll } from "react-scroll";
const SignUp = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <div>
      <Overlay />
      <Header />
      <Menu />
      <SignUpForm />
      <NewsSignup />
      <Footer />
    </div>
  );
};

export default SignUp;
