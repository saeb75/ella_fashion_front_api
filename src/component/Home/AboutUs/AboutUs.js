import React from "react";
import { Container } from "react-bootstrap";
import useScroll from "../../animations/useScroll";
import { motion, useAnimation } from "framer-motion";
import { fade, right } from "../../animations/animations";
const AboutUs = ({ data }) => {
  const [element, controls] = useScroll();
  let { title, link, desc } = data;
  console.log(data);
  return (
    <div>
      <Container fluid className="about_us py-3 ">
        <hr />
        <Container>
          <motion.div className="about_us_title text-center pt-3">
            {title}
          </motion.div>
          {link && (
            <div className="about_us_link text-center pt-3">about us</div>
          )}

          <motion.div className="about_us_desc text-center p-5">
            {desc}
          </motion.div>
        </Container>
      </Container>
    </div>
  );
};

export default AboutUs;
