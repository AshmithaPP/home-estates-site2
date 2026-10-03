"use client";

import React, { useState } from 'react';
import Header from '@/components/Hero/Header';
import AboutHero from '@/components/About/AboutHero';
import AboutStorySection from '@/components/About/AboutStorySection';
import OnePartnerSection from '@/components/About/OnePartnerSection';
import BhoomiPoojaSection from '@/components/About/BhoomiPoojaSection';
import AboutTeamSection from '@/components/About/AboutTeamSection';
import ServiceGallerySection from '@/components/Common/ServiceGallerySection';
import BuiltForNextSection from '@/components/About/BuiltForNextSection';
import ApplyModal from '@/components/Modals/ApplyModal';
import TourModal from '@/components/Modals/TourModal';

// Delivered projects shown in the reusable gallery carousel on the About page
const aboutGalleryProjects = [
  { id: 'raman-residence', title: 'Contemporary 3BHK Residence', category: 'Luxury Residence', image: '/images/residence-images/raman-residence/img43.jpg' },
  { id: 'besant-nagar-enclave', title: 'Besant Nagar Luxury Enclave', category: 'Modern Architectural Villa', image: '/images/residence-images/besantnagar-residence-view/img103.jpg' },
  { id: 'natraj-residence', title: 'Contemporary Villa Living', category: 'Signature Living & Suite', image: '/images/residence-images/natraj-residence/img67.jpg' },
  { id: 'suresh-residence', title: 'Suresh Contemporary Residence', category: 'Contemporary Villa', image: '/images/residence-images/suresh-residence-view/img17.jpg' },
  { id: 'ankan-residence', title: 'Ankan Signature Residence', category: 'Luxury Villa Development', image: '/images/residence-images/ankan-resideance-view/img50.jpg' },
  { id: 'shasthri-nagar-residence', title: 'Shasthri Nagar Residence', category: 'Premium Residence', image: '/images/residence-images/shasthri-nagar-adyar/img72.jpg' },
];

export default function AboutPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  return (
    <main
      className="min-h-screen selection:bg-[var(--primary)] selection:text-black relative overflow-x-hidden"
      style={{
        backgroundColor: 'var(--grey-deepest)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-family-base)',
      }}
    >
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

      {/* ── Our Team: The People Behind Your Dream Home (Cream Background) ─ */}
      <AboutTeamSection />

      {/* ── Gallery Showcase Section (Curated Projects + Explore CTA) ── */}
      <ServiceGallerySection
        id="about-gallery"
        badge="THE AJAY MARQUEE"
        title="Delivered Architectural Excellence"
        projects={aboutGalleryProjects}
      />

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
