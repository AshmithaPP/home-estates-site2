"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Button from '@/components/UI/Button';

export default function NRIPropertyServicesSection({ onOpenApply }) {
  const nriPoints = [
    { label: 'Buy property in Chennai', href: '/contact' },
    { label: 'Sell existing property', href: '/contact' },
    { label: 'Explore investment opportunities', href: '/services/property-developer' },
    { label: 'Develop owned land', href: '/services/layout-promoters' },
    { label: 'Manage property requirements', href: '/services/project-management' },
    { label: 'Coordinate with local teams', href: '/about-us' },
  ];

  const handleTalk = () => {
    if (onOpenApply) {
      onOpenApply();
    } else {
      const el = document.getElementById('real-estate-faq-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="nri-services"
      className="relative w-full bg-white text-slate-900 py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

          {/* Left Column: Heading, Points & Button */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[26px] xl:text-[32px] font-bold text-slate-950 tracking-tight whitespace-normal lg:whitespace-nowrap leading-snug">
                Property Services for{' '}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)'
                  }}
                >
                  NRI Clients
                </span>
              </h2>
              <p className="mt-3 text-slate-600 font-normal text-sm sm:text-base leading-relaxed">
                Managing property from outside India can be challenging.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-800 mb-3">
                Ajay Homes supports NRI clients looking to:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {nriPoints.map((point) => (
                  <span
                    key={point.label}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none"
                  >
                    <Check className="w-4 h-4 shrink-0 text-[var(--primary)]" strokeWidth={2.5} />
                    <span>{point.label}</span>
                  </span>
                ))}
              </div>
            </div>

            <p className="text-slate-600 font-normal text-xs sm:text-sm leading-relaxed">
              Our local presence and broader{' '}
              property expertise help simplify the process.
            </p>

            <div className="pt-2">
              <Button
                onClick={handleTalk}
                variant="primary"
                size="md"
                icon={ArrowRight}
                showIcon={true}
              >
                Talk to Our Property Team
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Architectural Photography Frame (Matches Full Content Height) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative h-full flex flex-col"
          >
            <Link
              href="/gallery"
              aria-label="View Natraj Residence and more projects in our gallery"
              className="block relative rounded-2xl overflow-hidden w-full h-full min-h-[340px] sm:min-h-[400px] border border-slate-200 shadow-xl group focus:outline-none"
            >
              <img
                src="/images/residence-images/natraj-residence/img74.jpg"
                alt="Property Services for NRI Clients — Ajay Homes"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
