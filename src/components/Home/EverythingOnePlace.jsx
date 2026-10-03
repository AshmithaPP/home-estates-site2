"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Core services — ids match the anchors used by the navbar Services dropdown
const services = [
  {
    id: "services-construction",
    title: "Construction",
    image: "/assets/img/img-011.jpeg",
    desc: "Residential & commercial structural engineering",
    href: "/services/construction",
  },
  {
    id: "services-layout",
    title: "Layout Promoters",
    image: "/images/layout-plots-ground.jpg",
    desc: "Multi-acre plots & township development",
    href: "/services/layout-promoters",
  },
  {
    id: "services-pm",
    title: "Project Management",
    image: "/assets/img/img-047.jpeg",
    desc: "End-to-end site oversight & quality audit",
    href: "/services/project-management",
  },
  {
    id: "services-developer",
    title: "Property Developer",
    image: "/assets/img/img-002.jpeg",
    desc: "Turnkey luxury residential developments",
    href: "/services/property-developer",
  },
  {
    id: "services-interior",
    title: "Interior Designing",
    image: "/assets/img/besantnagar-residence-view/img82.jpg",
    desc: "Custom architectural interior aesthetics",
    href: "/services/interior-design",
  },
  {
    id: "services-realestate",
    title: "Real Estate Selling & Buying",
    image: "/assets/img/img-014.jpeg",
    desc: "Prime land & property trading solutions",
    href: "/services/real-estate",
  },
];

export default function EverythingOnePlace() {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Trigger jump animation when section scrolls into viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full section-grey py-16 sm:py-20 2xl:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1440px]">
        {/* Main Section Header */}
        <h2 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold text-white tracking-tight mb-6 sm:mb-8 font-sans">
          Everything you Need at One Place
        </h2>

        {/* Outer Tab & Card Box Wrapper */}
        <div className="w-full">
          {/* Single active tab sitting flush on the content box border */}
          <div className="flex items-end relative z-10 px-2 sm:px-4">
            <span className="whitespace-nowrap bg-[var(--primary)] text-black text-xs sm:text-sm 2xl:text-base font-bold px-5 sm:px-7 py-3 sm:py-3.5 rounded-t-xl border-t border-x border-[var(--primary)] -mb-[1px] shadow-sm select-none">
              Our Services
            </span>
          </div>

          {/* Content Box with 6 Services and Thin Line Dividers */}
          <div className="rounded-2xl border border-white bg-white px-3 py-5 sm:px-5 sm:py-6 xl:py-8 2xl:py-9 shadow-2xl relative z-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 md:gap-y-8 xl:flex xl:justify-between xl:gap-y-0 xl:divide-x divide-slate-200">
              {services.map((item, index) => (
                <Link
                  key={item.id}
                  id={item.id}
                  href={item.href}
                  className="group flex flex-col items-center text-center scroll-mt-40 xl:flex-auto px-2 sm:px-3 2xl:px-5 py-2 transition-all rounded-xl cursor-pointer hover:bg-slate-50/80"
                >
                  {/* Project Image Tile with Staggered Viewport Jump Animation */}
                  <div
                    className={`relative w-20 h-20 sm:w-24 sm:h-24 2xl:w-28 2xl:h-28 rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100 transition-shadow group-hover:shadow-md group-hover:border-[var(--primary)]/50 ${
                      isAnimated ? "animate-jump" : ""
                    }`}
                    style={{
                      animationDelay: isAnimated ? `${index * 80}ms` : "0ms",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 80px, 112px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Title & short description */}
                  <h3 className="mt-4 text-[13px] sm:text-sm 2xl:text-base font-semibold text-slate-900 group-hover:text-[var(--primary-dark)] transition-colors leading-snug font-sans lg:whitespace-nowrap">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[11px] sm:text-xs 2xl:text-[13px] text-slate-500 leading-relaxed font-sans max-w-[190px]">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
