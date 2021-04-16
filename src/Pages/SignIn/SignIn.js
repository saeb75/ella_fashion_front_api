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
import { motion } from "framer-motion";
import { fade } from "../../component/animations/animations";
const SignIn = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <div>
      <Overlay />
      <Header />
      <Menu />{" "}
      <motion.div variants={fade} initial="hidden" animate="show" exit="exit">
        <SignInForm />
        <NewsSignup />
        <Footer />
      </motion.div>
    </div>
  );
};

export default SignIn;
