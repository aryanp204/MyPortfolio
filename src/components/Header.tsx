import React, { useState, useEffect } from 'react';
import { Sun, Moon, Command, Menu, X } from 'lucide-react';

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenCommandPalette: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  onOpenCommandPalette,
}) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'work', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'work', label: 'WORK' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // Header height offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-canvas/95 backdrop-none border-b border-hairline transition-colors duration-200">
      <div className="max-w-spec mx-auto px-4 sm:px-8 h-14 flex items-center justify-between">
        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(link.id, e)}
                className={`group flex items-center space-x-1.5 text-xs font-mono tracking-mono uppercase transition-colors py-1 ${
                  isActive ? 'text-vermilion font-semibold' : 'text-secondary hover:text-primary'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="w-1 h-1 bg-vermilion inline-block rounded-none ml-1" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Controls Right */}
        <div className="flex items-center space-x-3 ml-auto md:ml-0">
          {/* Command Palette Trigger */}
          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="flex items-center space-x-1.5 px-2.5 py-1 text-xs font-mono text-secondary hover:text-primary bg-surface border border-hairline hover:border-vermilion transition-all"
            aria-label="Open Command Palette (Cmd + K)"
            title="Open Command Palette (Cmd/Ctrl + K)"
          >
            <Command className="w-3.5 h-3.5 text-muted" />
            <span className="hidden sm:inline text-[11px] font-mono tracking-tight">CMD+K</span>
            <span className="sm:hidden text-[11px] font-mono">⌘K</span>
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex items-center justify-center p-1.5 text-secondary hover:text-primary bg-surface border border-hairline hover:border-hairline-bright transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-secondary hover:text-vermilion transition-colors" />
            ) : (
              <Moon className="w-4 h-4 text-secondary hover:text-vermilion transition-colors" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-1.5 text-secondary hover:text-primary border border-hairline"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-hairline bg-canvas px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(link.id, e)}
              className="flex items-center justify-between py-2 text-xs font-mono tracking-mono uppercase text-secondary hover:text-vermilion border-b border-hairline/40 last:border-b-0"
            >
              <span>{link.label}</span>
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-muted">
            <span>SPEC: 12-COL DRAFT</span>
            <span>REV 2026.09</span>
          </div>
        </div>
      )}
    </header>
  );
};
