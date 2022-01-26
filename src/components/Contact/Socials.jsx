import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faYoutube,
//   faFacebook,
//   faTwitter,
//   faInstagram
// } from "@fortawesome/free-brands-svg-icons";
import { FaInstagram, FaLinkedin, FaYoutube, FaCode } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="social-container">
      <a
        href="https://www.instagram.com/ankittt20/"
        className="instagram social"
      >
        {/* <FontAwesomeIcon icon={faYoutube} size="2x" /> */}
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/ankittt20/"
        className="linkedin social"
      >
        {/* <FontAwesomeIcon icon={faFacebook} size="2x" /> */}
        <FaLinkedin />
      </a>
      <a
        href="https://www.youtube.com/channel/UCuF2JnVgn_7o3IQ0pDgAIxQ"
        className="youtube social"
      >
        {/* <FontAwesomeIcon icon={faTwitter} size="2x" /> */}
        <FaYoutube />
      </a>
      <a
        href="https://www.codechef.com/users/ankittt20"
        className="code social"
      >
        {/* <FontAwesomeIcon icon={faInstagram} size="2x" /> */}
        <FaCode />
      </a>
    </div>
  );
}
