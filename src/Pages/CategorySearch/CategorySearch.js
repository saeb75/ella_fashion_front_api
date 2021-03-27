import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { fade } from "../../component/animations/animations";
import Menu from "../../component/Home/Menu/Menu";
import Header from "../../component/Home/Header/Header";
import Banner from "../../component/CategorySearch/Banner/Banner";
import JumpTo from "../../component/CategorySearch/JumpTo/JumpTo";
import SortBy from "../../component/CategorySearch/SortBy/SortBy";
import FilterAndProducts from "../../component/CategorySearch/FilterAndProducts/FilterAndProducts";
import Footer from "../../component/Home/Footer/Footer";
import NewsSignup from "../../component/Home/NewsSignup/NewsSignup";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { getProducDetails, getProducts } from "../../Actions/productAction";
import { useDispatch } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
const CategorySearch = () => {
  const [open, setOpen] = useState(false);
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducDetails(param.slug));
    scroll.scrollToTop();
  }, []);
  return (
    <>
      <Container fluid className="mainHeader p-0 m-0">
        <Header />
        <Menu />
      </Container>
      <motion.div variants={fade} initial="hidden" animate="show" exit="exit">
        <Banner />
        <JumpTo />
        <SortBy setOpen={setOpen} />
        <FilterAndProducts open={open} setOpen={setOpen} />
        <NewsSignup />
        <Footer />
      </motion.div>
    </>
  );
};

export default CategorySearch;
