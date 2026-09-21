import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import Button from '../UI/Button';

const faqItems = [
  {
    id: '1',
    question: 'What makes Ajay Homes one of the fastest growing builders in Chennai?',
    answer:
      'Thousands of happy families stand testimony to our heritage of quality housing, custom construction solutions, on-time delivery, and proven value for money across prime Chennai locations.'
  },
  {
    id: '2',
    question: 'Can I customize the floorplan and interior finishes for my residential flat?',
    answer:
      'Yes! We specialize in providing custom construction solutions tailored to every client\'s individual needs, including modular kitchen layouts, wood finishes, electrical layouts, and premium tile selections.'
  },
  {
    id: '3',
    question: 'How does Land Partnership property promotion work with Ajay Homes?',
    answer:
      'If you own land in or around Chennai, we partner with you via Land Partnership to construct luxury flats or villas. We offer the best market share/payout, complete legal transparency, and end-to-end project execution.'
  },
  {
    id: '4',
    question: 'What locations in Chennai do you have active and completed projects in?',
    answer:
      'Our signature residential projects and gated communities are located in prime hubs including Velachery, OMR, Porur, Tambaram, Anna Nagar, and ECR.'
  },
  {
    id: '5',
    question: 'Are all Ajay Homes projects legally verified with clear titles?',
    answer:
      'Yes, 100%. Every project undergoes rigorous legal scrutiny by leading property advocates, securing all necessary CMDA / DTCP approvals, clear titles, and seamless bank loan eligibility.'
  },
  {
    id: '6',
    question: 'What is the typical project completion timeline for custom construction?',
    answer:
      'We pride ourselves on promptness and on-time handovers. Most residential flat developments are completed within 12 to 18 months, with regular milestone progress updates for buyers.'
  }
];

export const FAQSection = ({ onOpenTourModal, onOpenApply }) => {
  const [openId, setOpenId] = useState('1');

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-6 sm:px-12 lg:px-20 text-[#1a1a1a] border-t border-black/5 overflow-hidden" style={{ background: '#f8f8f6' }}>
      
      {/* Background Soft Orange Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#ff8c00]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ── LEFT COLUMN: Header & Consultation Card ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8"
          >
            {/* Header Block */}
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#555555]">
                  FAQs
                </span>
              </div>

              <h2
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1a1a1a] tracking-tight leading-tight uppercase text-left"
                style={{ fontFamily: 'Montserrat' }}
              >
                Frequently Asked<br />
                <span className="text-[#ff8c00]">Questions</span>
              </h2>
            </div>

            {/* Consultation Card (Matching reference UI left card) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/5 border border-black/5 space-y-5 max-w-md">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-[#ff8c00]/20 rounded-full blur-md" />
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
                  alt="Property Advisor"
                  className="relative w-14 h-14 rounded-full object-cover border-2 border-[#ff8c00] shadow-md"
                />
              </div>

              <div className="space-y-2">
                <h3
                  className="text-xl sm:text-2xl font-bold text-[#1a1a1a] tracking-tight"
                >
                  Book a 15 min call
                </h3>
                <p
                  className="text-xs sm:text-sm text-[#555555] font-medium leading-relaxed"
                >
                  If you have any questions about our luxury residences, CMDA approvals, or custom floorplans, schedule a private consultation.
                </p>
              </div>

              <div className="pt-2">
                <Button
                  onClick={onOpenTourModal}
                  size="md"
                  className="w-full justify-center"
                >
                  Book a Free Call
                </Button>
              </div>
            </div>

          </motion.div>

          {/* ── RIGHT COLUMN: FAQ Accordion Cards List ────────────────────────── */}
          <div className="lg:col-span-7 space-y-3">
            {faqItems.map((item, idx) => {
              const isOpen = openId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className={`bg-white rounded-2xl p-5 sm:p-6 border transition-all duration-300 ${
                    isOpen
                      ? 'border-[#ff8c00]/40 shadow-lg shadow-[#ff8c00]/5'
                      : 'border-black/5 shadow-sm hover:shadow-md hover:border-black/10'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full text-left flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <span
                      className={`text-sm sm:text-base font-bold transition-colors duration-300 leading-snug ${
                        isOpen ? 'text-[#1a1a1a]' : 'text-[#2a2a2a] group-hover:text-[#ff8c00]'
                      }`}
                    >
                      {item.question}
                    </span>
                    
                    <span className="p-1 rounded-full text-[#333333] group-hover:text-[#ff8c00] transition-colors shrink-0">
                      {isOpen ? (
                        <X className="w-4 h-4 text-[#ff8c00]" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#444444]" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div
                          className="pt-3 mt-3 border-t border-black/5 text-[#555555] text-xs sm:text-sm font-medium leading-relaxed"
                        >
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
