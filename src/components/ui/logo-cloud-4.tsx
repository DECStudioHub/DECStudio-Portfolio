'use client';
import React from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { cn } from '@/lib/utils';

export type Logo = {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  node?: React.ReactNode;
  color?: string;
};

export type LogoCloudProps = React.ComponentProps<'div'> & {
  logos: Logo[];
  reverse?: boolean;
  speed?: number;
  speedOnHover?: number;
  gap?: number;
};

export function LogoCloud({
  logos,
  reverse = true,
  speed = 45,
  speedOnHover = 15,
  gap = 28,
  className,
  ...props
}: LogoCloudProps) {
  return (
    <div
      className={cn(
        'relative mx-auto w-full max-w-6xl overflow-hidden py-4',
        className
      )}
      {...props}
    >
      <InfiniteSlider
        gap={gap}
        reverse={reverse}
        duration={speed}
        durationOnHover={speedOnHover}
        className="py-2"
      >
        {logos.map((logo, idx) => (
          <div
            key={`logo-${logo.alt}-${idx}`}
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-[#140D07]/80 border border-[#412D15]/60 hover:border-[#E1DCC9]/40 hover:bg-[#1F150C] transition-all duration-200 select-none group shadow-sm shrink-0"
          >
            {logo.node ? (
              <div className="shrink-0 transition-transform duration-200 group-hover:scale-110">
                {logo.node}
              </div>
            ) : logo.src ? (
              <img
                alt={logo.alt}
                className="h-5 w-auto object-contain transition-transform duration-200 group-hover:scale-110"
                height="auto"
                loading="lazy"
                src={logo.src}
                width="auto"
              />
            ) : null}
            <span className="text-xs font-mono font-medium text-[#E1DCC9]/80 group-hover:text-white whitespace-nowrap transition-colors">
              {logo.alt}
            </span>
          </div>
        ))}
      </InfiniteSlider>

      {/* Edge gradient & progressive blur for seamless fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

      <ProgressiveBlur
        blurIntensity={0.8}
        className="pointer-events-none absolute top-0 left-0 h-full w-[100px] z-10"
        direction="left"
      />
      <ProgressiveBlur
        blurIntensity={0.8}
        className="pointer-events-none absolute top-0 right-0 h-full w-[100px] z-10"
        direction="right"
      />
    </div>
  );
}
