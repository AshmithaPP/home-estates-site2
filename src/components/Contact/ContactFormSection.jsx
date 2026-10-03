"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Send, CheckCircle2, MapPin } from 'lucide-react';
import Button from '../UI/Button';
import { CONTACT } from '@/data/contactInfo';

export const ContactFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interestedIn: '',
    location: '',
    message: '',
  });

  const servicesOptions = [
    'Construction',
    'Layout Promotion',
    'Project Management',
    'Property Development',
    'Interior Designing',
    'Buying Property',
    'Selling Property',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact-form"
      className="relative py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundColor: 'var(--grey-deepest)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-family-base)',
      }}
    >
      {/* ── Soft Ambient Glows for Depth ── */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[140px] pointer-events-none"
        style={{
          backgroundColor: 'var(--primary)',
          opacity: 0.08,
        }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-[140px] pointer-events-none"
        style={{
          backgroundColor: 'var(--primary)',
          opacity: 0.08,
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-7 items-stretch">

          {/* ══════════════════════════════════════════════════════════════════
              CARD 1 (LEFT): Visit Us with Image (5 Cols)
             ══════════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative min-h-[420px] sm:min-h-[460px] rounded-2xl border border-white/10 shadow-2xl overflow-hidden group"
          >
            {/* Full-bleed photo */}
            <img
              src="/assets/img/img-001.jpeg"
              alt="Visit Us — Ajay Homes Office"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to top, color-mix(in srgb, var(--grey-deepest) 85%, transparent) 0%, transparent 55%)' }}
            />

            {/* Small overlay card with the visit details */}
            <div
              className="absolute left-3 right-3 bottom-3 sm:left-4 sm:right-auto sm:bottom-4 sm:w-[320px] rounded-xl border border-white/10 p-4 sm:p-5 backdrop-blur-md shadow-xl"
              style={{ backgroundColor: 'color-mix(in srgb, var(--grey-deepest) 82%, transparent)' }}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold tracking-tight leading-snug" style={{ color: 'var(--text-primary)' }}>
                Visit Us
              </h3>

              <div className="mt-2">
                <span className="text-sm font-bold inline-block" 
                  style={{ color: 'var(--primary)' }}>
                  Ajay Homes
                </span>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  Chennai, Tamil Nadu
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-white/10 space-y-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                <div>
                  <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Phone: </span>
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                    {CONTACT.mobilePhone.display}
                  </span>
                </div>
                <div>
                  <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Email: </span>
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                    {CONTACT.email}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Button
                  href="https://maps.google.com/?q=Ajay+Homes+Chennai+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                  icon={MapPin}
                  showIcon={true}
                >
                  Get Directions
                </Button>
                <Button
                  href="/about-us"
                  variant="glass"
                  size="sm"
                >
                  About Us
                </Button>
              </div>
            </div>
          </motion.div>

          {/* ══════════════════════════════════════════════════════════════════
              CARD 2 (RIGHT): Interactive Requirement Enquiry Form (7 Cols)
             ══════════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative rounded-2xl p-4 sm:p-5 lg:p-6 border border-white shadow-2xl bg-white flex flex-col justify-between overflow-hidden"
            style={{
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.6)',
            }}
          >
            {/* Form Card Header */}
            <div className="mb-3.5 sm:mb-4 text-left">
              <h2 className="text-xl sm:text-2xl lg:text-[26px] 2xl:text-[30px] font-bold text-slate-900 tracking-tight leading-snug">
                Tell Us About Your Requirement
              </h2>

              <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                Provide your project details and our team will get in touch with you shortly. You can also explore our{' '}
                construction services{' '}
                or view our{' '}
                500+ completed projects.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="my-auto py-8 px-5 rounded-xl border border-slate-200 text-center space-y-3 bg-slate-50"
              >
                <div
                  className="w-12 h-12 rounded-full mx-auto flex items-center justify-center border"
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--primary) 15%, transparent)',
                    borderColor: 'color-mix(in srgb, var(--primary) 30%, transparent)',
                    color: 'var(--primary)',
                  }}
                >
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  Enquiry Submitted!
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our Chennai advisory team has received your requirement and will contact you shortly at <span className="font-semibold" style={{ color: 'var(--primary)' }}>{formData.phone}</span>.
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        interestedIn: '',
                        location: '',
                        message: '',
                      });
                    }}
                  >
                    Submit Another Enquiry
                  </Button>
                  <Button
                    href="/gallery"
                    variant="secondary"
                    size="sm"
                  >
                    View 500+ Projects
                  </Button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">

                {/* Row 1: Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="text-left">
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1 uppercase tracking-wide">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[var(--primary)] focus:bg-white focus:ring-1 focus:ring-[var(--primary)] transition-all duration-200"
                    />
                  </div>

                  <div className="text-left">
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1 uppercase tracking-wide">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Your Contact Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[var(--primary)] focus:bg-white focus:ring-1 focus:ring-[var(--primary)] transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Row 2: Email Address & Project Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="text-left">
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[var(--primary)] focus:bg-white focus:ring-1 focus:ring-[var(--primary)] transition-all duration-200"
                    />
                  </div>

                  <div className="text-left">
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1 uppercase tracking-wide">
                      Project / Property Location
                    </label>
                    <input
                      type="text"
                      placeholder="Where is your project located?"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[var(--primary)] focus:bg-white focus:ring-1 focus:ring-[var(--primary)] transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Row 3: I’m Interested In */}
                <div className="text-left">
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1 uppercase tracking-wide">
                    I’m Interested In *
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.interestedIn}
                      onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 pr-9 text-xs sm:text-sm text-slate-900 invalid:text-slate-400 focus:outline-none focus:border-[var(--primary)] focus:bg-white focus:ring-1 focus:ring-[var(--primary)] transition-all duration-200 cursor-pointer appearance-none"
                    >
                      <option value="" disabled className="text-slate-400">
                        Select a service...
                      </option>
                      {servicesOptions.map((opt) => (
                        <option key={opt} value={opt} className="text-slate-900 py-1.5">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Row 4: Tell Us More */}
                <div className="text-left">
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1 uppercase tracking-wide">
                    Tell Us More
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Briefly describe your requirement."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[var(--primary)] focus:bg-white focus:ring-1 focus:ring-[var(--primary)] transition-all duration-200 resize-none"
                  />
                </div>

                {/* Row 5: Action Row */}
                <div className="pt-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    icon={Send}
                    showIcon={true}
                    className="w-full sm:w-auto uppercase tracking-wider font-bold py-2.5 px-6 text-xs"
                  >
                    Submit Enquiry
                  </Button>

                  <span className="text-[11px] text-slate-500 text-left sm:text-right">
                    Your information is 100% confidential. No spam guaranteed.
                  </span>
                </div>

                {/* Service Quick Navigation */}
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
                  <span>
                    Explore services:{' '}
                    Construction
                    {' '}•{' '}
                    Layouts
                    {' '}•{' '}
                    Development
                    {' '}•{' '}
                    Interiors
                  </span>
                 
                </div>

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
