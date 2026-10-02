"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function InteriorProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Understand',
      description: 'We begin by understanding your space, lifestyle, functional requirements, preferences, and budget.',
    },
    {
      num: '02',
      title: 'Concept',
      description: 'We establish the design direction, layout, materials, finishes, and overall visual language.',
    },
    {
      num: '03',
      title: 'Plan',
      description: 'Detailed planning brings together space utilisation, furniture, lighting, storage, materials, and execution requirements.',
    },
    {
      num: '04',
      title: 'Select',
      description: 'Materials, finishes, fixtures, and other design elements are finalised according to the project.',
    },
    {
      num: '05',
      title: 'Execute',
      description: 'Our team coordinates the execution, vendors, materials, and site activities.',
    },
    {
      num: '06',
      title: 'Complete',
      description: 'Every detail is reviewed before the final space is handed over.',
    },
  ];

  return (
    <section
      id="interior-process"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundColor: 'var(--grey-deepest)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-family-base)',
      }}
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-[150px] pointer-events-none opacity-15"
        style={{ background: 'var(--primary)' }}
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white tracking-tight leading-[1.2]">
            Our Interior Design{' '}
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)'
              }}
            >
              Process
            </span>
          </h2>
        </div>

        {/* 6 Premium White Process Cards with Bold Luxury Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-4.5">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                onClick={() => setActiveStep(idx)}
                className={`group relative cursor-pointer rounded-2xl bg-gradient-to-b from-white to-slate-50/80 p-5 sm:p-5.5 border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isSelected
                    ? 'border-[var(--primary)] ring-2 ring-[var(--primary)]/30 shadow-xl shadow-[var(--primary)]/10 -translate-y-1'
                    : 'border-slate-200/90 shadow-md hover:border-[var(--primary)] hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {/* Top Subtle Amber Highlight Bar */}
                <div 
                  className={`absolute top-0 inset-x-0 h-1 transition-opacity duration-300 ${
                    isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                  style={{ backgroundColor: 'var(--primary)' }}
                />

                <div>
                  {/* Prominent Luxury Number */}
                  <div className="flex items-center justify-between mb-3">
                    <span 
                      className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight transition-transform duration-300 group-hover:scale-105"
                      style={{ color: 'var(--primary)' }}
                    >
                      {step.num}
                    </span>
                  </div>

                  {/* Stage Title */}
                  <h3 className="text-base sm:text-[17px] font-bold uppercase tracking-tight text-slate-950 mb-2 group-hover:text-[var(--primary-dark)] transition-colors leading-snug">
                    {step.title}
                  </h3>

                  {/* Stage Description */}
                  <p className="text-xs sm:text-[12.5px] text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Bottom decorative hairline */}
                <div 
                  className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10.5px] font-bold uppercase tracking-wider transition-colors"
                  style={{ color: isSelected ? 'var(--primary-dark)' : 'rgba(100,116,139,0.7)' }}
                >
                  <span>Step 0{idx + 1}</span>
                  <span className="text-slate-400 group-hover:text-[var(--primary-dark)] transition-colors">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
