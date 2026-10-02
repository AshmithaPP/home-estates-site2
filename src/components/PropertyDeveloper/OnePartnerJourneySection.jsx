"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

const STAGES = [
  'Land',
  'Planning',
  'Design',
  'Construction',
  'Interiors',
  'Sales',
];

export const OnePartnerJourneySection = () => {
  return (
    <section 
      id="one-partner-journey"
      className="relative w-full py-16 sm:py-20 lg:py-28 overflow-hidden text-white"
      style={{ 
        backgroundColor: 'var(--grey-deepest)',
        fontFamily: 'var(--font-family-base)' 
      }}
    >
      {/* ── Soft Ambient Glows ── */}
      <div 
        className="absolute top-1/3 -left-36 w-96 h-96 rounded-full blur-[140px] pointer-events-none"
        style={{ backgroundColor: 'var(--primary)', opacity: 0.08 }}
      />
      <div 
        className="absolute bottom-10 -right-36 w-96 h-96 rounded-full blur-[140px] pointer-events-none"
        style={{ backgroundColor: 'var(--primary)', opacity: 0.08 }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span 
              className="w-2 h-2 rounded-full" 
              style={{ backgroundColor: 'var(--primary)' }}
            />
            <span 
              className="text-xs font-bold uppercase tracking-wider text-slate-400"
            >
              Unified Capabilities
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            One Partner Across the <br className="hidden sm:inline" />
            <span style={{ color: 'var(--primary)' }}>Property Journey</span>
          </h2>
        </div>

        {/* ── 6 Interconnected Stages Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {STAGES.map((stage, idx) => (
              <div 
                key={stage}
                className="relative rounded-2xl p-4 sm:p-5 border border-white/10 bg-white/[0.03] backdrop-blur-sm flex flex-col items-center justify-center text-center group hover:border-[var(--primary)] transition-all duration-300 shadow-md"
              >
                <div className="w-8 h-8 rounded-full bg-[var(--primary)]/15 border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)] font-mono text-xs font-bold mb-2">
                  0{idx + 1}
                </div>
                <span className="text-sm sm:text-base font-bold text-white group-hover:text-[var(--primary)] transition-colors">
                  {stage}
                </span>

                {idx < STAGES.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 z-20" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Two-Column Integrated Philosophy Card ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
          
          <div className="lg:col-span-7 space-y-4 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
              Coordinated Execution from Day One to Handover
            </h3>

            <p className="text-xs sm:text-sm md:text-[14.5px] text-slate-300 font-normal leading-relaxed">
              Instead of coordinating multiple independent teams, Ajay Homes brings key property capabilities together under one roof.
            </p>

            <p className="text-xs sm:text-sm md:text-[14.5px] text-slate-400 font-normal leading-relaxed">
              This integrated approach helps create better coordination between design, execution, development, and market requirements.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end">
            <div 
              className="p-5 sm:p-6 rounded-2xl border border-[var(--primary)]/30 w-full"
              style={{
                backgroundColor: 'rgba(255, 140, 0, 0.08)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--primary)]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
                  The Ajay Homes Promise
                </span>
              </div>
              <p className="text-sm sm:text-base font-bold text-white leading-relaxed">
                One vision. One experienced team. One complete journey.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OnePartnerJourneySection;
