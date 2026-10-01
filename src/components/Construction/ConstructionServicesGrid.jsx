"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Building2, 
  Sparkles, 
  KeyRound, 
  RefreshCw, 
  Network 
} from 'lucide-react';

export const ConstructionServicesGrid = () => {
  const services = [
    {
      id: 'residential',
      title: 'Residential Construction',
      description: 'From independent homes and luxury villas to large residential developments, we build spaces around your requirements, lifestyle, and vision.',
      icon: Home
    },
    {
      id: 'commercial',
      title: 'Commercial Construction',
      description: 'We undertake commercial projects with a focus on functionality, durability, design, and efficient execution.',
      icon: Building2
    },
    {
      id: 'luxury-premium',
      title: 'Luxury & Premium Projects',
      description: 'For high-value projects, every detail matters. We focus on refined finishes, quality materials, precise execution, and consistent site supervision.',
      icon: Sparkles
    },
    {
      id: 'turnkey',
      title: 'Turnkey Construction',
      description: 'One team managing the complete project—from planning and coordination to construction and handover.',
      icon: KeyRound
    },
    {
      id: 'renovation',
      title: 'Renovation & Redevelopment',
      description: 'Transform existing properties through thoughtful planning, structural improvements, modern design, and quality execution.',
      icon: RefreshCw
    },
    {
      id: 'large-scale',
      title: 'Large-Scale Projects',
      description: 'Our experience allows us to manage complex projects involving multiple teams, vendors, materials, and execution stages.',
      icon: Network
    }
  ];

  return (
    <section 
      id="construction-services"
      className="relative w-full py-16 sm:py-20 lg:py-28 overflow-hidden text-white"
      style={{ 
        backgroundColor: 'var(--grey-deepest)',
        fontFamily: 'var(--font-family-base)' 
      }}
    >
      {/* ── Subtle background grid pattern for depth ── */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-14 items-start">
          
          {/* ── Left Column: Section Title & Accent Line (Flush to Left End) ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 text-left"
          >
            {/* Title styled cleanly flush to left */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Our Construction <br className="hidden sm:inline" />
              <span className="text-white block mt-1">
                Services
              </span>
            </h2>

            {/* Red / Primary Accent Line directly beneath heading */}
            <div 
              className="w-12 h-1 rounded-full mt-3 sm:mt-4 mb-4 sm:mb-6"
              style={{ backgroundColor: 'var(--primary)' }}
            />

            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-sm">
              Comprehensive turnkey capabilities backed by five decades of master craftsmanship, empirical quality audits, and landmark residential excellence.
            </p>
          </motion.div>

          {/* ── Right Column: Services in Two Lines (3 Columns) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-9"
          >
            {/* Exactly 2 lines on desktop: 3 items in Line 1, 3 items in Line 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 xl:gap-x-10 gap-y-8 sm:gap-y-10">
              {services.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className="flex flex-col items-start text-left space-y-3 group"
                  >
                    {/* White Icon Badge Container */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-white/10 border border-white/15 shadow-md group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)] transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                    </div>

                    {/* Service Title */}
                    <h3 
                      className={`text-base sm:text-[17px] font-bold tracking-tight leading-snug transition-colors ${
                        item.id === 'residential' 
                          ? 'text-[var(--primary)]' 
                          : 'text-white group-hover:text-[var(--primary)]'
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-xs sm:text-[13px] text-slate-400 font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ConstructionServicesGrid;
