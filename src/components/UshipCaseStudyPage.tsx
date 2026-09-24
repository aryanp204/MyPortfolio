import React, { useState, useEffect, useRef } from 'react';
import { ushipCaseStudy } from '@/data/ushipCaseStudy';
import {
  ArrowLeft,
  ArrowUpRight,
  Download,
  Sun,
  Moon,
  ChevronRight,
  ChevronLeft,
  Layers,
  List,
  Maximize2,
  X,
} from 'lucide-react';

interface UshipCaseStudyPageProps {
  onBack: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

interface TabDef {
  id: string;
  num: string;
  shortLabel: string;
  fullLabel: string;
}

const TABS: TabDef[] = [
  { id: 'overview', num: '01', shortLabel: 'Overview', fullLabel: 'Project Overview' },
  { id: 'research', num: '02', shortLabel: 'Research', fullLabel: 'Research & Personas' },
  { id: 'problem-flows', num: '03', shortLabel: 'Problem & Flows', fullLabel: 'Problem & Flows' },
  { id: 'wireframes', num: '04', shortLabel: 'Wireframes', fullLabel: 'Prototyping & Specs' },
  { id: 'testing', num: '05', shortLabel: 'Testing', fullLabel: 'Usability Testing' },
  { id: 'development', num: '06', shortLabel: 'Code', fullLabel: 'Front-End Code' },
  { id: 'reflection', num: '07', shortLabel: 'Reflection', fullLabel: 'Reflection & Brief' },
];

interface WireframeScreen {
  id: string;
  fig: string;
  title: string;
  badge: string;
  src: string;
  alt: string;
  dimensions: string;
  description: string;
  highlights: string[];
}

const WIREFRAME_SCREENS: WireframeScreen[] = [
  {
    id: 'wf-home',
    fig: 'FIG. 04A',
    title: 'Storefront Homepage & Product Discovery Wireframe',
    badge: 'HOMEPAGE // DISCOVERY',
    src: './images/home-uship.png',
    alt: 'Uship Homepage Wireframe & Discovery Layout',
    dimensions: '2160 × 2535 PX',
    description:
      'High-fidelity wireframe establishing primary navigation landmarks, persistent global search, prominent promotional hero container, 4-column quick-category tiles, and dynamic product showcase grid with direct cart action triggers.',
    highlights: [
      'Sticky header with high-contrast global search bar',
      'Hero promotional spotlight with direct "Shop Now" callout',
      '4-column categorical discovery quadrants (Tech, Apparel, Living, Essentials)',
      'Fluid responsive product grid with instant cart action buttons',
    ],
  },
  {
    id: 'wf-product',
    fig: 'FIG. 04B',
    title: 'Product Catalog Grid & Filtered Navigation Spec',
    badge: 'CATALOG // PRODUCT FEED',
    src: './images/product-uship.png',
    alt: 'Uship Product Catalog and Grid Interface Wireframe',
    dimensions: '2160 × 1815 PX',
    description:
      'Structured catalog layout optimizing browsing efficiency. Standardized aspect-ratio card containers with consistent pricing hierarchy, badges, and quick-add actions designed to reduce friction during multi-item inspection.',
    highlights: [
      'Standardized product card geometry & visual rhythm',
      'High-legibility pricing typography and discount tags',
      'Zero-latency add-to-cart and item inspection interactions',
      'Strict 24px grid gutter alignment preventing visual drift',
    ],
  },
  {
    id: 'wf-login',
    fig: 'FIG. 04C',
    title: 'User Authentication & Account Sign-In Flow',
    badge: 'AUTH // SIGN-IN',
    src: './images/login-uship.png',
    alt: 'Uship User Authentication Login Wireframe',
    dimensions: '2160 × 1455 PX',
    description:
      'Focused authentication modal/view designed to reduce checkout drop-off. Minimalist form fields with immediate client-side validation cues, password visibility toggle, and rapid recovery shortcuts.',
    highlights: [
      'Focused single-purpose card container with high contrast ratios',
      'Real-time field validation cues and accessible form labels',
      'Password visibility toggle and swift password recovery shortcuts',
      'Direct toggle pathway for new user registration',
    ],
  },
  {
    id: 'wf-register',
    fig: 'FIG. 04D',
    title: 'Onboarding & Customer Registration Wireframe',
    badge: 'AUTH // ONBOARDING',
    src: './images/register-uship.png',
    alt: 'Uship Customer Registration Form Wireframe',
    dimensions: '2160 × 1695 PX',
    description:
      'Clean onboarding architecture gathering essential customer data without cognitive fatigue. Streamlined input progression ensuring rapid progression to shopping within seconds.',
    highlights: [
      'Low-friction onboarding layout with clear helper text',
      'Accessible input labels with native keyboard support',
      'Explicit terms of service and privacy guarantees',
      'One-click transition to authenticated shopping state',
    ],
  },
];

export const UshipCaseStudyPage: React.FC<UshipCaseStudyPageProps> = ({
  onBack,
  theme,
  onToggleTheme,
}) => {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [viewMode, setViewMode] = useState<'tabs' | 'all'>('tabs');
  const [activeWireframeIdx, setActiveWireframeIdx] = useState<number | null>(null);
  const contentTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeWireframeIdx === null) return;
      if (e.key === 'Escape') {
        setActiveWireframeIdx(null);
      } else if (e.key === 'ArrowLeft') {
        setActiveWireframeIdx((prev) =>
          prev !== null ? (prev > 0 ? prev - 1 : WIREFRAME_SCREENS.length - 1) : null
        );
      } else if (e.key === 'ArrowRight') {
        setActiveWireframeIdx((prev) =>
          prev !== null ? (prev < WIREFRAME_SCREENS.length - 1 ? prev + 1 : 0) : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeWireframeIdx]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (contentTopRef.current) {
      const yOffset = -120;
      const y = contentTopRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  };

  const currentTabIdx = TABS.findIndex((t) => t.id === activeTab);
  const prevTab = currentTabIdx > 0 ? TABS[currentTabIdx - 1] : null;
  const nextTab = currentTabIdx < TABS.length - 1 ? TABS[currentTabIdx + 1] : null;

  return (
    <div className="min-h-screen bg-canvas text-primary selection:bg-vermilion selection:text-white pb-20">
      {/* Sticky Spec Top Header */}
      <header className="sticky top-0 z-40 w-full bg-canvas/95 backdrop-none border-b border-hairline transition-colors">
        <div className="max-w-spec mx-auto px-4 sm:px-8 h-14 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="group flex items-center space-x-1.5 font-mono text-xs text-secondary hover:text-vermilion transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span className="hidden sm:inline">[ RETURN TO PORTFOLIO ]</span>
            <span className="sm:hidden">[ BACK ]</span>
          </button>

          <div className="hidden md:flex items-center space-x-3 font-mono text-xs text-muted">
            <span className="text-primary font-semibold">USHIP SPEC</span>
            <span>//</span>
            <span>CASE STUDY 01</span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <a
              href={ushipCaseStudy.metadata.docUrl}
              download
              className="inline-flex items-center space-x-1 px-2.5 py-1 text-xs font-mono border border-hairline hover:border-vermilion text-secondary hover:text-primary transition-colors"
              title="Download original Case Study Document (.docx)"
            >
              <Download className="w-3.5 h-3.5 text-vermilion" />
              <span className="hidden sm:inline">DOCX</span>
            </a>

            <a
              href={ushipCaseStudy.metadata.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 px-2.5 sm:px-3 py-1 text-xs font-mono bg-primary text-canvas hover:bg-vermilion hover:text-white transition-all font-medium"
            >
              <span>Live Site</span>
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

      {/* Main Container */}
      <div className="max-w-spec mx-auto px-4 sm:px-8 pt-8 md:pt-12">
        {/* Document Header Hero */}
        <section className="border-b border-hairline pb-8 mb-6">
          <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-hairline font-mono text-[11px] text-muted tracking-mono uppercase gap-2">
            <div className="flex items-center space-x-2">
              <span className="text-vermilion font-bold">SPEC SHEET // CS-01</span>
              <span>|</span>
              <span>USHIP E-COMMERCE</span>
            </div>
            <div className="text-secondary">
              REV: 2026.09 · WATERLOO, ON
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tighter text-primary">
            {ushipCaseStudy.title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-secondary max-w-[65ch] leading-relaxed">
            {ushipCaseStudy.subtitle}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-6 mt-6 border-t border-hairline font-mono text-xs">
            <div className="p-3 border border-hairline bg-surface/30">
              <div className="text-[10px] text-muted uppercase">Role</div>
              <div className="text-primary font-medium mt-0.5 truncate">{ushipCaseStudy.metadata.role}</div>
            </div>
            <div className="p-3 border border-hairline bg-surface/30">
              <div className="text-[10px] text-muted uppercase">Platform & Deployment</div>
              <div className="text-primary font-medium mt-0.5 truncate">Responsive Web · GitHub Pages</div>
            </div>
            <div className="p-3 border border-hairline bg-surface/30">
              <div className="text-[10px] text-muted uppercase">Core Tools</div>
              <div className="text-primary font-medium mt-0.5 truncate">{ushipCaseStudy.metadata.tools.join(' · ')}</div>
            </div>
            <div className="p-3 border border-hairline bg-surface/30">
              <div className="text-[10px] text-muted uppercase">Source Document</div>
              <a
                href={ushipCaseStudy.metadata.docUrl}
                download
                className="text-vermilion hover:underline flex items-center space-x-1 mt-0.5 font-medium truncate"
              >
                <span>Uship_Case_Study.docx</span>
                <Download className="w-3 h-3 flex-shrink-0" />
              </a>
            </div>
          </div>
        </section>

        {/* Anchor mark for smooth tab scrolling */}
        <div ref={contentTopRef} />

        {/* Interactive Sticky Tab Bar: Solves boring vertical scroll on mobile! */}
        <nav
          className="sticky top-14 z-30 -mx-4 sm:-mx-8 px-4 sm:px-8 py-2.5 bg-canvas/95 border-b border-hairline mb-8"
          aria-label="Case Study Modules Navigation"
        >
          <div className="flex items-center justify-between gap-3">
            {/* Scrollable Tabs List */}
            <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar py-1 flex-1">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id && viewMode === 'tabs';
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setViewMode('tabs');
                      handleTabChange(tab.id);
                    }}
                    className={`whitespace-nowrap px-3 py-1.5 text-xs font-mono transition-all flex items-center space-x-1.5 border flex-shrink-0 ${
                      isActive
                        ? 'border-vermilion bg-surface text-vermilion font-semibold'
                        : 'border-hairline text-secondary hover:text-primary hover:border-hairline-bright bg-surface/20'
                    }`}
                  >
                    <span className={isActive ? 'text-vermilion' : 'text-muted'}>
                      {tab.num}
                    </span>
                    <span className="sm:hidden">{tab.shortLabel}</span>
                    <span className="hidden sm:inline">{tab.fullLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Desktop View Mode Toggle (Tabs vs All) */}
            <div className="hidden lg:flex items-center space-x-1 border border-hairline p-0.5 bg-surface text-[11px] font-mono flex-shrink-0">
              <button
                type="button"
                onClick={() => setViewMode('tabs')}
                className={`px-2 py-1 flex items-center space-x-1 ${
                  viewMode === 'tabs' ? 'bg-canvas text-vermilion font-medium' : 'text-secondary hover:text-primary'
                }`}
                title="View one module at a time with tabs"
              >
                <Layers className="w-3 h-3" />
                <span>TABS</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('all')}
                className={`px-2 py-1 flex items-center space-x-1 ${
                  viewMode === 'all' ? 'bg-canvas text-vermilion font-medium' : 'text-secondary hover:text-primary'
                }`}
                title="View all modules in continuous scroll"
              >
                <List className="w-3 h-3" />
                <span>ALL</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Tab Modules Content */}
        <div className="space-y-16">
          {/* TAB 01: Project Overview */}
          {(viewMode === 'all' || activeTab === 'overview') && (
            <section className="space-y-8 animate-in fade-in duration-200">
              <div className="flex items-center space-x-3 pb-3 border-b border-hairline font-mono text-xs">
                <span className="text-vermilion font-bold">01 //</span>
                <span className="text-primary font-semibold tracking-mono uppercase">
                  PROJECT OVERVIEW & SCOPE
                </span>
              </div>

              <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start">
                <div className="col-span-12 lg:col-span-7 space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-primary">
                      What is Uship?
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-secondary leading-relaxed">
                      {ushipCaseStudy.overview.whatIsUship}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-primary">
                      The Primary Objective
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-secondary leading-relaxed">
                      {ushipCaseStudy.overview.goal}
                    </p>
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-5 p-5 border border-hairline bg-surface/30 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-hairline font-mono text-xs text-muted uppercase">
                    <span>KEY RESPONSIBILITIES</span>
                    <span>[6 MODULES]</span>
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
          )}

