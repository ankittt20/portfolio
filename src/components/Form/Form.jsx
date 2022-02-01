import React from "react";
import "./Form.css";
import FormSignup from "./FormSignup";
import {
  FormContainer,
  Close,
  ContentLeft,
  VideoBG,
  ContactVideo
} from "./FormStyles";
import Video from "../../images/Matrix.mp4";

const Form = () => {
  return (
    <>
      <FormContainer>
        <VideoBG>
          <ContactVideo autoPlay loop muted src={Video} type="video/mp4" />
        </VideoBG>
        <Close to="/">×</Close>
        <ContentLeft>
          {/* <img
            className="form-img"
            src="https://static.vecteezy.com/system/resources/previews/000/966/061/non_2x/astronaut-skateboarding-in-space-vector.jpg"
            alt="spaceship"
          /> */}
          <img
            className="form-img"
            src="https://static.vecteezy.com/system/resources/previews/004/808/326/non_2x/hand-drawn-illustration-of-cute-astronaut-flying-on-outer-space-vector.jpg"
            // src="https://static.vecteezy.com/system/resources/previews/003/692/511/non_2x/astronaut-reading-a-book-in-space-free-vector.jpg"
            alt="spaceship"
          />
        </ContentLeft>
        <FormSignup />
      </FormContainer>
    </>
  );
};

export default Form;
