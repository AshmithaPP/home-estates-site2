"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight, Menu, X, ChevronDown } from 'lucide-react';

export const Header = ({ onOpenTour, onOpenApply }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Exact Services requested
  const services = [
    { label: 'Construction', href: '/services/construction' },
    { label: 'Layout promote', href: '/#services-layout' },
    { label: 'Project management', href: '/#services-project-management' },
    { label: 'Property developer', href: '/#services-property-developer' },
    { label: 'Interior designing', href: '/#services-interior' },
    { label: 'Real estate selling and buy', href: '/#services-real-estate' },
  ];

  return (
    <>
      <header className="absolute top-4 sm:top-6 left-0 right-0 z-40 px-3 sm:px-12 py-0 transition-all duration-300">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between gap-2 relative">

          {/* Logo on Left */}
          <Link
            href="/"
            className="flex items-center gap-1.5 group shrink-0 ml-2 sm:ml-4 md:ml-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/logo/logo-ajay-homes.png"
                alt="Ajay Builders & Property Developers"
                className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </Link>

          {/* Center Inline Navigation Bar (Dead Center) */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex items-center gap-1 sm:gap-1.5 bg-[#080a0c]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[var(--primary)]/25 shadow-lg md:absolute md:left-1/2 md:-translate-x-1/2"
          >
            {/* 1. Home */}
            <Link
              href="/"
              className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold text-[var(--text-primary)]/80 hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-all cursor-pointer"
            >
              Home
            </Link>

            {/* 2. About */}
            <Link
              href="/about"
              className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold text-[var(--text-primary)]/80 hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-all cursor-pointer"
            >
              About
            </Link>

            {/* 3. Services with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold flex items-center gap-1 transition-all cursor-pointer ${
                  isServicesOpen
                    ? 'text-[var(--primary)] bg-[var(--primary)]/10'
                    : 'text-[var(--text-primary)]/80 hover:text-[var(--primary)] hover:bg-[var(--primary)]/10'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180 text-[var(--primary)]' : 'text-[var(--text-primary)]/60'
                  }`}
                />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-[#080a0c]/95 backdrop-blur-md py-2 px-1.5 rounded-2xl border border-[var(--primary)]/30 shadow-2xl z-50"
                  >
                    {services.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="block px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[var(--text-primary)]/85 hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-all"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. Gallery */}
            <Link
              href="/gallery"
              className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold text-[var(--text-primary)]/80 hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-all cursor-pointer"
            >
              Gallery
            </Link>

            {/* 5. Resources */}
            <Link
              href="/resources"
              className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold text-[var(--text-primary)]/80 hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-all cursor-pointer"
            >
              Resources
            </Link>

            {/* 6. Contact */}
            <Link
              href="/contact"
              className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold text-[var(--text-primary)]/80 hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-all cursor-pointer"
            >
              Contact
            </Link>
          </motion.nav>

          {/* Right Controls (Mobile Menu Toggle) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-1.5 sm:gap-3 shrink-0"
          >
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden glass-pill-dark p-1.5 sm:p-2 rounded-full text-white cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {isMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--primary)]" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--text-primary)]" />}
            </button>
          </motion.div>

        </div>
      </header>

      {/* Simple Compact Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 cursor-pointer"
            />

            {/* Compact Top Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100%' }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--primary)]/30 text-white shadow-2xl rounded-b-2xl p-4 sm:p-6 pt-14 sm:pt-16 bg-[#1a1c22]"
              style={{ willChange: 'transform' }}
            >
              <div className="max-w-md mx-auto w-full space-y-3">

                {/* Close button row inside menu */}
                <div className="flex items-center justify-end pb-2 border-b border-white/10">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-[var(--primary)]" />
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex flex-col gap-1.5 pt-1">
                  {/* Home */}
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-[var(--primary)]/10 border border-white/5 hover:border-[var(--primary)]/30 transition-all cursor-pointer group"
                  >
                    <span className="text-sm font-bold text-white group-hover:text-[var(--primary)] transition-colors">
                      Home
                    </span>
                    <ArrowDownRight className="w-4 h-4 text-[var(--primary)] transition-all" />
                  </Link>

                  {/* About */}
                  <Link
                    href="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-[var(--primary)]/10 border border-white/5 hover:border-[var(--primary)]/30 transition-all cursor-pointer group"
                  >
                    <span className="text-sm font-bold text-white group-hover:text-[var(--primary)] transition-colors">
                      About
                    </span>
                    <ArrowDownRight className="w-4 h-4 text-[var(--primary)] transition-all" />
                  </Link>

                  {/* Services Accordion in Mobile Drawer */}
                  <div className="rounded-xl bg-white/5 border border-white/5 overflow-hidden">
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-white hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-colors cursor-pointer text-left"
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[var(--primary)] transition-transform duration-200 ${
                          isMobileServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-4 pb-2.5 space-y-1 bg-black/20"
                        >
                          {services.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block py-1.5 text-xs font-semibold text-white/80 hover:text-[var(--primary)] transition-colors"
                            >
                              - {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Gallery */}
                  <Link
                    href="/gallery"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-[var(--primary)]/10 border border-white/5 hover:border-[var(--primary)]/30 transition-all cursor-pointer group"
                  >
                    <span className="text-sm font-bold text-white group-hover:text-[var(--primary)] transition-colors">
                      Gallery
                    </span>
                    <ArrowDownRight className="w-4 h-4 text-[var(--primary)] transition-all" />
                  </Link>

                  {/* Resources */}
                  <Link
                    href="/resources"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-[var(--primary)]/10 border border-white/5 hover:border-[var(--primary)]/30 transition-all cursor-pointer group"
                  >
                    <span className="text-sm font-bold text-white group-hover:text-[var(--primary)] transition-colors">
                      Resources
                    </span>
                    <ArrowDownRight className="w-4 h-4 text-[var(--primary)] transition-all" />
                  </Link>

                  {/* Contact */}
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-[var(--primary)]/10 border border-white/5 hover:border-[var(--primary)]/30 transition-all cursor-pointer group"
                  >
                    <span className="text-sm font-bold text-white group-hover:text-[var(--primary)] transition-colors">
                      Contact
                    </span>
                    <ArrowDownRight className="w-4 h-4 text-[var(--primary)] transition-all" />
                  </Link>
                </nav>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
