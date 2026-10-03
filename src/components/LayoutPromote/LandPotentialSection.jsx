"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/UI/Button';

/**
 * Have Land With Development Potential? (light warm-grey background, short)
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
      className={`relative w-full overflow-hidden py-10 sm:py-12 lg:py-14 border-y border-black/5 ${className}`}
      style={{ fontFamily: 'var(--font-family-base)', backgroundColor: '#f3f2ef' }}
    >
      {/* Soft brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,140,0,0.10) 0%, transparent 70%)' }}
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
            className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold tracking-tight lg:whitespace-nowrap leading-snug"
            style={{ color: 'var(--grey-deepest)' }}
          >
            Have Land With <span style={{ color: 'var(--primary)' }}>Development Potential?</span>
          </h2>
          <p className="mt-4 text-sm sm:text-[15px] leading-relaxed max-w-[640px] mx-auto text-slate-600">
            Your land could be more than an asset. With the right{' '}
            planning and execution, it can become a structured{' '}
            property development{' '}
            opportunity.
          </p>
          <p className="mt-5 text-[15px] sm:text-lg font-semibold leading-snug text-slate-800">
            Let’s discuss your land and explore its potential.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button onClick={handleCta} variant="primary" size="responsive">
              Discuss Your Land
            </Button>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-800 hover:text-[var(--primary)] transition-colors px-5 py-2.5 rounded-full border border-black/10 hover:border-black/20 bg-white/70 shadow-xs cursor-pointer"
            >
              <span>Explore 500+ Projects &rarr;</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandPotentialSection;
