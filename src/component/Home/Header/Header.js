import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { GButton, theme, Line } from "../../../Global";
import logo from "../../../assents/3.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Container fluid style={{ borderBottom: `0.2px solid ${theme.lightGrey}` }}>
      <Container>
        <header className="header flex flex-jc-sp">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="flex">
            <div className="header__flash__button">
              <p className="m-0 p-0">Flash sale</p>
              <p className="m-0 p-0">from $29</p>
            </div>
            <div className="header__icons">
              <NavLink to="/register" className="d-flex ">
                <p>sign up</p>
                <IoPersonCircleOutline
                  className="ml-2"
                  style={{ fontSize: "25px" }}
                />
              </NavLink>
            </div>
          </div>
        </header>
      </Container>
    </Container>
  );
};
export default Header;
