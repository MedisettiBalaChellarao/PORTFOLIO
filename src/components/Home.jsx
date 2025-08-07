import React from 'react';
import IntroSection from './IntroSection';
import AboutMe from './AboutMe';
import CareerHistory from './CareerHistory';
import ScrollBar from './ScrollBar';
import Skills from './Skills';
import Certifications from './Certifications';
import ProjectBackground from './ProjectBackground';
import Projects from './Projects';
import ContactSection from './ContactSection';




const Home = () => {
  return (
    <div className="bg-black text-white scroll-smooth">


      
      <IntroSection />
     
      <AboutMe />
      <CareerHistory/>
      
      <Skills/>
      <Certifications/>
      <Projects/>
      <ContactSection/>
      <ScrollBar/>

         
    </div>
     
  

  );
};

export default Home;
