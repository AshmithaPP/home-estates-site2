"use client";

import React, { useState } from 'react';
import Header from '@/components/Hero/Header';
import InteriorDesignHero from '@/components/InteriorDesign/InteriorDesignHero';
import WhereDesignMeetsDetailSection from '@/components/InteriorDesign/WhereDesignMeetsDetailSection';
import InteriorServicesSection from '@/components/InteriorDesign/InteriorServicesSection';
import WhyChooseUsSection from '@/components/Common/WhyChooseUsSection';
import InteriorProcessSection from '@/components/InteriorDesign/InteriorProcessSection';
import SpacesWeDesignSection from '@/components/InteriorDesign/SpacesWeDesignSection';
import DesignedAroundYouSection from '@/components/InteriorDesign/DesignedAroundYouSection';
import EmptySpaceToWelcomeHomeSection from '@/components/InteriorDesign/EmptySpaceToWelcomeHomeSection';
import TransformSpaceCTASection from '@/components/InteriorDesign/TransformSpaceCTASection';
import ServiceGallerySection from '@/components/Common/ServiceGallerySection';
import ServiceFormFAQSection from '@/components/Common/ServiceFormFAQSection';
import ApplyModal from '@/components/Modals/ApplyModal';
import TourModal from '@/components/Modals/TourModal';

// Exact "Why Choose Ajay Homes?" points requested by user
const interiorWhyChooseFeatures = [
  {
    id: 'roof',
    title: 'Design + Execution Under One Roof',
    description: 'Our construction and project management expertise allows us to connect design with practical execution.',
  },
  {
    id: 'experience',
    title: '60+ Years of Industry Experience',
    description: 'Decades of experience across construction, property development, interiors, and real estate.',
  },
  {
    id: 'projects',
    title: '500+ Projects',
    description: 'Experience across a wide range of property types and project requirements.',
  },
  {
    id: 'satisfaction',
    title: '100% Client Satisfaction',
    description: 'Our experience includes delivering high-value projects with 100% client satisfaction.',
  },
  {
    id: 'quality',
    title: 'Quality-Focused Materials',
    description: 'We pay attention to material selection, workmanship, finishes, and detailing throughout the project.',
  },
  {
    id: 'management',
    title: 'End-to-End Management',
    description: 'From the first design discussion to final execution, we coordinate the key stages of the interior project.',
  },
];

// Exact Frequently Asked Questions requested by user
const interiorDesignFaqs = [
  {
    id: 'faq-1',
    question: 'What type of interiors does Ajay Homes provide?',
    answer: 'We provide residential, luxury, commercial, turnkey, and renovation interior design services.',
  },
  {
    id: 'faq-2',
    question: 'Do you provide both design and execution?',
    answer: 'Yes. We can manage the interior journey from design and planning through execution and completion.',
  },
  {
    id: 'faq-3',
    question: 'Do you handle luxury home interiors?',
    answer: 'Yes. We work on premium residences and high-value projects with a focus on materials, finishes, detailing, and execution quality.',
  },
  {
    id: 'faq-4',
    question: 'Can you design interiors for a newly constructed home?',
    answer: 'Yes. We can plan and execute interiors for new homes, villas, apartments, and other properties.',
  },
  {
    id: 'faq-5',
    question: 'Do you provide commercial interior design?',
    answer: 'Yes. We provide interior solutions for offices, retail spaces, and other commercial environments.',
  },
  {
    id: 'faq-6',
    question: 'Can NRI clients manage their interior projects through Ajay Homes?',
    answer: 'Yes. Our end-to-end project coordination can help NRI clients manage interior projects in Chennai with structured communication and execution support.',
  },
];

const interiorServiceOptions = [
  "Residential Interiors",
  "Luxury Interiors",
  "Commercial Interiors",
  "Space Planning",
  "Material & Finish Selection",
  "Custom Design",
  "Turnkey Interior Execution",
  "Renovation & Transformation"
];

export default function InteriorDesignPage() {
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

      {/* ── 1. Hero Section (suresh-residence-view/img27.jpg) ────────── */}
      <InteriorDesignHero
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── 2. Where Design Meets Detail (Modern Editorial Split, White) ── */}
      <WhereDesignMeetsDetailSection />

      {/* ── 3. Our Interior Design Services (8-Card Modern Studio Showcase, Grey) ── */}
      <InteriorServicesSection />

      {/* ── 4. Why Choose Ajay Homes? (Reusable WhyChooseUsSection, White) ── */}
      <WhyChooseUsSection
        id="why-choose-ajay-homes"
        title="Why Choose Ajay Homes?"
        features={interiorWhyChooseFeatures}
        imageSrc="/images/residence-images/natraj-residence/img81.jpg"
        imageAlt="Why Choose Ajay Homes — Interior Designing"
        ctaText="Start Your Interior Project"
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── 5. Our Interior Design Process (6 Progressive Stages, Grey) ─── */}
      <InteriorProcessSection />

      {/* ── 6. Interiors For Every Kind of Space (Visual Gallery, White) ─── */}
      <SpacesWeDesignSection />

      {/* ── 7. Designed Around You (Architectural Statement, Grey) ───────── */}
      <DesignedAroundYouSection />

      {/* ── 8. From Empty Space to Your First Welcome Home (Handover, White) ── */}
      <EmptySpaceToWelcomeHomeSection />

      {/* ── 9. Ready to Transform Your Space? (CTA Section, Grey) ───────── */}
      <TransformSpaceCTASection
        onCtaClick={() => setIsApplyModalOpen(true)}
      />

      {/* ── 10. Completed Projects Gallery Section (Redirects to /gallery) ── */}
      <ServiceGallerySection
        id="interior-gallery"
        serviceKey="interior-design"
        badge="THE AJAY MARQUEE"
        title="Landmark Developments"
      />

      {/* ── 11. LAST SECTION: One Side Form & Another Side FAQ ────── */}
      <ServiceFormFAQSection
        id="interior-faq-form"
        serviceName="Interior Designing"
        heading="Frequently Asked Questions"
        faqs={interiorDesignFaqs}
        formTitle="Book a 15 min call"
        formSubtitle="Let's discuss your requirements and create an interior that works beautifully for you."
        serviceOptions={interiorServiceOptions}
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
