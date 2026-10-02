"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function RealEstateExperienceSection() {
  return (
    <section
      id="market-experience"
      className="relative w-full bg-white text-slate-900 py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4 sm:space-y-5"
          >
            {/* Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[28px] xl:text-[34px] font-bold text-slate-950 tracking-tight whitespace-normal lg:whitespace-nowrap leading-[1.2]">
              Your Property.{' '}
              <span 
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)'
                }}
              >
                Our Market Experience.
              </span>
            </h2>

            {/* Exact Content Paragraphs */}
            <div className="space-y-3.5 text-slate-600 font-normal text-sm sm:text-base leading-relaxed">
              <p className="text-slate-800 font-medium">
                Buying or selling property involves more than finding a listing or a buyer.
              </p>
              <p>
                Location, property value, documentation, market demand, investment potential, negotiation, and transaction coordination all play an important role.
              </p>
              <p>
                Ajay Homes brings its experience across construction, property development, project management, and real estate to provide a more informed approach to property transactions.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Architectural Photography Frame */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] border border-slate-200 shadow-xl group">
              <img
                src="/images/residence-images/shasthri-nagar-adyar/img72.jpg"
                alt="Your Property. Our Market Experience. — Ajay Homes"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
