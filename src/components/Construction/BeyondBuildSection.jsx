"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const BeyondBuildSection = ({ onOpenApply }) => {
  // Image requested by user: ankan-resideance-view/img50.jpg
  const imageSrc = '/images/residence-images/ankan-resideance-view/img50.jpg';

  const handleAction = () => {
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
      id="beyond-the-build"
      className="relative w-full bg-white text-slate-900 py-16 sm:py-20 lg:py-28 overflow-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      {/* ── Right-Side Dark Accent Band (Replicating Reference UI Split Background) ── */}
      <div 
        className="hidden md:block absolute right-0 top-0 bottom-0 w-[30%] lg:w-[35%] xl:w-[38%] pointer-events-none"
        style={{ backgroundColor: 'var(--grey-deepest)' }}
      />

      {/* ── Main Layout Container ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          
          {/* ── Left Column: Editorial Content (Exact match to reference UI) ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-6 text-left space-y-4 sm:space-y-5"
          >
            {/* 1. Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-950 tracking-tight leading-[1.2]">
              Construction That Goes <br className="hidden sm:inline" />
              Beyond the Build
            </h2>

            {/* 2. Red / Primary Accent Indicator Bar (Exact Replica of Reference UI) */}
            <div 
              className="w-10 sm:w-12 h-1 rounded-full my-3 sm:my-4"
              style={{ backgroundColor: 'var(--primary)' }}
            />

            {/* 3. Narrative Copy Paragraphs (Exact content requested by user) */}
            <div className="space-y-3.5 text-xs sm:text-sm md:text-[14.5px] text-slate-600 font-normal leading-relaxed">
              <p>
                A premium project requires more than construction. It requires the right planning, materials, people, supervision, and execution.
              </p>
              <p>
                At Ajay Homes, we manage every stage of the construction journey—from initial planning and site preparation to structural work, finishing, and final handover.
              </p>
              <p>
                Our approach combines architectural quality, technical expertise, premium materials, and disciplined project management to deliver spaces built for long-term value.
              </p>
            </div>

            {/* 4. Action CTA Button (Matching dark rectangular button with arrow from reference UI) */}
            <div className="pt-2 sm:pt-4">
              <button
                onClick={handleAction}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-slate-950 text-white font-bold text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md group cursor-pointer"
                style={{
                  '--btn-hover': 'var(--primary)'
                }}
              >
                <span>Discuss Your Project</span>
                <ArrowRight 
                  className="w-4 h-4 text-[var(--primary)] group-hover:translate-x-1 transition-transform" 
                />
              </button>
            </div>
          </motion.div>

          {/* ── Right Column: Overlapping Architectural Image & Accent Tile ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-6 relative mt-4 md:mt-0"
          >
            {/* The Image Card overlapping both white and dark canvases */}
            <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900">
              <img
                src={imageSrc}
                alt="Ankan Residence Construction Quality — Ajay Homes"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />

              {/* Gentle ambient vignette for premium depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BeyondBuildSection;
