import React, { useState } from 'react';
import { 
  Camera, 
  Scan, 
  MapPin, 
  ShieldAlert, 
  BellRing, 
  Cpu, 
  Satellite, 
  Radio, 
  Volume2, 
  ArrowRight, 
  ExternalLink, 
  AlertTriangle,
  FolderGit2,
  Activity,
  Code
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeArchStep, setActiveArchStep] = useState<number>(0);
  const [modalType, setModalType] = useState<'igaard' | 'hospital' | 'code' | null>(null);

  const igaard = PORTFOLIO_DATA.projects.igaard;
  const hospital = PORTFOLIO_DATA.projects.hospital;

  const archIcons = [
    <Camera className="w-5 h-5" />,
    <Scan className="w-5 h-5" />,
    <MapPin className="w-5 h-5" />,
    <ShieldAlert className="w-5 h-5" />,
    <BellRing className="w-5 h-5" />
  ];

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-navy-950/70 circuit-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyanAccent-400 tracking-widest uppercase mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Applied Engineering & Prototyping</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Building Solutions That Matter.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Hands-on projects where theoretical concepts transform into physical prototypes and functioning software.
          </p>
        </div>

        {/* 1. FEATURED PROJECT: I-GAARD (Largest, Most Visually Prominent Card) */}
        <div className="relative rounded-3xl glass-panel-glow border-2 border-cyanAccent-500/30 p-6 sm:p-9 lg:p-12 mb-16 shadow-2xl transition-all duration-300">
          
          {/* Prominent Header Badge & Status */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyanAccent-500/15 border border-cyanAccent-500/40 text-cyanAccent-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-cyanAccent-400 animate-pulse"></span>
              <span className="font-semibold tracking-wider">FLAGSHIP INTERDISCIPLINARY PROJECT</span>
            </div>

            <div className="flex items-center space-x-3 text-xs font-mono">
              <span className="text-slate-400">STATUS:</span>
              <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-medium">
                {igaard.status}
              </span>
            </div>
          </div>

          {/* Project Title & Headline */}
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white leading-tight">
              {igaard.title}
            </h3>
            <p className="mt-2 text-base sm:text-lg font-mono text-cyanAccent-300">
              {igaard.headline}
            </p>
          </div>

          {/* Problem & Proposed Solution Blocks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-navy-900/80 border border-slate-800 relative">
              <div className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                <span>The Problem</span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {igaard.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-900/80 border border-slate-800 relative">
              <div className="text-xs font-mono uppercase tracking-wider text-cyanAccent-400 mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyanAccent-400"></span>
                <span>The Proposed Solution</span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {igaard.solution}
              </p>
            </div>
          </div>

          {/* Interactive Animated System Architecture Diagram */}
          <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-navy-950/90 border border-cyanAccent-500/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-slate-800 gap-2">
              <div>
                <span className="text-xs font-mono text-cyanAccent-400 uppercase tracking-widest block">
                  Interactive Pipeline Architecture
                </span>
                <h4 className="text-lg font-heading font-bold text-white">
                  Signal & Telemetry Flow: Detection to Notification
                </h4>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Click any node to inspect logic
              </span>
            </div>

            {/* Architecture Sequence Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
              {igaard.architectureSteps?.map((step, idx) => {
                const isActive = activeArchStep === idx;
                return (
                  <div
                    key={step.step}
                    onClick={() => setActiveArchStep(idx)}
                    className={`cursor-pointer p-4 rounded-xl transition-all duration-300 relative flex flex-col justify-between ${
                      isActive 
                        ? 'bg-navy-900 border-2 border-cyanAccent-400 shadow-[0_0_20px_rgba(0,240,255,0.25)] scale-[1.02]' 
                        : 'bg-navy-900/50 border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-cyanAccent-400 font-bold">
                          {step.step}
                        </span>
                        <div className={`p-1.5 rounded-lg ${isActive ? 'text-cyanAccent-300 bg-cyanAccent-500/20' : 'text-slate-400'}`}>
                          {archIcons[idx]}
                        </div>
                      </div>
                      <h5 className="text-xs sm:text-sm font-heading font-semibold text-white leading-tight">
                        {step.label}
                      </h5>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                      <span className={isActive ? 'text-cyanAccent-300' : 'text-slate-500'}>
                        {isActive ? 'ACTIVE' : 'INSPECT'}
                      </span>
                      {idx < 4 && <span className="text-slate-600 hidden sm:inline">→</span>}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Step Deep Dive Detail Panel */}
            {igaard.architectureSteps && (
              <div className="mt-5 p-4 rounded-xl bg-navy-900/80 border border-cyanAccent-500/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fadeIn">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-cyanAccent-400 font-bold uppercase">
                    STAGE {igaard.architectureSteps[activeArchStep].step} — {igaard.architectureSteps[activeArchStep].label}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {igaard.architectureSteps[activeArchStep].detail}
                  </p>
                </div>
                <div className="shrink-0 px-3 py-1 rounded bg-navy-950 border border-slate-800 text-[11px] font-mono text-cyanAccent-300">
                  STAGE {activeArchStep + 1} OF 5
                </div>
              </div>
            )}
          </div>

          {/* Technical Illustration: Hardware Components */}
          <div className="mb-10">
            <h4 className="text-base font-heading font-semibold text-white mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyanAccent-400" />
              <span>Core Hardware Ecosystem & Modules</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {igaard.hardwareComponents?.map((hw, i) => (
                <div key={hw.name} className="p-4 rounded-xl bg-navy-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <div className="flex items-center space-x-2 text-cyanAccent-400 mb-2">
                    {i === 0 && <Cpu className="w-4 h-4" />}
                    {i === 1 && <Satellite className="w-4 h-4" />}
                    {i === 2 && <Radio className="w-4 h-4" />}
                    {i === 3 && <Volume2 className="w-4 h-4" />}
                    <h5 className="text-sm font-heading font-bold text-white">{hw.name}</h5>
                  </div>
                  <p className="text-xs font-mono text-cyanAccent-300/80 mb-1">{hw.role}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{hw.specs}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Tag Chips */}
          <div className="mb-8">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2.5">
              Integrated Technologies
            </span>
            <div className="flex flex-wrap gap-2">
              {igaard.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 rounded-lg bg-navy-900 border border-slate-700 text-xs text-cyanAccent-200 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Prototype vs Proposed Notice */}
          <div className="p-4 rounded-xl bg-navy-950/80 border border-slate-800 text-xs text-slate-300 flex items-start space-x-3 mb-8">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-amber-300">Engineering Scope:</strong> {igaard.disclaimer}
            </p>
          </div>

          {/* TWO MAIN PROJECT BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => setModalType('igaard')}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-electric-600 hover:bg-electric-500 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-electric-600/30 cursor-pointer"
            >
              <span>View Project Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setModalType('code')}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-navy-900 border border-slate-700 hover:border-cyanAccent-500 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200 cursor-pointer"
            >
              <span>View Source Code</span>
              <Code className="w-4 h-4 text-cyanAccent-400" />
            </button>
          </div>

        </div>

        {/* 2. SECOND PROJECT: HOSPITAL MANAGEMENT SOFTWARE */}
        <div className="rounded-3xl glass-panel p-6 sm:p-9 border border-slate-800/90 hover:border-cyanAccent-500/20 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Information */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                  {hospital.status}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  ACADEMIC SOFTWARE PROJECT
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                {hospital.title}
              </h3>

              {/* Exact Description per requirements */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                “{hospital.description}”
              </p>

              {/* Technologies */}
              <div className="pt-2 flex flex-wrap gap-2">
                {hospital.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-lg bg-navy-900 border border-slate-800 text-xs font-mono text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => setModalType('hospital')}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-navy-900 border border-slate-700 hover:border-cyanAccent-500 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200 cursor-pointer"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-4 h-4 text-cyanAccent-400" />
                </button>

                <button
                  onClick={() => setModalType('code')}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-navy-900/60 border border-slate-800 hover:border-slate-700 text-slate-300 text-sm transition-all duration-200 cursor-pointer"
                >
                  <span>View Source Code</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </button>
              </div>
            </div>

            {/* Right Column: Clean Medical-Dashboard Illustration + Subtle Code Motif */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-navy-900/90 border border-slate-800 p-5 shadow-inner">
                
                {/* Simulated Hospital Dashboard Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs font-mono">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span className="text-white font-semibold">CLINICAL_PORTAL // PY_CLI</span>
                  </div>
                  <span className="text-emerald-400">STATUS: VERIFIED</span>
                </div>

                {/* Dashboard Metrics Cards */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-navy-950/70 border border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 block">PATIENT RECORDS</span>
                    <span className="text-lg font-heading font-bold text-white">ORGANIZED</span>
                  </div>
                  <div className="p-3 rounded-lg bg-navy-950/70 border border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 block">DOCTOR SLOTS</span>
                    <span className="text-lg font-heading font-bold text-cyanAccent-300">SCHEDULED</span>
                  </div>
                </div>

                {/* Subtle Python Code Motif */}
                <div className="p-3 rounded-lg bg-navy-950 border border-slate-800/90 font-mono text-[11px] text-slate-300 space-y-1">
                  <div className="text-slate-500"># Python Healthcare Module</div>
                  <div><span className="text-electric-400">def</span> <span className="text-cyanAccent-300">record_patient</span>(patient_id, vitals):</div>
                  <div className="pl-4 text-slate-400">database[patient_id] = format_clinical_entry(vitals)</div>
                  <div className="pl-4 text-emerald-400">return "Registration Completed"</div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

      {/* In-depth Details & Source Code Modals */}
      <ProjectModal 
        projectType={modalType}
        onClose={() => setModalType(null)}
      />
    </section>
  );
};
