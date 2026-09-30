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
      className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] h-screen flex flex-col justify-center overflow-hidden"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
      </div>

      {/* ── Left-Aligned Content Container (Matching Home, About, Contact Heroes) ── */}
      <div className="relative z-10 max-w-[1600px] mx-auto w-full px-5 sm:px-10 lg:px-16 pt-24 sm:pt-28 pb-10 flex-1 flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 xl:col-span-7 text-left space-y-4 sm:space-y-5"
          >
            {/* 1. Main Headline matching About and Contact page hero */}
            <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[45px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.18] drop-shadow-md">
              Landmark Homes.{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 50%, #ffe0b2 100%)',
                }}
              >
                Delivered with Precision.
              </span>
            </h1>

            {/* 2. Subtitle Paragraph */}
            <p className="text-xs sm:text-sm md:text-base text-white/95 font-medium leading-relaxed max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              Explore authentic photographs of our completed luxury residences, modular kitchens, structural elevations, and turnkey developments built across Chennai with 50+ years of trusted excellence.
            </p>

            {/* 3. Running Scores / Metrics Row matching Home and About heroes */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-4 pb-2 border-t border-white/20 max-w-xl">
              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight drop-shadow">
                  <RunningCounter target={500} suffix="+" />
                </span>
                <span className="block text-[11px] sm:text-xs uppercase tracking-wider text-white/80 font-semibold mt-0.5">
                  Projects Delivered
                </span>
              </div>

              <div className="hidden sm:block w-px h-8 bg-white/20" />

              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--primary)] tracking-tight drop-shadow">
                  <RunningCounter target={50} suffix="+" />
                </span>
                <span className="block text-[11px] sm:text-xs uppercase tracking-wider text-white/80 font-semibold mt-0.5">
                  Years of Trust
                </span>
              </div>

              <div className="hidden sm:block w-px h-8 bg-white/20" />

              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight drop-shadow">
                  <RunningCounter target={100} suffix="%" />
                </span>
                <span className="block text-[11px] sm:text-xs uppercase tracking-wider text-white/80 font-semibold mt-0.5">
                  Quality Execution
                </span>
              </div>
            </div>

            {/* 4. Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-start gap-3 sm:gap-4">
              <button
                onClick={scrollToGallery}
                className="py-3 px-6 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-light)] text-black font-extrabold text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_24px_rgba(255,140,0,0.5)] hover:scale-105 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Delivered Homes</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <Button
                onClick={onOpenTour}
                variant="glass"
                size="md"
              >
                Schedule Site Tour
              </Button>
            </div>

          </motion.div>

          {/* Right column empty to showcase architectural project view */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />
        </div>

      </div>

    </section>
  );
};

export default GalleryHero;
