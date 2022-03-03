import styled from "styled-components";

export const Animation = styled.div`
  background: #f1f1e8;
  position: relative;
  z-index: -1;
`;

export const Heading = styled.h1`
  font-size: 4.2rem;
  position: absolute;
  z-index: 10;
  text-align: left;
  margin-left: 7%;
  margin-top: 12rem;
  font-family: "Prata";
  @media screen and (max-width: 992px) {
    transition: 0.8s all ease;
    font-size: 7.5rem;
    margin-left: 9%;
    margin-top: 10rem;
  }
`;

export const Content = styled.p`
  color: #000;
  position: absolute;
  z-index: 10;
  text-align: left;
  margin-left: 7%;
  margin-right: 53%;
  margin-top: 23rem;
  font-family: "Montserrat";
  @media screen and (max-width: 992px) {
    transition: 0.8s all ease;
    font-size: 3rem;
    margin-left: 9%;
    margin-right: 7%;
    margin-top: 30rem;
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
    margin: 53rem auto 5rem;
  }
`;

export const HomeImage = styled.img`
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
    margin: 53rem auto 5rem;
  }
`;
