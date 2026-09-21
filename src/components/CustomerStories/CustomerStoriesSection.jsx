import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, ArrowUpRight, RotateCcw, Building2, ShieldCheck, Sparkles, Layers, Wrench, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

const serviceHighlights = [
  { name: 'ARCHITECTURE', icon: Building2 },
  { name: 'SAVINGS & PRICING', icon: Sparkles },
  { name: 'ELEVATION DESIGN', icon: Layers },
  { name: 'QUALITY FINISH', icon: CheckCircle2 },
  { name: 'STRUCTURAL INTEGRITY', icon: ShieldCheck },
  { name: 'LIFETIME WARRANTY', icon: Wrench },
  { name: 'MODERN RENOVATIONS', icon: Sparkles },
  { name: 'CMDA APPROVED', icon: MapPin },
];

/**
 * CustomerStoriesSection Component
 * Rebuilt to match reference UI:
 * Left: Eyebrow pill, bold title, subtext, 8-item icon grid, +1000 Happy Clients avatars, Orange Explore button.
 * Right: Video card with smooth right-to-left transition + 3 floating footer contact cards (:MAIL US, :CONTACT NO, :HEAD OFFICE).
 */
export const CustomerStoriesSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const handleClosePlayer = (e) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
    setIsOpen(false);
  };

  const handleOpenAndPlay = () => {
    setIsOpen(true);
    setIsPlaying(true);
    setIsMuted(false);
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  };

  const togglePlayPause = (e) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => { });
      }
    }
  };

  const toggleMute = (e) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current && videoRef.current.duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress((newTime / videoRef.current.duration) * 100);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  return (
    <section id="township-showcase" className="relative w-full min-h-screen flex flex-col justify-center py-10 lg:py-14 px-6 sm:px-12 lg:px-16 text-[#1a1a1a] border-t border-black/10 overflow-hidden" style={{ background: '#ffffff' }}>

      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto relative z-10">

        {/* ── LEFT COLUMN: Text, 8-Item Icon Grid & Client Avatars ───────────── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col space-y-4 lg:space-y-5 text-left"
        >
          {/* Top Eyebrow Pill */}
          <div className="flex justify-start">
            <span
              className="px-4 py-1.5 rounded-full border border-black/15 bg-white text-[10px] font-extrabold tracking-[0.25em] uppercase text-[#ff8c00] shadow-xs"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              REALITY INTO IDEAS
            </span>
          </div>

          {/* Bold Main Heading — Left-aligned, crisp Montserrat */}
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a1a1a] tracking-tight leading-[1.12] uppercase text-left"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Building Innovative<br />
            <span className="text-[#ff8c00]">Trusted</span> Solutions
          </h2>

          {/* Subline — Left-aligned, high readability */}
          <p
            className="text-xs sm:text-sm lg:text-base text-[#333333] font-medium leading-relaxed max-w-xl text-left"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            One of Chennai's premier construction firms — creating master-planned townships, luxury residences, and architectural landmarks engineered for generations.
          </p>

          {/* 8-Service Line Art Icon Grid — Compact vertical padding */}
          <div className="grid grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-2.5 sm:gap-y-3 border-t border-b border-black/10 py-3.5 sm:py-4">
            {serviceHighlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="flex items-center gap-2 sm:gap-3 group">
                  <div className="w-7 h-7 sm:w-8.5 sm:h-8.5 rounded-lg sm:rounded-xl bg-black/5 flex items-center justify-center text-[#ff8c00] group-hover:bg-[#ff8c00] group-hover:text-black transition-colors flex-shrink-0">
                    <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span
                    className="text-[10px] sm:text-xs lg:text-sm font-bold sm:font-extrabold text-[#1a1a1a] tracking-wide sm:tracking-wider uppercase leading-tight"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Bottom Social Proof Avatars & Explore CTA Button */}
          <div className="flex flex-wrap items-center justify-between gap-6 pt-2">

            {/* Overlapping Client Avatars */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>+1000</span>
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Happy Homeowner"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Happy Homeowner"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                  alt="Happy Homeowner"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-md"
                />
              </div>
              <span className="text-xs font-bold text-[#555555] uppercase tracking-wider block leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Happy<br />Clients
              </span>
            </div>

            {/* Orange CTA Button */}
            <button
              onClick={handleOpenAndPlay}
              className="group inline-flex items-center gap-3 bg-[#ff8c00] hover:bg-[#e67e00] text-black px-7 py-3.5 rounded-full text-xs sm:text-sm font-black tracking-widest uppercase shadow-lg hover:shadow-xl transition-all cursor-pointer"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform" />
              <span>EXPLORE</span>
            </button>

          </div>

        </motion.div>

        {/* ── RIGHT COLUMN: Smooth Right-to-Left Entrance Video Showcase ──────── */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 w-full flex flex-col space-y-4"
        >
          {/* Main Framed Video Container */}
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-black/10 bg-[#0c0d10] aspect-[4/3] sm:aspect-[16/11] group">
            
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={!isOpen || isMuted}
              playsInline
              preload="auto"
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              className="w-full h-full object-cover"
            >
              <source src="/videos/vid-001.mp4" type="video/mp4" />
              Your browser does not support video playback.
            </video>

            {/* Dark Ambient Overlay when paused */}
            {(!isOpen || !isPlaying) && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500" />
            )}

            {/* Play Button Overlay */}
            {(!isOpen || !isPlaying) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none space-y-3">
                <motion.button
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={!isOpen ? handleOpenAndPlay : togglePlayPause}
                  className="pointer-events-auto relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#ff8c00] text-black flex items-center justify-center shadow-2xl group cursor-pointer"
                  aria-label="Play Drone Video"
                >
                  <motion.span
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 rounded-full border-2 border-[#ff8c00]"
                  />
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 text-black fill-black ml-1" />
                </motion.button>
                <span
                  className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-black/60 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {!isOpen ? 'Click to Watch Aerial Tour' : 'Paused — Click to Resume'}
                </span>
              </div>
            )}

            {/* Video Player Controls when open */}
            {isOpen && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 z-30 p-3 sm:p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col gap-2"
                >
                  <div
                    onClick={handleSeek}
                    className="w-full h-1.5 sm:h-2 bg-white/30 hover:h-2.5 rounded-full overflow-hidden cursor-pointer transition-all relative"
                  >
                    <div
                      style={{ width: `${progress}%` }}
                      className="h-full bg-[#ff8c00] transition-all duration-100"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[10px] sm:text-xs text-white pt-0.5">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={togglePlayPause}
                        className="bg-[#ff8c00] py-1 px-3 rounded-lg text-black font-black flex items-center gap-1 text-[10px] shadow-md hover:scale-105 transition-all cursor-pointer"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {isPlaying ? <Pause className="w-3 h-3 text-black fill-black" /> : <Play className="w-3 h-3 text-black fill-black" />}
                        <span>{isPlaying ? 'Pause' : 'Play'}</span>
                      </button>

                      <button
                        onClick={toggleMute}
                        className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white cursor-pointer"
                      >
                        {isMuted ? <VolumeX className="w-3.5 h-3.5 text-white/60" /> : <Volume2 className="w-3.5 h-3.5 text-[#ff8c00]" />}
                      </button>
                    </div>

                    <button
                      onClick={handleClosePlayer}
                      className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg text-[10px] text-white flex items-center gap-1 cursor-pointer transition-all"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      <RotateCcw className="w-3 h-3 text-[#ff8c00]" />
                      <span>Close</span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}

          </div>

          {/* 3 Floating Info Cards matching reference image bottom (:MAIL US, :CONTACT NO, :HEAD OFFICE) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">

            {/* Card 1: Mail Us */}
            <div className="p-3.5 rounded-2xl bg-white border border-black/10 shadow-md flex flex-col justify-between space-y-1">
              <span className="text-xs font-black text-[#1a1a1a] uppercase tracking-wider block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                MAIL US
              </span>
              <div className="space-y-0.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <p className="text-[11px] text-[#333333] font-semibold leading-tight truncate">info@ajayhomes.in</p>
                <p className="text-[11px] text-[#333333] font-semibold leading-tight truncate">sales@ajayhomes.in</p>
              </div>
            </div>

            {/* Card 2: Contact No */}
            <div className="p-3.5 rounded-2xl bg-white border border-black/10 shadow-md flex flex-col justify-between space-y-1">
              <span className="text-xs font-black text-[#1a1a1a] uppercase tracking-wider block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                CONTACT NO
              </span>
              <div className="space-y-0.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <p className="text-[11px] text-[#333333] font-semibold leading-tight">+91 98400 12345</p>
                <p className="text-[11px] text-[#333333] font-semibold leading-tight">+91 44 2255 8899</p>
              </div>
            </div>

            {/* Card 3: Head Office */}
            <div className="p-3.5 rounded-2xl bg-white border border-black/10 shadow-md flex flex-col justify-between space-y-1">
              <span className="text-xs font-black text-[#1a1a1a] uppercase tracking-wider block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                HEAD OFFICE
              </span>
              <div className="space-y-0.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <p className="text-[11px] text-[#333333] font-semibold leading-tight">Velachery Main Road,</p>
                <p className="text-[11px] text-[#333333] font-semibold leading-tight">Chennai, TN 600042</p>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default CustomerStoriesSection;
