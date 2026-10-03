"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import Link from "next/link";
import Button from "@/components/UI/Button";

const TOTAL_FRAMES = 31;
// Construction animation completes at 65% of the scroll runway.
// The remaining 35% (over 110vh of scroll) showcases the finished luxury landmark
// so the user can comfortably view and admire the completed home before moving to the next section.
const BUILD_COMPLETION = 0.75;

// Ajay Homes & Estates highlights shown beside the build animation
const PROJECT_SPECS = [
  { label: "Experience", value: "60+ years of trusted construction" },
  { label: "Projects", value: "500+ projects across Chennai" },
  { label: "Approvals", value: "Clear titles & CMDA approved" },
  { label: "Handover", value: "On time, as promised" },
];

const openConsultation = () => window.dispatchEvent(new Event("open-consultation"));

// 31 Progressive 3D architectural construction frames for Shastri Nagar, Adyar (img79.jpg)
// Builds from ground excavation -> RCC frame floor-by-floor -> facade louvers & glass -> glowing landmark
const DESKTOP_FRAMES = Array.from(
  { length: TOTAL_FRAMES },
  (_, i) => `/construction-frames/frame_${String(i).padStart(2, "0")}.jpg?v=3d_5`
);

// Dedicated 9:16 vertical frames for mobile so the 5-story building is tall, centered, and never cropped
const MOBILE_FRAMES = Array.from(
  { length: TOTAL_FRAMES },
  (_, i) => `/construction-frames/mobile_frame_${String(i).padStart(2, "0")}.jpg?v=3d_5`
);

/**
 * Scroll-driven construction animation (ported from ajay-homes-estates HeroScrollConstruction).
 * Same frames, canvas renderer and scroll timing; placed below the home hero with site colours.
 */
