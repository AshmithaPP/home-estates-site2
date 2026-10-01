"use client";

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable JourneyMarqueeSection
 * Short, modern section: the title runs as a large scrolling text band
 * (alternating dark / orange), followed by a two-column statement below.
 * Colours / fonts come from globals.css (--primary, --grey-*, --font-family-base).
 */
export const JourneyMarqueeSection = ({
  id = 'journey-marquee',
  title = 'From Bhoomi Pooja to House Warming',
  lead = 'A project involves countless details. We stay involved throughout the journey—from the first Bhoomi Pooja to the final House Warming.',
  description = 'Our team coordinates the people, materials, timelines, quality, and execution so you can experience the journey with greater confidence.',
  tagline = 'You envision it. We manage every detail.',
  className = '',
}) => {
  // One run = title repeated (dark, orange); two identical runs make the loop seamless
  const run = [0, 1, 2, 3];

  return (
    <section
      id={id}
      className={`relative w-full bg-white overflow-hidden py-12 sm:py-14 lg:py-16 ${className}`}
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      <h2 className="sr-only">{title}</h2>

      {/* ── Running title band ───────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="relative border-y py-2.5 sm:py-3"
        style={{
          borderColor: 'color-mix(in srgb, var(--grey-surface) 18%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}
      >
        <div className="journey-marquee flex w-max items-center">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {run.map((i) => (
                <span key={i} className="flex items-center">
                  <span
                    className="whitespace-nowrap text-[17px] sm:text-[21px] lg:text-[26px] font-bold tracking-tight leading-none px-4 sm:px-6"
                    style={
                      i % 2 === 0
                        ? { color: 'var(--grey-deepest)' }
                        : { color: 'var(--primary)' }
                    }
                  >
                    {title}
                  </span>
                  <span
                    className="h-2 w-2 sm:h-2.5 sm:w-2.5 rotate-45 shrink-0"
                    style={{ backgroundColor: 'var(--primary)' }}
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Statement ────────────────────────────────────────────────── */}
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-10 mt-10 sm:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-16 items-start">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight leading-snug"
            style={{ color: 'var(--grey-deepest)' }}
          >
            {lead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <p className="text-sm sm:text-[15px] leading-relaxed" style={{ color: 'var(--grey-surface)' }}>
              {description}
            </p>
            {tagline && (
              <p
                className="mt-5 text-[15px] sm:text-base font-semibold"
                style={{ color: 'var(--primary-dark)' }}
              >
                {tagline}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JourneyMarqueeSection;
