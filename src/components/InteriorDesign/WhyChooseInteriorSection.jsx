"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Layers, Sparkles, Building2, CheckCircle2 } from 'lucide-react';

export default function WhyChooseInteriorSection() {
  const points = [
    {
      id: 'roof',
      icon: Building2,
      metric: 'One Roof',
      title: 'Design + Execution Under One Roof',
      description: 'Our construction and project management expertise allows us to connect design with practical execution.',
    },
    {
      id: 'experience',
      icon: Award,
      metric: '60+ Years',
      title: '60+ Years of Industry Experience',
      description: 'Decades of experience across construction, property development, interiors, and real estate.',
    },
    {
      id: 'projects',
      icon: Layers,
      metric: '500+ Projects',
      title: '500+ Projects',
      description: 'Experience across a wide range of property types and project requirements.',
    },
    {
      id: 'premium',
      icon: Sparkles,
      metric: '₹1 Cr+',
      title: 'Premium Project Experience',
      description: 'Our experience includes managing high-value projects of ₹1 Cr+.',
    },
    {
      id: 'quality',
      icon: ShieldCheck,
      metric: 'Finest Finishes',
      title: 'Quality-Focused Materials',
      description: 'We pay attention to material selection, workmanship, finishes, and detailing throughout the project.',
    },
    {
      id: 'management',
      icon: CheckCircle2,
      metric: 'End-to-End',
      title: 'End-to-End Management',
      description: 'From the first design discussion to final execution, we coordinate the key stages of the interior project.',
    },
  ];

  return (
    <section
      id="why-choose-ajay-homes"
      className="relative w-full bg-white text-slate-900 py-16 sm:py-20 lg:py-28 overflow-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading - Big and Bold */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 mb-3">
            <span 
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: 'var(--primary)' }}
            />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              The Ajay Homes Distinction
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-950 tracking-tight leading-[1.2]">
            Why Choose{' '}
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)'
              }}
            >
              Ajay Homes?
            </span>
          </h2>
        </div>

        {/* 6 Grid Modern White Cards with Slate Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={pt.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative p-6 sm:p-7 rounded-2xl border border-slate-200/80 bg-slate-50/80 hover:bg-white hover:border-[var(--primary)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Metric Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center border border-slate-200 bg-white transition-all duration-300 group-hover:scale-105 shadow-xs"
                      style={{ color: 'var(--primary)' }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span 
                      className="text-xs font-bold font-mono px-3 py-1 rounded-full uppercase tracking-wider border"
                      style={{
                        backgroundColor: 'rgba(255, 140, 0, 0.08)',
                        borderColor: 'rgba(255, 140, 0, 0.25)',
                        color: 'var(--primary-dark)'
                      }}
                    >
                      {pt.metric}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-slate-950 mb-2.5 group-hover:text-[var(--primary)] transition-colors duration-200">
                    {pt.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pt.description}
                  </p>
                </div>

                {/* Subtle card bottom accent */}
                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-2">
                  <span 
                    className="w-1.5 h-1.5 rounded-full group-hover:w-4 transition-all duration-300"
                    style={{ backgroundColor: 'var(--primary)' }}
                  />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Ajay Homes Standard
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
