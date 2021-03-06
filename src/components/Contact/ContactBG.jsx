import styled from "styled-components";
import { Link } from "react-router-dom";
export const ContactBG = styled.div`
  border-radius: 25px;
  /* background: #f1f1e8; */
  ${'' /* background: rgb(176, 187, 255);
  background: linear-gradient(
    rgba(176, 187, 255, 1) 0%,
    rgba(0, 41, 113, 1) 100%
  ); */}
  background: #191919;
  padding: 20px;
  box-shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.07);
  width: 90%;
  height: 100vh;
  margin: 5% auto;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 992px) {
    height: 35vh;
  }

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
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
  font-size: 3.5rem;
  line-height: 120%;
  letter-spacing: -1px;
  text-align: center;
  margin: 12% 20% 3%;
  font-family: "MyWebFont", cursive;
  @media screen and (max-width: 992px) {
    font-size: 4rem;
    margin: 15% auto 2%;
  }
`;

export const Content = styled.p`
  text-align: center;
  margin: 0 25%;
  font-size: 1.2rem;
  font-family: "Montserrat";
  color: #e9e8e8;
  @media screen and (max-width: 992px) {
    transition: 0.8s all ease;
    font-size: 2.5rem;
    margin: 4.5%;
    margin-bottom: 3%;
  }
`;

export const Chat = styled(Link)`
  cursor: pointer;
  color: #e9e8e8;
  &:hover {
    color: rgb(221, 176, 255);
    color: linear-gradient(
      90deg,
      rgba(221, 176, 255, 1) 0%,
      rgba(113, 0, 73, 1) 100%
    );
  }
`;
