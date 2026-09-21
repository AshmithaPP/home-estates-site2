import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Award, Compass, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../UI/Button';

const galleryImages = [
  { id: 1, title: 'Living Room Focal', src: '/images/residence-images/suresh-residence-view/img66.jpg' },
  { id: 2, title: 'Suite Bedroom', src: '/images/residence-images/suresh-residence-view/img78.jpg' },
  { id: 3, title: 'Estate Exterior', src: '/images/residence-images/suresh-residence-view/img72.jpg' },
  { id: 4, title: 'Luxury Lounge', src: '/images/residence-images/suresh-residence-view/img60.jpg' },
  { id: 5, title: 'Resort Pool Aerial', src: '/images/residence-images/suresh-residence-view/img30.jpg' },
  { id: 6, title: 'Infinity Pool Sunset', src: '/images/residence-images/suresh-residence-view/img57.jpg' },
  { id: 7, title: 'Master Bedroom Balcony', src: '/images/residence-images/suresh-residence-view/img54.jpg' },
];

export const ScrollGallery = () => {
  const containerRef = useRef(null);

  // Responsive state for mobile layout calibration
  const [isMobile, setIsMobile] = useState(false);
  const [[activeMobileIdx, direction], setActiveMobileIdx] = useState([0, 0]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track scroll progress within this section (0 to 1) for Desktop
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Desktop Scroll Transforms for Convergence towards center and Zoom In
  const tlX = useTransform(scrollYProgress, [0, 0.85], [0, 18]);
  const tlY = useTransform(scrollYProgress, [0, 0.85], [0, 15]);
  const tlScale = useTransform(scrollYProgress, [0, 0.85], [1, 1.12]);

  const trX = useTransform(scrollYProgress, [0, 0.85], [0, -18]);
  const trY = useTransform(scrollYProgress, [0, 0.85], [0, 15]);
  const trScale = useTransform(scrollYProgress, [0, 0.85], [1, 1.12]);

  const mlX = useTransform(scrollYProgress, [0, 0.85], [0, 14]);
  const mlY = useTransform(scrollYProgress, [0, 0.85], [0, 0]);
  const mlScale = useTransform(scrollYProgress, [0, 0.85], [1, 1.12]);

  const mrX = useTransform(scrollYProgress, [0, 0.85], [0, -14]);
  const mrY = useTransform(scrollYProgress, [0, 0.85], [0, 0]);
  const mrScale = useTransform(scrollYProgress, [0, 0.85], [1, 1.12]);

  const blX = useTransform(scrollYProgress, [0, 0.85], [0, 18]);
  const blY = useTransform(scrollYProgress, [0, 0.85], [0, -15]);
  const blScale = useTransform(scrollYProgress, [0, 0.85], [1, 1.12]);

  const brX = useTransform(scrollYProgress, [0, 0.85], [0, -18]);
  const brY = useTransform(scrollYProgress, [0, 0.85], [0, -15]);
  const brScale = useTransform(scrollYProgress, [0, 0.85], [1, 1.12]);

  const centerScale = useTransform(scrollYProgress, [0, 0.85], [1, 1.18]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -15]);

  const outerCardStyle = "w-36 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-[#ff8c00]/60 bg-[#2c2c2c] shadow-black/30";

  const handlePrevMobile = () => {
    setActiveMobileIdx(([prev]) => [
      (prev - 1 + galleryImages.length) % galleryImages.length,
      -1,
    ]);
  };

  const handleNextMobile = () => {
    setActiveMobileIdx(([prev]) => [
      (prev + 1) % galleryImages.length,
      1,
    ]);
  };

  const handleSelectThumbnail = (idx) => {
    setActiveMobileIdx(([prev]) => [
      idx,
      idx > prev ? 1 : -1,
    ]);
  };

  // Image Slide variants for smooth mobile image switching without black background
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : dir < 0 ? '-100%' : 0,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? '100%' : dir > 0 ? '-100%' : 0,
      opacity: 0,
      scale: 0.98,
    }),
  };

  // ── MOBILE LAYOUT (clean, crystal-clear, high-res interactive gallery with smooth transitions) ──
  if (isMobile) {
    const currentImg = galleryImages[activeMobileIdx];

    return (
      <section id="about" className="relative w-full py-12 px-5 text-[#f0ede8] overflow-hidden" style={{ background: '#2c2b2a' }}>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-xl mx-auto space-y-6"
        >

          {/* Header Block */}
          <div className="space-y-3 text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#ff8c00] bg-[#ff8c00]/10 px-3.5 py-1.5 rounded-full border border-[#ff8c00]/25 inline-flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#ff8c00]" />
              Architectural Excellence
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#f0ede8] tracking-tight leading-snug uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Everything homes &amp; estates living{' '}
              <span className="text-[#ff8c00] block mt-1">should be</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#f0ede8]/80 leading-relaxed font-normal">
              Immerse yourself in luxury residences engineered with spatial harmony, premium Italian marble, and bespoke finishes designed across prime Chennai locations.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-[#ff8c00] font-black text-lg">
                <Award className="w-4 h-4 text-[#ff8c00]" />
                <span>120+</span>
              </div>
              <p className="text-[11px] text-[#f0ede8]/70 mt-0.5 font-medium">Completed Projects</p>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-[var(--primary)] font-black text-lg">
                <ShieldCheck className="w-4 h-4 text-[var(--primary)]" />
                <span>20+ Yrs</span>
              </div>
              <p className="text-[11px] text-[#f0ede8]/70 mt-0.5 font-medium">Trusted Legacy</p>
            </div>
          </div>

          {/* ── MOBILE FEATURED IMAGE CARD WITH SMOOTH TRANSITION & ENTRANCE ANIMATION ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[var(--primary)] shadow-2xl bg-[#1e1e1e] group"
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentImg.id}
                src={currentImg.src}
                alt={currentImg.title}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 32 },
                  opacity: { duration: 0.35 },
                  scale: { duration: 0.35 }
                }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none z-10" />

            {/* Image Tag Badge top left */}
            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5 z-20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff8c00] animate-pulse" />
              <span>{currentImg.title}</span>
            </div>

            {/* Counter top right */}
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[10px] font-bold text-[#ff8c00] z-20">
              {activeMobileIdx + 1} / {galleryImages.length}
            </div>

            {/* Left & Right Chevron Controls */}
            <button
              onClick={handlePrevMobile}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center backdrop-blur-md active:scale-95 transition-all z-20"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={handleNextMobile}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center backdrop-blur-md active:scale-95 transition-all z-20"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </motion.div>

          {/* ── INTERACTIVE THUMBNAILS HORIZONTAL SCROLLBAR WITH SCROLL ENTRANCE ── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
          >
            {galleryImages.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => handleSelectThumbnail(idx)}
                className={`relative shrink-0 w-16 h-12 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
                  activeMobileIdx === idx
                    ? 'border-2 border-[var(--primary)] scale-105 shadow-md shadow-[var(--primary)]/30'
                    : 'opacity-55 border border-white/10 hover:opacity-100'
                }`}
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </motion.div>

          {/* CTA Button */}
          <div className="pt-2 flex justify-center">
            <Button href="#contact" size="md" className="w-full justify-center">
              Schedule a Private Tour
            </Button>
          </div>

        </motion.div>
      </section>
    );
  }

  // ── DESKTOP & LAPTOP LAYOUT (100% UNCHANGED 7-CARD CONVERGING SCROLL STAGE) ──
  return (
    <div id="about" ref={containerRef} className="relative h-[220vh] text-[#f0ede8]" style={{ background: '#2c2b2a' }}>
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 xl:px-16 py-4 sm:py-8 overflow-hidden">

        <div className="max-w-[1800px] w-full grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-10 items-center py-2 sm:py-4 lg:py-8">

          {/* Left Side: Headline & Content Block */}
          <motion.div
            style={{ y: textY }}
            className="lg:col-span-5 xl:col-span-5 z-30 text-left space-y-3 sm:space-y-5 select-text relative opacity-100"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#ff8c00] bg-[#ff8c00]/10 px-3.5 py-1.5 rounded-full border border-[#ff8c00]/25 inline-flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#ff8c00]" />
              Architectural Excellence
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f0ede8] tracking-tight leading-snug uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Everything homes &amp; estates living{' '}
              <span className="text-[#ff8c00] block mt-1 sm:mt-2">
                should be
              </span>
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-[#f0ede8]/80 leading-relaxed font-normal max-w-xl">
              Immerse yourself in luxury residences engineered with spatial harmony, premium Italian marble, and bespoke finishes designed across prime Chennai locations.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 pt-1 max-w-lg">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[#ff8c00] font-black text-lg sm:text-xl">
                  <Award className="w-4 h-4 text-[#ff8c00]" />
                  <span>120+</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#f0ede8]/70 mt-0.5 font-medium">Completed Projects</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[var(--primary)] font-black text-lg sm:text-xl">
                  <ShieldCheck className="w-4 h-4 text-[var(--primary)]" />
                  <span>20+ Yrs</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#f0ede8]/70 mt-0.5 font-medium">Trusted Legacy</p>
              </div>
            </div>

            {/* Feature Checklist */}
            <ul className="space-y-2 text-xs sm:text-sm text-[#f0ede8]/85 pt-1 font-medium max-w-md hidden sm:block">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <span>CMDA &amp; RERA Approved Clear Titles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <span>Bespoke Architectural &amp; Floorplan Customization</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <span>Prime Locations in Anna Nagar &amp; Besant Nagar</span>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="pt-1 sm:pt-2">
              <Button href="#contact" size="md">
                Schedule a Private Tour
              </Button>
            </div>

          </motion.div>

          {/* Right Side: 7-Card Animated Gallery Stage */}
          <div className="lg:col-span-7 relative w-full h-[530px] flex items-center justify-center my-auto z-20 rounded-3xl bg-white/[0.02] border border-white/10 p-6 shadow-2xl overflow-hidden">

            {/* 1. Center Focal Card */}
            <motion.div
              style={{ scale: centerScale }}
              className="z-20 w-52 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-[var(--primary)] bg-[#2c2c2c] shadow-black/40 shrink-0"
            >
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 2. Top Left Card */}
            <motion.div
              style={{ x: tlX, y: tlY, scale: tlScale }}
              className={`absolute top-[8%] left-[10%] z-10 ${outerCardStyle}`}
            >
              <img src={galleryImages[1].src} alt={galleryImages[1].title} className="w-full h-full object-cover" />
            </motion.div>

            {/* 3. Top Right Card */}
            <motion.div
              style={{ x: trX, y: trY, scale: trScale }}
              className={`absolute top-[8%] right-[10%] z-10 ${outerCardStyle}`}
            >
              <img src={galleryImages[2].src} alt={galleryImages[2].title} className="w-full h-full object-cover" />
            </motion.div>

            {/* 4. Mid Left Card */}
            <motion.div
              style={{ x: mlX, y: mlY, scale: mlScale }}
              className={`absolute top-[38%] left-[4%] z-10 ${outerCardStyle}`}
            >
              <img src={galleryImages[3].src} alt={galleryImages[3].title} className="w-full h-full object-cover" />
            </motion.div>

            {/* 5. Mid Right Card */}
            <motion.div
              style={{ x: mrX, y: mrY, scale: mrScale }}
              className={`absolute top-[38%] right-[4%] z-10 ${outerCardStyle}`}
            >
              <img src={galleryImages[4].src} alt={galleryImages[4].title} className="w-full h-full object-cover" />
            </motion.div>

            {/* 6. Bot Left Card */}
            <motion.div
              style={{ x: blX, y: blY, scale: blScale }}
              className={`absolute bottom-[8%] left-[10%] z-10 ${outerCardStyle}`}
            >
              <img src={galleryImages[5].src} alt={galleryImages[5].title} className="w-full h-full object-cover" />
            </motion.div>

            {/* 7. Bot Right Card */}
            <motion.div
              style={{ x: brX, y: brY, scale: brScale }}
              className={`absolute bottom-[8%] right-[10%] z-10 ${outerCardStyle}`}
            >
              <img src={galleryImages[6].src} alt={galleryImages[6].title} className="w-full h-full object-cover" />
            </motion.div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ScrollGallery;
