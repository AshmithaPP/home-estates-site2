"use client";

import React from 'react';
import { motion } from 'framer-motion';

const PROCESS_STEPS = [
  {
    stepNumber: "01",
    title: "01 — Understand",
    name: "Understand",
    description: "We understand your project scope, objectives, budget, timeline, and expectations.",
    image: "/assets/img/img-001.jpeg",
  },
  {
    stepNumber: "02",
    title: "02 — Plan",
    name: "Plan",
    description: "We establish the project roadmap, execution requirements, responsibilities, and timelines.",
    image: "/assets/img/raman-residence-view/img39.jpg",
  },
  {
    stepNumber: "03",
    title: "03 — Coordinate",
    name: "Coordinate",
    description: "Our team coordinates architects, consultants, contractors, vendors, and other stakeholders.",
    image: "/assets/img/img-004.jpeg",
  },
  {
    stepNumber: "04",
    title: "04 — Monitor",
    name: "Monitor",
    description: "We track site progress, quality, materials, costs, and timelines throughout execution.",
    image: "/assets/img/shasthri-nagar-adyar/img64.jpg",
  },
  {
    stepNumber: "05",
    title: "05 — Resolve",
    name: "Resolve",
    description: "Issues and coordination challenges are identified early and addressed with the relevant teams.",
    image: "/assets/img/img-008.jpeg",
  },
  {
    stepNumber: "06",
    title: "06 — Deliver",
    name: "Deliver",
    description: "We coordinate the final stages through completion and handover.",
    image: "/assets/img/img-009.jpeg",
  },
];

export const ProjectManagementProcessSection = ({
  id = "project-management-process",
  title = "Our Project Management Process",
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
          <div className="inline-flex items-center gap-2 mb-3">
            <span 
              className="w-2 h-2 rounded-full" 
              style={{ backgroundColor: 'var(--primary)' }}
            />
            <span 
              className="text-xs font-bold uppercase tracking-wider text-slate-400"
            >
              Structured Execution Methodology
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
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
                className="group relative h-[320px] sm:h-[360px] lg:h-[400px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 transition-all duration-300 hover:border-[var(--primary)] hover:shadow-xl hover:-translate-y-1"
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

                {/* Dark Gradient Overlay for text contrast */}
                <div 
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.2) 75%, transparent 100%)',
                  }}
                />

                {/* Top Step Number Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span 
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase backdrop-blur-md border border-white/15"
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      color: 'var(--primary)',
                    }}
                  >
                    Step {item.stepNumber}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10 flex flex-col justify-end text-left">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-[var(--primary)] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-neutral-300 font-light leading-relaxed mt-2 line-clamp-4">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Primary Accent Hairline on Hover */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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

export default ProjectManagementProcessSection;
