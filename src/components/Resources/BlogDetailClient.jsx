"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  ArrowRight
} from 'lucide-react';
import Header from '@/components/Hero/Header';
import ApplyModal from '@/components/Modals/ApplyModal';
import TourModal from '@/components/Modals/TourModal';
import { blogArticles } from '@/data/blogData';

export default function BlogDetailClient({ article }) {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

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

  // Related articles (exclude current)
  const relatedArticles = blogArticles
    .filter((b) => b.slug !== article.slug)
    .slice(0, 3);

  return (
    <main 
      className="min-h-screen w-full bg-white text-slate-900 selection:bg-[var(--primary)] selection:text-black relative overflow-x-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      {/* ── Fixed / Floating Navbar ──────────────────────────────── */}
      <Header
        onOpenTour={() => setIsTourModalOpen(true)}
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── Top Spacing & Breadcrumb Navigation (Wide Container) ──── */}
      <div className="pt-24 sm:pt-32 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-[var(--primary-dark)] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Resources & Guides</span>
          </Link>

          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <Link href="/" className="hover:text-slate-700 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-slate-700 transition-colors">
              Resources
            </Link>
            <span>/</span>
            <span className="text-[var(--primary-dark)] font-semibold">
              {article.category}
            </span>
          </nav>
        </div>
      </div>

      {/* ── Article Header (Increased Width) ──────────────────────── */}
      <header className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-8 sm:mb-12">
        
        {/* Category & Metadata Row */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Link
            href={getCategoryRoute(article.category)}
            className="px-3 py-1 rounded-sm text-[10.5px] sm:text-[11px] font-extrabold uppercase tracking-wider shadow-xs hover:opacity-85 transition-opacity"
            style={{
              backgroundColor: 'var(--primary)',
              color: '#0a0500'
            }}
          >
            {article.category}
          </Link>

          <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[var(--primary-dark)]" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[var(--primary-dark)]" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Article Headline Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-950 tracking-tight leading-[1.18] mb-4">
          {article.title}
        </h1>

        {/* Editorial byline */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-200 text-xs sm:text-sm text-slate-600">
          <Link 
            href="/about-us" 
            className="w-9 h-9 rounded-full bg-[var(--primary)]/15 border border-[var(--primary)]/40 flex items-center justify-center text-[var(--primary-dark)] font-black text-sm shrink-0 hover:bg-[var(--primary)]/25 transition-colors"
          >
            AH
          </Link>
          <div>
            <Link 
              href="/about-us" 
              className="font-bold text-slate-950 hover:text-[var(--primary-dark)] transition-colors"
            >
              Ajay Homes Editorial Desk
            </Link>
            <p className="text-[11px] text-slate-500">
              Senior Master Architects & Structural Engineering Cell •{' '}
              <span className="text-[var(--primary-dark)] font-semibold">
                Chennai
              </span>
            </p>
          </div>
        </div>

      </header>

      {/* ── Wide Featured Image Banner ────────────────────────────── */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-10 sm:mb-14">
        <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
            <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-black/75 text-white/90 backdrop-blur-md border border-white/20">
              {article.imageBadge}
            </span>
          </div>
        </div>
      </div>

      {/* ── Article Content (Expansive & Generous Width) ──────────── */}
      <article className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16 sm:mb-20">
        
        {/* Executive Summary / Lead Paragraph */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 mb-8 sm:mb-12 shadow-xs">
          <p className="text-base sm:text-lg md:text-xl text-slate-800 font-medium leading-relaxed">
            {article.intro}
          </p>
        </div>

        {/* Deep Dive Sections */}
        <div className="space-y-8 sm:space-y-11 text-slate-800">
          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-950 tracking-tight flex items-start gap-2.5">
                <span 
                  className="w-2.5 h-2.5 rounded-full mt-2.5 shrink-0" 
                  style={{ backgroundColor: 'var(--primary)' }}
                />
                <span>{section.heading}</span>
              </h2>
              <p className="text-sm sm:text-base md:text-[17px] text-slate-700 leading-relaxed font-normal pl-4 sm:pl-5 border-l-2 border-[var(--primary)]/40">
                {section.body}
              </p>
            </section>
          ))}
        </div>

      </article>

      {/* ── Related Articles Section (Pure White Background matching the Page) ── */}
      <section className="w-full bg-white py-14 sm:py-18 text-slate-900 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div>
              <span 
                className="text-xs font-extrabold uppercase tracking-wider block mb-1"
                style={{ color: 'var(--primary-dark)' }}
              >
                Continue Learning
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                Related Architectural Guides
              </h2>
            </div>

            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--primary-dark)] hover:text-black transition-colors"
            >
              <span>View All Guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedArticles.map((rel) => (
              <article
                key={rel.slug}
                className="bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[var(--primary)]/60 transition-all duration-300 flex flex-col group"
              >
                <Link
                  href={`/resources/${rel.slug}`}
                  className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900 block focus:outline-none"
                >
                  <img
                    src={rel.image}
                    alt={rel.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-xs sm:text-[13px] font-bold uppercase tracking-tight line-clamp-2">
                      {rel.imageOverlayTitle}
                    </p>
                  </div>
                </Link>

                <div className="p-5 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <div className="mb-2.5">
                      <Link
                        href={getCategoryRoute(rel.category)}
                        className="inline-block px-2.5 py-0.5 rounded-sm text-[10px] font-extrabold uppercase tracking-wider hover:opacity-85 transition-opacity"
                        style={{
                          backgroundColor: 'var(--primary)',
                          color: '#0a0500'
                        }}
                      >
                        {rel.category}
                      </Link>
                    </div>

                    <Link
                      href={`/resources/${rel.slug}`}
                      className="block group/title focus:outline-none"
                    >
                      <h3 className="text-base font-bold text-slate-950 leading-snug group-hover/title:text-[var(--primary-dark)] transition-colors line-clamp-2 mb-2">
                        {rel.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {rel.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span>{rel.date}</span>
                    <Link
                      href={`/resources/${rel.slug}`}
                      className="font-bold text-[var(--primary-dark)] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 hover:text-black"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ── Modals ────────────────────────────────────────────────── */}
      <TourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />

      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </main>
  );
}
