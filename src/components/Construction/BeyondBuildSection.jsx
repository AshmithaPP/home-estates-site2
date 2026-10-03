"use client";

import React from 'react';
import Link from 'next/link';
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
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold text-slate-950 tracking-tight leading-snug">
              Construction That Goes <br className="hidden sm:inline" />
              Beyond the Build
            </h2>

            {/* 3. Narrative Copy Paragraphs with Contextual Redirections */}
            <div className="space-y-3.5 text-xs sm:text-sm md:text-[14.5px] text-slate-600 font-normal leading-relaxed">
              <p>
                A premium project requires more than construction. It requires the right planning, materials, people, supervision, and execution.
              </p>
              <p>
                At{' '}
                <Link href="/about-us" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline decoration-slate-300 underline-offset-2 transition-colors">
                  Ajay Homes
                </Link>
                , we manage every stage of the construction journey—from initial{' '}
                <Link href="/services/layout-promoters" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline decoration-slate-300 underline-offset-2 transition-colors">
                  site preparation
                </Link>{' '}
                to structural work,{' '}
                <Link href="/services/interior-design" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline decoration-slate-300 underline-offset-2 transition-colors">
                  interior finishing
                </Link>
                , and final handover.
              </p>
              <p>
                Our approach combines architectural quality, technical expertise, premium materials, and disciplined{' '}
                <Link href="/services/project-management" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline decoration-slate-300 underline-offset-2 transition-colors">
                  project management
                </Link>{' '}
                to deliver spaces built for long-term value.
              </p>
            </div>

            {/* 4. Action CTA Button (Matching dark rectangular button with arrow from reference UI) */}
            <div className="pt-2 sm:pt-4">
              <button suppressHydrationWarning
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
            {/* The Image Card overlapping both white and dark canvases, linking to Gallery */}
            <Link
              href="/gallery"
              className="block relative w-full aspect-[16/11] sm:aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900 group cursor-pointer focus:outline-none"
              aria-label="View Ankan Residence and 500+ projects in our gallery"
            >
              <img
                src={imageSrc}
                alt="Ankan Residence Construction Quality — Ajay Homes"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gentle ambient vignette for premium depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-black/75 text-white/90 backdrop-blur-md border border-white/20 group-hover:bg-[var(--primary)] group-hover:text-black transition-colors">
                  <span>Explore 500+ Completed Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BeyondBuildSection;
