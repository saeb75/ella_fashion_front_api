import React, { useEffect } from "react";
import Header from "../../component/Home/Header/Header";
import Menu from "../../component/Home/Menu/Menu";
import ProductInfo from "../../component/SingleProduct/ProductInfo/ProductInfo";
import AboutUs from "../../component/Home/AboutUs/AboutUs";
import { productInfo } from "../../Data/ProductInfo";
import { singleProductBanner } from "../../Data/newCollection";
import NewCollection from "../../component/Home/NewCollection/NewCollection";
import BigBanner from "../../component/Home/BigBanner/BigBanner";
import ListSliderContainer from "../../component/Home/ListSliderContainer/ListSliderContainer";
import { singleProductBigBanner } from "../../Data/BigBanner";
import CustumerReview from "../../component/SingleProduct/CustumerReview/CustumerReview";
import ContactSection from "../../component/Home/ContactSection/ContactSection";
import NewsSignup from "../../component/Home/NewsSignup/NewsSignup";
import Footer from "../../component/Home/Footer/Footer";
import Overlay from "../../component/General/Overlay/Overlay";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import { fade } from "../../component/animations/animations";
const SingleProduct = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <div>
      <Overlay />
      <Header />
      <Menu />
      <motion.div variants={fade} initial="hidden" animate="show" exit="exit">
        <ProductInfo />
        <AboutUs data={productInfo} />
        <NewCollection data={singleProductBanner} />
        <BigBanner data={singleProductBigBanner} />
        <CustumerReview />
        {/*  <ListSliderContainer title="Related Products" /> */}
        <ContactSection />
        <NewsSignup />
        <Footer />
      </motion.div>
    </div>
  );
};

export default SingleProduct;
