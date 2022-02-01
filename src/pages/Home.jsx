import React, { useState } from "react";
import Background from "../components/Background/Background.js";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import About from "../components/About/about";
import Contact from "../components/Contact/contact";
import Skills from "../components/Skills/Skills";
// import { motion } from "framer-motion";
import { animationOne, transition } from "../components/Animation";

import { createDomMotionComponent } from "framer-motion";

/** IE 11 supported version of the motion component */
const motion = {
  div: createDomMotionComponent("div"),
  span: createDomMotionComponent("span"),
  svg: createDomMotionComponent("svg")
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      // transition={transition}
    >
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Background />
      <About />
      <Skills />
      <Contact />
    </motion.div>
  );
};

export default Home;
