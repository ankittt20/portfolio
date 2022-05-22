import styled from "styled-components";

export const Animation = styled.div`
  background: #f6f6f6;
  position: relative;
  z-index: -1;
`;

export const Heading = styled.h1`
  background: linear-gradient(
    271deg,
    #a0e9ff 30%,
    #a162e8 50%,
    #f093b0 70%,
    #edca85 94%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4rem;
  letter-spacing: -1px;
  line-height: 110%;
  margin: 0;
  transition: all 0.2s ease-in-out;
  position: absolute;
  z-index: 10;
  text-align: left;
  margin-left: 5%;
  margin-top: 210px;
  font-family: "MyWebFont", cursive;
  @media screen and (max-width: 992px) {
    transition: 0.8s all ease;
    font-size: 7rem;
    margin-left: 9%;
    margin-top: 190px;
  }
`;

export const Content = styled.p`
  color: #fff;
  position: absolute;
  z-index: 10;
  text-align: left;
  margin: 360px 55% 0 5%;
  font-family: "Montserrat";
  @media screen and (max-width: 992px) {
    transition: 0.8s all ease;
    font-size: 3rem;
    margin-left: 9%;
    margin-right: 7%;
    margin-top: 450px;
  }
`;

export const HomeVideo = styled.video`
  position: relative;
  z-index: 10;
  margin: 5% 0 5% 45%;
  border-radius: 50px;
  overflow: hidden;
  -webkit-transform: translateZ(0);
  box-shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.07);
  @media screen and (max-width: 992px) {
    transition: 0.8s all ease;
    width: 85%;
    margin: 50rem auto 5rem;
  }
`;

export const HomeImage = styled.img`
  position: relative;
  width: 45%;
  z-index: 10;
  margin: 5% 0 5% 45%;
  border-radius: 50px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  @media screen and (max-width: 992px) {
    width: 85%;
    margin: 50rem auto 5rem;
  }

  &:hover {
    transform: scale(1.02);
  }
`;
