"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const BhoomiPoojaSection = () => {
  // All 23 images from ankan-resideance-view, filling a 7x4 (28-cell) photo mosaic grid
  const residenceImages = [
    '/images/residence-images/ankan-resideance-view/img13.jpg',
    '/images/residence-images/ankan-resideance-view/img14.jpg',
    '/images/residence-images/besantnagar-residence-view/img103.jpg',
    '/images/residence-images/besantnagar-residence-view/img110.jpg',
    '/images/residence-images/besantnagar-residence-view/img117.jpg',
    '/images/residence-images/ankan-resideance-view/img26.jpg',
    '/images/residence-images/ankan-resideance-view/img29.jpg',
    '/images/residence-images/ankan-resideance-view/img32.jpg',
    '/images/residence-images/ankan-resideance-view/img35.jpg',
    '/images/residence-images/ankan-resideance-view/img38.jpg',
    '/images/residence-images/ankan-resideance-view/img41.jpg',
    '/images/residence-images/ankan-resideance-view/img44.jpg',
    '/images/residence-images/ankan-resideance-view/img47.jpg',
    '/images/residence-images/ankan-resideance-view/img50.jpg',
    '/images/residence-images/ankan-resideance-view/img53.jpg',
    '/images/residence-images/ankan-resideance-view/img56.jpg',
    '/images/residence-images/ankan-resideance-view/img59.jpg',
    '/images/residence-images/ankan-resideance-view/img62.jpg',
    '/images/residence-images/ankan-resideance-view/img65.jpg',
    '/images/residence-images/ankan-resideance-view/img68.jpg',
    '/images/residence-images/ankan-resideance-view/img71.jpg',
    '/images/residence-images/ankan-resideance-view/img74.jpg',
    '/images/residence-images/ankan-resideance-view/img77.jpg',
    // Additional curated views to complete the 28-cell (7 cols x 4 rows) mosaic
    '/images/residence-images/ankan-resideance-view/img14.jpg',
    '/images/residence-images/ankan-resideance-view/img26.jpg',
    '/images/residence-images/ankan-resideance-view/img35.jpg',
    '/images/residence-images/ankan-resideance-view/img47.jpg',
    '/images/residence-images/ankan-resideance-view/img65.jpg',
  ];

  return (
    <section 
      id="bhoomi-pooja"
      className="relative w-full py-20 sm:py-24 lg:py-28 overflow-hidden border-t border-white/10 text-[#f0ede8]"
      style={{ 
        background: 'linear-gradient(160deg, #181818 0%, #242424 50%, #1e1e1e 100%)',
        fontFamily: 'Montserrat, sans-serif' 
      }}
    >
      {/* ── Ambient Soft Amber Glow ─────────────────────────────────── */}
      <div 
        className="absolute top-1/2 -left-32 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #ff8c00 0%, transparent 70%)' }}
      />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20">
          
          {/* ── Left Content Column (Exact Replica of Reference) ────── */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[48%] xl:w-[45%] space-y-5 text-left"
          >
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.18]">
              From Bhoomi Pooja to{' '}
              <span className="text-[#ff8c00]">
                House Warming
              </span>
            </h2>

            {/* Narrative Subtitle */}
            <p className="text-base sm:text-lg text-[#c2beba] font-normal leading-relaxed max-w-lg">
              For residential projects, we can be there through every important stage — from the first Bhoomi Pooja to the final House Warming.
            </p>

            {/* Core Tagline */}
            <div className="pt-2 flex items-center gap-3">
              <span className="w-8 h-[2.5px] bg-[#ff8c00] rounded-full inline-block shrink-0 shadow-[0_0_10px_rgba(255,140,0,0.6)]" />
              <p className="text-sm sm:text-base font-bold text-white tracking-wide">
                One team. One journey. Built around you.
              </p>
            </div>
          </motion.div>

          {/* ── Right Column: 7x4 Photo Mosaic Wall (Sharp Square Corners, Full Color) ─── */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:w-[52%] xl:w-[55%] flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[580px] lg:max-w-[620px] rounded-none overflow-hidden shadow-[0_16px_45px_rgba(0,0,0,0.6)] border border-white/10 bg-[#242424] p-[2px] sm:p-[2.5px]">
              <div className="grid grid-cols-7 gap-[2px] sm:gap-[2.5px] bg-[#1a1a1a] rounded-none">
                {residenceImages.map((src, index) => (
                  <div
                    key={`${src}-${index}`}
                    className="relative aspect-square overflow-hidden bg-[#2a2a2a] rounded-none group cursor-pointer"
                  >
                    <Image
                      src={src}
                      alt={`Residence Stage View ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 14vw, 85px"
                      className="object-cover group-hover:scale-115 transition-transform duration-300 ease-out"
                    />
                    {/* Subtle warm hover border indicator */}
                    <div className="absolute inset-0 border border-transparent group-hover:border-[#ff8c00] transition-colors duration-200 pointer-events-none z-10" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BhoomiPoojaSection;
