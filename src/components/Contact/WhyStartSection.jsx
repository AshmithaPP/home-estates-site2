"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const WhyStartSection = () => {
  const promises = [
    {
      title: '60+ Years',
      subtitle: 'Industry Experience',
      href: '/about-us',
    },
    {
      title: '500+ Projects',
      subtitle: 'Completed Projects',
      href: '/gallery',
    },
    {
      title: '100%',
      subtitle: 'Client Satisfaction',
      href: '/gallery',
    },
    {
      title: 'End-to-End',
      subtitle: 'Property Expertise',
      href: '/services/project-management',
    },
  ];

  return (
    <section
      id="why-start"
      className="relative w-full bg-white overflow-hidden py-10 sm:py-12 lg:py-14"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Premium banner: copy on the left, villa illustration on the right (stacks on phones) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="section-grey relative rounded-[22px] sm:rounded-[28px] overflow-hidden ring-1 ring-white/10 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.45)]"
        >
          {/* Brand glow behind the illustration */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-10%] bottom-[-30%] md:bottom-auto md:top-1/2 md:-translate-y-1/2 h-64 w-64 sm:h-80 sm:w-80 rounded-full blur-[100px] opacity-35"
            style={{ background: 'var(--primary)' }}
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-4 md:gap-8 px-6 pt-7 pb-5 sm:px-10 sm:pt-8 md:py-6 lg:px-12 lg:py-7">
            <div className="text-center md:text-left">
              <h2
                className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold tracking-tight leading-snug"
                style={{ color: 'var(--text-primary)' }}
              >
                Why Start With{' '}
                <span
                  style={{ color: 'var(--primary)' }}>
                  Ajay Homes?
                </span>
              </h2>
              {/* Key stats: 2x2 on phones to laptops, single row on wide screens */}
              <div className="mt-5 sm:mt-6 grid grid-cols-2 xl:grid-cols-4 gap-y-5 max-w-[460px] xl:max-w-none mx-auto md:mx-0">
                {promises.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.1 + index * 0.08 }}
                    className={`pr-2 sm:pr-3 ${index % 2 === 1 ? 'border-l pl-3 sm:pl-5' : index === 2 ? 'xl:border-l xl:pl-5' : ''}`}
                    style={{ borderColor: 'rgba(255,255,255,0.12)' }}
                  >
                    <div>
                      <p
                        className="text-base sm:text-lg xl:text-xl font-bold tracking-tight leading-tight"
                        style={{ color: 'var(--primary)' }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="mt-1 text-[10px] sm:text-[11px] font-medium leading-snug"
                        style={{ color: 'color-mix(in srgb, var(--text-primary) 70%, transparent)' }}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Isometric villa — shown on every device, sized per breakpoint */}
            <div className="relative flex justify-center md:justify-end">
              <div
                aria-hidden="true"
                className="absolute bottom-1 left-1/2 -translate-x-1/2 h-5 w-3/4 rounded-[100%] blur-xl bg-black/50"
              />
                <motion.img
                  src="/images/why-start-isometric.png"
                  alt="Ajay Homes luxury residential villa"
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-[150px] sm:w-[180px] md:w-[170px] lg:w-[200px] h-auto object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)] select-none"
                />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyStartSection;
