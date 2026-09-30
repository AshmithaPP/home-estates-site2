"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, CheckCircle2 } from 'lucide-react';

export const AboutStorySection = () => {
  const coreValues = [
    'Quality Execution',
    'Complete Transparency',
    'Precision Engineering',
    'Lasting Value',
  ];

  return (
    <section 
      id="about-story"
      className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-white/10 text-[#f0ede8]"
      style={{ 
        background: 'linear-gradient(160deg, #181818 0%, #242424 50%, #1e1e1e 100%)',
        fontFamily: 'Montserrat, sans-serif' 
      }}
    >
      {/* ── Ambient Soft Glow ───────────────────────────────────────── */}
      <div 
        className="absolute top-1/2 -right-32 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #ff8c00 0%, transparent 70%)' }}
      />

      <div className="max-w-3xl lg:max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 text-left">
        
        {/* ── Section Heading with Vertical Accent Bar (Exact Reference Replica) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3.5 sm:gap-4 mb-4"
        >
          {/* Vertical Brand Accent Bar matching reference */}
          <span className="w-1.5 h-8 sm:h-9 lg:h-10 bg-[#ff8c00] rounded-full inline-block shrink-0 shadow-[0_0_12px_rgba(255,140,0,0.5)]" />
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            50+ Years. 500+ Projects.
          </h2>
        </motion.div>

        {/* ── Subtitle / Vision Tagline ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 pl-5 sm:pl-5.5"
        >
          <p className="text-base sm:text-lg lg:text-xl font-bold text-[#ff8c00] tracking-wide italic">
            From Vision to Completion.
          </p>
        </motion.div>

        {/* ── Narrative Content Paragraphs ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-sm sm:text-base lg:text-[17px] leading-relaxed text-[#f0ede8]/90 font-normal pl-5 sm:pl-5.5"
        >
          {/* Paragraph 1 */}
          <p>
            We work on projects ranging from premium residences to{' '}
            <span className="text-white font-bold">₹1 Cr+ developments</span>, combining thoughtful design, quality execution, and experienced management.
          </p>

          {/* Paragraph 2 */}
          <p className="text-[#d1d5db]">
            Decades of experience have shaped how we approach every project &mdash; with a focus on{' '}
            <span className="text-white font-semibold">quality</span>,{' '}
            <span className="text-white font-semibold">transparency</span>,{' '}
            <span className="text-white font-semibold">precision</span>, and{' '}
            <span className="text-white font-semibold">lasting value</span>.
          </p>

          {/* Paragraph 3 / Highlight Statement */}
          <div className="pt-3 pb-2 border-l-2 border-[#ff8c00]/60 pl-4 sm:pl-5 my-6 bg-white/[0.02] rounded-r-xl py-3">
            <p className="text-white font-medium text-base sm:text-lg lg:text-[19px] leading-snug">
              We believe great projects are not simply built. They are carefully planned, managed, and delivered.
            </p>
          </div>
        </motion.div>

        {/* ── Key Focus Pillars ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 pt-8 border-t border-white/10 pl-5 sm:pl-5.5 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          {coreValues.map((val) => (
            <div
              key={val}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-[#f0ede8] hover:border-[#ff8c00]/40 transition-colors"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#ff8c00] shrink-0" />
              <span>{val}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutStorySection;
