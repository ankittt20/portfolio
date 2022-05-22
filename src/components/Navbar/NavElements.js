import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #121212;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 992px) {
    transition: 0.8s all ease;
    background: #f1f1e8;
    display: none;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Montserrat;
  margin-top: 2rem;
  margin-bottom: 1rem;
  margin-left: 3rem;
  height: 80px;
  z-index: 1;
  width: 100%;
  /* max-width: 1100px; */
  @media screen and (max-width: 992px) {
    max-width: 100%;
  }
`;

export const NavLogo = styled(LinkR)`
  color: #000;
  justify-self: flex-start;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin-left: 0;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 992px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 0);
    font-size: 5rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 70px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 5.5rem;
  font-family: Montserrat;
  height: 100%;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline 3px #01bf71;
    text-underline-position: under;
    color: #fff;
  }

  &.active {
    color: #f5d5ea;
  }
`;
