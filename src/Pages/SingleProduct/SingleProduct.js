import React from "react";
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
const SingleProduct = () => {
  console.log(productInfo);
  return (
    <div>
      <Header />
      <Menu />
      <ProductInfo />
      <AboutUs data={productInfo} />
      <NewCollection data={singleProductBanner} />
      <BigBanner data={singleProductBigBanner} />
      <CustumerReview />
      <ListSliderContainer title="Related Products" />
      <ContactSection />
      <NewsSignup />
      <Footer />
    </div>
  );
};

export default SingleProduct;
