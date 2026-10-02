"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight, MessageSquare, Headphones } from 'lucide-react';
import Button from '../UI/Button';

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
      {/* Warm brand glows (static gradients, no blur filter) */}
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,140,0,0.16) 0%, rgba(255,140,0,0.05) 40%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 -bottom-40 w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,171,64,0.10) 0%, transparent 70%)' }}
      />
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
          className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white tracking-tight leading-tight"
        >
          Have a Project <span className="text-[var(--primary)]">in Mind?</span>
        </motion.h2>

        {/* ── Subtitle ──────────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-1.5 text-xs sm:text-sm font-semibold text-white/85"
        >
          Let's turn your idea into a clear next step.
        </motion.p>

        {/* Timing Note */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-0.5 text-[11px] sm:text-xs text-[var(--text-muted)] font-normal"
        >
          Call us anytime between 9:30am – 6:30pm (Mon – Sat)
        </motion.p>
        </div>
        </div>

        {/* ── Action Button: [ Talk to Ajay Homes ] ─────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="shrink-0"
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
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectInMindSection;
