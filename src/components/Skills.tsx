import React, { useState } from 'react';
import { 
  Brain, 
  Code, 
  Radio, 
  Layers, 
  Sparkles,
  Sliders,
  Factory,
  Boxes
} from 'lucide-react';
import type { SkillItem } from '../data/portfolioData';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  PythonLogo, 
  JavaLogo, 
  GitLogo, 
  ExcelLogo, 
  ESP32Chip, 
  ArduinoIcon, 
  PCBTraceIcon, 
  BoundingBoxIcon, 
  NeuralNetIcon, 
  SensorWaveIcon 
} from './SkillIcons';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getSkillVisual = (skill: SkillItem) => {
    switch (skill.name) {
      case 'Python':
        return <PythonLogo className="w-7 h-7" />;
      case 'Java':
        return <JavaLogo className="w-7 h-7" />;
      case 'Git & GitHub':
        return <GitLogo className="w-7 h-7" />;
      case 'Microsoft Excel':
        return <ExcelLogo className="w-7 h-7" />;
      case 'ESP32':
        return <ESP32Chip className="w-7 h-7" />;
      case 'Arduino Fundamentals':
        return <ArduinoIcon className="w-7 h-7" />;
      case 'Computer Vision':
      case 'Object Detection':
        return <BoundingBoxIcon className="w-7 h-7" />;
      case 'Artificial Intelligence Fundamentals':
      case 'Machine Learning Fundamentals':
        return <NeuralNetIcon className="w-7 h-7" />;
      case 'EasyEDA':
      case 'Tinkercad':
        return <PCBTraceIcon className="w-7 h-7" />;
      case 'Sensor Integration':
      case 'Sensors & Instrumentation':
        return <SensorWaveIcon className="w-7 h-7" />;
      case 'Basic Control Systems':
        return <Sliders className="w-6 h-6 text-cyanAccent-400" />;
      case 'Industrial Automation Exposure':
        return <Factory className="w-6 h-6 text-violetAccent-400" />;
      default:
        return <SensorWaveIcon className="w-7 h-7" />;
    }
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'ai':
        return <Brain className="w-5 h-5 text-cyanAccent-400" />;
      case 'software':
        return <Code className="w-5 h-5 text-electric-400" />;
      case 'iot':
        return <Radio className="w-5 h-5 text-sky-400" />;
      case 'electronics':
        return <Layers className="w-5 h-5 text-violetAccent-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyanAccent-400" />;
    }
  };

  const filteredCategories = activeTab === 'all'
    ? PORTFOLIO_DATA.skillCategories
    : PORTFOLIO_DATA.skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 lg:py-28 relative circuit-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyanAccent-400 tracking-widest uppercase mb-2">
              <Boxes className="w-3.5 h-3.5" />
              <span>Competencies & Technologies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
              My Technical Toolkit
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              A carefully structured set of foundational engineering disciplines, programming tools, and hardware platforms. 
              Skills in AI & Machine Learning represent ongoing active development.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-cyanAccent-500/20 text-cyanAccent-300 border border-cyanAccent-500/40 font-semibold shadow-sm shadow-cyanAccent-500/20'
                  : 'bg-navy-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              ALL MODULES
            </button>
            {PORTFOLIO_DATA.skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center space-x-1.5 cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-cyanAccent-500/20 text-cyanAccent-300 border border-cyanAccent-500/40 font-semibold shadow-sm shadow-cyanAccent-500/20'
                    : 'bg-navy-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <span>{cat.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div 
              key={category.id}
              className="rounded-2xl glass-panel p-6 sm:p-8 border border-slate-800/90 hover:border-cyanAccent-500/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800/80 gap-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-navy-900 border border-slate-700/60">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white flex items-center gap-2">
                      <span>{category.title}</span>
                      {category.id === 'ai' && (
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyanAccent-500/15 text-cyanAccent-300 border border-cyanAccent-500/30 font-normal">
                          Learning & Developing
                        </span>
                      )}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-mono">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>{category.skills.length} TECHNOLOGIES</span>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {category.skills.map((skill: SkillItem, skillIndex: number) => {
                  const isHovered = hoveredSkill === skill.name;
                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`group relative rounded-xl p-5 bg-navy-900/60 border transition-all duration-300 flex flex-col justify-between ${
                        isHovered 
                          ? 'border-cyanAccent-400 bg-navy-850/90 shadow-[0_0_20px_rgba(0,240,255,0.18)] -translate-y-1' 
                          : 'border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {/* Top: Icon + Status */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className={`p-2 rounded-lg bg-navy-950/80 border border-slate-800/90 transition-transform duration-300 ${
                            isHovered ? 'scale-110 border-cyanAccent-500/50 shadow-sm shadow-cyanAccent-500/20' : ''
                          }`}>
                            {getSkillVisual(skill)}
                          </div>
                          
                          {skill.status ? (
                            <span className="text-[10px] font-mono text-cyanAccent-300 bg-cyanAccent-500/10 px-2 py-0.5 rounded border border-cyanAccent-500/20">
                              {skill.status}
                            </span>
                          ) : (
                            <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-400">
                              Verified
                            </span>
                          )}
                        </div>

                        {/* Skill Name */}
                        <h4 className="text-base font-heading font-semibold text-white group-hover:text-cyanAccent-300 transition-colors">
                          {skill.name}
                        </h4>

                        {/* Practical Explanation */}
                        <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                      {/* Subtle Circuit Footer Accent */}
                      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500 group-hover:text-cyanAccent-400/80 transition-colors">
                        <span>MODULE</span>
                        <span>0{skillIndex + 1} // ACTIVE</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
