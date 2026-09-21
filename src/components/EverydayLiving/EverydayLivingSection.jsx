import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../UI/Button';

const tabs = ['INTEGRITY', 'QUALITY', 'VALUES', 'HERITAGE'];

const tabContent = {
  INTEGRITY: {
    dropLetter: 'W',
    body: `We stand by complete transparency with every family we serve. From land acquisition to final handover, every rupee, every promise, every approval is documented — no surprises, no hidden costs.

Our customers are not just buyers; they are our ambassadors, referrals, and lifelong relationships built on honesty and trust.`,
  },
  QUALITY: {
    dropLetter: 'E',
    body: `Every home reflects our obsession with craft. Teakwood doors, granite flooring, modular kitchen fittings, ambient ceiling lighting — all sourced from premium vendors, installed with precision.

We do not cut corners. From foundation to finish, every material is inspected and every worker is trained.`,
  },
  VALUES: {
    dropLetter: 'O',
    body: `Our core values drive every decision — customer first, community always. We design homes that bring families together, neighbourhoods that foster connection, and estates that serve generations.

Over two decades, we have built thriving communities in Velachery, OMR, Porur, Tambaram, and Anna Nagar.`,
  },
  HERITAGE: {
    dropLetter: 'T',
    body: `Two decades of trust. Over a thousand families. 120+ completed projects. The heritage of Ajay Homes & Estates is written in brick and stone across Chennai's most prime locations.

Our heritage is not just age — it is a living legacy of quality, relationships, and the dream of home made real.`,
  },
};

/**
 * EverydayLivingSection — "From Vision to Reality" 2-column layout
 * Left: eyebrow + bold heading + auto-cycling tabs + drop-cap body + CTA
 * Right: luxury home image with floating stats badge
 */
export const EverydayLivingSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Auto-cycle tabs every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentTab = tabs[activeTab];
  const currentContent = tabContent[currentTab];

  return (
    <section
      id="interior"
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden text-[#1a1a1a] py-10 lg:py-14"
      style={{ background: '#ffffff' }}
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto relative z-10">

        {/* ── LEFT COLUMN ─────────────────────────────────── */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-4 lg:space-y-5">

          {/* Pill Badge matching reference image */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full border border-black/15 bg-white text-[10px] font-extrabold tracking-[0.25em] uppercase text-black/70 shadow-xs"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Ajay Homes &amp; Estates
            </span>
          </motion.div>

          {/* Heading — Montserrat Bold matching Image 2 */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1a1a1a] leading-[1.12] tracking-tight uppercase"
            style={{ fontFamily: 'Montserrat' }}
          >
            From Vision<br />
            To Reality,{' '}
            <span className="text-[#ff8c00]">Your</span><br />
            Dream Home.
          </motion.h2>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xs sm:text-sm text-[#555555] leading-relaxed max-w-lg font-medium"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            One of Chennai's fastest growing construction firms — building quality residences with customized solutions for thousands of happy families across prime city hubs.
          </motion.p>

          {/* Auto-cycling Tab Pills — Exact style as reference image 2 */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-0 border-b border-black/10 pt-2"
          >
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`relative px-3 sm:px-4 py-2 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer ${
                  activeTab === i
                    ? 'text-[#ff8c00]'
                    : 'text-[#777777] hover:text-[#1a1a1a]'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {tab}
                {activeTab === i && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff8c00]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {i < tabs.length - 1 && (
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-black/20 text-[10px] pointer-events-none select-none">|</span>
                )}
              </button>
            ))}
          </motion.div>

          {/* Auto-animated Drop-Cap Body Text */}
          <div className="min-h-[110px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="space-y-3"
              >
                {currentContent.body.split('\n\n').map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-xs sm:text-sm text-[#444444] leading-relaxed font-normal"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {idx === 0 ? (
                      <>
                        <span
                          className="float-left mr-2 font-black text-[#ff8c00] leading-none"
                          style={{ fontSize: '3.2rem', lineHeight: '0.8', fontFamily: 'Montserrat, sans-serif' }}
                        >
                          {currentContent.dropLetter}
                        </span>
                        {paragraph.slice(1)}
                      </>
                    ) : paragraph}
                  </p>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress dots indicator */}
          <div className="flex items-center gap-2">
            {tabs.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className="cursor-pointer"
              >
                <motion.div
                  animate={{
                    width: activeTab === i ? 24 : 6,
                    backgroundColor: activeTab === i ? '#ff8c00' : 'rgba(0,0,0,0.18)',
                  }}
                  transition={{ duration: 0.35 }}
                  className="h-[3px] rounded-full"
                />
              </button>
            ))}
          </div>

          {/* Key Feature Highlights Checklist */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-black/10 text-[10px] sm:text-[11px] font-bold text-[#333333]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff8c00] shrink-0" />
              <span>CMDA &amp; RERA Approved</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff8c00] shrink-0" />
              <span>On-Time Handover</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff8c00] shrink-0" />
              <span>Custom Floorplans</span>
            </div>
          </div>

          {/* CTA Button — matching yellow/orange pill button in Image 2 */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Button size="md">
              Explore Story
            </Button>
          </motion.div>

        </div>

        {/* ── RIGHT COLUMN — Framed Image Card matching Image 2 ───────────────── */}
        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-black/10 aspect-[4/3] lg:aspect-[4/3.4] min-h-[420px] sm:min-h-[480px] lg:min-h-[560px] w-full group"
          >
            <img
              src="/images/residence-images/ankan-resideance-view/img13.jpg"
              alt="Ajay Homes & Estates Architecture Team"
              className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
            />
            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Floating Stats Badge on bottom left inside image card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-md border border-black/10 rounded-2xl px-5 py-3.5 shadow-xl space-y-1.5"
            >
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <span className="block text-lg font-black text-[#ff8c00]" style={{ fontFamily: 'Montserrat, sans-serif' }}>20+</span>
                  <span className="block text-[8px] font-bold uppercase tracking-wider text-[#555555]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Years</span>
                </div>
                <div className="w-px h-6 bg-black/10" />
                <div className="text-center">
                  <span className="block text-lg font-black text-[var(--primary)]" style={{ fontFamily: 'Montserrat, sans-serif' }}>1000+</span>
                  <span className="block text-[8px] font-bold uppercase tracking-wider text-[#555555]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Families</span>
                </div>
                <div className="w-px h-6 bg-black/10" />
                <div className="text-center">
                  <span className="block text-lg font-black text-[#ff8c00]" style={{ fontFamily: 'Montserrat, sans-serif' }}>120+</span>
                  <span className="block text-[8px] font-bold uppercase tracking-wider text-[#555555]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Projects</span>
                </div>
              </div>
              <p className="text-[8px] text-[#777777] font-bold uppercase tracking-wider border-t border-black/10 pt-1.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Chennai's Most Trusted Luxury Builder
              </p>
            </motion.div>
          </motion.div>
        </div>

      </div>

    </section>
  );
};

export default EverydayLivingSection;
