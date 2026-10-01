"use client";

import React from 'react';
import FAQSection from '@/components/FAQ/FAQSection';

export const LAYOUT_FAQ_ITEMS = [
  {
    id: '1',
    question: 'What is layout promotion?',
    answer:
      'Layout promotion involves planning, developing, positioning, and marketing land as a structured layout for potential buyers.',
  },
  {
    id: '2',
    question: 'Does Ajay Homes work directly with landowners?',
    answer:
      'Yes. We work with landowners and property owners looking to explore development and sales opportunities.',
  },
  {
    id: '3',
    question: 'Do you help with layout planning?',
    answer:
      'Yes. We coordinate layout planning and development requirements based on the project scope and applicable regulations.',
  },
  {
    id: '4',
    question: 'Do you provide infrastructure development?',
    answer:
      'Infrastructure requirements such as roads, drainage, utilities, and other site-development elements can be coordinated based on the project.',
  },
  {
    id: '5',
    question: 'Can you help sell developed plots?',
    answer:
      'Yes. Ajay Homes also provides real estate buying and selling services and can support the marketing and sales process for suitable developments.',
  },
  {
    id: '6',
    question: 'Do you work with NRI landowners?',
    answer:
      'Yes. We work with NRI clients who own or are considering developing property in Chennai.',
  },
];

export const LayoutFAQSection = ({
  onOpenTourModal,
  onOpenApply,
}) => {
  return (
    <FAQSection
      items={LAYOUT_FAQ_ITEMS}
      onOpenTourModal={onOpenTourModal}
      onOpenApply={onOpenApply}
    />
  );
};

export default LayoutFAQSection;
