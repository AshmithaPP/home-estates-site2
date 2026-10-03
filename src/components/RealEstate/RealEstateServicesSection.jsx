"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const realEstateServices = [
  {
    title: 'Property Buying',
    href: '/contact',
    description: 'We help buyers identify properties based on their location, budget, requirements, and investment objectives.',
    image: '/images/residence-images/besantnagar-residence-view/img103.jpg',
  },
  {
    title: 'Property Selling',
    href: '/contact',
    description: 'We assist property owners in positioning and marketing their properties to reach relevant prospective buyers.',
    image: '/images/residence-images/besantnagar-residence-view/img145.jpg',
  },
  {
    title: 'Residential Properties',
    href: '/gallery',
    description: 'Support for buyers and sellers across homes, apartments, villas, plots, and other residential properties.',
    image: '/images/residence-images/suresh-residence-view/img33.jpg',
  },
  {
    title: 'Commercial Properties',
    href: '/services/property-developer',
    description: 'Property solutions for businesses, investors, and owners looking to buy or sell commercial spaces.',
    image: '/images/residence-images/natraj-residence/img67.jpg',
  },
  {
    title: 'Investment Properties',
    href: '/services/property-developer',
    description: 'We help investors evaluate property opportunities based on location, property type, market considerations, and investment objectives.',
    image: '/images/residence-images/besantnagar-residence-view/img89.jpg',
  },
  {
    title: 'Property Evaluation',
    href: '/contact',
    description: 'We help clients understand key property considerations before making a buying or selling decision.',
    image: '/images/residence-images/besantnagar-residence-view/img131.jpg',
  },
  {
    title: 'Buyer & Seller Coordination',
    href: '/services/project-management',
    description: 'From initial discussions to negotiations and transaction coordination, we help keep the process organised.',
    image: '/images/residence-images/besantnagar-residence-view/img181.jpg',
  },
  {
    title: 'NRI Property Services',
    href: '#nri-services',
    description: 'Support for NRI clients looking to buy, sell, develop, or manage property in Chennai.',
    image: '/images/residence-images/besantnagar-residence-view/img117.jpg',
  },
];

export default function RealEstateServicesSection() {
  return (
    <section
      id="real-estate-services"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundColor: 'var(--grey-deepest)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-family-base)'
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white tracking-tight leading-[1.2]"
          >
            Our Real Estate Services
          </motion.h2>
        </div>

        {/* 8 Compact White Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {realEstateServices.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="relative bg-white text-slate-900 rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Whole card links to the related page */}
              <Link href={service.href} aria-label={service.title} className="absolute inset-0 z-10 rounded-2xl focus:outline-none" />

              {/* Photo Frame */}
              <div className="relative h-36 sm:h-38 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Text Body */}
              <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-start">
                <h3 className="text-sm sm:text-[14.5px] lg:text-[13.5px] xl:text-[15px] font-bold text-slate-950 tracking-tight leading-snug mb-1.5 group-hover:text-[var(--primary)] transition-colors whitespace-nowrap">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
