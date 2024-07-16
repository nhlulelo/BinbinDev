// src/Navbar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo href="#">BinbinDev</Logo>
      <Hamburger onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuItem to="hero" smooth={true} duration={500} onClick={toggleMenu}>
          Home
        </MenuItem>
        <MenuItem to="about" smooth={true} duration={500} onClick={toggleMenu}>
          About
        </MenuItem>
        <MenuItem to="skills" smooth={true} duration={500} onClick={toggleMenu}>
          Skills
        </MenuItem>
        <MenuItem to="portfolio" smooth={true} duration={500} onClick={toggleMenu}>
          Portfolio
        </MenuItem>
        <MenuItem to="contact" smooth={true} duration={500} onClick={toggleMenu}>
          Contact
        </MenuItem>
        <HireButton to="contact" smooth={true} duration={500} onClick={toggleMenu}>
          Hire Me
        </HireButton>
      </Menu>
    </Nav>
  );
};

export default Navigation;

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: black;
  position: relative;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled(motion.div)`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: black;
    padding: 1rem 0;
  }
`;

const MenuItem = styled(ScrollLink)`
  margin: 0 1rem;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s;

  &:hover {
    color: #D3E97A;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 1rem 0;
    text-align: center;
  }
`;

const HireButton = styled(ScrollLink)`
  background: white;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  text-decoration: none;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #D3E97A;
    color: white;
  }

  @media (max-width: 768px) {
    display: block;
    text-align: center;
    margin: 1rem auto 0;
  }
`;
