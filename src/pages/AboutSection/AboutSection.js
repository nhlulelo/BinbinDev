// src/AboutSection.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import Im from '../HeroSection/pic.jpg';
import { Element } from 'react-scroll';

const AboutSection = () => {
  return (
    <Element name = 'about'>
    <AboutContainer>
      <AboutContent>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hi, I'm Harmony Maluleke, a front-end developer based in South Africa.
          I have a passion for creating beautiful and user-friendly websites.
          With a strong foundation in JavaScript and experience with modern
          frameworks like React, I strive to deliver high-quality web
          applications. In my free time, I love exploring new technologies and
          improving my skills.
        </motion.p>
      </AboutContent>
      
    </AboutContainer>
    </Element>
  );
};

export default AboutSection;

// Styled Components
const AboutContainer = styled.section`
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

const AboutContent = styled.div`
  max-width: 600px;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color:#D3E97A;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;
