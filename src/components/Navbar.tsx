import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'I-GAARD', href: '#projects' },
    { name: 'Internships', href: '#internships' },
    { name: 'Education', href: '#education' },
    { name: 'Languages', href: '#languages' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-navy-950/85 backdrop-blur-md border-b border-cyanAccent-500/20 shadow-lg shadow-black/40 py-3' 
          : 'bg-navy-950/40 backdrop-blur-sm border-b border-slate-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a 
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center space-x-3 text-left focus:outline-none focus:ring-2 focus:ring-cyanAccent-500 rounded-md p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-navy-900 border border-cyanAccent-500/30 group-hover:border-cyanAccent-500 transition-colors shadow-sm shadow-cyanAccent-500/20">
              <Cpu className="w-5 h-5 text-cyanAccent-400 group-hover:rotate-45 transition-transform duration-500" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyanAccent-500 animate-ping opacity-75" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyanAccent-400" />
            </div>
            <div>
              <span className="font-heading font-bold text-lg sm:text-xl tracking-wider text-white group-hover:text-cyanAccent-300 transition-colors">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-mono tracking-widest">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>NEURAL INDUSTRY // '28</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded-md transition-all duration-200 relative group ${
                    isActive 
                      ? 'text-cyanAccent-300 font-semibold bg-cyanAccent-500/10 border border-cyanAccent-500/30 shadow-[0_0_12px_rgba(0,240,255,0.15)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-electric-500 to-cyanAccent-500 rounded-full" />
                  )}
                </a>
              );
            })}

            {/* Quick Status Pill */}
            <div className="ml-3 pl-3 border-l border-slate-800 hidden xl:flex items-center space-x-2">
              <span className="text-[11px] font-mono text-cyanAccent-400/90 bg-cyanAccent-500/10 px-2.5 py-1 rounded border border-cyanAccent-500/20 flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-cyanAccent-400" />
                <span>B.E. EIC</span>
              </span>
            </div>
          </nav>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg bg-navy-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyanAccent-500/50 focus:outline-none focus:ring-2 focus:ring-cyanAccent-500"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6 text-cyanAccent-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-slate-800 bg-navy-950/95 backdrop-blur-xl rounded-xl p-3 shadow-2xl border border-cyanAccent-500/20 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-cyanAccent-500/15 text-cyanAccent-300 font-semibold border-l-2 border-cyanAccent-500 pl-4'
                        : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-slate-500">→</span>
                  </a>
                );
              })}
              <div className="pt-2 mt-2 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400 px-3">
                <span>STATUS: ACTIVE</span>
                <span className="text-cyanAccent-400">SRI SAIRAM ENG</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
