import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * HeroBackground Component
 * Implements 3D right-to-left folding image transition.
 * Lightened background image filter matching Screenshot 1 bright interior warmth.
 */
export const HeroBackground = ({ activeIndex, slides, direction = 1 }) => {
  const activeSlide = slides[activeIndex];

  // Preload + decode every slide image up front so a slide change never
  // stalls the transition while a full-size JPEG downloads/decodes.
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
      img.decode?.().catch(() => {});
    });
  }, [slides]);

  const foldVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      rotateY: direction > 0 ? 35 : -35,
      scale: 0.92,
      opacity: 0,
      transformOrigin: direction > 0 ? 'left center' : 'right center',
    }),
    center: {
      x: '0%',
      rotateY: 0,
      scale: 1,
      opacity: 1,
      transformOrigin: 'center center',
      transition: {
        x: { type: 'spring', stiffness: 220, damping: 26 },
        rotateY: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.4 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      rotateY: direction > 0 ? -35 : 35,
      scale: 0.9,
      opacity: 0,
      transformOrigin: direction > 0 ? 'right center' : 'left center',
      transition: {
        x: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
        rotateY: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.4 },
      },
    }),
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#e0d6cb] perspective-container select-none">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={activeSlide.id}
          custom={direction}
          variants={foldVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full fold-layer shadow-2xl"
        >
          {/* Background Image with subtle Ken Burns zoom (CSS keyframes run on the compositor) */}
          <img
            src={activeSlide.image}
            alt="Hero Background"
            decoding="async"
            fetchPriority={activeIndex === 0 ? 'high' : 'auto'}
            className="hero-kenburns w-full h-full object-cover object-center brightness-[1.06] contrast-[0.98]"
          />

          {/* Light Soft Gradient Overlays for contrast while maintaining bright image feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Soft Warm Ambient Light Accents — static radial gradients instead of
          blur-[120px] blobs so they aren't re-rasterized on every slide frame */}
      <div
        className="absolute -top-[428px] -left-[428px] w-[1100px] h-[1100px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(254,150,1,0.1) 0%, rgba(254,150,1,0.09) 25%, rgba(254,150,1,0.05) 45%, rgba(254,150,1,0) 100%)' }}
      />
      <div
        className="absolute -bottom-[428px] -right-[428px] w-[1100px] h-[1100px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,201,115,0.1) 0%, rgba(255,201,115,0.09) 25%, rgba(255,201,115,0.05) 45%, rgba(255,201,115,0) 100%)' }}
      />
    </div>
  );
};

export default HeroBackground;
