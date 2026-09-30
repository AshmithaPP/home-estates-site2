"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Button from '../UI/Button';

export const VisitUsSection = () => {
  const contactDetails = [
    { label: 'LOCATION', value: 'Ajay Homes, Chennai, Tamil Nadu' },
    { label: 'PHONE', value: '+91 98400 12345', href: 'tel:+919840012345' },
    { label: 'EMAIL', value: 'contact@ajayhomes.com', href: 'mailto:contact@ajayhomes.com' },
    { label: 'WORKING HOURS', value: 'Monday – Saturday: 9:30 AM – 6:30 PM' },
  ];

  return (
    <section
      id="visit-us"
      className="relative w-full text-[#f0ede8] py-12 sm:py-16 lg:py-20 border-t border-white/10 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #1e1e1e 0%, #282828 50%, #222222 100%)',
        fontFamily: 'Montserrat, sans-serif'
      }}
    >
      {/* Ambient background glow matching our brand pattern */}
      <div
        className="absolute top-1/2 -right-40 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, #ff8c00 0%, transparent 70%)' }}
      />

      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">

        {/* ── Section Title (Matching 'Worldwide Reservations Centre') ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#f0ede8] tracking-tight leading-tight text-left">
            Visit Us
          </h2>
        </motion.div>

        {/* ── Two-Column Grid (Exact Reference Replica) ─────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ── LEFT COLUMN: Image (ankan-resideance-view/img26.jpg) ─── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#1e1e1e] group">
              <img
                src="/images/residence-images/ankan-resideance-view/img26.jpg"
                alt="Ajay Homes, Chennai, Tamil Nadu"
                className="w-full h-[280px] sm:h-[320px] lg:h-[350px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 text-white">
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#ff8c00] mb-0.5">Experience Centre</p>
                <p className="text-sm sm:text-base font-bold">Ajay Homes &bull; Chennai, Tamil Nadu</p>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Contact Details (Exact Replica of Reference) ─ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-4 sm:space-y-5 pt-0.5"
          >

            {/* 1. EMAIL ROW (Exact Reference Top Block) */}
            <div className="flex items-start gap-3.5">
              {/* Circular Outline Mail Icon */}
              <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#ff8c00] shrink-0 mt-0.5 bg-white/5">
                <Mail className="w-4 h-4 stroke-[1.6]" />
              </div>

              <div>
                <span className="block text-[10.5px] font-bold uppercase tracking-widest text-[#a0a0a0] mb-0.5">
                  EMAIL
                </span>
                <a
                  href="mailto:contact@ajayhomes.com"
                  className="text-sm sm:text-base font-bold text-[#f0ede8] hover:text-[#ff8c00] transition-colors"
                >
                  contact@ajayhomes.com
                </a>
              </div>
            </div>

            {/* Divider Line */}
            <div className="border-t border-white/10" />

            {/* 2. PHONE & LOCATION BLOCK (Exact Reference Bottom Block) */}
            <div>
              <div className="flex items-center gap-3 mb-2.5">
                {/* Circular Outline Phone Icon */}
                <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#ff8c00] shrink-0 bg-white/5">
                  <Phone className="w-4 h-4 stroke-[1.6]" />
                </div>
                <span className="text-[10.5px] font-bold uppercase tracking-widest text-[#a0a0a0]">
                  PHONE &amp; OFFICE DETAILS
                </span>
              </div>

              {/* Table / List with Horizontal Divider Lines */}
              <div className="divide-y divide-white/10 border-y border-white/10">
                {contactDetails.map((item) => (
                  <div
                    key={item.label}
                    className="py-2.5 sm:py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 text-xs sm:text-[13px] font-medium"
                  >
                    <span className="text-[#a0a0a0] font-bold uppercase tracking-wider text-[10.5px] sm:text-[11px]">
                      {item.label}
                    </span>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-bold text-[#f0ede8] hover:text-[#ff8c00] transition-colors sm:text-right"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-bold text-[#f0ede8] sm:text-right">
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 3. GET DIRECTIONS BUTTON */}
            <div className="pt-1.5">
              <Button
                href="https://maps.google.com/?q=Ajay+Homes+Chennai+Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                icon={MapPin}
                showIcon={true}
                className="w-full sm:w-auto"
              >
                Get Directions
              </Button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default VisitUsSection;
