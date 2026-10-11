import React from 'react';
import { X, ExternalLink, Cpu, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GitHubIcon } from './SkillIcons';

interface ProjectModalProps {
  projectType: 'igaard' | 'hospital' | 'code' | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ projectType, onClose }) => {
  if (!projectType) return null;

  const igaardData = PORTFOLIO_DATA.projects.igaard;
  const hospitalData = PORTFOLIO_DATA.projects.hospital;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel-glow border border-cyanAccent-500/30 p-6 sm:p-8 text-left shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-navy-900 border border-slate-700 text-slate-400 hover:text-white hover:border-cyanAccent-500 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content for I-GAARD */}
        {projectType === 'igaard' && (
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-xs font-mono text-cyanAccent-400">
              <span className="w-2 h-2 rounded-full bg-cyanAccent-400 animate-pulse" />
              <span>DETAILED SPECIFICATION // I-GAARD</span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                {igaardData.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-cyanAccent-200 font-mono">
                {igaardData.headline}
              </p>
            </div>

            {/* Status & Non-deployment Notice */}
            <div className="p-4 rounded-xl bg-navy-950/80 border border-amber-500/30 text-amber-200/90 text-xs sm:text-sm flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300 font-mono">DEVELOPMENT TRANSPARENCY NOTICE:</strong>
                <p className="mt-1 leading-relaxed text-slate-300">
                  {igaardData.disclaimer}
                </p>
              </div>
            </div>

            {/* Problem & Proposed Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-navy-900/70 border border-slate-800">
                <span className="text-xs font-mono text-rose-400 uppercase tracking-wider block mb-1">
                  The Problem
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {igaardData.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-navy-900/70 border border-slate-800">
                <span className="text-xs font-mono text-cyanAccent-400 uppercase tracking-wider block mb-1">
                  The Proposed Solution
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {igaardData.solution}
                </p>
              </div>
            </div>

            {/* Hardware Module Breakdown */}
            <div>
              <h4 className="text-base font-heading font-semibold text-white mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyanAccent-400" />
                <span>Edge Hardware Architecture</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {igaardData.hardwareComponents?.map((hw) => (
                  <div key={hw.name} className="p-3.5 rounded-lg bg-navy-950/60 border border-slate-800 text-xs">
                    <div className="flex items-center justify-between text-cyanAccent-300 font-mono font-medium mb-1">
                      <span>{hw.name}</span>
                      <span className="text-slate-400 text-[10px]">{hw.role}</span>
                    </div>
                    <p className="text-slate-300">{hw.specs}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Implementation Milestones: Tested vs Planned */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-navy-950/70 border border-emerald-500/20">
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono mb-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>IMPLEMENTED & PROTOTYPED</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {igaardData.implementationStatus.completed.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-emerald-400 font-mono">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-navy-950/70 border border-cyanAccent-500/20">
                <div className="flex items-center space-x-2 text-cyanAccent-400 text-xs font-mono mb-2">
                  <Clock className="w-4 h-4" />
                  <span>PLANNED IN ROADMAP</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {igaardData.implementationStatus.planned.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-cyanAccent-400 font-mono">○</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-navy-900 border border-slate-700 text-white hover:border-cyanAccent-400 text-sm transition-colors cursor-pointer"
              >
                Close Specification
              </button>
            </div>
          </div>
        )}

        {/* Modal Content for Hospital Management Software */}
        {projectType === 'hospital' && (
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-xs font-mono text-cyanAccent-400">
              <span className="w-2 h-2 rounded-full bg-cyanAccent-400" />
              <span>ACADEMIC PROJECT // PYTHON SOFTWARE</span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                {hospitalData.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-300">
                {hospitalData.description}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-navy-900/70 border border-slate-800">
              <span className="text-xs font-mono text-cyanAccent-400 uppercase tracking-wider block mb-1">
                Project Scope
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                Focused on structured procedural and modular programming in Python. 
                Applies programming fundamentals such as data dictionaries, file persistence, 
                and structured terminal/modular workflows to organize clinical scheduling and patient data.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-navy-950/70 border border-emerald-500/20">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-2">
                Demonstrated Concepts
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {hospitalData.implementationStatus.completed.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-emerald-400 font-mono">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-navy-900 border border-slate-700 text-white hover:border-cyanAccent-400 text-sm transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Modal Content for Source Code Prompt */}
        {projectType === 'code' && (
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-xs font-mono text-cyanAccent-400">
              <GitHubIcon className="w-4 h-4 text-cyanAccent-400" />
              <span>SOURCE CODE REPOSITORY ACCESS</span>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-bold text-white">
                GitHub Repository Access
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Nihaarika’s active codebases are maintained on GitHub. You can visit her profile or view project repositories directly.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-navy-950/80 border border-cyanAccent-500/30 text-xs font-mono text-cyanAccent-300 space-y-2">
              <div className="flex items-center justify-between">
                <span>PROFILE URL:</span>
                <span className="text-white">https://github.com/Nihaarika-11</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>REPOSITORY STATUS:</span>
                <span className="text-emerald-400">CONNECTABLE ON GITHUB</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Per engineering guidelines, authentic GitHub URLs are configured without inventing fake sub-repository links. 
              Click below to explore Nihaarika's GitHub repositories.
            </p>

            <div className="pt-4 border-t border-slate-800 flex justify-end space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-navy-900 border border-slate-700 text-slate-300 text-sm hover:text-white cursor-pointer"
              >
                Cancel
              </button>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2 rounded-xl bg-cyanAccent-500 hover:bg-cyanAccent-400 text-navy-950 font-semibold text-sm transition-colors"
              >
                <span>Open GitHub Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
