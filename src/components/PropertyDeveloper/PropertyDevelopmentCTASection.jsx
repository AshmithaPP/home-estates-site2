"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/UI/Button';

export const PropertyDevelopmentCTASection = ({
  id = 'property-development-cta',
  onCtaClick,
  className = '',
}) => {
  const stats = [
    { value: '50+ Years', label: 'of Industry Experience' },
    { value: '500+', label: 'Projects' },
    { value: '₹1 Cr+', label: 'Project Expertise' },
  ];

  const handleAction = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const el = document.getElementById('property-faq-form') || document.getElementById('contact-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id={id}
      className={`relative w-full py-7 sm:py-9 lg:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
      style={{
        backgroundColor: 'var(--grey-deepest)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-family-base)',
      }}
    >
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-white/[0.08] overflow-hidden shadow-2xl backdrop-blur-xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8"
          style={{
            background: 'linear-gradient(135deg, rgba(38, 38, 38, 0.8) 0%, rgba(22, 22, 22, 0.95) 100%)',
            boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
            style={{
              backgroundColor: 'var(--primary)',
              opacity: 0.12,
            }}
          />

          {/* Left Column */}
          <div className="relative z-10 flex-1 space-y-2 text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Have a Property Development Opportunity?
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-xl">
              Whether you own land or are exploring a development investment, let's discuss the possibilities.
            </p>

            {/* Stats Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-x-2.5 sm:gap-x-3.5 gap-y-1 text-xs sm:text-[13px] text-neutral-300">
              {stats.map((item, idx) => {
                const isLast = idx === stats.length - 1;
                return (
                  <React.Fragment key={idx}>
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                      <strong className="font-bold text-white tracking-wide">
                        {item.value}
                      </strong>
                      <span className="text-neutral-400">
                        {item.label}
                      </span>
                    </span>

                    {!isLast && (
                      <span className="text-white/20 select-none">|</span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Tagline */}
            <div className="pt-2">
              <span className="text-xs font-bold text-[var(--primary)] tracking-wide">
                Ajay Homes — From Vision to Completion.
              </span>
            </div>
          </div>

          {/* Right Column: CTA */}
          <div className="relative z-10 shrink-0">
            <Button
              onClick={handleAction}
              variant="primary"
              size="md"
              icon={ArrowRight}
              showIcon={true}
            >
              Discuss Your Development
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyDevelopmentCTASection;
