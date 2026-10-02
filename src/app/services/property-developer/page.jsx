"use client";

import React, { useState } from 'react';
import Header from '@/components/Hero/Header';
import PropertyDeveloperHero from '@/components/PropertyDeveloper/PropertyDeveloperHero';
import BuildValueSection from '@/components/PropertyDeveloper/BuildValueSection';
import PropertyDeveloperServicesGrid from '@/components/PropertyDeveloper/PropertyDeveloperServicesGrid';
import WhyChooseUsSection from '@/components/Common/WhyChooseUsSection';
import PropertyDevelopmentProcessSection from '@/components/PropertyDeveloper/PropertyDevelopmentProcessSection';
import WhoWeWorkWithSection from '@/components/PropertyDeveloper/WhoWeWorkWithSection';
import OnePartnerJourneySection from '@/components/PropertyDeveloper/OnePartnerJourneySection';
import PropertyDevelopmentCTASection from '@/components/PropertyDeveloper/PropertyDevelopmentCTASection';
import JourneyMarqueeSection from '@/components/Common/JourneyMarqueeSection';
import ServiceFormFAQSection from '@/components/Common/ServiceFormFAQSection';
import ApplyModal from '@/components/Modals/ApplyModal';
import TourModal from '@/components/Modals/TourModal';

// Exact "Why Ajay Homes?" features requested by user
const propertyDeveloperFeatures = [
  {
    id: 'exp',
    title: '50+ Years of Industry Experience',
    description: 'Decades of experience across construction, property, interiors, project management, and real estate.',
  },
  {
    id: 'projects',
    title: '500+ Projects',
    description: 'A broad project portfolio across different property types and development requirements.',
  },
  {
    id: 'high-value',
    title: '₹1 Cr+ Project Expertise',
    description: 'Experience managing premium and high-value property projects.',
  },
  {
    id: 'end-to-end',
    title: 'End-to-End Capabilities',
    description: 'Planning, construction, project management, interiors, and real estate support through one experienced team.',
  },
  {
    id: 'dev-approach',
    title: 'Development-Focused Approach',
    description: "We consider both the property's development potential and its intended market when planning the project.",
  },
  {
    id: 'transparent',
    title: 'Transparent Execution',
    description: 'Clear communication and structured coordination throughout the development journey.',
  },
];

// Exact Frequently Asked Questions requested by user
const propertyDeveloperFaqs = [
  {
    id: 'faq-1',
    question: 'What type of properties does Ajay Homes develop?',
    answer: 'We work across residential, commercial, premium, and other property development opportunities based on the project scope.',
  },
  {
    id: 'faq-2',
    question: 'Does Ajay Homes work with landowners?',
    answer: 'Yes. Landowners can approach us to explore development opportunities for their property.',
  },
  {
    id: 'faq-3',
    question: 'Do you offer joint development opportunities?',
    answer: 'We can evaluate suitable joint development opportunities based on the land, location, project potential, and proposed development structure.',
  },
  {
    id: 'faq-4',
    question: 'Can you handle construction after planning?',
    answer: 'Yes. Ajay Homes has construction and project management capabilities to support the development through execution.',
  },
  {
    id: 'faq-5',
    question: 'Do you help with property sales?',
    answer: 'Yes. Our real estate services include both property buying and selling support, subject to the project and property requirements.',
  },
  {
    id: 'faq-6',
    question: 'Do you work with NRI property owners?',
    answer: 'Yes. We work with NRI clients looking to develop, manage, buy, or sell property in Chennai.',
  },
];

export default function PropertyDeveloperPage() {
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

      {/* ── 1. Hero Section (raman-residence/img167.jpg bg) ───────── */}
      <PropertyDeveloperHero
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── 2. Build Value Into Every Property (White) ────────────── */}
      <BuildValueSection
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── 3. Our Property Development Services Grid (Grey) ──────── */}
      <PropertyDeveloperServicesGrid />

      {/* ── 4. Why Ajay Homes? (White) ─────────────────────────────── */}
      <WhyChooseUsSection
        id="why-ajay-homes-property"
        title="Why Ajay Homes?"
        features={propertyDeveloperFeatures}
        imageSrc="/images/residence-images/besantnagar-residence-view/img19.jpg"
        imageAlt="Ajay Homes Property Development Excellence"
        ctaText="Discuss Your Development"
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── 5. Our Development Process (6 Steps, Grey) ────────────── */}
      <PropertyDevelopmentProcessSection />

      {/* ── 6. Who We Work With (White) ───────────────────────────── */}
      <WhoWeWorkWithSection />

      {/* ── 7. One Partner Across the Property Journey (Grey) ─────── */}
      <OnePartnerJourneySection />

      {/* ── 8. Have a Property Development Opportunity? (CTA) ─────── */}
      <PropertyDevelopmentCTASection
        onCtaClick={() => setIsApplyModalOpen(true)}
      />

      {/* ── 9. From Land to Legacy (Running Marquee, White) ───────── */}
      <JourneyMarqueeSection
        id="from-land-to-legacy"
        title="From Land to Legacy"
        lead="Property development is a journey that begins with an idea and ends with something built to last."
        description="Ajay Homes can support the journey from land planning and development to construction, interiors, completion, and final handover. For residential projects, our involvement can take you all the way from Bhoomi Pooja to House Warming."
        tagline="From the first step on the land to the moment you step into your finished space."
      />

      {/* ── 10. LAST SECTION: One Side Form & Another Side FAQ ────── */}
      <ServiceFormFAQSection
        id="property-faq-form"
        serviceName="Property Development"
        faqs={propertyDeveloperFaqs}
        formTitle="Book a 15 min call"
        formSubtitle="If you have questions about land development, joint ventures, or project feasibility, schedule a private consultation."
        serviceOptions={[
          "Land Development",
          "Residential Development",
          "Commercial Development",
          "Joint Development",
          "Project Planning & Execution",
          "End-to-End Property Development"
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
