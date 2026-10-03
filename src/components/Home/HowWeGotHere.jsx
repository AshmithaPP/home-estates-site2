"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function HowWeGotHere() {
  const [activeYear, setActiveYear] = useState("2026");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Five-year milestone breakdown (newest first)
  const timelineData = [
    {
      year: "2026",
      title: "Leading Chennai's Premium Residential Landscape.",
      subtitle: "500+ projects and 60+ years of trusted construction, development and real estate expertise.",
      image: "/assets/img/besantnagar-residence-view/img19.jpg",
    },
    {
      year: "2021",
      title: "₹1 Cr+ Premium Residences Become Our Signature.",
      subtitle: "High-value custom villas delivered with detailed planning and site supervision.",
      image: "/assets/img/besantnagar-residence-view/img103.jpg",
    },
    {
      year: "2016",
      title: "Expanded into Interiors & End-to-End Delivery.",
      subtitle: "One team now managing architecture, construction and bespoke interiors.",
      image: "/assets/img/besantnagar-residence-view/img110.jpg",
    },
    {
      year: "2011",
      title: "Growth Across Anna Nagar, Besant Nagar & ECR.",
      subtitle: "Building landmark homes in Chennai's most sought-after neighbourhoods.",
      image: "/assets/img/besantnagar-residence-view/img117.jpg",
    },
    {
      year: "2006",
      title: "Layout Promotion & Property Development.",
      subtitle: "Turning land parcels into structured, market-ready developments.",
      image: "/assets/img/besantnagar-residence-view/img181.jpg",
    },
    {
      year: "2001",
      title: "Entered the Real Estate Selling & Buying Space.",
      subtitle: "Connecting families and investors with prime Chennai properties.",
      image: "/assets/img/besantnagar-residence-view/img195.jpg",
    },
    {
      year: "1996",
      title: "Commercial Construction Portfolio Established.",
      subtitle: "Offices and commercial spaces built for functionality and durability.",
      image: "/assets/img/besantnagar-residence-view/img202.jpg",
    },
    {
      year: "1991",
      title: "Modern Engineering & Quality Standards Adopted.",
      subtitle: "Stronger structures through updated methods and material testing.",
      image: "/assets/img/besantnagar-residence-view/img216.jpg",
    },
    {
      year: "1986",
      title: "Crossed 100 Completed Homes.",
      subtitle: "A growing record of on-time handovers built on referrals and trust.",
      image: "/assets/img/besantnagar-residence-view/img223.jpg",
    },
    {
      year: "1981",
      title: "Our First Multi-Unit Residential Projects.",
      subtitle: "Moving from individual homes to small residential communities.",
      image: "/assets/img/besantnagar-residence-view/img75.jpg",
    },
    {
      year: "1976",
      title: "Building a Reputation for Honest Construction.",
      subtitle: "Transparent pricing and workmanship that families recommended.",
      image: "/assets/img/besantnagar-residence-view/img82.jpg",
    },
    {
      year: "1971",
      title: "Our First Independent Homes Delivered.",
      subtitle: "Early projects that set the standard for quality and care.",
      image: "/assets/img/besantnagar-residence-view/img96.jpg",
    },
    {
      year: "1966",
      title: "Ajay Homes is Founded.",
      subtitle: "A family construction business begins with a promise of quality and trust.",
      image: "/assets/img/besantnagar-residence-view/img19.jpg",
    },
  ];

  const activeIndex = timelineData.findIndex((item) => item.year === activeYear);
  const activeItem = activeIndex !== -1 ? timelineData[activeIndex] : timelineData[0];

  return (
    <section
      ref={sectionRef}
      id="legacy"
      className={`relative w-full bg-white pt-6 pb-12 sm:pt-14 sm:pb-18 lg:py-20 2xl:py-24 overflow-hidden transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto w-[calc(100%-1.25rem)] sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)] max-w-[1640px]">
        {/* Section Heading: "How we got here?" matching reference pixel-precisely */}
        <div className="mb-4 sm:mb-6 pl-1 sm:pl-2 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold text-slate-900 tracking-tight font-sans">
            How we got <span className="text-[var(--primary)]">here?</span>
          </h2>
          <Link
            href="/about-us"
            className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1 group pr-2"
          >
            <span>Our Full Story</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Main Full-Viewport Showcase Card with Small Left/Right Margin */}
        <div className="relative w-full h-[clamp(440px,68vh,540px)] sm:h-[clamp(460px,62vh,600px)] lg:h-[clamp(440px,64vh,660px)] rounded-2xl sm:rounded-3xl bg-slate-950 overflow-hidden shadow-2xl border border-white/10">
          
          {/* Architectural Background Images with Smooth Crossfade (Crisp, Bright, High-End) */}
          <div className="absolute inset-0 z-0">
            {timelineData.map((item) => {
              const isSelected = item.year === activeYear;
              return (
                <div
                  key={item.year}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isSelected ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="100vw"
                    priority={item.year === "2023" || item.year === "2022"}
                    className="object-cover object-center filter brightness-100 contrast-[1.03]"
                  />
                </div>
              );
            })}

            {/* Targeted Vignette Overlays: Keeps the home luminous while ensuring crisp text readability */}
            {/* Bottom-left gradient for the milestone title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-15 pointer-events-none" />
            
            {/* Right dark gradient strip behind the years column matching reference screenshot */}
            <div className="absolute inset-y-0 right-0 w-36 sm:w-56 md:w-64 bg-gradient-to-l from-black/75 via-black/35 to-transparent z-15 pointer-events-none" />
          </div>

          {/* Top Pill / Badge inside the card */}
          <div className="absolute top-5 left-5 sm:top-7 sm:left-8 md:left-10 lg:left-12 z-20 max-w-[calc(100%-6rem)] sm:max-w-[calc(100%-10rem)]">
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md px-3.5 py-1 text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-white/85 hover:text-white font-semibold font-sans border border-white/10 hover:border-white/25 shadow-sm transition-all cursor-pointer"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
              Ajay Homes &amp; Estates • Architectural Journey
            </Link>
          </div>

          {/* Bottom-Left Milestone Content matching reference */}
          <div className="absolute bottom-6 left-5 sm:bottom-8 sm:left-8 md:left-10 lg:bottom-10 lg:left-12 z-20 max-w-[calc(100%-100px)] sm:max-w-[calc(100%-160px)] md:max-w-2xl lg:max-w-3xl text-left pr-4">
            <div className="overflow-hidden">
              <h3
                key={`title-${activeItem.year}`}
                className="text-xl sm:text-[26px] md:text-[30px] lg:text-[34px] 2xl:text-[40px] font-extrabold text-white tracking-tight leading-snug sm:leading-tight font-sans transition-all duration-500 animate-fadeIn drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
              >
                {activeItem.title}
              </h3>
            </div>
            <p
              key={`sub-${activeItem.year}`}
              className="mt-2 sm:mt-3 text-xs sm:text-sm lg:text-base text-white/85 font-medium leading-relaxed font-sans max-w-xl transition-all duration-500 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]"
            >
              {activeItem.subtitle}
            </p>
          </div>

          {/* Right-Side Vertical Year Timeline matching reference image EXACTLY */}
          <div className="absolute right-3 sm:right-6 md:right-10 lg:right-12 top-5 bottom-5 sm:top-7 sm:bottom-7 z-30 flex flex-col justify-between items-end select-none">
            {timelineData.map((item) => {
              const isActive = item.year === activeYear;
              return (
                <button
                  key={item.year}
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setActiveYear(item.year)}
                  onMouseEnter={() => setActiveYear(item.year)}
                  className={`relative text-right transition-all font-sans cursor-pointer group py-0.5 px-2 flex items-center justify-end ${
                    isActive
                      ? "text-white font-black text-base sm:text-lg lg:text-[clamp(18px,2.4vh,26px)] tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
                      : "text-white/40 hover:text-white/85 font-extrabold text-xs sm:text-sm lg:text-[clamp(13px,1.8vh,20px)] leading-tight tracking-tight drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
                  }`}
                  aria-label={`Select year ${item.year}`}
                >
                  {/* Vertical Accent Indicator Line to the left of the active year matching reference screenshot */}
                  {isActive && (
                    <span className="absolute -left-3.5 sm:-left-5 top-1/2 -translate-y-1/2 w-[2.5px] h-6 sm:h-7 lg:h-8 bg-[var(--primary)] rounded-none shadow-[0_0_12px_rgba(255,140,0,0.95)] transition-all duration-300" />
                  )}
                  <span>{item.year}</span>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
