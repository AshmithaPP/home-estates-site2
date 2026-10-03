"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HardHat, Settings, Users, Construction, ShieldCheck, ArrowRight } from 'lucide-react';
import Button from '@/components/UI/Button';

/**
 * AboutTeamSection — "The People Behind Your Dream Home"
 * Target of the Home page "Meet Our Team" button (/about-us#team).
 * Layout: team illustration on the left, content on the right (stacks on mobile).
 * Team photo: /public/team/team-ajay.avif
 */
const teamRoles = [
  { label: 'Architects', icon: HardHat },
  { label: 'Engineers', icon: Settings },
  { label: 'Project Managers', icon: Users },
  { label: 'Site Experts', icon: Construction },
];

export const AboutTeamSection = () => {
  // Arriving from "Meet Our Team" (/about-us#team): scroll here, then drop the #team from the URL
  useEffect(() => {
    if (window.location.hash !== '#team') return;
    const timer = setTimeout(() => {
      document.getElementById('team')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(window.history.state, '', window.location.pathname + window.location.search);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="team"
      className="relative w-full py-10 sm:py-12 lg:py-14 overflow-hidden scroll-mt-20 text-[#1f2937]"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #fffcf8 60%, #fff8f0 100%)',
        fontFamily: 'Montserrat, sans-serif',
      }}
    >
      {/* ── Soft Ambient Amber Glow ─────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full blur-[150px] pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #ff8c00 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-x-16 items-center">

          {/* ── Left Column: Team Illustration ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative w-full aspect-[740/424] sm:aspect-[3/2] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#f3e3cc] shadow-[0_10px_30px_rgba(31,41,55,0.08)] bg-[#fff6ea]">
              <img
                src="/team/team-ajay.avif"
                alt="Ajay Homes team of engineers and site experts reviewing plans at a construction site"
                className="w-full h-full object-cover object-center select-none"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* ── Right Column: Content ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:col-start-7 text-left space-y-4 sm:space-y-5"
          >
            {/* Eyebrow */}
            <div className="flex items-center">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#4b5563]">
                Our Team
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold text-[#1f2937] tracking-tight leading-tight">
              The People Behind
              <span className="block text-[#ff8c00]">Your Dream Home</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#4b5563] font-normal leading-relaxed max-w-xl">
              A dedicated team of architects, engineers, project managers, and site experts working together to turn your vision into a well-built home.
            </p>

            {/* Team Roles Row: 2x2 on phones, one row with dividers from sm up */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-5 pt-1">
              {teamRoles.map(({ label, icon: Icon }, index) => (
                <div
                  key={label}
                  className={`flex flex-col items-center text-center gap-2 px-2 ${
                    index > 0 ? 'sm:border-l sm:border-[#f0d9b8]' : ''
                  } ${index % 2 === 1 ? 'border-l border-[#f0d9b8] sm:border-l' : ''}`}
                >
                  <span className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#ffe9cc]">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#1f2937]" strokeWidth={1.75} />
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-[#4b5563] leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Promise Line */}
            <div className="flex items-center gap-2.5 pt-1">
              <ShieldCheck className="w-6 h-6 text-[#ff8c00] shrink-0" />
              <p className="text-sm sm:text-base font-semibold text-[#1f2937]">
                One team. One responsibility. From planning to handover.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-1">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                icon={ArrowRight}
                showIcon={true}
              >
                Talk to Our Team
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
