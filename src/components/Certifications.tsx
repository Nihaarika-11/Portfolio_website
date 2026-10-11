import React from 'react';
import { Award, CheckCircle, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const completed = PORTFOLIO_DATA.certifications.filter(c => c.status === 'Completed');
  const ongoing = PORTFOLIO_DATA.certifications.filter(c => c.status === 'Ongoing Learning');

  return (
    <section id="certifications" className="py-20 lg:py-28 relative bg-navy-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyanAccent-400 tracking-widest uppercase mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>Continuous Upskilling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Learning in Progress.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Verified academic accomplishments and active self-directed learning paths. 
            Structured to distinguish completed coursework from ongoing technical exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Completed Certifications (8 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <h3 className="text-base font-heading font-semibold text-white tracking-wide uppercase">
                Completed Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {completed.map((cert) => (
                <div 
                  key={cert.title}
                  className="rounded-2xl glass-panel p-5 sm:p-6 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 group flex items-start justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-2">
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                        {cert.issuer}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {cert.tag}
                      </span>
                    </div>

                    <h4 className="text-lg font-heading font-bold text-white group-hover:text-cyanAccent-300 transition-colors">
                      {cert.title}
                    </h4>
                  </div>

                  <div className="shrink-0 p-2 rounded-xl bg-navy-900 border border-emerald-500/30 text-emerald-400">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ongoing Learning Focus (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-cyanAccent-400 animate-pulse" />
              <h3 className="text-base font-heading font-semibold text-white tracking-wide uppercase">
                Active Learning Track
              </h3>
            </div>

            <div className="space-y-4">
              {ongoing.map((track) => (
                <div 
                  key={track.title}
                  className="rounded-2xl glass-panel-glow p-6 border border-cyanAccent-500/30 shadow-lg relative overflow-hidden group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-cyanAccent-300 bg-cyanAccent-500/15 px-3 py-1 rounded-full border border-cyanAccent-500/30">
                      ONGOING LEARNING
                    </span>
                    <Sparkles className="w-5 h-5 text-cyanAccent-400 animate-pulse" />
                  </div>

                  <h4 className="text-xl font-heading font-bold text-white mb-3">
                    {track.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    Deepening conceptual rigor in neural networks, convolution mathematics, boundary classification, and OpenCV edge streaming to apply intelligent software to embedded microcontrollers.
                  </p>

                  <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-cyanAccent-400 flex items-center justify-between">
                    <span>SELF-DIRECTED / LAB PRACTICE</span>
                    <span>ACTIVE</span>
                  </div>
                </div>
              ))}

              {/* Extensible Future Card Slot */}
              <div className="p-4 rounded-xl border border-dashed border-slate-800 text-center text-xs font-mono text-slate-400">
                <span>+ Ready for upcoming advanced specializations & coursework</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
