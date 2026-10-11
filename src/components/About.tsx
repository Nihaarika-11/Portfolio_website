import React from 'react';
import { Brain, Cpu, Factory, CheckCircle2, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const getCardIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Brain className="w-6 h-6 text-cyanAccent-400" />;
      case 1:
        return <Cpu className="w-6 h-6 text-electric-400" />;
      case 2:
        return <Factory className="w-6 h-6 text-violetAccent-400" />;
      default:
        return <Brain className="w-6 h-6 text-cyanAccent-400" />;
    }
  };

  const getAccentBorder = (accent: string) => {
    switch (accent) {
      case 'cyan':
        return 'group-hover:border-cyanAccent-500/60 shadow-cyanAccent-500/10';
      case 'electric':
        return 'group-hover:border-electric-500/60 shadow-electric-500/10';
      case 'violet':
        return 'group-hover:border-violetAccent-500/60 shadow-violetAccent-500/10';
      default:
        return 'group-hover:border-cyanAccent-500/60 shadow-cyanAccent-500/10';
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-navy-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyanAccent-400 tracking-widest uppercase mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Core Philosophy & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Beyond Software. Into Intelligent Systems.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            As a third-year Electrical Instrumentation and Control Engineering student, my work is driven by a simple realization: 
            software creates maximum real-world impact when it connects directly to physical sensors, edge compute, and industrial machinery. 
            I am intentionally building an interdisciplinary foundation that bridges artificial intelligence with robust hardware telemetry.
          </p>
        </div>

        {/* 3 Animated Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {PORTFOLIO_DATA.aboutCards.map((card, idx) => (
            <div
              key={card.title}
              className={`group relative rounded-2xl glass-panel p-6 sm:p-7 border border-slate-800/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${getAccentBorder(
                card.accent
              )}`}
            >
              {/* Corner accent for tech aesthetic */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden rounded-tr-2xl pointer-events-none">
                <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${
                  card.accent === 'cyan' ? 'border-cyanAccent-400' :
                  card.accent === 'electric' ? 'border-electric-400' : 'border-violetAccent-400'
                }`} />
              </div>

              {/* Icon & Title */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-xl bg-navy-900 border border-slate-700/60 group-hover:scale-105 transition-transform">
                  {getCardIcon(idx)}
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400">
                    FOCUS 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyanAccent-300 transition-colors">
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Tagline / Learning premise */}
              <p className="text-sm font-semibold text-cyanAccent-300/90 mb-3 font-mono leading-snug">
                {card.tagline}
              </p>

              {/* Details */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {card.details}
              </p>

              {/* Subdued Learning Badge */}
              <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>STAGE:</span>
                <span className="text-cyanAccent-400 bg-cyanAccent-500/10 px-2 py-0.5 rounded border border-cyanAccent-500/20">
                  Active Learning
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Core Areas of Interest */}
        <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-cyanAccent-500/15">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-cyanAccent-400 block mb-1">
                Interdisciplinary Exploration
              </span>
              <h4 className="text-xl font-heading font-bold text-white">
                What Drives My Engineering Exploration
              </h4>
              <p className="text-sm text-slate-300 mt-2">
                Developing practical competency by exploring how each discipline complements the others to build comprehensive, dependable solutions:
              </p>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PORTFOLIO_DATA.aboutInterests.map((interest) => (
                <div 
                  key={interest}
                  className="flex items-start space-x-2.5 p-3 rounded-xl bg-navy-900/70 border border-slate-800 text-slate-200 hover:border-cyanAccent-500/30 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyanAccent-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium">{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
