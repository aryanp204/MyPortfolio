import React from 'react';

export const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-surface focus:text-vermilion focus:border focus:border-vermilion focus:font-mono focus:text-xs focus:uppercase focus:tracking-mono focus:shadow-none"
    >
      [Skip to main content]
    </a>
  );
};
