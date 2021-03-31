import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { data } from "../../../Data/galleryData";
import { Gallery, Item } from "react-photoswipe-gallery";
const InstagramGallery = () => {
  return (
    <Container className="insta_gallery">
      <div className="insta_gallery_title text-center">Fashion’s Instagram</div>
      <div className="insta_gallery_link text-center">FOLLOW US @FASHION</div>
      <Gallery>
        <Row className="mt-5">
          {data.map((item, index) => {
            return (
              <Col lg="3" md="3" sm="6" xs="6" className="mb-4" key={index}>
                <Card>
                  <Item
                    original={item.img}
                    thumbnail={item.img}
                    width="285"
                    height="285"
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        className="myImage"
                        onClick={open}
                        src={item.img}
                      />
                    )}
                  </Item>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Gallery>
    </Container>
  );
};

export default InstagramGallery;
