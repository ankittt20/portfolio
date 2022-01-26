import React, { useState } from "react";
import Background from "../components/Background/Background.js";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import About from "../components/About/about";
import Contact from "../components/Contact/contact";
import Work from "../components/Work/work";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Background />
      <About />
      <Work />
      <Contact />
    </>
  );
};

export default Home;
