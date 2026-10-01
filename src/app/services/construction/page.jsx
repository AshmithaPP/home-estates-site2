"use client";

import React, { useState } from 'react';
import Header from '@/components/Hero/Header';
import ConstructionHero from '@/components/Construction/ConstructionHero';
import BeyondBuildSection from '@/components/Construction/BeyondBuildSection';
import ConstructionServicesGrid from '@/components/Construction/ConstructionServicesGrid';
import WhyChooseUsSection from '@/components/Construction/WhyChooseUsSection';
import ConstructionProcessSection from '@/components/Construction/ConstructionProcessSection';
import BuiltForRequirementsSection from '@/components/Construction/BuiltForRequirementsSection';
import MoreThanConstructionSection from '@/components/Construction/MoreThanConstructionSection';
import FAQSection from '@/components/FAQ/FAQSection';
import PremiumProjectCTASection from '@/components/Common/PremiumProjectCTASection';
import FoundationToCelebrationSection from '@/components/Common/FoundationToCelebrationSection';
import ApplyModal from '@/components/Modals/ApplyModal';
import TourModal from '@/components/Modals/TourModal';

export default function ConstructionServicesPage() {
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

      {/* ── Construction Hero Section ─────────────────────────────── */}
      <ConstructionHero
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── Construction That Goes Beyond the Build (Reference UI Replica) ── */}
      <BeyondBuildSection
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── Our Construction Services Grid (Reference UI Replica) ── */}
      <ConstructionServicesGrid />

      {/* ── Why Choose Ajay Homes Section (Reusable UI Replica) ── */}
      <WhyChooseUsSection
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── Our Construction Process Section (Auto-Running UI Replica) ── */}
      <ConstructionProcessSection />

      {/* ── Built For Different Requirements (White) ── */}
      <BuiltForRequirementsSection />

      {/* ── More Than Construction (Grey) ── */}
      <MoreThanConstructionSection />

      {/* ── Exact Existing FAQ Section (As-is, Light Theme) ── */}
      <FAQSection
        onOpenApply={() => setIsApplyModalOpen(true)}
        onOpenTourModal={() => setIsTourModalOpen(true)}
      />

      {/* ── Planning a Premium Construction Project? (CTA, Grey) ── */}
      <PremiumProjectCTASection
        title="Planning a Premium Construction Project?"
        description="Bring your vision, land, or project requirement. Our team can help you plan the next step."
        stats={[
          { value: '₹1 Cr+', label: 'Projects' },
          { value: '500+', label: 'Projects' },
          { value: '50+ Years', label: 'of Industry Experience' },
        ]}
        ctaText="Discuss Your Project"
        onCtaClick={() => setIsApplyModalOpen(true)}
      />

      {/* ── From Bhoomi Pooja to House Warming (Journey, White) ── */}
      <FoundationToCelebrationSection />

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
