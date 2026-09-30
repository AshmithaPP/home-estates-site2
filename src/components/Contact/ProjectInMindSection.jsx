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
      className="relative w-full bg-white text-[#1f2937] py-12 sm:py-16 lg:py-20 overflow-hidden border-t border-black/5"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      {/* Ambient background soft glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[280px] rounded-full blur-[120px] pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, #fff7ed 0%, #ffedd5 50%, transparent 80%)' }}
      />

      <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center relative z-10 flex flex-col items-center">
        
        {/* ── Top Icon (Matching Reference Headset Icon with Brand Accent) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-10 h-10 rounded-full bg-[#fff7ed] border border-[#ffedd5] flex items-center justify-center text-[#ff8c00] mb-3.5 shadow-xs"
        >
          <Headphones className="w-4.5 h-4.5 stroke-[1.8]" />
        </motion.div>

        {/* ── Main Heading ──────────────────────────────────────────── */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-[30px] font-bold text-[#111827] tracking-tight leading-tight"
        >
          Have a Project in Mind?
        </motion.h2>

        {/* ── Subtitle ──────────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-2 text-sm sm:text-base font-semibold text-[#374151]"
        >
          Let's turn your idea into a clear next step.
        </motion.p>

        {/* Timing Note */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-1 text-xs text-[#71717a] font-normal"
        >
          Call us anytime between 9:30am – 6:30pm (Mon – Sat)
        </motion.p>

        {/* ── Card (Exact Reference Card with Dotted Divider) ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl border border-gray-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.04)] mt-6 overflow-hidden text-left"
        >
          {/* Email Row */}
          <a
            href="mailto:contact@ajayhomes.com"
            className="flex items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4 hover:bg-[#fffbf5] transition-colors group"
          >
            <span className="text-xs sm:text-sm font-semibold text-[#1f2937] group-hover:text-[#ff8c00] transition-colors">
              contact@ajayhomes.com
            </span>
            <Mail className="w-4.5 h-4.5 text-[#ff8c00] shrink-0" />
          </a>

          {/* Dotted Divider Line (Exact Reference) */}
          <div className="border-t border-dashed border-gray-200" />

          {/* Phone Row */}
          <a
            href="tel:+919840012345"
            className="flex items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4 hover:bg-[#fffbf5] transition-colors group"
          >
            <span className="text-xs sm:text-sm font-semibold text-[#1f2937] group-hover:text-[#ff8c00] transition-colors">
              +91 98400 12345
            </span>
            <Phone className="w-4.5 h-4.5 text-[#ff8c00] shrink-0" />
          </a>
        </motion.div>

        {/* ── Action Button: [ Talk to Ajay Homes ] ─────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6"
        >
          <Button
            onClick={scrollToForm}
            variant="primary"
            size="md"
            icon={ArrowUpRight}
            showIcon={true}
            className="shadow-xl hover:shadow-2xl shadow-[#ff8c00]/25"
          >
            Talk to Ajay Homes
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectInMindSection;
