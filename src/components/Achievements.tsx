import React from 'react';
import { Trophy, Medal, MessageSquare, Lightbulb, Users, Zap, Compass, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getSoftSkillIcon = (name: string) => {
    switch (name) {
      case 'Communication':
        return <MessageSquare className="w-4 h-4 text-cyanAccent-400" />;
      case 'Problem-Solving':
        return <Lightbulb className="w-4 h-4 text-electric-400" />;
      case 'Teamwork':
        return <Users className="w-4 h-4 text-sky-400" />;
      case 'Quick Learning':
        return <Zap className="w-4 h-4 text-amber-400" />;
      case 'Adaptability':
        return <Compass className="w-4 h-4 text-violetAccent-400" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-cyanAccent-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 lg:py-28 relative bg-navy-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyanAccent-400 tracking-widest uppercase mb-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Professional Attributes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Achievements & Soft Skills.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Interpersonal strengths, leadership, communication agility, and competitive pursuits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Achievements (6 Cols) */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-cyanAccent-400" />
              <h3 className="text-base font-heading font-semibold text-white tracking-wide uppercase">
                Recognitions & Competitions
              </h3>
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.achievements.map((item, idx) => (
                <div
                  key={item.title}
                  className="rounded-2xl glass-panel p-6 border border-slate-800 hover:border-cyanAccent-500/40 transition-all duration-300 flex items-start space-x-4"
                >
                  <div className="p-3 rounded-xl bg-navy-900 border border-slate-700/80 shrink-0 text-cyanAccent-400">
                    {idx === 0 ? <Trophy className="w-6 h-6" /> : <Medal className="w-6 h-6" />}
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-cyanAccent-300 bg-cyanAccent-500/10 px-2 py-0.5 rounded border border-cyanAccent-500/20">
                      {item.category}
                    </span>
                    <h4 className="text-lg font-heading font-bold text-white pt-1">
                      {item.title}
                    </h4>
                    <p className="text-xs font-mono text-slate-400">
                      {item.event}
                    </p>
                    <p className="text-sm text-slate-300 pt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills (6 Cols) */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-electric-400" />
              <h3 className="text-base font-heading font-semibold text-white tracking-wide uppercase">
                Core Interpersonal Strengths
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {PORTFOLIO_DATA.softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl glass-panel border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center space-x-2.5 mb-2">
                    <div className="p-1.5 rounded-lg bg-navy-900 border border-slate-800">
                      {getSoftSkillIcon(skill.name)}
                    </div>
                    <h4 className="text-sm font-heading font-semibold text-white">
                      {skill.name}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              ))}

              {/* Collaborative Engineering card */}
              <div className="p-4 rounded-xl bg-navy-900/40 border border-slate-800/80 flex flex-col justify-center">
                <span className="text-[10px] font-mono text-slate-500 uppercase">ENGINEERING ETHOS</span>
                <p className="text-xs text-slate-300 mt-1">
                  Bridging analytical logic with open team communication in technical laboratory environments.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
