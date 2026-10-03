"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../UI/Button';

export const ResourcesHero = ({ onOpenTour, onOpenApply }) => {
  // Raman Residence Image requested by user
  const bgImage = '/images/residence-images/raman-residence-view/img74.jpg';

  const scrollToContent = () => {
    const el = document.getElementById('resources-content');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenApply) {
      onOpenApply();
    }
  };

  return (
    <section 
      id="resources-hero"
      className="relative w-full h-[100dvh] min-h-[540px] sm:min-h-[620px] lg:min-h-[700px] flex items-center overflow-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      {/* ── Background Architectural Image (img74.jpg) with gentle contrast layer matching home page ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={bgImage}
          alt="Raman Residence Architectural Interior — Ajay Homes"
          className="w-full h-full object-cover object-center"
        />

        {/* Soft contrast gradients matching Home page: keeps image vivid while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
      </div>

      {/* ── Main Hero Layout Container — Flush Left End matching Home Page ── */}
      <div className="relative z-10 max-w-[1800px] mx-auto w-full px-4 sm:px-8 md:px-12 pt-20 sm:pt-24 md:pt-28 pb-8 flex-1 flex flex-col justify-center">
        
        {/* Left End Content Grid matching Home Page */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-center my-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-6 text-left space-y-4 sm:space-y-5"
          >
            {/* 1. Main Heading — Exact Home Page Font Size, Uppercase & Leading */}
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[1.12] drop-shadow-md text-left select-none">
              <span className="block text-white">
                Architectural Wisdom,
              </span>
              <span 
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 60%, var(--text-primary) 100%)',
                }}
              >
                Crafted for Generations.
              </span>
            </h1>

            {/* 2. Description Paragraph — Exact Home Page Typography & Density */}
            <p className="text-[11px] sm:text-sm md:text-[15px] text-white/90 font-normal max-w-xs sm:max-w-lg md:max-w-xl leading-relaxed drop-shadow select-none text-left">
              Comprehensive{' '}
              home building blueprints,{' '}
              CMDA / DTCP compliance checklists,{' '}
              turnkey construction benchmarks, and{' '}
              interior design advisories&mdash;curated from{' '}
              60+ years{' '}
              of landmark residential mastery across{' '}
              500+ projects{' '}
              in Chennai.
            </p>

            {/* 3. Action Buttons */}
            <div className="pt-2 sm:pt-3 flex flex-wrap items-center justify-start gap-3 sm:gap-4">
              <Button
                onClick={scrollToContent}
                variant="primary"
                size="md"
                icon={ArrowRight}
                showIcon={true}
              >
                Explore Resources
              </Button>

              <Button
                href="/contact"
                variant="glass"
                size="md"
              >
                Start a Conversation
              </Button>
            </div>
          </motion.div>

          {/* Right column empty matching Home Page layout */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />

        </div>

      </div>

    </section>
  );
};

export default ResourcesHero;
