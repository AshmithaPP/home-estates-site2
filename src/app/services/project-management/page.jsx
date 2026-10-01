"use client";

import React, { useState } from 'react';
import Header from '@/components/Hero/Header';
import ProjectManagementHero from '@/components/ProjectManagement/ProjectManagementHero';
import CompleteControlSection from '@/components/ProjectManagement/CompleteControlSection';
import ProjectManagementServicesGrid from '@/components/ProjectManagement/ProjectManagementServicesGrid';
import WhyChooseUsSection from '@/components/Common/WhyChooseUsSection';
import ProjectManagementProcessSection from '@/components/ProjectManagement/ProjectManagementProcessSection';
import ProjectsWeManageSection from '@/components/ProjectManagement/ProjectsWeManageSection';
import BuiltAroundPrioritiesSection from '@/components/ProjectManagement/BuiltAroundPrioritiesSection';
import VisionDetailsBannerSection from '@/components/ProjectManagement/VisionDetailsBannerSection';
import FAQSection from '@/components/FAQ/FAQSection';
import PremiumProjectCTASection from '@/components/Common/PremiumProjectCTASection';
import JourneyMarqueeSection from '@/components/Common/JourneyMarqueeSection';
import ApplyModal from '@/components/Modals/ApplyModal';
import TourModal from '@/components/Modals/TourModal';

// Exact "Why Choose Us" points requested by user
const whyChooseFeatures = [
  {
    id: 'exp',
    title: '50+ Years of Industry Experience',
    description: 'Decades of experience across construction, property development, interiors, and real estate.',
  },
  {
    id: 'projects',
    title: '500+ Projects',
    description: 'Experience managing projects across different sizes, property types, and requirements.',
  },
  {
    id: 'high-value',
    title: '₹1 Cr+ Project Experience',
    description: 'We understand the additional planning, coordination, and attention required for high-value projects.',
  },
  {
    id: 'one-point',
    title: 'One Point of Coordination',
    description: 'Bring architects, contractors, vendors, consultants, and execution teams together through a single project management structure.',
  },
  {
    id: 'quality-timeline',
    title: 'Quality & Timeline Focus',
    description: 'We continuously monitor progress and quality to help keep the project aligned with its objectives.',
  },
  {
    id: 'transparency',
    title: 'Transparent Communication',
    description: 'Regular coordination and clear project updates give clients better visibility throughout the process.',
  },
];

// Exact FAQ items requested by user
const projectManagementFaqs = [
  {
    id: 'faq-1',
    question: 'What does project management include?',
    answer: 'Our project management services can include planning, site coordination, contractor management, material coordination, quality monitoring, timeline tracking, cost coordination, and progress reporting.',
  },
  {
    id: 'faq-2',
    question: 'Can Ajay Homes manage a project designed by another architect?',
    answer: 'Yes. Project management can be provided based on the project\'s requirements, including coordination with external architects and consultants.',
  },
  {
    id: 'faq-3',
    question: 'Do you manage ₹1 Cr+ projects?',
    answer: 'Yes. Ajay Homes has experience handling premium projects valued at ₹1 crore and above.',
  },
  {
    id: 'faq-4',
    question: 'Do you provide project management for residential properties?',
    answer: 'Yes. We manage residential projects including individual homes, luxury villas, and larger residential developments.',
  },
  {
    id: 'faq-5',
    question: 'Can NRI clients use your project management services?',
    answer: 'Yes. Our project management approach can provide NRI clients with structured coordination and regular project visibility while their project is being executed in Chennai.',
  },
  {
    id: 'faq-6',
    question: 'Can you manage contractors and vendors?',
    answer: 'Yes. Contractor and vendor coordination can be part of the project management scope depending on the project requirements.',
  },
];

export default function ProjectManagementPage() {
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

      {/* ── 1. Project Management Hero Section (Dark) ────────────────── */}
      <ProjectManagementHero
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── 2. Complete Control From Start to Finish (White) ────────── */}
      <CompleteControlSection
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── 3. Our Project Management Services Grid (Grey) ──────────── */}
      <ProjectManagementServicesGrid />

      {/* ── 4. Why Choose Ajay Homes? (Reusable, White) ─────────────── */}
      <WhyChooseUsSection
        id="why-choose-ajay-homes"
        title="Why Choose Ajay Homes?"
        features={whyChooseFeatures}
        imageSrc="/assets/img/img-008.jpeg"
        imageAlt="Ajay Homes Project Management Excellence"
        ctaText="Discuss Your Project"
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── 5. Our Project Management Process (Grey) ────────────────── */}
      <ProjectManagementProcessSection />

      {/* ── 6. Projects We Manage (White) ───────────────────────────── */}
      <ProjectsWeManageSection />

      {/* ── 7. Built Around Your Priorities (Light Slate) ──────────── */}
      <BuiltAroundPrioritiesSection />

      {/* ── 8. You Focus on the Vision, We Manage Details (Dark Grey) ── */}
      <VisionDetailsBannerSection
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── 9. Frequently Asked Questions (Reusable, Light) ─────────── */}
      <FAQSection
        items={projectManagementFaqs}
        onOpenApply={() => setIsApplyModalOpen(true)}
        onOpenTourModal={() => setIsTourModalOpen(true)}
      />

      {/* ── 9. Planning a Complex Project? (Reusable CTA, Dark) ─────── */}
      <PremiumProjectCTASection
        id="project-management-cta"
        title="Planning a Complex Project?"
        description="Don't manage every detail alone. Let an experienced team coordinate your project from planning to completion."
        stats={[
          { value: '50+ Years', label: 'of Industry Experience' },
          { value: '500+', label: 'Projects' },
          { value: '₹1 Cr+', label: 'Project Expertise' },
        ]}
        ctaText="Discuss Your Project"
        onCtaClick={() => setIsApplyModalOpen(true)}
      />

      {/* ── 10. From Bhoomi Pooja to House Warming (Reusable Belt) ──── */}
      <JourneyMarqueeSection
        id="pm-bhoomi-pooja"
        title="From Bhoomi Pooja to House Warming"
        lead="A project involves countless details. We stay involved throughout the journey—from the first Bhoomi Pooja to the final House Warming."
        description="Our team coordinates the people, materials, timelines, quality, and execution so you can experience the journey with greater confidence."
        tagline="You envision it. We manage every detail."
      />

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
