import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { SocialLinks } from './SocialLinks';

export const Footer: React.FC = () => {
  const { data } = usePortfolio();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="relative z-10 border-t border-[#412D15] bg-black/90 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Subtitle */}
          <div className="flex flex-col items-center md:items-start space-y-1 text-center md:text-left">
            <span className="font-heading text-2xl font-bold tracking-tight text-[#E1DCC9]">
              {data.brand.name}
            </span>
            <p className="text-xs sm:text-sm font-mono text-[#E1DCC9]/70">
              {data.brand.footerSubtitle}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center">
            <SocialLinks size="md" />
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 border-y border-[#412D15]/40 py-4 text-xs font-mono">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-[#E1DCC9]/70 hover:text-[#E1DCC9] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Bottom Bar: Clean Copyright (No version text, No edit buttons) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#E1DCC9]/60">
          <p>
            © {data.brand.copyrightYear} {data.brand.name}. All Rights Reserved.
          </p>

          <span className="text-[#E1DCC9]/40 text-[11px]">
            Designed & Engineered with Precision
          </span>
        </div>
      </div>
    </footer>
  );
};
