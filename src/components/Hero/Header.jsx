"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight, ArrowRight, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import Button from '@/components/UI/Button';

export const Header = ({ onOpenTour, onOpenApply }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  // Exact Services requested
  const services = [
    { label: 'Construction', href: '/services/construction' },
    { label: 'Layout promoters', href: '/services/layout-promoters' },
    { label: 'Project management', href: '/services/project-management' },
    { label: 'Property developer', href: '/services/property-developer' },
    { label: 'Interior designing', href: '/services/interior-design' },
    { label: 'Real estate selling and buy', href: '/services/real-estate' },
  ];

  // Small close delay so the pointer can travel from the button into the mega menu
  const closeTimerRef = useRef(null);
  const openServices = () => {
    clearTimeout(closeTimerRef.current);
    setIsServicesOpen(true);
  };
  const closeServicesSoon = () => {
    clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setIsServicesOpen(false), 160);
  };
  useEffect(() => () => clearTimeout(closeTimerRef.current), []);
  useEffect(() => {
    if (!isServicesOpen) return;
    const onKey = (e) => e.key === 'Escape' && setIsServicesOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isServicesOpen]);

  // Lock body scrolling when mobile menu is open to prevent background scroll and rightside scrollbar line
  useEffect(() => {
    if (isMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isMenuOpen]);

  // Opens the site-wide free consultation popup (components/Home/ConsultationPopup)
  const openConsultation = () => {
    setIsMenuOpen(false);
    window.dispatchEvent(new Event('open-consultation'));
  };

  // Running top bar journey (Bhoomi Pooja to House Warming)
  const journeySteps = [
    'Bhoomi Pooja',
    'Approvals',
    'Foundation',
    'Structure',
    'Brickwork & Plastering',
    'Interiors & Finishing',
    'Griha Pravesam · House Warming',
  ];

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-40 py-0 transition-all duration-300">
        {/* Running top bar: Bhoomi Pooja to House Warming journey */}
        <div
          className="relative h-8 sm:h-9 overflow-hidden border-b"
          style={{ backgroundColor: 'var(--grey-deepest)', borderColor: 'color-mix(in srgb, var(--primary) 30%, transparent)' }}
          aria-label="From Bhoomi Pooja to House Warming"
        >
          <div className="topbar-marquee flex h-full w-max items-center">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
                {[0, 1].map((rep) => (
                  <div
                    key={rep}
                    className="flex shrink-0 items-center gap-4 sm:gap-5 pr-14 text-[11px] sm:text-xs 2xl:text-[13px] font-medium tracking-wide whitespace-nowrap antialiased"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    <span className="font-bold uppercase tracking-wider" style={{ color: 'var(--primary)' }}>
                      From Bhoomi Pooja to House Warming
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                    {journeySteps.map((step, i) => (
                      <span key={step} className="flex items-center gap-4 sm:gap-5">
                        <span
                          className={i === journeySteps.length - 1 ? 'font-bold' : ''}
                          style={{ color: i === journeySteps.length - 1 ? 'var(--primary)' : 'var(--text-primary)' }}
                        >
                          {step}
                        </span>
                        {i < journeySteps.length - 1 && (
                          <ChevronRight className="h-3.5 w-3.5" style={{ color: 'var(--text-muted)' }} />
                        )}
                      </span>
                    ))}
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                    <span className="font-bold" style={{ color: 'var(--text-primary)' }}>One team, one promise</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[1800px] mx-auto flex items-center justify-between gap-2 relative px-3 sm:px-12 mt-3 sm:mt-4">

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

            {/* 3. Services with Mega Menu */}
            <div
              onMouseEnter={openServices}
              onMouseLeave={closeServicesSoon}
            >
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                className={`relative px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold flex items-center gap-1 transition-all cursor-pointer ${
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
                {/* Pointer that joins the button to the panel's orange top bar */}
                {isServicesOpen && (
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+20px)] w-0 h-0 border-x-[6px] border-x-transparent border-b-[6px] z-[51]"
                    style={{ borderBottomColor: 'var(--primary)' }}
                  />
                )}
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-[20px] w-[min(520px,94vw)] z-50"
                  >
                    <div
                      className="overflow-hidden rounded-b-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7)] border-t-[3px]"
                      style={{ backgroundColor: 'var(--grey-deepest)', borderTopColor: 'var(--primary)' }}
                    >
                      <div className="grid grid-cols-2 gap-x-4 gap-y-3 px-5 py-4">
                        {services.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="group block pl-3 py-0.5 border-l transition-colors"
                            style={{ borderColor: 'color-mix(in srgb, var(--text-primary) 22%, transparent)' }}
                          >
                            <span className="flex items-center gap-1 text-[11.5px] font-bold uppercase tracking-wide text-[var(--text-primary)]/85 group-hover:text-[var(--primary)] transition-colors whitespace-nowrap">
                              {item.label}
                              <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                            </span>
                          </Link>
                        ))}
                      </div>

                      <Link
                        href="/#services"
                        onClick={() => setIsServicesOpen(false)}
                        className="block w-full py-2 text-center text-[10.5px] font-bold uppercase tracking-[0.25em] text-[var(--text-primary)] transition-colors hover:text-black hover:bg-[var(--primary)]"
                        style={{ backgroundColor: 'var(--grey-mid)' }}
                      >
                        Explore All Services
                      </Link>
                    </div>
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

          {/* Right Controls (Consultation CTA + Mobile Menu Toggle) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-1.5 sm:gap-3 shrink-0"
          >
            {/* Desktop & Tablet Free Consultation Buttons */}
            <span className="hidden md:block lg:hidden" title="Get Free Consultation">
              <Button onClick={openConsultation} variant="primary" size="sm" aria-label="Get Free Consultation" />
            </span>
            <span className="hidden lg:block xl:hidden">
              <Button onClick={openConsultation} variant="primary" size="sm">
                Free Consultation
              </Button>
            </span>
            <span className="hidden xl:block mr-4">
              <Button onClick={openConsultation} variant="primary" size="md">
                Get Free Consultation
              </Button>
            </span>

            {/* Mobile Menu Button */}
            <button
              type="button"
              suppressHydrationWarning
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
              className="fixed top-0 left-0 right-0 z-50 max-h-[88vh] overflow-y-auto overscroll-contain border-b border-[var(--primary)]/30 text-white shadow-2xl rounded-b-2xl p-3.5 sm:p-5 pt-3.5 sm:pt-4 bg-[#1a1c22] scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{ willChange: 'transform' }}
            >
              <div className="max-w-md mx-auto w-full space-y-2">

                {/* Close button row inside menu */}
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className="shrink-0">
                    <img
                      src="/images/logo/logo-ajay-homes.png"
                      alt="Ajay Builders & Property Developers"
                      className="h-7 w-auto object-contain"
                    />
                  </Link>
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--primary)]" />
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex flex-col gap-1 pt-0.5">
                  {/* Home */}
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2 sm:py-2.5 rounded-lg bg-white/5 hover:bg-[var(--primary)]/10 border border-white/5 hover:border-[var(--primary)]/30 transition-all cursor-pointer group"
                  >
                    <span className="text-[13px] sm:text-sm font-semibold text-white group-hover:text-[var(--primary)] transition-colors">
                      Home
                    </span>
                    <ArrowDownRight className="w-3.5 h-3.5 text-[var(--primary)] transition-all" />
                  </Link>

                  {/* About */}
                  <Link
                    href="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2 sm:py-2.5 rounded-lg bg-white/5 hover:bg-[var(--primary)]/10 border border-white/5 hover:border-[var(--primary)]/30 transition-all cursor-pointer group"
                  >
                    <span className="text-[13px] sm:text-sm font-semibold text-white group-hover:text-[var(--primary)] transition-colors">
                      About
                    </span>
                    <ArrowDownRight className="w-3.5 h-3.5 text-[var(--primary)] transition-all" />
                  </Link>

                  {/* Services Accordion in Mobile Drawer */}
                  <div
                    className={`rounded-lg bg-white/5 border overflow-hidden transition-colors ${
                      isMobileServicesOpen ? 'border-[var(--primary)]/40' : 'border-white/5'
                    }`}
                  >
                    <button
                      type="button"
                      suppressHydrationWarning
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      aria-expanded={isMobileServicesOpen}
                      className={`w-full flex items-center justify-between px-3.5 py-2 sm:py-2.5 text-[13px] sm:text-sm font-semibold hover:bg-[var(--primary)]/10 transition-colors cursor-pointer text-left ${
                        isMobileServicesOpen ? 'text-[var(--primary)]' : 'text-white hover:text-[var(--primary)]'
                      }`}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-[var(--primary)] transition-transform duration-200 ${
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
                          className="overflow-hidden border-t border-white/5 bg-black/25"
                        >
                          {/* Compact 2-Column Grid for Services on Mobile */}
                          <div className="grid grid-cols-2 gap-1.5 p-2">
                            {services.map((item) => {
                              const isCurrent = pathname === item.href;
                              return (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  aria-current={isCurrent ? 'page' : undefined}
                                  className={`group flex items-center justify-between gap-1.5 rounded-md border px-2.5 py-1.5 transition-colors ${
                                    isCurrent
                                      ? 'border-[var(--primary)] bg-[var(--primary)]/15 text-[var(--primary)]'
                                      : 'border-white/10 bg-white/5 text-white/90 hover:border-[var(--primary)]/40 hover:text-white'
                                  }`}
                                >
                                  <span className="truncate text-xs font-medium capitalize">
                                    {item.label}
                                  </span>
                                  <ChevronRight className="h-3 w-3 shrink-0 text-[var(--primary)]" />
                                </Link>
                              );
                            })}
                          </div>
                          <Link
                            href="/#services"
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center justify-center gap-1 border-t border-white/10 py-1.5 text-[11px] font-semibold text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-colors"
                          >
                            <span>Explore all services</span>
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Gallery */}
                  <Link
                    href="/gallery"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2 sm:py-2.5 rounded-lg bg-white/5 hover:bg-[var(--primary)]/10 border border-white/5 hover:border-[var(--primary)]/30 transition-all cursor-pointer group"
                  >
                    <span className="text-[13px] sm:text-sm font-semibold text-white group-hover:text-[var(--primary)] transition-colors">
                      Gallery
                    </span>
                    <ArrowDownRight className="w-3.5 h-3.5 text-[var(--primary)] transition-all" />
                  </Link>

                  {/* Resources */}
                  <Link
                    href="/resources"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2 sm:py-2.5 rounded-lg bg-white/5 hover:bg-[var(--primary)]/10 border border-white/5 hover:border-[var(--primary)]/30 transition-all cursor-pointer group"
                  >
                    <span className="text-[13px] sm:text-sm font-semibold text-white group-hover:text-[var(--primary)] transition-colors">
                      Resources
                    </span>
                    <ArrowDownRight className="w-3.5 h-3.5 text-[var(--primary)] transition-all" />
                  </Link>

                  {/* Contact */}
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2 sm:py-2.5 rounded-lg bg-white/5 hover:bg-[var(--primary)]/10 border border-white/5 hover:border-[var(--primary)]/30 transition-all cursor-pointer group"
                  >
                    <span className="text-[13px] sm:text-sm font-semibold text-white group-hover:text-[var(--primary)] transition-colors">
                      Contact
                    </span>
                    <ArrowDownRight className="w-3.5 h-3.5 text-[var(--primary)] transition-all" />
                  </Link>
                </nav>

                {/* Free Consultation Action Button inside Mobile Menu */}
                <div className="pt-2 border-t border-white/10">
                  <Button
                    onClick={() => {
                      setIsMenuOpen(false);
                      openConsultation();
                    }}
                    variant="primary"
                    size="sm"
                    className="w-full justify-center shadow-md shadow-[var(--primary)]/20 py-2 text-xs"
                  >
                    Free Consultation
                  </Button>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
