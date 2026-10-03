"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Thumbnails are real Ajay project photos from /public
const services = [
  { image: "/assets/img/img-003.jpeg", label: "Architects" },
  { image: "/construction-frames/build_frame_05.jpg", label: "Engineers" },
  { image: "/assets/img/img-046.jpeg", label: "Project Managers" },
  { image: "/assets/img/img-010.jpeg", label: "Site Experts" },
];

// Opens the site-wide free consultation popup (ConsultationPopup listens for this event)
const openConsultation = () => window.dispatchEvent(new Event("open-consultation"));

// Last section before the footer: "Our Team" banner
export default function ReferralRewardBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Smooth scroll-driven entrance transition for this section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full bg-white pt-16 sm:pt-20 2xl:pt-24 pb-16 sm:pb-20 2xl:pb-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden transition-all duration-700 ease-out select-text ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Container width matches the other content sections */}
      <div className="w-full max-w-7xl 2xl:max-w-[1440px] mx-auto">
        <div className="relative w-full bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-slate-300 overflow-hidden flex flex-col lg:flex-row items-center justify-between p-4 sm:p-5 lg:px-8 lg:py-6 gap-5 lg:gap-8 transition-all duration-300">
          {/* Top-left badge using brand grey and orange from globals.css */}
          <div className="absolute top-0 left-0 z-20">
            <div
              className="bg-[var(--grey-base)] text-white text-[11px] sm:text-xs font-bold tracking-wide px-4 py-2 rounded-br-2xl shadow-xs flex items-center gap-1.5 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
              <span>Our Team</span>
            </div>
          </div>

          {/* Left column: engineers reviewing plans on site */}
          <div className="w-full lg:w-[32%] xl:w-[30%] flex items-center justify-center pt-8 sm:pt-6 lg:pt-4 shrink-0">
            <Link href="/gallery" className="relative aspect-[1560/1008] w-full max-w-[320px] sm:max-w-[360px] lg:max-w-none block group">
              <Image
                src="/assets/testimonials/last-section.png"
                unoptimized
                alt="The Ajay Homes team of architects, engineers and site experts"
                fill
                sizes="(max-width: 1024px) 360px, 400px"
                className="object-contain select-none pointer-events-none transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Right column: content */}
          <div className="w-full flex-1 min-w-0 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold leading-tight tracking-tight text-slate-900">
              The People Behind
              <span className="block text-[var(--primary)]">Your Dream Home</span>
            </h2>
            <p className="mt-3 max-w-2xl mx-auto lg:mx-0 text-sm 2xl:text-base leading-relaxed text-slate-600">
              A dedicated team of architects, engineers, project managers, and site experts working together to turn
              your vision into a well-built home.
            </p>

            {/* Team roles strip: continuous running ticker (pauses on hover) */}
            <div className="refer-marquee-mask mt-5 w-full min-w-0 overflow-hidden py-1">
              <div className="refer-marquee flex w-max items-center">
                {/* Two identical halves so the -50% loop is seamless; each half repeats the list to fill wide screens */}
                {[0, 1].map((copy) => (
                  <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
                    {[...services, ...services].map(({ image, label }, i) => (
                      <div key={`${label}-${i}`} className="flex shrink-0 items-center">
                        <div
                          className="flex items-center gap-2.5 text-left group/item"
                        >
                          <span className="relative h-9 w-9 2xl:h-10 2xl:w-10 shrink-0 overflow-hidden rounded-lg bg-slate-100 shadow-2xs">
                            <Image src={image} alt={label} fill sizes="40px" className="object-cover" />
                          </span>
                          <span className="whitespace-nowrap text-xs 2xl:text-[13px] font-semibold leading-snug text-slate-800">
                            {label}
                          </span>
                        </div>
                        <span className="mx-4 sm:mx-5 h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0 rounded-full bg-[var(--primary)]" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-5 text-sm 2xl:text-base font-semibold text-slate-800">
              One team. One responsibility. From planning to handover.
            </p>

            {/* Actions */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6">
              <Link
                href="/about-us#team"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-7 py-3 text-sm font-bold text-white shadow-md shadow-[var(--primary)]/30 transition-all hover:bg-[var(--primary-dark)] hover:shadow-[var(--primary)]/50"
              >
                Meet Our Team
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
