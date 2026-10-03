"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/UI/Button';

export default function TransformSpaceCTASection({ onCtaClick }) {
  const handleClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const el = document.getElementById('interior-faq-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="transform-space-cta"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundColor: 'var(--grey-deepest)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-family-base)'
      }}
    >
      {/* Background glow and subtle borders */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] rounded-full blur-[170px] pointer-events-none opacity-20"
        style={{ background: 'var(--primary)' }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-5 sm:space-y-6 max-w-2xl mx-auto"
        >
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold text-white tracking-tight leading-snug">
            Ready to Transform{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)'
              }}
            >
              Your Space?
            </span>
          </h2>

          {/* Subtitle - Exact user content */}
          <p className="text-sm sm:text-base text-white/80 font-normal leading-relaxed">
            Let's discuss your requirements and create an interior that works beautifully for you.
          </p>

          {/* Metrics Line with exact pipe dividers from user prompt */}
          <div className="text-xs sm:text-sm text-white/70 font-medium py-1">
            <span className="hover:text-white transition-colors">60+ Years of Industry Experience</span> |{' '}
            <span className="hover:text-white transition-colors">500+ Projects</span> |{' '}
            <span className="hover:text-white transition-colors">Premium Project Expertise</span>
          </div>

          {/* Action Button */}
          <div className="pt-2 flex justify-center">
            <Button
              onClick={handleClick}
              variant="primary"
              size="lg"
              icon={ArrowRight}
              showIcon={true}
            >
              Start Your Interior Project
            </Button>
          </div>

          {/* Brand Sign-off */}
          <div className="pt-6 border-t border-white/10 max-w-xs mx-auto">
            <span className="block text-sm font-bold uppercase tracking-widest text-white transition-colors">
              Ajay Homes
            </span>
            <div
              className="text-xs uppercase tracking-wider font-medium mt-0.5"
              style={{ color: 'var(--primary)' }}
            >
              From Vision to Completion.
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
