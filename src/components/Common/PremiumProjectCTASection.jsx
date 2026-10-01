"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/UI/Button';

const DEFAULT_STATS = [
  { value: '₹1 Cr+', label: 'Projects' },
  { value: '500+', label: 'Projects' },
  { value: '50+ Years', label: 'of Industry Experience' },
];

/**
 * Reusable PremiumProjectCTASection (Compact & Premium UI)
 * Sleek, short-height call-to-action banner:
 * Left: headline + concise copy + CTA button
 * Right: compact glassmorphic stats card
 * Bottom: clean minimal brand signature
 */
export const PremiumProjectCTASection = ({
  id = 'premium-project-cta',
  title = 'Planning a Premium Construction Project?',
  description = 'Bring your vision, land, or project requirement. Our team can help you plan the next step.',
  stats = DEFAULT_STATS,
  ctaText = 'Discuss Your Project',
  onCtaClick,
  brandName = 'Ajay Homes',
  brandTagline = 'From Vision to Completion.',
  className = '',
}) => {
  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden py-10 sm:py-12 lg:py-14 px-4 sm:px-8 lg:px-12 ${className}`}
      style={{
        backgroundColor: 'var(--grey-deepest)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-family-base)',
      }}
    >
      {/* Soft Ambient Brand Glow in Corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-5%] h-[320px] w-[320px] rounded-full blur-[100px] pointer-events-none"
        style={{
          backgroundColor: 'var(--primary)',
          opacity: 0.08,
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* ── Left Column: Headline, Copy, Action Button (col-span-6) ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            {/* Headline */}
            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-white tracking-tight leading-tight max-w-xl">
              {title}
            </h2>

            {/* Description */}
            <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-lg">
              {description}
            </p>

            {/* CTA Button */}
            <div className="mt-4 sm:mt-5">
              <Button onClick={onCtaClick} variant="primary" size="md">
                {ctaText}
              </Button>
            </div>
          </motion.div>

          {/* ── Right Column: Highlighted Small White Cards (col-span-6) ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
              {stats.map((stat, i) => (
                <div
                  key={`${stat.value}-${i}`}
                  className="bg-white rounded-xl p-3.5 sm:p-4 shadow-xl shadow-black/20 border border-slate-100 flex items-center justify-between sm:flex-col sm:items-start sm:justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group"
                >
                  <span
                    className="text-lg sm:text-xl lg:text-2xl font-extrabold font-mono tracking-tight shrink-0"
                    style={{ color: 'var(--primary)' }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-xs font-semibold text-slate-700 leading-snug sm:mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ── Minimal Brand Signature Strip ── */}
        {(brandName || brandTagline) && (
          <div className="mt-7 sm:mt-8 pt-4 border-t border-white/[0.08] flex items-center gap-2.5 text-xs sm:text-sm">
            <span className="font-semibold text-white tracking-wide">
              {brandName}
            </span>
            <span className="text-neutral-500">•</span>
            <span className="font-light italic tracking-wide" style={{ color: 'var(--primary)' }}>
              {brandTagline}
            </span>
          </div>
        )}

      </div>
    </section>
  );
};

export default PremiumProjectCTASection;
