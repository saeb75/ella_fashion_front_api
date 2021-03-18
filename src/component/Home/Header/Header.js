import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { GButton, theme, Line } from "../../../Global";
import logo from "../../../assents/ella.png";
const Header = () => {
  return (
    <Container fluid style={{ borderBottom: `0.2px solid ${theme.lightGrey}` }}>
      <Container>
        <header className="header flex flex-jc-sp">
          <div className="logo">
            Saeb<span>FBD</span>
          </div>
          <div className="flex">
            <div className="header__flash__button">
              <p className="m-0 p-0">Flash sale</p>
              <p className="m-0 p-0">from $29</p>
            </div>
            <div className="header__icons">
              <p>Login</p>
              <IoPersonCircleOutline
                className="ml-2"
                style={{ fontSize: "25px" }}
              />
            </div>
          </div>
        </header>
      </Container>
    </Container>
  );
};
export default Header;
