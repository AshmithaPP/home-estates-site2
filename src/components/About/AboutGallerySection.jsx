"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Camera } from 'lucide-react';
import Button from '../UI/Button';

export const AboutGallerySection = () => {
  const showcaseProjects = [
    {
      id: 'raman-residence',
      title: 'Contemporary 3BHK Residence',
      category: 'Luxury Residence',
      location: 'Adyar, Chennai',
      image: '/images/residence-images/raman-residence/img43.jpg',
      tags: ['3-BHK', 'Bespoke Interiors', 'Turnkey'],
      photosCount: 16,
    },
    {
      id: 'besant-nagar-enclave',
      title: 'Besant Nagar Luxury Enclave',
      category: 'Modern Architectural Villa',
      location: 'Besant Nagar, Chennai',
      image: '/images/residence-images/besantnagar-residence-view/img103.jpg',
      tags: ['Villa', 'Italian Marble', 'Custom Structural'],
      photosCount: 12,
    },
    {
      id: 'natraj-residence',
      title: 'Contemporary Villa Living',
      category: 'Signature Living & Suite',
      location: 'Kotturpuram, Chennai',
      image: '/images/residence-images/natraj-residence/img67.jpg',
      tags: ['Luxury Villa', 'Island Kitchen', 'Turnkey Build'],
      photosCount: 15,
    },
  ];

  return (
    <section
      id="about-gallery"
      className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white text-neutral-900 border-t border-black/5"
      style={{
        fontFamily: 'var(--font-family-base)',
      }}
    >
      {/* ── Soft Ambient Warmth ──────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-32 -translate-y-1/2 w-96 h-96 rounded-full blur-[140px] opacity-15"
        style={{
          backgroundColor: 'var(--primary)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -right-32 w-96 h-96 rounded-full blur-[140px] opacity-10"
        style={{
          backgroundColor: 'var(--primary)',
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto">
        {/* ── Section Header Row: 1 Single Heading on Left, CTA Button on Right ──── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <Link href="/gallery" className="group cursor-pointer">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold text-neutral-900 tracking-tight leading-tight text-left group-hover:text-[var(--primary)] transition-colors">
              Delivered Architectural Excellence
            </h2>
          </Link>

          {/* Desktop Right / Mobile Aligned CTA Button */}
          <div className="shrink-0">
            <Button
              href="/gallery"
              variant="primary"
              size="md"
              icon={ArrowUpRight}
              showIcon={true}
              className="uppercase tracking-wider font-bold shadow-md hover:shadow-[0_0_18px_rgba(255,140,0,0.35)]"
            >
              Explore Projects
            </Button>
          </div>
        </div>

        {/* ── Responsive 3-Card Project Grid ─────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {showcaseProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/gallery"
                className="group block relative rounded-2xl overflow-hidden bg-white border border-neutral-200/90 hover:border-[var(--primary)]/70 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col h-full"
              >
                {/* 1. Project Photo Container */}
                <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-600 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide uppercase border backdrop-blur-md"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.65)',
                        borderColor: 'color-mix(in srgb, var(--primary) 40%, transparent)',
                        color: 'var(--primary)',
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Top-Right Photo Count Pill */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-semibold text-white/90 bg-black/60 backdrop-blur-md border border-white/15">
                      <Camera className="w-3 h-3 text-[var(--primary)]" />
                      <span>{project.photosCount}</span>
                    </span>
                  </div>

                  {/* Bottom Location Indicator Inside Image */}
                  <div className="absolute bottom-2.5 left-3.5 z-10 flex items-center gap-1.5 text-xs text-white/90 font-medium drop-shadow">
                    <MapPin className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* 2. Card Content Body */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-[var(--primary)] transition-colors">
                      {project.title}
                    </h3>

                    {/* Tags */}
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[10.5px] font-medium bg-neutral-100 text-neutral-600 border border-neutral-200/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 3. Card Bottom Action Link */}
                  <div className="pt-3.5 mt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-neutral-500 font-normal group-hover:text-neutral-900 transition-colors">
                      View In Gallery
                    </span>
                    <span
                      className="inline-flex items-center gap-1 font-bold group-hover:translate-x-0.5 transition-transform"
                      style={{ color: 'var(--primary)' }}
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutGallerySection;
