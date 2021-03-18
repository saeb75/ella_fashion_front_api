import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const BigBanner = ({ data }) => {
  return (
    <Container fluid>
      <Container className="big_banner_container">
        <Row>
          {data.map((item) => {
            return (
              <Col xl="6" md="6" xs="6" className="p-0">
                <div className="imageScale big_banner_container_image ">
                  <img src={item.img} style={{ width: "100%" }} />

                  <button>
                    {item.icon && item.icon}
                    {item.button}
                  </button>
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
