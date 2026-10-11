import React from 'react';
import { ArrowUp, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'I-GAARD', href: '#projects' },
    { name: 'Internships', href: '#internships' },
    { name: 'Education', href: '#education' },
    { name: 'Languages', href: '#languages' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-navy-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Identity & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-navy-900 border border-cyanAccent-500/30">
                <Cpu className="w-5 h-5 text-cyanAccent-400" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white">
                  {PORTFOLIO_DATA.personal.name}
                </span>
                <p className="text-[10px] font-mono text-cyanAccent-400">
                  NEURAL INDUSTRY PORTFOLIO // 2028
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Electrical Instrumentation & Control Engineering undergraduate developing skills in AI, computer vision, IoT, and industrial automation.
            </p>

            <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>SRI SAIRAM ENGINEERING COLLEGE, CHENNAI</span>
            </div>
          </div>

          {/* Quick Nav Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyanAccent-400">
              Navigation Index
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-cyanAccent-300 transition-colors py-1 flex items-center space-x-1.5"
                >
                  <span className="text-slate-600 font-mono">›</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* System Telemetry & Back to Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyanAccent-400 mb-2">
                System Status
              </h4>
              <div className="p-3 rounded-xl bg-navy-900/60 border border-slate-800 text-xs font-mono text-slate-400 space-y-1">
                <div className="flex items-center justify-between">
                  <span>TELEMETRY:</span>
                  <span className="text-emerald-400">NOMINAL</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>FRAMEWORK:</span>
                  <span className="text-cyanAccent-300">REACT + VITE</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>HOSTING:</span>
                  <span className="text-slate-300">GITHUB PAGES READY</span>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-center space-x-2 w-full py-2.5 rounded-xl bg-navy-900 border border-slate-700 hover:border-cyanAccent-400 text-slate-300 hover:text-white text-xs font-mono transition-all duration-200 cursor-pointer group"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyanAccent-400 group-hover:-translate-y-0.5 transition-transform" />
              <span>RETURN TO TOP</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4">
            <span>DESIGNED WITH PRECISION</span>
            <span>•</span>
            <span className="text-slate-400">NEURAL INDUSTRY THEME</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
