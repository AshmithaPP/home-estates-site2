"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/UI/Button';

export const BuildValueSection = ({ onOpenApply }) => {
  // Architectural residence view
  const imageSrc = '/images/residence-images/besantnagar-residence-view/img26.jpg';

  const handleAction = () => {
    if (onOpenApply) {
      onOpenApply();
    } else {
      const el = document.getElementById('property-faq-form') || document.getElementById('contact-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="build-value"
      className="relative w-full bg-white text-slate-900 py-16 sm:py-20 lg:py-28 overflow-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      {/* ── Main Layout Container ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          
          {/* ── Left Column: Editorial Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-6 text-left space-y-4 sm:space-y-5"
          >
            {/* 1. Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[34px] font-bold text-slate-950 tracking-tight leading-snug xl:whitespace-nowrap">
              Build Value Into Every Property
            </h2>

            {/* 2. Narrative Copy Paragraphs — Exact Content requested by user */}
            <div className="space-y-3.5 text-xs sm:text-sm md:text-[14.5px] text-slate-600 font-normal leading-relaxed">
              <p>
                Property development is more than{' '}
                <Link href="/services/construction" className="font-semibold text-slate-900 hover:text-[var(--primary)] underline underline-offset-2 transition-colors">
                  constructing a building
                </Link>.
              </p>
              <p>
                It requires the right{' '}
                <Link href="/services/layout-promoters" className="font-semibold text-slate-900 hover:text-[var(--primary)] underline underline-offset-2 transition-colors">
                  land strategy, planning
                </Link>,{' '}
                <Link href="/services/interior-design" className="font-semibold text-slate-900 hover:text-[var(--primary)] underline underline-offset-2 transition-colors">
                  design
                </Link>,{' '}
                <Link href="/services/project-management" className="font-semibold text-slate-900 hover:text-[var(--primary)] underline underline-offset-2 transition-colors">
                  execution
                </Link>, market understanding, and long-term vision.
              </p>
              <p>
                <Link href="/about-us" className="font-semibold text-slate-900 hover:text-[var(--primary)] underline underline-offset-2 transition-colors">
                  Ajay Homes
                </Link>{' '}
                brings these capabilities together to help clients move from land and opportunity to{' '}
                <Link href="/gallery" className="font-semibold text-slate-900 hover:text-[var(--primary)] underline underline-offset-2 transition-colors">
                  completed property
                </Link>{' '}
                with a structured, end-to-end approach.
              </p>
            </div>

            {/* 3. Action CTA Buttons */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4">
              <Button
                onClick={handleAction}
                variant="primary"
                size="md"
                icon={ArrowRight}
                showIcon={true}
              >
                Discuss Your Development
              </Button>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-800 hover:text-[var(--primary)] transition-colors px-5 py-2.5 rounded-full border border-black/10 hover:border-black/20 bg-slate-50 shadow-xs cursor-pointer"
              >
                <span>Explore 500+ Projects &rarr;</span>
              </Link>
            </div>
          </motion.div>

          {/* ── Right Column: Overlapping Architectural Image Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-6 relative mt-4 md:mt-0"
          >
            <Link
              href="/gallery"
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-black/10 aspect-[4/3] sm:aspect-[16/11] group block cursor-pointer"
              aria-label="View completed projects in the gallery"
            >
              <img
                src={imageSrc}
                alt="Build Value Into Every Property — Ajay Homes"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlay accent badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xs p-3.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-white text-xs group-hover:border-[var(--primary)]/50 transition-colors">
                <span className="font-bold text-[var(--primary)] block uppercase tracking-wider text-[10px]">
                  Ajay Homes Property Development
                </span>
                <span className="text-white/90 text-xs block">
                  From land potential to high-value architectural reality.
                </span>
                <span className="mt-1 text-[11px] font-semibold text-[var(--primary)] block">
                  Explore 500+ Projects &rarr;
                </span>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BuildValueSection;
