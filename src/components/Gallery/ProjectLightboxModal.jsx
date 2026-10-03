"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera, Sparkles, MapPin } from 'lucide-react';

export const ProjectLightboxModal = ({ 
  project, 
  isOpen, 
  onClose, 
  onOpenInquiry 
}) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  // Reset active photo index when project changes
  useEffect(() => {
    setActivePhotoIndex(0);
  }, [project]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && project?.galleryImages?.length) {
        setActivePhotoIndex((prev) => (prev + 1) % project.galleryImages.length);
      }
      if (e.key === 'ArrowLeft' && project?.galleryImages?.length) {
        setActivePhotoIndex((prev) => (prev - 1 + project.galleryImages.length) % project.galleryImages.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, project, onClose]);

  if (!isOpen || !project) return null;

  const images = project.galleryImages?.length ? project.galleryImages : [project.mainImage];
  const currentImage = images[activePhotoIndex] || project.mainImage;

  const handleNext = () => {
    setActivePhotoIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActivePhotoIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-2 sm:p-6 select-none">
        
        {/* Top Header Bar */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-white pointer-events-auto">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold flex items-center gap-2">
              <Camera className="w-3.5 h-3.5 text-[var(--primary)]" />
              <span>{activePhotoIndex + 1} of {images.length} Photos</span>
            </div>
            <Link href="/contact" className="hidden sm:inline-block text-xs text-white/60 hover:text-[var(--primary)] transition-colors">
              {project.community}
            </Link>
          </div>

          <button suppressHydrationWarning
            onClick={onClose}
            aria-label="Close Lightbox"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--primary)] hover:text-black flex items-center justify-center transition-all cursor-pointer border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Central Presentation Area */}
        <div className="relative w-full max-w-6xl max-h-[85vh] flex flex-col items-center justify-center my-auto">
          
          {/* Main Photo Display */}
          <div className="relative w-full h-[55vh] sm:h-[65vh] flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={currentImage}
                alt={`${project.title} - View ${activePhotoIndex + 1}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="max-h-full max-w-full object-contain"
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button suppressHydrationWarning
                  onClick={handlePrev}
                  aria-label="Previous Photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[var(--primary)] hover:text-black text-white flex items-center justify-center transition-all cursor-pointer border border-white/15 backdrop-blur-md shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button suppressHydrationWarning
                  onClick={handleNext}
                  aria-label="Next Photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[var(--primary)] hover:text-black text-white flex items-center justify-center transition-all cursor-pointer border border-white/15 backdrop-blur-md shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Bottom Info Bar & Thumbnails Row */}
          <div className="w-full mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs text-white/70 mt-0.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[var(--primary)]" />
                <Link href="/services/construction" className="hover:text-[var(--primary)] transition-colors">
                  {project.community}
                </Link>{' '}
                &bull;{' '}
                <Link href="/services/construction" className="hover:text-[var(--primary)] transition-colors">
                  {project.bhk}
                </Link>
              </p>
            </div>

            {/* Thumbnails Row */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto max-w-sm pb-1 scrollbar-none">
                {images.map((img, idx) => (
                  <button suppressHydrationWarning
                    key={idx}
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`relative w-14 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activePhotoIndex === idx 
                        ? 'border-[var(--primary)] scale-105 shadow-[0_0_12px_rgba(255,140,0,0.5)]' 
                        : 'border-white/20 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Get Quote CTA */}
            <button suppressHydrationWarning
              onClick={() => {
                onClose();
                onOpenInquiry(project);
              }}
              className="py-2.5 px-6 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-light)] text-black font-extrabold text-xs sm:text-sm tracking-wide transition-all shadow-lg hover:scale-105 cursor-pointer shrink-0"
            >
              Get This Design
            </button>
          </div>

        </div>

      </div>
    </AnimatePresence>
  );
};

export default ProjectLightboxModal;
