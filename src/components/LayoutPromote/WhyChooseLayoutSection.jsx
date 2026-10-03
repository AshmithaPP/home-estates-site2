"use client";

import React from 'react';
import WhyChooseUsSection from '@/components/Common/WhyChooseUsSection';

export const LAYOUT_PROMOTION_FEATURES = [
  {
    id: 'property-lifecycle',
    title: 'Experience Across the Property Lifecycle',
    description: 'Our expertise extends beyond layout development into construction, project management, interiors, property development, and real estate.',
    href: '/about-us',
  },
  {
    id: '500-projects',
    title: '500+ Projects',
    description: 'Our experience across 500+ projects gives us practical understanding of property development and execution.',
    href: '/gallery',
  },
  {
    id: 'industry-experience',
    title: '60+ Years of Industry Experience',
    description: 'Decades of industry experience supporting property owners, investors, and development opportunities.',
    href: '/about-us',
  },
  {
    id: 'end-to-end',
    title: 'End-to-End Approach',
    description: 'We can coordinate multiple stages of the development journey through one experienced team.',
    href: '/services/project-management',
  },
  {
    id: 'market-planning',
    title: 'Market-Focused Planning',
    description: 'We consider usability, location, target buyers, development potential, and market requirements when planning a project.',
    href: '/services/property-developer',
  },
  {
    id: 'transparent-coordination',
    title: 'Transparent Coordination',
    description: 'Clear communication and structured coordination help keep the development process organised.',
    href: '/contact',
  },
];

export const WhyChooseLayoutSection = ({
  id = 'why-choose-layout-promotion',
  onOpenApply,
}) => {
  return (
    <WhyChooseUsSection
      id={id}
      title="Why Choose Ajay Homes for Layout Promotion?"
      features={LAYOUT_PROMOTION_FEATURES}
      imageSrc="/assets/img/img-010.jpeg"
      imageAlt="Ajay Homes Layout Promotion and Land Development"
      onOpenApply={onOpenApply}
    />
  );
};

export default WhyChooseLayoutSection;
