import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechTicker from './components/TechTicker';
import Programs from './components/Programs';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Stats from './components/Stats';
import Alumni from './components/Alumni';
import SocialChannels from './components/SocialChannels';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <TechTicker />
      <Programs />
      <HowItWorks />
      <About />
      <Stats />
      <Alumni />
      <SocialChannels />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
