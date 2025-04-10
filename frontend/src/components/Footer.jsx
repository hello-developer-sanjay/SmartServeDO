import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

// Enhanced animations
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Styled components
const FooterContainer = styled.footer`
  background: ${({ theme }) => theme === 'dark' 
    ? 'linear-gradient(45deg, #cf8373, #8e4a3a)' 
    : 'linear-gradient(45deg, #176159, #0a3d38)'};
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#f0f0f0')};
  padding: 4rem 2rem 2rem;
  position: relative;
  overflow: hidden;
  animation: ${gradientShift} 10s ease infinite;
  background-size: 200% 200%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Section = styled(motion.div)`
  margin: 2rem 0;
`;

const FooterTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: linear-gradient(45deg, #0ff, #fff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${pulse} 2s infinite;
`;

const SocialIconsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(0, 0, 0, 0.1)'};
  color: #0ff;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 15px rgba(0, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px) rotate(10deg);
    box-shadow: 0 6px 20px rgba(0, 255, 255, 0.4);
    color: #fff;
  }

  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

const ToggleButton = styled(motion.button)`
  background: linear-gradient(45deg, #0ff, #00ffff);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 255, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 255, 255, 0.5);
  }
`;

const CatchyMessage = styled(motion.p)`
  font-size: 1.6rem;
  font-weight: 600;
  background: linear-gradient(45deg, #fff, #0ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
`;

const Copyright = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 255, 255, 0.2);
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
`;

const DecorativeElement = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(0,255,255,0.2) 0%, rgba(0,255,255,0) 70%);
  pointer-events: none;
  z-index: 1;
  ${props => props.position === 'top-left' && `
    top: -100px;
    left: -100px;
  `}
  ${props => props.position === 'bottom-right' && `
    bottom: -100px;
    right: -100px;
  `}
`;

const Footer = () => {
  // Local theme state instead of context
  const [theme, setTheme] = useState('light');
  
  // Theme toggle function
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });

  const [message] = useState("Stay Curious. Connect with Us!");
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  useEffect(() => {
    if (inView1) controls1.start({ opacity: 1, y: 0 });
    if (inView2) controls2.start({ opacity: 1, y: 0 });
    if (inView3) controls3.start({ opacity: 1, y: 0 });
  }, [controls1, controls2, controls3, inView1, inView2, inView3]);

  const socialButtons = [
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sanjay-patidar-25b580292", delay: 0 },
    { icon: <FaGithub />, link: "https://github.com/hello-developer-sanjay", delay: 0.2 },
    { icon: <FaTwitter />, link: "#", delay: 0.4 },
    { icon: <FaInstagram />, link: "https://www.instagram.com/jay7268patidar", delay: 0.6 },
  ];

  return (
    <FooterContainer theme={theme}>
      <DecorativeElement position="top-left" />
      <DecorativeElement position="bottom-right" />
      
      <FooterContent>
        <Section
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={controls1}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FooterTitle>SmartServe Chat | LIC India</FooterTitle>
        </Section>

        <Section
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={controls2}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <CatchyMessage>{message}</CatchyMessage>
        </Section>

        <AnimatePresence>
          <SocialIconsContainer>
            {socialButtons.map((button, index) => (
              <SocialIcon
                key={index}
                href={button.link}
                target="_blank"
                rel="noopener noreferrer"
                theme={theme}
                delay={button.delay}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: button.delay }}
              >
                {button.icon}
              </SocialIcon>
            ))}
          </SocialIconsContainer>
        </AnimatePresence>

        <Section
          ref={ref3}
          initial={{ opacity: 0, y: 50 }}
          animate={controls3}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <ToggleButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
          >
            Toggle Theme ({theme === 'light' ? '🌞' : '🌙'})
          </ToggleButton>
        </Section>

        <Copyright>
          {currentDate} | All rights reserved to Zedemy founded by Sanjay Patidar
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
