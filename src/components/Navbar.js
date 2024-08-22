import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavbarContainer = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 60px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Ensure it stays on top */

  /* Mobile Responsive Styles */
  @media (max-width: 768px) {
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    flex-direction: row;
  }
  @media (max-width: 390px) {
    max-width: 100%;
  }
`;

const NavLink = styled(motion(Link))`
  font-family: "NYXERIN";
  color: #fff;
  margin: 20px 0;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    margin: 0 20px;
    writing-mode: horizontal-tb;
    transform: none;
  }

  &:hover {
    color: #962a2a;
    transform: scale(1.1);

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #ffffff;
      bottom: -5px;
      left: 0;
      transform: scaleX(1);
      transition: transform 0.3s ease;
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: transparent;
    bottom: -5px;
    left: 0;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: .8rem;
  }

  @media (max-width: 390px) {
    font-size: .8rem;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();

  const slideVariants = {
    hidden: {
      x: '-100%',
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit: {
      x: '100%',
      transition: {
        duration: 0.7,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  const handleNavClick = (path) => {
    if (path.startsWith('http')) {
      window.location.href = path; // Handle external link
    } else {
      navigate(path); // Handle internal navigation
    }
  };

  return (
    <NavbarContainer>
      <NavLink
        to="/home"
        variants={slideVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={() => handleNavClick('/home')}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        variants={slideVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={() => handleNavClick('/about')}
      >
        About
      </NavLink>
      <NavLink
        to="https://cestrada.netlify.app/"
        variants={slideVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={() => handleNavClick('https://cestrada.netlify.app/')}
      >
        Work
      </NavLink>
      <NavLink
        to="/contact"
        variants={slideVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={() => handleNavClick('/contact')}
      >
        Contact
      </NavLink>
    </NavbarContainer>
  );
};

export default Navbar;
