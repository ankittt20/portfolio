import styled from "styled-components";

export const SkillsContainer = styled.div`
  box-shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.07);

  border-radius: 25px;
  /* background: #f1f1e8; */
  background: rgb(254, 181, 239);
  background: linear-gradient(
    rgba(254, 181, 239, 1) 0%,
    rgba(176, 187, 255, 1) 100%
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

export const Heading = styled.h1`
  margin: 2% 0 4% 82%;
  font-size: 2.5rem;
  font-family: "Prata";
  @media screen and (max-width: 992px) {
    font-size: 4rem;
    margin: 4% 0 7% 60%;
  }
`;

export const SkillsWrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 3rem;
  padding: 0 50px;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    margin-bottom: 5rem;
  }
`;

export const SkillsCard = styled.div`
  background: #f3f1f5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 25px;
  max-height: 100%;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const SkillsIcon = styled.img`
  height: 300px;
  width: 70%;
  margin-bottom: 10px;
`;

export const SkillsContent = styled.p`
  text-align: center;
  font-size: 1.1rem;
  margin: 0 3%;
  font-family: "Montserrat";
  @media screen and (max-width: 992px) {
    font-size: 2rem;
  }
`;
