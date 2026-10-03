"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowUpRight, Headphones } from 'lucide-react';
import Button from '../UI/Button';
import { CONTACT } from '@/data/contactInfo';

export const ProjectInMindSection = ({ onOpenTourModal, onOpenApply }) => {
  const scrollToForm = () => {
    const el = document.getElementById('contact-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenTourModal) {
      onOpenTourModal();
    }
  };

  return (
    <section 
      id="project-in-mind"
      className="section-grey relative w-full text-[var(--text-primary)] py-10 sm:py-12 lg:py-14 overflow-hidden border-t border-[var(--primary)]/20"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-10 text-center md:text-left">

        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-5">
        
          {/* ── Top Icon ──────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-2xl bg-[var(--primary)]/15 border border-[var(--primary)]/35 flex items-center justify-center text-[var(--primary)]"
          >
            <Headphones className="w-5 h-5 stroke-[1.8]" />
          </motion.div>

          <div>

            {/* ── Main Heading ──────────────────────────────────────────── */}
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-xl sm:text-2xl lg:text-[26px] 2xl:text-[30px] font-bold text-white tracking-tight leading-snug"
            >
              Have a Project <span className="text-[var(--primary)]">in Mind?</span>
            </motion.h2>

            {/* ── Subtitle with links ──────────────────────────────────────────────── */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-1.5 text-xs sm:text-sm font-semibold text-white/85"
            >
              Let's turn your idea into a clear next step. Explore our{' '}
              construction,{' '}
              development, or{' '}
              interior design{' '}
              expertise.
            </motion.p>

            {/* Timing Note */}
           
          </div>
        </div>

        {/* ── Action Buttons ─────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="shrink-0 flex flex-wrap items-center justify-center md:justify-end gap-3"
        >
          <Button
            onClick={scrollToForm}
            variant="primary"
            size="md"
            icon={ArrowUpRight}
            showIcon={true}
            className="shadow-lg hover:shadow-xl shadow-[#ff8c00]/25"
          >
            Talk to Ajay Homes
          </Button>

          <Button
            href="/gallery"
            variant="glass"
            size="md"
          >
            Explore 500+ Projects
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectInMindSection;
