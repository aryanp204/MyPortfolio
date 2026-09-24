/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: 'var(--bg-canvas)',
        surface: 'var(--bg-surface)',
        'surface-subtle': 'var(--bg-surface-subtle)',
        primary: 'var(--fg-primary)',
        secondary: 'var(--fg-secondary)',
        muted: 'var(--fg-muted)',
        hairline: 'var(--border-hairline)',
        vermilion: 'var(--accent-vermilion)',
        'vermilion-subtle': 'var(--accent-subtle)',
      },
      fontFamily: {
        sans: ['"Inter Tight"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      maxWidth: {
        spec: '1380px',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
        mono: '0.06em',
      },
      borderWidth: {
        hairline: '1px',
      },
    },
  },
  plugins: [],
}
