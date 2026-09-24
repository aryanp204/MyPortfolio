# Aryan Patel — Engineering Spec Sheet Portfolio

A personal portfolio for Aryan Patel (Software & QA Engineer), built with the aesthetic and structure of an engineering specification sheet: restrained, precise, high-density, and technical.

---

## 1. Quick Start & Setup

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation
```bash
# Clone or open the repository directory
cd "Aryan's Portfolio"

# Install dependencies
npm install

# Start local development server (runs on http://localhost:3000)
npm run dev
```

### Available Scripts
- `npm run dev`: Starts the Vite development server.
- `npm run build`: Type-checks with `tsc` and generates the optimized production bundle in `dist/`.
- `npm run typecheck`: Runs strict TypeScript validation with `tsc --noEmit`.
- `npm run lint`: Validates code style and syntax with ESLint.
- `npm run preview`: Previews the production build locally.

---

## 2. Environment Variables & Supabase Setup

The contact form is configured to submit directly to Supabase with Row Level Security (RLS). If environment variables are missing or unconfigured, the form **degrades gracefully to a mailto: link** without crashing.

### Environment Configuration
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Configure your Supabase credentials:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### Supabase Database Migration
To set up the `messages` table with anonymous insert-only permissions:
1. Open your Supabase Dashboard -> **SQL Editor**.
2. Run the provided SQL script located in `supabase/schema.sql`:
```sql
CREATE TABLE IF NOT EXISTS public.messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous insert-only" 
ON public.messages 
FOR INSERT 
TO anon 
WITH CHECK (true);

REVOKE SELECT, UPDATE, DELETE ON public.messages FROM anon;
```

---

## 3. How to Add or Modify a Project

All project records are strictly typed and located in `src/data/projects.ts`.

To add a new project to the Work Index Table:
1. Open `src/data/projects.ts`.
2. Add a new item to the `projects` array conforming to `ProjectItem`:
```typescript
{
  id: "proj-example",
  index: "05",
  name: "Example Service",
  tagline: "High-performance microservice architecture with automated testing pipelines.",
  url: "https://example.com",
  category: "Distributed Systems",
}
```
3. The project will automatically render in the Work table, update the live spec preview panel, and register in the **CMD+K Command Palette**.

---

## 4. Architecture & Key Features

- **Strict 12-Column Grid:** Built with custom Tailwind CSS tokens and 1px hairline dividers.
- **Dual Font Discipline:** *Inter Tight* for high-impact display headlines and comfortable body copy; *JetBrains Mono* for technical metadata, coordinates, and commit hashes.
- **Command Palette (`CMD+K` / `CTRL+K`):** Keyboard-first navigation modal allowing instant jumps to sections, external project inspection, theme toggles, and email clipboard copy.
- **Git-Log Style Changelog:** Experience timeline with scroll-scrubbed progress rule powered by GSAP ScrollTrigger and expandable bullet details.
- **Lenis Smooth Scroll:** Synchronized with GSAP ticker; automatically disabled if `prefers-reduced-motion` is active.
- **Dual Themes:** Engineering Dark (`#0d0d0c`) and Warm Paper (`#f4f2ed`) respecting OS color scheme with persistent manual toggle.

---

## 5. Uship UX/UI Case Study Page

A dedicated, comprehensive case study page built from the content of `public/Uship_UX_UI_Case_Study.docx`.

### How to Access
- **Work Section:** Click the `[ Case Study → ]` button directly in the Uship index row or in the live spec preview panel.
- **Command Palette (`CMD+K`):** Type `case study` and press Enter on "Open Uship UX/UI Case Study".
- **Direct Hash Link:** Append `#uship-case-study` to the portfolio URL.

### Structured Modules Included
1. **Scope & Executive Summary:** Platform type, tools, and 6 core responsibilities.
2. **Competitive Analysis:** 6-area benchmarking table comparing common patterns vs. Uship.
3. **User Personas:** 3 archetype cards (Sarah the Quick Shopper, Daniel the Explorer, Maria the Convenience Shopper) with demographic specs, goals, and frustrations.
4. **Problem Statement:** Polarized shopping behaviors and the central "How Might We" design question.
5. **Three-Track User Flows:** Structured pathways for Search-first, Browse-first, and Discovery-first shopping.
6. **Information Architecture Blueprint:** Wireframe structure from sticky header to organized support footer.
7. **Empirical Usability Testing:** 3 concrete test tasks, observations, and iterative UI refinements.
8. **Front-End Engineering:** Semantic HTML5, CSS3 Grid/Flexbox, JavaScript interactivity, and responsive challenge resolution.
9. **Reflection & Lessons:** Design-to-code synergy and core usability principles.

