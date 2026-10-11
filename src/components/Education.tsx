import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative circuit-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyanAccent-400 tracking-widest uppercase mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Education.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Consistent academic excellence in engineering fundamentals, analytical mathematics, and physical sciences.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical Glowing Timeline Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyanAccent-500 via-electric-500 to-slate-800" />

          <div className="space-y-8">
            
            {/* 1. College: Sri Sairam Engineering College */}
            <div className="relative md:pl-20">
              {/* Timeline Node Indicator */}
              <div className="hidden md:flex absolute left-5 top-8 -translate-x-1/2 w-6 h-6 rounded-full bg-navy-950 border-2 border-cyanAccent-400 items-center justify-center shadow-[0_0_12px_rgba(0,240,255,0.6)]">
                <div className="w-2 h-2 rounded-full bg-cyanAccent-400 animate-ping" />
              </div>

              <div className="rounded-2xl glass-panel-glow p-6 sm:p-8 border border-cyanAccent-500/30 hover:border-cyanAccent-400 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded bg-cyanAccent-500/10 text-cyanAccent-300 border border-cyanAccent-500/30 text-xs font-mono mb-2">
                      <span>CURRENT DEGREE // UNDERGRADUATE</span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white">
                      Sri Sairam Engineering College, Chennai
                    </h3>
                    <p className="text-base sm:text-lg text-cyanAccent-200 font-medium mt-1">
                      B.E. Electrical Instrumentation and Control Engineering
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5 shrink-0 font-mono">
                    <span className="px-3.5 py-1.5 rounded-xl bg-cyanAccent-500/20 text-cyanAccent-300 text-sm font-bold border border-cyanAccent-500/40 shadow-sm shadow-cyanAccent-500/20">
                      CGPA: 8.54 / 10
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-cyanAccent-400" />
                      <span>Expected Graduation: 2028</span>
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                  <span className="px-2.5 py-1 rounded bg-navy-900 border border-slate-800">
                    Third-Year Undergraduate
                  </span>
                  <span className="px-2.5 py-1 rounded bg-navy-900 border border-slate-800">
                    Electrical, Instrumentation & Control Focus
                  </span>
                  <span className="px-2.5 py-1 rounded bg-navy-900 border border-slate-800 text-cyanAccent-300">
                    AI & Embedded Systems Integration
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Higher Secondary Education: Class XII */}
            <div className="relative md:pl-20">
              <div className="hidden md:flex absolute left-5 top-8 -translate-x-1/2 w-6 h-6 rounded-full bg-navy-950 border-2 border-electric-400 items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-electric-400" />
              </div>

              <div className="rounded-2xl glass-panel p-6 sm:p-7 border border-slate-800 hover:border-electric-500/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-electric-400 block mb-1">
                      SENIOR SECONDARY
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white">
                      Higher Secondary Education — Class XII
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      Rigorous foundation in Physics, Chemistry, and Advanced Mathematics
                    </p>
                  </div>

                  <div className="shrink-0 font-mono">
                    <span className="px-3.5 py-1.5 rounded-xl bg-electric-500/15 text-electric-300 text-sm font-bold border border-electric-500/30">
                      Percentage: 89%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Secondary Education: Class X */}
            <div className="relative md:pl-20">
              <div className="hidden md:flex absolute left-5 top-8 -translate-x-1/2 w-6 h-6 rounded-full bg-navy-950 border-2 border-slate-600 items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-400" />
              </div>

              <div className="rounded-2xl glass-panel p-6 sm:p-7 border border-slate-800 hover:border-slate-700 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-slate-400 block mb-1">
                      SECONDARY SCHOOL
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white">
                      Secondary Education — Class X
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      Distinction performance establishing quantitative, analytical, and scientific problem-solving skills
                    </p>
                  </div>

                  <div className="shrink-0 font-mono">
                    <span className="px-3.5 py-1.5 rounded-xl bg-slate-800/80 text-emerald-400 text-sm font-bold border border-emerald-500/30">
                      Percentage: 94.6%
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
