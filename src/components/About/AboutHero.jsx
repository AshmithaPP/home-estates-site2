"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
      className="relative w-full h-screen min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      {/* ── Background Image (img188.jpg) with gentle contrast layer matching home page ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={bgImage}
          alt="Besant Nagar Architectural Residence by Ajay Homes"
          className="w-full h-full object-cover object-center"
        />

        {/* Home page matching soft gradients: keeps image authentic & vivid while giving crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent pointer-events-none" />
      </div>

      {/* ── Main Layout Container — Flush Left End matching Home Page ── */}
      <div className="relative z-10 max-w-[1800px] mx-auto w-full px-4 sm:px-12 pt-20 sm:pt-28 pb-6 flex-1 flex flex-col justify-center">
        
        {/* Left End Content Grid matching Home Page */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-center my-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-6 text-left space-y-4 sm:space-y-5"
          >
            
            {/* 1. Main Heading — Exact Home Page Font Size, Uppercase & Leading */}
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[1.12] drop-shadow-md text-left select-none">
              <span className="block text-white">
                Built on Experience,
              </span>
              <span 
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 60%, var(--text-primary) 100%)',
                }}
              >
                Defined by Quality.
              </span>
            </h1>

            {/* 2. Description Paragraph — Exact Home Page Typography & Density */}
            <p className="text-[11px] sm:text-sm md:text-[15px] text-white/90 font-normal max-w-xs sm:max-w-lg md:max-w-xl leading-relaxed drop-shadow select-none text-left">
              With{' '}
              <Link href="/services/construction" className="text-white font-semibold hover:text-[var(--primary)] transition-colors">
                60+ years of industry experience
              </Link>{' '}
              and{' '}
              <Link href="/gallery" className="text-white font-semibold hover:text-[var(--primary)] transition-colors">
                500+ projects
              </Link>
              , Ajay Homes brings together{' '}
              <Link href="/services/construction" className="text-white font-medium hover:text-[var(--primary)] transition-colors">construction</Link>,{' '}
              <Link href="/services/property-developer" className="text-white font-medium hover:text-[var(--primary)] transition-colors">property development</Link>,{' '}
              <Link href="/services/project-management" className="text-white font-medium hover:text-[var(--primary)] transition-colors">project management</Link>,{' '}
              <Link href="/services/interior-design" className="text-white font-medium hover:text-[var(--primary)] transition-colors">interiors</Link>, and{' '}
              <Link href="/services/real-estate" className="text-white font-medium hover:text-[var(--primary)] transition-colors">real estate</Link> under one roof.
            </p>

            {/* 3. Running Scores matching Home Page: No cards, clean horizontal numbers */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-4 pb-2 border-t border-white/20 max-w-xl">
              {/* Score 1 */}
              <Link href="/services/construction" className="group block cursor-pointer text-left">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight drop-shadow group-hover:text-[var(--primary)] transition-colors">
                  <RunningCounter target={60} suffix="+" />
                </span>
                <span className="block text-[11px] sm:text-xs uppercase tracking-wider text-white/80 group-hover:text-white font-semibold mt-0.5 transition-colors">
                  Years Experience
                </span>
              </Link>

              <div className="hidden sm:block w-px h-8 bg-white/20" />

              {/* Score 2 */}
              <Link href="/gallery" className="group block cursor-pointer text-left">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--primary)] tracking-tight drop-shadow group-hover:text-white transition-colors">
                  <RunningCounter target={500} suffix="+" />
                </span>
                <span className="block text-[11px] sm:text-xs uppercase tracking-wider text-white/80 group-hover:text-white font-semibold mt-0.5 transition-colors">
                  Projects Built
                </span>
              </Link>

              <div className="hidden sm:block w-px h-8 bg-white/20" />

              {/* Score 3 */}
              <Link href="/services/property-developer" className="group block cursor-pointer text-left">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight drop-shadow group-hover:text-[var(--primary)] transition-colors">
                  <RunningCounter target={1} prefix="₹" suffix=" Cr+" />
                </span>
                <span className="block text-[11px] sm:text-xs uppercase tracking-wider text-white/80 group-hover:text-white font-semibold mt-0.5 transition-colors">
                  Developments
                </span>
              </Link>
            </div>

            {/* 4. Reusable Button matching home page */}
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

          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />
        </div>

      </div>
    </section>
  );
};

export default AboutHero;
