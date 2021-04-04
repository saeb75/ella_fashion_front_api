import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { fade } from "../../component/animations/animations";
import BigBanner from "../../component/Home/BigBanner/BigBanner";
import AboutUs from "../../component/Home/AboutUs/AboutUs";
import CollectionProducts from "../../component/Home/CollectionProducts/CollectionProducts";
import ContactSection from "../../component/Home/ContactSection/ContactSection";
import ExploreSection from "../../component/Home/ExploreSection/ExploreSection";
import FeaturedProduct from "../../component/Home/FeaturedProduct/FeaturedProduct";
import Footer from "../../component/Home/Footer/Footer";
import Header from "../../component/Home/Header/Header";
import InstagramGallery from "../../component/Home/InstagramGallery/InstagramGallery";
import ListSliderContainer from "../../component/Home/ListSliderContainer/ListSliderContainer";
import MainSlider from "../../component/Home/MainSlider/MainSlider";
import Menu from "../../component/Home/Menu/Menu";
import NewCollection from "../../component/Home/NewCollection/NewCollection";
import NewsSignup from "../../component/Home/NewsSignup/NewsSignup";
import SmallBanner from "../../component/Home/SmallBanner/SmallBanner";
import { about } from "../../Data/ProductInfo";
import "./style.css";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import { homeBanner } from "../../Data/newCollection";
import { homeBigBanner } from "../../Data/BigBanner";
import { useDispatch, useSelector } from "react-redux";
import { getMainSlider } from "../../Actions/sliderAction";
import { getCategories } from "../../Actions/categoryAction";
import Loading from "../../component/General/Loading/Loading";
import {
  getBestSellingProducts,
  getNewProducts,
} from "../../Actions/productAction";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    scroll.scrollToTop();
    dispatch(getMainSlider());
    dispatch(getCategories());
    dispatch(getBestSellingProducts("sold", "desc"));
    dispatch(getNewProducts());
  }, []);
  const category = useSelector((state) => state.category);
  const slider = useSelector((state) => state.slider);
  const product = useSelector((state) => state.product);
  if (category.loading || slider.loading) {
    return <Loading />;
  }

  return (
    <>
      <Container fluid className="mainHeader p-0 m-0">
        <Header />
        <Menu />
      </Container>
      <motion.div variants={fade} initial="hidden" animate="show" exit="exit">
        <MainSlider />
        <SmallBanner />
        <ListSliderContainer
          title="best selling"
          viewAll={true}
          data={product.bestSelling}
        />
        <BigBanner data={homeBigBanner} />
        <ExploreSection />
        <FeaturedProduct />
        <CollectionProducts data={product.newProducts} />
        <ContactSection />
        <NewCollection data={homeBanner} />
        <AboutUs data={about} />
        <InstagramGallery />
        <NewsSignup />
        <Footer />
      </motion.div>
    </>
  );
};

export default Home;
