"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardList, 
  HardHat, 
  Users, 
  Clock, 
  ShieldCheck, 
  Layers, 
  Receipt, 
  BarChart3 
} from 'lucide-react';

export const ProjectManagementServicesGrid = () => {
  const services = [
    {
      id: 'planning',
      title: 'Project Planning',
      description: 'We establish the project scope, priorities, timelines, resources, and execution strategy before work begins.',
      icon: ClipboardList
    },
    {
      id: 'site-mgmt',
      title: 'Site Management',
      description: 'We coordinate site activities and ensure different teams work together efficiently.',
      icon: HardHat
    },
    {
      id: 'contractor-coord',
      title: 'Contractor Coordination',
      description: 'We manage communication and coordination between contractors, vendors, consultants, and other project stakeholders.',
      icon: Users
    },
    {
      id: 'timeline-mgmt',
      title: 'Timeline Management',
      description: 'We track project progress, identify delays, and coordinate activities to keep the project moving according to the planned schedule.',
      icon: Clock
    },
    {
      id: 'quality-monitoring',
      title: 'Quality Monitoring',
      description: 'We monitor workmanship, materials, and execution standards throughout the project.',
      icon: ShieldCheck
    },
    {
      id: 'material-mgmt',
      title: 'Material Management',
      description: 'From material planning to procurement coordination and site requirements, we help maintain efficient material flow.',
      icon: Layers
    },
    {
      id: 'budget-coord',
      title: 'Budget & Cost Coordination',
      description: 'We help monitor project expenses and coordinate costs across different stages of execution.',
      icon: Receipt
    },
    {
      id: 'progress-reporting',
      title: 'Progress Reporting',
      description: 'Clear updates and structured communication help clients stay informed about project progress.',
      icon: BarChart3
    }
  ];

  return (
    <section 
      id="project-management-services"
      className="relative w-full py-16 sm:py-20 lg:py-28 overflow-hidden text-white"
      style={{ 
        backgroundColor: 'var(--grey-deepest)',
        fontFamily: 'var(--font-family-base)' 
      }}
    >
      {/* ── Subtle background grid pattern for architectural depth ── */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-14 items-start">
          
          {/* ── Left Column: Section Title & Narrative (Flush Left) ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 text-left"
          >

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3 sm:mb-4">
              Our Project <br className="hidden sm:inline" />
              <span className="text-white block mt-1">
                Management Services
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-sm">
              From day-one roadmap creation to final milestone commissioning, we oversee all operational, technical, and logistical facets with total transparency.
            </p>
          </motion.div>

          {/* ── Right Column: 8 Services Grid (4 Columns x 2 Rows on Desktop) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-9"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {services.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.05 }}
                    className="flex flex-col items-start text-left p-5 sm:p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-[var(--primary)]/50 transition-all duration-300 group shadow-lg"
                  >
                    {/* Icon Container */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-white/10 border border-white/15 shadow-md group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)] transition-all duration-300 mb-4">
                      <IconComponent className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                    </div>

                    {/* Service Title */}
                    <h3 
                      className="text-base sm:text-[17px] font-bold tracking-tight leading-snug transition-colors text-white group-hover:text-[var(--primary)] mb-2"
                    >
                      {item.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-xs sm:text-[13px] text-slate-400 font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProjectManagementServicesGrid;
