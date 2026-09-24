import React from 'react';
import { profile } from '@/data/profile';

export const Footer: React.FC = () => {
  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-canvas">
      <div className="max-w-spec mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted tracking-mono">
          <div className="flex items-center space-x-3">
            <span className="text-primary font-medium">© 2026 Aryan Patel</span>
            <span>|</span>
            <span>{profile.coordinates}</span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="hidden md:inline">{profile.metadata.version}</span>
            <a
              href="#hero"
              onClick={handleBackToTop}
              className="text-secondary hover:text-vermilion transition-colors"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
