import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import PhotoPic from "../../assets/photo.jpeg";
import SocialData from "../../components/social/socialData";
import SocialImage from "../../components/social/SocialImage";
const HomeContainer = styled.div`
  ${tw`
  w-full
  h-full
    flex
`};
`;

const HomeContainerLeft = styled.div`
  ${tw`
 flex
 w-full
 justify-center
 items-center
`};

  @media (max-width: 1080px) {
    position: relative;
    z-index: 2;
  }
`;

const IntroContainer = styled.div`
  ${tw`
flex
flex-col
ml-48
`};
  @media (max-width: 1080px) {
    margin-left: 1rem;
  }
`;

const BigText = styled.h1`
  ${tw`
text-white
text-8xl
`};
  @media (max-width: 1080px) {
    font-size: 3rem;
  }
`;

const MiddleText = styled.h1`
  ${tw`
text-middle-text
text-4xl
`};
`;
const Button = styled.button`
  border: 2px solid #0fd1fc;
  border-radius: 8px;
  ${tw`
text-white
w-32
text-xl
mt-10
`};
`;
const HomeContainerRight = styled.div`
  ${tw`
  flex
  flex-col
 justify-center
 items-center
  w-full

`};
  @media (max-width: 1080px) {
    position: absolute;
    z-index: 1;
  }
`;
const SocialIconContainer = styled.div`
  ${tw`
flex
justify-center
ml-96

`};
  @media (max-width: 1080px) {
    margin-left: 49vw;
  }
`;

const ProfileImageContainer = styled.img`
  height: 80vh;
  background-blend-mode: screen;
  @media (max-width: 1080px) {
    opacity: 0.5;
  }
`;

const HomePage = () => {
  return (
    <>
      <HomeContainer>
        <HomeContainerLeft>
          <IntroContainer>
            <BigText>I AM DAVID</BigText>
            <BigText>WELCOME TO MY PORTFOLIO</BigText>
            <MiddleText>I am a design thinker and a web developer.</MiddleText>
            <Button>Know more</Button>
          </IntroContainer>
        </HomeContainerLeft>
        <HomeContainerRight>
          <ProfileImageContainer src={PhotoPic} />
          <SocialIconContainer>
            {SocialData.map((social) => {
              return (
                <SocialImage
                  name={social.name}
                  src={social.src}
                  logo={social.logo}
                />
              );
            })}
          </SocialIconContainer>
        </HomeContainerRight>
      </HomeContainer>
    </>
  );
};

export default HomePage;
