import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export const About: React.FC = () => {
  const { data } = usePortfolio();

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0: // Developer
        return (
          <svg className="w-5 h-5 text-[#E1DCC9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 1: // IT Professional
        return (
          <svg className="w-5 h-5 text-[#E1DCC9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
      case 2: // Problem Solver
        return (
          <svg className="w-5 h-5 text-[#E1DCC9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 3: // Technology Creator
        return (
          <svg className="w-5 h-5 text-[#E1DCC9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-[#412D15]/40"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#412D15]/40 pb-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E1DCC9]/60">
              01. Background & Philosophy
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#E1DCC9]">
              About DECStudio
            </h2>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono text-[#E1DCC9]/60">
            <span>Philippines Base</span>
            <span aria-hidden="true">·</span>
            <span>Multi-Disciplinary</span>
            <span aria-hidden="true">·</span>
            <span>Hybrid Engineering</span>
          </div>
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4 text-base sm:text-lg text-[#E1DCC9]/80 leading-relaxed">
            {data.about.bio.map((paragraph, idx) => (
              <p key={idx} className="text-balance">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lg:col-span-6 rounded-xl border border-[#412D15] bg-[#1F150C]/60 p-6 backdrop-blur-sm space-y-4">
            <h3 className="font-heading text-sm font-semibold tracking-wider text-[#E1DCC9] uppercase">
              Core Technical Competencies
            </h3>
            <div className="space-y-3 text-sm text-[#E1DCC9]/75">
              <div className="flex items-start gap-2.5">
                <span className="font-mono text-xs text-[#E1DCC9]/40 mt-0.5">01</span>
                <div>
                  <strong className="text-[#E1DCC9] font-medium">Full-Spectrum Engineering:</strong> Modern reactive web frontends, Node.js micro-services, and native Android applications.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="font-mono text-xs text-[#E1DCC9]/40 mt-0.5">02</span>
                <div>
                  <strong className="text-[#E1DCC9] font-medium">Enterprise IT Support:</strong> Practical troubleshooting of network switches, routers, desktop fleets, thermal POS terminals, and printers.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="font-mono text-xs text-[#E1DCC9]/40 mt-0.5">03</span>
                <div>
                  <strong className="text-[#E1DCC9] font-medium">Automation & Systems:</strong> Eliminating manual friction through batch scripts, background service daemons, and data reconciliation.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="font-mono text-xs text-[#E1DCC9]/40 mt-0.5">04</span>
                <div>
                  <strong className="text-[#E1DCC9] font-medium">Content Creation:</strong> High-clarity educational media, tutorial breakdowns, and digital storytelling across YouTube and social platforms.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Minimalist Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {data.about.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between p-6 rounded-xl border border-[#412D15] bg-[#1F150C]/40 hover:bg-[#1F150C] transition-all duration-200 hover:-translate-y-1 hover:border-[#E1DCC9]/40"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg border border-[#412D15] bg-[#2A1E11] flex items-center justify-center group-hover:border-[#E1DCC9]/40 transition-colors">
                    {getPillarIcon(idx)}
                  </div>
                  <span className="font-mono text-xs text-[#E1DCC9]/40">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold text-[#E1DCC9]">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-mono text-[#E1DCC9]/60 block mt-0.5">
                    {pillar.subtitle}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#E1DCC9]/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#412D15]/40 flex items-center justify-between text-[11px] font-mono text-[#E1DCC9]/50">
                <span>Practiced</span>
                <span className="group-hover:text-[#E1DCC9] transition-colors">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
