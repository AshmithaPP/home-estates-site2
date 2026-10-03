"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PROCESS_STEPS = [
  {
    stepNumber: "01",
    title: "01 — Evaluate",
    description: "We understand the land, location, project objectives, and development opportunity.",
    image: "/images/residence-images/ankan-resideance-view/img26.jpg",
    href: "/contact",
  },
  {
    stepNumber: "02",
    title: "02 — Plan",
    description: "We establish the development strategy, project scope, design direction, and execution approach.",
    image: "/images/residence-images/raman-residence/img106.jpg",
    href: "/services/layout-promoters",
  },
  {
    stepNumber: "03",
    title: "03 — Develop",
    description: "Planning, approvals, coordination, construction, and infrastructure development move forward based on the project requirements.",
    image: "/images/residence-images/suresh-residence-view/img17.jpg",
    href: "/services/construction",
  },
  {
    stepNumber: "04",
    title: "04 — Manage",
    description: "Our project management team coordinates people, materials, contractors, timelines, and quality.",
    image: "/images/residence-images/natraj-residence/img67.jpg",
    href: "/services/project-management",
  },
  {
    stepNumber: "05",
    title: "05 — Complete",
    description: "The property moves through finishing, interiors, and final preparation.",
    image: "/images/residence-images/besantnagar-residence-view/img181.jpg",
    href: "/gallery",
  },
  {
    stepNumber: "06",
    title: "06 — Position",
    description: "Where required, our real estate team can support the property's market positioning and sales process.",
    image: "/images/residence-images/besantnagar-residence-view/img19.jpg",
    href: "/services/real-estate",
  },
];

export const PropertyDevelopmentProcessSection = ({
  id = "property-development-process",
  title = "Our Development Process",
  steps = PROCESS_STEPS,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
      style={{
        backgroundColor: 'var(--grey-deepest)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-family-base)',
      }}
    >
      <div className="max-w-[1800px] mx-auto">
        
        {/* ── Section Heading ──────────── */}
        <div className="text-center mb-10 sm:mb-14">

          <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold text-white tracking-tight leading-snug">
            {title}
          </h2>
        </div>

        {/* ── 6 Process Cards ──── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-5">
          {steps.map((item, idx) => {
            return (
              <motion.div
                key={item.stepNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <Link
                  href={item.href}
                  className="group relative h-[320px] sm:h-[360px] lg:h-[400px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 transition-all duration-300 hover:border-[var(--primary)] hover:shadow-xl hover:-translate-y-1 block"
                  style={{
                    boxShadow: '0 8px 24px -6px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  {/* Background Image with subtle zoom on hover */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Dark Gradient Overlay for optimal legibility */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, rgba(14, 14, 14, 0.95) 0%, rgba(14, 14, 14, 0.70) 50%, rgba(14, 14, 14, 0.40) 100%)',
                    }}
                  />

                  {/* Card Content (Top Step Badge + Bottom Text) */}
                  <div className="relative z-10 h-full p-5 sm:p-6 flex flex-col justify-between text-left">
                    
                    {/* Top Step Number Badge */}
                    <div className="flex items-center justify-between">
                      <span 
                        className="px-2.5 py-1 rounded-md text-xs font-black tracking-widest uppercase border backdrop-blur-md"
                        style={{
                          backgroundColor: 'rgba(255, 140, 0, 0.15)',
                          borderColor: 'var(--primary)',
                          color: 'var(--primary)',
                        }}
                      >
                        {item.stepNumber}
                      </span>
                    </div>

                    {/* Bottom Text Block */}
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[var(--primary)] transition-colors duration-200">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-[13px] text-slate-300 font-normal leading-relaxed">
                        {item.description}
                      </p>

                      {/* Hover Stage Link Indicator */}
                      <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Explore stage &rarr;</span>
                      </div>
                    </div>

                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PropertyDevelopmentProcessSection;
