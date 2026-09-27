import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import profileAvatar from '../assets/images/PP.jpg';

export const ProfileImage: React.FC = () => {
  const { data } = usePortfolio();

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Outer Enhanced Glow Halo */}
      <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#412D15]/30 via-[#E1DCC9]/15 to-[#412D15]/40 blur-3xl pointer-events-none" />

      {/* Main Avatar Container with Technical Rotating Rings */}
      <div className="group relative w-64 h-64 sm:w-72 sm:h-72 md:w-84 md:h-84 lg:w-92 lg:h-92 flex items-center justify-center">
        {/* Outer Slow Rotating Technical Ring */}
        <div
          className="absolute inset-0 rounded-full border border-dashed border-[#412D15] animate-spin-slow pointer-events-none"
          style={{ animationDuration: '32s' }}
        />

        {/* Middle Counter-Rotating Technical Accent Ring */}
        <div
          className="absolute inset-3 rounded-full border border-dotted border-[#E1DCC9]/30 animate-spin-reverse pointer-events-none"
          style={{ animationDuration: '40s' }}
        />

        {/* Orbiting technical accents */}
        <div
          className="absolute inset-0 animate-spin-slow pointer-events-none"
          style={{ animationDuration: '24s' }}
        >
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#E1DCC9] shadow-[0_0_10px_#E1DCC9]" />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#412D15]" />
        </div>

        {/* Inner Solid Border & Fixed Profile Photo Frame */}
        <div className="relative w-[84%] h-[84%] rounded-full overflow-hidden border-2 border-[#412D15] bg-[#1F150C] shadow-[0_10px_35px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:border-[#E1DCC9]/80 group-hover:shadow-[0_10px_45px_rgba(225,220,201,0.15)]">
          <img
            src={profileAvatar}
            alt={`${data.profile.name} - DECStudio`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />

          {/* Subtle vignette rim inside the frame */}
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/30 pointer-events-none" />
        </div>
      </div>

      {/* Identity Tag (Clean, Non-Editable) */}
      <div className="mt-3 flex items-center">
        <span className="inline-flex items-center gap-2 text-xs text-[#E1DCC9]/90 px-3.5 py-1 rounded-full border border-[#412D15] bg-[#1F150C]/80 shadow-md backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="font-mono text-xs">{data.profile.name}</span>
        </span>
      </div>
    </div>
  );
};
