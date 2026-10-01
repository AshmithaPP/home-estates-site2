"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building, TrendingUp, HardHat, Globe2, Users, MapPin } from 'lucide-react';

const SUITABLE_PROFILES = [
  { label: 'Landowners', icon: MapPin },
  { label: 'Property Owners', icon: Building },
  { label: 'Real Estate Investors', icon: TrendingUp },
  { label: 'Developers', icon: HardHat },
  { label: 'NRI Property Owners', icon: Globe2 },
  { label: 'Land Investment Groups', icon: Users },
];

/**
 * Who Can Work With Us? (white background)
 * Photo on the left; heading, audience list (hairline grid, no cards) and closing copy on the right.
 * Colours / fonts come from globals.css variables.
 */
export const WhoCanWorkWithUsSection = ({
  id = 'who-can-work-with-us',
  imageSrc = '/assets/img/img-007.jpeg',
  imageAlt = 'Residential development by Ajay Homes',
  className = '',
}) => {
  const hairline = 'color-mix(in srgb, var(--grey-surface) 20%, transparent)';

  return (
    <section
      id={id}
      className={`relative w-full bg-white overflow-hidden py-12 sm:py-16 lg:py-20 ${className}`}
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">

          {/* ── Photo ─────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="absolute -left-3 -bottom-3 sm:-left-4 sm:-bottom-4 w-2/5 h-2/3 rounded-2xl"
              style={{ backgroundColor: 'var(--primary)' }}
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl" style={{ backgroundColor: 'var(--grey-mid)' }}>
              <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </motion.div>

          {/* ── Content ───────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h2
              className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight leading-tight"
              style={{ color: 'var(--grey-deepest)' }}
            >
              Who Can <span style={{ color: 'var(--primary)' }}>Work With Us?</span>
            </h2>

            <p
              className="mt-5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em]"
              style={{ color: 'var(--primary-dark)' }}
            >
              Our layout promotion services are suitable for:
            </p>

            <ul className="mt-3 grid grid-cols-2 sm:grid-cols-[auto_auto_auto] border-t" style={{ borderColor: hairline }}>
              {SUITABLE_PROFILES.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="group flex items-center gap-2.5 py-3.5 sm:py-4 pr-2 border-b"
                  style={{ borderColor: hairline }}
                >
                  <Icon
                    className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: 'var(--primary)' }}
                    strokeWidth={2}
                  />
                  <span className="text-[13px] sm:text-sm font-medium leading-snug sm:whitespace-nowrap" style={{ color: 'var(--grey-deep)' }}>
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm sm:text-[15px] leading-relaxed" style={{ color: 'var(--grey-surface)' }}>
              Whether you own a large parcel of land or are exploring a development opportunity, we can help evaluate the next step.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanWorkWithUsSection;
