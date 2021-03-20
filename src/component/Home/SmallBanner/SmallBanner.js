import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const SmallBanner = () => {
  const [bannerData, setBannerData] = useState([]);
  const banner = useSelector((state) => state.banner);
  useEffect(() => {
    if (banner.bestCategory) {
      setBannerData(banner.bestCategory.banners);
    }
  }, [banner.bestCategory]);

  return (
    <Container fluid>
      <Container className="py-5 small_banner">
        <Row>
          {bannerData.map((item, index) => {
            return (
              <Col xl="4" md="4" sm="12" key={index}>
                <Card className="imageScale">
                  <img
                    src={item.image.image}
                    style={{ width: "100%", height: 196 }}
                  />
                  <div className="small_banner_title">{item.category}</div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default SmallBanner;
