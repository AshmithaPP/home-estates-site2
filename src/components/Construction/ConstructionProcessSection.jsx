"use client";

import React from 'react';
import { motion } from 'framer-motion';

/**
 * 5 Construction Process Steps requested by user:
 * 01 — Understand
 * 02 — Plan
 * 03 — Execute
 * 04 — Monitor
 * 05 — Complete
 */
const PROCESS_STEPS = [
  {
    stepNumber: "01",
    title: "01 — Understand",
    name: "Understand",
    description: "We begin by understanding your requirements, site, budget, timeline, and project goals.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    stepNumber: "02",
    title: "02 — Plan",
    name: "Plan",
    description: "Our team develops the project approach, coordinates design requirements, and establishes the execution plan.",
    image: "/assets/img/raman-residence-view/img39.jpg",
  },
  {
    stepNumber: "03",
    title: "03 — Execute",
    name: "Execute",
    description: "Construction is carried out with experienced teams, quality materials, and continuous site coordination.",
    image: "/construction-frames/build_frame_05.jpg",
  },
  {
    stepNumber: "04",
    title: "04 — Monitor",
    name: "Monitor",
    description: "Progress, quality, materials, timelines, and coordination are monitored throughout the project.",
    image: "/assets/img/shasthri-nagar-adyar/img64.jpg",
  },
  {
    stepNumber: "05",
    title: "05 — Complete",
    name: "Complete",
    description: "We bring every stage together to deliver the completed project with attention to the final details.",
    image: "/assets/img/suresh-residence-view/img17.jpg",
  },
];

export const ConstructionProcessSection = ({
  id = "process-section",
  title = "Our Construction Process",
  steps = PROCESS_STEPS,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
      style={{
        backgroundColor: 'var(--grey-deepest)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-family-base)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* ── Section Heading (Matching Reference UI Style) ──────────── */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
            {title}
          </h2>
        </div>

        {/* ── 5 Process Cards in Row (Exact Layout of Reference UI) ──── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-4.5">
          {steps.map((item, idx) => {
            return (
              <motion.div
                key={item.stepNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-[320px] sm:h-[350px] lg:h-[380px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 transition-all duration-300 hover:border-[var(--primary)] hover:shadow-xl hover:-translate-y-1"
                style={{
                  boxShadow: '0 8px 24px -6px rgba(0, 0, 0, 0.6)',
                }}
              >
                {/* Background Image with Smooth Zoom on Hover */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark Gradient Overlay for text contrast (From transparent top to deep dark bottom) */}
                <div 
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.15) 75%, transparent 100%)',
                  }}
                />

                {/* Top Step Number Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span 
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase backdrop-blur-md border border-white/15"
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      color: 'var(--primary)',
                    }}
                  >
                    Step {item.stepNumber}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10 flex flex-col justify-end text-left">
                  {/* Step Title (e.g., 01 — Understand) */}
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-[var(--primary)] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-[13px] text-neutral-300 font-light leading-relaxed mt-2 line-clamp-3 sm:line-clamp-4">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Primary Accent Hairline on Hover */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-[2.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: 'var(--primary)' }}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ConstructionProcessSection;
