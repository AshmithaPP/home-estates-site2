"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../UI/Button';

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
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#1e1e1e]"
    >
      <div className="relative z-10 max-w-3xl mx-auto">

        {/* ── Form Heading ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-tight">
            Tell Us About Your Requirement
          </h2>
        </motion.div>

        {/* ── Form Container ────────────────────────────────────────── */}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-8 sm:p-10 rounded-2xl border border-white/10 text-center max-w-xl mx-auto space-y-3.5 shadow-2xl"
          >
            <div className="w-14 h-14 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] mx-auto flex items-center justify-center shadow-[0_0_24px_rgba(255,140,0,0.4)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Enquiry Submitted!</h3>
            <p className="text-xs sm:text-sm text-[#f0ede8]/80 leading-relaxed">
              Thank you, <span className="text-[var(--primary)] font-semibold">{formData.name}</span>. Our Chennai advisory team has received your requirement and will get in touch with you shortly at <span className="text-white font-semibold">{formData.phone}</span>.
            </p>
            <div className="pt-3">
              <Button
                variant="primary"
                size="md"
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
            </div>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="space-y-6 sm:space-y-7"
          >
            {/* Row 1: Name & Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
              
              {/* Name */}
              <div className="relative group">
                <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-1.5">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_1px_0_0_var(--primary)] transition-all duration-300"
                />
              </div>

              {/* Phone Number */}
              <div className="relative group">
                <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Your Contact Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_1px_0_0_var(--primary)] transition-all duration-300"
                />
              </div>

            </div>

            {/* Row 2: Email Address & Project Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
              
              {/* Email Address */}
              <div className="relative group">
                <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_1px_0_0_var(--primary)] transition-all duration-300"
                />
              </div>

              {/* Project / Property Location */}
              <div className="relative group">
                <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-1.5">
                  Project / Property Location
                </label>
                <input
                  type="text"
                  placeholder="Where is your project or property located?"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_1px_0_0_var(--primary)] transition-all duration-300"
                />
              </div>

            </div>

            {/* Row 3: I’m Interested In (Dropdown Select matching reference) */}
            <div className="relative group">
              <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-1.5">
                I’m Interested In *
              </label>
              <div className="relative">
                <select
                  required
                  value={formData.interestedIn}
                  onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 pb-2 pr-8 text-sm sm:text-base text-white focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_1px_0_0_var(--primary)] transition-all duration-300 cursor-pointer appearance-none"
                >
                  <option value="" disabled className="bg-[#242424] text-white/50">
                    Select a service...
                  </option>
                  {servicesOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#242424] text-white py-2">
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-white/60 absolute right-0 bottom-3 pointer-events-none group-focus-within:text-[var(--primary)] transition-colors" />
              </div>
            </div>

            {/* Row 4: Tell Us More */}
            <div className="relative group">
              <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-1.5">
                Tell Us More
              </label>
              <textarea
                rows={2}
                placeholder="Briefly describe your requirement."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 pb-2 text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_1px_0_0_var(--primary)] transition-all duration-300 resize-none"
              />
            </div>

            {/* Row 5: Submit Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <Button
                type="submit"
                variant="primary"
                size="md"
                icon={Send}
                showIcon={true}
                className="w-full sm:w-auto"
              >
                Submit Enquiry
              </Button>

              <span className="text-xs text-white/50 text-center sm:text-right">
                Your information is 100% confidential. No spam guaranteed.
              </span>
            </div>

          </motion.form>
        )}

      </div>
    </section>
  );
};

export default ContactFormSection;
