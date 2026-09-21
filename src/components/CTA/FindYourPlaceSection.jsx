import React from 'react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';

const FindYourPlaceSection = ({ onOpenTourModal }) => {
  return (
    <section className="relative w-full h-[540px] sm:h-[640px] lg:h-[720px] overflow-hidden" style={{ background: '#f5f5f5' }}>
      {/* Background Image Container - 100% Full Width Edge-to-Edge */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="/images/residence-images/suresh-residence-view/img24.jpg"
          alt="Ajay Homes & Estates Luxury Interior"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Floating Card Content Container */}
      <div className="relative max-w-7xl mx-auto h-full flex items-center px-6 sm:px-12 lg:px-20 z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full sm:w-[500px] md:w-[560px] bg-white text-[#1a1a1a] rounded-3xl p-8 sm:p-12 flex flex-col justify-between shadow-2xl border border-black/10 relative overflow-hidden"
        >
          {/* Card Headline */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.12] tracking-tight text-[#1a1a1a] uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Interested in promoting <span className="text-[#ff8c00]">your property?</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#444444] font-sans leading-relaxed pt-1 font-medium">
              Get the best offer in the market with Chennai's most trusted partner. Let's build value together — for your land and our legacy.
            </p>
          </div>

          {/* Bottom Controls inside card */}
          <div className="mt-8 pt-4 flex items-center justify-between border-t border-black/10">
            {/* Reusable Button inside Card */}
            <Button onClick={onOpenTourModal} size="md">
              Get Best Offer
            </Button>

            {/* Line Art Door Icon */}
            <div className="text-[#333333] opacity-80 hover:opacity-100 transition-opacity">
              <svg
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 4h-7a2 2 0 0 0 -2 2v14" />
                <path d="M6 20h12" />
                <path d="M13 4l6 2v14l-6 2v-18z" />
                <circle cx="15.5" cy="13.5" r=".5" fill="currentColor" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FindYourPlaceSection;
