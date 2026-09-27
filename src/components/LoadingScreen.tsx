import React, { useEffect, useState } from 'react';

export const LoadingScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Very fast professional load exit (<500ms)
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 380);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-300 pointer-events-none ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Monogram / Brand */}
        <div className="relative flex items-center justify-center w-16 h-16 border border-[#412D15] rounded-xl bg-[#1F150C]/90">
          <span className="font-heading text-xl font-bold tracking-wider text-[#E1DCC9]">
            DEC
          </span>
          <div className="absolute inset-0 rounded-xl border border-[#E1DCC9]/20 animate-ping opacity-25" />
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <span className="font-heading text-sm font-semibold tracking-widest text-[#E1DCC9] uppercase">
            DECStudio
          </span>
          <div className="w-28 h-0.5 bg-[#1F150C] overflow-hidden rounded-full">
            <div className="w-full h-full bg-[#E1DCC9] animate-[translateX_0.6s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
};
