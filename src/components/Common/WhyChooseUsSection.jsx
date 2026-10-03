"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Button from '@/components/UI/Button';

/**
 * Default Construction-specific "Why Choose Us" points
 */
const DEFAULT_FEATURES = [
  {
    id: 'experience',
    title: '60+ Years of Industry Experience',
    description: 'Decades of experience across construction, property development, interiors, and real estate.',
    href: '/about-us',
  },
  {
    id: 'projects',
    title: '500+ Projects Completed',
    description: 'Experience across diverse residential, commercial, and development projects.',
    href: '/gallery',
  },
  {
    id: 'satisfaction',
    title: '100% Client Satisfaction',
    description: 'Dedicated to delivering premium projects with transparent execution and 100% client satisfaction.',
    href: '/gallery',
  },
  {
    id: 'management',
    title: 'End-to-End Management',
    description: 'From the first discussion to project handover, we coordinate the complete construction process.',
    href: '/services/project-management',
  },
  {
    id: 'quality',
    title: 'Quality-Focused Execution',
    description: 'We focus on material quality, workmanship, site supervision, and attention to detail at every stage.',
    href: '/gallery',
  },
  {
    id: 'transparent',
    title: 'Transparent Approach',
    description: 'Clear communication, coordinated execution, and better visibility throughout the project.',
    href: '/about-us',
  },
];

/** House + sprout outline icon used beside the section heading */
const HouseSproutIcon = (props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 30 32 8l26 22" />
    <path d="M46 18V8h6v15" />
    <path d="M12 26v32h40V26" />
    <path d="M32 58V40" />
    <path d="M32 44c-2-7-8-10-15-9 1 7 7 11 15 9Z" />
    <path d="M32 44c2-7 8-10 15-9-1 7-7 11-15 9Z" />
  </svg>
);

/**
 * Reusable WhyChooseUsSection
 * Layout: icon heading with underline → offset accent block behind a photo (left)
 * and a single-open accordion of reasons (right). First item open by default.
 * All colours and fonts come from globals.css variables.
 */
export const WhyChooseUsSection = ({
  id = 'why-choose-us',
  title = 'Why Choose Ajay Homes?',
  features = DEFAULT_FEATURES,
  imageSrc = '/assets/img/img-001.jpeg',
  imageAlt = 'Contemporary villa built by Ajay Homes',
  ctaText,
  onOpenApply,
  defaultOpen = 0,
  className = '',
}) => {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  const toggle = (index) => setOpenIndex((prev) => (prev === index ? -1 : index));

  return (
    <section
      id={id}
      className={`relative w-full bg-white overflow-hidden py-12 sm:py-16 lg:py-20 ${className}`}
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading: icon + title with underline ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-end gap-2.5 sm:gap-3 pb-1.5 border-b-2 lg:ml-5"
          style={{ borderColor: 'var(--grey-deep)' }}
        >
          <HouseSproutIcon
            className="w-11 h-11 sm:w-14 sm:h-14 lg:w-[72px] lg:h-[72px] shrink-0"
            style={{ color: 'var(--grey-deep)' }}
          />
          <span className="hover:opacity-90 transition-opacity">
            <h2
              className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold tracking-tight leading-snug pb-0.5"
              style={{ color: 'var(--primary)' }}
            >
              {title}
            </h2>
          </span>
        </motion.div>

        <div className="mt-8 sm:mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-10 xl:gap-12 items-start">

          {/* ── Left: Photo with offset accent block (links to Gallery) ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-6 pt-3 pb-3 sm:pl-10 sm:pt-5 sm:pb-5 lg:pl-[50px] lg:pt-5 lg:pb-5"
          >
            {/* Accent block: sits behind the photo's left edge, taller than the photo */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 bottom-0 w-[36%]"
              style={{ backgroundColor: 'var(--primary)' }}
            />
            <Link
              href="/gallery"
              className="block relative aspect-[550/400] w-full overflow-hidden group cursor-pointer"
              style={{ backgroundColor: 'var(--grey-mid)' }}
              aria-label="Explore our project gallery"
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs font-bold text-white uppercase tracking-wider bg-black/60 px-3 py-1 rounded backdrop-blur-xs">
                  View 500+ Projects &rarr;
                </span>
              </div>
            </Link>
          </motion.div>

          {/* ── Right: Accordion ───────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:pt-4"
          >
            <ul>
              {features.map((item, index) => {
                const isOpen = openIndex === index;
                const panelId = `${id}-panel-${index}`;
                return (
                  <li
                    key={item.id || index}
                    className="border-b"
                    style={{ borderColor: 'var(--primary)' }}
                  >
                    <button
                      type="button"
                      suppressHydrationWarning
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="w-full flex items-start justify-between gap-4 py-3.5 sm:py-4 text-left cursor-pointer group"
                    >
                      <span
                        className="text-[15px] sm:text-lg lg:text-[19px] leading-snug transition-colors"
                        style={{ color: isOpen ? 'var(--primary-dark)' : 'var(--grey-deep)' }}
                      >
                        {item.title}
                      </span>
                      <span
                        className="mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.25)] transition-transform group-hover:scale-110"
                        style={{ color: 'var(--primary)' }}
                      >
                        {isOpen ? <Minus className="h-3 w-3" strokeWidth={2.5} /> : <Plus className="h-3 w-3" strokeWidth={2.5} />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <p
                            className="pb-4 sm:pb-5 pr-8 text-sm sm:text-[15px] leading-[1.9]"
                            style={{ color: 'var(--grey-base)' }}
                          >
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>

            {ctaText && (
              <div className="mt-7">
                <Button onClick={onOpenApply} variant="primary" size="responsive">
                  {ctaText}
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
