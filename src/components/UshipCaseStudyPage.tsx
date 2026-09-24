import React, { useEffect } from 'react';
import { ushipCaseStudy } from '@/data/ushipCaseStudy';
import {
  ArrowLeft,
  ArrowUpRight,
  Download,
  Sun,
  Moon,
} from 'lucide-react';

interface UshipCaseStudyPageProps {
  onBack: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const UshipCaseStudyPage: React.FC<UshipCaseStudyPageProps> = ({
  onBack,
  theme,
  onToggleTheme,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-canvas text-primary selection:bg-vermilion selection:text-white pb-24">
      {/* Sticky Spec Header */}
      <header className="sticky top-0 z-40 w-full bg-canvas/95 border-b border-hairline transition-colors">
        <div className="max-w-spec mx-auto px-4 sm:px-8 h-14 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="group flex items-center space-x-2 font-mono text-xs text-secondary hover:text-vermilion transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>[ RETURN TO PORTFOLIO ]</span>
          </button>

          <div className="hidden md:flex items-center space-x-3 font-mono text-xs text-muted">
            <span className="text-primary font-semibold">USHIP SPEC</span>
            <span>//</span>
            <span>CASE STUDY 01</span>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={ushipCaseStudy.metadata.docUrl}
              download
              className="hidden sm:inline-flex items-center space-x-1.5 px-2.5 py-1 text-xs font-mono border border-hairline hover:border-vermilion text-secondary hover:text-primary transition-colors"
              title="Download original Case Study Document"
            >
              <Download className="w-3.5 h-3.5 text-vermilion" />
              <span>DOCX</span>
            </a>

            <a
              href={ushipCaseStudy.metadata.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1 text-xs font-mono bg-primary text-canvas hover:bg-vermilion hover:text-white transition-all font-medium"
            >
              <span>Live Website</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={onToggleTheme}
              className="p-1.5 text-secondary hover:text-primary border border-hairline transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-spec mx-auto px-4 sm:px-8 pt-12 md:pt-16 space-y-20">
        {/* Document Header Spec */}
        <section className="border-b border-hairline pb-12">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-hairline font-mono text-xs text-muted tracking-mono uppercase">
            <div className="flex items-center space-x-3">
              <span className="text-vermilion font-semibold">SPEC SHEET // CS-01</span>
              <span>|</span>
              <span>PROJECT: USHIP E-COMMERCE</span>
            </div>
            <div className="hidden sm:block text-secondary">
              REV: 2026.09 · PORTFOLIO READY
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-primary">
            {ushipCaseStudy.title}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-secondary max-w-[65ch] leading-relaxed">
            {ushipCaseStudy.subtitle}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 mt-8 border-t border-hairline font-mono text-xs">
            <div className="p-3 border border-hairline bg-surface/30">
              <div className="text-[10px] text-muted uppercase tracking-mono">Role</div>
              <div className="text-primary font-medium mt-1">{ushipCaseStudy.metadata.role}</div>
            </div>
            <div className="p-3 border border-hairline bg-surface/30">
              <div className="text-[10px] text-muted uppercase tracking-mono">Platform & Deployment</div>
              <div className="text-primary font-medium mt-1">Responsive Web · GitHub Pages</div>
            </div>
            <div className="p-3 border border-hairline bg-surface/30">
              <div className="text-[10px] text-muted uppercase tracking-mono">Core Tools</div>
              <div className="text-primary font-medium mt-1">{ushipCaseStudy.metadata.tools.join(' · ')}</div>
            </div>
            <div className="p-3 border border-hairline bg-surface/30">
              <div className="text-[10px] text-muted uppercase tracking-mono">Source Document</div>
              <a
                href={ushipCaseStudy.metadata.docUrl}
                download
                className="text-vermilion hover:underline flex items-center space-x-1 mt-1 font-medium"
              >
                <span>Uship_UX_UI_Case_Study.docx</span>
                <Download className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

        {/* 01. Project Overview */}
        <section className="border-b border-hairline pb-16 space-y-8">
          <div className="flex items-center space-x-3 pb-3 border-b border-hairline font-mono text-xs">
            <span className="text-vermilion font-bold">01 //</span>
            <span className="text-primary font-semibold tracking-mono uppercase">PROJECT OVERVIEW & SCOPE</span>
          </div>

          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-2xl font-medium tracking-tight text-primary">What is Uship?</h2>
                <p className="mt-3 text-base text-secondary leading-relaxed">
                  {ushipCaseStudy.overview.whatIsUship}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-primary">The Primary Objective</h3>
                <p className="mt-2 text-base text-secondary leading-relaxed">
                  {ushipCaseStudy.overview.goal}
                </p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 p-6 border border-hairline bg-surface/30 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-hairline font-mono text-xs text-muted uppercase">
                <span>MY RESPONSIBILITIES</span>
                <span>[6 KEY AREAS]</span>
              </div>
              <ul className="space-y-2.5 text-xs font-mono text-secondary">
                {ushipCaseStudy.overview.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-vermilion font-bold">›</span>
                    <span className="text-primary">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 02. User Research & Competitive Analysis */}
        <section className="border-b border-hairline pb-16 space-y-12">
          <div className="flex items-center space-x-3 pb-3 border-b border-hairline font-mono text-xs">
            <span className="text-vermilion font-bold">02 //</span>
            <span className="text-primary font-semibold tracking-mono uppercase">USER RESEARCH & COMPETITIVE BENCHMARKING</span>
          </div>

          <div>
            <h2 className="text-2xl font-medium tracking-tight text-primary mb-2">
              Competitive Analysis Framework
            </h2>
            <p className="text-sm text-secondary mb-6 max-w-[65ch]">
              Benchmarking established e-commerce industry patterns against Uship's restrained, user-centric approach.
            </p>

            <div className="border border-hairline overflow-x-auto">
              <table className="w-full text-left text-xs font-mono divide-y divide-hairline">
                <thead className="bg-surface/50 text-muted uppercase text-[10px] tracking-mono">
                  <tr>
                    <th className="py-3 px-4 w-1/5">UX Discipline</th>
                    <th className="py-3 px-4 w-2/5">Common Industry Pattern</th>
                    <th className="py-3 px-4 w-2/5 text-primary">Uship Approach</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  {ushipCaseStudy.competitiveAnalysis.map((row, idx) => (
                    <tr key={idx} className="hover:bg-surface/30 transition-colors">
                      <td className="py-3 px-4 text-primary font-semibold">{row.area}</td>
                      <td className="py-3 px-4 text-secondary">{row.commonPattern}</td>
                      <td className="py-3 px-4 text-primary font-medium bg-surface/20">
                        {row.ushipApproach}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* User Personas */}
          <div>
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-hairline font-mono text-xs text-muted uppercase">
              <span>TARGET USER PERSONAS</span>
              <span>FIG. 03 // 3 SHOPPER ARCHETYPES</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
              {ushipCaseStudy.personas.map((persona, idx) => (
                <div key={idx} className="p-5 border border-hairline bg-surface/30 space-y-4">
                  <div className="flex items-center justify-between border-b border-hairline pb-3">
                    <div>
                      <div className="text-sm font-semibold text-primary">{persona.name}</div>
                      <div className="text-[11px] text-muted">{persona.role} · Age {persona.age}</div>
                    </div>
                    <span className="px-2 py-0.5 text-[10px] bg-canvas border border-hairline text-vermilion">
                      P-0{idx + 1}
                    </span>
                  </div>

                  <p className="text-xs text-secondary leading-relaxed italic">
                    "{persona.tagline}"
                  </p>

                  <div className="space-y-2 pt-2 border-t border-hairline/60">
                    <div className="text-[10px] text-muted uppercase">Primary Goals:</div>
                    <ul className="text-xs text-secondary space-y-1">
                      {persona.goals.map((g, gi) => (
                        <li key={gi} className="flex items-start space-x-1.5">
                          <span className="text-vermilion">✓</span>
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-hairline/60">
                    <div className="text-[10px] text-muted uppercase">Core Need:</div>
                    <div className="text-xs text-primary font-medium">{persona.need}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03. Problem Definition */}
        <section className="border-b border-hairline pb-16 space-y-8">
          <div className="flex items-center space-x-3 pb-3 border-b border-hairline font-mono text-xs">
            <span className="text-vermilion font-bold">03 //</span>
            <span className="text-primary font-semibold tracking-mono uppercase">PROBLEM DEFINITION & DESIGN GOAL</span>
          </div>

          <div className="grid grid-cols-12 gap-8 items-stretch">
            <div className="col-span-12 lg:col-span-6 p-8 border border-hairline bg-surface/30 space-y-4">
              <span className="font-mono text-xs text-muted uppercase tracking-mono">The Fundamental Problem</span>
              <h3 className="text-2xl font-medium tracking-tight text-primary">
                Shopper Polarization & Cognitive Overload
              </h3>
              <p className="text-base text-secondary leading-relaxed">
                {ushipCaseStudy.problemStatement.coreProblem}
              </p>
            </div>

            <div className="col-span-12 lg:col-span-6 p-8 border border-vermilion bg-vermilion/5 space-y-4 flex flex-col justify-center">
              <span className="font-mono text-xs text-vermilion font-semibold uppercase tracking-mono">
                Central "How Might We" Question
              </span>
              <blockquote className="text-xl sm:text-2xl font-light text-primary leading-snug">
                "{ushipCaseStudy.problemStatement.howMightWe}"
              </blockquote>
            </div>
          </div>
        </section>

        {/* 04. Ideation & User Flows */}
        <section className="border-b border-hairline pb-16 space-y-8">
          <div className="flex items-center space-x-3 pb-3 border-b border-hairline font-mono text-xs">
            <span className="text-vermilion font-bold">04 //</span>
            <span className="text-primary font-semibold tracking-mono uppercase">IDEATION & THREE-TRACK USER JOURNEYS</span>
          </div>

          <p className="text-sm text-secondary max-w-[65ch]">
            Rather than forcing a single rigid linear funnel, Uship was architected to support three distinct behavioral entry channels:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            {ushipCaseStudy.userFlows.map((flow, i) => (
              <div key={i} className="p-6 border border-hairline bg-surface/30 space-y-4">
                <div className="flex items-center justify-between border-b border-hairline pb-3">
                  <span className="text-primary font-semibold text-sm">{flow.intent}</span>
                  <span className="text-vermilion text-[11px]">[{flow.pattern}]</span>
                </div>

                <div className="space-y-3 pt-2">
                  {flow.flow.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-center space-x-2">
                      <span className="w-5 h-5 rounded-none border border-hairline flex items-center justify-center text-[10px] text-muted bg-canvas">
                        0{sIdx + 1}
                      </span>
                      <span className="text-secondary font-medium">{step}</span>
                      {sIdx < flow.flow.length - 1 && (
                        <span className="text-muted ml-auto">↓</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 05. Prototyping & Visual Architecture */}
        <section className="border-b border-hairline pb-16 space-y-8">
          <div className="flex items-center space-x-3 pb-3 border-b border-hairline font-mono text-xs">
            <span className="text-vermilion font-bold">05 //</span>
            <span className="text-primary font-semibold tracking-mono uppercase">PROTOTYPING & ITERATIVE DESIGN PROGRESSION</span>
          </div>

          <div className="p-6 border border-hairline bg-surface/30">
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-hairline font-mono text-xs text-muted uppercase">
              <span>DESIGN PROGRESSION PIPELINE</span>
              <span>LIFECYCLE</span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-primary">
              <span className="px-3 py-2 border border-hairline bg-canvas">01 // IDEA & RESEARCH</span>
              <span className="text-vermilion">→</span>
              <span className="px-3 py-2 border border-hairline bg-canvas">02 // SKETCHES</span>
              <span className="text-vermilion">→</span>
              <span className="px-3 py-2 border border-hairline bg-canvas">03 // LOW-FIDELITY WIREFRAMES</span>
              <span className="text-vermilion">→</span>
              <span className="px-3 py-2 border border-hairline bg-canvas">04 // HIGH-FIDELITY PROTOTYPE</span>
              <span className="text-vermilion">→</span>
              <span className="px-3 py-2 border border-vermilion bg-canvas text-vermilion font-semibold">05 // PRODUCTION CODE</span>
            </div>
          </div>

          {/* Wireframe Architectural Blueprint */}
          <div className="border border-hairline bg-canvas p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-hairline font-mono text-[11px] text-muted uppercase tracking-mono">
              <span>FIG. 04 // STRUCTURAL INFORMATION ARCHITECTURE</span>
              <span>BLUEPRINT SPEC</span>
            </div>

            <div className="space-y-3 font-mono text-xs text-secondary">
              <div className="p-3 border border-dashed border-hairline bg-surface/30 flex items-center justify-between">
                <span>[HEADER] Logo / Brand · Global Top Search Bar · Quick Account &amp; Cart State</span>
                <span className="text-vermilion text-[10px]">STICKY VIEWPORT</span>
              </div>
              <div className="p-4 border border-hairline bg-surface/20 text-center text-primary font-semibold">
                [HERO BANNER] Clear Visual Value Proposition &amp; Primary "Shop Now" Direct CTA
              </div>
              <div className="grid grid-cols-4 gap-3 text-center">
                <div className="p-3 border border-hairline bg-surface/40">[CAT 01] Tech</div>
                <div className="p-3 border border-hairline bg-surface/40">[CAT 02] Apparel</div>
                <div className="p-3 border border-hairline bg-surface/40">[CAT 03] Living</div>
                <div className="p-3 border border-hairline bg-surface/40">[CAT 04] Essentials</div>
              </div>
              <div className="p-4 border border-hairline bg-surface/20 text-center">
                [RECENTLY ADDED PRODUCTS] Dynamic Responsive Product Grid with Pricing &amp; Instant Cart Action
              </div>
              <div className="p-3 border border-hairline bg-surface/30 flex items-center justify-between">
                <span>[CUSTOMER SUPPORT &amp; FOOTER] Transparent Returns, FAQ, Privacy Policy, Newsletter</span>
                <span className="text-muted text-[10px]">ORGANIZED FOOTER</span>
              </div>
            </div>
          </div>
        </section>

        {/* 06. Usability Testing & Empirical Validation */}
        <section className="border-b border-hairline pb-16 space-y-8">
          <div className="flex items-center space-x-3 pb-3 border-b border-hairline font-mono text-xs">
            <span className="text-vermilion font-bold">06 //</span>
            <span className="text-primary font-semibold tracking-mono uppercase">USABILITY TESTING & EMPIRICAL OUTCOMES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            {ushipCaseStudy.usabilityTasks.map((task) => (
              <div key={task.id} className="p-6 border border-hairline bg-surface/30 space-y-4">
                <div className="flex items-center justify-between border-b border-hairline pb-2">
                  <span className="text-vermilion font-bold">{task.id}</span>
                  <span className="text-primary font-semibold">{task.title}</span>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] text-muted uppercase">Task Goal:</div>
                  <p className="text-secondary">{task.goal}</p>
                </div>

                <div className="space-y-1 pt-2 border-t border-hairline/60">
                  <div className="text-[10px] text-muted uppercase">User Observation:</div>
                  <p className="text-secondary">{task.observation}</p>
                </div>

                <div className="space-y-1 pt-2 border-t border-hairline/60">
                  <div className="text-[10px] text-primary uppercase font-semibold">Design Iteration:</div>
                  <p className="text-primary font-medium">{task.response}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Triad of Usability */}
          <div className="p-6 border border-hairline bg-surface/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <span className="text-muted uppercase">Core Usability Formula:</span>
            <div className="flex items-center space-x-6 text-primary font-medium">
              <span>CLEAR</span>
              <span className="text-vermilion">·</span>
              <span>ORGANIZED</span>
              <span className="text-vermilion">·</span>
              <span>PREDICTABLE</span>
            </div>
            <span className="text-muted text-[11px]">"Where am I? What can I do? Where do I go next?"</span>
          </div>
        </section>

        {/* 07. Front-End Development & Technical Implementation */}
        <section className="border-b border-hairline pb-16 space-y-8">
          <div className="flex items-center space-x-3 pb-3 border-b border-hairline font-mono text-xs">
            <span className="text-vermilion font-bold">07 //</span>
            <span className="text-primary font-semibold tracking-mono uppercase">FRONT-END CODE & ENGINEERING SPEC</span>
          </div>

          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 lg:col-span-6 space-y-4">
              <h3 className="text-xl font-medium text-primary">Technology Architecture</h3>
              <p className="text-sm text-secondary leading-relaxed">
                Unlike purely theoretical UX designs, Uship was implemented as a production website using semantic HTML5, clean CSS3, and modular JavaScript without heavy frameworks.
              </p>

              <div className="space-y-3 font-mono text-xs pt-2">
                {ushipCaseStudy.developmentDetails.techStack.map((tech, i) => (
                  <div key={i} className="p-3 border border-hairline bg-surface/30">
                    <div className="text-primary font-semibold">{tech.name}</div>
                    <div className="text-secondary mt-1 text-[11px]">{tech.purpose}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 p-6 border border-hairline bg-surface/30 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-hairline font-mono text-xs text-muted uppercase">
                <span>ENGINEERING CHALLENGES OVERCOME</span>
                <span>PRODUCTION POLISH</span>
              </div>
              <ul className="space-y-3 font-mono text-xs text-secondary">
                {ushipCaseStudy.developmentDetails.challenges.map((chal, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-vermilion font-bold">›</span>
                    <span className="text-secondary leading-relaxed">{chal}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-hairline">
                <a
                  href={ushipCaseStudy.metadata.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 bg-primary text-canvas font-mono text-xs font-semibold uppercase tracking-mono hover:bg-vermilion hover:text-white transition-all"
                >
                  <span>Launch Live GitHub Pages Deployment</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 08. Reflection & Final Takeaways */}
        <section className="border-b border-hairline pb-16 space-y-8">
          <div className="flex items-center space-x-3 pb-3 border-b border-hairline font-mono text-xs">
            <span className="text-vermilion font-bold">08 //</span>
            <span className="text-primary font-semibold tracking-mono uppercase">REFLECTION & DESIGN-TO-CODE LESSONS</span>
          </div>

          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 lg:col-span-6 space-y-4">
              <h3 className="text-xl font-medium text-primary">The Meaning of Real UX</h3>
              <p className="text-base text-secondary leading-relaxed">
                {ushipCaseStudy.reflection.coreInsight}
              </p>
            </div>

            <div className="col-span-12 lg:col-span-6 space-y-4">
              <h3 className="text-xl font-medium text-primary">The Power of Designing &amp; Coding</h3>
              <p className="text-base text-secondary leading-relaxed">
                {ushipCaseStudy.reflection.designToCode}
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Navigation & Actions */}
        <section className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 pb-12 font-mono text-xs">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center space-x-2 px-6 py-3 border border-hairline hover:border-vermilion text-secondary hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO PORTFOLIO WORK</span>
          </button>

          <div className="flex items-center space-x-4">
            <a
              href={ushipCaseStudy.metadata.docUrl}
              download
              className="flex items-center space-x-2 px-6 py-3 border border-hairline hover:border-vermilion text-secondary hover:text-primary transition-colors"
            >
              <Download className="w-4 h-4 text-vermilion" />
              <span>DOWNLOAD CASE STUDY (.DOCX)</span>
            </a>

            <a
              href={ushipCaseStudy.metadata.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-primary text-canvas hover:bg-vermilion hover:text-white transition-all font-semibold"
            >
              <span>INSPECT LIVE WEBSITE</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};
