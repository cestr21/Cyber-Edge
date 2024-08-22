import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import neonImage from '../assets/images/neon.jpg';

const IntroContainer = styled.div`
  font-family: "Hyperwave";
  position: relative;
  height: 100vh;
  background-image: url(${neonImage});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  overflow: hidden;
  animation: pulse 15s infinite;

  @keyframes pulse {
    0% { background-position: 4% 4%; }
    50% { background-position: 10% 10%; }
    100% { background-position: 4% 4%; }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0; /* Overlay behind text */
  }
`;

const Initials = styled(Link)`
  font-family: 'Genesys';
  font-size: 5rem;
  color: #b8040d;
  text-decoration: none;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease-in-out;
  position: relative; /* Ensure z-index works */
  z-index: 10;

  &:hover {
    transform: scale(2.1);
    color: #fdfdfd;
  }
`;

const EnterText = styled.p`
  margin-top: 10px;
  font-family: 'NYXERIN';
  font-size: 1.5rem;
  color: #ffffff;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  position: relative; /* Ensure z-index works */
  z-index: 10;
`;


const Intro = () => {
  return (
    <IntroContainer>
      <div style={{ textAlign: 'center' }}>
        <Initials to="/home">CE</Initials>
        <EnterText>Click to Enter</EnterText>
      </div>
    </IntroContainer>
  );
};

export default Intro;
