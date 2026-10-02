"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function WhereDesignMeetsDetailSection() {
  return (
    <section
      id="design-meets-detail"
      className="relative w-full bg-white text-slate-900 py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      {/* ── Right-Side Dark Accent Band ── */}
      <div 
        className="hidden md:block absolute right-0 top-0 bottom-0 w-[30%] lg:w-[35%] xl:w-[38%] pointer-events-none"
        style={{ backgroundColor: 'var(--grey-deepest)' }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Typography & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-6 text-left space-y-4 sm:space-y-5"
          >
            {/* Main Heading - One line */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-950 tracking-tight leading-[1.2]">
              Where Design Meets Detail
            </h2>

            {/* Core Philosophy Statement */}
            <p className="text-base sm:text-lg md:text-xl font-bold leading-snug" style={{ color: 'var(--primary)' }}>
              A premium interior is not just about how a space looks. It is about how it feels, functions, and performs every day.
            </p>

            {/* Narrative text - Exact user content */}
            <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 font-normal leading-relaxed">
              Our approach considers your lifestyle, requirements, space, materials, finishes, lighting, functionality, and overall design direction to create interiors that are both visually refined and practical.
            </p>
          </motion.div>

          {/* Right Column: Clean Architectural Image Matching BeyondBuildSection */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-6 relative mt-4 md:mt-0"
          >
            <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900">
              <img
                src="/images/residence-images/natraj-residence/img67.jpg"
                alt="Where Design Meets Detail — Ajay Homes"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
