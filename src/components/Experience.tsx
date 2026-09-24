import React, { useState, useEffect, useRef } from 'react';
import { experiences } from '@/data/experience';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Experience: React.FC = () => {
  // Track expanded state for each experience entry
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'exp-qa-analyst': false,
    'exp-tech-support': false,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced || !lineRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'bottom 75%',
            scrub: 0.5,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 border-b border-hairline">
      <div className="max-w-spec mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-12 border-b border-hairline gap-2">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs text-vermilion font-medium">01.2 //</span>
            <h2 className="font-mono text-sm tracking-mono uppercase text-primary font-semibold">
              EXPERIENCE CHANGERECORD
            </h2>
          </div>
          <div className="font-mono text-[11px] text-muted tracking-mono uppercase">
            <span>FORMAT: GIT-LOG SPECIFICATION</span>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10">
          {/* Background vertical hairline */}
          <div className="absolute left-[11px] sm:left-[15px] top-4 bottom-4 w-[1px] bg-hairline" />

          {/* Scrubbed progress vertical hairline */}
          <div
            ref={lineRef}
            className="absolute left-[11px] sm:left-[15px] top-4 bottom-4 w-[1px] bg-vermilion origin-top"
          />

          <div className="space-y-12">
            {experiences.map((exp) => {
              const isExpanded = !!expandedIds[exp.id];

              return (
                <div key={exp.id} className="relative group">
                  {/* Square node marker */}
                  <div className="absolute -left-[29px] sm:-left-[33px] top-1.5 w-2.5 h-2.5 bg-canvas border border-primary group-hover:border-vermilion group-hover:bg-vermilion transition-colors" />

                  {/* Header / Meta */}
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-mono text-xs mb-2">
                    <span className="text-vermilion font-semibold tracking-mono">
                      commit {exp.hash}
                    </span>
                    <span className="text-muted">|</span>
                    <span className="text-secondary tracking-tight">{exp.period}</span>
                    <span className="text-muted hidden sm:inline">|</span>
                    <span className="text-muted hidden sm:inline">{exp.location}</span>
                  </div>

                  {/* Role & Company Card */}
                  <div className="border border-hairline bg-surface/40 p-5 sm:p-6 transition-all hover:border-hairline-bright">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-medium text-primary tracking-tight">
                          {exp.role}
                        </h3>
                        <div className="text-xs font-mono text-secondary tracking-mono mt-0.5">
                          {exp.company} — {exp.location}
                        </div>
                      </div>

                      {/* Expand / Collapse Action */}
                      <button
                        type="button"
                        onClick={() => toggleExpand(exp.id)}
                        className="self-start sm:self-center flex items-center space-x-2 px-2.5 py-1 text-xs font-mono bg-canvas border border-hairline hover:border-vermilion text-secondary hover:text-primary transition-colors"
                        aria-expanded={isExpanded}
                        aria-label={`${isExpanded ? 'Collapse' : 'Expand'} details for ${exp.role}`}
                      >
                        <span>{isExpanded ? '[-] COLLAPSE' : '[+] EXPAND (4)'}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* First bullet always visible */}
                    <div className="text-sm text-secondary leading-relaxed">
                      <div className="flex items-start space-x-2.5">
                        <span className="text-muted font-mono text-xs select-none">›</span>
                        <span>{exp.bullets[0]}</span>
                      </div>
                    </div>

                    {/* Collapsible remaining bullets */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden pt-3 mt-3 border-t border-hairline space-y-3"
                        >
                          {exp.bullets.slice(1).map((bullet, bIdx) => (
                            <div
                              key={bIdx}
                              className="flex items-start space-x-2.5 text-sm text-secondary leading-relaxed"
                            >
                              <span className="text-muted font-mono text-xs select-none">›</span>
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
