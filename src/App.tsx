import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { useTheme } from '@/hooks/useTheme';
import { SkipLink } from '@/components/SkipLink';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { FiguresStrip } from '@/components/FiguresStrip';
import { Work } from '@/components/Work';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { UshipCaseStudyPage } from '@/components/UshipCaseStudyPage';

// Lazy-load Command Palette for maximum performance
const CommandPalette = lazy(() =>
  import('@/components/CommandPalette').then((module) => ({
    default: module.CommandPalette,
  }))
);

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'portfolio' | 'uship-case-study'>(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#uship-case-study') {
      return 'uship-case-study';
    }
    return 'portfolio';
  });

  // Initialize Lenis with GSAP ScrollTrigger synchronization
  useLenis();

  // Listen to hash changes for browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#uship-case-study') {
        setCurrentView('uship-case-study');
      } else {
        setCurrentView('portfolio');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Global keyboard listener for CMD+K / CTRL+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenCaseStudy = (projectId: string) => {
    if (projectId === 'proj-uship') {
      window.location.hash = '#uship-case-study';
      setCurrentView('uship-case-study');
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  };

  const handleBackToPortfolio = () => {
    window.location.hash = '#work';
    setCurrentView('portfolio');
    setTimeout(() => {
      const el = document.getElementById('work');
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };

  if (currentView === 'uship-case-study') {
    return (
      <UshipCaseStudyPage
        onBack={handleBackToPortfolio}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    );
  }

  return (
    <div className="min-h-screen bg-canvas text-primary selection:bg-vermilion selection:text-white transition-colors duration-200">
      <SkipLink />

      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <FiguresStrip />
        <Work onOpenCaseStudy={handleOpenCaseStudy} />
        <Contact />
      </main>

      <Footer />

      <Suspense fallback={null}>
        {isCommandPaletteOpen && (
          <CommandPalette
            isOpen={isCommandPaletteOpen}
            onClose={() => setIsCommandPaletteOpen(false)}
            theme={theme}
            onToggleTheme={toggleTheme}
            onOpenCaseStudy={handleOpenCaseStudy}
          />
        )}
      </Suspense>
    </div>
  );
};

export default App;
