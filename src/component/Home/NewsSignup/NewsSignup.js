import React from "react";
import { Container } from "react-bootstrap";

const NewsSignup = () => {
  return (
    <Container className="news_signup py-5" fluid>
      <Container>
        <p className="news_signup_title text-center">Sign-up for EllaNews</p>
        <p className="news_signup_desc  text-center px-5 py-3">
          <span>
            Stay informed about the latest style advice and product launches.
            Learn more about our emails and our
            <a href=""> Privacy Policy.</a>
          </span>
        </p>
        <div className="news_signup_input">
          <div>
            <input type="text" placeholder="Your email address" />
            <button>subscribe</button>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default NewsSignup;
