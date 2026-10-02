"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function DesignedAroundYouSection() {
  return (
    <section
      id="designed-around-you"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundColor: 'var(--grey-deepest)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-family-base)'
      }}
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[350px] rounded-full blur-[160px] pointer-events-none opacity-15"
        style={{ background: 'var(--primary)' }}
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Statement & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-4 sm:space-y-5 text-left"
          >
            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white tracking-tight leading-[1.2]">
              Designed Around You
            </h2>

            {/* Exact Narrative Paragraphs */}
            <div className="space-y-3 text-white/80 font-normal text-sm sm:text-base leading-relaxed">
              <p className="text-base sm:text-lg text-white/95 font-medium leading-relaxed">
                Your home or workspace should reflect how you live, work, and experience the space.
              </p>
              <p className="text-sm sm:text-base text-white/70">
                Our role is to combine your vision with practical design thinking and experienced execution.
              </p>
            </div>

            {/* Signature Highlight Block */}
            <div 
              className="p-4 sm:p-5 rounded-2xl border backdrop-blur-md transition-all duration-300"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                borderColor: 'rgba(255, 140, 0, 0.35)',
              }}
            >
              <p 
                className="text-base sm:text-lg md:text-xl font-bold tracking-tight uppercase"
                style={{ color: 'var(--primary)' }}
              >
                Your space. Your style. Our expertise.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Architectural Photography Frame */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] border border-white/10 shadow-2xl group bg-black/40">
              <img
                src="/images/residence-images/natraj-residence/img88.jpg"
                alt="Designed Around You — Natraj Residence Luxury Interior"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
