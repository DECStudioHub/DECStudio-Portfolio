import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export const ExperienceTimeline: React.FC = () => {
  const { data } = usePortfolio();
  const [expandedId, setExpandedId] = useState<string | null>(data.experience[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="experience"
      className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-[#412D15]/40"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#412D15]/40 pb-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E1DCC9]/60">
              04. Career & Roles
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#E1DCC9]">
              Professional Experience
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#E1DCC9]/70 max-w-md font-mono">
            Chronological milestones in software engineering, technical support operations, and system consulting.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#412D15] space-y-10">
          {data.experience.map((item, idx) => {
            const isExpanded = expandedId === item.id;
            return (
              <div key={item.id} className="relative group">
                {/* Circular Marker */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                    idx === 0
                      ? 'border-[#E1DCC9] bg-[#E1DCC9] shadow-[0_0_10px_#E1DCC9]'
                      : 'border-[#412D15] bg-[#1F150C] group-hover:border-[#E1DCC9]'
                  }`}
                />

                {/* Card Container */}
                <div className="rounded-xl border border-[#412D15] bg-[#1F150C]/50 hover:bg-[#1F150C] p-6 sm:p-7 transition-all duration-200 space-y-4 hover:border-[#E1DCC9]/40">
                  {/* Top Bar: Period & Type */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <span className="text-[#E1DCC9] font-semibold tracking-wider">
                      {item.period}
                    </span>
                    <span className="text-[#E1DCC9]/50">
                      {item.type} · {item.location}
                    </span>
                  </div>

                  {/* Role & Company */}
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#E1DCC9]">
                      {item.position}
                    </h3>
                    <span className="text-sm font-medium text-[#E1DCC9]/75 block mt-0.5">
                      {item.company}
                    </span>
                  </div>

                  {/* Core Responsibilities */}
                  <div className="space-y-2 pt-1">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#E1DCC9]/50">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-[#E1DCC9]/80">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <span className="text-[#412D15] font-mono mt-0.5">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expandable Achievements & Tech Stack */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-[#412D15]/40 space-y-4">
                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-[#E1DCC9]/50">
                          Major Achievements
                        </h4>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-[#E1DCC9]/80">
                          {item.achievements.map((ach, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2">
                              <span className="text-emerald-400 mt-0.5">✓</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-[#E1DCC9]/50">
                          Technologies & Environments
                        </h4>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#E1DCC9]/70">
                          {item.technologies.map((tech, tIdx) => (
                            <React.Fragment key={tech}>
                              <span>{tech}</span>
                              {tIdx < item.technologies.length - 1 && (
                                <span className="text-[#412D15]" aria-hidden="true">
                                  ·
                                </span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Toggle Accordion Button */}
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E1DCC9]/70 hover:text-[#E1DCC9] transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Full Details & Achievements'}</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
