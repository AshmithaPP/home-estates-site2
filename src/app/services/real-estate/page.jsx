"use client";

import React, { useState } from 'react';
import Header from '@/components/Hero/Header';
import RealEstateHero from '@/components/RealEstate/RealEstateHero';
import RealEstateExperienceSection from '@/components/RealEstate/RealEstateExperienceSection';
import RealEstateServicesSection from '@/components/RealEstate/RealEstateServicesSection';
import WhyChooseUsSection from '@/components/Common/WhyChooseUsSection';
import LookingToBuyAndSellSection from '@/components/RealEstate/LookingToBuyAndSellSection';
import NRIPropertyServicesSection from '@/components/RealEstate/NRIPropertyServicesSection';
import BuyingSellingProcessSection from '@/components/RealEstate/BuyingSellingProcessSection';
import MoreThanTransactionSection from '@/components/RealEstate/MoreThanTransactionSection';
import ServiceFormFAQSection from '@/components/Common/ServiceFormFAQSection';
import ApplyModal from '@/components/Modals/ApplyModal';
import TourModal from '@/components/Modals/TourModal';

// Exact "Why Choose Ajay Homes?" points requested by user
const realEstateWhyChooseFeatures = [
  {
    id: 'experience',
    title: '50+ Years of Industry Experience',
    description: 'Our experience across construction, development, interiors, project management, and real estate gives us a broader understanding of property.',
  },
  {
    id: 'projects',
    title: '500+ Projects',
    description: 'Our project experience spans different property types and development requirements.',
  },
  {
    id: 'market-focus',
    title: 'Chennai Market Focus',
    description: 'We understand the local property landscape and work with buyers, sellers, investors, and property owners across Chennai.',
  },
  {
    id: 'expertise',
    title: 'End-to-End Property Expertise',
    description: 'Our capabilities extend beyond transactions into construction, development, interiors, and project management.',
  },
  {
    id: 'guidance',
    title: 'Practical Guidance',
    description: 'We focus on helping clients understand the property, its requirements, and the transaction process before making decisions.',
  },
  {
    id: 'transparent',
    title: 'Transparent Approach',
    description: 'Clear communication and structured coordination throughout the buying or selling journey.',
  },
];

// Exact Frequently Asked Questions requested by user
const realEstateFaqs = [
  {
    id: 'faq-1',
    question: 'Does Ajay Homes help with both buying and selling properties?',
    answer: 'Yes. We provide support for both property buyers and property owners looking to sell.',
  },
  {
    id: 'faq-2',
    question: 'What type of properties can I buy or sell through Ajay Homes?',
    answer: 'Our services can cover residential properties, commercial properties, plots, land, and other suitable property opportunities.',
  },
  {
    id: 'faq-3',
    question: 'Do you help property owners sell their land?',
    answer: 'Yes. Property owners can approach us regarding suitable land and property-selling requirements.',
  },
  {
    id: 'faq-4',
    question: 'Do you work with property investors?',
    answer: 'Yes. We work with investors exploring residential, commercial, land, and other property opportunities.',
  },
  {
    id: 'faq-5',
    question: 'Do you provide real estate services for NRI clients?',
    answer: 'Yes. We support NRI clients with property buying, selling, development, and related requirements in Chennai.',
  },
  {
    id: 'faq-6',
    question: 'Can Ajay Homes help me find a property based on my requirements?',
    answer: 'Yes. Share your preferred location, property type, budget, and purpose, and our team can understand your requirement and identify suitable opportunities.',
  },
];

const realEstateServiceOptions = [
  "Property Buying",
  "Property Selling",
  "Residential Properties",
  "Commercial Properties",
  "Investment Properties",
  "Property Evaluation",
  "Buyer & Seller Coordination",
  "NRI Property Services",
];

export default function RealEstatePage() {
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

      {/* ── 1. Hero Section (shasthri-nagar-adyar/img64.jpg) ────────── */}
      <RealEstateHero
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── 2. Your Property. Our Market Experience. (White BG) ──────── */}
      <RealEstateExperienceSection />

      {/* ── 3. Our Real Estate Services (8-Card Showcase, Grey BG) ─────── */}
      <RealEstateServicesSection />

      {/* ── 4. Why Choose Ajay Homes? (Reusable WhyChooseUsSection, White BG) ── */}
      <WhyChooseUsSection
        id="why-choose-ajay-homes"
        title="Why Choose Ajay Homes?"
        features={realEstateWhyChooseFeatures}
        imageSrc="/images/residence-images/besantnagar-residence-view/img110.jpg"
        imageAlt="Why Choose Ajay Homes — Real Estate Services"
        ctaText="Discuss Your Property Requirement"
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── 5. Looking to Buy? & Looking to Sell? (Dual Showcase, Grey BG) ── */}
      <LookingToBuyAndSellSection
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── 6. Property Services for NRI Clients (White BG) ───────────── */}
      <NRIPropertyServicesSection
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── 7. Our Buying & Selling Process (5 Stages, Grey BG) ────────── */}
      <BuyingSellingProcessSection />

      {/* ── 8. More Than a Real Estate Transaction (White BG) ─────────── */}
      <MoreThanTransactionSection />

      {/* ── 10. LAST SECTION: One Side Form & Another Side FAQ (Light Grey #f8f8f6) ── */}
      <ServiceFormFAQSection
        id="real-estate-faq-form"
        serviceName="Real Estate"
        tagline="FAQS"
        heading="Frequently Asked Questions"
        faqs={realEstateFaqs}
        formTitle="Book a 15 min call"
        formSubtitle="Let's discuss your property requirements and help you make informed decisions."
        serviceOptions={realEstateServiceOptions}
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
