"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/UI/Button';

const DEFAULT_STATS = [
  { value: '50+ Years', label: 'of Industry Experience' },
  { value: '500+', label: 'Projects' },
  { value: 'End-to-End', label: 'Property Expertise' },
];

/**
 * Reusable PremiumProjectCTASection (Compact, Ultra-Modern & Sleek UI)
 * - Single-line stats strip: "50+ Years of Industry Experience | 500+ Projects | End-to-End Property Expertise"
 * - Short height horizontal layout
 * - Left: Headline, description, and one-line stats
 * - Right: Action CTA button
 * - No brand tagline strip (removed as requested)
 * - Strict globals.css variable colors
 */
export const PremiumProjectCTASection = ({
  id = 'premium-project-cta',
  title = 'Have Land in Chennai?',
  description = "Let's explore what your property can become.",
  stats = DEFAULT_STATS,
  ctaText = 'Talk to Ajay Homes',
  onCtaClick,
  className = '',
}) => {
  return (
    <section
      id={id}
      className={`relative w-full py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
      style={{
        backgroundColor: 'var(--grey-deepest)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-family-base)',
      }}
    >
      <div className="relative max-w-6xl mx-auto">
        {/* ── Modern Floating Luxury Container Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-9 border border-white/[0.08] overflow-hidden shadow-2xl backdrop-blur-xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8"
          style={{
            background: 'linear-gradient(135deg, rgba(38, 38, 38, 0.8) 0%, rgba(22, 22, 22, 0.95) 100%)',
            boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Subtle Ambient Radial Glow in Corner */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
            style={{
              backgroundColor: 'var(--primary)',
              opacity: 0.12,
            }}
          />

          {/* ── Left Column: Headline, Description & One-Line Stats Strip ── */}
          <div className="relative z-10 flex-1 space-y-2 text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
              {title}
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-xl">
              {description}
            </p>

            {/* ── Stats Strip in ONE LINE ── */}
            {stats && stats.length > 0 && (
              <div className="pt-2 flex flex-wrap items-center gap-x-2.5 sm:gap-x-3.5 gap-y-1 text-xs sm:text-[13px] text-neutral-300">
                {stats.map((item, idx) => {
                  const val = item.value || item.highlight;
                  const lbl = item.label || item.text;
                  const isLast = idx === stats.length - 1;

                  return (
                    <React.Fragment key={idx}>
                      <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                        <span 
                          className="font-bold tracking-tight"
                          style={{ color: 'var(--primary)' }}
                        >
                          {val}
                        </span>
                        <span className="text-neutral-300 font-normal">
                          {lbl}
                        </span>
                      </span>
                      {!isLast && (
                        <span className="text-neutral-600 hidden sm:inline select-none">
                          |
                        </span>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── Right Column: Single Action CTA Button ── */}
          <div className="relative z-10 shrink-0 flex items-center justify-start lg:justify-end">
            <Button 
              onClick={onCtaClick} 
              variant="primary" 
              size="md"
              icon={ArrowRight}
              showIcon={true}
            >
              {ctaText}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumProjectCTASection;
