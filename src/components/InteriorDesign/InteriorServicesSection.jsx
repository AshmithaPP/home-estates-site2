"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function InteriorServicesSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Exact 8 services requested by user
  const services = [
    {
      num: '01',
      href: '/gallery',
      title: 'Residential Interiors',
      description: 'Thoughtfully designed interiors for apartments, independent homes, villas, and premium residences.',
      image: '/images/residence-images/raman-residence/img139.jpg',
    },
    {
      num: '02',
      href: '/gallery',
      title: 'Luxury Interiors',
      description: 'Refined spaces with carefully selected materials, finishes, furniture, lighting, and detailing.',
      image: '/images/residence-images/natraj-residence/img81.jpg',
    },
    {
      num: '03',
      href: '/services/property-developer',
      title: 'Commercial Interiors',
      description: 'Functional and professional interiors designed around business requirements, customer experience, and efficient space utilisation.',
      image: '/images/residence-images/besantnagar-residence-view/img103.jpg',
    },
    {
      num: '04',
      href: '/contact',
      title: 'Space Planning',
      description: 'We plan layouts around movement, functionality, furniture placement, storage, lighting, and everyday use.',
      image: '/images/residence-images/besantnagar-residence-view/img152.jpg',
    },
    {
      num: '05',
      href: '/gallery',
      title: 'Material & Finish Selection',
      description: 'We help select materials, colours, textures, surfaces, fixtures, and finishes that complement the design direction.',
      image: '/images/residence-images/natraj-residence/img55.jpg',
    },
    {
      num: '06',
      href: '/contact',
      title: 'Custom Design',
      description: 'Every project has different requirements. We develop design solutions based on the space, lifestyle, and client expectations.',
      image: '/images/residence-images/suresh-residence-view/img45.jpg',
    },
    {
      num: '07',
      href: '/services/construction',
      title: 'Turnkey Interior Execution',
      description: 'From design to execution, we coordinate the complete interior journey through one team.',
      image: '/images/residence-images/raman-residence/img160.jpg',
    },
    {
      num: '08',
      href: '/services/construction',
      title: 'Renovation & Transformation',
      description: 'We transform existing spaces through improved layouts, finishes, functionality, and contemporary design.',
      image: '/images/residence-images/besantnagar-residence-view/img216.jpg',
    },
  ];

  return (
    <section
      id="interior-services"
      className="relative py-14 sm:py-18 lg:py-20 overflow-hidden"
      style={{
        backgroundColor: 'var(--grey-deepest)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-family-base)'
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header - Only exact user heading, no extra tags or dots */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold text-white tracking-tight leading-snug">
            Our Interior Design{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)'
              }}
            >
              Services
            </span>
          </h2>
        </div>

        {/* 8-Card Premium White Cards on Grey Background (Compact Height & Width) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative rounded-xl overflow-hidden flex flex-col justify-between bg-white text-slate-900 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[var(--primary)] transition-all duration-300"
            >
              {/* Whole card links to the related page */}
              <Link href={item.href} aria-label={item.title} className="absolute inset-0 z-20 rounded-xl focus:outline-none" />

              {/* Compact Image Container */}
              <div className="relative h-36 sm:h-38 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={`${item.title} — Ajay Homes`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Arrow Icon */}
                <div
                  className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full flex items-center justify-center backdrop-blur-xs transition-all duration-300"
                  style={{
                    backgroundColor: hoveredIdx === idx ? 'var(--primary)' : 'rgba(0,0,0,0.6)',
                    color: hoveredIdx === idx ? '#000000' : '#ffffff'
                  }}
                >
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Card Text Content (Compact & Clean) */}
              <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-[15px] font-bold uppercase tracking-tight text-slate-950 mb-1.5 group-hover:text-[var(--primary-dark)] transition-colors duration-200 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