          {/* TAB 02: Research & Personas */}
          {(viewMode === 'all' || activeTab === 'research') && (
            <section className="space-y-10 animate-in fade-in duration-200">
              <div className="flex items-center space-x-3 pb-3 border-b border-hairline font-mono text-xs">
                <span className="text-vermilion font-bold">02 //</span>
                <span className="text-primary font-semibold tracking-mono uppercase">
                  USER RESEARCH & COMPETITIVE BENCHMARKING
                </span>
              </div>

              {/* Competitive Analysis */}
              <div>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-primary mb-2">
                  Competitive Analysis Matrix
                </h2>
                <p className="text-xs sm:text-sm text-secondary mb-4 max-w-[65ch]">
                  Benchmarking established e-commerce industry patterns against Uship's clean, user-centric approach.
                </p>

                <div className="border border-hairline overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono divide-y divide-hairline min-w-[500px]">
                    <thead className="bg-surface/50 text-muted uppercase text-[10px] tracking-mono">
                      <tr>
                        <th className="py-2.5 px-3 w-1/4">UX Discipline</th>
                        <th className="py-2.5 px-3 w-3/8">Common Industry Pattern</th>
                        <th className="py-2.5 px-3 w-3/8 text-primary">Uship Approach</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-hairline">
                      {ushipCaseStudy.competitiveAnalysis.map((row, idx) => (
                        <tr key={idx} className="hover:bg-surface/30 transition-colors">
                          <td className="py-2.5 px-3 text-primary font-semibold">{row.area}</td>
                          <td className="py-2.5 px-3 text-secondary">{row.commonPattern}</td>
                          <td className="py-2.5 px-3 text-primary font-medium bg-surface/20">
                            {row.ushipApproach}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3 User Personas */}
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-hairline font-mono text-xs text-muted uppercase">
                  <span>TARGET USER PERSONAS</span>
                  <span>FIG. 03 // 3 SHOPPER ARCHETYPES</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-mono">
                  {ushipCaseStudy.personas.map((persona, idx) => (
                    <div key={idx} className="p-5 border border-hairline bg-surface/30 space-y-3.5">
                      <div className="flex items-center justify-between border-b border-hairline pb-2.5">
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

                      <div className="space-y-1.5 pt-2 border-t border-hairline/60">
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

                      <div className="space-y-1 pt-2 border-t border-hairline/60">
                        <div className="text-[10px] text-muted uppercase">Core Need:</div>
                        <div className="text-xs text-primary font-medium">{persona.need}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* TAB 03: Problem & Flows */}
          {(viewMode === 'all' || activeTab === 'problem-flows') && (
            <section className="space-y-8 animate-in fade-in duration-200">
              <div className="flex items-center space-x-3 pb-3 border-b border-hairline font-mono text-xs">
                <span className="text-vermilion font-bold">03 //</span>
                <span className="text-primary font-semibold tracking-mono uppercase">
                  PROBLEM DEFINITION & THREE-TRACK USER JOURNEYS
                </span>
              </div>

              {/* Problem Definition */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                <div className="p-6 border border-hairline bg-surface/30 space-y-3">
                  <span className="font-mono text-xs text-muted uppercase tracking-mono">The Problem Statement</span>
                  <h3 className="text-xl font-medium tracking-tight text-primary">
                    Polarized User Intent & Cognitive Clutter
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {ushipCaseStudy.problemStatement.coreProblem}
                  </p>
                </div>

                <div className="p-6 border border-vermilion bg-vermilion/5 space-y-3 flex flex-col justify-center">
                  <span className="font-mono text-xs text-vermilion font-semibold uppercase tracking-mono">
                    Central "How Might We" Question
                  </span>
                  <blockquote className="text-lg sm:text-xl font-light text-primary leading-snug">
                    "{ushipCaseStudy.problemStatement.howMightWe}"
                  </blockquote>
                </div>
              </div>

              {/* User Flows */}
              <div>
                <h3 className="text-lg font-medium text-primary mb-3">
                  Three Behavioral Shopping Pathways
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-mono text-xs">
                  {ushipCaseStudy.userFlows.map((flow, i) => (
                    <div key={i} className="p-5 border border-hairline bg-surface/30 space-y-3">
                      <div className="flex items-center justify-between border-b border-hairline pb-2.5">
                        <span className="text-primary font-semibold text-sm">{flow.intent}</span>
                        <span className="text-vermilion text-[11px]">[{flow.pattern}]</span>
                      </div>

                      <div className="space-y-2 pt-1">
                        {flow.flow.map((step, sIdx) => (
                          <div key={sIdx} className="flex items-center space-x-2">
                            <span className="w-5 h-5 border border-hairline flex items-center justify-center text-[10px] text-muted bg-canvas">
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
              </div>
            </section>
          )}

          {/* TAB 04: Wireframes & Blueprint */}
          {(viewMode === 'all' || activeTab === 'wireframes') && (
            <section className="space-y-8 animate-in fade-in duration-200">
              <div className="flex items-center space-x-3 pb-3 border-b border-hairline font-mono text-xs">
                <span className="text-vermilion font-bold">04 //</span>
                <span className="text-primary font-semibold tracking-mono uppercase">
                  PROTOTYPING &amp; WIREFRAME SPECIFICATIONS
                </span>
              </div>

              {/* Design Progression Pipeline */}
              <div className="p-5 border border-hairline bg-surface/30">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-hairline font-mono text-xs text-muted uppercase">
                  <span>DESIGN PROGRESSION PIPELINE</span>
                  <span>LIFECYCLE</span>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs text-primary">
                  <span className="px-2.5 py-1.5 border border-hairline bg-canvas">01 // IDEA & RESEARCH</span>
                  <span className="text-vermilion">→</span>
                  <span className="px-2.5 py-1.5 border border-hairline bg-canvas">02 // SKETCHES</span>
                  <span className="text-vermilion">→</span>
                  <span className="px-2.5 py-1.5 border border-hairline bg-canvas">03 // LO-FI WIREFRAMES</span>
                  <span className="text-vermilion">→</span>
                  <span className="px-2.5 py-1.5 border border-hairline bg-canvas">04 // HI-FI PROTOTYPE</span>
                  <span className="text-vermilion">→</span>
                  <span className="px-2.5 py-1.5 border border-vermilion bg-canvas text-vermilion font-semibold">05 // PRODUCTION CODE</span>
                </div>
              </div>

              {/* Blueprint Wireframe Spec */}
              <div className="border border-hairline bg-canvas p-5 sm:p-7 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-hairline font-mono text-[11px] text-muted uppercase tracking-mono">
                  <span>FIG. 04 // STRUCTURAL INFORMATION ARCHITECTURE</span>
                  <span>BLUEPRINT SPEC</span>
                </div>

                <div className="space-y-3 font-mono text-xs text-secondary">
                  <div className="p-3 border border-dashed border-hairline bg-surface/30 flex items-center justify-between">
                    <span>[HEADER] Logo / Brand · Global Top Search Bar · Quick Account &amp; Cart State</span>
                    <span className="text-vermilion text-[10px]">STICKY</span>
                  </div>
                  <div className="p-4 border border-hairline bg-surface/20 text-center text-primary font-semibold">
                    [HERO BANNER] Clear Visual Value Proposition &amp; Primary "Shop Now" Direct CTA
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px]">
                    <div className="p-2.5 border border-hairline bg-surface/40">[CAT 01] Tech</div>
                    <div className="p-2.5 border border-hairline bg-surface/40">[CAT 02] Apparel</div>
                    <div className="p-2.5 border border-hairline bg-surface/40">[CAT 03] Living</div>
                    <div className="p-2.5 border border-hairline bg-surface/40">[CAT 04] Essentials</div>
                  </div>
                  <div className="p-3.5 border border-hairline bg-surface/20 text-center">
                    [RECENTLY ADDED PRODUCTS] Dynamic Responsive Product Grid with Pricing &amp; Cart Action
                  </div>
                  <div className="p-3 border border-hairline bg-surface/30 flex items-center justify-between">
                    <span>[CUSTOMER SUPPORT &amp; FOOTER] Transparent Returns, FAQ, Policy, Newsletter</span>
                    <span className="text-muted text-[10px]">FOOTER HUB</span>
                  </div>
                </div>
              </div>

              {/* Wireframe Prototyping Showcase */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-hairline font-mono text-xs gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-vermilion font-bold">FIG. 04 //</span>
                    <span className="text-primary font-semibold tracking-mono uppercase">
                      WIREFRAME PROTOTYPES &amp; UI SPECIFICATIONS
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted text-[11px]">
                    <span>4 HIGH-RES WIREFRAMES</span>
                    <span>·</span>
                    <span className="text-vermilion font-medium">[ CLICK ANY SCREEN TO INSPECT SPEC ]</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {WIREFRAME_SCREENS.map((screen, idx) => (
                    <div
                      key={screen.id}
                      onClick={() => setActiveWireframeIdx(idx)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveWireframeIdx(idx);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`Inspect ${screen.title} wireframe specification`}
                      className="group border border-hairline hover:border-vermilion bg-surface/30 hover:bg-surface/50 transition-all p-4 space-y-4 cursor-pointer relative text-left focus:outline-none focus:ring-1 focus:ring-vermilion"
                    >
                      {/* Top Spec Card Bar */}
                      <div className="flex items-center justify-between font-mono text-[11px] pb-2 border-b border-hairline">
                        <div className="flex items-center space-x-2">
                          <span className="text-vermilion font-bold">{screen.fig}</span>
                          <span className="text-muted">//</span>
                          <span className="text-primary font-medium uppercase tracking-mono">
                            {screen.badge}
                          </span>
                        </div>
                        <span className="text-[10px] text-muted px-1.5 py-0.5 border border-hairline bg-canvas">
                          {screen.dimensions}
                        </span>
                      </div>

                      {/* Image Thumbnail with Overlay Zoom Hint */}
                      <div className="aspect-[16/10] overflow-hidden bg-surface-subtle border border-hairline relative">
                        <img
                          src={screen.src}
                          alt={screen.alt}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-canvas/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                          <div className="px-3 py-1.5 bg-canvas/90 border border-vermilion text-vermilion font-mono text-xs flex items-center space-x-2 shadow-lg">
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span className="font-semibold tracking-mono">INSPECT SPEC</span>
                          </div>
                        </div>
                      </div>

                      {/* Text & Specification Breakdown */}
                      <div className="space-y-2.5">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-semibold text-primary group-hover:text-vermilion transition-colors">
                            {screen.title}
                          </h4>
                          <span className="text-muted group-hover:text-vermilion transition-colors flex-shrink-0 pt-0.5">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </span>
                        </div>

                        <p className="text-xs text-secondary leading-relaxed">
                          {screen.description}
                        </p>

                        <div className="pt-2 border-t border-hairline/60">
                          <div className="text-[10px] font-mono text-muted uppercase mb-1.5">
                            Key Wireframe Specifications:
                          </div>
                          <ul className="space-y-1 text-xs font-mono text-secondary">
                            {screen.highlights.map((h, hi) => (
                              <li key={hi} className="flex items-start space-x-2">
                                <span className="text-vermilion font-bold">›</span>
                                <span className="text-primary">{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* TAB 05: Usability Testing */}
          {(viewMode === 'all' || activeTab === 'testing') && (
            <section className="space-y-8 animate-in fade-in duration-200">
              <div className="flex items-center space-x-3 pb-3 border-b border-hairline font-mono text-xs">
                <span className="text-vermilion font-bold">05 //</span>
                <span className="text-primary font-semibold tracking-mono uppercase">
                  USABILITY TESTING & EMPIRICAL VALIDATION
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-mono text-xs">
                {ushipCaseStudy.usabilityTasks.map((task) => (
                  <div key={task.id} className="p-5 border border-hairline bg-surface/30 space-y-3.5">
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

              {/* Usability Formula */}
              <div className="p-5 border border-hairline bg-surface/20 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
                <span className="text-muted uppercase text-[11px]">Core Usability Formula:</span>
                <div className="flex items-center space-x-4 text-primary font-semibold">
                  <span>CLEAR</span>
                  <span className="text-vermilion">·</span>
                  <span>ORGANIZED</span>
                  <span className="text-vermilion">·</span>
                  <span>PREDICTABLE</span>
                </div>
                <span className="text-muted text-[10px]">"Where am I? What can I do? Where do I go next?"</span>
              </div>
            </section>
          )}

          {/* TAB 06: Front-End Code */}
          {(viewMode === 'all' || activeTab === 'development') && (
            <section className="space-y-8 animate-in fade-in duration-200">
              <div className="flex items-center space-x-3 pb-3 border-b border-hairline font-mono text-xs">
                <span className="text-vermilion font-bold">06 //</span>
                <span className="text-primary font-semibold tracking-mono uppercase">
                  FRONT-END ENGINEERING & DEPLOYMENT
                </span>
              </div>

              <div className="grid grid-cols-12 gap-6 items-start">
                <div className="col-span-12 lg:col-span-6 space-y-4">
                  <h3 className="text-xl font-medium text-primary">Technology Architecture</h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    Unlike theoretical design concepts, Uship was engineered into a functional, production-ready website using semantic HTML5, pure CSS3, and modular vanilla JavaScript.
                  </p>

                  <div className="space-y-2.5 font-mono text-xs pt-1">
                    {ushipCaseStudy.developmentDetails.techStack.map((tech, i) => (
                      <div key={i} className="p-3 border border-hairline bg-surface/30">
                        <div className="text-primary font-semibold">{tech.name}</div>
                        <div className="text-secondary mt-0.5 text-[11px]">{tech.purpose}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-6 p-5 border border-hairline bg-surface/30 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-hairline font-mono text-xs text-muted uppercase">
                    <span>CHALLENGES SOLVED</span>
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
          )}

          {/* TAB 07: Reflection */}
          {(viewMode === 'all' || activeTab === 'reflection') && (
            <section className="space-y-8 animate-in fade-in duration-200">
              <div className="flex items-center space-x-3 pb-3 border-b border-hairline font-mono text-xs">
                <span className="text-vermilion font-bold">07 //</span>
                <span className="text-primary font-semibold tracking-mono uppercase">
                  REFLECTION & DESIGN-TO-CODE TAKEAWAYS
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="p-6 border border-hairline bg-surface/30 space-y-3">
                  <h3 className="text-lg font-medium text-primary">The Meaning of Real UX</h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {ushipCaseStudy.reflection.coreInsight}
                  </p>
                </div>

                <div className="p-6 border border-hairline bg-surface/30 space-y-3">
                  <h3 className="text-lg font-medium text-primary">The Power of Designing &amp; Coding</h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {ushipCaseStudy.reflection.designToCode}
                  </p>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Tab Pagination Controls: Instant Next / Previous navigation on mobile & desktop */}
        {viewMode === 'tabs' && (
          <div className="pt-10 border-t border-hairline flex items-center justify-between gap-4 font-mono text-xs">
            {prevTab ? (
              <button
                type="button"
                onClick={() => handleTabChange(prevTab.id)}
                className="flex items-center space-x-2 px-4 py-2.5 border border-hairline hover:border-vermilion text-secondary hover:text-primary transition-colors bg-surface/30"
              >
                <ChevronLeft className="w-4 h-4 text-vermilion" />
                <span className="hidden sm:inline">PREV: {prevTab.fullLabel}</span>
                <span className="sm:hidden">PREV: {prevTab.shortLabel}</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={onBack}
                className="flex items-center space-x-1.5 px-4 py-2.5 border border-hairline hover:border-vermilion text-secondary hover:text-primary transition-colors bg-surface/30"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>PORTFOLIO</span>
              </button>
            )}

            <span className="text-muted text-[11px] hidden sm:inline">
              MODULE {currentTabIdx + 1} OF {TABS.length}
            </span>

            {nextTab ? (
              <button
                type="button"
                onClick={() => handleTabChange(nextTab.id)}
                className="flex items-center space-x-2 px-4 py-2.5 border border-hairline hover:border-vermilion text-primary font-medium hover:text-vermilion transition-colors bg-surface/30"
              >
                <span className="hidden sm:inline">NEXT: {nextTab.fullLabel}</span>
                <span className="sm:hidden">NEXT: {nextTab.shortLabel}</span>
                <ChevronRight className="w-4 h-4 text-vermilion" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onBack}
                className="flex items-center space-x-1.5 px-4 py-2.5 bg-primary text-canvas hover:bg-vermilion hover:text-white transition-all font-semibold"
              >
                <span>BACK TO WORK</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}

        {/* Global Footer Actions */}
        <section className="pt-12 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <button
            type="button"
            onClick={onBack}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-5 py-3 border border-hairline hover:border-vermilion text-secondary hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO PORTFOLIO</span>
          </button>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
            <a
              href={ushipCaseStudy.metadata.docUrl}
              download
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-5 py-3 border border-hairline hover:border-vermilion text-secondary hover:text-primary transition-colors"
            >
              <Download className="w-4 h-4 text-vermilion" />
              <span>DOWNLOAD SPEC (.DOCX)</span>
            </a>

            <a
              href={ushipCaseStudy.metadata.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-5 py-3 bg-primary text-canvas hover:bg-vermilion hover:text-white transition-all font-semibold"
            >
              <span>INSPECT LIVE SITE</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>

      {/* Full-Screen Wireframe Spec Lightbox Modal */}
      {activeWireframeIdx !== null && WIREFRAME_SCREENS[activeWireframeIdx] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={WIREFRAME_SCREENS[activeWireframeIdx].title}
          className="fixed inset-0 z-50 bg-canvas/95 backdrop-blur-md flex flex-col justify-between overflow-hidden animate-in fade-in duration-200"
          onClick={() => setActiveWireframeIdx(null)}
        >
          {/* Lightbox Top Header Bar */}
          <div
            className="w-full bg-surface/90 border-b border-hairline px-4 sm:px-8 py-3 flex items-center justify-between z-10 flex-shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-3 font-mono text-xs">
              <span className="text-vermilion font-bold">
                {WIREFRAME_SCREENS[activeWireframeIdx].fig}
              </span>
              <span className="text-muted hidden sm:inline">//</span>
              <span className="text-primary font-semibold truncate max-w-[240px] sm:max-w-md">
                {WIREFRAME_SCREENS[activeWireframeIdx].title}
              </span>
              <span className="hidden md:inline px-2 py-0.5 text-[10px] bg-canvas border border-hairline text-secondary">
                {WIREFRAME_SCREENS[activeWireframeIdx].dimensions}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="hidden sm:inline font-mono text-[11px] text-muted">
                {activeWireframeIdx + 1} / {WIREFRAME_SCREENS.length} · [ESC TO CLOSE]
              </span>
              <button
                type="button"
                onClick={() => setActiveWireframeIdx(null)}
                className="p-1.5 border border-hairline hover:border-vermilion text-secondary hover:text-primary transition-colors flex items-center space-x-1 font-mono text-xs"
                title="Close modal (Esc)"
              >
                <X className="w-4 h-4 text-vermilion" />
                <span className="hidden sm:inline">CLOSE</span>
              </button>
            </div>
          </div>

          {/* Lightbox Viewport with Side Navigation */}
          <div
            className="flex-1 relative flex items-center justify-center p-3 sm:p-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Screen Button */}
            <button
              type="button"
              onClick={() =>
                setActiveWireframeIdx(
                  activeWireframeIdx > 0 ? activeWireframeIdx - 1 : WIREFRAME_SCREENS.length - 1
                )
              }
              className="absolute left-2 sm:left-6 z-20 p-2 sm:p-3 bg-surface/80 border border-hairline hover:border-vermilion text-primary hover:text-vermilion transition-all backdrop-blur-sm shadow-lg"
              title="Previous Wireframe (Left Arrow)"
              aria-label="Previous Wireframe"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Main Image Container */}
            <div className="max-h-[66vh] sm:max-h-[72vh] max-w-full overflow-auto border border-hairline bg-surface-subtle shadow-2xl p-1 sm:p-2 flex items-center justify-center">
              <img
                src={WIREFRAME_SCREENS[activeWireframeIdx].src}
                alt={WIREFRAME_SCREENS[activeWireframeIdx].alt}
                className="max-h-[62vh] sm:max-h-[68vh] w-auto object-contain select-none"
              />
            </div>

            {/* Next Screen Button */}
            <button
              type="button"
              onClick={() =>
                setActiveWireframeIdx(
                  activeWireframeIdx < WIREFRAME_SCREENS.length - 1 ? activeWireframeIdx + 1 : 0
                )
              }
              className="absolute right-2 sm:right-6 z-20 p-2 sm:p-3 bg-surface/80 border border-hairline hover:border-vermilion text-primary hover:text-vermilion transition-all backdrop-blur-sm shadow-lg"
              title="Next Wireframe (Right Arrow)"
              aria-label="Next Wireframe"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Lightbox Bottom Spec Bar */}
          <div
            className="w-full bg-surface/95 border-t border-hairline px-4 sm:px-8 py-3.5 z-10 flex-shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-spec mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono text-xs">
              <div className="space-y-1 max-w-3xl">
                <div className="flex items-center space-x-2">
                  <span className="text-vermilion font-bold text-[11px] uppercase tracking-mono">
                    [{WIREFRAME_SCREENS[activeWireframeIdx].badge}]
                  </span>
                  <span className="text-primary font-medium">
                    {WIREFRAME_SCREENS[activeWireframeIdx].title}
                  </span>
                </div>
                <p className="text-[11px] text-secondary leading-relaxed line-clamp-2 md:line-clamp-none">
                  {WIREFRAME_SCREENS[activeWireframeIdx].description}
                </p>
              </div>

              {/* Wireframe thumbnail selector */}
              <div className="flex items-center space-x-2 flex-shrink-0 self-end md:self-auto">
                {WIREFRAME_SCREENS.map((wf, idx) => (
                  <button
                    key={wf.id}
                    type="button"
                    onClick={() => setActiveWireframeIdx(idx)}
                    className={`px-2 py-1 text-[10px] font-mono border transition-all ${
                      idx === activeWireframeIdx
                        ? 'border-vermilion bg-vermilion/10 text-vermilion font-semibold'
                        : 'border-hairline text-muted hover:text-primary hover:border-hairline-bright bg-surface/40'
                    }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
