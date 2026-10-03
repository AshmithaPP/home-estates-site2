"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { DraftingCompass, HardHat, ClipboardList, Building2, Sofa, KeyRound, ArrowRight } from 'lucide-react';

const CAPABILITIES = [
  { label: 'Architecture', icon: DraftingCompass, href: '/services/layout-promoters' },
  { label: 'Construction', icon: HardHat, href: '/services/construction' },
  { label: 'Project Management', icon: ClipboardList, href: '/services/project-management' },
  { label: 'Property Development', icon: Building2, href: '/services/property-developer' },
  { label: 'Interiors', icon: Sofa, href: '/services/interior-design' },
  { label: 'Real Estate', icon: KeyRound, href: '/services/real-estate' },
];

/**
 * More Than Construction (light warm-grey background, white tiles)
 * Copy on the left; the six capabilities in a hairline grid on the right.
 * Colours / fonts come from globals.css (.section-grey, --primary, --text-*).
 */
export const MoreThanConstructionSection = ({
  id = 'more-than-construction',
  className = '',
}) => {
  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden py-10 sm:py-12 lg:py-14 border-y border-black/5 ${className}`}
      style={{ fontFamily: 'var(--font-family-base)', backgroundColor: '#f3f2ef' }}
    >
      {/* Soft brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 h-[480px] w-[480px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,140,0,0.10) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-14 items-center">

          {/* ── Copy ──────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold tracking-tight leading-snug"
              style={{ color: 'var(--grey-deepest)' }}
            >
              More Than <span style={{ color: 'var(--primary)' }}>Construction</span>
            </h2>
            <p className="mt-3 text-[15px] sm:text-base font-medium text-slate-800">
              Construction is one part of what we do.
            </p>
            <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-600">
              With capabilities across{' '}
              architecture,{' '}
              construction,{' '}
              project management,{' '}
              property development,{' '}
              interiors, and{' '}
              real estate,{' '}
              <span className="font-semibold text-slate-900 transition-colors">
                Ajay Homes
              </span>{' '}
              can support your property journey through multiple stages.
            </p>
            <p
              className="mt-5 pl-4 border-l-2 text-[15px] sm:text-base font-semibold leading-snug"
              style={{ color: 'var(--primary-dark)', borderColor: 'var(--primary)' }}
            >
              One team. Multiple capabilities. Complete project support.
            </p>
          </motion.div>

          {/* ── Capabilities grid (white tiles) ───────────────────────── */}
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3"
          >
            {CAPABILITIES.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <span
                  className="group flex flex-col items-start gap-3 p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-sm transition-all duration-300 h-full focus:outline-none"
                >
                  <span
                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[var(--primary)]/15 text-[var(--primary)]"
                  >
                    <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={1.9} />
                  </span>
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[13px] sm:text-sm font-semibold leading-snug text-slate-800">
                      {label}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 opacity-0" />
                  </div>
                </span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default MoreThanConstructionSection;
