import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import backgroundImage from '../assets/images/neon.jpg';

const AboutSection = styled.section`
  position: relative;
  min-height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  padding: 0 30px;
  animation: backgroundMove 15s ease-in-out infinite;

  @keyframes backgroundMove {
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0, 0.7) 70%);
    z-index: 1;
  }
`;

const AboutContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1200px;
  padding: 20px;
`;

const Heading = styled(motion.h1)`
  font-family: "NYXERIN";
  font-size: 4rem;
  color: #fff;
  margin-bottom: 20px;
  padding: 20px 30px;
  border-radius: 20px;
  letter-spacing: 3px;
  backdrop-filter: blur(8px);

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-top: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
    margin-top: 4rem;
  }

  @media (max-width: 390px) {
    font-size: 3rem;
    margin-top: 4rem;
  }
`;


const Subheading = styled(motion.h2)`
  font-family: "Genesys";
  font-size: 2rem;
  color: #f8f9fa;
  margin-bottom: 30px;
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.8);
  padding: 15px 25px;
  border-radius: 12px;
  backdrop-filter: blur(8px);
  animation: fadeInSlideUp 1.5s ease-out;

  @keyframes fadeInSlideUp {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Description = styled(motion.p)`
  font-size: 1rem;
  color: #fff;
  max-width: 800px;
  line-height: 1.8;
  text-align: left;
  background: rgba(255, 255, 255, 0.2);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  animation: fadeInUp 2s ease-out forwards;

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 20px 0;

    li {
      margin: 15px 0;
      font-size: 1.2rem;
      padding-left: 30px;
      color: #fff;
      position: relative;
      &:before {
        content: '★';
        position: absolute;
        left: 0;
        font-size: 1.5rem;
        color: #ff6b6b;
        top: 0;
      }
    }
  }
`;

const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Heading
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            About Us
          </Heading>
          <Subheading
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Elevate Your Digital Presence
          </Subheading>
          <Description>
            I'm a seasoned web designer and developer based in Texas, dedicated to transforming digital landscapes for businesses of all sizes. My mission is to craft visually stunning and highly functional websites that capture your brand’s essence and drive meaningful engagement.

            What sets me apart:
            <ul>
              <li><strong>Tailored Solutions:</strong> Bespoke web solutions aligned with your business objectives and brand identity.</li>
              <li><strong>Innovative Design:</strong> Crafting designs with precision and creativity for a captivating user experience.</li>
              <li><strong>Cutting-Edge Technology:</strong> Utilizing the latest technologies and best practices for future-proof websites.</li>
              <li><strong>Comprehensive Support:</strong> Offering full-spectrum services from concept to post-launch support.</li>
            </ul>
          </Description>
        </motion.div>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
