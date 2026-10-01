"use client";

import React from 'react';
import PremiumProjectCTASection from '@/components/Common/PremiumProjectCTASection';

export const LAYOUT_CTA_STATS = [
  { value: '60+ Years', label: 'of Industry Experience' },
  { value: '500+', label: 'Projects' },
  { value: 'End-to-End', label: 'Property Expertise' },
];

export const LayoutCTASection = ({
  id = 'have-land-in-chennai',
  onOpenApply,
}) => {
  return (
    <PremiumProjectCTASection
      id={id}
      title="Have Land in Chennai?"
      description="Let's explore what your property can become."
      stats={LAYOUT_CTA_STATS}
      ctaText="Talk to Ajay Homes"
      onCtaClick={onOpenApply}
    />
  );
};

export default LayoutCTASection;
