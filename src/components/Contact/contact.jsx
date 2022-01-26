import React from "react";
import { ContactBG, Content, Heading, Chat } from "./ContactBG";
import Socials from "./Socials";

function Contact() {
  return (
    <>
      <ContactBG id="contact">
        <Heading>I occasionally take on freelance opportunities.</Heading>
        <Content>
          Have an exciting project where you need some help? Send me over a
          message, and <Chat to="/ContactMe">let's chat.</Chat>
        </Content>
        <Socials />
      </ContactBG>
    </>
  );
}

export default Contact;
