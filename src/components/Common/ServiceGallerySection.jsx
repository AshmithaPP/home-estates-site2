"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SERVICE_PROJECTS = {
  construction: [
    {
      id: 'const-01',
      title: 'The Linear Luxury Villa',
      category: 'Luxury Villa Development',
      image: '/images/residence-images/ankan-resideance-view/img26.jpg',
    },
    {
      id: 'const-02',
      title: 'Besant Nagar Signature Enclave',
      category: 'Residential Architecture',
      image: '/images/residence-images/besantnagar-residence-view/img19.jpg',
    },
    {
      id: 'const-03',
      title: 'Aura Horizon Contemporary Villa',
      category: 'Modernist Coastal Villa',
      image: '/images/residence-images/ankan-resideance-view/img29.jpg',
    },
    {
      id: 'const-04',
      title: 'Natraj Residence Modern Architecture',
      category: 'Gated Villa Residence',
      image: '/images/residence-images/natraj-residence/img67.jpg',
    },
    {
      id: 'const-05',
      title: 'Raman Contemporary Residence',
      category: 'Turnkey Luxury Build',
      image: '/images/residence-images/raman-residence/img167.jpg',
    },
    {
      id: 'const-06',
      title: 'Suresh Architectural Duplex',
      category: 'Custom Residence Construction',
      image: '/images/residence-images/suresh-residence-view/img17.jpg',
    },
  ],
  'interior-design': [
    {
      id: 'int-01',
      title: 'Contemporary Master Bedroom Suite',
      category: 'Master Bedroom',
      image: '/images/residence-images/raman-residence/img43.jpg',
    },
    {
      id: 'int-02',
      title: 'Italian Marble Luxury Living Room',
      category: 'Living & Dining Lounge',
      image: '/images/residence-images/besantnagar-residence-view/img103.jpg',
    },
    {
      id: 'int-03',
      title: 'Designer Island Kitchen & Living',
      category: 'Modular Island Kitchen',
      image: '/images/residence-images/natraj-residence/img81.jpg',
    },
    {
      id: 'int-04',
      title: 'Warm Minimalist Suite & Lounge',
      category: 'Bespoke Interior Joinery',
      image: '/images/residence-images/suresh-residence-view/img27.jpg',
    },
    {
      id: 'int-05',
      title: 'Artisan Woodcraft Foyer & Dining',
      category: 'Signature Living Architecture',
      image: '/images/residence-images/raman-residence/img106.jpg',
    },
    {
      id: 'int-06',
      title: 'Panoramic Penthouse Living',
      category: 'Turnkey Luxury Interior',
      image: '/images/residence-images/besantnagar-residence-view/img181.jpg',
    },
  ],
  'layout-promoters': [
    {
      id: 'layout-01',
      title: 'Ankan Plotted Enclave Development',
      category: 'CMDA Planned Layout',
      image: '/images/residence-images/ankan-resideance-view/img29.jpg',
    },
    {
      id: 'layout-02',
      title: 'Raman Gated Infrastructure Enclave',
      category: 'Integrated Roads & Drainage',
      image: '/assets/img/raman-residence-view/img39.jpg',
    },
    {
      id: 'layout-03',
      title: 'Besant Nagar Residential Land Development',
      category: 'Prime Land Parcel Promotion',
      image: '/images/residence-images/besantnagar-residence-view/img19.jpg',
    },
    {
      id: 'layout-04',
      title: 'Shastri Nagar Development Parcel',
      category: 'Market-Ready Plotted Community',
      image: '/assets/img/shasthri-nagar-adyar/img64.jpg',
    },
    {
      id: 'layout-05',
      title: 'Suresh Integrated Masterplan Layout',
      category: 'Gated Residential Plots',
      image: '/images/residence-images/suresh-residence-view/img20.jpg',
    },
    {
      id: 'layout-06',
      title: 'Natraj Prime Plotted Enclave',
      category: 'Approved Community Infrastructure',
      image: '/images/residence-images/natraj-residence/img102.jpg',
    },
  ],
  'property-developer': [
    {
      id: 'prop-01',
      title: 'Raman High-Value Development',
      category: 'Turnkey Property Development',
      image: '/images/residence-images/raman-residence/img167.jpg',
    },
    {
      id: 'prop-02',
      title: 'Besant Nagar Flagship Residence',
      category: 'Joint Venture Luxury Residence',
      image: '/images/residence-images/besantnagar-residence-view/img26.jpg',
    },
    {
      id: 'prop-03',
      title: 'Natraj Urban Development Asset',
      category: 'Premium Multi-Unit Property',
      image: '/images/residence-images/natraj-residence/img102.jpg',
    },
    {
      id: 'prop-04',
      title: 'The Ankan High-End Residences',
      category: 'Boutique Residential Development',
      image: '/images/residence-images/ankan-resideance-view/img26.jpg',
    },
    {
      id: 'prop-05',
      title: 'Shastri Nagar Coastal Enclave',
      category: 'High-Value Turnkey Property',
      image: '/assets/img/shasthri-nagar-adyar/img64.jpg',
    },
    {
      id: 'prop-06',
      title: 'Suresh Landmark Property',
      category: 'Custom Developer Project',
      image: '/images/residence-images/suresh-residence-view/img17.jpg',
    },
  ],
  'project-management': [
    {
      id: 'pm-01',
      title: 'Besant Nagar Luxury Villa Execution',
      category: 'End-to-End PM & Governance',
      image: '/images/residence-images/besantnagar-residence-view/img181.jpg',
    },
    {
      id: 'pm-02',
      title: 'Natraj Multi-Stage Villa Build',
      category: 'Schedule & Contractor Oversight',
      image: '/images/residence-images/natraj-residence/img67.jpg',
    },
    {
      id: 'pm-03',
      title: 'Suresh Turnkey Execution',
      category: 'Quality Audits & Compliance',
      image: '/images/residence-images/suresh-residence-view/img17.jpg',
    },
    {
      id: 'pm-04',
      title: 'Raman Full-Scale Villa Coordination',
      category: 'Architect & Site Management',
      image: '/images/residence-images/raman-residence/img106.jpg',
    },
    {
      id: 'pm-05',
      title: 'Aura Coastline Villa Governance',
      category: 'Milestone & Cost Control',
      image: '/images/residence-images/ankan-resideance-view/img26.jpg',
    },
    {
      id: 'pm-06',
      title: 'Besant Nagar Turnkey Supervision',
      category: 'Bhoomi Pooja to Handover',
      image: '/images/residence-images/besantnagar-residence-view/img26.jpg',
    },
  ],
  'real-estate': [
    {
      id: 're-01',
      title: 'Luxury Seafront Coastal Residence',
      category: 'Premium Residential Asset',
      image: '/images/residence-images/besantnagar-residence-view/img110.jpg',
    },
    {
      id: 're-02',
      title: 'Prime Coastal Villa & Land Asset',
      category: 'Prime Residential Asset',
      image: '/assets/img/shasthri-nagar-adyar/img64.jpg',
    },
    {
      id: 're-03',
      title: 'Contemporary Luxury 3BHK Residence',
      category: 'Exclusive Luxury Apartment',
      image: '/images/residence-images/raman-residence/img43.jpg',
    },
    {
      id: 're-04',
      title: 'Architectural Investment Property',
      category: 'High ROI Investment Property',
      image: '/images/residence-images/natraj-residence/img67.jpg',
    },
    {
      id: 're-05',
      title: 'Prime Coastal Land & Villa Asset',
      category: 'Direct Developer Listing',
      image: '/images/residence-images/ankan-resideance-view/img29.jpg',
    },
    {
      id: 're-06',
      title: 'Designer Urban Luxury Residence',
      category: 'Turnkey Residential Handover',
      image: '/images/residence-images/suresh-residence-view/img27.jpg',
    },
  ],
};

