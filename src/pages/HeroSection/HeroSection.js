// src/HeroSection.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Im from './pic.jpg';
import { Element } from 'react-scroll';

const HeroSection = () => {
  return (
    <Element name= 'hero'>
    <HeroContainer>
      <HeroContent>
        <TypingEffect>
          <h1>Hi, I am Harmony Maluleke.</h1>
        </TypingEffect>
        <p>
          A South African based front-end developer passionate about building accessible and user-friendly websites.
        </p>
        <SocialIcons>
          <a href="https://github.com/nhlulelo" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/nhlulelo-harmony-75637b1ba/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://x.com/maluleke_binbin" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </SocialIcons>
        <Buttons>
          <Button href="#contact">Contact Me</Button>
          <Button href="#resume" primary>View Resume</Button>
        </Buttons>
      </HeroContent>
      <HeroImage
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
    <img src={Im} alt="Harmony Maluleke" />
      </HeroImage>
    </HeroContainer>
    </Element>
  );
};

export default HeroSection;

// Styled Components
const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  50% { border-color: transparent; }
`;

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background: black;
  color: white;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
`;

const TypingEffect = styled.div`
  h1 {
    overflow: hidden;
    border-right: .15em solid #D3E97A;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation: ${typing} 3.5s steps(40, end), ${blink} .75s step-end infinite;
  }
`;

const SocialIcons = styled.div`
  margin: 1.5rem 0;
  a {
    margin: 0 1rem;
    font-size: 1.5rem;
    color: #D3E97A;
    transition: color 0.3s;
    &:hover {
      color: white;
    }
  }
`;

const Buttons = styled.div`
  margin-top: 1rem;
`;

const Button = styled.a`
  background: ${props => (props.primary ? 'white' : 'transparent')};
  color: ${props => (props.primary ? 'black' : 'white')};
  padding: 0.75rem 1.5rem;
  border: 2px solid #D3E97A;
  border-radius: 25px;
  text-decoration: none;
  transition: background 0.3s, color 0.3s;
  &:hover {
    background: #D3E97A;
    color: white;
  }
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const HeroImage = styled(motion.div)`
  img {
    max-width: 300px;
    border-radius: 20px;
    @media (max-width: 768px) {
      margin-top: 2rem;
    }
  }
`;