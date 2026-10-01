"use client";

import React, { useState } from 'react';
import Header from '@/components/Hero/Header';
import AboutHero from '@/components/About/AboutHero';
import AboutStorySection from '@/components/About/AboutStorySection';
import OnePartnerSection from '@/components/About/OnePartnerSection';
import BhoomiPoojaSection from '@/components/About/BhoomiPoojaSection';
import AboutGallerySection from '@/components/About/AboutGallerySection';
import BuiltForNextSection from '@/components/About/BuiltForNextSection';
import ApplyModal from '@/components/Modals/ApplyModal';
import TourModal from '@/components/Modals/TourModal';

export default function AboutPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  return (
    <main
      className="min-h-screen selection:bg-[var(--primary)] selection:text-black relative overflow-x-hidden"
      style={{
        backgroundColor: 'var(--grey-deepest)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-family-base)',
      }}
    >
      {/* ── Fixed / Floating Navbar ──────────────────────────────── */}
      <Header
        onOpenTour={() => setIsTourModalOpen(true)}
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── About Hero Section ───────────────────────────────────── */}
      <AboutHero />

      {/* ── About Story Section (Grey Background) ─────────────────── */}
      <AboutStorySection />

      {/* ── One Partner. Every Stage. Section (White Background) ─── */}
      <OnePartnerSection />

      {/* ── From Bhoomi Pooja to House Warming Section (Grey Background) ─ */}
      <BhoomiPoojaSection />

      {/* ── Gallery Showcase Section (Curated Projects + Explore CTA) ── */}
      <AboutGallerySection />

      {/* ── Built for What's Next CTA Banner (White Background) ─── */}
      <BuiltForNextSection onOpenApply={() => setIsApplyModalOpen(true)} />


      {/* ── Modals ───────────────────────────────────────────────── */}
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
