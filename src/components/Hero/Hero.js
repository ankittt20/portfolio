import React from "react";
import {
  Animation,
  Heading,
  Content,
  HomeVideo,
  HomeImage
} from "./HeroStyles";
import "./HeroStyles.css";
import "../../styles.css";
import Coder from "../../images/Coder1.png";
import { motion } from "framer-motion";
import { animationOne, transition } from "../Animation";

function Background() {
  return (
    <>
      <Animation id="home">
        <div className="App area">
          <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={animationOne}
            transition={transition}
          >
            <Heading>
              Hi. I'm Ankit.
              <br />A Developer.
            </Heading>
            <Content>
              I’m a full-stack developer and general doodler with a keen eye for
              creating engaging UI, bringing products to life.
            </Content>
          </motion.div>
          <HomeImage src={Coder} />
          {/* <HomeVideo autoPlay loop muted src={Video} type="video/mp4" /> */}

          <div className="area">
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </Animation>
    </>
  );
}

export default Background;
