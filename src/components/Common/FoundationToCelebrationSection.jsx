"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Shovel, HardHat, PaintRoller, KeyRound, PartyPopper } from 'lucide-react';

const DEFAULT_STAGES = [
  { label: 'Bhoomi Pooja', icon: Flame },
  { label: 'Site Preparation', icon: Shovel },
  { label: 'Construction', icon: HardHat },
  { label: 'Finishing', icon: PaintRoller },
  { label: 'Handover', icon: KeyRound },
  { label: 'House Warming', icon: PartyPopper },
];

// Box heights (px, desktop) per stage so the belt looks like mixed parcels
const BOX_HEIGHTS = [66, 104, 82, 116, 74, 96];

// Belt speeds (px per second)
const NORMAL_SPEED = 45;
const FAST_SPEED = 260;

/**
 * Reusable FoundationToCelebrationSection
 * Soft glow background → centred message card → conveyor belt carrying the
 * construction stages. The centre window labels the stage passing through it;
 * hovering (or tapping) the window speeds the belt up, leaving eases it back.
 * Colours / fonts come from globals.css (--primary*, --grey-*, --font-family-base).
 */
export const FoundationToCelebrationSection = ({
  id = 'foundation-to-celebration',
  title = 'From Bhoomi Pooja to House Warming',
  lead = 'We take care of your construction journey from the first Bhoomi Pooja to the final House Warming.',
  description = 'From site preparation and construction to finishing and handover, Ajay Homes manages every stage with care, coordination, and attention to detail.',
  stages = DEFAULT_STAGES,
  tagline = 'One team. One journey. From foundation to celebration.',
  className = '',
}) => {
  const trackRef = useRef(null);
  const stripRef = useRef(null);
  const offsetRef = useRef(0);
  const speedRef = useRef(NORMAL_SPEED);
  const targetSpeedRef = useRef(NORMAL_SPEED);
  const activeRef = useRef(-1);
  const boostTimerRef = useRef(null);

  const [itemWidth, setItemWidth] = useState(170);
  const [copies, setCopies] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);

  const n = stages.length;
  const scale = itemWidth < 150 ? 0.72 : 1;

  // Size the belt items and the number of repeated stage sets to the track width
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const width = track.offsetWidth;
      const w = width < 640 ? 118 : 170;
      setItemWidth(w);
      setCopies(Math.ceil(width / (n * w)) + 2);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [n]);

  // Animation loop: ease the speed towards its target, move the strip, track the centred stage
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      speedRef.current = 0;
      targetSpeedRef.current = 0;
    }

    let raf;
    let last = performance.now();
    const loopWidth = n * itemWidth;

    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.08;
      offsetRef.current = (offsetRef.current + speedRef.current * dt) % loopWidth;

      if (stripRef.current) {
        stripRef.current.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }

      const track = trackRef.current;
      if (track) {
        const centreX = track.offsetWidth / 2;
        const idx = ((Math.floor((centreX + offsetRef.current) / itemWidth) % n) + n) % n;
        if (idx !== activeRef.current) {
          activeRef.current = idx;
          setActiveIndex(idx);
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [itemWidth, n]);

  useEffect(() => () => clearTimeout(boostTimerRef.current), []);

  const baseSpeed = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : NORMAL_SPEED;

  const speedUp = () => {
    clearTimeout(boostTimerRef.current);
    targetSpeedRef.current = FAST_SPEED;
  };
  const slowDown = () => {
    clearTimeout(boostTimerRef.current);
    targetSpeedRef.current = baseSpeed();
  };
  // Touch devices: short burst, then back to normal
  const burst = () => {
    speedUp();
    boostTimerRef.current = setTimeout(slowDown, 1100);
  };

  const beltItems = Array.from({ length: copies * n }, (_, i) => i % n);
  // Tallest house (body + roof) so the track and scanner fit it
  const maxBoxH = Math.max(
    ...BOX_HEIGHTS.map((bh) => {
      const h = bh * scale;
      const w = Math.round((58 + bh * 0.55) * scale);
      return h + Math.round(w * 0.42);
    })
  );
  const active = stages[activeIndex];

  return (
    <section
      id={id}
      className={`relative w-full bg-white overflow-hidden py-14 sm:py-16 lg:py-20 ${className}`}
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      {/* ── Soft brand glow background ───────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[520px] w-[min(1100px,140vw)] blur-[70px] opacity-90"
        style={{
          background:
            'radial-gradient(closest-side at 32% 40%, color-mix(in srgb, var(--primary) 26%, transparent), transparent), radial-gradient(closest-side at 68% 38%, color-mix(in srgb, var(--primary-light) 18%, transparent), transparent)',
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Message card ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto max-w-[620px] rounded-2xl border border-black/5 bg-white/90 backdrop-blur-sm px-6 py-7 sm:px-10 sm:py-9 text-center shadow-[0_18px_50px_-20px_rgba(0,0,0,0.18)]"
        >
          <h2
            className="text-[22px] sm:text-[28px] lg:text-[30px] font-semibold tracking-tight leading-[1.2]"
            style={{ color: 'var(--grey-deepest)' }}
          >
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-[15px] leading-relaxed" style={{ color: 'var(--grey-base)' }}>
            {lead}
          </p>
          <p className="mt-2 text-xs sm:text-[13px] leading-relaxed" style={{ color: 'var(--grey-surface)' }}>
            {description}
          </p>
          {tagline && (
            <p
              className="mt-5 inline-block rounded-lg px-4 py-2.5 text-xs sm:text-sm font-semibold"
              style={{ backgroundColor: 'var(--grey-deepest)', color: 'var(--text-primary)' }}
            >
              {tagline}
            </p>
          )}
        </motion.div>

        {/* ── Conveyor belt ────────────────────────────────────────────── */}
        <div className="relative mt-10 sm:mt-12">
          {/* Moving parcels */}
          <div
            ref={trackRef}
            className="relative overflow-hidden"
            style={{
              height: `${maxBoxH + 18}px`,
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
              maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
            }}
          >
            <div ref={stripRef} className="absolute left-0 bottom-0 flex items-end will-change-transform">
              {beltItems.map((stageIdx, i) => {
                const stage = stages[stageIdx];
                const Icon = stage.icon;
                const h = BOX_HEIGHTS[stageIdx % BOX_HEIGHTS.length] * scale;
                const boxW = Math.round((58 + (h / scale) * 0.55) * scale);
                return (
                  <div key={i} className="flex shrink-0 items-end justify-center" style={{ width: itemWidth }}>
                    {/* House: gabled roof over a body with door, window and stage icon */}
                    <div className="relative flex flex-col items-center" style={{ width: boxW + 12 }}>
                      {/* Chimney */}
                      <div
                        className="absolute rounded-t-[2px]"
                        style={{
                          width: Math.round(boxW * 0.12),
                          height: Math.round(boxW * 0.32),
                          right: Math.round(boxW * 0.2),
                          top: Math.round(boxW * 0.06),
                          backgroundColor: 'color-mix(in srgb, var(--primary) 50%, white)',
                        }}
                      />
                      {/* Roof */}
                      <div
                        className="relative w-full"
                        style={{
                          height: Math.round(boxW * 0.42),
                          clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
                          background:
                            'linear-gradient(90deg, color-mix(in srgb, var(--primary) 62%, white) 0 50%, color-mix(in srgb, var(--primary) 78%, white) 50% 100%)',
                        }}
                      />
                      {/* Body */}
                      <div
                        className="relative flex flex-col items-center justify-start pt-[14%]"
                        style={{
                          width: boxW,
                          height: h,
                          background:
                            'linear-gradient(90deg, color-mix(in srgb, var(--primary) 22%, white) 0 78%, color-mix(in srgb, var(--primary) 34%, white) 78% 100%)',
                        }}
                      >
                        {Icon && (
                          <Icon
                            style={{ width: 18 * scale + 6, height: 18 * scale + 6, color: 'var(--primary-dark)' }}
                            strokeWidth={1.9}
                          />
                        )}
                        {/* Door */}
                        <div
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-[3px]"
                          style={{
                            width: Math.round(boxW * 0.26),
                            height: Math.round(Math.min(h * 0.42, boxW * 0.42)),
                            backgroundColor: 'color-mix(in srgb, var(--primary) 70%, white)',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Centre scanner window (hover to fast-forward) */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-md cursor-pointer"
              style={{
                width: itemWidth - 16,
                height: maxBoxH + 14,
                background:
                  'linear-gradient(to top, color-mix(in srgb, var(--primary) 55%, transparent), color-mix(in srgb, var(--primary) 8%, transparent))',
                boxShadow: '0 0 30px -6px color-mix(in srgb, var(--primary) 60%, transparent)',
              }}
              onMouseEnter={speedUp}
              onMouseLeave={slowDown}
              onTouchStart={burst}
              role="presentation"
            />
          </div>

          {/* Belt with rollers + centred stage label */}
          <div
            className="relative h-14 sm:h-16 rounded-full flex items-center justify-between px-3 sm:px-4"
            style={{ backgroundColor: 'var(--grey-base)' }}
          >
            {Array.from({ length: 10 }).map((_, i) => {
              const BeltIcon = stages[i % n]?.icon;
              return (
                <span
                  key={i}
                  className={`h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.35)] ${i >= 5 ? 'hidden md:flex' : 'flex'}`}
                  style={{ color: 'var(--grey-deepest)' }}
                >
                  {BeltIcon && <BeltIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={2.6} />}
                </span>
              );
            })}

            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-md border bg-[var(--grey-deepest)] px-3 sm:px-4 py-2 sm:py-2.5 min-w-[150px] sm:min-w-[190px] cursor-pointer"
              style={{ borderColor: 'var(--primary)' }}
              onMouseEnter={speedUp}
              onMouseLeave={slowDown}
              onTouchStart={burst}
              aria-live="polite"
            >
              <span
                className="text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.14em] whitespace-nowrap"
                style={{ color: 'var(--primary)' }}
              >
                {active?.label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationToCelebrationSection;
