"use client";

import React, { useState } from 'react';
import Header from '@/components/Hero/Header';
import ResourcesHero from '@/components/Resources/ResourcesHero';
import ResourcesBlogSection from '@/components/Resources/ResourcesBlogSection';
import ApplyModal from '@/components/Modals/ApplyModal';
import TourModal from '@/components/Modals/TourModal';

export default function ResourcesPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  return (
    <main 
      className="min-h-screen bg-[var(--grey-deepest)] text-[var(--text-primary)] selection:bg-[var(--primary)] selection:text-black relative overflow-x-hidden"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      {/* ── Fixed / Floating Navbar ──────────────────────────────── */}
      <Header
        onOpenTour={() => setIsTourModalOpen(true)}
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── Resources Hero Section (Raman Residence img74.jpg Background) ── */}
      <ResourcesHero
        onOpenTour={() => setIsTourModalOpen(true)}
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── Premium Blogs & Architectural Guides Section (Reference Design) ── */}
      <ResourcesBlogSection
        onOpenApply={() => setIsApplyModalOpen(true)}
      />


      {/* ── Global Modals ────────────────────────────────────────── */}
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
