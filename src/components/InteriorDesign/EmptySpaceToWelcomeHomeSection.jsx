"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function EmptySpaceToWelcomeHomeSection() {
  return (
    <section
      id="welcome-home"
      className="relative w-full bg-white text-slate-900 py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] border border-slate-200 shadow-xl group">
              <img
                src="/images/residence-images/suresh-residence-view/img72.jpg"
                alt="From Empty Space to Welcome Home — Suresh Residence"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-4 sm:space-y-5 order-1 lg:order-2 lg:pl-2"
          >
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-950 tracking-tight leading-[1.2]">
              From Empty Space to Your{' '}
              <span 
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)'
                }}
              >
                First Welcome Home
              </span>
            </h2>

            {/* Exact Content Paragraphs */}
            <div className="space-y-3 text-slate-600 font-normal text-sm sm:text-base leading-relaxed">
              <p>
                Our role doesn't have to end with the construction. We can take your space through interior design, material selection, finishing, and final execution.
              </p>
              <p>
                For residential projects, our complete property journey can continue all the way to the moment you open the doors for your House Warming.
              </p>
            </div>

            {/* Climax Highlight Statement */}
            <div className="p-4 sm:p-5 rounded-xl border border-orange-200/90 bg-orange-50/60 shadow-xs">
              <p 
                className="text-base sm:text-lg font-bold tracking-tight uppercase"
                style={{ color: 'var(--primary-dark)' }}
              >
                Designed. Executed. Ready to welcome you home.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
