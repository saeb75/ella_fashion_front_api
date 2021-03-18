import React, { useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";

import b from "../../../assents/b.webp";
import b1 from "../../../assents/b1.webp";
import b2 from "../../../assents/b2.webp";
import b3 from "../../../assents/b3.jpg";
import b4 from "../../../assents/b4.jpg";

const BulkAnime = () => {
  return (
    <>
      <Container
        fluid
        style={{ backgroundColor: "white", padding: 0 }}
        className="bulk__anime"
      >
        <Row>
          <Col lassName="m-0 p-0">
            <div className="felx-col ">
              <div className="bulk__image">
                <img src={b} />
              </div>
              <div className="bulk__list flex-center">
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
              </div>
            </div>
          </Col>
          <Col lassName="m-0 p-0">
            <div className="flex-col-reverse">
              <div className="bulk__image">
                <img src={b1} />
              </div>
              <div className="bulk__list flex-center">
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
                      <li className="nav__item__drop__item">mtincidunt</li>
                    </DropDownItem>
                    <DropDownItem light>
                      <li className="nav__item__drop__item">adipiscing</li>
                    </DropDownItem>
                  </ul>
                </Nav>
              </div>
            </div>
          </Col>
          <Col lassName="m-0 p-0">
            <div className="felx-col ">
              <div className="bulk__image">
                <img src={b2} />
              </div>
              <div className="bulk__list flex-center">
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
              </div>
            </div>
          </Col>
          <Col lassName="m-0 p-0">
            <div className="flex-col-reverse">
              <div className="bulk__image">
                <img src={b3} />
              </div>
              <div className="bulk__list flex-center">
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
              </div>
            </div>
          </Col>
          <Col lassName="m-0 p-0">
            <div className="felx-col ">
              <div className="bulk__image">
                <img src={b4} />
              </div>
              <div className="bulk__list flex-center">
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
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BulkAnime;

const DropDownItem = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <li
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`nav__item__drop text-canter ${open ? "active" : ""}`}
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
      className={`nav__item text-canter  ${open ? "active" : ""}`}
    >
      {children}
    </li>
  );
};
