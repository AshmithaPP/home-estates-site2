"use client";

import { useEffect } from 'react';

/**
 * ApplyModal
 * The old "2026 Global Luxury Report" form has been removed. Any button that
 * used to open it now opens the site-wide free consultation popup instead
 * (components/Home/ConsultationPopup, mounted in app/layout.jsx).
 */
export const ApplyModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    window.dispatchEvent(new Event('open-consultation'));
    onClose?.();
  }, [isOpen, onClose]);

  return null;
};

export default ApplyModal;
