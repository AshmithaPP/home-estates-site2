"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { DraftingCompass, HardHat, ClipboardList, Building2, Sofa, KeyRound } from 'lucide-react';

const CAPABILITIES = [
  { label: 'Architecture', icon: DraftingCompass },
  { label: 'Construction', icon: HardHat },
  { label: 'Project Management', icon: ClipboardList },
  { label: 'Property Development', icon: Building2 },
  { label: 'Interiors', icon: Sofa },
  { label: 'Real Estate', icon: KeyRound },
];

/**
 * More Than Construction (grey background)
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
      className={`relative w-full section-grey overflow-hidden py-12 sm:py-16 lg:py-20 ${className}`}
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      {/* Soft brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-[110px] opacity-20"
        style={{ background: 'var(--primary)' }}
      />

      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">

          {/* ── Copy ──────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              More Than <span style={{ color: 'var(--primary)' }}>Construction</span>
            </h2>
            <p className="mt-3 text-[15px] sm:text-base font-medium" style={{ color: 'var(--text-primary)' }}>
              Construction is one part of what we do.
            </p>
            <p className="mt-3 text-sm sm:text-[15px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              With capabilities across architecture, construction, project management, property development, interiors, and real estate, Ajay Homes can support your property journey through multiple stages.
            </p>
            <p
              className="mt-6 pl-4 border-l-2 text-[15px] sm:text-base font-semibold leading-snug"
              style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}
            >
              One team. Multiple capabilities. Complete project support.
            </p>
          </motion.div>

          {/* ── Capabilities grid (hairlines, no cards) ───────────────── */}
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 border-t border-l border-white/10"
          >
            {CAPABILITIES.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="group flex flex-col items-start gap-3 p-4 sm:p-6 border-r border-b border-white/10 transition-colors duration-300 hover:bg-white/[0.03]"
              >
                <span
                  className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[var(--primary)]/15 text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-[var(--grey-deepest)]"
                >
                  <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={1.9} />
                </span>
                <span className="text-[13px] sm:text-sm font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
                  {label}
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
