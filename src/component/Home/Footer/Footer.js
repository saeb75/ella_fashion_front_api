import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { data } from "../../../Data/footerData";
import img1 from "../../../assents/payment/1.jpg";
import img2 from "../../../assents/payment/2.jpg";
import img3 from "../../../assents/payment/3.jpg";
import img4 from "../../../assents/payment/4.jpg";
import img5 from "../../../assents/payment/5.jpg";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
let cards = [img1, img2, img3, img4, img5];
let icons = [
  { icon: <FaFacebookF /> },
  { icon: <FaTwitter /> },
  { icon: <FaInstagram /> },
  { icon: <FaPinterestP /> },
  { icon: <FaYoutube /> },
];
const Footer = () => {
  return (
    <Container className="footer py-5">
      <Row>
        {data.map((item) => {
          return (
            <Col md="3" lg="3">
              <p className="footer_list_title">{item.title}</p>
              <ul>
                {item?.items.map((_item) => {
                  return <li className="line">{_item}</li>;
                })}
              </ul>
            </Col>
          );
        })}
        <Col md="3" lg="3">
          <p className="footer_list_title">keep in touch</p>
          <div className="footer_icons mb-5">
            {icons.map((item) => {
              return <li>{item.icon}</li>;
            })}
          </div>
          <p className="footer_list_title">payment accept</p>
          <div className="footer_list_payment">
            {cards.map((item) => {
              return (
                <li>
                  <img src={item} />
                </li>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
