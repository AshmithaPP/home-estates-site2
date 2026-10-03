"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Briefcase, Building2, Coffee, KeyRound } from 'lucide-react';

const processSteps = [
  {
    stepNumber: '1',
    title: 'Understand',
    href: '/contact',
    description: 'We understand your property requirement, objectives, budget, location, and timeline.',
    icon: Home,
  },
  {
    stepNumber: '2',
    title: 'Evaluate',
    href: '/contact',
    description: 'We assess the relevant property details and requirements.',
    icon: Briefcase,
  },
  {
    stepNumber: '3',
    title: 'Shortlist',
    href: '/gallery',
    description: 'Suitable property opportunities or prospective buyers are identified based on the requirement.',
    icon: Building2,
  },
  {
    stepNumber: '4',
    title: 'Coordinate',
    href: '/services/project-management',
    description: 'Property visits, discussions, negotiations, and relevant coordination are managed.',
    icon: Coffee,
  },
  {
    stepNumber: '5',
    title: 'Complete',
    href: '/contact',
    description: 'We support the transaction process through the required stages toward completion.',
    icon: KeyRound,
  },
];

export default function BuyingSellingProcessSection() {
  return (
    <section
      id="process"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundColor: 'var(--grey-deepest)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-family-base)'
      }}
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[160px] pointer-events-none opacity-10"
        style={{ background: 'var(--primary)' }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header matching Reference UI: Bold Title with Italic Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-1"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold text-white tracking-tight leading-snug">
              Our Buying & Selling Process
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-normal tracking-wide">
              How We Operate
            </p>
          </motion.div>
        </div>

        {/* 5 Steps Circular Layout matching Reference UI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-5 items-start">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Whole step links to the related page */}
                <Link href={step.href} aria-label={step.title} className="absolute inset-0 z-10 focus:outline-none" />

                {/* ── Circular Icon Node Container ── */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-white/20 p-2 sm:p-2.5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-xl">

                  {/* Inner Dark Circular Disc */}
                  <div className="w-full h-full rounded-full bg-white/[0.08] backdrop-blur-sm flex items-center justify-center border border-white/10 shadow-inner">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Number Badge at 4 o'clock position (matching reference green circular badge with our theme) */}
                  <div
                    className="absolute -bottom-1 -right-1 sm:bottom-0 sm:right-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-extrabold text-xs sm:text-sm shadow-md border-2"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: '#000000',
                      borderColor: 'var(--grey-deepest)',
                    }}
                  >
                    {step.stepNumber}
                  </div>
                </div>

                {/* ── Step Title (Uppercase Bold) ── */}
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white mt-5 group-hover:text-[var(--primary)] transition-colors">
                  {step.title}
                </h3>

                {/* ── Straight (Non-italic) Description ── */}
                <p className="text-xs sm:text-[13px] text-white/80 font-normal leading-relaxed max-w-[240px] mx-auto mt-2.5">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
