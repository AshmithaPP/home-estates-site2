"use client";

import React from 'react';
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
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-950 tracking-tight leading-tight">
              From Land Preparation to Development
            </h2>

            {/* Content Paragraphs */}
            <div className="space-y-3 text-slate-600 text-xs sm:text-sm md:text-[14.5px] leading-relaxed">
              <p>
                Our involvement goes beyond planning the layout. We coordinate the journey from initial land development to a completed, market-ready property.
              </p>
              <p>
                With experienced teams handling planning, development, infrastructure, and coordination, we help transform land into a valuable opportunity.
              </p>
            </div>

            {/* Concluding Punchline Box */}
            <div className="pt-1">
              <div className="p-3.5 sm:p-4 rounded-xl border border-slate-200/90 bg-slate-50/80 shadow-xs">
                <p 
                  className="text-xs sm:text-sm font-bold leading-snug tracking-wide"
                  style={{ color: 'var(--primary-dark)' }}
                >
                  From land to a development ready for its next chapter.
                </p>
              </div>
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
            <div className="group relative w-full aspect-[4/3] sm:aspect-[16/11] max-h-[260px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
              <img
                src={imageSrc}
                alt="From Land Preparation to Development — Ajay Homes"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LandPreparationSection;
