"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/UI/Button';

/**
 * Have Land With Development Potential? (grey background, short)
 * Centred heading, copy, prompt and CTA stacked.
 * Colours / fonts come from globals.css (.section-grey, --primary, --text-*).
 */
export const LandPotentialSection = ({
  id = 'land-development-potential',
  onOpenApply,
  className = '',
}) => {
  const handleCta = () => {
    if (onOpenApply) {
      onOpenApply();
      return;
    }
    window.dispatchEvent(new Event('open-consultation'));
  };

  return (
    <section
      id={id}
      className={`relative w-full section-grey overflow-hidden py-12 sm:py-14 lg:py-16 ${className}`}
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      {/* Soft brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full blur-[110px] opacity-20"
        style={{ background: 'var(--primary)' }}
      />

      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[860px] mx-auto text-center"
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight leading-tight lg:whitespace-nowrap"
            style={{ color: 'var(--text-primary)' }}
          >
            Have Land With <span style={{ color: 'var(--primary)' }}>Development Potential?</span>
          </h2>
          <p className="mt-4 text-sm sm:text-[15px] leading-relaxed max-w-[640px] mx-auto" style={{ color: 'var(--text-muted)' }}>
            Your land could be more than an asset. With the right planning and execution, it can become a structured property development opportunity.
          </p>
          <p className="mt-6 text-[15px] sm:text-lg font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
            Let’s discuss your land and explore its potential.
          </p>
          <div className="mt-6 flex justify-center">
            <Button onClick={handleCta} variant="primary" size="responsive">
              Discuss Your Land
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandPotentialSection;
