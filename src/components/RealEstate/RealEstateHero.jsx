"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/UI/Button';

export const RealEstateHero = ({ onOpenApply }) => {
  // Bg image specifically requested by user: shasthri-nagar-adyar/img64.jpg
  const bgImage = '/images/residence-images/shasthri-nagar-adyar/img64.jpg';

  const handleDiscuss = () => {
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
      id="real-estate-hero"
      className="relative w-full h-[100dvh] min-h-[540px] sm:min-h-[620px] lg:min-h-[700px] flex items-center overflow-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      {/* ── Background Architectural Image with gentle contrast overlays ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={bgImage}
          alt="Real Estate Buying & Selling Services in Chennai — Ajay Homes"
          className="w-full h-full object-cover object-center"
        />

        {/* Soft contrast gradients matching Home, About & Services heroes */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none" />
      </div>

      {/* ── Main Hero Layout Container ── */}
      <div className="relative z-10 max-w-[1800px] mx-auto w-full px-4 sm:px-8 md:px-12 pt-20 sm:pt-24 md:pt-28 pb-8 flex-1 flex flex-col justify-center">
        
        {/* Left End Content Grid matching other service pages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-center my-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 xl:col-span-7 text-left space-y-4 sm:space-y-5"
          >
            {/* 1. Category Tag / Eyebrow Header (No decorative dots as requested) */}
            <div>
              <span 
                className="text-xs sm:text-sm font-bold uppercase tracking-wider"
                style={{ color: 'var(--primary)' }}
              >
                Real Estate Buying & Selling Services in Chennai
              </span>
            </div>

            {/* 2. Main Heading */}
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[1.12] drop-shadow-md text-left select-none">
              <span className="block text-white">
                Buy With Clarity.
              </span>
              <span 
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 60%, var(--text-primary) 100%)',
                }}
              >
                Sell With Confidence.
              </span>
            </h1>

            {/* 3. Description Paragraphs — Exact Content requested by user */}
            <div className="space-y-2.5 max-w-xs sm:max-w-xl md:max-w-2xl text-left select-none">
              <p className="text-[11px] sm:text-sm md:text-[15px] text-white/90 font-normal leading-relaxed drop-shadow">
                Ajay Homes provides professional real estate support for clients looking to buy, sell, or invest in property in Chennai.
              </p>
              <p className="text-[11px] sm:text-xs md:text-sm text-white/80 font-normal leading-relaxed drop-shadow">
                Whether you are searching for your next home, selling an existing property, exploring an investment, or managing property from overseas, our team helps you navigate the process with experience and practical market understanding.
              </p>
            </div>

            {/* 4. Action Button (Pill Button using dynamic theme variables) */}
            <div className="pt-2 sm:pt-3 flex items-center justify-start">
              <Button
                onClick={handleDiscuss}
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
      </div>
    </section>
  );
};

export default RealEstateHero;
