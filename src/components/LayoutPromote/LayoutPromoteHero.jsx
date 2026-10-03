"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../UI/Button';

export const LayoutPromoteHero = ({ onOpenApply }) => {
  // Raman Residence View image requested by user
  const bgImage = '/assets/img/raman-residence-view/img39.jpg';

  const handleDiscussLand = () => {
    if (onOpenApply) {
      onOpenApply();
    } else {
      const el = document.getElementById('contact-form') || document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="layout-promote-hero"
      className="relative w-full h-[100dvh] min-h-[540px] sm:min-h-[620px] lg:min-h-[700px] flex items-center overflow-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      {/* ── Background Architectural Image (img39.jpg) with gentle contrast overlays ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={bgImage}
          alt="Layout Promotion Services in Chennai — Ajay Homes"
          className="w-full h-full object-cover object-center"
        />

        {/* Cinematic contrast gradients ensuring crisp typography across devices */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none" />
      </div>

      {/* ── Main Hero Layout Container — Flush Left End matching Home Page ── */}
      <div className="relative z-10 max-w-[1800px] mx-auto w-full px-4 sm:px-8 md:px-12 pt-20 sm:pt-24 md:pt-28 pb-8 flex-1 flex flex-col justify-center">
        
        {/* Left End Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-center my-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 xl:col-span-7 text-left space-y-4 sm:space-y-5"
          >
            {/* 1. Category Tag / Eyebrow Header */}
            <div className="flex items-center gap-2">
              <span 
                className="w-2 h-2 rounded-full animate-pulse" 
                style={{ backgroundColor: 'var(--primary)' }}
              />
              <span 
                className="text-xs sm:text-sm font-bold uppercase tracking-wider"
                style={{ color: 'var(--primary)' }}
              >
                Layout Promotion Services in Chennai
              </span>
            </div>

            {/* 2. Main Heading — Exact Site Typography, Uppercase & Leading */}
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[1.12] drop-shadow-md text-left select-none">
              <span className="block text-white">
                Turning Land Into
              </span>
              <span 
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 60%, var(--text-primary) 100%)',
                }}
              >
                Well-Planned Opportunities.
              </span>
            </h1>

            {/* 3. Description Paragraphs — Exact Content requested by user */}
            <div className="space-y-2.5 max-w-xs sm:max-w-xl md:max-w-2xl text-left select-none">
              <p className="text-[11px] sm:text-sm md:text-[15px] text-white/90 font-normal leading-relaxed drop-shadow">
                Ajay Homes{' '}
                helps{' '}
                landowners and investors{' '}
                transform land into professionally planned and{' '}
                market-ready layouts.
              </p>
              <p className="text-[11px] sm:text-xs md:text-sm text-white/80 font-normal leading-relaxed drop-shadow">
                From land assessment and planning to{' '}
                development,{' '}
                infrastructure coordination, and sales support, we manage the process with a focus on quality, compliance, usability, and long-term property value.
              </p>
            </div>

            {/* 4. Action Buttons */}
            <div className="pt-2 sm:pt-3 flex flex-wrap items-center justify-start gap-4">
              <Button
                onClick={handleDiscussLand}
                variant="primary"
                size="md"
                icon={ArrowRight}
                showIcon={true}
              >
                Discuss Your Land
              </Button>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm transition-all cursor-pointer"
              >
                View 500+ Projects &rarr;
              </Link>
            </div>
          </motion.div>

          {/* Right column empty matching Home & About Page layouts */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />

        </div>

      </div>

    </section>
  );
};

export default LayoutPromoteHero;
