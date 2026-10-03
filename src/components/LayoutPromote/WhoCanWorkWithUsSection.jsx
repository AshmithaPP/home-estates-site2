"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building, TrendingUp, HardHat, Globe2, Users, MapPin } from 'lucide-react';

const SUITABLE_PROFILES = [
  { label: 'Landowners', icon: MapPin, href: '/contact' },
  { label: 'Property Owners', icon: Building, href: '/services/property-developer' },
  { label: 'Real Estate Investors', icon: TrendingUp, href: '/services/real-estate' },
  { label: 'Developers', icon: HardHat, href: '/services/construction' },
  { label: 'NRI Property Owners', icon: Globe2, href: '/contact' },
  { label: 'Land Investment Groups', icon: Users, href: '/about-us' },
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
            <Link
              href="/gallery"
              className="group block relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl cursor-pointer"
              style={{ backgroundColor: 'var(--grey-mid)' }}
              aria-label="View our project portfolio"
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs font-bold text-white uppercase tracking-wider bg-black/70 px-3 py-1.5 rounded-full backdrop-blur-xs border border-white/20">
                  View 500+ Projects &rarr;
                </span>
              </div>
            </Link>
          </motion.div>

          {/* ── Content ───────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h2
              className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold tracking-tight leading-snug"
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
              {SUITABLE_PROFILES.map(({ label, icon: Icon, href }) => (
                <li key={label} className="border-b" style={{ borderColor: hairline }}>
                  <span
                    className="group flex items-center gap-2.5 py-3.5 sm:py-4 pr-2 transition-colors duration-200"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0"
                      style={{ color: 'var(--primary)' }}
                      strokeWidth={2}
                    />
                    <span className="text-[13px] sm:text-sm font-medium leading-snug sm:whitespace-nowrap" style={{ color: 'var(--grey-deep)' }}>
                      {label}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm sm:text-[15px] leading-relaxed" style={{ color: 'var(--grey-surface)' }}>
              Whether you own a large parcel of land or are exploring a{' '}
              <span className="text-[var(--primary)] font-semibold">
                development opportunity
              </span>
              , we can help{' '}
              <span className="text-[var(--primary)] font-semibold">
                evaluate the next step &rarr;
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanWorkWithUsSection;
