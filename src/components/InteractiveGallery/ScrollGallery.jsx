import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Award, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';

/**
 * ScrollGallery Component
 * Refinements:
 * 1. Reduced heading font size ("Everything homes & estates living should be").
 * 2. All 6 outer surrounding cards have 100% IDENTICAL fixed dimensions & aspect ratios (aspect-[4/3]).
 * 3. Parallax scroll-driven convergence towards center & 3D zoom effect.
 * 4. Fully responsive on mobile with constrained transforms and overflow-hidden.
 */
export const ScrollGallery = () => {
  const containerRef = useRef(null);

  // Responsive state for mobile layout calibration
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track scroll progress within this section (0 to 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Scroll Transforms for Convergence towards center and Zoom In
  // Top Left Card
  const tlX = useTransform(scrollYProgress, [0, 0.85], isMobile ? [-8, -2] : [-80, -15]);
  const tlY = useTransform(scrollYProgress, [0, 0.85], isMobile ? [-10, -2] : [-75, -15]);
  const tlScale = useTransform(scrollYProgress, [0, 0.85], isMobile ? [0.9, 1.1] : [0.9, 1.18]);

  // Top Right Card
  const trX = useTransform(scrollYProgress, [0, 0.85], isMobile ? [8, 2] : [80, 15]);
  const trY = useTransform(scrollYProgress, [0, 0.85], isMobile ? [-10, -2] : [-75, -15]);
  const trScale = useTransform(scrollYProgress, [0, 0.85], isMobile ? [0.9, 1.1] : [0.9, 1.18]);

  // Mid Left Card
  const mlX = useTransform(scrollYProgress, [0, 0.85], isMobile ? [-5, -1] : [-100, -25]);
  const mlY = useTransform(scrollYProgress, [0, 0.85], [0, 0]);
  const mlScale = useTransform(scrollYProgress, [0, 0.85], isMobile ? [0.9, 1.1] : [0.9, 1.18]);

  // Mid Right Card
  const mrX = useTransform(scrollYProgress, [0, 0.85], isMobile ? [5, 1] : [100, 25]);
  const mrY = useTransform(scrollYProgress, [0, 0.85], [0, 0]);
  const mrScale = useTransform(scrollYProgress, [0, 0.85], isMobile ? [0.9, 1.1] : [0.9, 1.18]);

  // Bot Left Card
  const blX = useTransform(scrollYProgress, [0, 0.85], isMobile ? [-8, -2] : [-80, -15]);
  const blY = useTransform(scrollYProgress, [0, 0.85], isMobile ? [10, 2] : [75, 15]);
  const blScale = useTransform(scrollYProgress, [0, 0.85], isMobile ? [0.9, 1.1] : [0.9, 1.18]);

  // Bot Right Card
  const brX = useTransform(scrollYProgress, [0, 0.85], isMobile ? [8, 2] : [80, 15]);
  const brY = useTransform(scrollYProgress, [0, 0.85], isMobile ? [10, 2] : [75, 15]);
  const brScale = useTransform(scrollYProgress, [0, 0.85], isMobile ? [0.9, 1.1] : [0.9, 1.18]);

  // Center Focal Card
  const centerScale = useTransform(scrollYProgress, [0, 0.85], isMobile ? [1, 1.15] : [1, 1.25]);

  // Headline translation on scroll (Opacity stays 100% crisp throughout)
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -15]);

  // Uniform dimensions for ALL 6 surrounding outer cards
  const outerCardStyle = "w-20 sm:w-32 lg:w-36 aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 border-[#ff8c00]/60 bg-[#2c2c2c] shadow-black/30";

  return (
    <div id="about" ref={containerRef} className="relative h-[220vh] text-[#f0ede8]" style={{ background: '#2c2b2a' }}>
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 xl:px-16 py-4 sm:py-8 overflow-hidden">

        <div className="max-w-[1800px] w-full grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-10 items-center py-2 sm:py-4 lg:py-8">

          {/* Left Side: Headline & Expanded Content Block (Kept 100% crisp and readable) */}
          <motion.div
            style={{ y: textY }}
            className="lg:col-span-5 xl:col-span-5 z-30 text-left space-y-3 sm:space-y-5 select-text relative opacity-100"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#ff8c00] bg-[#ff8c00]/10 px-3.5 py-1.5 rounded-full border border-[#ff8c00]/25 inline-flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#ff8c00]" />
              Architectural Excellence
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#f0ede8] tracking-tight leading-tight">
              Everything homes & estates living{' '}
              <span className="font-serif-luxury text-[#ff8c00] font-bold block mt-1 sm:mt-2">
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
                <div className="flex items-center gap-2 text-[#00d26a] font-black text-lg sm:text-xl">
                  <ShieldCheck className="w-4 h-4 text-[#00d26a]" />
                  <span>20+ Yrs</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#f0ede8]/70 mt-0.5 font-medium">Trusted Legacy</p>
              </div>
            </div>

            {/* Feature Checklist — Hidden on small mobile screens to prevent vertical squishing */}
            <ul className="space-y-2 text-xs sm:text-sm text-[#f0ede8]/85 pt-1 font-medium max-w-md hidden sm:block">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00d26a] shrink-0" />
                <span>CMDA & RERA Approved Clear Titles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00d26a] shrink-0" />
                <span>Bespoke Architectural & Floorplan Customization</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00d26a] shrink-0" />
                <span>Prime Locations in Anna Nagar & Besant Nagar</span>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="pt-1 sm:pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-black bg-[#ff8c00] hover:bg-[#ff9d26] transition-all shadow-lg hover:shadow-[#ff8c00]/25 cursor-pointer"
              >
                <span>Schedule a Private Tour</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

          {/* Right Side: 7-Card Animated Gallery Stage (Fully visible cards with comfortable padding and overflow containment) */}
          <div className="lg:col-span-7 relative w-full h-[320px] sm:h-[480px] lg:h-[530px] flex items-center justify-center my-auto z-20 rounded-3xl bg-white/[0.02] border border-white/10 p-4 sm:p-6 shadow-2xl overflow-hidden">

            {/* 1. Center Focal Card */}
            <motion.div
              style={{ scale: centerScale }}
              className="z-20 w-28 sm:w-48 lg:w-56 aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-3 sm:border-4 border-[#00d26a] bg-[#2c2c2c] shadow-black/40"
            >
              <img
                src="/images/residence-images/suresh-residence-view/img66.jpg"
                alt="Living Room Focal"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 2. Top Left Card */}
            <motion.div
              style={{ x: tlX, y: tlY, scale: tlScale }}
              className={`absolute top-[6%] left-[6%] sm:top-[8%] sm:left-[14%] z-10 ${outerCardStyle}`}
            >
              <img
                src="/images/residence-images/suresh-residence-view/img78.jpg"
                alt="Suite Bedroom"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 3. Top Right Card */}
            <motion.div
              style={{ x: trX, y: trY, scale: trScale }}
              className={`absolute top-[6%] right-[6%] sm:top-[8%] sm:right-[14%] z-10 ${outerCardStyle}`}
            >
              <img
                src="/images/residence-images/suresh-residence-view/img72.jpg"
                alt="Estate Exterior"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 4. Mid Left Card */}
            <motion.div
              style={{ x: mlX, y: mlY, scale: mlScale }}
              className={`absolute top-[38%] left-[2%] sm:left-[8%] z-10 ${outerCardStyle}`}
            >
              <img
                src="/images/residence-images/suresh-residence-view/img60.jpg"
                alt="Luxury Lounge"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 5. Mid Right Card */}
            <motion.div
              style={{ x: mrX, y: mrY, scale: mrScale }}
              className={`absolute top-[38%] right-[2%] sm:right-[8%] z-10 ${outerCardStyle}`}
            >
              <img
                src="/images/residence-images/suresh-residence-view/img30.jpg"
                alt="Resort Pool Aerial"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 6. Bot Left Card */}
            <motion.div
              style={{ x: blX, y: blY, scale: blScale }}
              className={`absolute bottom-[6%] left-[6%] sm:bottom-[8%] sm:left-[14%] z-10 ${outerCardStyle}`}
            >
              <img
                src="/images/residence-images/suresh-residence-view/img57.jpg"
                alt="Infinity Pool Sunset"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 7. Bot Right Card */}
            <motion.div
              style={{ x: brX, y: brY, scale: brScale }}
              className={`absolute bottom-[6%] right-[6%] sm:bottom-[8%] sm:right-[14%] z-10 ${outerCardStyle}`}
            >
              <img
                src="/images/residence-images/suresh-residence-view/img54.jpg"
                alt="Master Bedroom Balcony"
                className="w-full h-full object-cover"
              />
            </motion.div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ScrollGallery;
