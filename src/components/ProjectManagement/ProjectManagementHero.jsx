"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../UI/Button';

export const ProjectManagementHero = ({ onOpenApply }) => {
  // Bhaskar Residence View requested by user
  const bgImage = '/images/residence-images/r3-brc-views/img4.jpg';

  const handleDiscussProject = () => {
    if (onOpenApply) {
      onOpenApply();
    } else {
      const el = document.getElementById('contact-form') || document.getElementById('project-management-content');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="project-management-hero"
      className="relative w-full h-[100dvh] min-h-[540px] sm:min-h-[620px] lg:min-h-[700px] flex items-center overflow-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      {/* ── Background Architectural Image (img4.jpg) with gentle contrast overlays ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={bgImage}
          alt="Project Management Services in Chennai — Ajay Homes & Estates"
          className="w-full h-full object-cover object-center"
        />

        {/* Soft contrast gradients matching Home, About & Construction heroes: keeps image vivid while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none" />
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

            {/* 2. Main Heading — Exact Home & Services Font Size, Uppercase & Leading */}
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[1.12] drop-shadow-md text-left select-none">
              <span className="block text-white">
                Your Project.
              </span>
              <span 
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 60%, var(--text-primary) 100%)',
                }}
              >
                Professionally Managed.
              </span>
            </h1>

            {/* 3. Description Paragraphs — Exact Content requested by user */}
            <div className="space-y-2.5 max-w-xs sm:max-w-xl md:max-w-2xl text-left select-none">
              <p className="text-[11px] sm:text-sm md:text-[15px] text-white/90 font-normal leading-relaxed drop-shadow">
                A premium project needs more than good design and construction. It needs planning, coordination, supervision, and control at every stage.
              </p>
              <p className="text-[11px] sm:text-xs md:text-sm text-white/80 font-normal leading-relaxed drop-shadow">
                <Link href="/about-us" className="text-white font-semibold hover:text-[var(--primary)] underline decoration-white/30 underline-offset-2 transition-colors">Ajay Homes</Link> provides end-to-end project management for{' '}
                <Link href="/services/construction" className="text-white font-medium hover:text-[var(--primary)] underline decoration-white/30 underline-offset-2 transition-colors">residential</Link>,{' '}
                <Link href="/services/property-developer" className="text-white font-medium hover:text-[var(--primary)] underline decoration-white/30 underline-offset-2 transition-colors">commercial</Link>, and{' '}
                <Link href="/gallery" className="text-white font-medium hover:text-[var(--primary)] underline decoration-white/30 underline-offset-2 transition-colors">high-value developments</Link>, helping clients manage people, materials, budgets, timelines, and execution through one experienced team.
              </p>
            </div>

            {/* 4. Action Button (Pill Button using dynamic theme variables) */}
            <div className="pt-2 sm:pt-3 flex items-center justify-start">
              <Button
                onClick={handleDiscussProject}
                variant="primary"
                size="md"
                icon={ArrowRight}
                showIcon={true}
              >
                Discuss Your Project
              </Button>
            </div>
          </motion.div>

          {/* Right column empty matching Home & About Page layouts */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />

        </div>

      </div>

    </section>
  );
};

export default ProjectManagementHero;
