/**
 * DECStudio Portfolio Website
 * Core Application Entry
 */

import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { AdaptableBackground } from './components/AdaptableBackground';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <PortfolioProvider>
      <div className="relative min-h-screen selection:bg-[#412D15] selection:text-[#E1DCC9] bg-black text-[#E1DCC9]">
        {/* Fixed dec.jpg Studio Background with 65% adapted opacity & face focus (56% 18%) */}
        <AdaptableBackground />

        {/* Loading Screen */}
        <LoadingScreen />

        {/* Scroll Progress Bar at top */}
        <ScrollProgress />

        {/* Subtle Desktop Follower Cursor */}
        <CustomCursor />

        {/* Sticky Top Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main id="main-content" className="relative z-10 flex flex-col">
          {/* 1. Home / Hero Section */}
          <Hero />

          {/* 2. About Section */}
          <About />

          {/* 3. Projects Showcase */}
          <Projects />

          {/* 4. Skills & Technologies */}
          <Skills />

          {/* 5. Experience Timeline */}
          <ExperienceTimeline />

          {/* 6. Testimonial Carousel */}
          <TestimonialCarousel />

          {/* 7. Contact & Application Form */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </PortfolioProvider>
  );
}
