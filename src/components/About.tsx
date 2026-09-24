import React from 'react';
import { profile } from '@/data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-hairline">
      <div className="max-w-spec mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-12 border-b border-hairline gap-2">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs text-vermilion font-medium">01 //</span>
            <h2 className="font-mono text-sm tracking-mono uppercase text-primary font-semibold">
              ABOUT
            </h2>
          </div>
          <div className="flex items-center space-x-4 font-mono text-[11px] text-muted tracking-mono uppercase">
            <span>DISCIPLINE: SPECIFICATION & METHODS</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">{profile.location}</span>
          </div>
        </div>

        {/* Intro Statement: Large comfortable measure */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-10">
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-primary leading-snug tracking-tight">
              {profile.aboutIntro}
            </p>
          </div>
        </div>

        {/* Strengths & Expertise: Two-column definition list with hairlines */}
        <div className="mb-20">
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-hairline font-mono text-xs text-muted tracking-mono uppercase">
            <span>CORE COMPETENCIES & METHODOLOGIES</span>
            <span>6 MODULES</span>
          </div>

          <dl className="border-t border-hairline divide-y divide-hairline">
            {profile.expertise.map((item, idx) => (
              <div
                key={item.id}
                className="grid grid-cols-12 py-5 sm:py-6 gap-2 sm:gap-6 hover:bg-surface/50 transition-colors px-2 -mx-2"
              >
                <dt className="col-span-12 sm:col-span-4 lg:col-span-4 flex items-baseline space-x-3 font-mono text-xs">
                  <span className="text-muted text-[11px]">0{idx + 1}</span>
                  <span className="text-primary font-medium">{item.label}</span>
                </dt>
                <dd className="col-span-12 sm:col-span-8 lg:col-span-8 text-sm sm:text-base text-secondary leading-relaxed pl-6 sm:pl-0">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Toolbox: Compact grouped list in mono (no chips, no logos, no progress bars) */}
        <div>
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-hairline font-mono text-xs text-muted tracking-mono uppercase">
            <span>TECHNICAL TOOLBOX</span>
            <span>INDEXED CAPABILITIES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono">
            {profile.toolbox.map((group) => (
              <div
                key={group.category}
                className="p-5 border border-hairline bg-surface/30 space-y-3"
              >
                <div className="flex items-center justify-between border-b border-hairline pb-2">
                  <span className="text-xs uppercase font-semibold text-primary tracking-mono">
                    {group.category}
                  </span>
                  <span className="text-[10px] text-muted">[{group.items.length}]</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed tracking-tight">
                  {group.items.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
