import React, { useState, useEffect, useRef, useMemo } from 'react';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import {
  Search,
  ArrowRight,
  ExternalLink,
  Copy,
  Download,
  Sun,
  Moon,
  X,
  Check,
  FileText,
} from 'lucide-react';

export interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenCaseStudy?: (projectId: string) => void;
}

interface CommandItem {
  id: string;
  category: string;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  theme,
  onToggleTheme,
  onOpenCaseStudy,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        onClose();
      }, 1000);
    } catch {
      onClose();
    }
  };

  const downloadResume = () => {
    onClose();
    const link = document.createElement('a');
    link.href = profile.resumeUrl;
    link.download = 'AryanPatel_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const commands: CommandItem[] = useMemo(() => [
    // Navigation
    {
      id: 'nav-home',
      category: 'Navigation',
      title: '00 // Jump to Home',
      subtitle: 'Hero, introduction and operator spec',
      icon: <ArrowRight className="w-3.5 h-3.5" />,
      action: () => scrollToSection('hero'),
    },
    {
      id: 'nav-about',
      category: 'Navigation',
      title: '01 // Jump to About',
      subtitle: 'Methodology, competencies and technical toolbox',
      icon: <ArrowRight className="w-3.5 h-3.5" />,
      action: () => scrollToSection('about'),
    },
    {
      id: 'nav-work',
      category: 'Navigation',
      title: '02 // Jump to Work',
      subtitle: 'Production releases and deployments index',
      icon: <ArrowRight className="w-3.5 h-3.5" />,
      action: () => scrollToSection('work'),
    },
    {
      id: 'nav-contact',
      category: 'Navigation',
      title: '03 // Jump to Contact',
      subtitle: 'Direct channels and transmission form',
      icon: <ArrowRight className="w-3.5 h-3.5" />,
      action: () => scrollToSection('contact'),
    },

    // Projects
    ...projects.map((proj) => ({
      id: `proj-${proj.id}`,
      category: 'Projects',
      title: `Open ${proj.name}`,
      subtitle: proj.tagline,
      icon: <ExternalLink className="w-3.5 h-3.5 text-muted" />,
      action: () => {
        onClose();
        window.open(proj.url, '_blank', 'noopener,noreferrer');
      },
    })),

    // Case Studies
    {
      id: 'case-study-uship',
      category: 'Case Studies',
      title: 'Open Uship UX/UI Case Study',
      subtitle: 'Structured 10-module design & front-end specification',
      icon: <FileText className="w-3.5 h-3.5 text-vermilion" />,
      action: () => {
        onClose();
        onOpenCaseStudy?.('proj-uship');
      },
    },

    // Quick Actions
    {
      id: 'act-copy-email',
      category: 'Actions',
      title: copied ? 'Email Copied!' : `Copy Email (${profile.email})`,
      subtitle: 'Copy direct email to system clipboard',
      icon: copied ? <Check className="w-3.5 h-3.5 text-vermilion" /> : <Copy className="w-3.5 h-3.5" />,
      action: copyEmail,
    },
    {
      id: 'act-resume',
      category: 'Actions',
      title: 'Download Resume (DOCX)',
      subtitle: 'Official technical resume specification',
      icon: <Download className="w-3.5 h-3.5" />,
      action: downloadResume,
    },
    {
      id: 'act-theme',
      category: 'Actions',
      title: `Toggle Theme (Current: ${theme.toUpperCase()})`,
      subtitle: theme === 'dark' ? 'Switch to Warm Paper light theme' : 'Switch to Engineering Dark theme',
      icon: theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />,
      action: () => {
        onToggleTheme();
        onClose();
      },
    },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [theme, copied]);

  const filteredCommands = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        (c.subtitle && c.subtitle.toLowerCase().includes(q)) ||
        c.category.toLowerCase().includes(q)
    );
  }, [commands, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Focus management and keyboard listener
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onClose();
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action();
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-none"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="w-full max-w-xl bg-canvas border border-hairline shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-hairline space-x-3">
          <Search className="w-4 h-4 text-muted flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project, or section..."
            className="w-full bg-transparent text-sm text-primary placeholder-muted focus:outline-none font-mono tracking-tight"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-muted hover:text-primary"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <span className="font-mono text-[10px] text-muted border border-hairline px-1.5 py-0.5 uppercase">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div
          ref={listRef}
          className="max-h-80 overflow-y-auto divide-y divide-hairline/40 py-1"
        >
          {filteredCommands.length === 0 ? (
            <div className="p-8 text-center font-mono text-xs text-muted">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  type="button"
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full text-left px-4 py-3 flex items-center justify-between transition-colors ${
                    isSelected ? 'bg-surface text-primary border-l-2 border-l-vermilion' : 'text-secondary hover:bg-surface/50'
                  }`}
                >
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <span className={isSelected ? 'text-vermilion' : 'text-muted'}>
                      {cmd.icon}
                    </span>
                    <div className="truncate">
                      <div className="font-mono text-xs font-medium tracking-tight text-primary">
                        {cmd.title}
                      </div>
                      {cmd.subtitle && (
                        <div className="text-[11px] text-muted truncate">
                          {cmd.subtitle}
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-muted uppercase flex-shrink-0 ml-4">
                    {cmd.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-hairline bg-surface/30 flex items-center justify-between font-mono text-[10px] text-muted">
          <span>↑↓ NAVIGATE</span>
          <span>↵ SELECT</span>
          <span>ESC CLOSE</span>
        </div>
      </div>
    </div>
  );
};
