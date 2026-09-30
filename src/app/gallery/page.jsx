"use client";

import React, { useState } from 'react';
import Header from '@/components/Hero/Header';
import Footer from '@/components/Footer/Footer';
import TourModal from '@/components/Modals/TourModal';
import ApplyModal from '@/components/Modals/ApplyModal';
import GalleryHero from '@/components/Gallery/GalleryHero';
import FeaturedDeliveredSection from '@/components/Gallery/FeaturedDeliveredSection';
import ProjectGridSection from '@/components/Gallery/ProjectGridSection';
import ProjectLightboxModal from '@/components/Gallery/ProjectLightboxModal';
import GetDesignModal from '@/components/Gallery/GetDesignModal';
import { galleryProjects, galleryCategories } from '@/data/galleryProjects';

export default function GalleryPage() {
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // Lightbox Modal state
  const [activeLightboxProject, setActiveLightboxProject] = useState(null);

  // "Get This Design" Consultation Modal state
  const [activeInquiryProject, setActiveInquiryProject] = useState(null);

  const featuredProjects = galleryProjects.filter(p => p.isFeatured);

  return (
    <main
      className="min-h-screen text-[var(--text-primary)] selection:bg-[var(--primary)] selection:text-black relative overflow-x-hidden"
      style={{
        background: 'linear-gradient(160deg, var(--grey-deepest) 0%, var(--grey-deep) 40%, var(--grey-base) 80%, var(--grey-deepest) 100%)',
        fontFamily: 'var(--font-family-base)'
      }}
    >
      {/* ── Fixed / Floating Navbar ────────────────────────────────── */}
      <Header
        onOpenTour={() => setIsTourModalOpen(true)}
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── Gallery Hero Section (Matching About & Contact Hero Pages) ── */}
      <GalleryHero
        onOpenTour={() => setIsTourModalOpen(true)}
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* ── Main Gallery Content Container ─────────────────────────── */}
      <div
        id="gallery-content"
        className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16 sm:pb-24 relative z-10"
      >
        {/* ── SECTION 1: Featured Delivered Homes Banner (Screenshot 1 Exact Replica) ── */}
        <FeaturedDeliveredSection
          featuredProjects={featuredProjects}
          onSelectProject={(project) => setActiveLightboxProject(project)}
          onOpenInquiry={(project) => setActiveInquiryProject(project)}
        />

        {/* ── SECTION 2: All Delivered Projects Grid (Screenshot 2 Exact Replica) ────── */}
        <ProjectGridSection
          projects={galleryProjects}
          categories={galleryCategories}
          onSelectProject={(project) => setActiveLightboxProject(project)}
          onOpenInquiry={(project) => setActiveInquiryProject(project)}
        />
      </div>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <Footer
        onOpenApply={() => setIsApplyModalOpen(true)}
        onOpenTourModal={() => setIsTourModalOpen(true)}
      />

      {/* ── Modals ─────────────────────────────────────────────────── */}

      {/* 1. Fullscreen Photo Lightbox Modal */}
      <ProjectLightboxModal
        project={activeLightboxProject}
        isOpen={Boolean(activeLightboxProject)}
        onClose={() => setActiveLightboxProject(null)}
        onOpenInquiry={(project) => setActiveInquiryProject(project)}
      />

      {/* 2. "Get This Design" Design Inquiry Modal */}
      <GetDesignModal
        project={activeInquiryProject}
        isOpen={Boolean(activeInquiryProject)}
        onClose={() => setActiveInquiryProject(null)}
      />

      {/* 3. Global Tour & Apply Modals */}
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
