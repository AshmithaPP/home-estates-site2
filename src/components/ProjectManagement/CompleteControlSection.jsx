"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '@/components/UI/Button';

export const CompleteControlSection = ({ onOpenApply }) => {
  // Besant Nagar architectural residence view
  const imageSrc = '/images/residence-images/besantnagar-residence-view/img188.jpg';

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

  const keyHighlights = [
    { title: 'Structured Oversight', desc: 'Pre-vetted protocols from architectural blueprint to handover' },
    { title: 'Transparent Governance', desc: 'Real-time timeline tracking, milestone reviews, and budget discipline' },
    { title: 'Unified Execution', desc: 'Single point of coordination across consultants, vendors, and crews' },
  ];

  return (
    <section 
      id="complete-control"
      className="relative w-full bg-white text-slate-900 py-16 sm:py-20 lg:py-28 overflow-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      {/* ── Right-Side Dark Accent Band (Architectural Split Accent) ── */}
      <div 
        className="hidden md:block absolute right-0 top-0 bottom-0 w-[30%] lg:w-[35%] xl:w-[38%] pointer-events-none"
        style={{ backgroundColor: 'var(--grey-deepest)' }}
      />

      {/* ── Main Layout Container ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          
          {/* ── Left Column: Editorial Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-6 text-left space-y-4 sm:space-y-5"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: 'var(--primary)' }}
              />
              <span 
                className="text-xs font-bold uppercase tracking-wider text-slate-500"
              >
                Executive Project Governance
              </span>
            </div>

            {/* 1. Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-950 tracking-tight leading-[1.2]">
              Complete Control <br className="hidden sm:inline" />
              From Start to Finish
            </h2>

            {/* 2. Narrative Copy Paragraphs — Exact Content Requested */}
            <div className="space-y-3.5 text-xs sm:text-sm md:text-[14.5px] text-slate-600 font-normal leading-relaxed">
              <p>
                Managing a construction or development project involves hundreds of decisions.
              </p>
              <p>
                From coordinating architects and contractors to monitoring materials, timelines, quality, and site progress, every detail can affect the final outcome.
              </p>
              <p>
                Ajay Homes brings these moving parts together through a structured project management approach designed to keep your project organised, transparent, and moving forward.
              </p>
            </div>

            {/* 3. Value Points */}
            <div className="pt-2 space-y-2.5">
              {keyHighlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 
                    className="w-5 h-5 shrink-0 mt-0.5" 
                    style={{ color: 'var(--primary)' }}
                  />
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-slate-900">{item.title}: </span>
                    <span className="text-xs sm:text-sm text-slate-600">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* 4. Action Button */}
            <div className="pt-3 sm:pt-4">
              <Button
                onClick={handleAction}
                variant="primary"
                size="md"
                icon={ArrowRight}
                showIcon={true}
              >
                Discuss Your Project
              </Button>
            </div>
          </motion.div>

          {/* ── Right Column: Architectural Photography Frame ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="md:col-span-6 lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg md:max-w-none">
              {/* Photo Card with Shadow and Border */}
              <div 
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]"
                style={{ backgroundColor: 'var(--grey-base)' }}
              >
                <img
                  src={imageSrc}
                  alt="Ajay Homes Besant Nagar Landmark Project"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/50 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider" style={{ color: 'var(--primary)' }}>
                        On-Site Governance
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        100% Quality & Schedule Adherence
                      </p>
                    </div>
                    <span 
                      className="text-xs font-extrabold px-2.5 py-1 rounded-full text-black"
                      style={{ backgroundColor: 'var(--primary)' }}
                    >
                      ₹1 Cr+ Tier
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CompleteControlSection;
