import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const BigBanner = ({ data }) => {
  const [bannerData, setBannerData] = useState([]);
  const banner = useSelector((state) => state.banner);
  useEffect(() => {
    if (banner.homeFourthBanner) {
      setBannerData(banner.homeFourthBanner.banners);
    }
  }, [banner.homeFourthBanner]);
  return (
    <Container fluid>
      <Container className="big_banner_container">
        <Row>
          {bannerData.map((item, index) => {
            return (
              <Col xl="6" md="6" xs="6" className="p-0" key={index}>
                <div className="imageScale big_banner_container_image ">
                  <img src={item.image.image} style={{ width: "100%" }} />
                  <button>{item.button}</button>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default BigBanner;
