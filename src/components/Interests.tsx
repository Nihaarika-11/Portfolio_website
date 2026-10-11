import React from 'react';
import { Globe2, Landmark, BookA, Sparkles } from 'lucide-react';

export const Interests: React.FC = () => {
  return (
    <section id="interests" className="py-16 lg:py-20 relative bg-navy-950/40 circuit-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <div className="text-left max-w-2xl mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyanAccent-400 tracking-widest uppercase mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Beyond the Lab</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
            Personal Interests
          </h2>
          <p className="mt-2 text-slate-300 text-xs sm:text-sm">
            Curiosities outside engineering that broaden perspective and worldview.
          </p>
        </div>

        {/* 3 Compact Interest Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Exploring new places and cultures */}
          <div className="rounded-2xl glass-panel p-6 border border-slate-800/80 hover:border-cyanAccent-500/30 transition-all duration-300 text-left group">
            <div className="p-3 rounded-xl bg-navy-900 border border-slate-800 w-fit mb-4 text-cyanAccent-400 group-hover:scale-105 transition-transform">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-heading font-bold text-white group-hover:text-cyanAccent-300 transition-colors">
              Exploring New Places and Cultures
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Discovering geographic terrains, local customs, architectural styles, and community traditions across different regions.
            </p>
          </div>

          {/* 2. Historical stories and civilizations */}
          <div className="rounded-2xl glass-panel p-6 border border-slate-800/80 hover:border-electric-500/30 transition-all duration-300 text-left group">
            <div className="p-3 rounded-xl bg-navy-900 border border-slate-800 w-fit mb-4 text-electric-400 group-hover:scale-105 transition-transform">
              <Landmark className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-heading font-bold text-white group-hover:text-cyanAccent-300 transition-colors">
              Historical Stories & Civilizations
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Studying ancient civilizations, pivotal historic events, and the evolutionary lineage of human engineering and scientific breakthroughs.
            </p>
          </div>

          {/* 3. Discovering languages and their scripts */}
          <div className="rounded-2xl glass-panel p-6 border border-slate-800/80 hover:border-violetAccent-500/30 transition-all duration-300 text-left group">
            <div className="p-3 rounded-xl bg-navy-900 border border-slate-800 w-fit mb-4 text-violetAccent-400 group-hover:scale-105 transition-transform">
              <BookA className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-heading font-bold text-white group-hover:text-cyanAccent-300 transition-colors">
              Discovering Languages & Scripts
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Analyzing native orthographies, typographic nuances, phonetic structures, and linguistic expressions from around the world.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
