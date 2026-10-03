"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronRight, ChevronLeft, Camera } from 'lucide-react';

const getCategoryHref = (category) => {
  if (!category) return '/services/construction';
  const cat = category.toLowerCase();
  if (cat.includes('villa') || cat.includes('residence')) return '/services/construction';
  if (cat.includes('suite') || cat.includes('living') || cat.includes('kitchen') || cat.includes('dining') || cat.includes('interior')) return '/services/interior-design';
  if (cat.includes('apartment') || cat.includes('plot') || cat.includes('commercial')) return '/services/property-developer';
  return '/services/construction';
};

export const FeaturedDeliveredSection = ({ featuredProjects, onSelectProject, onOpenInquiry }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 3 cards at a time on desktop
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, featuredProjects.length - itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleProjects = featuredProjects.slice(currentIndex, currentIndex + itemsPerPage);
  // If at edge, wrap around seamlessly
  const displayCards = visibleProjects.length < itemsPerPage
    ? [...visibleProjects, ...featuredProjects.slice(0, itemsPerPage - visibleProjects.length)]
    : visibleProjects;

  return (
    <section className="w-full mb-14 sm:mb-20">
      {/* ── Header Row: Icon + Title + Subtitle ──────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 relative z-10">
          <div className="flex items-start sm:items-center gap-3">
            {/* Star Icon Badge (Matching Livspace Pink/Orange 3D Star Badge) */}
            <div
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg border border-[var(--primary)]/50 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)'
              }}
            >
              <Star className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-black fill-black/90 drop-shadow" />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold text-[var(--text-primary)] tracking-tight leading-snug">
                Featured Delivered Homes
              </h2>
              <p className="text-xs sm:text-[13px] text-[var(--text-muted)] font-medium mt-0.5 leading-relaxed">
                Browse our top{' '}
                <Link href="/services/construction" className="text-[var(--text-primary)] hover:text-[var(--primary)] font-semibold transition-colors">
                  home construction
                </Link>{' '}
                &{' '}
                <Link href="/services/interior-design" className="text-[var(--text-primary)] hover:text-[var(--primary)] font-semibold transition-colors">
                  luxury interior projects
                </Link>
                , handpicked by our experts.
              </p>
            </div>
          </div>

          {/* Controls: Left / Right navigation arrows */}
          <div className="hidden sm:flex items-center gap-2 self-end sm:self-center">
            <button suppressHydrationWarning
              onClick={handlePrev}
              aria-label="Previous Featured Projects"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[var(--primary)] hover:text-black text-white border border-white/15 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button suppressHydrationWarning
              onClick={handleNext}
              aria-label="Next Featured Projects"
              className="w-9 h-9 rounded-full bg-white text-black hover:bg-[var(--primary)] hover:text-black flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg hover:scale-105"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Carousel Cards Row (Screenshot 1 Exact Layout) ──────────── */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {displayCards.map((project, idx) => (
              <motion.div
                key={`${project.id}-${idx}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[var(--grey-deep)] rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--primary)]/60 transition-all duration-300 shadow-xl flex flex-col group"
              >
                {/* Image Section with Photo Badge */}
                <div
                  className="relative aspect-[16/9] overflow-hidden cursor-pointer bg-black/40"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Photo Count Badge (Matching Livspace 📷 badge) */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10 shadow-md">
                    <Camera className="w-3.5 h-3.5 text-[var(--primary)]" />
                    <span>{project.photosCount}</span>
                  </div>

                  {/* Top Category Tag */}
                  <Link
                    href={getCategoryHref(project.category)}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[var(--primary)]/90 hover:bg-[var(--primary)] text-black text-[11px] font-extrabold uppercase tracking-wider shadow-md z-10 transition-colors cursor-pointer"
                  >
                    {project.category}
                  </Link>
                </div>

                {/* Card Content */}
                <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-[13px] sm:text-sm font-bold text-[var(--text-primary)] hover:text-[var(--primary)] line-clamp-2 leading-snug cursor-pointer transition-colors"
                      title={project.featuredTitle || project.title}
                    >
                      {project.featuredTitle || project.title}
                    </h3>
                    <p className="text-[11.5px] sm:text-xs text-[var(--text-muted)] mt-1">
                      <Link href="/services/construction" className="hover:text-[var(--primary)] transition-colors">
                        {project.community}
                      </Link>{' '}
                      &bull; <span className="text-[var(--text-primary)] font-semibold">{project.bhk}</span>
                    </p>
                  </div>

                  {/* Outlined Pill CTA Button (Livspace Exact replica) */}
                  <button suppressHydrationWarning
                    onClick={() => onOpenInquiry(project)}
                    className="w-full py-2 px-4 rounded-full border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-black font-bold text-xs sm:text-[13px] text-center transition-all duration-200 cursor-pointer shadow-sm hover:shadow-[0_0_18px_rgba(255,140,0,0.35)]"
                  >
                    {project.featuredButtonText || 'Get Similar Interiors'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating Right Arrow on Mobile / Overflow indicator */}
          <div className="sm:hidden flex items-center justify-center gap-3 mt-5">
            <button suppressHydrationWarning
              onClick={handlePrev}
              className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center border border-white/15"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-[var(--text-muted)] font-semibold">
              {currentIndex + 1} / {featuredProjects.length}
            </span>
            <button suppressHydrationWarning
              onClick={handleNext}
              className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
    </section>
  );
};

export default FeaturedDeliveredSection;
