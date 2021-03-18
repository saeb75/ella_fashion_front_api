import React, { useState } from "react";
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
const CategorySearch = () => {
  const [open, setOpen] = useState(false);
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
