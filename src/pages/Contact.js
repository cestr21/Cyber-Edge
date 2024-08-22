import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import backgroundImage from '../assets/images/neon.jpg';

const ContactSection = styled.section`
  position: relative;
  min-height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
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

const ContactContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 600px;
  padding: 20px;
`;

const Initials = styled(motion.h1)`
  font-family: "NYXERIN";
  font-size: 6rem;
  color: #fff;
  margin-bottom: 20px;
  padding: 20px 30px;
  border-radius: 20px;
  letter-spacing: 3px;
  backdrop-filter: blur(8px);
  
  }
`;

const Subtitle = styled(motion.h2)`
  font-family: "UNCAGE";
  font-size: 1.2rem;
  color: #f8f9fa;
  margin-bottom: 20px;
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

const EmailLink = styled.a`
  font-size: 1.4rem;
  color: #fff;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.2);
  padding: 10px 20px;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  transition: color 0.3s ease, background 0.3s ease;

  &:hover {
    color: #ff6b6b;
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <ContactContainer>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Initials
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            CE
          </Initials>
          <Subtitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Let's Work Together<br />
            Web Design, Web Creation
          </Subtitle>
          <EmailLink href="mailto:c.estr.2112@gmail.com">
            c.estr.2112@gmail.com
          </EmailLink>
        </motion.div>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
