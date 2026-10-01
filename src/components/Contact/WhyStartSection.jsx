"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Minimal outline SVG icons matching exact reference
const PiggyRupeeIcon = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M19 11a4.5 4.5 0 0 0-4.5-4.5H9A4.5 4.5 0 0 0 4.5 11c0 2 1.3 3.7 3.1 4.3L7 19h2.5l.8-2h3.4l.8 2H17l-.6-3.7c1.8-.6 3.1-2.3 3.1-4.3z" />
    <circle cx="7.5" cy="11" r="0.5" fill="currentColor" />
    <path d="M11 9h3" />
    <path d="M11 10.5h2.5" />
    <path d="M11 9v3" />
    <path d="M11 10.5a1.2 1.2 0 0 0 1.2-1.2" />
    <path d="M11.5 12l2 2" />
  </svg>
);

const AlarmClockIcon = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <circle cx="12" cy="13" r="7.5" />
    <path d="M12 9.5v3.5l2.5 1.5" />
    <path d="M5 3.5L2.5 6" />
    <path d="M19 3.5l2.5 2.5" />
    <path d="M6.5 19.5L5 21" />
    <path d="M17.5 19.5L19 21" />
  </svg>
);

const ShieldCheckIcon = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const LayersIcon = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M12 2 2 7l10 5 10-5-10-5Z" />
    <path d="m2 17 10 5 10-5" />
    <path d="m2 12 10 5 10-5" />
  </svg>
);

export const WhyStartSection = () => {
  const promises = [
    {
      title: '60+ Years',
      subtitle: 'Industry Experience',
      desc: 'Over five decades of uncompromised structural craftsmanship, ethical property development, and generational trust across South India.',
      icon: PiggyRupeeIcon,
    },
    {
      title: '500+ Projects',
      subtitle: 'Completed Projects',
      desc: 'Proven track record of delivering bespoke individual villas, boutique residential communities, and commercial developments on schedule.',
      icon: AlarmClockIcon,
    },
    {
      title: '₹1 Cr+',
      subtitle: 'Premium Project Experience',
      desc: 'Specialized mastery in high-value custom residences, luxury duplexes, and prestigious gated developments with artisan detailing.',
      icon: ShieldCheckIcon,
    },
    {
      title: 'End-to-End',
      subtitle: 'Property Expertise',
      desc: 'Complete property solutions from initial site analysis and CMDA / DTCP approvals to turnkey construction and bespoke interiors.',
      icon: LayersIcon,
    },
  ];

  return (
    <section
      id="why-start"
      className="relative w-full bg-white overflow-hidden py-12 sm:py-14 lg:py-16"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Title card: heading inside a dark grey banner, villa illustration on the right ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="section-grey relative rounded-2xl sm:rounded-3xl overflow-hidden px-6 py-7 sm:px-10 sm:py-9 lg:px-12 lg:py-10"
        >
          {/* Soft brand glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full blur-[90px] opacity-30"
            style={{ background: 'var(--primary)' }}
          />

          <div className="relative z-10 max-w-[560px]">
            <h2
              className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Why Start With <span style={{ color: 'var(--primary)' }}>Ajay Homes?</span>
            </h2>
          </div>

          {/* Isometric villa (hidden on small phones to keep the card short) */}
          <img
            src="/images/why-start-isometric.png"
            alt="Ajay Homes Luxury Residential Villa"
            className="hidden sm:block absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 w-[150px] lg:w-[185px] h-auto object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)] pointer-events-none select-none"
          />
        </motion.div>

        {/* ── Points: 4 across on desktop, 2 on tablet, 1 on phones ── */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-7">
          {promises.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group lg:pl-5 lg:border-l first:lg:pl-0 first:lg:border-l-0"
                style={{ borderColor: 'color-mix(in srgb, var(--grey-surface) 20%, transparent)' }}
              >
                <div className="flex items-center gap-2.5">
                  <IconComp
                    className="w-5 h-5 shrink-0 transition-colors"
                    style={{ color: 'var(--primary)' }}
                  />
                  <span className="text-base sm:text-lg font-bold" style={{ color: 'var(--grey-deepest)' }}>
                    {item.title}
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-[13px] font-semibold" style={{ color: 'var(--grey-base)' }}>
                  {item.subtitle}
                </p>
                <p className="mt-2 text-xs sm:text-[13px] leading-relaxed" style={{ color: 'var(--grey-surface)' }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyStartSection;
