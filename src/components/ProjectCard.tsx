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
      case 'dec-system':
        return (
          <div className="w-full h-full bg-[#120D08] relative overflow-hidden flex flex-col justify-between p-3.5 font-mono text-[10px] text-[#E1DCC9]/80 select-none">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#412D15]/60 pb-1.5">
              <span className="flex items-center gap-1.5 text-[#E1DCC9] font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                PCOUNT_W2W_ENGINE.xlsx
              </span>
              <span className="text-[9px] text-[#E1DCC9]/60 bg-black/50 px-1.5 py-0.5 rounded border border-[#412D15]/50">
                OFFLINE READY
              </span>
            </div>

            {/* Middle visual: Simulated Retail Count Tag & Barcode */}
            <div className="grid grid-cols-12 gap-2.5 py-1 items-center">
              {/* White Count Tag Preview */}
              <div className="col-span-7 bg-[#E1DCC9] text-[#120D08] p-2 rounded border border-[#412D15] shadow-inner space-y-1">
                <div className="flex justify-between items-center text-[8px] font-bold tracking-wider border-b border-[#120D08]/20 pb-0.5">
                  <span>COUNT TAG #0492</span>
                  <span className="bg-[#120D08] text-[#E1DCC9] px-1 rounded text-[7px]">9/PAGE</span>
                </div>
                <div className="text-[10px] font-black tracking-tight leading-none truncate">
                  LOC: AISLE-04-SHELF-B
                </div>
                {/* Simulated Barcode Lines */}
                <div className="h-4 flex items-center justify-between gap-[2px] bg-white px-1 py-0.5 rounded">
                  <div className="w-[2px] h-full bg-black" />
                  <div className="w-[1px] h-full bg-black" />
                  <div className="w-[3px] h-full bg-black" />
                  <div className="w-[1px] h-full bg-black" />
                  <div className="w-[2px] h-full bg-black" />
                  <div className="w-[4px] h-full bg-black" />
                  <div className="w-[1px] h-full bg-black" />
                  <div className="w-[3px] h-full bg-black" />
                  <div className="w-[2px] h-full bg-black" />
                  <div className="w-[1px] h-full bg-black" />
                  <div className="w-[3px] h-full bg-black" />
                  <div className="w-[2px] h-full bg-black" />
                </div>
                <div className="text-[7px] text-center font-mono text-[#120D08]/80 tracking-widest leading-none">
                  *4928104820*
                </div>
              </div>

              {/* Yellow PP Tag & Specs */}
              <div className="col-span-5 space-y-1.5">
                <div className="bg-[#EAB308] text-[#120D08] px-2 py-1 rounded text-[8px] font-bold leading-tight shadow-sm border border-[#CA8A04]">
                  <div className="text-[7px] uppercase tracking-wide opacity-80">PP TAG ENGINE</div>
                  <div className="truncate font-black">SHELF / PROMO</div>
                </div>
                <div className="text-[9px] text-[#E1DCC9]/70 space-y-0.5">
                  <div className="flex justify-between">
                    <span className="text-[#E1DCC9]/50">PARSER:</span>
                    <span className="text-emerald-400 font-medium">SheetJS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#E1DCC9]/50">EXPORT:</span>
                    <span className="text-[#E1DCC9]">jsPDF / Print</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Telemetry */}
            <div className="pt-1.5 border-t border-[#412D15]/50 flex items-center justify-between text-[9px] text-[#E1DCC9]/60">
              <span>LOCATOR GROUPING: A–Z</span>
              <span className="text-emerald-400 font-medium">ACCURACY: ±0.1mm</span>
            </div>
          </div>
        );
      case 'wifi-hitmap':
        return (
          <div className="w-full h-full bg-[#100B06] relative overflow-hidden flex flex-col justify-between p-3.5 font-mono text-[10px] text-[#E1DCC9]/80 select-none">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#412D15]/60 pb-1.5">
              <span className="flex items-center gap-1.5 text-[#E1DCC9] font-semibold">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                SURVEY_HEATMAP_GRID.cad
              </span>
              <span className="text-[9px] text-cyan-300/80 bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-800/40">
                FLOORPLAN ACTIVE
              </span>
            </div>

            {/* Middle visual: Simulated Interactive Floorplan Heatmap */}
            <div className="grid grid-cols-12 gap-2 py-1 items-center">
              {/* Heatmap Canvas Preview with Radar & Signal Rings */}
              <div className="col-span-7 bg-[#170F09] relative rounded border border-[#412D15] p-2 h-20 overflow-hidden flex flex-col justify-between">
                {/* Floorplan Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#412D1520_1px,transparent_1px),linear-gradient(to_bottom,#412D1520_1px,transparent_1px)] bg-[size:10px_10px]" />
                
                {/* AP 1 Signal Heatmap Rings */}
                <div className="absolute top-2 left-3 w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-400/20 border border-emerald-400/40 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  </div>
                </div>

                {/* AP 2 Signal Rings */}
                <div className="absolute -bottom-2 right-2 w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
                  </div>
                </div>

                {/* Cable Backbone connecting MDF to AP */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 16 10 L 45 42 L 85 55" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
                </svg>

                {/* Floor Labels */}
                <div className="relative z-10 flex justify-between text-[7px] text-[#E1DCC9]/50 font-mono">
                  <span>ZONE-A (AP-01: -48dBm)</span>
                  <span>MDF RACK</span>
                </div>
                <div className="relative z-10 flex justify-between text-[7px] text-[#E1DCC9]/50 font-mono">
                  <span>CAT6 UTP TRACE</span>
                  <span>ZONE-B (-64dBm)</span>
                </div>
              </div>

              {/* Network Infrastructure Telemetry */}
              <div className="col-span-5 space-y-1.5 text-[8.5px]">
                <div className="bg-[#1A120B] p-1.5 rounded border border-[#412D15]/80 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-[#E1DCC9]/50">AP NODES:</span>
                    <span className="text-emerald-400 font-bold">4 DEPLOYED</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#E1DCC9]/50">INFRA:</span>
                    <span className="text-[#E1DCC9]">MDF • IDF</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#E1DCC9]/50">SURVEY:</span>
                    <span className="text-cyan-400">128 PTS</span>
                  </div>
                </div>
                <div className="bg-black/40 px-1.5 py-1 rounded border border-[#412D15]/50 flex items-center justify-between text-[8px] text-[#E1DCC9]/70">
                  <span>HEATMAP:</span>
                  <span className="text-emerald-400 font-bold">2.4 / 5GHz</span>
                </div>
              </div>
            </div>

            {/* Bottom Telemetry */}
            <div className="pt-1.5 border-t border-[#412D15]/50 flex items-center justify-between text-[9px] text-[#E1DCC9]/60">
              <span>CABLE MAPPING: MDF ➔ IDF ➔ AP</span>
              <span className="text-cyan-400 font-medium">REPORT: PDF EXPORT</span>
            </div>
          </div>
        );
      case 'decstudiohub-suite':
        return (
          <div className="w-full h-full bg-[#110B07] relative overflow-hidden flex flex-col justify-between p-3.5 font-mono text-[10px] text-[#E1DCC9]/80 select-none">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#412D15]/60 pb-1.5">
              <span className="flex items-center gap-1.5 text-[#E1DCC9] font-semibold">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                STUDIO_UTILITY_CORE.ts
              </span>
              <span className="text-[9px] text-amber-300/80 bg-amber-950/40 px-1.5 py-0.5 rounded border border-amber-800/40">
                100% CLIENT-SIDE
              </span>
            </div>

            {/* Middle visual: Before/After Split Canvas Preview + Engine Telemetry */}
            <div className="grid grid-cols-12 gap-2 py-1 items-center">
              {/* Split-View Canvas Upscaler Graphic */}
              <div className="col-span-7 bg-[#1A120B] relative rounded border border-[#412D15] p-2 h-20 overflow-hidden flex flex-col justify-between">
                {/* Left side: Soft/Normal */}
                <div className="absolute inset-y-0 left-0 w-1/2 bg-[#23170E] flex flex-col items-start justify-center pl-2 border-r border-amber-400/80">
                  <span className="text-[7.5px] font-bold text-[#E1DCC9]/60 uppercase">1× Original</span>
                  <div className="w-6 h-6 mt-1 rounded bg-[#352416] flex items-center justify-center text-[8px] text-[#E1DCC9]/40 blur-[0.5px]">
                    RAW
                  </div>
                </div>

                {/* Right side: 4x Enhanced Bilateral Sharpened */}
                <div className="absolute inset-y-0 right-0 w-1/2 bg-[#2D1E12] flex flex-col items-end justify-center pr-2">
                  <span className="text-[7.5px] font-bold text-amber-300 uppercase">4× Enhanced</span>
                  <div className="w-6 h-6 mt-1 rounded bg-[#4A321E] border border-amber-400/60 flex items-center justify-center text-[8px] text-amber-300 font-bold shadow-[0_0_6px_#f59e0b40]">
                    HD
                  </div>
                </div>

                {/* Draggable Split Handle Indicator */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-amber-400 text-black flex items-center justify-center text-[7px] font-bold shadow-md">
                  ⇄
                </div>

                {/* Canvas Overlay Tag */}
                <div className="relative z-10 flex justify-between text-[7px] text-[#E1DCC9]/50 font-mono mt-auto">
                  <span>CANVAS API</span>
                  <span>LAPLACIAN 4×</span>
                </div>
              </div>

              {/* Suite Modules Telemetry */}
              <div className="col-span-5 space-y-1 text-[8px]">
                <div className="bg-[#180F08] p-1.5 rounded border border-[#412D15] space-y-0.5">
                  <div className="flex justify-between">
                    <span className="text-[#E1DCC9]/50">IMAGE:</span>
                    <span className="text-amber-300 font-medium">15 Tools</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#E1DCC9]/50">NETWORK:</span>
                    <span className="text-emerald-400 font-medium">CIDR / IP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#E1DCC9]/50">SOLAR:</span>
                    <span className="text-cyan-400 font-medium">PV / Battery</span>
                  </div>
                </div>
                <div className="bg-black/50 px-1.5 py-0.5 rounded border border-[#412D15]/50 flex items-center justify-between text-[7.5px] text-[#E1DCC9]/70">
                  <span>DATA EGRESS:</span>
                  <span className="text-emerald-400 font-bold">0 KB (LOCAL)</span>
                </div>
              </div>
            </div>

            {/* Bottom Telemetry */}
            <div className="pt-1.5 border-t border-[#412D15]/50 flex items-center justify-between text-[9px] text-[#E1DCC9]/60">
              <span>STORAGE: LOCAL PERSISTENCE</span>
              <span className="text-emerald-400 font-medium">ZERO SERVER EGRESS</span>
            </div>
          </div>
        );
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
      <div className="p-6 pt-0 mt-2 flex flex-wrap items-center justify-between border-t border-[#412D15]/40 pt-4 gap-2">
        <button
          onClick={() => onViewDetails(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E1DCC9] hover:underline decoration-1 underline-offset-4"
        >
          <span>View Details</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="flex items-center gap-2.5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live app for ${project.title}`}
              className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#412D15] hover:bg-[#573d1e] text-xs font-medium text-[#E1DCC9] border border-[#E1DCC9]/30 transition-all shadow-sm"
            >
              <span>Live System</span>
              <span className="text-[10px]">↗</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="flex items-center gap-1 text-xs font-mono text-[#E1DCC9]/70 hover:text-[#E1DCC9] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
