"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";

const REEL_STORIES = [
  {
    id: "reel-arvind",
    name: "Dr. R. Arvind",
    location: "Anna Nagar, Chennai",
    project: "Scarlet Diamond Residence",
    poster: "/assets/testimonials/reels-arvind.jpg",
    video: "/videos/testimonial-01.mp4",
  },
  {
    id: "reel-ananya",
    name: "Ananya Subramanian",
    location: "Besant Nagar, Chennai",
    project: "Nanavati Coastal Villa",
    poster: "/assets/testimonials/reels-ananya.jpg",
    video: "/videos/vid-001.mp4",
  },
  {
    id: "reel-suresh",
    name: "Suresh Kumar",
    location: "Adyar, Chennai",
    project: "Suresh Boat Club Manor",
    poster: "/assets/testimonials/reels-suresh.jpg",
    video: "/video-compressed.mp4",
  },
  {
    id: "reel-karthik",
    name: "Karthik Viswanathan",
    location: "OMR Corridor, Chennai",
    project: "Raman Prestige Villa",
    poster: "/assets/testimonials/reels-karthik.jpg",
    video: "/footer/footer-video2.mp4",
  },
  {
    id: "reel-priya",
    name: "Priya Natarajan",
    location: "Velachery, Chennai",
    project: "Natraj Independent Villa",
    poster: "/assets/testimonials/reels-priya.jpg",
    video: "/videos/testimonial-01.mp4",
  },
];

export default function HappyClients() {
  const scrollRef = useRef(null);
  const videoRefs = useRef({});
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingId, setPlayingId] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [progresses, setProgresses] = useState({});

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      const card = scrollRef.current.querySelector(".reel-card-item");
      if (card && card.offsetWidth > 0) {
        const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
        const step = isMobile ? clientWidth : card.offsetWidth + 20;
        const idx = Math.round(scrollLeft / step);
        setActiveIndex(Math.min(Math.max(idx, 0), REEL_STORIES.length - 1));
      }
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      checkScroll();
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.querySelector(".reel-card-item");
      const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
      const scrollStep = card ? (isMobile ? container.clientWidth : card.offsetWidth + 20) : 300;
      container.scrollBy({
        left: direction === "left" ? -scrollStep : scrollStep,
        behavior: "smooth",
      });
    }
  };

  // Toggle Play / Pause in-place (Instagram Reels style)
  const togglePlay = (id) => {
    // If currently playing, pause it
    if (playingId === id) {
      const currentVideo = videoRefs.current[id];
      if (currentVideo) {
        currentVideo.pause();
      }
      setPlayingId(null);
      return;
    }

    // Stop currently playing video if different
    if (playingId && videoRefs.current[playingId]) {
      videoRefs.current[playingId].pause();
    }

    // Play the requested video
    const newVideo = videoRefs.current[id];
    if (newVideo) {
      newVideo.play().then(() => {
        setPlayingId(id);
      }).catch((err) => {
        console.warn("Video playback prevented:", err);
      });
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    Object.values(videoRefs.current).forEach((v) => {
      if (v) v.muted = nextMuted;
    });
  };

  const handleTimeUpdate = (id) => {
    const v = videoRefs.current[id];
    if (v && v.duration) {
      setProgresses((prev) => ({
        ...prev,
        [id]: (v.currentTime / v.duration) * 100,
      }));
    }
  };

  return (
    <section
      id="testimonials"
      className="relative w-full py-8 sm:py-10 lg:py-12 section-grey text-[var(--text-primary)] overflow-hidden border-t border-b border-white/10"
      style={{ fontFamily: 'var(--font-family-base, "Montserrat", sans-serif)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6 space-y-1.5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            Customer Favorites
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] font-normal">
            See what our community loves
          </p>
        </div>

        {/* ── Horizontal Reels Carousel Container ── */}
        <div className="relative group/carousel">
          
          {/* Floating Left Arrow Navigation Button */}
          {canScrollLeft && (
            <button
              suppressHydrationWarning
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Previous story"
              className="absolute left-0 sm:-left-3 top-1/2 -translate-y-1/2 z-30 h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-black/70 hover:bg-black text-white shadow-xl backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
            </button>
          )}

          {/* Floating Right Arrow Navigation Button */}
          {canScrollRight && (
            <button
              suppressHydrationWarning
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Next story"
              className="absolute right-0 sm:-right-3 top-1/2 -translate-y-1/2 z-30 h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-black/70 hover:bg-black text-white shadow-xl backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
            </button>
          )}

          {/* ── Reels Horizontal Track: Exactly 1 card on mobile, 3 on tablet, 4 on desktop ── */}
          <div
            ref={scrollRef}
            className="flex items-stretch gap-0 sm:gap-5 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory pt-1 pb-3 px-0 sm:px-1"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {REEL_STORIES.map((reel) => {
              const isPlaying = playingId === reel.id;

              return (
                <div
                  key={reel.id}
                  className="reel-card-item snap-center shrink-0 w-full sm:w-[calc((100%-40px)/3)] lg:w-[calc((100%-60px)/4)] sm:max-w-[280px] flex justify-center px-2 sm:px-0"
                >
                  {/* Vertical Portrait Reel Card */}
                  <div
                    onClick={() => togglePlay(reel.id)}
                    className="group relative h-[420px] sm:h-[420px] lg:h-[450px] w-full max-w-[290px] sm:max-w-none rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-400 cursor-pointer bg-neutral-900 border border-white/10 select-none"
                  >
                    {/* Native Video Element with Poster Thumbnail */}
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[reel.id] = el;
                      }}
                      src={reel.video}
                      poster={reel.poster}
                      playsInline
                      loop
                      muted={isMuted}
                      preload="metadata"
                      onTimeUpdate={() => handleTimeUpdate(reel.id)}
                      onEnded={() => setPlayingId(null)}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Instagram-style Top Progress Bar when Playing */}
                    {isPlaying && (
                      <div className="absolute top-2.5 inset-x-3 z-30 h-1 bg-white/25 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[var(--primary)] rounded-full transition-[width] duration-150 ease-linear"
                          style={{ width: `${progresses[reel.id] || 0}%` }}
                        />
                      </div>
                    )}

                    {/* Top-Right Audio Mute / Unmute Button */}
                    {isPlaying && (
                      <button
                        suppressHydrationWarning
                        type="button"
                        onClick={toggleMute}
                        aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                        className="absolute top-4 right-3 z-30 p-2 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
                      >
                        {isMuted ? (
                          <VolumeX className="w-3.5 h-3.5" />
                        ) : (
                          <Volume2 className="w-3.5 h-3.5 text-[var(--primary)]" />
                        )}
                      </button>
                    )}

                    {/* Center Play/Pause Indicator (Instagram Reels style) */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                      {!isPlaying ? (
                        <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 shadow-xl group-hover:scale-110 border border-white/30">
                          <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center shadow-xl border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Pause className="w-5 h-5 fill-white text-white" />
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Mobile Page Indicator Dots ── */}
          <div className="flex sm:hidden items-center justify-center gap-1.5 mt-3">
            {REEL_STORIES.map((reel, idx) => (
              <button
                suppressHydrationWarning
                key={reel.id}
                type="button"
                onClick={() => {
                  if (scrollRef.current) {
                    const container = scrollRef.current;
                    const cards = container.querySelectorAll(".reel-card-item");
                    if (cards[idx]) {
                      cards[idx].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                    }
                  }
                }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx ? "w-6 bg-[var(--primary)]" : "w-1.5 bg-white/30"
                }`}
                aria-label={`Go to video ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
