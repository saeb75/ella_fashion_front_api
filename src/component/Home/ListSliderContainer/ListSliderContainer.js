import React from "react";
import { Container } from "react-bootstrap";
import ListSlider from "../ListSlider/ListSlider";

const ListSliderContainer = ({ title, viewAll, data }) => {
  return (
    <Container fluid>
      <Container className="list_slider">
        <div className="list_slider_header">
          <p className="list_slider_title">{title}</p>
          {viewAll && <p className="slider_view_button">view all</p>}
        </div>
      </Container>
      <Container>
        <ListSlider data={data} slide={4} navigation={true} />
      </Container>
    </Container>
  );
};

export default ListSliderContainer;
