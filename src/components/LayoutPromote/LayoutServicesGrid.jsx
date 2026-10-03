"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Layers, 
  Network, 
  HardHat, 
  ShieldCheck, 
  TrendingUp 
} from 'lucide-react';

const SERVICES = [
  {
    id: 'land-assessment',
    title: 'Land Assessment',
    description: "We evaluate the property's location, potential, requirements, and development possibilities before moving forward.",
    icon: Compass,
    href: '/contact',
  },
  {
    id: 'layout-planning',
    title: 'Layout Planning',
    description: 'We develop practical layout concepts focused on accessibility, usability, infrastructure, and market requirements.',
    icon: Layers,
    href: '/services/property-developer',
  },
  {
    id: 'development-coordination',
    title: 'Development Coordination',
    description: 'From site preparation to infrastructure development, we coordinate the various stages required to move the project forward.',
    icon: Network,
    href: '/services/project-management',
  },
  {
    id: 'infrastructure-development',
    title: 'Infrastructure Development',
    description: 'We coordinate essential infrastructure requirements such as roads, drainage, utilities, and other development elements based on the project scope.',
    icon: HardHat,
    href: '/services/construction',
  },
  {
    id: 'approvals-coordination',
    title: 'Approvals & Coordination',
    description: 'We assist with the necessary planning and coordination involved in taking a layout from concept toward development.',
    icon: ShieldCheck,
    href: '/about-us',
  },
  {
    id: 'sales-marketing',
    title: 'Sales & Marketing Support',
    description: 'Our real estate capabilities allow us to support the process of positioning and marketing developed properties to potential buyers.',
    icon: TrendingUp,
    href: '/services/real-estate',
  },
];

export const LayoutServicesGrid = ({
  id = 'layout-services',
  title = 'Our Layout Promotion Services',
  className = '',
}) => {
  return (
    <section
      id={id}
      className={`relative w-full py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
      style={{
        backgroundColor: 'var(--grey-deepest)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-family-base)',
      }}
    >
      {/* ── Soft Ambient Glow for Depth ── */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[160px] pointer-events-none"
        style={{
          backgroundColor: 'var(--primary)',
          opacity: 0.05,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* ── Section Header (Compact, Centered) ────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold text-white tracking-tight leading-snug">
            {title}
          </h2>
        </div>

        {/* ── 6 Compact White Cards on Grey Background (3x2 Grid exact match to reference screenshot) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {SERVICES.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <span
                  className="group relative bg-white text-slate-900 rounded-2xl p-5 sm:p-6 text-center border border-white/20 shadow-xl shadow-black/25 transition-all duration-300 flex flex-col items-center justify-between h-full"
                >
                  <div className="flex flex-col items-center">
                    {/* Circular Outline Icon Container (Matching Reference UI) */}
                    <div 
                      className="w-12 h-12 rounded-full border-2 flex items-center justify-center mb-3.5"
                      style={{
                        borderColor: 'var(--primary)',
                        backgroundColor: 'color-mix(in srgb, var(--primary) 8%, transparent)',
                      }}
                    >
                      <Icon 
                        className="w-5 h-5 stroke-[2]"
                        style={{ color: 'var(--primary)' }}
                      />
                    </div>

                    {/* Service Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 tracking-tight leading-snug mb-2">
                      {item.title}
                    </h3>

                    {/* Service Description (Exact user content) */}
                    <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <span className="mt-3 text-xs font-semibold text-[var(--primary)] inline-flex items-center gap-1">
                    Learn more &rarr;
                  </span>
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LayoutServicesGrid;
