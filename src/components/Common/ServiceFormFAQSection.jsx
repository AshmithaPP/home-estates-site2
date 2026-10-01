"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, CheckCircle2, ChevronDown } from 'lucide-react';
import Button from '@/components/UI/Button';

export default function ServiceFormFAQSection({
  id = "service-form-faq",
  serviceName = "Construction",
  tagline = "FAQs",
  heading = "Frequently Asked Questions",
  faqs = [],
  formTitle = "Book a 15 min call",
  formSubtitle = "If you have any questions about our services, approvals, or custom floorplans, schedule a private consultation.",
  serviceOptions = [
    "Individual Luxury Villa",
    "Residential Apartment Build",
    "Turnkey Construction",
    "Demolition & Re-Construction",
    "Commercial Development"
  ],
}) {
  const [openId, setOpenId] = useState(faqs[0]?.id || "1");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: serviceOptions[0] || '',
    note: ''
  });

  const toggleAccordion = (faqId) => {
    setOpenId((prev) => (prev === faqId ? null : faqId));
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      serviceType: serviceOptions[0] || '',
      note: ''
    });
  };

  return (
    <section
      id={id}
      className="relative py-12 sm:py-16 lg:py-20 px-6 sm:px-12 lg:px-20 text-[#1a1a1a] border-t border-black/5 overflow-hidden"
      style={{ background: '#f8f8f6', fontFamily: 'var(--font-family-base)' }}
    >
      {/* Background Soft Glow */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full blur-[140px] pointer-events-none"
        style={{ backgroundColor: 'var(--primary)', opacity: 0.08 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ── LEFT COLUMN: Header & Short Consultation Form Card ────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-start space-y-6"
          >
            {/* Header Block */}
            <div className="space-y-1.5 text-left">
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#555555]">
                  {tagline}
                </span>
              </div>

              <h2
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1a1a1a] tracking-tight leading-tight uppercase text-left"
                style={{ fontFamily: 'var(--font-family-base)' }}
              >
                Frequently Asked<br />
                <span style={{ color: 'var(--primary)' }}>Questions</span>
              </h2>
            </div>

            {/* Short & Compact White Form Card (Matching Reference UI) */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-xl shadow-black/5 border border-black/5 space-y-4 max-w-md w-full">
              {/* Advisor Pill & Title */}
              <div className="flex items-center gap-3">
                <div className="relative shrink-0">
                  <div
                    className="absolute inset-0 rounded-full blur-md"
                    style={{ backgroundColor: 'var(--primary)', opacity: 0.2 }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
                    alt="Property Advisor"
                    className="relative w-12 h-12 rounded-full object-cover border-2 shadow-sm"
                    style={{ borderColor: 'var(--primary)' }}
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1a1a1a] tracking-tight leading-snug">
                    {formTitle}
                  </h3>
                  <p className="text-xs text-[#555555] font-medium leading-tight">
                    {formSubtitle}
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="py-6 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[var(--primary)]/15 flex items-center justify-center text-[var(--primary)]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#1a1a1a]">Request Received!</h4>
                    <p className="text-xs text-[#666666] mt-1">
                      Thank you, <span className="font-semibold text-black">{formData.name}</span>. Our technical advisor will call you within 24 hours.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-xs font-bold text-[var(--primary)] hover:underline cursor-pointer pt-1"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 pt-1">
                  {/* Name Input */}
                  <div>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your Name *"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fafafa] border border-black/10 text-xs sm:text-sm text-[#1a1a1a] placeholder-[#888888] focus:bg-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
                    />
                  </div>

                  {/* Phone Input with +91 */}
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#777777] select-none">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="Phone Number *"
                      className="w-full pl-11 pr-3.5 py-2.5 rounded-xl bg-[#fafafa] border border-black/10 text-xs sm:text-sm text-[#1a1a1a] placeholder-[#888888] focus:bg-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
                    />
                  </div>

                  {/* Service Requirement Dropdown */}
                  <div className="relative">
                    <select
                      value={formData.serviceType}
                      onChange={(e) => handleInputChange('serviceType', e.target.value)}
                      className="w-full pl-3.5 pr-8 py-2.5 rounded-xl bg-[#fafafa] border border-black/10 text-xs sm:text-sm text-[#1a1a1a] appearance-none focus:bg-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all cursor-pointer"
                    >
                      {serviceOptions.map((opt, idx) => (
                        <option key={idx} value={opt} className="text-[#1a1a1a] bg-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#777777] pointer-events-none" />
                  </div>

                  {/* Short Note / Location */}
                  <div>
                    <input
                      type="text"
                      value={formData.note}
                      onChange={(e) => handleInputChange('note', e.target.value)}
                      placeholder="Location in Chennai / Plot Size (Optional)"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fafafa] border border-black/10 text-xs sm:text-sm text-[#1a1a1a] placeholder-[#888888] focus:bg-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
                    />
                  </div>

                  {/* Submit Button (Matching reference UI orange button) */}
                  <div className="pt-1.5">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="primary"
                      size="md"
                      className="w-full justify-center"
                    >
                      {isSubmitting ? "Submitting..." : "Book a Free Call"}
                    </Button>
                  </div>

                  <p className="text-[10.5px] text-[#777777] text-center pt-0.5">
                    100% Confidential • Fast 24h Response • Zero Obligation
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Exact Reference UI FAQ Accordion Cards List ── */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = openId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className={`bg-white rounded-2xl p-5 sm:p-6 border transition-all duration-300 ${
                    isOpen
                      ? 'shadow-lg'
                      : 'border-black/5 shadow-sm hover:shadow-md hover:border-black/10'
                  }`}
                  style={
                    isOpen
                      ? {
                          borderColor: 'var(--primary)',
                          boxShadow: '0 10px 25px -5px color-mix(in srgb, var(--primary) 15%, transparent)',
                        }
                      : {}
                  }
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full text-left flex items-center justify-between gap-4 cursor-pointer group select-none"
                  >
                    <span
                      className={`text-sm sm:text-base font-bold transition-colors duration-300 leading-snug ${
                        isOpen ? 'text-[#1a1a1a]' : 'text-[#2a2a2a]'
                      }`}
                    >
                      {item.question}
                    </span>
                    
                    <span className="p-1 rounded-full text-[#333333] transition-colors shrink-0">
                      {isOpen ? (
                        <X className="w-4 h-4" style={{ color: 'var(--primary)' }} />
                      ) : (
                        <Plus className="w-4 h-4 text-[#444444]" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div
                          className="pt-3 mt-3 border-t border-black/5 text-[#555555] text-xs sm:text-sm font-medium leading-relaxed"
                        >
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
