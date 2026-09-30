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
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#1e1e1e]"
    >
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* ── Form Heading ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-white tracking-tight leading-tight">
            Tell Us About Your Requirement
          </h2>
        </motion.div>

        {/* ── Form Container ────────────────────────────────────────── */}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-10 sm:p-14 rounded-3xl border border-white/10 text-center max-w-xl mx-auto space-y-4 shadow-2xl"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] mx-auto flex items-center justify-center shadow-[0_0_24px_rgba(255,140,0,0.4)]">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-white">Enquiry Submitted!</h3>
            <p className="text-sm text-[#f0ede8]/80 leading-relaxed">
              Thank you, <span className="text-[var(--primary)] font-semibold">{formData.name}</span>. Our Chennai advisory team has received your requirement and will get in touch with you shortly at <span className="text-white font-semibold">{formData.phone}</span>.
            </p>
            <div className="pt-4">
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
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-8 sm:space-y-10"
          >
            {/* Row 1: Name & Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              
              {/* Name */}
              <div className="relative group">
                <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_1px_0_0_var(--primary)] transition-all duration-300"
                />
              </div>

              {/* Phone Number */}
              <div className="relative group">
                <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Your Contact Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_1px_0_0_var(--primary)] transition-all duration-300"
                />
              </div>

            </div>

            {/* Row 2: Email Address & Project Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              
              {/* Email Address */}
              <div className="relative group">
                <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_1px_0_0_var(--primary)] transition-all duration-300"
                />
              </div>

              {/* Project / Property Location */}
              <div className="relative group">
                <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-2">
                  Project / Property Location
                </label>
                <input
                  type="text"
                  placeholder="Where is your project or property located?"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_1px_0_0_var(--primary)] transition-all duration-300"
                />
              </div>

            </div>

            {/* Row 3: I’m Interested In (Dropdown Select matching reference) */}
            <div className="relative group">
              <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-2">
                I’m Interested In *
              </label>
              <div className="relative">
                <select
                  required
                  value={formData.interestedIn}
                  onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 pb-3 pr-8 text-sm sm:text-base text-white focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_1px_0_0_var(--primary)] transition-all duration-300 cursor-pointer appearance-none"
                  style={{
                    backgroundColor: formData.interestedIn ? 'transparent' : 'transparent',
                  }}
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
                <ChevronDown className="w-4 h-4 text-white/60 absolute right-0 bottom-4 pointer-events-none group-focus-within:text-[var(--primary)] transition-colors" />
              </div>
            </div>

            {/* Row 4: Tell Us More */}
            <div className="relative group">
              <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-2">
                Tell Us More
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe your requirement."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 pb-3 text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_1px_0_0_var(--primary)] transition-all duration-300 resize-none"
              />
            </div>

            {/* Row 5: Submit Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Button
                type="submit"
                variant="primary"
                size="lg"
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
