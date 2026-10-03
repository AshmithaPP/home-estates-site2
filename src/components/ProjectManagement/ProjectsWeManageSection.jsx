"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Home,
  Building2,
  Landmark,
  MapPin,
  RefreshCw,
  Network,
  Gem,
  CheckCircle2
} from 'lucide-react';

const PROJECT_TYPES = [
  {
    id: 'luxury-homes',
    title: 'Luxury Homes',
    icon: Sparkles,
    image: '/assets/img/img-001.jpeg',
    tag: 'Bespoke Residences',
    href: '/gallery',
  },
  {
    id: 'villas',
    title: 'Villas',
    icon: Home,
    image: '/assets/img/img-004.jpeg',
    tag: 'Independent Villas',
    href: '/gallery',
  },
  {
    id: 'residential-dev',
    title: 'Residential Developments',
    icon: Building2,
    image: '/assets/img/img-009.jpeg',
    tag: 'Luxury Enclaves',
    href: '/services/property-developer',
  },
  {
    id: 'commercial',
    title: 'Commercial Projects',
    icon: Landmark,
    image: '/assets/img/img-016.jpeg',
    tag: 'Corporate & Retail',
    href: '/services/property-developer',
  },
  {
    id: 'property-dev',
    title: 'Property Developments',
    icon: MapPin,
    image: '/assets/img/img-020.jpeg',
    tag: 'Plotted Layouts',
    href: '/services/layout-promoters',
  },
  {
    id: 'renovations',
    title: 'Renovation Projects',
    icon: RefreshCw,
    image: '/assets/img/img-028.jpeg',
    tag: 'Structural Upgrades',
    href: '/services/construction',
  },
  {
    id: 'large-scale',
    title: 'Large-Scale Construction',
    icon: Network,
    image: '/assets/img/img-035.jpeg',
    tag: 'Multi-Team Sites',
    href: '/services/construction',
  },
  {
    id: 'high-value',
    title: '100% Client Satisfaction Projects',
    icon: Gem,
    image: '/images/residence-images/r3-brc-views/img4.jpg',
    tag: '100% Satisfaction Tier',
    href: '/gallery',
  },
];

export const ProjectsWeManageSection = ({
  id = 'projects-we-manage',
  className = '',
}) => {
  return (
    <section
      id={id}
      className={`relative w-full py-12 sm:py-14 lg:py-16 text-[#1a1a1a] border-t border-b border-black/5 overflow-hidden ${className}`}
      style={{
        background: '#f8f8f6',
        fontFamily: 'var(--font-family-base)',
      }}
    >
      {/* ── Background Soft Glow (Matching FAQ Section) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full blur-[140px]"
        style={{ backgroundColor: 'var(--primary)', opacity: 0.08 }}
      />
      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12">

        {/* ── 1 Single One-Line Heading (No eyebrow, no subtitle) ── */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold text-[#1a1a1a] tracking-tight leading-snug">
            Projects We Manage
          </h2>
        </div>

        {/* ── 8 Short, Premium Cards in a Compact 4-Column Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
          {PROJECT_TYPES.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="group relative rounded-xl sm:rounded-2xl p-3 sm:p-3.5 border border-black/5 bg-white hover:border-[var(--primary)] shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-3.5 cursor-pointer"
              >
                {/* Whole card links to the related page */}
                <Link href={item.href} aria-label={item.title} className="absolute inset-0 z-10 rounded-xl sm:rounded-2xl focus:outline-none" />

                {/* Compact Photo Thumbnail */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-slate-100 shadow-xs border border-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Content: Title & Tag */}
                <div className="min-w-0 flex-1 text-left">
                  <div className="flex items-center gap-1.5 mb-1">
                    <IconComp className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--primary)' }} />
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-[var(--primary-dark)] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-1 font-medium">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>Managed End-to-End</span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectsWeManageSection;
