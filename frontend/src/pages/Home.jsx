import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import { Link } from 'react-scroll';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  FaTwitter, FaInstagram } from "react-icons/fa";
import profileImage1 from '../assets/jitendraprofilephoto.jpg';
import Typed from 'react-typed';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styles } from '../styles';
import '../styles/home.css';
import StarsCanvas from '../components/Stars';
import LearnImage from '../assets/lic-term-insurance.png';

import { useInView } from 'react-intersection-observer'; 
import LicHeader from '../components/LicHeader';
import LicChatBot from '../components/LicChatBot';
const H2 = styled.h1`
color: #0DCB9A;

  font-size: 3rem;
 margin-bottom: 0rem;
 font-weight: 900;
 font-family: 'Playfair Display', serif !important; 
 margin-top: 0rem;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
 transform: skew(-5deg); /* Apply a slight skew for a dynamic effect */
 
 @media (max-width: 768px) {
   margin-top: 0rem;
   font-size: 1.2rem;

 }
`;
const ContactButton = styled.a`
  color: white;
  box-shadow: 0px 0px 10px #fff;
  padding: 3px 5px;
  border: 2px solid #ffbb00; /* Creative border */
  border-radius: 30px; /* Increased border radius */
  font-size: 1rem; /* Slightly increased font size */
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease; 

  &:hover {
      border-color: #ffd700; /* Matching border color */
    box-shadow: 0px 0px 10px #ffd700; /* Shining effect */
  }
`;


