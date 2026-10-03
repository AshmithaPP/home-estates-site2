import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Eyebrow Component
 * Left-aligned badge with redirection to corresponding service
 */
export const Eyebrow = ({ text, slideId }) => {
  const getHref = () => {
    if (slideId === 3) return '/services/property-developer';
    if (slideId === 2) return '/services/real-estate';
    return '/services/construction';
  };

  return (
    <div className="flex justify-start my-2 select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={`eyebrow-${slideId}`}
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.9 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="inline-flex items-center"
        >
          <div
            className="hero-bob glass-pill-dark px-4 py-1.5 rounded-full border border-[var(--primary)]/50 shadow-md text-xs font-medium text-white/95 flex items-center transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-2 inline-block shadow-[0_0_6px_var(--primary)]" />
            <span className="tracking-wide">({text})</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Eyebrow;
