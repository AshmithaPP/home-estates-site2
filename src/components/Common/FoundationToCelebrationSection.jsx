"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowRight } from 'lucide-react';

// The scene's own background is warm cream; fade its left / top edge into the section
const SCENE_MASK = {
  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 18%)',
  maskImage: 'linear-gradient(to right, transparent 0%, #000 18%)',
};

const SCENE_MASK_MOBILE = {
  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 14%)',
  maskImage: 'linear-gradient(to bottom, transparent 0%, #000 14%)',
};

/**
 * Reusable FoundationToCelebrationSection
 * Sunrise banner replica: eyebrow → two-line heading (orange second line) →
 * lead → description → dark tagline pill on the left; the villa-at-sunrise
 * scene (house, sun, trees, birds) anchored to the right end and bottom edge,
 * linking to the gallery. Stacks on tablets / phones.
 * Colours / fonts come from globals.css (--primary*, --grey-*, --font-family-base).
 */
export const FoundationToCelebrationSection = ({
  id = 'foundation-to-celebration',
  eyebrow = 'Your Dream Home, Our Priority',
  titleLead = 'From Bhoomi Pooja to',
  titleHighlight = 'House Warming',
  lead = 'We take care of your construction journey from the first Bhoomi Pooja to the final House Warming.',
  description = 'From site preparation and construction to finishing and handover, Ajay Homes manages every stage with care, coordination, and attention to detail.',
  tagline = 'One team. One journey. From foundation to celebration.',
  imageSrc = '/images/bhoomi-housewarming-scene.webp',
  className = '',
}) => {
  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden lg:min-h-[400px] 2xl:min-h-[440px] ${className}`}
      style={{
        fontFamily: 'var(--font-family-base)',
        background: 'color-mix(in srgb, var(--primary-light) 7%, white)',
      }}
    >
      {/* Distant hills along the bottom */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 w-full lg:w-[65%] h-20 sm:h-24 lg:h-28"
      >
        <path
          d="M0 110 C 160 60, 320 70, 470 95 S 760 140, 900 105 S 1180 60, 1440 90 L1440 160 L0 160 Z"
          fill="color-mix(in srgb, var(--primary-light) 12%, white)"
        />
        <path
          d="M0 135 C 200 105, 380 112, 560 128 S 900 150, 1100 130 S 1320 115, 1440 125 L1440 160 L0 160 Z"
          fill="color-mix(in srgb, var(--primary-light) 17%, white)"
        />
      </svg>

      {/* ── Desktop scene: right end, standing on the bottom edge (links to Gallery) ── */}
      <Link
        href="/gallery"
        aria-label="View our project gallery"
        className="hidden lg:block absolute bottom-0 right-0 h-full max-w-[48%] focus:outline-none"
      >
        <motion.img
          src={imageSrc}
          alt="Ajay Homes villa at sunrise — from Bhoomi Pooja to House Warming"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="h-full w-auto max-w-full object-cover object-right-bottom select-none"
          style={SCENE_MASK}
        />
      </Link>

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:w-[56%] lg:min-h-[400px] 2xl:min-h-[440px] flex flex-col items-center justify-center text-center pt-10 pb-4 sm:pt-12 lg:py-10">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {/* Eyebrow with side rules */}
            {eyebrow && (
              <div className="flex items-center gap-3 sm:gap-5">
                <span className="h-px w-8 sm:w-10" style={{ backgroundColor: 'var(--primary)' }} />
                <span
                  className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.28em]"
                  style={{ color: 'var(--grey-surface)' }}
                >
                  {eyebrow}
                </span>
                <span className="h-px w-8 sm:w-10" style={{ backgroundColor: 'var(--primary)' }} />
              </div>
            )}

            <h2
              className="mt-4 sm:mt-5 text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold tracking-tight leading-snug"
              style={{ color: 'var(--grey-deepest)' }}
            >
              {titleLead}{' '}
              <span
                className="sm:block text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, var(--primary-light) 0%, var(--primary) 50%, var(--primary-dark) 100%)',
                }}
              >
                {titleHighlight}
              </span>
            </h2>

            <p
              className="mt-3 sm:mt-4 max-w-[560px] text-sm sm:text-base font-medium leading-relaxed"
              style={{ color: 'var(--grey-base)' }}
            >
              {lead}
            </p>

            <p
              className="mt-2 max-w-[520px] text-xs sm:text-[13px] leading-relaxed"
              style={{ color: 'var(--grey-surface)' }}
            >
              From{' '}
              <Link href="/services/layout-promoters" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline transition-colors">
                site preparation
              </Link>{' '}
              and{' '}
              <Link href="/services/construction" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline transition-colors">
                construction
              </Link>{' '}
              to{' '}
              <Link href="/services/interior-design" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline transition-colors">
                finishing
              </Link>{' '}
              and handover,{' '}
              <Link href="/about-us" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] transition-colors">
                Ajay Homes
              </Link>{' '}
              manages every stage with care, coordination, and attention to detail.
            </p>

            {tagline && (
              <Link
                href="/contact"
                className="mt-6 sm:mt-7 inline-flex max-w-full items-center gap-2.5 sm:gap-3.5 rounded-full py-2 pl-4 pr-2 sm:pl-6 hover:scale-105 transition-transform duration-300 group cursor-pointer focus:outline-none"
                style={{
                  backgroundColor: 'var(--grey-deepest)',
                  border: '1.5px solid color-mix(in srgb, var(--primary) 55%, transparent)',
                  boxShadow:
                    '0 0 0 4px color-mix(in srgb, var(--primary) 12%, transparent), 0 16px 32px -14px rgba(0,0,0,0.5)',
                }}
              >
                <Home className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" style={{ color: 'var(--primary)' }} strokeWidth={1.75} />
                <span
                  className="text-left text-[11px] sm:text-[13px] font-semibold leading-snug"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {tagline}
                </span>
                <span
                  className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full group-hover:translate-x-0.5 transition-transform"
                  style={{ backgroundColor: 'var(--primary)' }}
                >
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: 'var(--grey-deepest)' }} />
                </span>
              </Link>
            )}
          </motion.div>
        </div>
      </div>

      {/* ── Tablet / phone scene: full width below the copy, on the bottom edge ── */}
      <Link href="/gallery" aria-label="View our project gallery" className="lg:hidden block w-full max-w-[720px] ml-auto">
        <img
          src={imageSrc}
          alt="Ajay Homes villa at sunrise — from Bhoomi Pooja to House Warming"
          className="block w-full h-auto select-none"
          style={SCENE_MASK_MOBILE}
          loading="lazy"
        />
      </Link>
    </section>
  );
};

export default FoundationToCelebrationSection;
