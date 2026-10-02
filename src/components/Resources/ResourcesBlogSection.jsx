"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  ArrowRight, 
  BookOpen 
} from 'lucide-react';
import { blogArticles } from '@/data/blogData';

export const ResourcesBlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = [
    'ALL',
    'CONSTRUCTION',
    'APPROVALS & CMDA',
    'COST & PLANNING',
    'TRANSPARENCY',
    'UNCATEGORIZED'
  ];

  const filteredArticles = blogArticles.filter((article) => {
    return selectedCategory === 'ALL' || article.category === selectedCategory;
  });

  return (
    <section 
      id="resources-content"
      className="relative w-full py-14 sm:py-18 lg:py-20 bg-white text-slate-900 overflow-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      {/* ── Subtle architectural background grid accent ─────────────────── */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(var(--grey-deepest) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header (One-line Heading & Centered Pills) ────────── */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          
          {/* One Line Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight text-center leading-tight">
            Comprehensive Knowledge &{' '}
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)'
              }}
            >
              Real Benchmarks
            </span>
          </h2>

          {/* ── Category Filter Pills (wrap on mobile/tablet, one line from md up) ── */}
          <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-center gap-1.5 sm:gap-2 mt-5 sm:mt-6 md:overflow-x-auto scrollbar-none py-1 px-1 md:px-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  suppressHydrationWarning
                  className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-[12.5px] font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[var(--primary)] text-black shadow-md scale-105'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-black border border-slate-200/80'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* ── 3-Column Responsive Grid matching the Reference Image ─────────── */}
        {filteredArticles.length === 0 ? (
          <div className="py-16 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-sm font-semibold text-slate-700">No articles found in this category.</p>
            <button suppressHydrationWarning
              onClick={() => setSelectedCategory('ALL')}
              className="mt-3 px-4 py-1.5 text-xs font-bold rounded-full bg-[var(--primary)] text-black hover:opacity-90 transition-all cursor-pointer"
            >
              Show All Guides
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredArticles.map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="h-full"
              >
                <Link
                  href={`/resources/${article.slug}`}
                  className="block h-full group focus:outline-none"
                  aria-label={`Read article: ${article.title}`}
                >
                  <article className="bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-sm group-hover:shadow-xl group-hover:border-[var(--primary)]/60 transition-all duration-300 flex flex-col h-full">
                    
                    {/* 1. Card Top Image Banner with 16:10 Aspect Ratio & Graphic Title */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      
                      {/* Subtle dark contrast layer matching reference image thumbnails */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                      
                      {/* Graphic Headline & Badge on the image (identical to reference image banners) */}
                      <div className="absolute inset-0 p-4 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <span className="px-2 py-0.5 rounded text-[9.5px] font-extrabold uppercase tracking-wider bg-black/60 text-white/90 backdrop-blur-xs border border-white/15">
                            {article.imageBadge}
                          </span>
                        </div>

                        <div className="space-y-1">
                          <p className="text-white text-xs sm:text-[13px] font-extrabold uppercase tracking-tight leading-tight drop-shadow-md line-clamp-2">
                            {article.imageOverlayTitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 2. Card Content Area */}
                    <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white">
                      
                      <div>
                        {/* Category Pill Tag directly beneath image matching reference */}
                        <div className="mb-3">
                          <span 
                            className="inline-block px-2.5 py-0.5 rounded-sm text-[10px] sm:text-[10.5px] font-extrabold uppercase tracking-wider shadow-xs"
                            style={{
                              backgroundColor: 'var(--primary)',
                              color: '#0a0500'
                            }}
                          >
                            {article.category}
                          </span>
                        </div>

                        {/* Blog Headline Title */}
                        <h3 className="text-base sm:text-[17px] font-bold text-slate-950 leading-snug group-hover:text-[var(--primary-dark)] transition-colors line-clamp-2 mb-3">
                          {article.title}
                        </h3>

                        {/* 2-3 Line Summary Excerpt with [...] */}
                        <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed line-clamp-3 mb-5">
                          {article.excerpt}
                        </p>
                      </div>

                      {/* 3. Bottom Row: Date & Read Time */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                        <div className="flex items-center gap-1.5 font-medium text-slate-500">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{article.date}</span>
                        </div>

                        <div className="flex items-center gap-1 font-bold text-[var(--primary-dark)] group-hover:translate-x-1 transition-transform">
                          <span>Read Full Guide</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>

                    </div>

                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default ResourcesBlogSection;
