import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowDownRight, Calendar, Phone, MapPin, Sparkles, ChevronDown } from 'lucide-react';
import Button from '../UI/Button';

export const Navbar = ({ onOpenTourModal, onOpenApplyModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Exact Services requested
  const services = [
    { label: 'Construction', href: '/services/construction' },
    { label: 'Layout promoters', href: '/services/layout-promote' },
    { label: 'Project management', href: '/services/project-management' },
    { label: 'Property developer', href: '/services/property-developer' },
    { label: 'Interior designing', href: '/services/interior-design' },
    { label: 'Real estate selling and buy', href: '/services/real-estate' },
  ];

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-8 py-0 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">

          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 ml-2 sm:ml-4 md:ml-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden flex items-center justify-center p-1 sm:p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md group-hover:border-[#ff8c00]/40 transition-all duration-300"
            >
              <img
                src="/images/logo/logo-ajay-homes.png"
                alt="Ajay Homes & Estates Logo"
                className="h-8 sm:h-9 lg:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
          </Link>

          {/* Desktop Nav Links */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex items-center gap-6 glass-pill px-6 py-2.5 rounded-full border border-white/15"
          >
            <Link href="/" className="text-xs sm:text-sm font-medium text-white/80 hover:text-[#ff8c00] transition-colors">Home</Link>
            <Link href="/#about" className="text-xs sm:text-sm font-medium text-white/80 hover:text-[#ff8c00] transition-colors">About</Link>

            {/* Services with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-xs sm:text-sm font-medium text-white/80 hover:text-[#ff8c00] transition-colors cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-[#ff8c00]' : ''}`} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-3 w-64 glass-card py-2 rounded-2xl border border-white/15 shadow-2xl z-50 backdrop-blur-xl"
                  >
                    {services.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="block px-4 py-2 text-xs sm:text-sm text-white/80 hover:text-[#ff8c00] hover:bg-white/5 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/#gallery" className="text-xs sm:text-sm font-medium text-white/80 hover:text-[#ff8c00] transition-colors">Gallery</Link>
            <Link href="/#resources" className="text-xs sm:text-sm font-medium text-white/80 hover:text-[#ff8c00] transition-colors">Resources</Link>
            <Link href="/contact" className="text-xs sm:text-sm font-medium text-white/80 hover:text-[#ff8c00] transition-colors">Contact</Link>
          </motion.nav>

          {/* Right Controls (Schedule a Tour & Apply Now) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {/* Schedule a Tour Button with Green/Orange Status Dot */}
            <button
              type="button"
              suppressHydrationWarning
              onClick={onOpenTourModal}
              className="hidden sm:flex glass-pill hover:bg-white/20 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-white transition-all items-center gap-2 cursor-pointer shadow-md hover:scale-105 active:scale-95"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse inline-block shadow-[0_0_8px_var(--primary)]" />
              <Calendar className="w-3.5 h-3.5 text-[var(--primary)]" />
              <span>Schedule a Tour</span>
            </button>

            {/* Apply Now Button */}
            <Button
              onClick={onOpenApplyModal}
              size="sm"
            >
              Apply Now
            </Button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden glass-pill-dark p-2.5 rounded-full text-white cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-[#ff8c00]" /> : <Menu className="w-5 h-5 text-[#f0ede8]" />}
            </button>
          </motion.div>

        </div>
      </header>

      {/* Full-Screen / Overlay Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#1a1c22] flex flex-col justify-between p-8 sm:p-16 pt-28 text-white overflow-y-auto"
            style={{ willChange: 'transform' }}
          >
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column: Navigation Links */}
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#ff8c00] font-semibold">
                  Navigation Menu
                </p>
                <nav className="flex flex-col gap-4 text-xl sm:text-3xl font-bold uppercase">
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center justify-between border-b border-white/10 pb-3 hover:text-[#ff8c00] transition-colors"
                  >
                    <span>Home</span>
                    <ArrowDownRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -rotate-90 group-hover:rotate-0 transition-all text-[#ff8c00]" />
                  </Link>

                  <Link
                    href="/#about"
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center justify-between border-b border-white/10 pb-3 hover:text-[#ff8c00] transition-colors"
                  >
                    <span>About</span>
                    <ArrowDownRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -rotate-90 group-hover:rotate-0 transition-all text-[#ff8c00]" />
                  </Link>

                  {/* Services Accordion on Mobile */}
                  <div className="border-b border-white/10 pb-3">
                    <button
                      type="button"
                      suppressHydrationWarning
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="w-full flex items-center justify-between hover:text-[#ff8c00] transition-colors cursor-pointer text-left"
                    >
                      <span>Services</span>
                      <ChevronDown className={`w-6 h-6 text-[#ff8c00] transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 pt-3 space-y-2 text-sm font-medium normal-case"
                        >
                          {services.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block py-1 text-white/70 hover:text-[#ff8c00] transition-colors"
                            >
                              - {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/#gallery"
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center justify-between border-b border-white/10 pb-3 hover:text-[#ff8c00] transition-colors"
                  >
                    <span>Gallery</span>
                    <ArrowDownRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -rotate-90 group-hover:rotate-0 transition-all text-[#ff8c00]" />
                  </Link>

                  <Link
                    href="/#resources"
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center justify-between border-b border-white/10 pb-3 hover:text-[#ff8c00] transition-colors"
                  >
                    <span>Resources</span>
                    <ArrowDownRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -rotate-90 group-hover:rotate-0 transition-all text-[#ff8c00]" />
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center justify-between border-b border-white/10 pb-3 hover:text-[#ff8c00] transition-colors"
                  >
                    <span>Contact</span>
                    <ArrowDownRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -rotate-90 group-hover:rotate-0 transition-all text-[#ff8c00]" />
                  </Link>
                </nav>
              </div>

              {/* Right Column: Contact Info & Highlight Card */}
              <div className="glass-card p-8 rounded-3xl space-y-6 border border-white/10">
                <div className="flex items-center gap-3 text-[#ff8c00]">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-semibold tracking-wider uppercase">Ajay Homes & Estates</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase">Crafting Quality Homes in Chennai</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  The most desired, fully developed residential flats in and around Chennai. We specialize in constructing quality buildings with customized solutions for our clients.
                </p>
                <div className="pt-4 border-t border-white/10 space-y-3 text-sm text-white/80">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#ff8c00]" />
                    <span>Velachery, OMR, Porur & Tambaram, Chennai</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#ff8c00]" />
                    <span>+91 98400 12345 / 044-2244 5566</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => { setIsMenuOpen(false); onOpenTourModal?.(); }}
                    className="flex-1 glass-pill py-3 rounded-xl text-center font-medium text-sm hover:bg-white/20 transition-all cursor-pointer"
                  >
                    Book In-Person Tour
                  </button>
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => { setIsMenuOpen(false); onOpenApplyModal?.(); }}
                    className="flex-1 btn-gold-gradient py-3 rounded-xl text-center font-bold text-sm cursor-pointer"
                  >
                    Apply Online
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom bar inside drawer */}
            <div className="max-w-6xl mx-auto w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-white/50 gap-4">
              <span>© 2026 Ajay Homes & Estates. All Rights Reserved.</span>
              <div className="flex gap-6">
                <Link href="#" className="hover:text-[#ff8c00] transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-[#ff8c00] transition-colors">Terms of Service</Link>
                <Link href="#" className="hover:text-[#ff8c00] transition-colors">Accessibility</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
