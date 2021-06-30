import React from "react";

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
`;

const Logo = styled.img`
  ${tw`


`};
`;

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
        <Logo src={LogoImage} />
        <NavLinkComponent>Blogs</NavLinkComponent>
        <NavLinkComponent>About</NavLinkComponent>
        <NavLinkComponent>Contact me</NavLinkComponent>
      </NavContainer>
    </>
  );
};