const ContactButtonText = styled.span`
  font-weight: Bold;
`;
const Next = styled.h1`
font-size: 1.1rem;
color: #f3f3f3;
margin-bottom: 1.5rem;
line-height: 1.4;
text-align: justify;
border-left: 4px solid #5d00ff;
border-right: 4px solid #5d00ff;

padding-left: 10px;
padding-right:10px;
border-radius: 8px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const TypedText = styled.span`
    display: block;
    margin-top: 1rem;
    margin-bottom: 2rem;
    text-transform:uppercase;
    font-style: italic;
    font-weight: bold;
    font-size: 4rem;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    @media (max-width: 768px) {
      font-size: 1.2rem;
      margin-bottom: 1rem;

    }

    /* Change the color of the typing text */
    @media (prefers-color-scheme: dark) {
      color: #51D5FF; /* Bright yellow in dark mode */
    }

    @media (prefers-color-scheme: light) {
      color: #ffffff; /* Deep orange in light mode */
    }
  `;
  const ProfileTextContainer = styled.div`
  display: flex;
  position : relative;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  margin-top: 0rem;
  margin-right: 1rem;
  height: 180px;
  @media (min-width: 768px) {
    text-align: left;
    margin-top: 0;
  
  }
  @media (max-width: 768px) {
    
    max-width: 90%;
  
  }
  `;
 const Introduction = styled(motion.p)`
 font-size: 1.5rem;
 line-height: 1.5;
 max-width: 800px;
 text-align: center;
 margin-top : 1rem;
 margin-bottom: 1rem;
 color: #ffffff; /* White on hover */

 
 .highlight {
   position: relative;
   display: inline-block;
   font-size: 4rem;
   font-weight: bold;
   color: transparent;
   background: linear-gradient(45deg, #ff4081, #00bcd4); /* Gradient highlight */
   background-clip: text;
   -webkit-background-clip: text;
   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Shadow for depth */
   padding-bottom: 5px;
   margin-bottom: 1px;
   line-height: 4rem;
   /* Animation for the highlight class */
   @media (max-width: 768px) {
 font-size: 1.5rem;
 line-height: 2rem;

 }
 }


 @keyframes highlightAnimation {
   0%, 100% {
     background-position: 0% 50%;
   }
   50% {
     background-position: 100% 50%;
   }
 }


 @media (max-width: 768px) {
 margin-top:1rem;
 font-size: 1.5rem;

 }
`;


const images = [profileImage1];
let currentImageIndex = 0;

const Introduction2 = styled(motion.p)`
  font-size: 1.5rem;
  line-height: 1.5;
  max-width: 800px;
  text-align: center;

  color: #ffffff; /* White on hover */
  font-family: 'Playfair Display', serif;

  
  .highlight {
    position: relative;
    display: inline-block;
    font-size: 3rem;
    font-weight: bold;
    color: transparent;
    font-family: 'Playfair Display', serif;

    background: linear-gradient(45deg, #ff4081, #00bcd4); /* Gradient highlight */
    background-clip: text;
    -webkit-background-clip: text;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Shadow for depth */
    padding-bottom: 0px;
    /* Animation for the highlight class */
    animation: highlightAnimation 3s ease-in-out infinite;
    @media (max-width: 768px) {
  font-size: 1.5rem;
  line-height: 2rem;

  }
  }


  @keyframes highlightAnimation {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: linear-gradient(45deg, #ff4081, #00bcd4); /* Gradient border */
    margin-top: 0px;
    position: relative;
    animation: shimmerAnimation 3s ease-in-out infinite;
  }

  
  @keyframes shimmerAnimation {
    0% {
      background-position: -200% 50%;
    }
    100% {
      background-position: 200% 50%;
    }
  }
   @media (max-width: 768px) {
  margin-top:1rem;
  font-size: 1.2rem;

  }
`;




function Home() {  
  
  const [imageAnimated] = useState(false);
  const [contentAnimated, setContentAnimated] = useState(false);
  const controlsImage = useAnimation();
  const controlsContent = useAnimation();
  const controlsContents = useAnimation();

  const [inViewImage] = useInView();
  const [whyImageAnimated, setWhyImageAnimated] = useState(false);
  const [learnImageAnimated, setLearnImageAnimated] = useState(false);
  const controlsWhyImage = useAnimation();
  const controlsLearnImage = useAnimation();
  const [refWhyImage,    inViewWhyImage] = useInView();
  const [refLearnImage, inViewLearnImage] = useInView();

  const [ inViewContent] = useInView();

  useEffect(() => {
   

    if (inViewWhyImage && !whyImageAnimated) {
      controlsWhyImage.start({
        scale: [0.8, 1.2, 1],
        rotateY: [0, 360],
        opacity: [0, 1],
        transition: {
          duration: 2,
          ease: 'easeInOut',
          bounce: 0.5,
        },
      });
      setWhyImageAnimated(true);
    }

    if (inViewLearnImage && !learnImageAnimated) {
      controlsLearnImage.start({
        scale: [0.8, 1.2, 1],
        rotateY: [0, 360],
        opacity: [0, 1],
        transition: {
          duration: 2,
          ease: 'easeInOut',
          bounce: 0.5,
        },
      });
      setLearnImageAnimated(true);
    }

    if (inViewContent && !contentAnimated) {
      controlsContent.start((index) => ({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1.5,
          delay: index * 0.2,
          type: 'spring',
          stiffness: 100,
          bounce: 0.5, 
        },
      }));
      setContentAnimated(true);
    }
    
    if (inViewContent && !contentAnimated) {
      controlsContents.start((index) => ({
        y: 0,
        opacity: 1,
        rotate: [0, (index % 2 === 0 ? 360 : -360)],
        transition: {
          duration: 1.5,
          delay: index * 0.2,
          type: 'spring',
          stiffness: 100,
        },
      }));
      setContentAnimated(true);
    }
  }, [controlsImage, controlsWhyImage,controlsContents, inViewWhyImage, controlsLearnImage, inViewLearnImage, whyImageAnimated, learnImageAnimated, inViewImage, controlsContent, inViewContent, imageAnimated, contentAnimated]);
  useEffect(() => {
    // Display an info toast message
    toast.info("आपका स्वागत है! यदि आप अपने वित्तीय भविष्य के लिए चिंतित हैं, तो हम LIC Neemuch शाखा में आपके लिए एक अवसर लाए हैं। LIC एजेंट बनकर हमारे साथ मिलकर आपका भविष्य सुरक्षित करें। हमारे साथ जुड़ें और LIC बीमा के लाभों को अपने लाभ के लिए उठाएं। ", {
      position: "top-center", // Set toast position
      autoClose: 12000, 
      hideProgressBar: false, 
      closeOnClick: true, 
      pauseOnHover: true, 
      draggable: true, 
      progress: undefined, 
      style: {
        background: "#487503", 
        color: "#fff",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)", 
        borderRadius: "10px",
      },
    });
  }, []);
 
  const contentBlock = [
    {
      title: 'Immersive Career Opportunities at LIC India',
      description: 'Discover exciting career prospects at LIC India, where dedication and expertise meet to shape the future of insurance. Join our team and embark on a journey of growth and success in the dynamic world of life insurance.',
    },
    {
      title: 'SmartServe DO – LIC DO Voice Chatbot (Neemuch, India) ',
      description: 'SmartServe DO एक बहुभाषी एआई चैटबोट है जो एलआईसी विकास अधिकारियों को उनके ग्राहकों से बेहतर संवाद करने में मदद करता है। यह एलआईसी पॉलिसी को सरल भाषा में समझाता है, वॉइस रिकग्निशन सपोर्ट करता है, और लीड एंगेजमेंट को बढ़ाता है। चाहे आप एक एलआईसी अधिकारी हों या ग्राहक, यह प्लेटफार्म जीवन बीमा विकल्पों को समझने और शीघ्र जुड़ने का एक स्मार्ट तरीका है।' },
  ];
  
  const contentBlocks = [
  
    {
      description: "SmartServe DO is a multilingual AI-powered chatbot built to assist LIC Development Officers in communicating with their clients more efficiently. It helps explain LIC policies in simple language, supports voice-based queries, and boosts lead engagement through intelligent, real-time conversations.",
    },
    {
      description2: "Whether you're an LIC officer or a client, this platform offers a smoother way to understand life insurance options, stay informed, and connect faster.",
    },
  ]
  

  const contentBlockz = [
    {
      title: "SmartServe DO – LIC Chatbot Platform for Development Officers",
      description: 
      "LIC Neemuch is one of the many branches of the Life Insurance Corporation of India, serving clients across Neemuch, Mandsaur, Ratangarh, Singoli, Manasa, Jawad, and Sarwaniya Maharaj.",
    },
   
  ]
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: true,
    arrows: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: false,  
        },
      },
    ],
  };
  const [animationEnabled, setAnimationEnabled] = useState(true);


  

  const controlsArray = Array.from({ length: 7 }, () => useAnimation());

  const animateInView = async (index) => {
    await controlsArray[index].start({
      y: 0,
      opacity: 1,
      rotate: [0, (index % 2 === 0 ? 360 : -360)],
      transition: {
        duration: 1.5,
        type: 'spring',
        stiffness: 100,
      },
    });
  };


  

  const [ inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  useEffect(() => {
    if (inView && animationEnabled) {
      controlsArray.forEach(async (_, index) => {
        await animateInView(index);
      });
      // Disable animation after the first trigger
      setAnimationEnabled(false);
    }
  }, [controlsArray, inView, animationEnabled]);


  
  useEffect(() => {
    // Create a slideshow effect
    const interval = setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      // Update the profile image
      document.querySelector('.profile-image').src = images[currentImageIndex];
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const faqData = [
    {
      '@type': 'Question',
      name: 'What is SmartServe DO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SmartServe DO is a multilingual AI chatbot for LIC Development Officers to explain policies and engage clients.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does SmartServe DO benefit LIC Development Officers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SmartServe DO automates client interactions, provides real-time policy insights, and supports voice input, enhancing efficiency and client engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies power SmartServe DO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SmartServe DO uses React.js, Gemini API, Tailwind CSS, and Vite for fast performance, multilingual support, and seamless user experiences.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does SmartServe DO help LIC Neemuch agents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For LIC Neemuch agents, SmartServe DO offers multilingual support and voice input to explain policies, improving client communication locally.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who developed SmartServe DO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SmartServe DO was developed by Sanjay Patidar, a Software Engineer and Founder of Zedemy, specializing in AI-driven web solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I learn more about SmartServe DO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Visit sanjay-patidar.vercel.app/projects to explore SmartServe DO details and other projects by Sanjay Patidar.',
      },
    },
  ];

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'SmartServe DO | AI Chatbot for LIC | भारतीय जीवन बीमा निगम',
      description: 'SmartServe DO, an AI chatbot for LIC Development Officers, explains policies, engages clients, and boosts efficiency. Explore now.',
      url: 'https://smartserve-do.vercel.app',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://smartserve-do.vercel.app',
      },
      author: {
        '@type': 'Person',
        name: 'Sanjay Patidar',
      },
      publisher: {
        '@type': 'Person',
        name: 'Sanjay Patidar',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqData,
    },
  ];


  return (
    <section className={`relative w-full  min-h-screen mx-auto`}>
  

  <Helmet>
  <html lang="en" />
  <title>SmartServe DO | AI Chatbot for LIC | भारतीय जीवन बीमा निगम</title>
  <meta
    name="description"
    content="SmartServe DO, an AI chatbot for LIC Development Officers, explains policies, engages clients, and boosts efficiency. Explore now."
  />
  <meta
    name="keywords"
    content="SmartServe DO, AI chatbot, LIC Development Officers, Sanjay Patidar, React.js, Gemini API, Neemuch LIC, life insurance, full-stack development"
  />
  <meta name="author" content="Sanjay Patidar" />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="canonical" href="https://smartserve-do.vercel.app" />
  <meta property="og:title" content="SmartServe DO | AI Chatbot for LIC | भारतीय जीवन बीमा निगम" />
  <meta
    property="og:description"
    content="SmartServe DO, an AI chatbot for LIC Development Officers, explains policies, engages clients, and boosts efficiency. Explore now."
  />
  <meta property="og:image:alt" content="SmartServe DO | AI Chatbot for LIC | भारतीय जीवन बीमा निगम" />
  <meta property="og:url" content="https://smartserve-do.vercel.app" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="SmartServe DO | AI Chatbot for LIC | भारतीय जीवन बीमा निगम" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="SmartServe DO | AI Chatbot for LIC | भारतीय जीवन बीमा निगम" />
  <meta
    name="twitter:description"
    content="SmartServe DO, an AI chatbot for LIC Development Officers, explains policies, engages clients, and boosts efficiency. Explore now."
  />
  <meta name="twitter:site" content="@sanjaypatidar" />
  <meta name="twitter:creator" content="@sanjaypatidar" />
  <script type="application/ld+json">
    {JSON.stringify(structuredData)}
  </script>
</Helmet>

     <div className={`relative top-[10px] max-w-8xl mx-auto ${styles.paddingX} flex flex-col items-center`}>
  <div className="w-full max-w-4xl">
    
  <Slider {...sliderSettings}>
    <div className="w-full">
        <img
          src="https://sanjaybasket.s3.ap-south-1.amazonaws.com/smartserve-do/banner1.jpg"
          alt="Image 1"
          className="w-full h-auto object-cover"
        />
        
      </div>
      <div className="w-full">
        <img
          src="https://sanjaybasket.s3.ap-south-1.amazonaws.com/smartserve-do/banner2.jpg"
          alt="Image 2"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="w-full">
        <img
          src="https://sanjaybasket.s3.ap-south-1.amazonaws.com/smartserve-do/banner3.jpg"
          alt="Image 3"
          className="w-full h-auto object-cover"
        />

      </div>

    </Slider>

    
  </div>
  <div
  style={{
    width: "100%",
    maxWidth: "1280px",
  }}
>
  <style>
    {`
      @media (max-width: 768px) {
        .mobile-text {
          font-size: 1rem !important;
        }
      }
    `}
  </style>

  {contentBlockz.map((block, index) => {
    const [refContent, inViewContent] = useInView({ triggerOnce: true });
    const controlsContents = useAnimation();

    useEffect(() => {
      if (inViewContent) {
        controlsContents.start({
          y: 0,
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1.5,
            delay: index * 0.2,
            type: "spring",
            stiffness: 100,
          },
        });
      }
    }, [inViewContent, controlsContents, index]);

    return (
      <motion.div
        key={index}
        ref={refContent}
        className="mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={controlsContents}
      >
        <div
          className={`${styles.sectionHeadText} text-center mb-4 mobile-text`}
        >
          {block.title}
        </div>

        <Next>
          <span className="mobile-text">{block.description}</span>
        </Next>
      </motion.div>
    );
  })}

  <Next>
    💰💼 Click{" "}
    <ContactButton href="/be-an-lic-agent" smooth={true} duration={500}>
      <ContactButtonText className="mobile-text">
        LIC Agent बनने का अवसर
      </ContactButtonText>
    </ContactButton>
  </Next>




</div>;

  <div className="w-full max-w-6xl">

            {contentBlocks.map((block , index) => {
                  const [refContent, inViewContent] = useInView({ triggerOnce: true });
                  const controlsContents = useAnimation();

              useEffect(() => {
  if (inViewContent) {
    controlsContents.start({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        delay: index * 0.2,
        type: 'spring',
        stiffness: 100,
      },
    });
  }
}, [inViewContent, controlsContents, index]);

                  return (
                    <motion.div
                      key={index}
                      ref={refContent}
                      className="mb-8"
                      initial={{ y: 20, opacity: 0 }}
                      animate={controlsContent}
                    >
          <div className={`${styles.sectionHeadText} text-center mb-4`}>
                        {block.title}
                      </div>
                      
                    <Next>     
                     {block.description}

                     </Next> 
                     <Next>     
                     {block.description2}

                     </Next> 

           </motion.div>
                  );
                })}
 
 

             </div>

  <ProfileTextContainer>
 
    
  <Introduction
    initial={{ opacity: 0, y: -100,  scale: 0.5 }} 
    animate={{ opacity: 1, y: 0, scale: 1 }} 
    transition={{
      type: "spring", 
      stiffness: 200, 
      damping: 12, 
      delay: 1, 
      duration: 0.8 
    }}
  >
       
          
          <TypedText>
          <H2>

  <Typed
strings={[
  'LIC विकास अधिकारी की टीम में शामिल होकर अपना उज्ज्वल भविष्य बनाएं।',
  'बीमा क्षेत्र में स्थायी करियर के अवसर – आज ही आवेदन करें।',
  'विकास अधिकारी के मार्गदर्शन में प्रोफेशनल ग्रोथ पाएं।',
  'बीमा कंपनी में नौकरी के लिए स्नातक योग्यता आवश्यक है।',
  'SmartServe DO के साथ अपने बीमा करियर की शुरुआत करें।',
  'LIC टीम का हिस्सा बनें और अपने कौशल का सही उपयोग करें।',
  'बीमा उद्योग में स्थायित्व और विकास की गारंटी – अभी जुड़ें।',
  'ग्रामीण और शहरी क्षेत्रों में बीमा सेवा का हिस्सा बनें।'
]}

    typeSpeed={60}
    backSpeed={60}
    smartBackspace={true}
    shuffle={false}
    backDelay={1500}
    loop
  />
  </H2>
</TypedText>

          </Introduction>


          
          </ProfileTextContainer>
   
      
    <LicChatBot/>

          <div className={`${styles.sectionHeadText} text-center mb-4`}>
          आपके लिए तैयार एलआईसी योजनाएं खरीदें!
</div>
<p className={`${styles.heroSubText} mt-8 text-white-100 text-center`}>
अपनी आवश्यकताओं के अनुसार बीमा खोजें</p>


</div>



      <div className={`relative top-[20px] max-w-8xl mx-auto mb-0 ${styles.paddingX} flex flex-col items-center`}>
      <LicHeader/>


        <div className="why-us-section py-16 flex flex-col lg:flex-row items-center">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center mb-12">
            <div className="shining-ring-container">
        
              <div className="flex-container">
              <motion.img
                  ref={refLearnImage}
                  src={LearnImage}
                  alt="withUs"
                  className="w-full lg:w-full rounded-lg shadow-lg mb-6 lg-mb-0"
                  initial={{ scale: 0, rotateY: 0, opacity: 0 }}
                  animate={controlsLearnImage}
                />
                
              </div>
              
            </div>
            <div className="lg:w-1/2 lg:pl-12 why-us-content">
            {contentBlock.map((block, index) => {
                  const [refContent, inViewContent] = useInView({ triggerOnce: true });
                  const controlsContent = useAnimation();

                  useEffect(() => {
                    if (inViewContent) {
                      controlsContent.start({
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        transition: {
                          duration: 2,
                          delay: index * 0.2,
                          type: 'spring',
                          stiffness: 100,
                        },
                      });
                    }
                  }, [inViewContent, controlsContent, index]);

                  return (
                    <motion.div
                      key={index}
                      ref={refContent}
                      className="mb-8"
                      initial={{ y: 20, opacity: 0 }}
                      animate={controlsContent}
                    >
                      <motion.h3 className="text-3xl font-bold mb-4 text-purple-500">
                        {block.title}
                      </motion.h3>
                      <motion.p className="text-gray-800 mb-6 text-lg">
                        {block.description}
                      </motion.p>
                      
                    </motion.div>
                    
                  );
                })}
                
             </div>
             
          </div>
         
        </div>
      </div>


      </div>
      <StarsCanvas />



    </section>
  );
}


export default Home;
