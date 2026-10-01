"use client";

import React, { useState } from 'react';
import Header from '@/components/Hero/Header';
import ContactHero from '@/components/Contact/ContactHero';
import ContactFormSection from '@/components/Contact/ContactFormSection';
import WhyStartSection from '@/components/Contact/WhyStartSection';
import ProjectInMindSection from '@/components/Contact/ProjectInMindSection';
import ApplyModal from '@/components/Modals/ApplyModal';
import TourModal from '@/components/Modals/TourModal';

export default function ContactPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#1e1e1e] text-[#f0ede8] selection:bg-[#ff8c00] selection:text-black font-sans relative overflow-x-hidden">
      {/* ── Fixed / Floating Navbar ──────────────────────────────── */}
      <Header
        onOpenTour={() => setIsTourModalOpen(true)}
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── Contact Hero Section ─────────────────────────────────── */}
      <ContactHero />

      {/* ── 2nd Section: Form on Left & Contact Details on Right ─── */}
      <ContactFormSection />

      {/* ── 3rd Section: Why Start With Ajay Homes? ──────────────── */}
      <WhyStartSection />

      {/* ── 4th Section: Have a Project in Mind ──────────────────── */}
      <ProjectInMindSection
        onOpenTourModal={() => setIsTourModalOpen(true)}
        onOpenApply={() => setIsApplyModalOpen(true)}
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
