import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { LinkedInIcon, GitHubIcon } from './SkillIcons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-navy-950/80 circuit-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Container Card */}
        <div className="relative rounded-3xl glass-panel-glow border border-cyanAccent-500/30 p-8 sm:p-12 lg:p-16 overflow-hidden">
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyanAccent-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-600/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            
            {/* Header Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-cyanAccent-500/30 text-cyanAccent-300 text-xs font-mono shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyanAccent-400 animate-pulse" />
              <span>COMMUNICATION CHANNEL // CHENNAI, INDIA</span>
            </div>

            {/* Title & Supporting Text (Exact prompt text) */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
                Let’s Build Something Intelligent.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                “I’m interested in opportunities where AI, embedded systems, IoT, and industrial technology come together.”
              </p>
            </div>

            {/* Three Contact Cards with Functional Direct Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-left">
              
              {/* 1. Email Card */}
              <div className="p-5 rounded-2xl bg-navy-900/80 border border-slate-800 hover:border-cyanAccent-500/40 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="p-3 rounded-xl bg-navy-950 border border-slate-800 text-cyanAccent-400 w-fit mb-3">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <a 
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="text-sm sm:text-base font-semibold text-white group-hover:text-cyanAccent-300 transition-colors break-all mt-1 block"
                  >
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="text-xs font-mono text-cyanAccent-400 hover:text-cyanAccent-300 flex items-center gap-1"
                  >
                    <span>Write Mail</span>
                    <Send className="w-3 h-3" />
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* 2. LinkedIn Card */}
              <div className="p-5 rounded-2xl bg-navy-900/80 border border-slate-800 hover:border-electric-500/40 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="p-3 rounded-xl bg-navy-950 border border-slate-800 text-electric-400 w-fit mb-3">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    LinkedIn Network
                  </span>
                  <a
                    href={PORTFOLIO_DATA.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-white group-hover:text-electric-300 transition-colors break-all mt-1 block"
                  >
                    linkedin.com/in/nihaarika-rd
                  </a>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <a
                    href={PORTFOLIO_DATA.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-electric-400 hover:text-electric-300 flex items-center gap-1"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 3. GitHub Card */}
              <div className="p-5 rounded-2xl bg-navy-900/80 border border-slate-800 hover:border-violetAccent-500/40 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="p-3 rounded-xl bg-navy-950 border border-slate-800 text-violetAccent-400 w-fit mb-3">
                    <GitHubIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    GitHub Codebases
                  </span>
                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-white group-hover:text-violetAccent-300 transition-colors break-all mt-1 block"
                  >
                    github.com/Nihaarika-11
                  </a>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-violetAccent-400 hover:text-violetAccent-300 flex items-center gap-1"
                  >
                    <span>View Repositories</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

            {/* THREE PRIMARY FUNCTIONAL ACTION BUTTONS */}
            <div className="pt-6 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-electric-600 to-cyanAccent-600 hover:from-electric-500 hover:to-cyanAccent-500 text-white font-medium text-sm sm:text-base shadow-lg shadow-electric-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-navy-900 border border-slate-700 hover:border-electric-400 text-slate-200 hover:text-white font-medium text-sm sm:text-base transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <LinkedInIcon className="w-4 h-4 text-electric-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-navy-900 border border-slate-700 hover:border-cyanAccent-400 text-slate-200 hover:text-white font-medium text-sm sm:text-base transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <GitHubIcon className="w-4 h-4 text-cyanAccent-400" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Status & Location Meta */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-cyanAccent-400" />
                <span>Based in Chennai, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>OPEN FOR INTERNSHIP OPPORTUNITIES</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
