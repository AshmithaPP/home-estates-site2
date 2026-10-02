"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/UI/Button';

export default function RealEstateCTASection({ onCtaClick }) {
  const handleClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const el = document.getElementById('real-estate-faq-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="real-estate-cta"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundColor: 'var(--grey-deepest)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-family-base)'
      }}
    >
      {/* Background ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[150px] pointer-events-none opacity-15"
        style={{ background: 'var(--primary)' }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 max-w-5xl mx-auto"
        >
          {/* Main Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] font-bold text-white tracking-tight whitespace-normal md:whitespace-nowrap leading-[1.2]">
            Looking to Buy or Sell Property in Chennai?
          </h2>

          {/* Subtitle */}
          <p className="text-white/80 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Tell us what you are looking for. Our team will help you take the next step.
          </p>

          {/* Metrics with Pipe Dividers (No dots as requested) */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-white/90">
            <span>50+ Years of Industry Experience</span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span>500+ Projects</span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span>Chennai Property Expertise</span>
          </div>

          {/* Action Button */}
          <div className="pt-4 flex justify-center">
            <Button
              onClick={handleClick}
              variant="primary"
              size="lg"
              icon={ArrowRight}
              showIcon={true}
            >
              Discuss Your Property Requirement
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
