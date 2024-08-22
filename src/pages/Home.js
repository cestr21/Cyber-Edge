import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Slider from 'react-slick';
import neonImage from '../assets/images/neon.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/images/wanderlust.png';
import image2 from '../assets/images/_CIRSS.png';
import image3 from '../assets/images/TacosGdl.png';
import videoSrc from '../assets/images/af1.mov';

const HeaderSection = styled.section`
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
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 70vh;
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    height: 50vh;
    padding: 0 10px;
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  z-index: 2;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    margin-left: 2rem;
  }

  @media (max-width: 480px) {
    margin-left: 1rem;
  }

  @media (max-width: 390px) {
    max-width: 100%;
    margin-top: 5rem;
  }
`;

const Heading = styled(motion.h1)`
  font-family: "Genesys";
  font-size: 3rem;
  margin-bottom: 20px;
  text-align: left;
  color: #fff;
  animation: fadeIn 2s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subheading = styled(motion.h2)`
  font-size: 2rem;
  margin: 0;
  padding: 0 20px;
  color: #fff;
  text-align: left;
  max-width: 600px;
  line-height: 1.3;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  animation: slideIn 2s ease-out;

  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    max-width: 400px;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    max-width: 300px;
    padding: 0 5px;
  }
`;

const ContactLink = styled.a`
  font-family: "NYXERIN";
  font-size: 2rem;
  color: #fff;
  text-decoration: underline;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
  transition: color 0.3s;

  &:hover {
    color: #CF1010; 
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: -2rem;
    right: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    top: 10px;
    right: 10px;
  }

  @media (max-width: 390px) {
    font-size: 1.2rem;
    top: 10px;
    right: 10px;
    margin-top: -5rem;
  }
`;
const PreviewSection = styled.section`
  padding: 80px 20px;
  background: #000; /* Solid black background */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 10%, rgba(0, 0, 0, 0) 60%);
    opacity: 0.3;
    pointer-events: none; 
    z-index: 1; 
  }

  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
`;

const Description = styled(motion.p)`
  font-family: "UNCAGE";
  font-size: 1.2rem;
  text-align: center;
  max-width: 800px;
  margin-bottom: -100px;
  opacity: 0;
  animation: fadeInUp 2s ease-out forwards;
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
`;

const CarouselImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  filter: brightness(90%);
  &:hover {
    filter: brightness(100%);
    transform: scale(1.05);
    transition: transform 0.3s, filter 0.3s;
  }
`;

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const VideoSection = styled.section`
  padding: 80px 20px;
  background-image: url(${neonImage});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  animation: pulse 15s infinite;

  @keyframes pulse {
    0% { background-position: 45% 45%; }
    50% { background-position: 60% 60%; }
    100% { background-position: 45% 45%; }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 60px 15px;
  }

  @media (max-width: 480px) {
    padding: 40px 10px;
  }
`;

const VideoDescription = styled(motion.p)`
  font-family: "UNCAGE";
  font-size: 1.2rem;
  color: #fff;
  text-align: center;
  max-width: 800px;
  margin-bottom: 10px;
  position: absolute; 
  top: 20px; 
  z-index: 2; 
  opacity: 0;
  animation: fadeInUp 2s ease-out forwards;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6); /* Added text shadow for better readability */

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 600px;
    top: 15px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    max-width: 400px;
    top: 10px;
  }

`;


const Video = styled(motion.video)`
  width: 100%;
  max-width: 800px;
  margin-top: 3rem;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transform: scale(0.98);
  transition: transform 0.3s;
  top: 50px; 
  z-index: 1; 

  &:hover {
    transform: scale(1);
  }

  @media (max-width: 768px) {
    max-width: 600px;
    margin-top: 10rem;
  }

  @media (max-width: 480px) {
    max-width: 400px;
    margin-top: 2rem;
    height: auto;
  }

  @media (max-width: 390px) {
    max-width: 350px;
    margin-top: 10rem;
    height: auto;
  }
`;

const AboutSection = styled.section`
  padding: 80px 20px;
  background: #000; /* Solid black background */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 10%, rgba(0, 0, 0, 0) 60%);
    opacity: 0.3;
    pointer-events: none; 
    z-index: 1; 
  }

  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
`;

const AboutText = styled(motion.div)`
  font-family: "UNCAGE";
  font-size: 1.2rem;
  color: #fff;
  text-align: center;
  max-width: 800px;
  margin: 0 auto; /* Center the text block */
  padding: 20px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  animation: fadeInUp 2s ease-out forwards;

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 15px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 10px;
    max-width: 95%; /* Ensure padding does not cause overflow */
    margin-top: 1rem;
  }
`;

const LearnMoreLink = styled.a`
  display: inline-block;
  margin-top: 20px;
  font-size: 1.5rem;
  color: #fff;
  text-decoration: underline;
  font-family: "NYXERIN";
  transition: color 0.3s;
  
  &:hover {
    color: #CF1010;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-top: 1rem;
  }
`;
const HomePage = () => {
  return (
    <>
      <HeaderSection>
        <HeaderContainer>
          <Heading>Cyber Edge</Heading>
          <Subheading>Transforming Ideas into Stunning Digital Realities. Let's Build the Future Together.</Subheading>
          <ContactLink href="/Contact">Contact Me</ContactLink>
        </HeaderContainer>
      </HeaderSection>

      <VideoSection>
        <VideoDescription>
          
Transform Your Business with a Modern Website

A sleek, up-to-date website captivates visitors, enhances user experience, and builds credibility. By embracing the latest design and technology, you'll boost your online presence, improve search engine rankings, and stay ahead of the competition. Invest in your digital future today and watch your business thrive.
        </VideoDescription>
        <Video autoPlay loop muted>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoSection>

      <PreviewSection>
        <CarouselContainer>
          <Slider {...carouselSettings}>
            <CarouselImage src={image1} alt="Project 1" />
            <CarouselImage src={image2} alt="Project 2" />
            <CarouselImage src={image3} alt="Project 3" />
          </Slider>
        </CarouselContainer>
        <Description>
       
        </Description>
      </PreviewSection>

      <AboutSection>
        <AboutText>
          Hello! I’m Claudio, a passionate developer with a love for creating interactive and engaging web experiences. Feel free to explore my portfolio and reach out if you’d like to collaborate!
          </AboutText>
          <LearnMoreLink href="/About">Learn More</LearnMoreLink>
      </AboutSection>
    </>
  );
};

export default HomePage
;
