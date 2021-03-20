import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import icon1 from "../../../assents/cardImage/pip.webp";
import icon2 from "../../../assents/cardImage/bred.png";
let data = [
  {
    title: "Tailor-made with passion",
    description:
      "We use only the very best materials and manufacturers. If our product rips or frays, we’ll make it right.",
    buttun: "learn more",
    icon: icon1,
  },
  {
    title: "Tailor-made with passion",
    description:
      "Question or concern? Not sure what to get? Don’t know how to put on a duvet cover? Our team is here to help!",
    buttun: "contact us",
    icon: icon2,
  },
];
const ContactSection = () => {
  return (
    <Container fluid className="contact_section" style={{ overflow: "hidden" }}>
      <Row>
        {data.map((item, index) => {
          return (
            <Col
              key={index}
              lg="6"
              md="12"
              className="contact_section_col py-5"
            >
              <div className="contact_section_card">
                <img src={item.icon} />
                <p className="contact_section_card_title  text-center">
                  {item.title}
                </p>
                <p className="contact_section_card_description text-center">
                  {item.description}
                </p>
                <p className="contact_section_card_button py-4  text-center">
                  {item.buttun}
                </p>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ContactSection;
