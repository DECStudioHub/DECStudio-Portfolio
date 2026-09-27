import React from 'react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectCardProps {
  project: ProjectItem;
  onViewDetails: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  // Render a clean, stylized technical preview graphic for each project
  const renderPreviewGraphic = (theme: string) => {
    switch (theme) {
      case 'it-support':
        return (
          <div className="w-full h-full bg-[#150E07] relative overflow-hidden flex flex-col justify-between p-4 font-mono text-[10px] text-[#E1DCC9]/70 select-none">
            <div className="flex items-center justify-between border-b border-[#412D15]/60 pb-2">
              <span className="flex items-center gap-1.5 text-[#E1DCC9]">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                ASSET_HEALTH_DAEMON
              </span>
              <span className="text-[#E1DCC9]/40">PORT: 8080</span>
            </div>
            <div className="space-y-1.5 py-2">
              <div className="flex justify-between text-[#E1DCC9]/80">
                <span>LAN_DEVICES: 48 ONLINE</span>
                <span className="text-emerald-400">99.8% SLA</span>
              </div>
              <div className="w-full bg-[#1F150C] h-1.5 rounded overflow-hidden">
                <div className="bg-[#E1DCC9] h-full w-[88%]" />
              </div>
              <div className="flex justify-between text-[#E1DCC9]/50 text-[9px]">
                <span>PRINTER_SPOOLER: READY</span>
                <span>TICKETS: 0 PENDING</span>
              </div>
            </div>
            <div className="pt-2 border-t border-[#412D15]/40 flex items-center justify-between text-[9px] text-[#E1DCC9]/40">
              <span>SCANNER: USB/BT OK</span>
              <span>PING: 1.2ms</span>
            </div>
          </div>
        );
      case 'android-pos':
        return (
          <div className="w-full h-full bg-[#120D08] relative overflow-hidden flex flex-col justify-between p-4 font-mono text-[10px] text-[#E1DCC9]/70 select-none">
            <div className="flex items-center justify-between border-b border-[#412D15]/60 pb-2">
              <span className="flex items-center gap-1.5 text-[#E1DCC9]">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                POS_CORE_SYNC.apk
              </span>
              <span className="text-[#E1DCC9]/40">SQLITE OFFLINE</span>
            </div>
            <div className="py-2 space-y-1">
              <div className="text-[11px] text-[#E1DCC9] font-bold">TX_QUEUE: 14 BATCHED</div>
              <div className="text-[9px] text-[#E1DCC9]/60">THERMAL_PRINT: ESC/POS DRIVER LOADED</div>
              <div className="text-[9px] text-emerald-400">AUTO_RECONCILE: STANDBY</div>
            </div>
            <div className="pt-2 border-t border-[#412D15]/40 flex items-center justify-between text-[9px] text-[#E1DCC9]/40">
              <span>SDK: 34 (Android 14)</span>
              <span>BT: PAIRED</span>
            </div>
          </div>
        );
      case 'automation':
        return (
          <div className="w-full h-full bg-[#0E0B07] relative overflow-hidden flex flex-col justify-between p-4 font-mono text-[10px] text-[#E1DCC9]/70 select-none">
            <div className="flex items-center justify-between border-b border-[#412D15]/60 pb-2">
              <span className="flex items-center gap-1.5 text-[#E1DCC9]">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                CRON_INTEGRITY_WATCH
              </span>
              <span className="text-[#E1DCC9]/40">PID: 4912</span>
            </div>
            <div className="space-y-1 py-1">
              <div className="text-[9px] text-[#E1DCC9]/70">SHA256: e3b0c44298fc1c14...</div>
              <div className="text-[9px] text-emerald-400">SNAPSHOT: ARCHIVED OK (2.4 GB)</div>
              <div className="text-[9px] text-[#E1DCC9]/50">WEBHOOK: DISPATCHED [200 OK]</div>
            </div>
            <div className="pt-2 border-t border-[#412D15]/40 flex items-center justify-between text-[9px] text-[#E1DCC9]/40">
              <span>FREQ: 00:00 UTC</span>
              <span>STATUS: NOMINAL</span>
            </div>
          </div>
        );
      case 'web-platform':
        return (
          <div className="w-full h-full bg-[#18110A] relative overflow-hidden flex flex-col justify-between p-4 font-mono text-[10px] text-[#E1DCC9]/70 select-none">
            <div className="flex items-center justify-between border-b border-[#412D15]/60 pb-2">
              <span className="flex items-center gap-1.5 text-[#E1DCC9]">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                CLIENT_PORTAL_SPA
              </span>
              <span className="text-[#E1DCC9]/40">VITE + REACT</span>
            </div>
            <div className="space-y-1.5 py-1">
              <div className="h-2 w-2/3 bg-[#412D15] rounded" />
              <div className="h-2 w-full bg-[#1F150C] rounded" />
              <div className="flex gap-2 text-[9px] text-[#E1DCC9]/60">
                <span>LIGHTHOUSE: 98</span>
                <span>TTFB: 42ms</span>
              </div>
            </div>
            <div className="pt-2 border-t border-[#412D15]/40 flex items-center justify-between text-[9px] text-[#E1DCC9]/40">
              <span>SSR: HYBRID</span>
              <span>A11Y: WCAG AA</span>
            </div>
          </div>
        );
      case 'creative-studio':
        return (
          <div className="w-full h-full bg-[#160E08] relative overflow-hidden flex flex-col justify-between p-4 font-mono text-[10px] text-[#E1DCC9]/70 select-none">
            <div className="flex items-center justify-between border-b border-[#412D15]/60 pb-2">
              <span className="flex items-center gap-1.5 text-[#E1DCC9]">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                STUDIO_PIPELINE.node
              </span>
              <span className="text-[#E1DCC9]/40">1080p60</span>
            </div>
            <div className="space-y-1 py-1">
              <div className="text-[10px] text-[#E1DCC9]">RENDER_QUEUE: 3 EPISODES</div>
              <div className="text-[9px] text-[#E1DCC9]/60">BATCH_THUMBNAILS: 16:9 + 9:16</div>
              <div className="text-[9px] text-amber-300">PUBLISH_SYNC: READY</div>
            </div>
            <div className="pt-2 border-t border-[#412D15]/40 flex items-center justify-between text-[9px] text-[#E1DCC9]/40">
              <span>TAGS: AUTO_GENERATED</span>
              <span>SYNC: YT & TT</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-full bg-[#110C07] relative overflow-hidden flex flex-col justify-between p-4 font-mono text-[10px] text-[#E1DCC9]/70 select-none">
            <div className="flex items-center justify-between border-b border-[#412D15]/60 pb-2">
              <span className="text-[#E1DCC9]">SYS_TOOLKIT</span>
              <span className="text-[#E1DCC9]/40">v2.1</span>
            </div>
            <div className="py-2 text-[9px] text-[#E1DCC9]/70">
              NETWORK_DIAGNOSTICS & PACKET_ANALYSIS
            </div>
            <div className="pt-2 border-t border-[#412D15]/40 text-[9px] text-[#E1DCC9]/40">
              STATUS: READY
            </div>
          </div>
        );
    }
  };

  return (
    <article
      className="group relative flex flex-col justify-between rounded-xl border border-[#412D15] bg-[#1F150C]/50 hover:bg-[#1F150C] transition-all duration-300 hover:-translate-y-1 hover:border-[#E1DCC9]/40 hover:shadow-xl overflow-hidden"
    >
      <div>
        {/* Preview Frame */}
        <div
          className="relative h-48 w-full border-b border-[#412D15] bg-[#0E0A06] overflow-hidden cursor-pointer flex flex-col"
          onClick={() => onViewDetails(project)}
        >
          {/* Card Top Header: Displays Category and Status cleanly without overlapping preview content */}
          <div className="flex items-center justify-between px-3.5 py-2 bg-[#170F09] border-b border-[#412D15]/70 z-10 shrink-0">
            {/* Category indicator */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#1F150C] border border-[#412D15] text-[10px] font-mono text-[#E1DCC9]/90 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E1DCC9]/50" />
              {project.category}
            </span>

            {/* Status indicator */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-black/75 border border-[#412D15] text-[10px] font-mono text-[#E1DCC9]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
              <span>{project.status}</span>
            </span>
          </div>

          {/* Technical Graphic Preview (Unobstructed, full visibility) */}
          <div className="w-full flex-1 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
            {renderPreviewGraphic(project.imageTheme)}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-3">
          <h3
            onClick={() => onViewDetails(project)}
            className="font-heading text-lg font-bold text-[#E1DCC9] cursor-pointer hover:text-white transition-colors"
          >
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#E1DCC9]/70 line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Zero-Pill Tech Stack Metadata per Constitution */}
          <div className="pt-2">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#E1DCC9]/60">
              {project.techStack.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="hover:text-[#E1DCC9] transition-colors">{tech}</span>
                  {idx < project.techStack.length - 1 && (
                    <span className="text-[#412D15]" aria-hidden="true">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0 mt-2 flex items-center justify-between border-t border-[#412D15]/40 pt-4">
        <button
          onClick={() => onViewDetails(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E1DCC9] hover:underline decoration-1 underline-offset-4"
        >
          <span>View Project</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="flex items-center gap-1 text-xs font-mono text-[#E1DCC9]/60 hover:text-[#E1DCC9] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>
        )}
      </div>
    </article>
  );
};
