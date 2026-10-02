"use client";

import React from 'react';
import Header from '@/components/Hero/Header';

/**
 * Shared layout for legal pages (Terms & Conditions, Privacy Policy).
 * Simple document style: two-tone heading (orange accent + dark), intro
 * paragraphs, then plain bold section headings with grey copy and bullet lists.
 * A slim dark band sits behind the floating site header so it stays readable.
 * Colours / fonts from globals.css.
 *
 * sections: [{ id, title, blocks: [{ type: 'p', text } | { type: 'list', items } | { type: 'contact', name, address, email, phones: [{ label, href }] }] }]
 */
export default function LegalPage({ titleAccent, titleRest, intro = [], sections = [] }) {
  return (
    <main
      className="min-h-screen relative overflow-x-hidden bg-white selection:bg-[var(--primary)] selection:text-black"
      style={{ fontFamily: 'var(--font-family-base)' }}
    >
      <Header />

      {/* Dark band behind the floating header */}
      <div aria-hidden="true" className="section-grey h-[82px] sm:h-[96px] md:h-[104px] lg:h-[112px]" />

      <article className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-[8%] py-8 sm:py-10 lg:py-12">
        <h1 className="text-[24px] sm:text-[32px] lg:text-[42px] font-bold tracking-tight leading-tight">
          <span style={{ color: 'var(--primary)' }}>{titleAccent}</span>{' '}
          <span style={{ color: 'var(--grey-deepest)' }}>{titleRest}</span>
        </h1>

        {intro.length > 0 && (
          <div className="mt-4 sm:mt-6 space-y-4">
            {intro.map((t, i) => (
              <p key={i} className="text-sm sm:text-base lg:text-[17px] leading-[1.75] text-slate-600">
                {t}
              </p>
            ))}
          </div>
        )}

        <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-8">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-6">
              <h2 className="text-lg sm:text-xl lg:text-[23px] font-bold tracking-tight leading-snug text-[var(--grey-deepest)]">
                {i + 1}. {s.title}
              </h2>

              <div className="mt-2 sm:mt-3 space-y-3 sm:space-y-4">
                {s.blocks.map((b, j) => {
                  if (b.type === 'list') {
                    return (
                      <ul key={j} className="list-disc pl-5 sm:pl-8 space-y-1.5 sm:space-y-2 marker:text-[var(--primary)]">
                        {b.items.map((item) => (
                          <li key={item} className="pl-1 text-sm sm:text-base lg:text-[17px] leading-relaxed text-slate-600">
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (b.type === 'contact') {
                    const link = 'font-medium text-[var(--grey-deepest)] hover:text-[var(--primary-dark)] underline-offset-4 hover:underline transition-colors';
                    return (
                      <div key={j} className="space-y-1 text-sm sm:text-base lg:text-[17px] leading-relaxed text-slate-600">
                        <p className="font-semibold text-[var(--grey-deepest)]">{b.name}</p>
                        <p>{b.address}</p>
                        <p>
                          Email:{' '}
                          <a href={`mailto:${b.email}`} className={`${link} break-all`}>{b.email}</a>
                        </p>
                        <p>
                          Phone:{' '}
                          {b.phones.map((ph, k) => (
                            <React.Fragment key={ph.href}>
                              {k > 0 && <span className="text-slate-400"> / </span>}
                              <a href={ph.href} className={`${link} whitespace-nowrap`}>{ph.label}</a>
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    );
                  }
                  return (
                    <p key={j} className="text-sm sm:text-base lg:text-[17px] leading-[1.75] text-slate-600">
                      {b.text}
                    </p>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
