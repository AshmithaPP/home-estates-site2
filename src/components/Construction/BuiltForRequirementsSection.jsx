"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Building, TrendingUp, Briefcase, HardHat, Globe2 } from 'lucide-react';

const CLIENTS = [
  { label: 'Individual Homeowners', icon: Home, href: '/gallery' },
  { label: 'Property Owners', icon: Building, href: '/services/property-developer' },
  { label: 'Investors', icon: TrendingUp, href: '/services/real-estate' },
  { label: 'Businesses', icon: Briefcase, href: '/services/project-management' },
  { label: 'Developers', icon: HardHat, href: '/services/layout-promoters' },
  { label: 'NRI Clients', icon: Globe2, href: '/contact' },
];

/**
 * Built For Different Requirements (white background)
 * Photo on the left; heading, client list (hairline grid, no cards) and closing copy on the right.
 * Colours / fonts come from globals.css variables.
 */
export const BuiltForRequirementsSection = ({
  id = 'built-for-requirements',
  imageSrc = '/images/residence-images/suresh-residence-view/img17.jpg',
  imageAlt = 'Contemporary residence built by Ajay Homes',
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

          {/* ── Photo linking to Gallery ─────────────────────────────────── */}
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
              className="block relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl group cursor-pointer focus:outline-none"
              style={{ backgroundColor: 'var(--grey-mid)' }}
              aria-label="View our completed residential projects"
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs font-bold text-white uppercase tracking-wider bg-black/60 px-3 py-1 rounded backdrop-blur-xs">
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
              Built For <span style={{ color: 'var(--primary)' }}>Different Requirements</span>
            </h2>

            <p
              className="mt-6 text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em]"
              style={{ color: 'var(--primary-dark)' }}
            >
              We work with:
            </p>

            <ul className="mt-3 grid grid-cols-2 sm:grid-cols-[auto_auto_auto] border-t" style={{ borderColor: hairline }}>
              {CLIENTS.map(({ label, icon: Icon, href }) => (
                <li
                  key={label}
                  className="border-b"
                  style={{ borderColor: hairline }}
                >
                  <Link
                    href={href}
                    className="group flex items-center gap-2.5 py-3.5 sm:py-4 pr-2 hover:opacity-80 transition-opacity"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: 'var(--primary)' }}
                      strokeWidth={2}
                    />
                    <span className="text-[13px] sm:text-sm font-medium leading-snug sm:whitespace-nowrap group-hover:text-[var(--primary-dark)] transition-colors" style={{ color: 'var(--grey-deep)' }}>
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm sm:text-[15px] leading-relaxed" style={{ color: 'var(--grey-surface)' }}>
              Whether you are{' '}
              <Link href="/services/construction" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline transition-colors">
                building your first home
              </Link>
              ,{' '}
              <Link href="/services/property-developer" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline transition-colors">
                developing a premium property
              </Link>
              , or executing a{' '}
              <Link href="/services/project-management" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline transition-colors">
                ₹1 Cr+ project
              </Link>
              , our team brings the experience and capabilities required to manage the journey.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForRequirementsSection;
