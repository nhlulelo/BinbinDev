// src/SkillsSection.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaJsSquare,
  FaReact,
  FaNode,
  FaGit,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
} from 'react-icons/fa';


import { SiFirebase, SiTailwindcss, SiAdobeillustrator } from 'react-icons/si';
import { Element } from 'react-scroll';

const SkillsSection = () => {
  return (
    <Element name="skills">
    <SkillsContainer>
      <SectionTitle>Skills</SectionTitle>
      <SkillsCategory>
        <CategoryTitle>Using Now</CategoryTitle>
        <SkillsGrid>
          <Skill>
            <FaJsSquare />
            <span>JavaScript</span>
          </Skill>
          <Skill>
            <FaReact />
            <span>React</span>
          </Skill>
          <Skill>
            <FaReact />
            <span>React Native</span>
          </Skill>
          <Skill>
            <SiFirebase />
            <span>Firebase</span>
          </Skill>
          <Skill>
            <FaFigma />
            <span>Figma</span>
          </Skill>
          <Skill>
            <FaHtml5 />
            <span>HTML5</span>
          </Skill>
          <Skill>
            <FaCss3Alt />
            <span>CSS</span>
          </Skill>
        </SkillsGrid>
      </SkillsCategory>
      <SkillsCategory>
        <CategoryTitle>Learning</CategoryTitle>
        <SkillsGrid>
          <Skill>
            <FaNode />
            <span>Node.js</span>
          </Skill>
          <Skill>
            <SiTailwindcss />
            <span>Tailwind CSS</span>
          </Skill>
        </SkillsGrid>
      </SkillsCategory>
      <SkillsCategory>
        <CategoryTitle>Additional Skills</CategoryTitle>
        <SkillsGrid>
          <Skill>
            <FaGit />
            <span>Git</span>
          </Skill>
         
          <Skill>
            <SiAdobeillustrator />
            <span>Adobe Illustrator</span>
          </Skill>
        </SkillsGrid>
      </SkillsCategory>
    </SkillsContainer>
    </Element>
  );
};

export default SkillsSection;

// Styled Components
const SkillsContainer = styled.div`
  padding: 2rem;
  background: black;
  color: white;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const SkillsCategory = styled.div`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1.5rem;
`;

const Skill = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: grey;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, background 0.3s;
  svg {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  span {
    font-size: 1rem;
  }
  &:hover {
    transform: translateY(-5px);
    background: #D3E97A;
  }
`;
