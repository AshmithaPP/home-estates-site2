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
      className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden text-white"
      style={{
        backgroundColor: 'var(--grey-deepest)',
        fontFamily: 'var(--font-family-base)',
      }}
    >
      {/* ── Ambient Radial Amber Glow ── */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-15"
        style={{ backgroundColor: 'var(--primary)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 sm:space-y-5"
        >
          {/* ── 1 Single One-Line Heading ── */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
            You focus on the vision.{' '}
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
              }}
            >
              We manage the details.
            </span>
          </h2>

          {/* ── Concise Narrative ── */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Our experienced engineers coordinate the people, materials, timelines, and budgets so you can build with absolute confidence.
          </p>

          {/* ── Action CTA Button ── */}
          <div className="pt-2 sm:pt-3 flex justify-center">
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
