import React from "react";
import {
  Heading,
  Content,
  Column1,
  Column2,
  ImgWrap,
  Img,
  AboutContainer,
  AboutWrapper,
  AboutRow
} from "./AboutBG";
import Image from "../../images/About.svg";

function About() {
  return (
    <>
      <AboutContainer id="about">
        <Heading>About Me</Heading>
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <Content>
                I am Ankit, a second-year undergraduate at NIT, Jamshedpur. I
                love to read, design, code, make music, etc in short I am the
                "jack of all trades and trying to master each one". I am
                caffeine-addicted mortal and blue lays lover always ready to
                chatter on cricket, music, web series, novels and procrastinate.
                <br />
                <br />
                I have serious passion for UI Effects, Animations and creating
                dynamic intuitive, dynamic user experiences.
                <br />
                <br />
                Interested in the entire web development spectrum and working on
                ambitious projects with positive people.
              </Content>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={Image} alt="About Image" />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
}

export default About;
