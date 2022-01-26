import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";
import { ContentRight, Form, Heading, InputWrapper } from "./FormStyles";

function FormSignup() {
  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c43cet8",
        "template_jt2ajil",
        form.current,
        "user_RN3CtAJfSqioXq4mvX61U"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
    setTimeout(() => {
      showResult(false);
    }, 2500);
  };

  return (
    <ContentRight>
      <Form>
        <form onSubmit={sendEmail} ref={form} autocomplete="off">
          <Heading>Say Hello!</Heading>
          <InputWrapper>
            <label className="form-label">Full Name</label>
            <input
              className="form-input"
              type="text"
              name="fullName"
              placeholder="Your Full Name"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <label className="form-label">Email Id</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Enter Your Email Id"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <label className="form-label">Phone Number</label>
            <input
              className="form-input"
              type="tel"
              name="phone"
              placeholder="Enter Your Phone Number"
            />
          </InputWrapper>
          <InputWrapper>
            <label className="form-label">Message</label>
            <textarea
              className="form-input"
              name="message"
              placeholder="Enter Your Message"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <button className="form-input-btn" type="submit">
              Send!
            </button>
            <div>{result ? <p class="success">Message Sent!</p> : null}</div>
          </InputWrapper>
        </form>
      </Form>
    </ContentRight>
  );
}

export default FormSignup;
