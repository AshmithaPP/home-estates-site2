"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/UI/Button';

// Opens the site-wide free consultation popup (ConsultationPopup listens for this event)
const openConsultation = () => window.dispatchEvent(new Event('open-consultation'));

/**
 * From Land to a Market-Ready Development Section
 * Pure, distraction-free editorial layout using exact user contents.
 */
export const LandToDevelopmentSection = ({
  id = "land-to-development",
  className = "",
}) => {
  const imageSrc = '/images/residence-images/besantnagar-residence-view/img19.jpg';

  return (
    <section
      id={id}
      className={`relative w-full bg-white text-slate-900 py-16 sm:py-20 lg:py-24 overflow-hidden ${className}`}
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* ── Left Column: Exact Editorial Content (col-span-6) ── */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-left space-y-5"
          >
            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold text-slate-950 tracking-tight leading-snug">
              From Land to a Market-Ready Development
            </h2>

            {/* Exact Content Paragraphs */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-slate-900 text-base sm:text-lg leading-snug">
                A successful layout starts long before development begins.
              </p>
              <p>
                We evaluate the land, understand its potential, plan the development approach, and coordinate the key stages required to create a well-structured layout.
              </p>
              <p>
                With experience across{' '}
                property development,{' '}
                construction,{' '}
                project management, and{' '}
                real estate,{' '}
                Ajay Homes{' '}
                brings multiple capabilities together to manage the development journey.
              </p>
            </div>

            {/* Action CTA Button */}
            <div className="pt-2 sm:pt-4">
              <Button
                onClick={openConsultation}
                variant="primary"
                size="md"
                icon={ArrowRight}
                showIcon={true}
              >
                Discuss Your Land
              </Button>
            </div>
          </motion.div>

          {/* ── Right Column: Clean Architectural Image (col-span-6) ── */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <Link
              href="/gallery"
              className="group block relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 cursor-pointer"
              aria-label="Explore our completed projects in the gallery"
            >
              <img
                src={imageSrc}
                alt="Ajay Homes Land and Layout Property Development"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs font-bold text-white uppercase tracking-wider bg-black/70 px-3 py-1.5 rounded-full backdrop-blur-xs border border-white/20">
                  Explore 500+ Completed Projects &rarr;
                </span>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LandToDevelopmentSection;
