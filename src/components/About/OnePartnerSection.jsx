"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const OnePartnerSection = () => {
  const stages = [
    {
      id: 'construction',
      title: 'Construction',
      subtitle: 'Residential & Commercial',
      href: '/#services-construction',
      illustration: (
        <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ambient background glow circle */}
          <circle cx="60" cy="60" r="50" fill="#fff7ed" />
          <circle cx="60" cy="60" r="42" fill="#ffedd5" opacity="0.6" />
          
          {/* Construction crane / building frame */}
          <rect x="36" y="52" width="22" height="38" rx="2" fill="#1f2937" />
          <rect x="42" y="58" width="4" height="6" rx="1" fill="#ff8c00" />
          <rect x="50" y="58" width="4" height="6" rx="1" fill="#ffedd5" />
          <rect x="42" y="68" width="4" height="6" rx="1" fill="#ffedd5" />
          <rect x="50" y="68" width="4" height="6" rx="1" fill="#ff8c00" />
          <rect x="42" y="78" width="4" height="6" rx="1" fill="#ff8c00" />
          <rect x="50" y="78" width="4" height="6" rx="1" fill="#ffedd5" />

          {/* Tower crane lattice */}
          <path d="M68 90V40L88 32" stroke="#ff8c00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M68 45L80 40M68 55L80 50M68 65L80 60" stroke="#ff8c00" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M60 40H94" stroke="#ff8c00" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M88 32V60" stroke="#ff8c00" strokeWidth="1.5" strokeDasharray="2 2" />
          
          {/* Suspended Hook Block */}
          <rect x="85" y="60" width="6" height="5" rx="1" fill="#1f2937" />
          <path d="M88 65C88 68 85 70 85 70" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />

          {/* Hard Hat */}
          <path d="M30 46C30 38 38 34 46 34C54 34 62 38 62 46H30Z" fill="#ff8c00" />
          <rect x="27" y="45" width="38" height="4" rx="2" fill="#e67e00" />
          <rect x="44" y="32" width="4" height="6" rx="1" fill="#ffab40" />

          {/* Ground line */}
          <line x1="24" y1="90" x2="96" y2="90" stroke="#e5e7eb" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'layout-promotion',
      title: 'Layout Promotion',
      subtitle: 'CMDA & DTCP Plots',
      href: '/#services-layout',
      illustration: (
        <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ambient background glow circle */}
          <circle cx="60" cy="60" r="50" fill="#fff7ed" />
          <circle cx="60" cy="60" r="42" fill="#ffedd5" opacity="0.6" />

          {/* Plotted map / Land grid perspective */}
          <path d="M32 72L50 42L88 46L76 80L32 72Z" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2" />
          
          {/* Plot subdivision lines */}
          <path d="M42 56L68 64" stroke="#ff8c00" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M56 43L48 76" stroke="#ff8c00" strokeWidth="2" strokeDasharray="3 3" />
          
          {/* Highlighted Plot */}
          <polygon points="56,43 72,44 65,63 49,60" fill="#ffedd5" />
          <polygon points="56,43 72,44 65,63 49,60" stroke="#ff8c00" strokeWidth="1.5" />

          {/* Location Pin */}
          <g transform="translate(60, 26)">
            <path d="M12 0C5.37 0 0 5.37 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37 18.63 0 12 0Z" fill="#ff8c00" />
            <circle cx="12" cy="11" r="5" fill="#ffffff" />
            <circle cx="12" cy="11" r="2.5" fill="#1f2937" />
          </g>

          {/* Survey Marker / Flag */}
          <path d="M36 50V74" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
          <path d="M36 50L46 54L36 58V50Z" fill="#ff8c00" />

          {/* Ground baseline */}
          <line x1="24" y1="88" x2="96" y2="88" stroke="#e5e7eb" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'project-management',
      title: 'Project Management',
      subtitle: 'Planning & Governance',
      href: '/#services-project-management',
      illustration: (
        <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ambient background glow circle */}
          <circle cx="60" cy="60" r="50" fill="#fff7ed" />
          <circle cx="60" cy="60" r="42" fill="#ffedd5" opacity="0.6" />

          {/* Clipboard body */}
          <rect x="36" y="32" width="48" height="58" rx="6" fill="#1f2937" />
          <rect x="40" y="38" width="40" height="48" rx="4" fill="#ffffff" />
          
          {/* Clipboard Clip */}
          <rect x="48" y="27" width="24" height="9" rx="3" fill="#ff8c00" />
          <circle cx="60" cy="31" r="2" fill="#ffffff" />

          {/* Checklist rows */}
          <circle cx="48" cy="48" r="4" fill="#fff7ed" stroke="#ff8c00" strokeWidth="1.5" />
          <path d="M46 48L47.5 49.5L50.5 46.5" stroke="#ff8c00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="56" y1="48" x2="74" y2="48" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />

          <circle cx="48" cy="58" r="4" fill="#fff7ed" stroke="#ff8c00" strokeWidth="1.5" />
          <path d="M46 58L47.5 59.5L50.5 56.5" stroke="#ff8c00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="56" y1="58" x2="72" y2="58" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />

          <circle cx="48" cy="68" r="4" fill="#ffedd5" stroke="#ff8c00" strokeWidth="1.5" />
          <line x1="56" y1="68" x2="76" y2="68" stroke="#ff8c00" strokeWidth="2.5" strokeLinecap="round" />

          {/* Precision compass / target badge */}
          <circle cx="82" cy="74" r="14" fill="#ff8c00" />
          <circle cx="82" cy="74" r="10" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 2" />
          <path d="M78 74H86M82 70V78" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'property-development',
      title: 'Property Development',
      subtitle: 'Joint Ventures & Estates',
      href: '/#services-property-developer',
      illustration: (
        <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ambient background glow circle */}
          <circle cx="60" cy="60" r="50" fill="#fff7ed" />
          <circle cx="60" cy="60" r="42" fill="#ffedd5" opacity="0.6" />

          {/* Modern Building 1 (Left Villa) */}
          <rect x="30" y="52" width="26" height="38" rx="2" fill="#1f2937" />
          <rect x="35" y="58" width="6" height="7" rx="1" fill="#ffffff" />
          <rect x="45" y="58" width="6" height="7" rx="1" fill="#ffffff" />
          <rect x="35" y="70" width="6" height="7" rx="1" fill="#ffffff" />
          <rect x="45" y="70" width="6" height="7" rx="1" fill="#ff8c00" />
          <rect x="40" y="81" width="7" height="9" fill="#ff8c00" />

          {/* Main Tower (Right Estate) */}
          <rect x="54" y="36" width="34" height="54" rx="3" fill="#ffffff" stroke="#1f2937" strokeWidth="2" />
          
          {/* Glass Balconies */}
          <rect x="60" y="44" width="22" height="6" rx="1" fill="#fff7ed" stroke="#ff8c00" strokeWidth="1.5" />
          <rect x="60" y="56" width="22" height="6" rx="1" fill="#fff7ed" stroke="#ff8c00" strokeWidth="1.5" />
          <rect x="60" y="68" width="22" height="6" rx="1" fill="#fff7ed" stroke="#ff8c00" strokeWidth="1.5" />

          {/* Sun / Growth symbol behind roof */}
          <circle cx="76" cy="30" r="7" fill="#ff8c00" />
          <line x1="76" y1="20" x2="76" y2="22" stroke="#ff8c00" strokeWidth="2" strokeLinecap="round" />
          <line x1="84" y1="24" x2="82" y2="26" stroke="#ff8c00" strokeWidth="2" strokeLinecap="round" />

          {/* Ground baseline */}
          <line x1="22" y1="90" x2="98" y2="90" stroke="#e5e7eb" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'interior-designing',
      title: 'Interior Designing',
      subtitle: 'Luxury Living Spaces',
      href: '/#services-interior',
      illustration: (
        <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ambient background glow circle */}
          <circle cx="60" cy="60" r="50" fill="#fff7ed" />
          <circle cx="60" cy="60" r="42" fill="#ffedd5" opacity="0.6" />

          {/* Designer Pendant Floor Lamp */}
          <path d="M38 88V40C38 32 46 28 54 28" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
          <path d="M48 28L60 38H48L48 28Z" fill="#ff8c00" />
          <line x1="54" y1="38" x2="54" y2="44" stroke="#ffab40" strokeWidth="1.5" />
          <ellipse cx="54" cy="44" rx="2" ry="3" fill="#ffab40" />

          {/* Framed Abstract Art on Wall */}
          <rect x="68" y="32" width="20" height="24" rx="2" fill="#ffffff" stroke="#1f2937" strokeWidth="1.5" />
          <circle cx="78" cy="42" r="5" fill="#ffedd5" />
          <path d="M72 50L76 46L82 52" stroke="#ff8c00" strokeWidth="1.5" strokeLinecap="round" />

          {/* Luxury Lounge Armchair */}
          <path d="M52 64C52 60 56 56 62 56H78C84 56 88 60 88 64V76H52V64Z" fill="#1f2937" />
          <rect x="56" y="68" width="28" height="12" rx="3" fill="#ff8c00" />
          <line x1="56" y1="80" x2="52" y2="88" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="84" y1="80" x2="88" y2="88" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />

          {/* Ground baseline */}
          <line x1="24" y1="88" x2="96" y2="88" stroke="#e5e7eb" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'real-estate',
      title: 'Real Estate',
      subtitle: 'Strategic Buying & Sales',
      href: '/#services-real-estate',
      illustration: (
        <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ambient background glow circle */}
          <circle cx="60" cy="60" r="50" fill="#fff7ed" />
          <circle cx="60" cy="60" r="42" fill="#ffedd5" opacity="0.6" />

          {/* Approved Deed / Contract Document */}
          <rect x="34" y="34" width="34" height="46" rx="3" fill="#ffffff" stroke="#1f2937" strokeWidth="2" />
          <line x1="40" y1="42" x2="56" y2="42" stroke="#ff8c00" strokeWidth="2" strokeLinecap="round" />
          <line x1="40" y1="48" x2="62" y2="48" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round" />
          <line x1="40" y1="54" x2="60" y2="54" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round" />
          <line x1="40" y1="60" x2="52" y2="60" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round" />
          
          {/* Gold Quality Seal on Document */}
          <circle cx="58" cy="68" r="6" fill="#ff8c00" />
          <circle cx="58" cy="68" r="4" fill="#ffffff" opacity="0.8" />

          {/* Property Key */}
          <g transform="translate(62, 42)">
            <circle cx="16" cy="16" r="10" stroke="#1f2937" strokeWidth="3" fill="#fff7ed" />
            <circle cx="16" cy="16" r="4" fill="#ff8c00" />
            <path d="M16 26V46" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" />
            <path d="M16 38H22M16 43H24" stroke="#1f2937" strokeWidth="3" strokeLinecap="round" />
          </g>

          {/* Ground baseline */}
          <line x1="24" y1="88" x2="96" y2="88" stroke="#e5e7eb" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section 
      id="one-partner"
      className="relative w-full bg-white text-[#1f2937] py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* ── Section Header (Livspace reference style) ────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2"
        >
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#1f2937] tracking-tight leading-tight">
            One Partner.{' '}
            <span className="text-[#ff8c00]">
              Every Stage.
            </span>
          </h2>

          {/* Subtitle phrase */}
          <p className="text-xs sm:text-sm md:text-[14px] text-[#4b5563] font-normal leading-relaxed">
            From land to lifestyle, our expertise covers the complete property journey.
          </p>
        </motion.div>

        {/* ── 6 Cards in ONE LINE on Desktop, Compact Reduced Size ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 max-w-[1080px] mx-auto justify-items-center">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="w-full flex justify-center"
            >
              <Link
                href={stage.href}
                className="group relative w-full max-w-[155px] sm:max-w-[160px] aspect-square flex flex-col items-center justify-center p-2.5 sm:p-3 bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(255,140,0,0.12)] hover:border-[#ff8c00]/40 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                {/* Compact illustration container */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center shrink-0 mb-1.5 sm:mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stage.illustration}
                </div>

                {/* Card Title & Subtitle */}
                <div className="space-y-0.5 w-full px-1">
                  <h3 className="text-[11.5px] sm:text-xs md:text-[13px] font-bold text-[#111827] group-hover:text-[#ff8c00] transition-colors tracking-tight leading-snug min-h-[28px] sm:min-h-[32px] flex items-center justify-center">
                    {stage.title}
                  </h3>
                  <p className="text-[9.5px] sm:text-[10px] md:text-[10.5px] text-[#6b7280] font-normal leading-tight line-clamp-1">
                    {stage.subtitle}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OnePartnerSection;
