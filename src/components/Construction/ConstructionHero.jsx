"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../UI/Button';

export const ConstructionHero = ({ onOpenApply }) => {
  // Shasthri Nagar Adyar residence image requested by user
  const bgImage = '/images/residence-images/shasthri-nagar-adyar/img64.jpg';

  const handleDiscussProject = () => {
    if (onOpenApply) {
      onOpenApply();
    } else {
      const el = document.getElementById('contact-form') || document.getElementById('construction-content');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="construction-hero"
      className="relative w-full h-[100dvh] min-h-[540px] sm:min-h-[620px] lg:min-h-[700px] flex items-center overflow-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      {/* ── Background Architectural Image (img64.jpg) with soft contrast layer ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={bgImage}
          alt="Shasthri Nagar Adyar Luxury Residence Construction — Ajay Homes"
          className="w-full h-full object-cover object-center"
        />

        {/* Soft contrast gradients matching Home page: keeps image vivid while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none" />
      </div>

      {/* ── Main Hero Layout Container — Flush Left End matching Home Page ── */}
      <div className="relative z-10 max-w-[1800px] mx-auto w-full px-4 sm:px-8 md:px-12 pt-20 sm:pt-24 md:pt-28 pb-8 flex-1 flex flex-col justify-center">
        
        {/* Left End Content Grid matching Home Page */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-center my-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 xl:col-span-7 text-left space-y-4 sm:space-y-5"
          >
            {/* 1. Category Tag / Eyebrow Header */}
            <div className="flex items-center gap-2">
              <span 
                className="w-2 h-2 rounded-full animate-pulse" 
                style={{ backgroundColor: 'var(--primary)' }}
              />
              <span 
                className="text-xs sm:text-sm font-bold uppercase tracking-wider"
                style={{ color: 'var(--primary)' }}
              >
                Premium Construction Services in Chennai
              </span>
            </div>

            {/* 2. Main Heading — Exact Home Page Font Size, Uppercase & Leading */}
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[1.12] drop-shadow-md text-left select-none">
              <span className="block text-white">
                Built With Experience,
              </span>
              <span 
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 60%, var(--text-primary) 100%)',
                }}
              >
                Delivered With Precision.
              </span>
            </h1>

            {/* 3. Description Paragraphs with Redirections to Services, About & Gallery */}
            <div className="space-y-2.5 max-w-xs sm:max-w-xl md:max-w-2xl text-left select-none">
              <p className="text-[11px] sm:text-sm md:text-[15px] text-white/90 font-normal leading-relaxed drop-shadow">
                From{' '}
                luxury residences{' '}
                to large-scale{' '}
                commercial developments,{' '}
                <span className="text-white font-semibold transition-colors">
                  Ajay Homes
                </span>{' '}
                delivers premium construction with a focus on quality, precision, transparency, and timely execution.
              </p>
              <p className="text-[11px] sm:text-xs md:text-sm text-white/80 font-normal leading-relaxed drop-shadow">
                With{' '}
                60+ years{' '}
                of industry experience and{' '}
                500+ completed projects, we deliver with 100% client satisfaction, bringing{' '}
                design, engineering, construction, and{' '}
                project management{' '}
                together under one roof.
              </p>
            </div>

            {/* 4. Action Buttons */}
            <div className="pt-2 sm:pt-3 flex flex-wrap items-center justify-start gap-3 sm:gap-4">
              <Button
                onClick={handleDiscussProject}
                variant="primary"
                size="md"
                icon={ArrowRight}
                showIcon={true}
              >
                Discuss Your Project
              </Button>

              <Button
                href="/gallery"
                variant="glass"
                size="md"
              >
                View 500+ Projects
              </Button>
            </div>
          </motion.div>

          {/* Right column empty matching Home Page layout */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />

        </div>

      </div>

    </section>
  );
};

export default ConstructionHero;
