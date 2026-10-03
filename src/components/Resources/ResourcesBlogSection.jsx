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

  const getCategoryRoute = (category) => {
    switch (category) {
      case 'CONSTRUCTION':
        return '/services/construction';
      case 'APPROVALS & CMDA':
        return '/services/layout-promoters';
      case 'COST & PLANNING':
        return '/services/property-developer';
      case 'TRANSPARENCY':
        return '/about-us';
      case 'UNCATEGORIZED':
      default:
        return '/services/project-management';
    }
  };

  const filteredArticles = blogArticles.filter((article) => {
    return selectedCategory === 'ALL' || article.category === selectedCategory;
  });

  return (
    <section 
      id="resources-content"
      className="relative w-full py-14 sm:py-18 lg:py-20 bg-white text-slate-900 overflow-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header (One-line Heading, Subtitle with Links & Centered Pills) ── */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          
          {/* One Line Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold text-slate-950 tracking-tight text-center leading-snug md:whitespace-nowrap">
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

          {/* Subtitle with direct links to core service disciplines */}
          <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Expert insights and architectural advisories covering{' '}
            <Link href="/services/construction" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline decoration-slate-300 underline-offset-2 transition-colors">
              construction
            </Link>
            ,{' '}
            <Link href="/services/layout-promoters" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline decoration-slate-300 underline-offset-2 transition-colors">
              approvals & layouts
            </Link>
            ,{' '}
            <Link href="/services/property-developer" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline decoration-slate-300 underline-offset-2 transition-colors">
              property development
            </Link>
            , and{' '}
            <Link href="/services/interior-design" className="font-semibold text-slate-900 hover:text-[var(--primary-dark)] underline decoration-slate-300 underline-offset-2 transition-colors">
              interior design
            </Link>
            .
          </p>

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
                <article className="bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[var(--primary)]/60 transition-all duration-300 flex flex-col h-full group">
                  
                  {/* 1. Card Top Image Banner with 16:10 Aspect Ratio & Graphic Title */}
                  <Link
                    href={`/resources/${article.slug}`}
                    className="block relative w-full aspect-[16/10] overflow-hidden bg-slate-900 focus:outline-none"
                    aria-label={`Read article: ${article.title}`}
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    
                    {/* Subtle dark contrast layer matching reference image thumbnails */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                    
                    {/* Graphic Headline & Badge on the image */}
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
                  </Link>

                  {/* 2. Card Content Area */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white">
                    
                    <div>
                      {/* Category Pill Tag directly beneath image linking to its service */}
                      <div className="mb-3">
                        <Link
                          href={getCategoryRoute(article.category)}
                          className="inline-block px-2.5 py-0.5 rounded-sm text-[10px] sm:text-[10.5px] font-extrabold uppercase tracking-wider shadow-xs hover:opacity-85 transition-opacity"
                          style={{
                            backgroundColor: 'var(--primary)',
                            color: '#0a0500'
                          }}
                        >
                          {article.category}
                        </Link>
                      </div>

                      {/* Blog Headline Title */}
                      <Link
                        href={`/resources/${article.slug}`}
                        className="block group/title focus:outline-none"
                      >
                        <h3 className="text-base sm:text-[17px] font-bold text-slate-950 leading-snug group-hover/title:text-[var(--primary-dark)] transition-colors line-clamp-2 mb-3">
                          {article.title}
                        </h3>
                      </Link>

                      {/* 2-3 Line Summary Excerpt */}
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

                      <Link
                        href={`/resources/${article.slug}`}
                        className="flex items-center gap-1 font-bold text-[var(--primary-dark)] hover:text-black group-hover:translate-x-1 transition-all"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>

                </article>
              </motion.div>
            ))}
          </div>
        )}

        {/* ── Bottom Section Consultation CTA ──────────────────────── */}
        <div className="mt-14 sm:mt-20 p-8 sm:p-12 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--primary)] block mb-1">
              Direct Architectural Advisory
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
              Have specific plot, approval, or design questions?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Speak directly with our senior architects and structural engineers. Backed by 60+ years of building mastery and 500+ landmark projects across Chennai.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold bg-[var(--primary)] text-black hover:opacity-90 transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services/construction"
              className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white/90 hover:text-white border border-white/20 hover:border-white/40 transition-colors"
            >
              <span>Explore Construction</span>
            </Link>
            <Link
              href="/gallery"
              className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white/90 hover:text-white border border-white/20 hover:border-white/40 transition-colors"
            >
              <span>View 500+ Projects</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResourcesBlogSection;
