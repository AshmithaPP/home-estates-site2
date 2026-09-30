"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Minimal outline SVG icons matching exact reference
const PiggyRupeeIcon = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M19 11a4.5 4.5 0 0 0-4.5-4.5H9A4.5 4.5 0 0 0 4.5 11c0 2 1.3 3.7 3.1 4.3L7 19h2.5l.8-2h3.4l.8 2H17l-.6-3.7c1.8-.6 3.1-2.3 3.1-4.3z" />
    <circle cx="7.5" cy="11" r="0.5" fill="currentColor" />
    <path d="M11 9h3" />
    <path d="M11 10.5h2.5" />
    <path d="M11 9v3" />
    <path d="M11 10.5a1.2 1.2 0 0 0 1.2-1.2" />
    <path d="M11.5 12l2 2" />
  </svg>
);

const AlarmClockIcon = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <circle cx="12" cy="13" r="7.5" />
    <path d="M12 9.5v3.5l2.5 1.5" />
    <path d="M5 3.5L2.5 6" />
    <path d="M19 3.5l2.5 2.5" />
    <path d="M6.5 19.5L5 21" />
    <path d="M17.5 19.5L19 21" />
  </svg>
);

const ShieldCheckIcon = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const LayersIcon = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M12 2 2 7l10 5 10-5-10-5Z" />
    <path d="m2 17 10 5 10-5" />
    <path d="m2 12 10 5 10-5" />
  </svg>
);

// Card Icons matching exact OYO Reference 4 (Document/GST, Invoice/Currency, Pie Chart, Mobile, 24h Support)
const DocumentIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const InvoiceIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="9" y1="7" x2="15" y2="7" />
    <line x1="9" y1="11" x2="13" y2="11" />
    <line x1="9" y1="15" x2="15" y2="15" />
  </svg>
);

const PieChartIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </svg>
);

const MobileAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="6" y="2" width="12" height="20" rx="3" />
    <line x1="11" y1="18" x2="13" y2="18" />
  </svg>
);

const SupportIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

