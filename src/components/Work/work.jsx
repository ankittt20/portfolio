import React from "react";
import WebD from "../../images/WebD.svg";
import Music from "../../images/Music.svg";
import {
  WorkContainer,
  Heading,
  WorkWrapper,
  WorkCard,
  WorkIcon,
  WorkContent
} from "./WorkBG";

function Work() {
  return (
    <>
      <WorkContainer id="work">
        <Heading>My Work</Heading>
        <WorkWrapper>
          <WorkCard>
            <WorkIcon src={WebD} />
            <WorkContent>
              I've been trying my hands on Competitive Programming and have also
              done couple of projects using Node, Express, MongoDB and React.
            </WorkContent>
          </WorkCard>
          <WorkCard>
            <WorkIcon src={Music} />
            <WorkContent>
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
            </WorkContent>
          </WorkCard>
        </WorkWrapper>
      </WorkContainer>
    </>
  );
}

export default Work;
