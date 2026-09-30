"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';

// Lightweight animated counter component for running scores
const RunningCounter = ({ target, suffix = '', prefix = '', duration = 1.6 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = parseInt(target, 10);
    if (isNaN(end)) return;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export const AboutHero = () => {
  // Besant Nagar Residence Image requested by user
  const bgImage = '/images/residence-images/besantnagar-residence-view/img188.jpg';

  return (
    <section 
      id="about-hero"
      className="relative w-full h-screen min-h-[640px] sm:min-h-[720px] flex items-center overflow-hidden"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      {/* ── Background Image (img188.jpg) with gentle contrast layer matching home page ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={bgImage}
          alt="Besant Nagar Architectural Residence by Ajay Homes"
          className="w-full h-full object-cover object-center"
        />

        {/* Home page matching soft gradients: keeps image authentic & vivid while giving crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent pointer-events-none" />
      </div>

      {/* ── Main Layout Container — Flush Left End matching Home Page ── */}
      <div className="relative z-10 max-w-[1800px] mx-auto w-full px-4 sm:px-12 pt-20 sm:pt-28 pb-6 flex-1 flex flex-col justify-center">
        
        {/* Left End Content Grid matching home page */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center my-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 xl:col-span-7 text-left space-y-4 sm:space-y-5"
          >
            
            {/* 1. Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[45px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.18] drop-shadow-md">
              Built on Experience.{' '}
              <span 
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #ff8c00 0%, #ffab40 50%, #ffe0b2 100%)',
                }}
              >
                Defined by Quality.
              </span>
            </h1>

            {/* 2. Description Paragraph */}
            <div className="text-xs sm:text-sm md:text-base text-white/90 font-normal leading-relaxed max-w-xl drop-shadow">
              <p>
                With <span className="text-white font-semibold">50+ years of industry experience</span> and{' '}
                <span className="text-white font-semibold">500+ projects</span>, Ajay Homes brings together construction, property development, project management, interiors, and real estate under one roof.
              </p>
            </div>

            {/* 4. Running Scores matching Home Page: No cards, clean horizontal numbers */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-4 pb-2 border-t border-white/20 max-w-xl">
              {/* Score 1 */}
              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight drop-shadow">
                  <RunningCounter target={50} suffix="+" />
                </span>
                <span className="block text-[11px] sm:text-xs uppercase tracking-wider text-white/75 font-semibold mt-0.5">
                  Years Experience
                </span>
              </div>

              <div className="hidden sm:block w-px h-8 bg-white/20" />

              {/* Score 2 */}
              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#ff8c00] tracking-tight drop-shadow">
                  <RunningCounter target={500} suffix="+" />
                </span>
                <span className="block text-[11px] sm:text-xs uppercase tracking-wider text-white/75 font-semibold mt-0.5">
                  Projects Built
                </span>
              </div>

              <div className="hidden sm:block w-px h-8 bg-white/20" />

              {/* Score 3 */}
              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight drop-shadow">
                  <RunningCounter target={1} prefix="₹" suffix=" Cr+" />
                </span>
                <span className="block text-[11px] sm:text-xs uppercase tracking-wider text-white/75 font-semibold mt-0.5">
                  Developments
                </span>
              </div>
            </div>

            {/* 5. Reusable Button matching home page */}
            <div className="pt-2">
              <Button
                href="/contact"
                variant="primary"
                size="md"
              >
                Start a Conversation
              </Button>
            </div>

          </motion.div>

          <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />
        </div>

      </div>
    </section>
  );
};

export default AboutHero;
