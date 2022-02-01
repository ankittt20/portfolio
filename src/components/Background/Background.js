import React from "react";
import { Animation, Heading, Content, HomeVideo } from "./BgElements";
import "../../styles.css";
import Video from "../../images/Developer.mp4";
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

          <HomeVideo autoPlay loop muted src={Video} type="video/mp4" />

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