export default function ConstructionScrollSection() {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const textContentRef = useRef(null);
  const gradientOverlayRef = useRef(null);
  const scrollPromptRef = useRef(null);
  const completeBadgeRef = useRef(null);

  const imagesRef = useRef([]);
  const isMobileRef = useRef(false);
  const isRafLocked = useRef(false);
  const currentProgressRef = useRef(0);
  const lastRenderedIdxRef = useRef(-1);
  const [isCompleted, setIsCompleted] = useState(false);

  // Render the active frame onto the canvas with crisp full-bleed scaling and roof clearance
  const renderFrame = useCallback((frameIdx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const images = imagesRef.current;
    if (!images || images.length === 0) return;

    // Find requested frame, or closest loaded frame before it
    let img = images[frameIdx];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let i = frameIdx - 1; i >= 0; i--) {
        if (images[i] && images[i].complete && images[i].naturalWidth > 0) {
          img = images[i];
          break;
        }
      }
    }
    if (!img || !img.complete || img.naturalWidth === 0) {
      img = images[0];
    }
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const W = canvas.width;
    const H = canvas.height;
    if (W === 0 || H === 0) return;

    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;

    // Full-bleed cover tailored to device aspect ratio
    const scale = Math.max(W / imgW, H / imgH);
    const dw = imgW * scale;
    const dh = imgH * scale;
    const ox = (W - dw) / 2.0;

    // Positioning vertically:
    // Ensure the top rooftop and pergola have ample starry night sky space below the top navbar (approx 80px)
    let oy;
    if (W / H >= 1.0) {
      // On desktop, anchor so that top sky is visible (never pushed offscreen)
      oy = Math.max((H - dh) * 0.35, 10);
    } else {
      // On mobile portrait, keep sky natural and top-aligned so roof sits comfortably below navbar
      oy = Math.max(H - dh, Math.min(0, (H - dh) * 0.15));
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Draw solid photorealistic frame (zero ghosting, zero graphic artifacts)
    ctx.drawImage(img, ox, oy, dw, dh);
    lastRenderedIdxRef.current = frameIdx;
  }, []);

  // Preload frames based on screen aspect ratio
  useEffect(() => {
    let isCancelled = false;

    const loadFrames = () => {
      const isMobile = window.innerWidth < 768 || window.innerHeight > window.innerWidth;
      isMobileRef.current = isMobile;
      const sources = isMobile ? MOBILE_FRAMES : DESKTOP_FRAMES;

      const loadedImages = sources.map((src, idx) => {
        const img = new Image();
        img.onload = () => {
          if (!isCancelled) {
            // Render initial frame as soon as frame 0 is ready
            if (idx === 0 && lastRenderedIdxRef.current === -1) {
              renderFrame(0);
            } else {
              const buildProgress = Math.min(1, currentProgressRef.current / BUILD_COMPLETION);
              const currentIdx = Math.min(
                TOTAL_FRAMES - 1,
                Math.floor(buildProgress * TOTAL_FRAMES)
              );
              if (idx === currentIdx) {
                renderFrame(currentIdx);
              }
            }
          }
        };
        img.src = src;
        return img;
      });

      imagesRef.current = loadedImages;
    };

    loadFrames();

    return () => {
      isCancelled = true;
    };
  }, [renderFrame]);

  // Window Resize & Scroll Listener with RAF throttling
  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const updateCanvasDimensions = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      // Size the canvas to the pinned box (shorter than the screen on phones)
      const box = canvas.parentElement;
      const width = box ? box.clientWidth : window.innerWidth;
      const height = box ? box.clientHeight : window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Check if orientation / device profile changed
      const isMobile = width < 768 || height > width;
      if (isMobile !== isMobileRef.current) {
        isMobileRef.current = isMobile;
        const sources = isMobile ? MOBILE_FRAMES : DESKTOP_FRAMES;
        imagesRef.current = sources.map((src) => {
          const img = new Image();
          img.onload = () => {
            const buildProgress = Math.min(1, currentProgressRef.current / BUILD_COMPLETION);
            const currentIdx = Math.min(
              TOTAL_FRAMES - 1,
              Math.floor(buildProgress * TOTAL_FRAMES)
            );
            renderFrame(currentIdx);
          };
          img.src = src;
          return img;
        });
      }

      const buildProgress = Math.min(1, currentProgressRef.current / BUILD_COMPLETION);
      const frameIdx = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(buildProgress * TOTAL_FRAMES)
      );
      renderFrame(frameIdx);
    };

    const handleScroll = () => {
      if (isRafLocked.current) return;
      isRafLocked.current = true;

      requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        // Progress runs while the pinned box is stuck (its sticky top offset is shorter-box aware)
        const box = canvas.parentElement;
        const boxH = box ? box.offsetHeight : window.innerHeight;
        const stickyTop = box ? parseFloat(getComputedStyle(box).top) || 0 : 0;
        const scrollableDist = section.offsetHeight - boxH - stickyTop * 2;
        const progress = Math.min(1, Math.max(0, (stickyTop - rect.top) / Math.max(scrollableDist, 1)));

        currentProgressRef.current = progress;

        // Construction builds until BUILD_COMPLETION (65%), then the completed building stays pinned
        const buildProgress = Math.min(1, progress / BUILD_COMPLETION);
        const frameIdx = Math.min(
          TOTAL_FRAMES - 1,
          Math.floor(buildProgress * TOTAL_FRAMES)
        );
        renderFrame(frameIdx);

        const completed = progress >= BUILD_COMPLETION;
        setIsCompleted(completed);

        // Content and overlay stay fully visible for the whole runway; only the canvas animates.

        // 3. Scroll prompt fade-out
        if (scrollPromptRef.current) {
          const promptOpacity = Math.max(0, 1 - progress / 0.07);
          scrollPromptRef.current.style.opacity = String(promptOpacity);
        }

        // 4. Completed building showcase pill (shows when complete until next section)
        if (completeBadgeRef.current) {
          if (completed) {
            completeBadgeRef.current.style.opacity = "1";
            completeBadgeRef.current.style.transform = "translate(-50%, 0)";
          } else {
            completeBadgeRef.current.style.opacity = "0";
            completeBadgeRef.current.style.transform = "translate(-50%, 14px)";
          }
        }

        isRafLocked.current = false;
      });
    };

    window.addEventListener("resize", updateCanvasDimensions);
    window.addEventListener("scroll", handleScroll, { passive: true });

    updateCanvasDimensions();
    handleScroll();

    return () => {
      window.removeEventListener("resize", updateCanvasDimensions);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [renderFrame]);

  return (
    <section
      id="build-journey"
      ref={sectionRef}
      className="relative w-full select-text h-[150svh] md:h-[220vh]"
      style={{ backgroundColor: "var(--grey-deepest)" }}
    >
      {/* Sticky Fullscreen Viewport Container */}
      <div className="sticky top-0 h-[100svh] md:h-screen w-full overflow-hidden"
        style={{ backgroundColor: "var(--grey-deepest)" }}>
        {/* Canvas displaying the building evolving from scratch */}
        <canvas
          ref={canvasRef}
          style={{ imageRendering: "-webkit-optimize-contrast" }}
          className="absolute inset-0 z-0 h-full w-full pointer-events-none"
        />

        {/* Readability overlays (static): left-to-right on desktop, bottom-up on phones */}
        <div
          ref={gradientOverlayRef}
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/55 to-black/10 md:bg-gradient-to-r md:from-black/85 md:via-black/50 md:to-black/5"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />

        {/* Project content: always visible while the building rises behind it */}
        <div
          ref={textContentRef}
          className="absolute inset-0 z-10 flex items-end md:items-center"
        >
          <div className="mx-auto w-full max-w-[1400px] px-4 pb-8 sm:px-8 sm:pb-12 md:pb-0 lg:px-12 xl:px-16">
            <div className="max-w-[640px] text-left">
              <Link
                href="/services/construction"
                className="inline-flex items-center rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[9.5px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] hover:border-[var(--primary)] hover:bg-black/60 transition-colors"
                style={{ color: "var(--primary)" }}
              >
                Our Build Process
              </Link>

              <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                Ajay Homes &amp; Estates · Chennai
              </p>

              <h2
                className="mt-1.5 sm:mt-2 text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[38px] font-bold tracking-tight leading-tight drop-shadow-lg"
                style={{ color: "var(--text-primary)" }}
              >
                From Bhoomi Pooja to <span style={{ color: "var(--primary)" }}>House Warming</span>
              </h2>

              <p className="mt-3 sm:mt-4 max-w-[560px] text-[12.5px] leading-relaxed sm:text-sm md:text-[15px] text-white/75 [@media(max-height:560px)]:hidden">
                Every great home begins with a strong foundation. From approvals and the first pillar
                to structure, interiors and the final light, our in-house team handles every stage —
                so your family moves in on time, without the stress.
              </p>

              {/* Spec grid */}
              <dl className="mt-5 sm:mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
                {PROJECT_SPECS.map((spec) => (
                  <div key={spec.label} className="px-3.5 py-3 sm:px-5 sm:py-4" style={{ backgroundColor: "rgba(30,30,30,0.82)" }}>
                    <dt className="text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.12em]" style={{ color: "var(--text-primary)" }}>
                      {spec.label}
                    </dt>
                    <dd className="mt-1 sm:mt-1.5 text-[11.5px] sm:text-[13px] leading-snug" style={{ color: "var(--text-muted)" }}>
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* CTAs */}
              <div className="mt-5 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-4">
                <Button href="/contact" variant="primary" size="responsive" className="sm:px-6! sm:py-3!">
                  Free Consultation
                </Button>
                <Button href="/gallery" variant="glass" size="responsive" className="sm:px-6! sm:py-3!">
                  View All Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
