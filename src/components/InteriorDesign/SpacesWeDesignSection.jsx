"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SpacesWeDesignSection() {
  const spaces = [
    {
      title: 'Independent Homes',
      image: '/images/residence-images/suresh-residence-view/img20.jpg',
    },
    {
      title: 'Luxury Villas',
      image: '/images/residence-images/natraj-residence/img74.jpg',
    },
    {
      title: 'Apartments',
      image: '/images/residence-images/besantnagar-residence-view/img181.jpg',
    },
    {
      title: 'Premium Residences',
      image: '/images/residence-images/raman-residence/img113.jpg',
    },
    {
      title: 'Offices',
      image: '/images/residence-images/besantnagar-residence-view/img117.jpg',
    },
    {
      title: 'Commercial Spaces',
      image: '/images/residence-images/besantnagar-residence-view/img124.jpg',
    },
    {
      title: 'Retail Spaces',
      image: '/images/residence-images/ankan-resideance-view/img26.jpg',
    },
    {
      title: 'Renovation Projects',
      image: '/images/residence-images/raman-residence/img92.jpg',
    },
  ];

  return (
    <section
      id="spaces-we-design"
      className="relative w-full bg-white text-slate-900 py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-block px-3.5 py-1 rounded-full border border-slate-200 bg-slate-50 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              We design and execute
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-950 tracking-tight leading-[1.2]">
            Interiors For Every{' '}
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)'
              }}
            >
              Kind of Space
            </span>
          </h2>
        </div>

        {/* 8 Architectural Space Showcase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {spaces.map((space, idx) => (
            <motion.div
              key={space.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: '#1e1e1e' }}
            >
              {/* Background Space Image */}
              <img
                src={space.image}
                alt={`${space.title} Interior — Ajay Homes`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Contrast Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-80" />

              {/* Space Title Overlay (Exact content, no dots, no extra tags) */}
              <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-white group-hover:text-[var(--primary)] transition-colors duration-200">
                  {space.title}
                </h3>
              </div>

              {/* Subtle hover highlight border */}
              <div 
                className="absolute inset-0 border-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ borderColor: 'var(--primary)' }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
