import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ProjectItem } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  const { data } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = [
    'All',
    'Web Development',
    'Android',
    'Software',
    'IT Tools',
    'Automation',
    'Creative Projects',
  ];

  const filteredProjects = selectedCategory === 'All'
    ? data.projects
    : data.projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-[#412D15]/40"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#412D15]/40 pb-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E1DCC9]/60">
              02. Selected Engineering Works
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#E1DCC9]">
              Featured Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#E1DCC9]/70 max-w-md font-mono">
            Practical systems, mobile apps, automation utilities, and responsive web platforms.
          </p>
        </div>

        {/* Filter Bar (Segmented Controls) */}
        <div className="flex items-center overflow-x-auto pb-2 scrollbar-none gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-[#412D15] text-[#E1DCC9] shadow-sm border border-[#E1DCC9]/30 font-semibold'
                    : 'bg-[#1F150C]/60 text-[#E1DCC9]/70 hover:text-[#E1DCC9] border border-[#412D15]/50 hover:bg-[#1F150C]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={(p) => setActiveProject(p)}
            />
          ))}
        </div>

        {/* Project Detail Lightbox Modal */}
        {activeProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          >
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border border-[#412D15] bg-[#1F150C] p-6 sm:p-8 shadow-2xl text-[#E1DCC9] space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-[#412D15] pb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#E1DCC9]/60 mb-1">
                    <span>{activeProject.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-400">{activeProject.status}</span>
                  </div>
                  <h3 id="project-modal-title" className="font-heading text-2xl font-bold text-[#E1DCC9]">
                    {activeProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="rounded-lg border border-[#412D15] p-2 text-[#E1DCC9]/70 hover:text-[#E1DCC9] hover:bg-[#2A1E11] transition-colors"
                  aria-label="Close project modal"
                >
                  ✕
                </button>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#E1DCC9]/50">
                  Overview & Problem Solved
                </h4>
                <p className="text-sm sm:text-base text-[#E1DCC9]/85 leading-relaxed">
                  {activeProject.fullDescription}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#E1DCC9]/50">
                  Core Architectural Capabilities
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#E1DCC9]/80">
                  {activeProject.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#E1DCC9] mt-0.5">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture & Tech Stack */}
              {activeProject.architectureNotes && (
                <div className="p-4 rounded-lg border border-[#412D15] bg-black/40 space-y-1.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#E1DCC9]/50">
                    System Architecture
                  </h4>
                  <p className="text-xs text-[#E1DCC9]/80 font-mono">
                    {activeProject.architectureNotes}
                  </p>
                </div>
              )}

              {/* Tech Stack Metadata */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#E1DCC9]/50">
                  Technologies Deployed
                </h4>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#E1DCC9]">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-black/60 border border-[#412D15]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-[#412D15]">
                {activeProject.githubUrl ? (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#412D15] bg-black text-xs font-semibold text-[#E1DCC9] hover:bg-[#2A1E11] transition-colors"
                  >
                    <span>View Repository on GitHub</span>
                    <span>↗</span>
                  </a>
                ) : <span />}

                <button
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2 text-xs font-medium text-[#E1DCC9]/70 hover:text-[#E1DCC9]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
