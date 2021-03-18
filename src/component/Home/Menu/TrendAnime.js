import React, { useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import styled from "styled-components";
import { theme } from "../../../Global";
import megaMenu from "../../../assents/megaMenu.jpg";
import SwiperSlider from "../SwiperSlider/SwiperSlider";

const TrendAnime = () => {
  return (
    <>
      <Container fluid className="py-5" style={{ backgroundColor: "white" }}>
        <Container style={{ maxWidth: 1250 }} className="trand__anime">
          <Row>
            <Col md="7">
              <Row>
                <Col md="4">
                  <Nav className="flex-column">
                    <NavItemComponent>waht's new</NavItemComponent>
                    <NavItemComponent>best selling</NavItemComponent>
                    <NavItemComponent>top rated</NavItemComponent>
                    <NavItemComponent>most popular</NavItemComponent>
                    <NavItemComponent>editor's picks</NavItemComponent>
                    <NavItemComponent>on sale</NavItemComponent>
                  </Nav>
                </Col>
                <Col md="4">
                  <Nav className="flex-column">
                    <NavItemComponent>HARUM QUIDEM</NavItemComponent>
                    <ul className="anime__list">
                      <DropDownItem light>
                        <li className="nav__item__drop__item ">consectetuer</li>
                      </DropDownItem>
                      <DropDownItem light>
                        <li className="nav__item__drop__item">exerci</li>
                      </DropDownItem>
                      <DropDownItem light>
                        <li className="nav__item__drop__item">commodo</li>
                      </DropDownItem>
                      <DropDownItem light>
                        <li className="nav__item__drop__item">mtincidunt</li>{" "}
                      </DropDownItem>
                      <DropDownItem light>
                        <li className="nav__item__drop__item">adipiscing</li>{" "}
                      </DropDownItem>
                    </ul>
                  </Nav>
                </Col>
                <Col md="4">
                  <Nav className="flex-column">
                    <ul className="anime__list">
                      <NavItemComponent>diam nonummy</NavItemComponent>
                      <DropDownItem>
                        <li className="nav__item__drop__item ">aliquam</li>{" "}
                      </DropDownItem>
                      <DropDownItem>
                        <li className="nav__item__drop__item">accumsan</li>{" "}
                      </DropDownItem>
                      <DropDownItem>
                        <li className="nav__item__drop__item">commodo</li>{" "}
                      </DropDownItem>
                      <DropDownItem>
                        <li className="nav__item__drop__item">dolore</li>{" "}
                      </DropDownItem>
                      <DropDownItem>
                        <li className="nav__item__drop__item">minim</li>{" "}
                      </DropDownItem>
                    </ul>
                  </Nav>
                </Col>
              </Row>
            </Col>

            <Col md="5">
              <img src={megaMenu} />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid style={{ backgroundColor: "#eaeaea" }} className="py-5">
        <Container style={{ maxWidth: 1250 }}>
          <Row>
            <Col xl="12">
              <SwiperSlider />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export const NavItem = styled.li`
  font-weight: ${({ light }) => (light ? 400 : 700)};
  margin-bottom: 1.2rem;
  font-size: 0.875rem;
  transition: 0.4s all;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    color: ${theme.red};
  }
`;

export default TrendAnime;
const DropDownItem = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <li
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`nav__item__drop ${open ? "active" : ""}`}
    >
      {children}
    </li>
  );
};
const NavItemComponent = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <li
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`nav__item  ${open ? "active" : ""}`}
    >
      {children}
    </li>
  );
};
