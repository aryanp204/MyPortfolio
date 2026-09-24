import React, { useState } from 'react';
import { projects, ProjectItem } from '@/data/projects';
import { ArrowUpRight, FileText } from 'lucide-react';

interface WorkProps {
  onOpenCaseStudy?: (projectId: string) => void;
}

export const Work: React.FC<WorkProps> = ({ onOpenCaseStudy }) => {
  const [hoveredProject, setHoveredProject] = useState<ProjectItem | null>(projects[0]);

  return (
    <section id="work" className="py-16 md:py-24 border-b border-hairline">
      <div className="max-w-spec mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-12 border-b border-hairline gap-2">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs text-vermilion font-medium">02 //</span>
            <h2 className="font-mono text-sm tracking-mono uppercase text-primary font-semibold">
              WORK & PRODUCTION RELEASES
            </h2>
          </div>
          <div className="flex items-center space-x-4 font-mono text-[11px] text-muted tracking-mono uppercase">
            <span>INDEX TABLE // 4 DEPLOYED SYSTEMS</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">EXTERNAL REPOSITORIES</span>
          </div>
        </div>

        {/* Index Table Layout: Split with active typographic preview on large screens */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Table List: 8 of 12 cols (or full on mobile) */}
          <div className="col-span-12 lg:col-span-8 border-t border-hairline divide-y divide-hairline">
            {projects.map((project) => {
              const isHovered = hoveredProject?.id === project.id;
              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredProject(project)}
                  onFocus={() => setHoveredProject(project)}
                  className={`group py-6 px-3 -mx-3 transition-colors ${
                    isHovered ? 'bg-surface/50 border-l-2 border-l-vermilion pl-4' : 'hover:bg-surface/30'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                    {/* Index & Name */}
                    <div className="flex items-baseline space-x-3 sm:space-x-4">
                      <span className="font-mono text-xs text-muted tabular-nums">
                        {project.index}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl sm:text-2xl font-medium text-primary tracking-tight transition-transform duration-150 group-hover:translate-x-1.5 hover:text-vermilion"
                          >
                            {project.name}
                          </a>
                          <span className="inline-block lg:hidden font-mono text-[10px] text-muted tracking-mono uppercase">
                            [{project.category}]
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-secondary leading-relaxed max-w-[55ch]">
                          {project.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons: Case Study + Redirection */}
                    <div className="flex-shrink-0 flex items-center space-x-2 pl-6 sm:pl-0 sm:pt-1">
                      {project.hasCaseStudy && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onOpenCaseStudy?.(project.id);
                          }}
                          className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-canvas border border-hairline hover:border-vermilion text-secondary hover:text-primary transition-all text-xs font-mono font-medium focus:outline-none"
                          title="View Uship UX/UI Case Study"
                        >
                          <FileText className="w-3.5 h-3.5 text-vermilion" />
                          <span className="font-medium">Case Study</span>
                          <span className="text-vermilion font-bold">→</span>
                        </button>
                      )}

                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-hairline group-hover:border-vermilion group-hover:bg-vermilion/10 text-muted group-hover:text-vermilion transition-all inline-block"
                        title={`Open live project ${project.name} in new tab`}
                        aria-label={`Open live project ${project.name} in new tab`}
                      >
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Typographic Preview Spec Panel: 4 of 12 cols */}
          <div className="hidden lg:block col-span-4 sticky top-24">
            <div className="border border-hairline bg-surface p-6 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-hairline font-mono text-[11px] text-muted tracking-mono uppercase">
                <span>PROJECT SPEC VIEW</span>
                <span>FIG. 02 // LIVE INDEX</span>
              </div>

              {hoveredProject && (
                <div className="space-y-4">
                  {/* Visual Preview / Blueprint Panel */}
                  <div className="aspect-[16/10] bg-canvas border border-hairline flex flex-col justify-between relative overflow-hidden group/img">
                    {hoveredProject.id === 'proj-uship' ? (
                      <>
                        <img
                          src="./images/home-uship.png"
                          alt="Uship E-Commerce Interface Preview"
                          className="absolute inset-0 w-full h-full object-cover object-top contrast-[1.05] grayscale group-hover/img:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/20 to-transparent pointer-events-none" />
                        <div className="relative z-10 p-3 flex items-center justify-between font-mono text-[10px] text-primary bg-canvas/80 border-b border-hairline/60">
                          <span className="font-semibold text-vermilion">LIVE PRODUCTION PREVIEW</span>
                          <span>200 OK</span>
                        </div>
                        <div className="relative z-10 p-3 font-mono text-[10px] text-muted truncate bg-canvas/80 border-t border-hairline/60">
                          {hoveredProject.url}
                        </div>
                      </>
                    ) : (
                      <div className="p-4 flex flex-col justify-between h-full">
                        <div className="flex items-center justify-between font-mono text-[10px] text-muted">
                          <span>DEPLOYMENT: GITHUB PAGES</span>
                          <span className="text-vermilion">STATUS: 200 OK</span>
                        </div>

                        <div className="my-auto text-center space-y-1">
                          <div className="font-mono text-xs text-secondary tracking-mono uppercase">
                            [{hoveredProject.category}]
                          </div>
                          <div className="text-2xl font-semibold tracking-tighter text-primary">
                            {hoveredProject.name}
                          </div>
                        </div>

                        <div className="font-mono text-[10px] text-muted truncate border-t border-hairline/60 pt-2">
                          {hoveredProject.url}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="font-mono text-xs text-primary font-medium">
                      {hoveredProject.name}
                    </div>
                    <p className="text-xs text-secondary leading-relaxed">
                      {hoveredProject.tagline}
                    </p>

                    {/* Dedicated Case Study CTA on preview panel */}
                    {hoveredProject.hasCaseStudy && (
                      <div className="pt-3">
                        <button
                          type="button"
                          onClick={() => onOpenCaseStudy?.(hoveredProject.id)}
                          className="w-full inline-flex items-center justify-center space-x-2 py-2.5 bg-canvas border border-hairline hover:border-vermilion text-primary font-mono text-xs font-semibold uppercase tracking-mono hover:text-vermilion transition-all"
                        >
                          <FileText className="w-3.5 h-3.5 text-vermilion" />
                          <span>Open UX/UI Case Study →</span>
                        </button>
                      </div>
                    )}

                    <div className="pt-2 flex items-center justify-between font-mono text-[10px] text-muted">
                      <span>TYPE: PRODUCTION DEMO</span>
                      <a
                        href={hoveredProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-vermilion hover:underline"
                      >
                        VISIT SITE ↗
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
