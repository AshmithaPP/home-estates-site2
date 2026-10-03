"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/UI/Button';

export default function InteriorDesignHero({ onOpenApply }) {
  // Bg image specifically requested by user: suresh-residence-view/img27.jpg
  const bgImage = '/images/residence-images/suresh-residence-view/img27.jpg';

  const handleStartProject = () => {
    if (onOpenApply) {
      onOpenApply();
    } else {
      const el = document.getElementById('interior-faq-form') || document.getElementById('contact-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="interior-hero"
      className="relative w-full h-[100dvh] min-h-[540px] sm:min-h-[620px] lg:min-h-[700px] flex items-center overflow-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      {/* ── Background Architectural Interior Image with gentle contrast overlays ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={bgImage}
          alt="Premium Interior Designing Services in Chennai — Ajay Homes"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Soft contrast gradients matching Home, About & Construction heroes: keeps image vivid while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none" />
      </div>

      {/* ── Main Hero Layout Container — Flush Left End matching Home Page ── */}
      <div className="relative z-10 max-w-[1800px] mx-auto w-full px-4 sm:px-8 md:px-12 pt-20 sm:pt-24 md:pt-28 pb-8 flex-1 flex flex-col justify-center">

        {/* Left End Content Grid matching other pages */}
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
                Premium Interior Designing Services in Chennai
              </span>
            </div>

            {/* 2. Main Heading */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold uppercase tracking-tight leading-[1.12] drop-shadow-md text-left select-none">
              <span className="block text-white">
                Spaces Designed
              </span>
              <span
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 60%, var(--text-primary) 100%)',
                }}
              >
                With Purpose.
              </span>
            </h1>

            {/* 3. Description Paragraphs — Exact Content requested by user */}
            <div className="space-y-2.5 max-w-xs sm:max-w-xl md:max-w-2xl text-left select-none">
              <p className="text-[11px] sm:text-sm md:text-[15px] text-white/90 font-normal leading-relaxed drop-shadow">
                At Ajay Homes, we create interiors that bring together design, functionality,{' '}
                material quality, and refined execution.
              </p>
              <p className="text-[11px] sm:text-xs md:text-sm text-white/80 font-normal leading-relaxed drop-shadow">
                From luxury homes and villas to{' '}
                commercial spaces, we manage interior projects from concept and space planning to materials, finishes,{' '}
                execution, and final handover.
              </p>
            </div>

            {/* 4. Action Button (Reusable Pill Button using dynamic theme variables) */}
            <div className="pt-2 sm:pt-3 flex items-center justify-start">
              <Button
                onClick={handleStartProject}
                variant="primary"
                size="md"
                icon={ArrowRight}
                showIcon={true}
              >
                Start Your Interior Project
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
