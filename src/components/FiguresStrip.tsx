import React, { useState, useEffect, useRef } from 'react';
import { metrics } from '@/data/experience';

export const FiguresStrip: React.FC = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) {
      setCounts(metrics.map((m) => m.value));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1200; // ms
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);

            const nextCounts = metrics.map((m) => Math.round(m.value * easeOut));
            setCounts(nextCounts);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts(metrics.map((m) => m.value));
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div
      ref={containerRef}
      className="border-b border-hairline py-12 md:py-16 bg-surface/20"
      aria-label="Key Performance Indicators"
    >
      <div className="max-w-spec mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-hairline">
          {metrics.map((m, idx) => (
            <div
              key={m.id}
              className={`flex flex-col justify-between pt-6 sm:pt-0 ${
                idx > 0 ? 'sm:pl-6 lg:pl-8' : ''
              }`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tighter text-primary tabular-nums">
                {counts[idx]}
                <span className="text-vermilion font-normal ml-0.5">{m.suffix}</span>
              </div>
              <div className="mt-3 space-y-1">
                <div className="font-mono text-[11px] sm:text-xs font-medium uppercase tracking-mono text-primary">
                  {m.label}
                </div>
                <div className="text-xs text-muted leading-tight">
                  {m.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
