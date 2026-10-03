"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import Button from '../UI/Button';

export const ContactHero = () => {
  const bgImage = '/images/residence-images/raman-residence-view/img68.jpg';

  return (
    <section 
      id="contact-hero"
      className="relative w-full h-screen min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      {/* ── Single Background Architectural Image (Original Image as it is) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={bgImage}
          alt="Raman Residence Architectural Interior"
          className="w-full h-full object-cover object-center"
        />

        {/* Soft contrast gradients matching Home page: keeps image vivid while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent pointer-events-none" />
      </div>

      {/* ── Main Hero Layout Container — Flush Left End matching Home Page ── */}
      <div className="relative z-10 max-w-[1800px] mx-auto w-full px-4 sm:px-12 pt-20 sm:pt-28 pb-6 flex-1 flex flex-col justify-center">

        {/* Left End Content Grid matching Home Page */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-center my-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-6 text-left space-y-4 sm:space-y-5"
          >
            {/* 1. Main Headline — Exact Home Page Font Size, Uppercase & Leading */}
            <h1 className="text-[17px] min-[380px]:text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[1.12] drop-shadow-md text-left whitespace-nowrap">
              <span className="text-white">
                Let’s Build
              </span>{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 60%, var(--text-primary) 100%)',
                }}
              >
                What’s Next.
              </span>
            </h1>

            {/* 2. Subtitle / Paragraph with Redirection to Respective Service Pages */}
            <p className="text-[11px] sm:text-sm md:text-[15px] text-white/90 font-normal max-w-xs sm:max-w-lg md:max-w-xl leading-relaxed drop-shadow text-left">
              Whether you’re{' '}
              <Link href="/services/construction" className="text-white font-medium hover:text-[var(--primary)] transition-colors underline decoration-white/40 underline-offset-2">
                planning a new home
              </Link>
              ,{' '}
              <Link href="/services/property-developer" className="text-white font-medium hover:text-[var(--primary)] transition-colors underline decoration-white/40 underline-offset-2">
                developing a property
              </Link>
              ,{' '}
              <Link href="/services/project-management" className="text-white font-medium hover:text-[var(--primary)] transition-colors underline decoration-white/40 underline-offset-2">
                managing a ₹1 Cr+ project
              </Link>
              ,{' '}
              <Link href="/services/interior-design" className="text-white font-medium hover:text-[var(--primary)] transition-colors underline decoration-white/40 underline-offset-2">
                designing an interior
              </Link>
              , or looking to{' '}
              <Link href="/services/real-estate" className="text-white font-medium hover:text-[var(--primary)] transition-colors underline decoration-white/40 underline-offset-2">
                buy or sell property
              </Link>
              , our team is ready to discuss your requirements.
            </p>

            {/* 3. Action Statement with Arrow Icon */}
            <div className="text-xs sm:text-sm font-bold text-[var(--primary-light)] flex items-center justify-start gap-2 pt-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              <ArrowRight className="w-4 h-4 text-[var(--primary)] shrink-0" />
              <span>Tell us about your project. Let’s take the first step together.</span>
            </div>

            {/* 4. Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-start gap-3 sm:gap-4">
              <Button
                href="tel:+919840012345"
                variant="primary"
                size="md"
                icon={Phone}
                showIcon={true}
              >
                Call: +91 98400 12345
              </Button>

              <Button
                href="mailto:contact@ajayhomes.com"
                variant="glass"
                size="md"
                icon={Mail}
                showIcon={true}
              >
                contact@ajayhomes.com
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

          {/* Right column empty to showcase architectural interior matching Home Page layout */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />
        </div>

      </div>

    </section>
  );
};

export default ContactHero;
