"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Button from '../UI/Button';

// Running counter component matching About and Home page heroes
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

export const GalleryHero = ({ onOpenTour, onOpenApply }) => {
  // Besant Nagar Neoclassical Travertine Villa Image
  const bgImage = '/images/residence-images/besantnagar-residence-view/img19.jpg';

  const scrollToGallery = () => {
    const el = document.getElementById('gallery-content');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="gallery-hero"
      className="relative w-full h-screen min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      {/* ── Background Architectural Image with Gentle Contrast Gradient ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={bgImage}
          alt="Ajay Homes Landmark Architectural Project Portfolio"
          className="w-full h-full object-cover object-center"
        />

        {/* Contrast gradients matching Home & About heroes */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent pointer-events-none" />
      </div>

      {/* ── Left-Aligned Content Container (Matching Home Page Hero Layout) ── */}
      <div className="relative z-10 max-w-[1800px] mx-auto w-full px-4 sm:px-12 pt-20 sm:pt-28 pb-6 flex-1 flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-center my-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-6 text-left space-y-4 sm:space-y-5"
          >
            {/* 1. Main Headline — Exact Home Page Font Size, Uppercase & Leading */}
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[1.12] drop-shadow-md text-left select-none">
              <span className="block text-white">
                Landmark Homes,
              </span>
              <span
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 60%, var(--text-primary) 100%)',
                }}
              >
                Delivered with Precision.
              </span>
            </h1>

            {/* 2. Subtitle Paragraph — Exact Home Page Typography & Density */}
            <p className="text-[11px] sm:text-sm md:text-[15px] text-white/90 font-normal max-w-xs sm:max-w-lg md:max-w-xl leading-relaxed drop-shadow select-none text-left">
              Explore authentic photographs of our{' '}
              completed luxury residences,{' '}
              modular kitchens, structural elevations, and{' '}
              turnkey developments{' '}
              built across Chennai with{' '}
              60+ years{' '}
              of trusted excellence.
            </p>

            {/* 3. Running Scores / Metrics Row matching Home and About heroes */}
            <div className="flex flex-nowrap items-center gap-4 sm:gap-10 pt-4 pb-2 border-t border-white/20 w-fit max-w-full">
              <div className="block text-left">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight drop-shadow">
                  <RunningCounter target={500} suffix="+" />
                </span>
                <span className="block text-[11px] sm:text-xs uppercase tracking-wider text-white/80 font-semibold mt-0.5">
                  Projects Delivered
                </span>
              </div>

              <div className="hidden sm:block w-px h-8 bg-white/20" />

              <div className="block text-left">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--primary)] tracking-tight drop-shadow">
                  <RunningCounter target={60} suffix="+" />
                </span>
                <span className="block text-[11px] sm:text-xs uppercase tracking-wider text-white/80 font-semibold mt-0.5">
                  Years of Trust
                </span>
              </div>

              <div className="hidden sm:block w-px h-8 bg-white/20" />

              <div className="block text-left">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight drop-shadow">
                  <RunningCounter target={100} suffix="%" />
                </span>
                <span className="block text-[11px] sm:text-xs uppercase tracking-wider text-white/80 font-semibold mt-0.5">
                  Client Satisfaction
                </span>
              </div>
            </div>

            {/* 4. Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-start gap-3 sm:gap-4">
              <Button
                onClick={scrollToGallery}
                variant="primary"
                size="md"
                icon={ArrowDown}
                showIcon={true}
              >
                Explore Delivered Homes
              </Button>

              <Button
                href="/contact"
                variant="glass"
                size="md"
              >
                Schedule Site Tour
              </Button>
            </div>

          </motion.div>

          {/* Right column empty to showcase architectural project view */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />
        </div>

      </div>

    </section>
  );
};

export default GalleryHero;
