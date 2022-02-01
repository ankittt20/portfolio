import React from "react";
import WebD from "../../images/WebD.svg";
import Music from "../../images/Music.svg";
import {
  SkillsContainer,
  Heading,
  SkillsWrapper,
  SkillsCard,
  SkillsIcon,
  SkillsContent
} from "./SkillsBG";

function Skills() {
  return (
    <>
      <SkillsContainer id="work">
        <Heading>My Skills</Heading>
        <SkillsWrapper>
          <SkillsCard>
            <SkillsIcon src={WebD} />
            <SkillsContent>
              I've been trying my hands on Competitive Programming and have also
              done couple of projects using Node, Express, MongoDB and React.
            </SkillsContent>
          </SkillsCard>
          <SkillsCard>
            <SkillsIcon src={Music} />
            <SkillsContent>
              I'm also a Music Producer sharing some raw music and vibes with
              you all. You can checkout my tracks on my{" "}
              <a href="https://www.youtube.com/channel/UCuF2JnVgn_7o3IQ0pDgAIxQ">
                YouTube
              </a>{" "}
              or{" "}
              <a href="https://open.spotify.com/artist/1EO1Z1HfyIvbFAVzptoDOM?si=j2u497JARcmDgh5awkJ63w">
                Spotify
              </a>
              .
            </SkillsContent>
          </SkillsCard>
        </SkillsWrapper>
      </SkillsContainer>
    </>
  );
}

export default Skills;
