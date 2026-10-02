"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Sparkles, Phone, Mail, User, Building } from 'lucide-react';

export const GetDesignModal = ({ project, isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    requirements: '',
  });

  if (!isOpen || !project) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-[var(--grey-deep)] text-[var(--text-primary)] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[var(--primary)]/30 overflow-hidden"
        >
          {/* Ambient Glow */}
          <div 
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] pointer-events-none opacity-15"
            style={{ background: 'var(--primary)' }}
          />

          {/* Close Button */}
          <button suppressHydrationWarning
            onClick={handleClose}
            aria-label="Close Modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div className="space-y-5">
              
              {/* Header */}
              <div className="pr-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--primary)]/15 border border-[var(--primary)]/30 text-[11px] font-extrabold uppercase tracking-wider text-[var(--primary)] mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Get Similar Design Quote</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight">
                  Inquire About This Design
                </h3>
              </div>

              {/* Selected Project Summary Pill */}
              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />
                <div className="overflow-hidden">
                  <p className="text-xs sm:text-sm font-bold text-white truncate">
                    {project.title}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    {project.community}
                  </p>
                  <span className="text-[11px] text-white/70 block truncate">
                    Scope: {project.scope}
                  </span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[var(--grey-base)] border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-white/30 focus:outline-none focus:border-[var(--primary)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98400..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[var(--grey-base)] border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-white/30 focus:outline-none focus:border-[var(--primary)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      <input
                        type="email"
                        required
                        placeholder="name@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[var(--grey-base)] border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-white/30 focus:outline-none focus:border-[var(--primary)]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                    Your Site Location / Requirements (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. 2400 sq.ft plot in Anna Nagar or 3BHK interior renovation..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="w-full bg-[var(--grey-base)] border border-white/15 rounded-xl p-3 text-sm text-[var(--text-primary)] placeholder:text-white/30 focus:outline-none focus:border-[var(--primary)] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button suppressHydrationWarning
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-light)] text-black font-extrabold text-sm tracking-wide transition-all shadow-[0_0_24px_rgba(255,140,0,0.4)] hover:shadow-[0_0_36px_rgba(255,140,0,0.6)] cursor-pointer"
                  >
                    Request Free Consultation & Quote
                  </button>
                  <div className="flex items-center justify-center gap-2 text-[11px] text-[var(--text-muted)] font-medium mt-2.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[var(--primary)]" />
                    <span>Free Estimate &bull; Direct Architect Consultation &bull; Zero Obligation</span>
                  </div>
                </div>
              </form>

            </div>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[var(--primary)]/20 border border-[var(--primary)]/40 flex items-center justify-center mx-auto text-[var(--primary)]">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-extrabold text-white">Inquiry Received!</h3>
              <p className="text-sm text-[var(--text-muted)] max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our senior architectural team will contact you at <span className="text-[var(--primary)] font-bold">{formData.phone}</span> within 24 hours.
              </p>
              <button suppressHydrationWarning
                onClick={handleClose}
                className="py-2.5 px-6 rounded-full bg-[var(--primary)] text-black font-extrabold text-xs sm:text-sm tracking-wide mt-3 cursor-pointer"
              >
                Back to Gallery
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default GetDesignModal;
