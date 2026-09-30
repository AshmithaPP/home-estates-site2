"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, CheckCircle2 } from 'lucide-react';

export const AboutStorySection = () => {
  const coreValues = [
    'Quality Execution',
    'Complete Transparency',
    'Precision Engineering',
    'Lasting Value',
  ];

  return (
    <section 
      id="about-story"
      className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-white/10 text-[#f0ede8]"
      style={{ 
        background: 'linear-gradient(160deg, #181818 0%, #242424 50%, #1e1e1e 100%)',
        fontFamily: 'Montserrat, sans-serif' 
      }}
    >
      {/* ── Ambient Soft Glow ───────────────────────────────────────── */}
      <div 
        className="absolute top-1/2 -right-32 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #ff8c00 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          
          {/* ── Left Column: Featured Project Residence Image ─────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-[#121212]">
              <img
                src="/images/residence-images/suresh-residence-view/img17.jpg"
                alt="Ajay Homes Landmark Contemporary Residence Project"
                className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-semibold text-white">
                  Contemporary Villa &bull; Chennai
                </div>
                <div className="px-3 py-1 rounded-full bg-[#ff8c00]/90 text-black font-extrabold text-xs shadow-lg">
                  500+ Built
                </div>
              </div>
            </div>

            {/* Ambient Underglow */}
            <div className="absolute -inset-4 bg-[#ff8c00]/10 rounded-3xl blur-2xl -z-10" />
          </motion.div>

          {/* ── Right Column: Story Copy & Narrative ─────────────────── */}
          <div className="lg:col-span-7 text-left">
            {/* ── Section Heading with Vertical Accent Bar ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3.5 sm:gap-4 mb-4"
            >
              <span className="w-1.5 h-8 sm:h-9 lg:h-10 bg-[#ff8c00] rounded-full inline-block shrink-0 shadow-[0_0_12px_rgba(255,140,0,0.5)]" />
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                50+ Years. 500+ Projects.
              </h2>
            </motion.div>

            {/* ── Subtitle / Vision Tagline ──────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 pl-5 sm:pl-5.5"
            >
              <p className="text-base sm:text-lg lg:text-xl font-bold text-[#ff8c00] tracking-wide italic">
                From Vision to Completion.
              </p>
            </motion.div>

            {/* ── Narrative Content Paragraphs ────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 text-sm sm:text-base lg:text-[16px] leading-relaxed text-[#f0ede8]/90 font-normal pl-5 sm:pl-5.5"
            >
              <p>
                We work on projects ranging from premium residences to{' '}
                <span className="text-white font-bold">₹1 Cr+ developments</span>, combining thoughtful design, quality execution, and experienced management.
              </p>

              <p className="text-[#d1d5db]">
                Decades of experience have shaped how we approach every project &mdash; with a focus on{' '}
                <span className="text-white font-semibold">quality</span>,{' '}
                <span className="text-white font-semibold">transparency</span>,{' '}
                <span className="text-white font-semibold">precision</span>, and{' '}
                <span className="text-white font-semibold">lasting value</span>.
              </p>

              {/* Highlight Statement */}
              <div className="pt-3 pb-2 border-l-2 border-[#ff8c00]/60 pl-4 sm:pl-5 my-4 bg-white/[0.02] rounded-r-xl py-3">
                <p className="text-white font-medium text-base sm:text-lg leading-snug">
                  We believe great projects are not simply built. They are carefully planned, managed, and delivered.
                </p>
              </div>
            </motion.div>

            {/* ── Key Focus Pillars ─────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 pt-6 border-t border-white/10 pl-5 sm:pl-5.5 flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              {coreValues.map((val) => (
                <div
                  key={val}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-[#f0ede8] hover:border-[#ff8c00]/40 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff8c00] shrink-0" />
                  <span>{val}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;
