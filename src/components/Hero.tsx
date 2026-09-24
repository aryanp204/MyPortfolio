import React, { useEffect, useRef } from 'react';
import { profile } from '@/data/profile';
import gsap from 'gsap';
import SplitType from 'split-type';
import { FileText } from 'lucide-react';

export const Hero: React.FC = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced || !nameRef.current) return;

    let splitInstance: SplitType | null = null;
    const ctx = gsap.context(() => {
      try {
        splitInstance = new SplitType(nameRef.current!, {
          types: 'lines',
          lineClass: 'split-line',
        });

        if (splitInstance.lines) {
          splitInstance.lines.forEach((line) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'line-mask-wrapper';
            line.parentNode?.insertBefore(wrapper, line);
            wrapper.appendChild(line);
          });

          gsap.from(splitInstance.lines, {
            yPercent: 120,
            duration: 0.6,
            stagger: 0.06,
            ease: 'power3.out',
          });
        }
      } catch (err) {
        console.warn('SplitType animation error:', err);
      }
    }, containerRef);

    return () => {
      ctx.revert();
      if (splitInstance) {
        splitInstance.revert();
      }
    };
  }, []);

  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const workEl = document.getElementById('work');
    if (workEl) {
      const yOffset = -70;
      const y = workEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative pt-12 md:pt-20 pb-16 md:pb-24 border-b border-hairline"
    >
      <div className="max-w-spec mx-auto px-4 sm:px-8">
        {/* Status Line */}
        <div className="flex items-center pb-6 mb-6 border-b border-hairline font-mono text-[11px] text-muted tracking-mono uppercase">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-vermilion animate-pulse" />
            <span className="text-secondary font-medium">{profile.status}</span>
          </div>
        </div>

        {/* Typographic Hero: Aryan Patel */}
        <div className="mb-6">
          <h1
            ref={nameRef}
            className="text-[clamp(3.2rem,8.5vw,7.5rem)] font-semibold leading-[0.95] tracking-tighter text-primary uppercase select-none"
          >
            {profile.name}
          </h1>
          <p className="mt-4 text-lg md:text-xl font-normal text-secondary tracking-tight">
            {profile.headline}
          </p>
        </div>

        {/* 12-Column Grid Layout */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 pt-8 border-t border-hairline items-start">
          {/* Main Content Column: 7 of 12 cols */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            {/* Bio paragraph */}
            <p className="text-base sm:text-lg leading-relaxed text-secondary max-w-[65ch]">
              {profile.bio}
            </p>

            {/* Technical Metadata Row */}
            <div className="py-4 border-y border-hairline grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="flex flex-col space-y-1">
                <span className="text-muted uppercase text-[10px] tracking-mono">Role Specification</span>
                <span className="text-primary font-medium">{profile.metadata.roleSpec}</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-muted uppercase text-[10px] tracking-mono">Core Stack</span>
                <span className="text-primary font-medium">{profile.metadata.stackSpec}</span>
              </div>
            </div>

            {/* Two CTAs: Primary Resume + Text Link View work */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a
                href={profile.resumeUrl}
                download="AryanPatel_Resume.docx"
                className="inline-flex items-center space-x-2.5 px-6 py-3 bg-primary text-canvas font-mono text-xs font-semibold uppercase tracking-mono hover:bg-vermilion hover:text-white transition-all focus:outline-none"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>

              <a
                href="#work"
                onClick={handleScrollToWork}
                className="group inline-flex items-center space-x-1.5 font-mono text-xs font-medium uppercase tracking-mono text-secondary hover:text-vermilion transition-colors py-2"
              >
                <span>View work</span>
                <span className="text-vermilion font-semibold group-hover:translate-y-0.5 transition-transform">↓</span>
              </a>
            </div>
          </div>

          {/* Image Column: 5 of 12 cols */}
          <div className="col-span-12 lg:col-span-5">
            <div className="border border-hairline bg-surface p-2">
              <div className="overflow-hidden aspect-[4/4] sm:aspect-[4/3] lg:aspect-[4/4] bg-surface-subtle">
                <img
                  src="./images/hero-section.png"
                  alt="Aryan Patel portrait"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover grayscale contrast-[1.08] hover:grayscale-0 hover:contrast-100 transition-all duration-700"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="mt-2.5 px-1 flex items-center justify-between font-mono text-[11px] text-muted tracking-mono uppercase">
                <span>FIG. 01 // OPERATOR SPEC</span>
                <span>{profile.coordinates}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
