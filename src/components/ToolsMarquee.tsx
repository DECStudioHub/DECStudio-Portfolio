import React, { useMemo } from 'react';
import { LogoCloud, type Logo } from '@/components/ui/logo-cloud-4';
import { TOOLS_LIST } from '@/components/ui/tools-data';

export const ToolsMarquee: React.FC = () => {
  // Convert tools into Logo format
  const allLogos: Logo[] = useMemo(() => {
    return TOOLS_LIST.map((tool) => ({
      alt: tool.name,
      node: tool.icon,
      color: tool.color,
    }));
  }, []);

  // Split into two balanced rows for bi-directional marquee flow
  const half = Math.ceil(allLogos.length / 2);
  const row1 = allLogos.slice(0, half);
  const row2 = allLogos.slice(half);

  return (
    <section
      id="tools-marquee"
      className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-[#412D15]/40 bg-black/60 overflow-hidden"
    >
      {/* Background Ambience Glow */}
      <div
        aria-hidden="true"
        className="-top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[80vmin] w-[80vmin] rounded-full bg-[radial-gradient(ellipse_at_center,#412D1530,transparent_70%)] blur-[40px]"
      />

      <div className="relative max-w-7xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#412D15] bg-[#160E08] text-[11px] font-mono text-[#E1DCC9]/70 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>54 Verified Ecosystem & Field Tools</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#E1DCC9]">
            Tools, Platforms & Daily Software
          </h2>

          <p className="text-xs sm:text-sm font-mono text-[#E1DCC9]/65">
            Enterprise cloud suites, developer environments, AI copilots, and IT infrastructure tools utilized across daily operations.
          </p>
        </div>

        {/* Dual Marquee Slider Rails */}
        <div className="space-y-4 pt-2">
          {/* Row 1: Forward */}
          <LogoCloud
            logos={row1}
            reverse={false}
            speed={50}
            speedOnHover={15}
            gap={20}
          />

          {/* Row 2: Reverse */}
          <LogoCloud
            logos={row2}
            reverse={true}
            speed={45}
            speedOnHover={15}
            gap={20}
          />
        </div>
      </div>
    </section>
  );
};