export const ServiceGallerySection = ({
  id = 'service-gallery',
  serviceKey = 'construction',
  badge = 'THE AJAY MARQUEE',
  title = 'Landmark Developments',
  subtitle,
  projects,
  className = '',
}) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const displayProjects = projects || SERVICE_PROJECTS[serviceKey] || SERVICE_PROJECTS.construction;

  // Format badge if not provided with "THE ... MARQUEE" pattern
  const displayBadge = badge || 'THE AJAY MARQUEE';
  const displayTitle = title || 'Landmark Developments';

  const checkScrollState = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollState, { passive: true });
      checkScrollState();
      window.addEventListener('resize', checkScrollState);
      return () => {
        container.removeEventListener('scroll', checkScrollState);
        window.removeEventListener('resize', checkScrollState);
      };
    }
  }, [displayProjects]);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Scroll by approximately one card width + gap
      const card = container.querySelector('.gallery-card-item');
      const scrollStep = card ? card.offsetWidth + 24 : 360;
      container.scrollBy({
        left: direction === 'left' ? -scrollStep : scrollStep,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id={id}
      className={`relative w-full py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 bg-white text-neutral-900 border-t border-b border-neutral-200/50 overflow-hidden ${className}`}
      style={{
        backgroundColor: '#ffffff',
        fontFamily: 'var(--font-family-base, "Montserrat", sans-serif)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* ── Top Header matching attached reference exactly ── */}
        <div className="flex items-end justify-between gap-4 pb-6 sm:pb-8">
          <div className="text-left space-y-1">
            {/* Eyebrow: THE PRESTIGE MARQUEE style */}
            <p
              className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: '#a06f25' }}
            >
              {displayBadge}
            </p>

            {/* Main Headline: Landmark Developments */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-medium tracking-tight text-neutral-900 leading-tight">
              {displayTitle}
            </h2>

            {subtitle && (
              <p className="text-xs sm:text-sm text-neutral-500 font-light pt-0.5 max-w-xl">
                {subtitle}
              </p>
            )}
          </div>

          {/* Right Navigation Arrows: Circular Outline Buttons (< and >) */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button suppressHydrationWarning
              type="button"
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous developments"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
                canScrollLeft
                  ? 'border-[var(--primary)] text-[var(--primary)] bg-white hover:bg-[var(--primary)] hover:text-black shadow-xs cursor-pointer'
                  : 'border-[var(--primary)]/30 text-[var(--primary)]/40 cursor-not-allowed bg-transparent'
              }`}
            >
              <ArrowLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5" strokeWidth={2} />
            </button>

            <button suppressHydrationWarning
              type="button"
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Next developments"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
                canScrollRight
                  ? 'border-[var(--primary)] text-[var(--primary)] bg-white hover:bg-[var(--primary)] hover:text-black shadow-xs cursor-pointer'
                  : 'border-[var(--primary)]/30 text-[var(--primary)]/40 cursor-not-allowed bg-transparent'
              }`}
            >
              <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* ── Cards Carousel (Short Height, 3 Visible on Desktop, Exact Frame Styling) ── */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory pt-1 pb-3 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {displayProjects.map((item) => (
            <div
              key={item.id}
              className="gallery-card-item snap-start shrink-0 w-[84vw] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] max-w-[420px]"
            >
              <Link
                href="/gallery"
                className="group block h-full bg-white border border-[#e6e6df] p-3 sm:p-3.5 transition-all duration-300 hover:border-neutral-400 hover:shadow-md cursor-pointer"
                aria-label={`View ${item.title} in gallery`}
              >
                {/* Image Container: Short Height with White Border Framing */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Card Meta below Image */}
                <div className="pt-3 pb-1 text-left">
                  {/* Title: Warm Gold/Bronze like screenshot */}
                  <h3
                    className="text-[15px] sm:text-base font-normal tracking-normal transition-colors duration-200 line-clamp-1"
                    style={{ color: '#9e712a' }}
                  >
                    {item.title}
                  </h3>

                  {/* Subtitle / Category: Muted grey text */}
                  <p className="text-xs text-neutral-500 font-light mt-1 truncate">
                    {item.category}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceGallerySection;
