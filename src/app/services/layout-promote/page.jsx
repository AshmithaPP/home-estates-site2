"use client";

import React, { useState } from 'react';
import Header from '@/components/Hero/Header';
import LayoutPromoteHero from '@/components/LayoutPromote/LayoutPromoteHero';
import LandToDevelopmentSection from '@/components/LayoutPromote/LandToDevelopmentSection';
import LayoutServicesGrid from '@/components/LayoutPromote/LayoutServicesGrid';
import WhyChooseLayoutSection from '@/components/LayoutPromote/WhyChooseLayoutSection';
import LayoutProcessSection from '@/components/LayoutPromote/LayoutProcessSection';
import WhoCanWorkWithUsSection from '@/components/LayoutPromote/WhoCanWorkWithUsSection';
import LandPotentialSection from '@/components/LayoutPromote/LandPotentialSection';
import LayoutCTASection from '@/components/LayoutPromote/LayoutCTASection';
import LandPreparationSection from '@/components/LayoutPromote/LandPreparationSection';
import ServiceFormFAQSection from '@/components/Common/ServiceFormFAQSection';
import { LAYOUT_FAQ_ITEMS } from '@/components/LayoutPromote/LayoutFAQSection';
import ApplyModal from '@/components/Modals/ApplyModal';
import TourModal from '@/components/Modals/TourModal';

export default function LayoutPromotePage() {
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

      {/* ── Layout Promotion Hero Section ─────────────────────────── */}
      <LayoutPromoteHero
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── From Land to a Market-Ready Development Section ───────── */}
      <LandToDevelopmentSection
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── Our Layout Promotion Services Grid Section ────────────── */}
      <LayoutServicesGrid />

      {/* ── Why Choose Ajay Homes for Layout Promotion Section ─────── */}
      <WhyChooseLayoutSection
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── Our Layout Development Process Section (Odd - Grey BG) ─── */}
      <LayoutProcessSection />

      {/* ── Who Can Work With Us & Potential Section (Even - White BG) ── */}
      <WhoCanWorkWithUsSection />

      {/* ── Have Land With Development Potential? (Grey BG) ── */}
      <LandPotentialSection
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── Have Land in Chennai? CTA Section (Grey BG - Short Height) ── */}
      <LayoutCTASection
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── From Land Preparation to Development Section (White BG) ── */}
      <LandPreparationSection />

      {/* ── LAST SECTION: One Side Form & Another Side FAQ (Responsive) ── */}
      <ServiceFormFAQSection
        id="layout-faq-form"
        serviceName="Layout Promotion"
        tagline="FAQS"
        faqs={LAYOUT_FAQ_ITEMS}
        formTitle="Book a 15 min call"
        formSubtitle="If you have land with development potential or questions about layout promotion, schedule a private consultation."
        serviceOptions={[
          "Joint Venture Layout Development",
          "Outright Land Promotion & Marketing",
          "CMDA / DTCP Approval Coordination",
          "Plot Infrastructure Development",
          "Agricultural to Residential Layout",
          "NRI Land Asset Management"
        ]}
      />

      {/* ── Interactive Modals ────────────────────────────────────── */}
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
