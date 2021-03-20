import React from "react";
import { Container } from "react-bootstrap";
import img from "../../../assents/slider/banner.jpg";
import InfoBanner from "../../Home/InfoBanner/InfoBanner";
const Banner = () => {
  return (
    <Container fluid className="category_search_banner">
      <Container style={{ maxWidth: 1400 }}>
        <img src={img} style={{ width: "100%" }} />
        {/*     <InfoBanner /> */}
      </Container>
    </Container>
  );
};

export default Banner;
