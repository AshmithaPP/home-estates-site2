"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Filter } from 'lucide-react';

export const ProjectGridSection = ({ 
  projects, 
  categories, 
  onSelectProject, 
  onOpenInquiry 
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  const filteredProjects = selectedCategory === 'All Projects'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="w-full">
      {/* ── Category Filters Navigation Bar ─────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-black/10">
        <div>
          <h2 className="text-lg sm:text-xl font-extrabold text-[#111827] tracking-tight">
            Explore All Completed Projects
          </h2>
          <p className="text-xs sm:text-[13px] text-[#6b7280] mt-0.5">
            Real architectural photographs from our landmark residences across Chennai.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[var(--primary)] text-black shadow-[0_0_14px_rgba(255,140,0,0.35)]'
                    : 'bg-[#f3f4f6] text-[#374151] hover:bg-[#e5e7eb] hover:text-[#111827] border border-black/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── 3-Column Projects Grid (Moderately Wider & Fully Responsive) ─────── */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-xl overflow-hidden border border-black/10 hover:border-[var(--primary)]/60 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)] flex flex-col group"
            >
              {/* 1. Image Container with 📷 Count Pill (Proportional Height for Wider Card) */}
              <div 
                className="relative h-[195px] sm:h-[210px] md:h-[220px] overflow-hidden cursor-pointer bg-black/40"
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Gentle Gradient Contrast Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75 group-hover:opacity-50 transition-opacity pointer-events-none" />

                {/* 📷 Photo Count Badge in Bottom-Right Corner */}
                <div 
                  className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold flex items-center gap-1.5 border border-white/10 shadow-sm group-hover:bg-[var(--primary)] group-hover:text-black transition-colors"
                  title={`View all ${project.photosCount} photos`}
                >
                  <Camera className="w-3.5 h-3.5 shrink-0" />
                  <span>{project.photosCount}</span>
                </div>

                {/* Scope Category Badge on Top-Left */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10.5px] font-semibold text-white/90 shadow-sm">
                  {project.category}
                </div>
              </div>

              {/* 2. Card Content Body (Refined Padding & Typography) */}
              <div className="p-4 sm:p-4.5 flex flex-col flex-1 justify-between gap-3.5">
                
                {/* Title & Sub-Location */}
                <div>
                  <h3 
                    onClick={() => onSelectProject(project)}
                    className="text-xs sm:text-[14px] font-bold text-[#111827] hover:text-[var(--primary)] line-clamp-2 leading-snug cursor-pointer transition-colors min-h-[36px]"
                    title={project.title}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[11.5px] sm:text-xs text-[#6b7280] font-medium mt-1 truncate">
                    {project.community}
                  </p>
                </div>

                {/* 3. Divider Line & 2-Column Specs Table */}
                <div className="mt-auto">
                  <div className="border-t border-black/10 pt-3 pb-3.5">
                    <div className="grid grid-cols-2 gap-2">
                      
                      {/* Column 1: Scope */}
                      <div className="pr-1">
                        <span className="text-[10px] sm:text-[10.5px] font-medium text-[#6b7280] uppercase tracking-wider block">
                          Scope
                        </span>
                        <span 
                          className="text-[11.5px] sm:text-xs font-semibold text-[#111827] block truncate mt-0.5"
                          title={project.scope}
                        >
                          {project.scope}
                        </span>
                      </div>

                      {/* Column 2: BHK */}
                      <div className="pl-3 border-l border-black/10">
                        <span className="text-[10px] sm:text-[10.5px] font-medium text-[#6b7280] uppercase tracking-wider block">
                          BHK
                        </span>
                        <span className="text-[11.5px] sm:text-xs font-semibold text-[#111827] block mt-0.5 truncate">
                          {project.bhk}
                        </span>
                      </div>

                    </div>
                  </div>

                  {/* 4. Action Button: "Get This Design" */}
                  <button
                    onClick={() => onOpenInquiry(project)}
                    className="w-full py-2.5 px-4 rounded-full border border-[var(--primary)] text-[#e67e00] hover:bg-[var(--primary)] hover:text-black font-semibold text-xs sm:text-[13px] text-center transition-all duration-200 cursor-pointer shadow-sm hover:shadow-[0_0_14px_rgba(255,140,0,0.3)]"
                  >
                    Get This Design
                  </button>
                </div>

              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProjectGridSection;
