import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, Binary } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { HeroAnimation } from './HeroAnimation';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-24 pb-16 lg:pt-32 lg:pb-24 flex items-center justify-center overflow-hidden circuit-grid"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-electric-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[300px] bg-cyanAccent-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[300px] bg-violetAccent-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Identity */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Status Label (Prompt requirement: "Exploring AI • ML • Intelligent Systems") */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-cyanAccent-500/30 text-cyanAccent-300 text-xs font-mono shadow-sm shadow-cyanAccent-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyanAccent-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyanAccent-500"></span>
              </span>
              <span className="font-medium tracking-wide">
                {PORTFOLIO_DATA.personal.statusLabel}
              </span>
            </div>

            {/* Prominent Name */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-mono mb-2 flex items-center gap-2">
                <Binary className="w-3.5 h-3.5 text-cyanAccent-400" />
                <span>B.E. Instrumentation & Control • Class of 2028</span>
              </p>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-heading font-extrabold tracking-tight text-white leading-tight">
                <span className="block text-white drop-shadow-sm">
                  {PORTFOLIO_DATA.personal.name}
                </span>
              </h1>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyanAccent-300 via-electric-400 to-violetAccent-400 leading-snug">
              “{PORTFOLIO_DATA.personal.mainHeadline}”
            </h2>

            {/* Supporting Headline — EXACT TEXT REQUIRED: “AI & Machine Learning | Embedded Systems & Industrial Automation” */}
            <div className="py-1 px-3.5 rounded-md bg-navy-900/60 border-l-4 border-electric-500 max-w-xl">
              <p className="text-sm sm:text-base font-semibold text-cyanAccent-200 tracking-wide font-mono">
                {PORTFOLIO_DATA.personal.supportingHeadline}
              </p>
            </div>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              {PORTFOLIO_DATA.personal.intro}
            </p>

            {/* ONLY TWO BUTTONS: Explore My Work & Connect With Me */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => scrollTo('#projects')}
                className="group inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-electric-600 to-cyanAccent-600 hover:from-electric-500 hover:to-cyanAccent-500 text-white font-medium text-sm sm:text-base shadow-lg shadow-electric-500/25 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyanAccent-400 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-navy-900/90 hover:bg-navy-800 border border-slate-700 hover:border-cyanAccent-500/50 text-slate-200 hover:text-white font-medium text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyanAccent-400 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-cyanAccent-400" />
                <span>Connect With Me</span>
              </button>
            </div>

            {/* Micro Highlights Pill Bar */}
            <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded bg-navy-900/60 border border-slate-800 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-cyanAccent-400" />
                <span>Sri Sairam Engineering College</span>
              </span>
              <span className="px-2.5 py-1 rounded bg-navy-900/60 border border-slate-800 text-slate-300">
                CGPA: <strong className="text-cyanAccent-300">8.54 / 10</strong>
              </span>
              <span className="px-2.5 py-1 rounded bg-navy-900/60 border border-slate-800 text-slate-300">
                Graduation: <strong className="text-cyanAccent-300">2028</strong>
              </span>
            </div>

          </div>

          {/* Right Column: Animated AI & Industrial Environment */}
          <div className="lg:col-span-6 w-full">
            <HeroAnimation />
          </div>

        </div>
      </div>
    </section>
  );
};
