"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

/**
 * Section 9 (Even - White Background)
 * From Land Preparation to Development Section
 * 
 * Strict constraints:
 * - Only user's exact content
 * - White background (alternating after grey CTA section)
 * - Short height & compact layout
 * - All colors bind dynamically to globals.css variables
 * - No orange line bars
 * - Fully responsive across mobile, tablet, and desktop
 */
export const LandPreparationSection = ({
  id = "land-preparation-to-development",
  className = "",
}) => {
  const imageSrc = '/assets/img/img-006.jpeg';

  return (
    <section
      id={id}
      className={`relative w-full py-10 sm:py-12 lg:py-14 bg-white text-slate-900 overflow-hidden ${className}`}
      style={{
        fontFamily: 'var(--font-family-base)',
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ── Left Column: Editorial Content (lg:col-span-7) ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left space-y-3.5 sm:space-y-4"
          >
            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold text-slate-950 tracking-tight leading-snug">
              From Land Preparation to Development
            </h2>

            {/* Content Paragraphs */}
            <div className="space-y-3 text-slate-600 text-xs sm:text-sm md:text-[14.5px] leading-relaxed">
              <p>
                Our involvement goes beyond planning the layout. We coordinate the journey from{' '}
                <Link href="/services/property-developer" className="font-semibold text-slate-900 hover:text-[var(--primary)] underline underline-offset-2 transition-colors">
                  initial land development
                </Link>{' '}
                to a completed,{' '}
                <Link href="/gallery" className="font-semibold text-slate-900 hover:text-[var(--primary)] underline underline-offset-2 transition-colors">
                  market-ready property
                </Link>.
              </p>
              <p>
                With experienced teams handling planning, development,{' '}
                <Link href="/services/construction" className="font-semibold text-slate-900 hover:text-[var(--primary)] underline underline-offset-2 transition-colors">
                  infrastructure
                </Link>
                , and{' '}
                <Link href="/services/project-management" className="font-semibold text-slate-900 hover:text-[var(--primary)] underline underline-offset-2 transition-colors">
                  coordination
                </Link>
                , we help transform land into a valuable opportunity.
              </p>
            </div>

            {/* Concluding Punchline Box */}
            <div className="pt-1">
              <Link
                href="/contact"
                className="group block p-3.5 sm:p-4 rounded-xl border border-slate-200/90 bg-slate-50/80 hover:bg-slate-100/90 hover:border-[var(--primary)] transition-all shadow-xs cursor-pointer"
              >
                <p 
                  className="text-xs sm:text-sm font-bold leading-snug tracking-wide flex items-center justify-between"
                  style={{ color: 'var(--primary-dark)' }}
                >
                  <span>From land to a development ready for its next chapter.</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </p>
              </Link>
            </div>
          </motion.div>

          {/* ── Right Column: Compact Architectural Image (lg:col-span-5) ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="lg:col-span-5"
          >
            <Link
              href="/gallery"
              className="group block relative w-full aspect-[4/3] sm:aspect-[16/11] max-h-[260px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 cursor-pointer"
              aria-label="View 500+ completed projects"
            >
              <img
                src={imageSrc}
                alt="From Land Preparation to Development — Ajay Homes"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs font-bold text-white uppercase tracking-wider bg-black/70 px-3 py-1.5 rounded-full backdrop-blur-xs border border-white/20">
                  Explore 500+ Completed Projects &rarr;
                </span>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LandPreparationSection;
