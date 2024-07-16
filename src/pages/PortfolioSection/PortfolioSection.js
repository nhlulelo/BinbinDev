import React from 'react';
import styled from 'styled-components';
import pic1 from './pic1.png';

import pic3 from './pic3.png';
import pic4 from './pic4.jpg';
import { Element } from 'react-scroll';

const Section = styled.section`
  padding: 4em 0;
  background-color: black;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 1em;
  color:#D3E97A;
`;

const PortfolioGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
`;

const PortfolioItem = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  max-width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PortfolioImage = styled.img`
  width: 100%;
  height: auto;
`;

const PortfolioContent = styled.div`
  padding: 1em;
  text-align: center;
`;

const PortfolioTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 0.5em;
`;

const PortfolioDescription = styled.p`
  font-size: 1em;
  margin-bottom: 1em;
`;

const PortfolioLink = styled.a`
  color: #3498db;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'This is a brief description of project one.',
      imageUrl: {pic1},
      projectUrl: 'https://github.com/username/project-one',
    },
    {
      title: 'Project Two',
      description: 'This is a brief description of project two.',
      imageUrl: './pic2.png',
      projectUrl: 'https://github.com/username/project-two',
    },
    {
        title: 'Project Two',
        description: 'This is a brief description of project two.',
        imageUrl: {pic3},
        projectUrl: 'https://github.com/username/project-two',
      },
      {
        title: 'Project Two',
        description: 'This is a brief description of project two.',
        imageUrl: {pic4},
        projectUrl: 'https://github.com/username/project-two',
      },
    // Add more projects as needed
  ];

  return (
    <Element name = 'portfolio' >
    <Section id="portfolio">
      <SectionTitle>Portfolio</SectionTitle>
      <PortfolioGrid>
        {projects.map((project, index) => (
          <PortfolioItem key={index}>
            <PortfolioImage src={project.imageUrl} alt={project.title} />
            <PortfolioContent>
              <PortfolioTitle>{project.title}</PortfolioTitle>
              <PortfolioDescription>{project.description}</PortfolioDescription>
              <PortfolioLink href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                View Project
              </PortfolioLink>
            </PortfolioContent>
          </PortfolioItem>
        ))}
      </PortfolioGrid>
    </Section>
    </Element>
  );
};

export default PortfolioSection;
