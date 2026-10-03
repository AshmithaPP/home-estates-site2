"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Home, 
  Building2, 
  Handshake, 
  Map, 
  Hammer, 
  Paintbrush, 
  TrendingUp 
} from 'lucide-react';

export const PropertyDeveloperServicesGrid = () => {
  // Exact 8 services requested by user with no extra content
  const services = [
    {
      id: 'land-development',
      title: 'Land Development',
      description: 'We help property owners evaluate development opportunities and plan the right approach for their land.',
      icon: Compass,
      href: '/services/layout-promoters',
    },
    {
      id: 'residential-development',
      title: 'Residential Development',
      description: 'From independent developments to premium residential projects, we coordinate planning, construction, and delivery.',
      icon: Home,
      href: '/gallery',
    },
    {
      id: 'commercial-development',
      title: 'Commercial Development',
      description: 'We support commercial property development with a focus on functionality, design, execution, and market requirements.',
      icon: Building2,
      href: '/gallery',
    },
    {
      id: 'joint-development',
      title: 'Joint Development',
      description: 'We work with property owners exploring development partnerships and opportunities to unlock the potential of their land.',
      icon: Handshake,
      href: '/contact',
    },
    {
      id: 'project-planning',
      title: 'Project Planning',
      description: "We coordinate the planning and execution strategy based on the property's location, potential, project objectives, and target market.",
      icon: Map,
      href: '/services/layout-promoters',
    },
    {
      id: 'construction-execution',
      title: 'Construction & Execution',
      description: 'Our construction expertise allows us to manage the physical development of the property with attention to quality, timelines, and execution.',
      icon: Hammer,
      href: '/services/construction',
    },
    {
      id: 'interior-finishing',
      title: 'Interior & Finishing',
      description: 'Where required, our interior design capabilities can take the project from structural completion to a finished, market-ready property.',
      icon: Paintbrush,
      href: '/services/interior-design',
    },
    {
      id: 'sales-market-support',
      title: 'Sales & Market Support',
      description: 'Our real estate capabilities can support property positioning, buyer engagement, and sales for suitable developments.',
      icon: TrendingUp,
      href: '/services/real-estate',
    }
  ];

  return (
    <section 
      id="property-developer-services"
      className="relative w-full py-16 sm:py-20 lg:py-28 overflow-hidden text-white"
      style={{ 
        backgroundColor: 'var(--grey-deepest)',
        fontFamily: 'var(--font-family-base)' 
      }}
    >
      {/* ── Subtle background grid pattern for architectural depth ── */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-14 items-start">
          
          {/* ── Left Column: Section Title ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 text-left"
          >

            <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold text-white tracking-tight mb-3 sm:mb-4 leading-snug">
              Our Property <br className="hidden sm:inline" />
              <span className="text-white block mt-1">
                Development Services
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-sm">
              From{' '}
              <Link href="/services/layout-promoters" className="text-slate-300 hover:text-[var(--primary)] underline underline-offset-2 transition-colors">
                land strategy
              </Link>{' '}
              to finished,{' '}
              <Link href="/gallery" className="text-slate-300 hover:text-[var(--primary)] underline underline-offset-2 transition-colors">
                market-ready architecture
              </Link>, we manage every phase of development under one unified framework.
            </p>
          </motion.div>

          {/* ── Right Column: 8 Services Grid (4 Columns x 2 Rows on Desktop) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-9"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {services.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.05 }}
                    className="h-full"
                  >
                    <Link
                      href={item.href}
                      className="flex flex-col items-start justify-between text-left p-5 sm:p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-[var(--primary)]/50 transition-all duration-300 group shadow-lg cursor-pointer h-full"
                    >
                      <div>
                        {/* Icon Container */}
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-white/10 border border-white/15 shadow-md group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)] transition-all duration-300 mb-4">
                          <IconComponent className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                        </div>

                        {/* Service Title */}
                        <h3 
                          className="text-base sm:text-[17px] font-bold tracking-tight leading-snug transition-colors text-white group-hover:text-[var(--primary)] mb-2"
                        >
                          {item.title}
                        </h3>

                        {/* Service Description */}
                        <p className="text-xs sm:text-[13px] text-slate-400 font-normal leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <span className="mt-3 text-xs font-semibold text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more &rarr;
                      </span>
                    </Link>
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

export default PropertyDeveloperServicesGrid;
