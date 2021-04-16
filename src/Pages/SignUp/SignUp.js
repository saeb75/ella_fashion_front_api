import React, { useEffect } from "react";
import Footer from "../../component/Home/Footer/Footer";
import Header from "../../component/Home/Header/Header";
import Menu from "../../component/Home/Menu/Menu";
import NewsSignup from "../../component/Home/NewsSignup/NewsSignup";
import SignUpForm from "../../component/SignUp/SignUpForm";
import Overlay from "../../component/General/Overlay/Overlay";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import { fade } from "../../component/animations/animations";
const SignUp = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <div>
      <Overlay />
      <Header />
      <Menu />
      <motion.div variants={fade} initial="hidden" animate="show" exit="exit">
        <SignUpForm />
        <NewsSignup />
        <Footer />
      </motion.div>
    </div>
  );
};

export default SignUp;
