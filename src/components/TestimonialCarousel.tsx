import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export const TestimonialCarousel: React.FC = () => {
  const { data } = usePortfolio();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = data.testimonials;

  useEffect(() => {
    if (!isAutoPlay || testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlay, testimonials.length]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  if (!testimonials || testimonials.length === 0) return null;

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonial"
      className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-[#412D15]/40"
    >
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#412D15]/40 pb-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E1DCC9]/60">
              05. Endorsements & Feedback
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#E1DCC9]">
              What Collaborators Say
            </h2>
          </div>
          <div className="text-xs font-mono text-[#E1DCC9]/50">
            Client & Teammate Reviews
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative rounded-2xl border border-[#412D15] bg-[#1F150C]/60 p-8 sm:p-12 shadow-xl backdrop-blur-sm overflow-hidden">
          {/* Subtle quotation background glyph */}
          <div className="absolute top-6 right-8 text-8xl font-serif text-[#412D15]/20 select-none pointer-events-none leading-none">
            “
          </div>

          <div className="relative z-10 space-y-6">
            {/* Testimonial Quote */}
            <blockquote className="text-lg sm:text-xl md:text-2xl text-[#E1DCC9] font-normal leading-relaxed text-balance">
              “{current.testimonial}”
            </blockquote>

            {/* Author Lockup */}
            <div className="flex items-center justify-between pt-4 border-t border-[#412D15]/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#412D15] bg-[#2A1E11] flex items-center justify-center font-heading font-bold text-xs sm:text-sm text-[#E1DCC9]">
                  {current.avatarText || current.name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading text-base font-bold text-[#E1DCC9]">
                    {current.name}
                  </div>
                  <div className="text-xs font-mono text-[#E1DCC9]/70">
                    {current.position} · {current.company}
                  </div>
                </div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-lg border border-[#412D15] bg-black/60 flex items-center justify-center text-[#E1DCC9] hover:bg-[#1F150C] hover:border-[#E1DCC9]/40 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-lg border border-[#412D15] bg-black/60 flex items-center justify-center text-[#E1DCC9] hover:bg-[#1F150C] hover:border-[#E1DCC9]/40 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 pt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoPlay(false);
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-6 bg-[#E1DCC9]'
                    : 'w-1.5 bg-[#412D15] hover:bg-[#E1DCC9]/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Discreet Notice */}
        <div className="text-center">
          <p className="text-[11px] font-mono text-[#E1DCC9]/50">
            Representative reviews. Real endorsements can be updated via configuration or Content Editor.
          </p>
        </div>
      </div>
    </section>
  );
};
