import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import BentoServices from './components/BentoServices';
import EngineeringSection from './components/EngineeringSection';
import LoadBanksSection from './components/LoadBanksSection';
import CertificationSection from './components/CertificationSection';
import DatcerAI from './components/DatcerAI';
import Footer from './components/Footer';
import { SectionId } from './types';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <div className="w-full min-h-screen relative bg-[#fbfbfd]">
        <Navbar scrollToSection={scrollToSection} />
        
        <main>
          <Hero scrollToSection={scrollToSection} />
          <AboutSection />
          <BentoServices />
          <EngineeringSection />
          <LoadBanksSection />
          <CertificationSection />
          <DatcerAI />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
