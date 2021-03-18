import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { fade } from "./animations";
const useScroll = () => {
  const [element, view] = useInView({ threshold: 0.5 });
  const controls = useAnimation();
  if (view) {
    controls.start("show");
  }
  return [element, controls];
};

export default useScroll;
