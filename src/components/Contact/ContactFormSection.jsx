"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Send, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
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

  const contactDetails = [
    { label: 'LOCATION', value: 'Ajay Homes, Chennai, Tamil Nadu' },
    { label: 'PHONE', value: '+91 98400 12345', href: 'tel:+919840012345' },
    { label: 'EMAIL', value: 'contact@ajayhomes.com', href: 'mailto:contact@ajayhomes.com' },
    { label: 'WORKING HOURS', value: 'Monday – Saturday: 9:30 AM – 6:30 PM' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact-form"
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 bg-[#1e1e1e] text-[#f0ede8] border-b border-white/5"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      {/* Subtle ambient lighting glow */}
      <div 
        className="absolute top-1/3 -left-32 w-80 h-80 rounded-full blur-[120px] pointer-events-none opacity-10"
        style={{ background: 'var(--primary)' }}
      />
      <div 
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-[120px] pointer-events-none opacity-10"
        style={{ background: 'var(--primary)' }}
      />

      <div className="relative z-10 max-w-[1380px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* ── LEFT COLUMN: Requirement Form ───────────────────────────── */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 sm:mb-8"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight leading-tight text-left">
                Tell Us About Your Requirement
              </h2>
            </motion.div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-8 sm:p-10 rounded-2xl border border-white/10 text-center space-y-4 shadow-2xl bg-white/5"
              >
                <div className="w-14 h-14 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] mx-auto flex items-center justify-center shadow-[0_0_24px_rgba(255,140,0,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Enquiry Submitted!</h3>
                <p className="text-xs sm:text-sm text-[#f0ede8]/80 leading-relaxed max-w-md mx-auto">
                  Thank you, <span className="text-[var(--primary)] font-semibold">{formData.name}</span>. Our Chennai advisory team has received your requirement and will get in touch with you shortly at <span className="text-white font-semibold">{formData.phone}</span>.
                </p>
                <div className="pt-2">
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

                {/* Row 3: I’m Interested In */}
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

                {/* Row 5: Action Row */}
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    icon={Send}
                    showIcon={true}
                    className="w-full sm:w-auto uppercase tracking-wider font-bold shadow-md hover:shadow-[0_0_18px_rgba(255,140,0,0.35)]"
                  >
                    Submit Enquiry
                  </Button>

                  <span className="text-xs text-white/50 text-left sm:text-right">
                    Your information is 100% confidential. No spam guaranteed.
                  </span>
                </div>

              </motion.form>
            )}
          </div>

          {/* ── RIGHT COLUMN: Contact Details (Image 2 Exact Replica) ───── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 pt-4 lg:pt-0 lg:pl-6 xl:pl-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              
              {/* 1. EMAIL ROW (Exact Replica Top Block) */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[var(--primary)] shrink-0 bg-white/5 shadow-sm">
                  <Mail className="w-4 h-4 stroke-[1.8]" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#a0a0a0] mb-0.5">
                    EMAIL
                  </span>
                  <a
                    href="mailto:contact@ajayhomes.com"
                    className="text-sm sm:text-base font-bold text-white hover:text-[var(--primary)] transition-colors"
                  >
                    contact@ajayhomes.com
                  </a>
                </div>
              </div>

              {/* Divider Line */}
              <div className="border-t border-white/10" />

              {/* 2. PHONE & OFFICE DETAILS BLOCK (Exact Replica Bottom Block) */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[var(--primary)] shrink-0 bg-white/5 shadow-sm">
                    <Phone className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#a0a0a0]">
                    PHONE &amp; OFFICE DETAILS
                  </span>
                </div>

                {/* Details List with Subtle Horizontal Lines */}
                <div className="divide-y divide-white/10 border-y border-white/10">
                  {contactDetails.map((item) => (
                    <div
                      key={item.label}
                      className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 text-xs sm:text-[13px] font-medium"
                    >
                      <span className="text-[#a0a0a0] font-bold uppercase tracking-wider text-[10.5px] sm:text-[11px]">
                        {item.label}
                      </span>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-bold text-white hover:text-[var(--primary)] transition-colors sm:text-right"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-bold text-white sm:text-right">
                          {item.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. GET DIRECTIONS BUTTON */}
              <div className="pt-2">
                <Button
                  href="https://maps.google.com/?q=Ajay+Homes+Chennai+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  icon={MapPin}
                  showIcon={true}
                  className="w-full sm:w-auto uppercase tracking-wider font-bold shadow-md hover:shadow-[0_0_18px_rgba(255,140,0,0.35)]"
                >
                  Get Directions
                </Button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
