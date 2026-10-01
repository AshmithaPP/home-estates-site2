"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Home, 
  TrendingUp, 
  Briefcase, 
  HardHat, 
  Globe2,
  Compass,
  Layers,
  Wrench,
  Palette,
  KeyRound,
  CheckCircle2
} from 'lucide-react';

/**
 * Requirements Section (2-Card Comparative Grid exact replica of reference UI)
 * Updated per user instructions:
 * - White background (bg-white text-slate-900) maintaining the odd-wise grey/white pattern.
 * - Reduced heading sizes for clean hierarchy.
 * - Reduced card heights and compact padding for a balanced, sleek presentation.
 * - Dynamic color variables from globals.css:
 *     --primary
 *     --primary-dark
 *     --grey-deepest
 *     --font-family-base
 */
export const DifferentRequirementsSection = ({
  id = "different-requirements",
  title = "Built For Different Requirements",
  subtitle = "Whether you are building your first home or executing a ₹1 Cr+ landmark development.",
  className = "",
}) => {
  const clientPills = [
    { label: "Individual Homeowners", icon: Home },
    { label: "Property Owners", icon: Building },
    { label: "Investors", icon: TrendingUp },
    { label: "Businesses", icon: Briefcase },
    { label: "Developers", icon: HardHat },
    { label: "NRI Clients", icon: Globe2 },
  ];

  const capabilityPills = [
    { label: "Architecture", icon: Compass },
    { label: "Construction", icon: Wrench },
    { label: "Project Management", icon: Layers },
    { label: "Property Development", icon: Building },
    { label: "Interiors", icon: Palette },
    { label: "Real Estate", icon: KeyRound },
  ];

  return (
    <section
      id={id}
      className={`relative w-full py-10 sm:py-12 lg:py-14 bg-white text-slate-900 overflow-hidden ${className}`}
      style={{
        fontFamily: 'var(--font-family-base)',
      }}
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header (Compact Sizes) ── */}
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-9">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {title}
          </h2>

          {/* Primary Accent Underline */}
          <div 
            className="w-12 h-1 rounded-full mx-auto mt-2.5 mb-2.5"
            style={{ backgroundColor: 'var(--primary)' }}
          />

          {subtitle && (
            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed text-center whitespace-nowrap overflow-hidden text-ellipsis">
              {subtitle}
            </p>
          )}
        </div>

        {/* ── Two Compact Cards Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-7 items-stretch">
          
          {/* ════════ CARD 1: Built For Different Requirements ════════ */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 transition-all duration-300 border overflow-hidden hover:shadow-xl"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--primary) 3.5%, #f8fafc)',
              borderColor: 'color-mix(in srgb, var(--primary) 22%, #e2e8f0)',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 0 20px -4px color-mix(in srgb, var(--primary) 15%, transparent)',
            }}
          >
            {/* Top Card Info Header with right vertical badge */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <h3 className="text-base sm:text-lg lg:text-[19px] font-bold text-slate-950 tracking-tight leading-snug group-hover:text-[var(--primary-dark)] transition-colors">
                  Built For Different Requirements
                </h3>
                <p className="text-[11.5px] sm:text-xs text-slate-500 mt-0.5 font-normal">
                  We work with diverse clients across residential, commercial, and development sectors.
                </p>
              </div>

              {/* Right Tag Badge */}
              <div 
                className="shrink-0 text-[10.5px] font-bold tracking-wider uppercase pl-2.5 border-l-2 py-0.5 flex items-center"
                style={{
                  color: 'var(--primary-dark)',
                  borderColor: 'var(--primary)',
                }}
              >
                <span>CLIENT PROFILES</span>
              </div>
            </div>

            {/* Middle Feature Image (Compact Height) */}
            <div className="relative w-full aspect-[16/8] sm:aspect-[16/7.5] max-h-[210px] rounded-xl overflow-hidden border border-slate-200/80 shadow-md my-1.5 group-hover:border-[var(--primary)]/70 transition-colors">
              <img
                src="/images/residence-images/suresh-residence-view/img17.jpg"
                alt="Ajay Homes Custom Residence Construction"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
              
              {/* Value Badge Overlay */}
              <div 
                className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold text-slate-950 shadow-sm backdrop-blur-md flex items-center gap-1.5"
                style={{
                  backgroundColor: 'var(--primary)',
                }}
              >
                <CheckCircle2 className="w-3 h-3 text-slate-950" />
                <span>₹1 Cr+ Project Expertise</span>
              </div>
            </div>

            {/* Bottom Content: Pill Tags & Summary */}
            <div className="mt-3.5 space-y-2.5">
              <div className="text-[11px] text-slate-700 font-bold uppercase tracking-wider">
                We work with:
              </div>

              {/* Compact Pill Badges */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {clientPills.map((pill, idx) => {
                  const Icon = pill.icon;
                  return (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium text-slate-700 bg-white border border-slate-200/90 hover:border-[var(--primary)] hover:text-black transition-all cursor-default shadow-xs"
                    >
                      <Icon className="w-3 h-3 text-[var(--primary-dark)]" />
                      <span>{pill.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Editorial Description */}
              <p className="text-xs text-slate-600 font-normal leading-relaxed pt-0.5">
                Whether you are building your first home, developing a premium property, or executing a ₹1 Cr+ project, our team brings the experience and capabilities required to manage the journey.
              </p>
            </div>
          </motion.div>

          {/* ════════ CARD 2: More Than Construction ════════ */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 transition-all duration-300 border overflow-hidden hover:shadow-xl"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--primary) 3.5%, #f8fafc)',
              borderColor: 'color-mix(in srgb, var(--primary) 22%, #e2e8f0)',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 0 20px -4px color-mix(in srgb, var(--primary) 15%, transparent)',
            }}
          >
            {/* Top Card Info Header with right vertical badge */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <h3 className="text-base sm:text-lg lg:text-[19px] font-bold text-slate-950 tracking-tight leading-snug group-hover:text-[var(--primary-dark)] transition-colors">
                  More Than Construction
                </h3>
                <p className="text-[11.5px] sm:text-xs text-slate-500 mt-0.5 font-normal">
                  Construction is one part of what we do.
                </p>
              </div>

              {/* Right Tag Badge */}
              <div 
                className="shrink-0 text-[10.5px] font-bold tracking-wider uppercase pl-2.5 border-l-2 py-0.5 flex items-center"
                style={{
                  color: 'var(--primary-dark)',
                  borderColor: 'var(--primary)',
                }}
              >
                <span>FULL SPECTRUM</span>
              </div>
            </div>

            {/* Middle Feature Image (Compact Height) */}
            <div className="relative w-full aspect-[16/8] sm:aspect-[16/7.5] max-h-[210px] rounded-xl overflow-hidden border border-slate-200/80 shadow-md my-1.5 group-hover:border-[var(--primary)]/70 transition-colors">
              <img
                src="/images/residence-images/natraj-residence/img102.jpg"
                alt="Ajay Homes Architectural Design & Luxury Interiors"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />

              {/* Value Badge Overlay */}
              <div 
                className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold text-slate-950 shadow-sm backdrop-blur-md flex items-center gap-1.5"
                style={{
                  backgroundColor: 'var(--primary)',
                }}
              >
                <CheckCircle2 className="w-3 h-3 text-slate-950" />
                <span>End-to-End Capabilities</span>
              </div>
            </div>

            {/* Bottom Content: Pill Tags & Summary */}
            <div className="mt-3.5 space-y-2.5">
              <div className="text-[11px] text-slate-700 font-bold uppercase tracking-wider">
                Integrated Capabilities:
              </div>

              {/* Compact Pill Badges */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {capabilityPills.map((pill, idx) => {
                  const Icon = pill.icon;
                  return (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium text-slate-700 bg-white border border-slate-200/90 hover:border-[var(--primary)] hover:text-black transition-all cursor-default shadow-xs"
                    >
                      <Icon className="w-3 h-3 text-[var(--primary-dark)]" />
                      <span>{pill.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Editorial Description & Punchline */}
              <div className="space-y-1 pt-0.5">
                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  With capabilities across architecture, construction, project management, property development, interiors, and real estate, Ajay Homes can support your property journey through multiple stages.
                </p>
                <p 
                  className="text-xs font-bold tracking-wide"
                  style={{ color: 'var(--primary-dark)' }}
                >
                  One team. Multiple capabilities. Complete project support.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default DifferentRequirementsSection;
