import React from 'react';
import styled from 'styled-components';
import { Bio } from '../../data/constants';
import Typewriter from 'typewriter-effect';
import HeroBgAnimation from '../HeroBgAnimation';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { headContainerAnimation, headTextAnimation } from '../../utils/motion';
import StarCanvas from '../canvas/Stars';

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
  
  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }
  
  @media screen and (max-width: 640px) {
    padding: 32px;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  height: 100%;
  order: 2;
  display: flex;
  justify-content: end;

  @media screen and (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  background: #00E0FF; 
  background: linear-gradient(225deg, #00E0FF 0%, rgba(0, 224, 255, 0.6) 100%);
  border: none;
 box-shadow: 0 0 20px rgba(0, 224, 255, 0.3);
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;
  color: white;     
  transition: all 0.4s ease-in-out !important;
  
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    filter: brightness(1.2); /* Increased brightness for a 'glow' effect on hover */
    box-shadow: 0 0 30px rgba(0, 224, 255, 0.6);
  }    
  
  @media screen and (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  } 
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid ${({ theme }) => theme.primary};

  @media screen and (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media screen and (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <HeroBg>
          {<StarCanvas />} 
          <HeroBgAnimation />
        </HeroBg>

        <HeroInnerContainer>
          <HeroLeftContainer>
            <motion.div {...headContainerAnimation}>
              <Title>
                Hi, I am <br /> {Bio.name}
              </Title>
              <TextLoop>
                I Am A
                <Span>
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Span>
              </TextLoop>
              <SubTitle>{Bio.description}</SubTitle>
              <ResumeButton href={`/${Bio.resume}`} target="_blank" rel="noopener noreferrer" download>
                Check Resume
              </ResumeButton>
            </motion.div>
          </HeroLeftContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default Hero;