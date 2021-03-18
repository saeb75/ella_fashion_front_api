import React from "react";
import { Container } from "react-bootstrap";

const ExploreSection = () => {
  return (
    <Container fluid className="explore_section py-5">
      <Container className="flex-center flex-col">
        <div className="explore_section_title">Explore our Membership</div>
        <p className="explore_section_info">
          Get that new clothes month with a monthly membership. We have a plan
          that's right for you and your budget.
        </p>
        <button>learn more</button>
      </Container>
    </Container>
  );
};

export default ExploreSection;
