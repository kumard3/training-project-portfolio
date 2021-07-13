import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import tw from "twin.macro";
import LogoImage from "../../assets/logo.svg";
const NavContainer = styled.div`
  ${tw`
 
  justify-around
  items-center
  flex
    w-1/2
    h-24
`};
@media (max-width:1080px){
  width:auto;
}
`;

const Logo = styled.img``;

const NavLinkComponent = styled.h3`
  ${tw`
text-white
text-3xl
`};
`;

export const NavBar = () => {
  return (
    <>
      <NavContainer>
        <NavLink to="/">
          <Logo src={LogoImage} />
        </NavLink>

        <NavLink to="/blogs">
          <NavLinkComponent>Blogs</NavLinkComponent>
        </NavLink>
        <NavLink to="/about">
          <NavLinkComponent>About</NavLinkComponent>
        </NavLink>
        <NavLink to="/contact">
          <NavLinkComponent>Contact me</NavLinkComponent>
        </NavLink>
      </NavContainer>
    </>
  );
};
