"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MoreThanTransactionSection() {
  const ecosystemPillars = [
    { label: 'Construction', href: '/services/construction' },
    { label: 'Development', href: '/services/property-developer' },
    { label: 'Project Management', href: '/services/project-management' },
    { label: 'Interiors', href: '/services/interior-design' },
    { label: 'Real Estate', href: '#real-estate-services' },
  ];

  return (
    <section
      id="more-than-transaction"
      className="relative w-full bg-white text-slate-900 py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

          {/* Left Column: Image Frame (Matches Content Height) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative order-2 lg:order-1 h-full flex flex-col"
          >
            <Link
              href="/gallery"
              aria-label="View Besant Nagar residence and more projects in our gallery"
              className="block relative rounded-2xl overflow-hidden w-full h-full min-h-[360px] sm:min-h-[440px] border border-slate-200 shadow-xl group focus:outline-none"
            >
              <img
                src="/images/residence-images/besantnagar-residence-view/img19.jpg"
                alt="More Than a Real Estate Transaction — Ajay Homes"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </Link>
          </motion.div>

          {/* Right Column: Heading & Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4 sm:space-y-5 order-1 lg:order-2 lg:pl-2 flex flex-col justify-between"
          >
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[26px] xl:text-[32px] font-bold text-slate-950 tracking-tight whitespace-normal lg:whitespace-nowrap leading-snug">
              More Than a Real Estate{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)'
                }}
              >
                Transaction
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              With <Link href="/about-us" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline decoration-slate-300 underline-offset-2 transition-colors">Ajay Homes</Link>, real estate is supported by experience across the wider property ecosystem.
            </p>

            {/* 5 Ecosystem Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {ecosystemPillars.map((pillar) => (
                <Link
                  key={pillar.label}
                  href={pillar.href}
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none"
                >
                  {pillar.label}
                </Link>
              ))}
            </div>

            {/* Paragraph 2 */}
            <p className="text-slate-600 font-normal text-xs sm:text-sm leading-relaxed">
              This broader understanding allows us to look at property not just as a transaction, but as a long-term asset and opportunity.
            </p>

            {/* More Than Buying or Selling Property Narrative */}
            <div className="pt-2 space-y-2 text-slate-600 font-normal text-xs sm:text-sm leading-relaxed">
              <p className="text-slate-800 font-semibold text-sm sm:text-base">
                More Than Buying or Selling Property
              </p>
              <p>
                Our relationship with clients can go beyond a property transaction. From helping you find or sell the right property to supporting its{' '}
                <Link href="/services/property-developer" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline decoration-slate-300 underline-offset-2 transition-colors">development</Link>,{' '}
                <Link href="/services/construction" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline decoration-slate-300 underline-offset-2 transition-colors">construction</Link>,{' '}
                <Link href="/services/interior-design" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline decoration-slate-300 underline-offset-2 transition-colors">interiors</Link>, and completion, Ajay Homes offers expertise across the wider property journey.
              </p>
              <p>
                For home projects, that journey can continue from{' '}
                <Link href="/services/construction#foundation-to-celebration" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline decoration-slate-300 underline-offset-2 transition-colors">Bhoomi Pooja to House Warming</Link>.
              </p>
            </div>

            {/* Climax Statement */}
            <div className="p-4 sm:p-5 rounded-xl border border-orange-200/90 bg-orange-50/60 shadow-xs">
              <p
                className="text-base sm:text-lg font-bold tracking-tight uppercase"
                style={{ color: 'var(--primary-dark)' }}
              >
                One property partner. Every stage of the journey.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
