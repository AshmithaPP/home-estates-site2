"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/UI/Button';

export const BuiltForNextSection = ({ onOpenApply }) => {
  return (
    <section 
      id="built-for-next"
      className="relative w-full bg-white text-[#1f2937] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-black/5 min-h-[360px] sm:min-h-[400px] lg:min-h-[440px] flex items-center justify-center"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      {/* ── Soft Floor Horizon Curve (Matching Reference Banner) ─────── */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-16 sm:h-20 lg:h-24 pointer-events-none" 
        viewBox="0 0 1440 100" 
        preserveAspectRatio="none"
        fill="none"
      >
        <path 
          d="M0,25 Q720,95 1440,25 L1440,100 L0,100 Z" 
          fill="#faede8" 
          opacity="0.55" 
        />
      </svg>

      {/* ── Subtle Ambient Warm Radial Glow ─────────────────────────── */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full blur-[160px] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #fff7ed 0%, #ffedd5 40%, transparent 75%)' }}
      />

      {/* ═══════════════════════════════════════════════════════════════
          FAR LEFT END: 2D Vector Home (Substantially Reduced Size)
         ═══════════════════════════════════════════════════════════════ */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute left-0 bottom-0 z-10 w-[140px] sm:w-[190px] md:w-[240px] lg:w-[280px] xl:w-[320px] 2xl:w-[350px] pointer-events-none select-none flex items-end justify-start"
      >
        <svg 
          viewBox="0 0 460 400" 
          className="w-full h-auto drop-shadow-[0_10px_24px_rgba(0,0,0,0.04)]" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Floor Shadow Oval */}
          <ellipse cx="220" cy="365" rx="210" ry="24" fill="#faede8" />

          {/* Background Architectural Drafting Lines */}
          <g stroke="#f0dcd3" strokeWidth="1.6" strokeLinecap="round">
            {/* Sun & Skyline Radiance */}
            <circle cx="95" cy="75" r="42" strokeDasharray="4 3" />
            <line x1="95" y1="20" x2="95" y2="28" />
            <line x1="95" y1="122" x2="95" y2="130" />
            <line x1="40" y1="75" x2="48" y2="75" />
            <line x1="142" y1="75" x2="150" y2="75" />
            
            {/* Tall Garden Tree Silhouette in Background */}
            <path d="M45 350V160C25 130 25 90 50 65C75 40 115 50 125 80C140 60 170 70 175 95C180 125 160 155 140 170V350" strokeWidth="1.6" />
            <path d="M50 160L90 125M90 125L125 145" strokeWidth="1.4" />

            {/* Boundary baseline */}
            <line x1="10" y1="350" x2="445" y2="350" strokeWidth="2.5" />
            {/* Fence slats */}
            <line x1="15" y1="320" x2="15" y2="350" />
            <line x1="35" y1="320" x2="35" y2="350" />
            <line x1="55" y1="320" x2="55" y2="350" />
            <line x1="75" y1="320" x2="75" y2="350" />
            <line x1="15" y1="328" x2="95" y2="328" strokeWidth="1.8" />
          </g>

          {/* Grand Modern Scandinavian Home */}
          {/* Main House Body */}
          <rect x="115" y="165" width="225" height="185" rx="4" fill="#ffffff" stroke="#1f2937" strokeWidth="3.5" />

          {/* Pitched Roof */}
          <polygon points="228,50 355,165 100,165" fill="#1f2937" />
          <line x1="92" y1="165" x2="362" y2="165" stroke="#ff8c00" strokeWidth="6" strokeLinecap="round" />
          {/* Roof Ridge Peak Highlight */}
          <polygon points="228,50 228,64 240,74 228,50" fill="#ff8c00" />

          {/* Modern Chimney */}
          <rect x="275" y="70" width="28" height="60" fill="#1f2937" />
          <rect x="270" y="64" width="38" height="8" rx="1" fill="#ff8c00" />

          {/* Attic Architectural Round Window */}
          <circle cx="228" cy="125" r="20" fill="#fff7ed" stroke="#1f2937" strokeWidth="3" />
          <line x1="228" y1="105" x2="228" y2="145" stroke="#ff8c00" strokeWidth="2.5" />
          <line x1="208" y1="125" x2="248" y2="125" stroke="#ff8c00" strokeWidth="2.5" />

          {/* First Floor Window Left */}
          <rect x="138" y="185" width="46" height="52" rx="2" fill="#fff7ed" stroke="#1f2937" strokeWidth="2.5" />
          <line x1="161" y1="185" x2="161" y2="237" stroke="#ff8c00" strokeWidth="2" />
          <line x1="138" y1="211" x2="184" y2="211" stroke="#ff8c00" strokeWidth="2" />

          {/* First Floor Window Right */}
          <rect x="268" y="185" width="46" height="52" rx="2" fill="#fff7ed" stroke="#1f2937" strokeWidth="2.5" />
          <line x1="291" y1="185" x2="291" y2="237" stroke="#ff8c00" strokeWidth="2" />
          <line x1="268" y1="211" x2="314" y2="211" stroke="#ff8c00" strokeWidth="2" />

          {/* Ground Floor Large Panoramic Picture Window */}
          <rect x="138" y="260" width="70" height="68" rx="2" fill="#fff7ed" stroke="#1f2937" strokeWidth="2.5" />
          <line x1="173" y1="260" x2="173" y2="328" stroke="#ff8c00" strokeWidth="2.5" />
          <line x1="138" y1="294" x2="208" y2="294" stroke="#1f2937" strokeWidth="2" />

          {/* Front Entrance Porch & Door */}
          {/* Canopy in Brand Amber */}
          <path d="M245 252H305" stroke="#ff8c00" strokeWidth="5" strokeLinecap="round" />
          <rect x="254" y="256" width="42" height="94" rx="2" fill="#ff8c00" stroke="#1f2937" strokeWidth="2.5" />
          <circle cx="286" cy="305" r="3" fill="#1f2937" />
          {/* Glass Door Sidelight */}
          <rect x="262" y="266" width="26" height="36" rx="1" fill="#fff7ed" stroke="#1f2937" strokeWidth="2" />

          {/* Entrance Steps */}
          <rect x="244" y="350" width="62" height="5" fill="#1f2937" />
          <rect x="238" y="355" width="74" height="6" fill="#e5e7eb" stroke="#1f2937" strokeWidth="2" />

          {/* Stone Pathway */}
          <ellipse cx="275" cy="372" rx="18" ry="5" fill="#e5e7eb" stroke="#1f2937" strokeWidth="1.5" />
          <ellipse cx="292" cy="385" rx="20" ry="6" fill="#e5e7eb" stroke="#1f2937" strokeWidth="1.5" />

          {/* Potted Topiary Plants at Entrance */}
          <rect x="228" y="325" width="14" height="16" rx="1" fill="#1f2937" />
          <circle cx="235" cy="315" r="14" fill="#ff8c00" />
          <circle cx="235" cy="315" r="8" fill="#ffab40" />

          <rect x="306" y="325" width="14" height="16" rx="1" fill="#1f2937" />
          <circle cx="313" cy="315" r="14" fill="#1f2937" />

          {/* Modern Garage / Pergola Wing on Right */}
          <path d="M340 245H420V350H340" stroke="#1f2937" strokeWidth="3" fill="#ffffff" />
          <line x1="335" y1="245" x2="425" y2="245" stroke="#ff8c00" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="360" y1="245" x2="360" y2="350" stroke="#ff8c00" strokeWidth="2.5" strokeDasharray="4 3" />
          <line x1="385" y1="245" x2="385" y2="350" stroke="#ff8c00" strokeWidth="2.5" strokeDasharray="4 3" />
          <line x1="410" y1="245" x2="410" y2="350" stroke="#ff8c00" strokeWidth="2.5" strokeDasharray="4 3" />
        </svg>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════
          FAR RIGHT END: 2D Vector Luxury Villa (Substantially Reduced Size)
         ═══════════════════════════════════════════════════════════════ */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute right-0 bottom-0 z-10 w-[140px] sm:w-[190px] md:w-[240px] lg:w-[280px] xl:w-[320px] 2xl:w-[350px] pointer-events-none select-none flex items-end justify-end"
      >
        <svg 
          viewBox="0 0 480 400" 
          className="w-full h-auto drop-shadow-[0_10px_24px_rgba(0,0,0,0.04)]" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Floor Shadow Oval */}
          <ellipse cx="250" cy="365" rx="220" ry="24" fill="#faede8" />

          {/* Background Architectural Drafting Lines & Tall Palm */}
          <g stroke="#f0dcd3" strokeWidth="1.6" strokeLinecap="round">
            {/* Skyline / Cloud Art */}
            <path d="M330 65C320 40 280 45 270 65C250 65 240 85 250 105H370C388 105 395 85 375 75C370 55 345 50 330 65Z" strokeDasharray="4 3" />

            {/* Tall Tropical Palm Tree */}
            <path d="M430 350C420 280 425 180 440 70" strokeWidth="4" stroke="#1f2937" />
            {/* Palm Fronds Reaching High */}
            <path d="M440 70C415 45 370 50 340 70" strokeWidth="3" stroke="#1f2937" />
            <path d="M440 70C430 35 390 20 365 30" strokeWidth="2.5" stroke="#ff8c00" />
            <path d="M440 70C455 35 480 25 505 45" strokeWidth="2.5" stroke="#1f2937" />
            <path d="M440 70C465 50 495 70 510 100" strokeWidth="3" stroke="#ff8c00" />

            {/* Boundary baseline */}
            <line x1="30" y1="350" x2="475" y2="350" strokeWidth="2.5" />
          </g>

          {/* Grand Luxury 2-Story Modern Architectural Villa */}
          {/* Ground Floor Base Block */}
          <rect x="75" y="195" width="295" height="155" rx="4" fill="#ffffff" stroke="#1f2937" strokeWidth="3.5" />

          {/* First Floor Cantilevered Block */}
          <rect x="105" y="95" width="250" height="115" rx="4" fill="#ffffff" stroke="#1f2937" strokeWidth="3.5" />
          {/* Cantilever Roof Overhang in Brand Amber */}
          <rect x="90" y="80" width="280" height="16" rx="2" fill="#ff8c00" stroke="#1f2937" strokeWidth="2.5" />

          {/* Upper Floor Balcony Terrace & Glass Railing */}
          <rect x="60" y="170" width="80" height="34" fill="#fff7ed" stroke="#ff8c00" strokeWidth="2.5" />
          <line x1="60" y1="170" x2="140" y2="170" stroke="#1f2937" strokeWidth="3" />
          <line x1="80" y1="170" x2="80" y2="204" stroke="#ff8c00" strokeWidth="2" />
          <line x1="105" y1="170" x2="105" y2="204" stroke="#ff8c00" strokeWidth="2" />
          <line x1="130" y1="170" x2="130" y2="204" stroke="#ff8c00" strokeWidth="2" />

          {/* Upper Floor Sliding Glass Panorama Window */}
          <rect x="150" y="115" width="85" height="74" rx="2" fill="#fff7ed" stroke="#1f2937" strokeWidth="2.5" />
          <line x1="192" y1="115" x2="192" y2="189" stroke="#ff8c00" strokeWidth="2.5" />
          <line x1="150" y1="152" x2="235" y2="152" stroke="#1f2937" strokeWidth="2" />

          {/* Upper Floor Vertical Architectural Wood Louvers */}
          <rect x="250" y="112" width="80" height="78" fill="#1f2937" />
          <line x1="260" y1="112" x2="260" y2="190" stroke="#ff8c00" strokeWidth="2.5" />
          <line x1="274" y1="112" x2="274" y2="190" stroke="#ff8c00" strokeWidth="2.5" />
          <line x1="288" y1="112" x2="288" y2="190" stroke="#ff8c00" strokeWidth="2.5" />
          <line x1="302" y1="112" x2="302" y2="190" stroke="#ff8c00" strokeWidth="2.5" />
          <line x1="316" y1="112" x2="316" y2="190" stroke="#ff8c00" strokeWidth="2.5" />

          {/* Ground Floor Panoramic Living Room Glass Wall */}
          <rect x="95" y="220" width="120" height="115" rx="2" fill="#fff7ed" stroke="#1f2937" strokeWidth="3" />
          <line x1="155" y1="220" x2="155" y2="335" stroke="#ff8c00" strokeWidth="2.5" />
          <line x1="95" y1="278" x2="215" y2="278" stroke="#1f2937" strokeWidth="2" />

          {/* Modern Entrance Portico */}
          <rect x="230" y="210" width="70" height="12" rx="1" fill="#1f2937" />
          <line x1="234" y1="222" x2="234" y2="345" stroke="#1f2937" strokeWidth="3.5" />
          {/* Main Pivot Villa Door in Brand Amber */}
          <rect x="244" y="222" width="46" height="123" rx="2" fill="#ff8c00" stroke="#1f2937" strokeWidth="2.5" />
          {/* Long Stainless Door Handle */}
          <line x1="252" y1="260" x2="252" y2="310" stroke="#1f2937" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="252" y1="260" x2="252" y2="310" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />

          {/* Right Section Floor Glass Window */}
          <rect x="305" y="235" width="55" height="100" rx="2" fill="#fff7ed" stroke="#1f2937" strokeWidth="2.5" />
          <line x1="332" y1="235" x2="332" y2="335" stroke="#ff8c00" strokeWidth="2" />

          {/* Modern Stepping Stones Pathway */}
          <rect x="228" y="350" width="76" height="6" rx="1" fill="#1f2937" />
          <rect x="216" y="360" width="88" height="6" rx="1" fill="#e5e7eb" stroke="#1f2937" strokeWidth="1.5" />
          <rect x="204" y="370" width="100" height="6" rx="1" fill="#e5e7eb" stroke="#1f2937" strokeWidth="1.5" />

          {/* Decorative Planter in Front of Glass */}
          <rect x="95" y="325" width="40" height="18" rx="2" fill="#1f2937" />
          <path d="M102 325C102 310 115 310 115 325" fill="#ff8c00" />
          <path d="M115 325C115 305 128 305 128 325" fill="#ffab40" />

          {/* Architectural Pergola Columns on Left */}
          <path d="M45 230H75V350H45" stroke="#1f2937" strokeWidth="2.5" fill="#ffffff" />
          <line x1="40" y1="230" x2="80" y2="230" stroke="#ff8c00" strokeWidth="4.5" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════
          CENTER CONTENT (Clean Center Focus with Horizontal Breathing Room)
         ═══════════════════════════════════════════════════════════════ */}
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative z-20 max-w-xl md:max-w-2xl lg:max-w-2xl mx-auto text-center px-6 sm:px-10 lg:px-4 space-y-3.5 sm:space-y-4 my-auto"
      >
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-bold text-[#111827] tracking-tight leading-snug">
          Built for{' '}
          <span className="text-[#ff8c00]">
            What&apos;s Next.
          </span>
        </h2>

        {/* Subtitle / Paragraph */}
        <p className="text-xs sm:text-sm md:text-[15px] text-[#4b5563] font-normal leading-relaxed max-w-lg mx-auto">
          Whether you are planning a home, developing land, managing a premium project, designing an interior, or exploring property opportunities, Ajay Homes brings the experience to move your vision forward.
        </p>

        {/* Reusable Button (Compact, Refined Size) */}
        <div className="pt-2 sm:pt-3">
          {onOpenApply ? (
            <Button onClick={onOpenApply} size="md">
              Start a Conversation
            </Button>
          ) : (
            <Button href="/contact" size="md">
              Start a Conversation
            </Button>
          )}
        </div>
      </motion.div>

    </section>
  );
};

export default BuiltForNextSection;
