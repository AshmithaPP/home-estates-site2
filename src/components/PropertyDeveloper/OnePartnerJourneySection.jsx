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
      className="relative w-full py-10 sm:py-12 lg:py-16 overflow-hidden border-y border-black/5"
      style={{
        backgroundColor: '#f3f2ef',
        fontFamily: 'var(--font-family-base)'
      }}
    >
      {/* ── Soft Ambient Glows ── */}
      <div
        className="absolute top-1/4 -left-48 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,140,0,0.08) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-40 -right-48 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,140,0,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-9">

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight leading-tight" style={{ color: 'var(--grey-deepest)' }}>
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
          className="mb-6 sm:mb-8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {STAGES.map((stage, idx) => (
              <div
                key={stage}
                className="relative rounded-2xl p-3.5 sm:p-4 border border-slate-200 bg-white flex flex-col items-center justify-center text-center group hover:border-[var(--primary)] transition-all duration-300 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-[var(--primary)]/15 border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary-dark)] font-mono text-xs font-bold mb-2">
                  0{idx + 1}
                </div>
                <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-[var(--primary-dark)] transition-colors">
                  {stage}
                </span>

                {idx < STAGES.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-20" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Two-Column Integrated Philosophy Card ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-9 shadow-sm">

          <div className="lg:col-span-7 space-y-3 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
              Coordinated Execution from Day One to Handover
            </h3>

            <p className="text-xs sm:text-sm md:text-[14.5px] text-slate-700 font-normal leading-relaxed">
              Instead of coordinating multiple independent teams, Ajay Homes brings key property capabilities together under one roof.
            </p>

            <p className="text-xs sm:text-sm md:text-[14.5px] text-slate-500 font-normal leading-relaxed">
              This integrated approach helps create better coordination between design, execution, development, and market requirements.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end">
            <div
              className="p-5 sm:p-6 rounded-2xl w-full"
              style={{
                backgroundColor: 'var(--grey-deepest)',
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
