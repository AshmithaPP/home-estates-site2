"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/UI/Button';

export const VisionDetailsBannerSection = ({ onOpenApply }) => {
  const handleAction = () => {
    if (onOpenApply) {
      onOpenApply();
    } else {
      const el = document.getElementById('contact-form') || document.getElementById('project-management-hero');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="vision-details"
      className="relative w-full py-10 sm:py-12 lg:py-14 overflow-hidden border-y border-black/5"
      style={{
        backgroundColor: '#f3f2ef',
        fontFamily: 'var(--font-family-base)',
      }}
    >
      {/* ── Ambient Radial Amber Glow ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,140,0,0.10) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 sm:space-y-4"
        >
          {/* ── 1 Single One-Line Heading ── */}
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold tracking-tight leading-snug" style={{ color: 'var(--grey-deepest)' }}>
            You focus on the vision.{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)',
              }}
            >
              We manage the details.
            </span>
          </h2>

          {/* ── Concise Narrative ── */}
          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Our{' '}
            experienced engineers{' '}
            coordinate the people, materials, timelines, and budgets so you can{' '}
            build{' '}
            with absolute confidence.
          </p>

          {/* ── Action CTA Button ── */}
          <div className="pt-1 sm:pt-2 flex justify-center">
            <Button
              onClick={handleAction}
              variant="primary"
              size="md"
              icon={ArrowRight}
              showIcon={true}
              className="shadow-lg shadow-[var(--primary)]/20 hover:shadow-[var(--primary)]/40"
            >
              Discuss Your Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionDetailsBannerSection;
