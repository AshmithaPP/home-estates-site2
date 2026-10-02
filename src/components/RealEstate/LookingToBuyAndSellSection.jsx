"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, MapPin } from 'lucide-react';
import Button from '@/components/UI/Button';

export default function LookingToBuyAndSellSection({ onOpenApply }) {
  const handleAction = () => {
    if (onOpenApply) {
      onOpenApply();
    } else {
      const el = document.getElementById('real-estate-faq-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="buy-or-sell"
      className="relative py-10 sm:py-12 lg:py-14 overflow-hidden"
      style={{
        backgroundColor: 'var(--grey-deepest)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-family-base)'
      }}
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[280px] rounded-full blur-[140px] pointer-events-none opacity-15"
        style={{ background: 'var(--primary)' }}
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-3xl mx-auto"
        >
          {/* 1. Brand Eyebrow */}
          <div>
            <span 
              className="text-[11px] sm:text-xs font-bold uppercase tracking-widest inline-block"
              style={{ color: 'var(--primary)' }}
            >
              Ajay Homes
            </span>
          </div>

          {/* 2. Main Heading (Single line on desktop) */}
          <h2 className="text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] font-bold text-white tracking-tight whitespace-normal md:whitespace-nowrap leading-[1.2]">
            Looking to Buy or Sell{' '}
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 60%, var(--text-primary) 100%)',
              }}
            >
              Property in Chennai?
            </span>
          </h2>

          {/* 3. Subtitle */}
          <p className="text-white/75 text-xs sm:text-sm font-normal max-w-xl mx-auto leading-relaxed">
            Tell us what you are looking for. Our team will help you take the next step.
          </p>

          {/* 4. 3 Compact Credential Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
            
            {/* Card 1: 50+ Years */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="rounded-xl py-3.5 px-4 sm:py-4 sm:px-5 border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-md text-center group hover:border-[var(--primary)]/50 transition-all duration-300"
            >
              <div 
                className="text-xl sm:text-2xl font-bold tracking-tight mb-0.5"
                style={{ color: 'var(--primary)' }}
              >
                50+ Years
              </div>
              <div className="text-[10.5px] sm:text-[11px] font-semibold text-white/75 tracking-wider uppercase">
                Industry Experience
              </div>
            </motion.div>

            {/* Card 2: 500+ Projects */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.14 }}
              className="rounded-xl py-3.5 px-4 sm:py-4 sm:px-5 border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-md text-center group hover:border-[var(--primary)]/50 transition-all duration-300"
            >
              <div 
                className="text-xl sm:text-2xl font-bold tracking-tight mb-0.5"
                style={{ color: 'var(--primary)' }}
              >
                500+
              </div>
              <div className="text-[10.5px] sm:text-[11px] font-semibold text-white/75 tracking-wider uppercase">
                Projects Completed
              </div>
            </motion.div>

            {/* Card 3: Chennai Property Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-xl py-3.5 px-4 sm:py-4 sm:px-5 border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-md text-center group hover:border-[var(--primary)]/50 transition-all duration-300"
            >
              <div 
                className="text-xl sm:text-2xl font-bold tracking-tight mb-0.5"
                style={{ color: 'var(--primary)' }}
              >
                Chennai
              </div>
              <div className="text-[10.5px] sm:text-[11px] font-semibold text-white/75 tracking-wider uppercase">
                Property Expertise
              </div>
            </motion.div>

          </div>

          {/* 5. Action Button */}
          <div className="pt-2 sm:pt-3 flex justify-center">
            <Button
              onClick={handleAction}
              variant="primary"
              size="md"
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
