"use client";

import React, { useState } from 'react';
import Header from '@/components/Hero/Header';
import AboutHero from '@/components/About/AboutHero';
import AboutStorySection from '@/components/About/AboutStorySection';
import OnePartnerSection from '@/components/About/OnePartnerSection';
import BhoomiPoojaSection from '@/components/About/BhoomiPoojaSection';
import BuiltForNextSection from '@/components/About/BuiltForNextSection';
import ApplyModal from '@/components/Modals/ApplyModal';
import TourModal from '@/components/Modals/TourModal';

export default function AboutPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#1e1e1e] text-[#f0ede8] selection:bg-[#ff8c00] selection:text-black font-sans relative overflow-x-hidden">
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