export const WhyStartSection = () => {
  // ── ROW 1: Content matching Reference 1 ────────────────────────────
  const promises = [
    {
      title: '50+ Years',
      subtitle: 'Industry Experience',
      desc: 'Over five decades of uncompromised structural craftsmanship, ethical property development, and generational trust across South India.',
      icon: PiggyRupeeIcon,
    },
    {
      title: '500+ Projects',
      subtitle: 'Completed Projects',
      desc: 'Proven track record of delivering bespoke individual villas, boutique residential communities, and commercial developments on schedule.',
      icon: AlarmClockIcon,
    },
    {
      title: '₹1 Cr+',
      subtitle: 'Premium Project Experience',
      desc: 'Specialized mastery in high-value custom residences, luxury duplexes, and prestigious gated developments with artisan detailing.',
      icon: ShieldCheckIcon,
    },
    {
      title: 'End-to-End',
      subtitle: 'Property Expertise',
      desc: 'Complete property solutions from initial site analysis and CMDA / DTCP approvals to turnkey construction and bespoke interiors.',
      icon: LayersIcon,
    },
  ];

  // ── ROW 2: Features inside the Right Elevated Card matching exact OYO Reference 4
  const features = [
    {
      text: 'Construction & Turnkey Execution',
      badge: 'ONE TEAM',
      icon: DocumentIcon,
    },
    {
      text: 'Property Development & Layout Promotion',
      icon: InvoiceIcon,
    },
    {
      text: 'Dedicated Project Management & Clear Titles',
      icon: PieChartIcon,
    },
    {
      text: 'Bespoke Interior Designing & Custom Finishes',
      icon: MobileAppIcon,
    },
    {
      text: 'Real Estate Advisory & Handover Support',
      icon: SupportIcon,
    },
  ];

  return (
    <section 
      id="why-start"
      className="relative w-full bg-white text-[#1f2937] overflow-hidden py-14 sm:py-18 lg:py-20"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      {/* Symmetrical Container: Balanced, luxury spacing */}
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* ═════════════════════════════════════════════════════════════
            SECTION 1: "Why Start With Ajay Homes?"
           ═════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ── LEFT: Title & Promises List (5 cols) ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5 sm:space-y-6"
          >
            {/* Main Section Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#1f2937] tracking-tight leading-snug text-left">
              Why Start With Ajay Homes?
            </h2>

            {/* List with Standalone Outline Icons */}
            <div className="space-y-4 sm:space-y-4.5 pt-0.5">
              {promises.map((item) => {
                const IconComp = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3.5 sm:gap-4 group"
                  >
                    {/* Standalone Line Icon */}
                    <div className="pt-0.5 text-[#374151] group-hover:text-[#ff8c00] transition-colors shrink-0">
                      <IconComp className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[1.5]" />
                    </div>

                    {/* Text Details */}
                    <div className="space-y-0.5">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-sm sm:text-base font-bold text-[#111827]">
                          {item.title}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-[#4b5563]">
                          — {item.subtitle}
                        </span>
                      </div>
                      
                      <p className="text-xs sm:text-[12.5px] text-[#666666] font-normal leading-relaxed max-w-md">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ── RIGHT: Home Related Isometric Villa ───────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative flex items-center justify-center lg:justify-end"
          >
            {/* Organic Fluid Curved Shape in Brand Warm Amber Glow */}
            <div 
              className="absolute -inset-6 sm:-inset-8 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, rgba(255, 140, 0, 0.10) 0%, rgba(255, 171, 64, 0.04) 55%, transparent 75%)',
                borderRadius: '58% 42% 65% 35% / 45% 55% 45% 55%',
                transform: 'scale(1.15)',
              }}
            />

            {/* 3D Isometric Home Illustration */}
            <div className="relative z-10 w-full flex items-center justify-center lg:justify-end">
              <img
                src="/images/why-start-isometric.png"
                alt="Ajay Homes Luxury Residential Villa"
                className="w-full max-w-[460px] sm:max-w-[520px] lg:max-w-[560px] h-auto object-contain drop-shadow-[0_15px_35px_rgba(255,140,0,0.12)] transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>


        {/* ═════════════════════════════════════════════════════════════
            SECTION 2: "From Bhoomi Pooja to House Warming"
            Tightened vertical margin and refined padding
           ═════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-12 sm:mt-16 lg:mt-20 pt-10 sm:pt-14 border-t border-gray-100/90">
          
          {/* ── LEFT: Entrance Illustration ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative flex items-center justify-center lg:justify-start order-2 lg:order-1"
          >
            {/* Organic Fluid Curved Shape in Brand Warm Amber Glow */}
            <div 
              className="absolute -inset-6 sm:-inset-8 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, rgba(255, 140, 0, 0.10) 0%, rgba(255, 171, 64, 0.04) 55%, transparent 75%)',
                borderRadius: '42% 58% 36% 64% / 55% 40% 60% 45%',
                transform: 'scale(1.15)',
              }}
            />

            {/* Entrance 3D Isometric Illustration */}
            <div className="relative z-10 w-full flex items-center justify-center lg:justify-start">
              <img
                src="/images/bhoomi-to-housewarming-isometric.png"
                alt="From Bhoomi Pooja to House Warming Entrance"
                className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] h-auto object-contain drop-shadow-[0_15px_35px_rgba(255,140,0,0.12)] transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* ── RIGHT: Heading & Exact Replica Card (5 cols) ─────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 order-1 lg:order-2 space-y-4 sm:space-y-5"
          >
            {/* Section Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#1f2937] tracking-tight leading-snug text-left">
              From Bhoomi Pooja to House Warming
            </h2>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm md:text-[15px] text-[#4b5563] font-medium leading-relaxed max-w-lg text-left">
              From the first conversation to the final handover, Ajay Homes can support your property journey with experience across construction, development, project management, interiors, and real estate.
            </p>

            {/* EXACT Replica Elevated Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#e5e7eb]/80 space-y-4">
              {features.map((feat) => {
                const IconComp = feat.icon;

                return (
                  <div 
                    key={feat.text}
                    className="flex items-center gap-3.5 sm:gap-4 group"
                  >
                    {/* Standalone Line Icon */}
                    <div className="text-[#374151] group-hover:text-[#ff8c00] transition-colors shrink-0">
                      <IconComp className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[1.5]" />
                    </div>

                    {/* Text & Badge */}
                    <div className="flex-1 flex items-center justify-between gap-3">
                      <span className="text-xs sm:text-[13px] font-medium text-[#2d3748] group-hover:text-[#111827] transition-colors leading-snug">
                        {feat.text}
                      </span>

                      {/* Pill Badge */}
                      {feat.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold tracking-wider uppercase bg-[#111827] text-white shrink-0 shadow-xs">
                          {feat.badge}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tagline */}
            <div className="pt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff8c00]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111827]">
                One team. Every stage.
              </span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhyStartSection;
