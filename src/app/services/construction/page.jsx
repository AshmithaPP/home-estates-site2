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
import FoundationToCelebrationSection from '@/components/Common/FoundationToCelebrationSection';
import PremiumProjectCTASection from '@/components/Common/PremiumProjectCTASection';
import ServiceFormFAQSection from '@/components/Common/ServiceFormFAQSection';
import { faqItems } from '@/components/FAQ/FAQSection';
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

      {/* ── Planning a Premium Construction Project? (CTA, Grey) ── */}
      <PremiumProjectCTASection
        title="Planning a Premium Construction Project?"
        description="Bring your vision, land, or project requirement. Our team can help you plan the next step."
        stats={[
          { value: '60+ Years', label: 'of Industry Experience' },
          { value: '500+ Projects', label: 'Completed Projects' },
          { value: '₹1 Cr+', label: 'Premium Project Experience' },
        ]}
        statValueClassName="text-sm sm:text-base lg:text-lg"
        ctaText="Discuss Your Project"
        onCtaClick={() => setIsApplyModalOpen(true)}
      />

      {/* ── From Bhoomi Pooja to House Warming (Journey, White) ── */}
      <FoundationToCelebrationSection />

      {/* ── LAST SECTION: One Side Form & Another Side FAQ (Responsive) ── */}
      <ServiceFormFAQSection
        id="construction-faq-form"
        serviceName="Construction"
        faqs={faqItems}
        formTitle="Book a 15 min call"
        formSubtitle="If you have questions about our luxury villas, CMDA approvals, or custom builds, schedule a private consultation."
        serviceOptions={[
          "Individual Luxury Villa",
          "Turnkey Residential Construction",
          "Gated Villa Community",
          "Duplex / Triplex Residence",
          "Demolition & Re-Construction",
          "Commercial / Mixed-Use Development"
        ]}
      />

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
