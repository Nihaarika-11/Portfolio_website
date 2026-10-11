import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Internships } from './components/Internships';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Languages } from './components/Languages';
import { Achievements } from './components/Achievements';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'skills',
      'projects',
      'internships',
      'education',
      'certifications',
      'languages',
      'achievements',
      'interests',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-cyanAccent-500 selection:text-navy-950">
      {/* Top Fixed Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internships />
        <Education />
        <Certifications />
        <Languages />
        <Achievements />
        <Interests />
        <Contact />
      </main>

      {/* Footer & Telemetry */}
      <Footer />
    </div>
  );
};

export default App;
