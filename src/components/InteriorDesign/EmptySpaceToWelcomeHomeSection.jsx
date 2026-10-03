"use client";

import React from 'react';
import Link from 'next/link';
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
            <Link
              href="/gallery"
              aria-label="View Suresh Residence and more projects in our gallery"
              className="block relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] border border-slate-200 shadow-xl group focus:outline-none"
            >
              <img
                src="/images/residence-images/suresh-residence-view/img72.jpg"
                alt="From Empty Space to Welcome Home — Suresh Residence"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </Link>
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
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold text-slate-950 tracking-tight leading-snug">
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
                Our role doesn't have to end with the{' '}
                <Link href="/services/construction" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline decoration-slate-300 underline-offset-2 transition-colors">construction</Link>. We can take your space through interior design,{' '}
                <Link href="/gallery" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline decoration-slate-300 underline-offset-2 transition-colors">material selection</Link>, finishing, and final{' '}
                <Link href="/services/project-management" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline decoration-slate-300 underline-offset-2 transition-colors">execution</Link>.
              </p>
              <p>
                For residential projects, our{' '}
                <Link href="/services/property-developer" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline decoration-slate-300 underline-offset-2 transition-colors">complete property journey</Link>{' '}
                can continue all the way to the moment you open the doors for your{' '}
                <Link href="/services/construction#foundation-to-celebration" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline decoration-slate-300 underline-offset-2 transition-colors">House Warming</Link>.
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
