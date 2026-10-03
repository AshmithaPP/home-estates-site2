"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

/**
 * Our Layout Development Process (6 Steps requested by user):
 * 01 — Property Assessment
 * 02 — Development Planning
 * 03 — Layout & Infrastructure
 * 04 — Execution
 * 05 — Market Preparation
 * 06 — Sales Support
 * 
 * Strict theme rules:
 * - Odd section -> Grey canvas (var(--grey-deepest))
 * - Zero hardcoded hex colors (only CSS variables from globals.css)
 * - Compact / short-height premium design
 * - Fully responsive across mobile, tablet, and desktop
 */
const PROCESS_STEPS = [
  {
    stepNumber: "01",
    title: "01 — Property Assessment",
    description: "We understand the land, location, documentation, development potential, and project objectives.",
    image: "/assets/img/img-010.jpeg",
    href: "/contact",
  },
  {
    stepNumber: "02",
    title: "02 — Development Planning",
    description: "We determine the appropriate development approach based on the property's characteristics and market requirements.",
    image: "/assets/img/img-047.jpeg",
    href: "/services/property-developer",
  },
  {
    stepNumber: "03",
    title: "03 — Layout & Infrastructure",
    description: "Planning and development coordination begins for roads, plots, infrastructure, and other project requirements.",
    image: "/construction-frames/build_frame_05.jpg",
    href: "/services/construction",
  },
  {
    stepNumber: "04",
    title: "04 — Execution",
    description: "The development is coordinated through the required teams, contractors, and vendors.",
    image: "/assets/img/shasthri-nagar-adyar/img64.jpg",
    href: "/services/project-management",
  },
  {
    stepNumber: "05",
    title: "05 — Market Preparation",
    description: "Once development progresses, the property can be positioned and prepared for the target market.",
    image: "/assets/img/suresh-residence-view/img17.jpg",
    href: "/gallery",
  },
  {
    stepNumber: "06",
    title: "06 — Sales Support",
    description: "Our real estate capabilities can support the selling process and connect the development with prospective buyers.",
    image: "/assets/img/img-001.jpeg",
    href: "/services/real-estate",
  },
];

export const LayoutProcessSection = ({
  id = "layout-process",
  title = "Our Layout Development Process",
  steps = PROCESS_STEPS,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
      style={{
        backgroundColor: 'var(--grey-deepest)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-family-base)',
      }}
    >
      {/* ── Soft Ambient Glow for depth ── */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[150px] pointer-events-none"
        style={{
          backgroundColor: 'var(--primary)',
          opacity: 0.05,
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        
        {/* ── Section Header (Compact, Centered) ── */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-9">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold text-white tracking-tight leading-snug">
            {title}
          </h2>
        </div>

        {/* ── 6 Process Cards Grid (Responsive: 1-col on mobile, 2 on sm, 3 on md, 6 on xl) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3.5 lg:gap-4">
          {steps.map((item, idx) => {
            return (
              <motion.div
                key={item.stepNumber}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <Link
                  href={item.href}
                  className="group relative h-[300px] sm:h-[320px] lg:h-[340px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 transition-all duration-300 hover:border-[var(--primary)] hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between block"
                  style={{
                    boxShadow: '0 8px 24px -6px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  {/* Background Architectural Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Dark Gradient Overlay for optimal legibility */}
                  <div 
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.72) 48%, rgba(0,0,0,0.2) 78%, transparent 100%)',
                    }}
                  />

                  {/* Top Step Number Badge */}
                  <div className="relative z-10 p-3.5 flex items-center justify-start">
                    <span 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase backdrop-blur-md border border-white/15 shadow-sm"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.55)',
                        color: 'var(--primary)',
                      }}
                    >
                      Step {item.stepNumber}
                    </span>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="relative z-10 p-4 sm:p-4.5 flex flex-col justify-end text-left">
                    {/* Step Title */}
                    <h3 
                      className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug group-hover:text-[var(--primary)] transition-colors duration-300"
                    >
                      {item.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-[11px] sm:text-xs text-neutral-300 font-light leading-relaxed mt-2 line-clamp-4">
                      {item.description}
                    </p>

                    {/* Hover Stage Link Indicator */}
                    <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Explore stage &rarr;</span>
                    </div>
                  </div>

                  {/* Bottom Primary Accent Hairline on Hover */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: 'var(--primary)' }}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LayoutProcessSection;
