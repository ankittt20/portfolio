import styled from "styled-components";

export const AboutContainer = styled.div`
  box-shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.07);

  border-radius: 25px;
  background: rgb(254, 250, 181);
  background: linear-gradient(
    rgba(254, 250, 181, 1) 0%,
    rgba(251, 185, 243, 1) 100%
  );
  padding: 20px;
  width: 90%;
  height: 100vh;
  margin: 5% auto;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 992px) {
    height: 100%;
  }

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 992px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col2 col2' 'col1 col1'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-family: "Prata";
  margin: 2% 0 0 2%;
  @media screen and (max-width: 992px) {
    font-size: 4rem;
    margin: 4% 0 7% 3%;
  }
`;

export const Content = styled.p`
  color: #000;
  text-align: left;
  font-family: "Montserrat";
  font-size: 1rem;
  margin: 2% 0 0 3%;
  @media screen and (max-width: 992px) {
    transition: 0.8s all ease;
    font-size: 2.3rem;
    text-align: left;
  }
`;

export const ImgWrap = styled.div`
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 30px 0 15px 0;

  @media screen and (max-width: 992px) {
    margin: 25px 0;
  }

  &:hover {
  }
`;
