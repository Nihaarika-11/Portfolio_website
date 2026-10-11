import React from 'react';
import { Languages as LanguagesIcon } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Languages: React.FC = () => {
  const getScriptFontClass = (name: string) => {
    switch (name) {
      case 'Kannada':
        return 'font-kannada';
      case 'Hindi':
        return 'font-hindi';
      case 'Tamil':
        return 'font-tamil';
      default:
        return 'font-heading';
    }
  };

  return (
    <section id="languages" className="py-20 lg:py-28 relative circuit-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyanAccent-400 tracking-widest uppercase mb-2">
            <LanguagesIcon className="w-3.5 h-3.5" />
            <span>Multilingual Connection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Languages That Connect Me to the World.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Appreciating cultural expression, native scripts, and linguistic connection across diverse communities.
          </p>
        </div>

        {/* 4 Language Cards with Prominent Native Scripts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.languages.map((lang, idx) => {
            const fontClass = getScriptFontClass(lang.englishName);
            return (
              <div
                key={lang.englishName}
                className="group relative rounded-2xl glass-panel p-6 sm:p-8 border border-slate-800/90 hover:border-cyanAccent-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-left flex flex-col justify-between"
              >
                {/* Top: Card index & indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono text-slate-500 tracking-wider">
                    L-0{idx + 1}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-navy-900 border border-slate-700/80 text-[11px] font-mono text-cyanAccent-300">
                    {lang.badge}
                  </span>
                </div>

                {/* Main Prominent Native Script */}
                <div className="my-2">
                  <div className={`text-4xl sm:text-5xl font-bold text-white group-hover:text-cyanAccent-300 transition-colors drop-shadow-sm ${fontClass}`}>
                    {lang.script}
                  </div>
                  
                  {/* English Translation Beside / Underneath */}
                  <div className="mt-3 text-lg font-heading font-semibold text-cyanAccent-200">
                    {lang.englishName}
                  </div>
                </div>

                {/* Subtext description */}
                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {lang.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
