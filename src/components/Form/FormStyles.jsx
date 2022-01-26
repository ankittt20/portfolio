import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormContainer = styled.div`
  /* background: #000; */
  margin: 0 auto;
  position: relative;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentLeft = styled.div`
  position: relative;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const VideoBG = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const ContactVideo = styled.video`
  z-index: -1;
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const ContentRight = styled.div`
  position: relative;
  background: #000;

  @media screen and (max-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100vh;
  }
`;

export const Form = styled.div`
  position: absolute;
  margin: 0 auto;
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
`;

export const Close = styled(Link)`
  position: absolute;
  top: 10px;
  right: 30px;
  font-size: 3rem;
  z-index: 1;
  color: #fff;
  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: 992px) {
    font-size: 6rem;
    top: -10px;
  }
`;

export const Heading = styled.h1`
  font-size: 3rem;
  text-align: left;
  margin-bottom: 1.5rem;
  margin-top: 5rem;
  color: #fff;

  @media screen and (max-width: 992px) {
    text-align: center;
    font-size: 5rem;
    margin-bottom: 7rem;
    margin-top: 0;
  }

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    color: green;
    cursor: pointer;
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 0.8rem;
  width: 30rem;

  @media screen and (max-width: 992px) {
    width: 25rem;
    transform: scale(1.8);
    height: 10rem;
    margin: 0.1rem auto;
  }
`;
