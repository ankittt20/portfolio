import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavItem } from "react-bootstrap";
// import { Nav } from "react-bootstrap";
import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavLinks
} from "./NavElements";

function Navbar({ toggle }) {
  return (
    <>
      <MobileIcon onClick={toggle}>
        <FaBars className="fa-bar" />
      </MobileIcon>
      <Nav>
        <NavbarContainer>
          {/* <NavLogo to="/">Home</NavLogo> */}

          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
                duration={100}
                exact="true"
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={100}
                exact="true"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="work"
                spy={true}
                smooth={true}
                offset={-80}
                duration={100}
                exact="true"
              >
                Skills
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={100}
                exact="true"
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
