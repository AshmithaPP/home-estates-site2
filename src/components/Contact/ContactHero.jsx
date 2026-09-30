"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import Button from '../UI/Button';

export const ContactHero = () => {
  const bgImage = '/images/residence-images/raman-residence-view/img68.jpg';

  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] h-screen flex flex-col justify-center overflow-hidden">

      {/* ── Single Background Architectural Image (Original Image as it is) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={bgImage}
          alt="Raman Residence Architectural Interior"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ── Left-Aligned Content Container (Matching Home Page Hero Layout) ── */}
      <div className="relative z-10 max-w-[1600px] mx-auto w-full px-5 sm:px-10 lg:px-16 pt-24 sm:pt-28 pb-10 flex-1 flex flex-col justify-center">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 xl:col-span-7 text-left space-y-4 sm:space-y-5"
          >
            {/* 1. Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[50px] font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)]">
              Let’s Build{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #ff8c00 0%, #ffab40 50%, #ffe0b2 100%)',
                }}
              >
                What’s Next.
              </span>
            </h1>

            {/* 2. Subtitle / Paragraph */}
            <p className="text-xs sm:text-sm md:text-base text-white font-medium leading-relaxed max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              Whether you’re planning a new home, developing a property, managing a ₹1 Cr+ project, designing an interior, or looking to buy or sell property, our team is ready to discuss your requirements.
            </p>

            {/* 3. Action Statement with Arrow Icon */}
            <div className="text-xs sm:text-sm font-bold text-[#ffab40] flex items-center justify-start gap-2 pt-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              <ArrowRight className="w-4 h-4 text-[#ff8c00] shrink-0" />
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
            </div>
          </motion.div>

          {/* Right column empty to showcase architectural interior */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />
        </div>

      </div>

    </section>
  );
};

export default ContactHero;
