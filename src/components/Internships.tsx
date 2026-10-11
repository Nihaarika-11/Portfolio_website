import React from 'react';
import { 
  Factory, 
  Cpu, 
  Clock, 
  Sliders, 
  Workflow, 
  Briefcase 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Internships: React.FC = () => {
  return (
    <section id="internships" className="py-20 lg:py-28 relative bg-navy-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyanAccent-400 tracking-widest uppercase mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Industrial Field Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Learning From Industry.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Practical shop-floor exposure to industrial automation, electrical control systems, and precision electronics manufacturing.
          </p>
        </div>

        {/* Two Visually Consistent Internship Cards with Equal Importance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Fuji Electric */}
          <div className="rounded-3xl glass-panel p-6 sm:p-8 lg:p-9 border border-slate-800/90 hover:border-cyanAccent-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Top Bar with Prominent 15-Day Duration */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2.5 rounded-xl bg-navy-900 border border-cyanAccent-500/30 text-cyanAccent-400">
                    <Factory className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-white group-hover:text-cyanAccent-300 transition-colors">
                      Fuji Electric
                    </h3>
                    <span className="text-xs font-mono text-slate-400">
                      Industrial Automation & Electrical Systems
                    </span>
                  </div>
                </div>

                {/* PROMINENT DURATION BADGE */}
                <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-cyanAccent-500/15 border border-cyanAccent-500/40 text-cyanAccent-300 font-mono text-xs font-bold shadow-sm shadow-cyanAccent-500/20">
                  <Clock className="w-3.5 h-3.5 text-cyanAccent-400" />
                  <span>15-DAY INTERNSHIP</span>
                </div>
              </div>

              {/* Exact Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                “Completed a 15-day internship at Fuji Electric, gaining practical exposure to industrial automation, electrical systems, and manufacturing processes. Developed an understanding of industrial operations, technical workflows, quality control, and workplace safety while strengthening problem-solving, teamwork, and technical skills through hands-on learning.”
              </p>

              {/* Technical Tags */}
              <div className="mb-6">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Technical Domains & Exposure
                </span>
                <div className="flex flex-wrap gap-2">
                  {PORTFOLIO_DATA.internships[0].keyAreas.map((area) => (
                    <span 
                      key={area}
                      className="px-3 py-1 rounded-lg bg-navy-900 border border-slate-700/80 text-xs font-mono text-cyanAccent-200"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Industrial Illustration: Electrical Systems & Industrial Control Panels */}
            <div className="p-4 rounded-2xl bg-navy-900/90 border border-slate-800">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800/80 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-cyanAccent-400">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>AUTOMATION PANEL & PROCESS FLOW</span>
                </span>
                <span>VOLTAGE & DRIVES</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-navy-950 border border-slate-800">
                  <span className="text-slate-500 text-[10px] block">CONTROL LOOP</span>
                  <span className="text-white font-medium">PLC / RELAYS</span>
                </div>
                <div className="p-2.5 rounded-lg bg-navy-950 border border-slate-800">
                  <span className="text-slate-500 text-[10px] block">ELECTRICAL</span>
                  <span className="text-cyanAccent-300 font-medium">INVERTERS</span>
                </div>
                <div className="p-2.5 rounded-lg bg-navy-950 border border-slate-800">
                  <span className="text-slate-500 text-[10px] block">STANDARDS</span>
                  <span className="text-emerald-400 font-medium">ISO SAFETY</span>
                </div>
              </div>
            </div>

          </div>

          {/* Card 2: Syrma SGS Technology Limited */}
          <div className="rounded-3xl glass-panel p-6 sm:p-8 lg:p-9 border border-slate-800/90 hover:border-cyanAccent-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Top Bar with Prominent 15-Day Duration */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2.5 rounded-xl bg-navy-900 border border-electric-500/30 text-electric-400">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-white group-hover:text-cyanAccent-300 transition-colors">
                      Syrma SGS Technology Limited
                    </h3>
                    <span className="text-xs font-mono text-slate-400">
                      Electronics Manufacturing & PCB Assembly
                    </span>
                  </div>
                </div>

                {/* PROMINENT DURATION BADGE */}
                <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-electric-500/15 border border-electric-500/40 text-electric-300 font-mono text-xs font-bold shadow-sm shadow-electric-500/20">
                  <Clock className="w-3.5 h-3.5 text-electric-400" />
                  <span>15-DAY INTERNSHIP</span>
                </div>
              </div>

              {/* Exact Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                “Completed a 15-day internship at Syrma SGS Technology Limited, gaining practical exposure to electronics manufacturing, PCB assembly, production processes, and quality control. Developed an understanding of industrial workflows, electronic components, testing procedures, and manufacturing operations while enhancing technical knowledge, teamwork, and problem-solving skills through hands-on learning.”
              </p>

              {/* Technical Tags */}
              <div className="mb-6">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Technical Domains & Exposure
                </span>
                <div className="flex flex-wrap gap-2">
                  {PORTFOLIO_DATA.internships[1].keyAreas.map((area) => (
                    <span 
                      key={area}
                      className="px-3 py-1 rounded-lg bg-navy-900 border border-slate-700/80 text-xs font-mono text-sky-200"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Industrial Illustration: PCB Layouts, Assembly Lines & Testing Equipment */}
            <div className="p-4 rounded-2xl bg-navy-900/90 border border-slate-800">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800/80 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-electric-400">
                  <Workflow className="w-3.5 h-3.5" />
                  <span>SMT & PCB ASSEMBLY LINE</span>
                </span>
                <span>INSPECTION & QC</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-navy-950 border border-slate-800">
                  <span className="text-slate-500 text-[10px] block">MANUFACTURING</span>
                  <span className="text-white font-medium">SMT PICK & PLACE</span>
                </div>
                <div className="p-2.5 rounded-lg bg-navy-950 border border-slate-800">
                  <span className="text-slate-500 text-[10px] block">TESTING</span>
                  <span className="text-electric-300 font-medium">AOI & IN-CIRCUIT</span>
                </div>
                <div className="p-2.5 rounded-lg bg-navy-950 border border-slate-800">
                  <span className="text-slate-500 text-[10px] block">COMPONENTS</span>
                  <span className="text-emerald-400 font-medium">PASSIVE & ICs</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
