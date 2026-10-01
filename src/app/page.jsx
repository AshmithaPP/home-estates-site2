"use client";

import React from 'react';
import Hero from '@/components/Hero/Hero';
import EverythingOnePlace from '@/components/Home/EverythingOnePlace';
import Spotlight from '@/components/Home/Spotlight';
import SignatureLivingShowcase from '@/components/Home/SignatureLivingShowcase';
import RealtimeProjects from '@/components/Home/RealtimeProjects';
import HowWeGotHere from '@/components/Home/HowWeGotHere';
import UnsurpassedLegacy from '@/components/Home/UnsurpassedLegacy';
import HappyClients from '@/components/Home/HappyClients';
import ReferralRewardBanner from '@/components/Home/ReferralRewardBanner';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-transparent text-[#f0ede8] selection:bg-[#ff8c00] selection:text-black font-sans">
      {/* 1. Hero Section (with site Header / Navbar) */}
      <Hero />

      {/* Sections below are ported from ajay-homes-estates (light theme) */}
      <main className="relative bg-white text-slate-900">
        {/* 2. Everything you Need at One Place */}
        <EverythingOnePlace />

        {/* 3. Iconic Architectural Spotlight Showcase */}
        <Spotlight />

        {/* 4. Signature Living Showcase with Scroll-Driven Emergent Projects */}
        <SignatureLivingShowcase />

        {/* 5. Realtime Client Projects Showcase */}
        <RealtimeProjects />

        {/* 6. How we got here? Interactive Timeline Showcase */}
        <HowWeGotHere />

        {/* 7. A Legacy Built Over 60 Years milestone timeline */}
        <UnsurpassedLegacy />

        {/* 8. Happy Clients: customer testimonials mosaic */}
        <HappyClients />

        {/* 9. Build with Confidence: projects & services banner */}
        <ReferralRewardBanner />

      </main>
    </div>
  );
}
