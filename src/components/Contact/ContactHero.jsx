"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import Button from '../UI/Button';

export const ContactHero = () => {
  const bgImage = '/images/residence-images/raman-residence-view/img68.jpg';

  return (
    <section className="relative w-full h-screen min-h-[580px] flex items-center justify-center overflow-hidden">
      
      {/* ── Single Background Architectural Image ─────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={bgImage}
          alt="Raman Residence Architectural Interior"
          className="w-full h-full object-cover object-center"
        />

        {/* Cinematic Dark Gradient & Warm Amber Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center 40%, rgba(255, 140, 0, 0.12) 0%, rgba(20, 20, 20, 0.65) 55%, rgba(14, 14, 14, 0.92) 100%), linear-gradient(to bottom, rgba(14, 14, 14, 0.65) 0%, rgba(20, 20, 20, 0.40) 40%, rgba(24, 24, 24, 0.85) 85%, #1e1e1e 100%)',
          }}
        />

        {/* Ambient Top Light Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[320px] opacity-30 blur-[130px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, #ff8c00 0%, transparent 70%)' }}
        />
      </div>

      {/* ── Center Content ────────────────────────────────────────── */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center pt-12 sm:pt-16">

        {/* 1. Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight"
        >
          Let’s Build{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(135deg, #ff8c00 0%, #ffab40 50%, #ffe0b2 100%)',
              textShadow: '0 0 30px rgba(255, 140, 0, 0.35)',
            }}
          >
            What’s Next.
          </span>
        </motion.h1>

        {/* 2. Subtitle / Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xs sm:text-sm md:text-base text-[#f0ede8]/85 font-normal leading-relaxed max-w-2xl mb-4"
        >
          Whether you’re planning a new home, developing a property, managing a ₹1 Cr+ project, designing an interior, or looking to buy or sell property, our team is ready to discuss your requirements.
        </motion.p>

        {/* 3. Action Statement with Arrow Icon */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xs sm:text-sm font-semibold text-[var(--primary-light)] mb-8 flex items-center justify-center gap-2"
        >
          <ArrowRight className="w-4 h-4 text-[var(--primary)] shrink-0" />
          <span>Tell us about your project. Let’s take the first step together.</span>
        </motion.div>

        {/* 4. Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <Button
            href="tel:+919840012345"
            variant="primary"
            size="lg"
            icon={Phone}
            showIcon={true}
          >
            Call: +91 98400 12345
          </Button>

          <Button
            href="mailto:contact@ajayhomes.com"
            variant="glass"
            size="lg"
            icon={Mail}
            showIcon={true}
          >
            contact@ajayhomes.com
          </Button>
        </motion.div>

      </div>

    </section>
  );
};

export default ContactHero;
