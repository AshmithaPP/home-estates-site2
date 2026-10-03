"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, CheckCircle2 } from 'lucide-react';

export const AboutStorySection = () => {
  const coreValues = [
    { label: 'Quality Execution', href: '/services/construction' },
    { label: 'Complete Transparency', href: '/services/project-management' },
    { label: 'Precision Engineering', href: '/services/property-developer' },
    { label: 'Lasting Value', href: '/gallery' },
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
            <Link href="/gallery" className="block relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-[#121212] cursor-pointer">
              <img
                src="/images/residence-images/suresh-residence-view/img17.jpg"
                alt="Ajay Homes Landmark Contemporary Residence Project"
                className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 flex items-center justify-between gap-2 pointer-events-none">
                <div className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-semibold text-white truncate min-w-0">
                  Contemporary Villa &bull; Chennai
                </div>
                <div className="px-2.5 py-1 sm:px-3 rounded-full bg-[#ff8c00]/90 text-black font-extrabold text-[10px] sm:text-xs shadow-lg whitespace-nowrap shrink-0">
                  500+ Projects
                </div>
              </div>
            </Link>

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
              
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold text-white tracking-tight leading-tight">
                <Link href="/services/construction" className="hover:text-[#ff8c00] transition-colors">60+ Years.</Link>{' '}
                <Link href="/gallery" className="hover:text-[#ff8c00] transition-colors">500+ Projects.</Link>
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
              <Link href="/services/construction" className="inline-block group">
                <p className="text-base sm:text-lg lg:text-xl font-bold text-[#ff8c00] tracking-wide italic group-hover:underline underline-offset-4 decoration-[#ff8c00]/60 transition-all">
                  From Vision to Completion.
                </p>
              </Link>
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
                <Link href="/services/property-developer" className="text-white font-bold hover:text-[#ff8c00] transition-colors underline decoration-white/30 underline-offset-2">₹1 Cr+ developments</Link>, combining thoughtful design, quality execution, and experienced management.
              </p>

              <p className="text-[#d1d5db]">
                Decades of experience have shaped how we approach every project &mdash; with a focus on{' '}
                <Link href="/services/construction" className="text-white font-semibold hover:text-[#ff8c00] transition-colors">quality</Link>,{' '}
                <Link href="/services/project-management" className="text-white font-semibold hover:text-[#ff8c00] transition-colors">transparency</Link>,{' '}
                <Link href="/services/property-developer" className="text-white font-semibold hover:text-[#ff8c00] transition-colors">precision</Link>, and{' '}
                <Link href="/gallery" className="text-white font-semibold hover:text-[#ff8c00] transition-colors">lasting value</Link>.
              </p>

              {/* Highlight Statement */}
              <Link href="/contact" className="block pt-3 pb-2 border-l-2 border-[#ff8c00]/60 pl-4 sm:pl-5 my-4 bg-white/[0.02] hover:bg-white/[0.05] rounded-r-xl py-3 transition-colors group cursor-pointer">
                <p className="text-white font-medium text-base sm:text-lg leading-snug group-hover:text-white transition-colors">
                  We believe great projects are not simply built. They are carefully planned, managed, and delivered.
                </p>
              </Link>
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
                <Link
                  key={val.label}
                  href={val.href}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-[#f0ede8] hover:border-[#ff8c00]/60 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff8c00] shrink-0" />
                  <span>{val.label}</span>
                </Link>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;
