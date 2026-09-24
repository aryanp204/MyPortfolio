# DESIGN BRIEF: ARYAN PATEL — ENGINEERING SPEC SHEET
**Version:** 1.0.0  
**Role:** Senior Product Designer & Front-End Engineer  
**Subject:** Personal Portfolio for Aryan Patel (Software & QA Engineer)  
**Date:** 2026-09-24  

---

## 1. CONCEPT & POINT OF VIEW
**"The Engineering Spec Sheet"**

The site rejects generic web developer clichés (floating 3D cubes, glowing neon borders, faux IDE windows, particle fields) in favor of the aesthetic authority of technical instrumentation, architectural drafting, and release changelogs. 

Aryan Patel is a dual-threat professional: combining front-end/full-stack engineering with rigorous Quality Assurance. The portfolio must express this identity through:
- **Structural discipline:** Visible 12-column coordinate framework and crisp 1px hairline dividers.
- **Typographic hierarchy:** High contrast between architectural display scales and technical monospace metadata.
- **Restraint:** Every visual element earns its presence. Information density over superficial ornamentation.
- **Tactility:** Surfaces feel like technical parchment or matte drafting paper. Depth is achieved via spacing, 1px rules, and contrast—never fuzzy dropshadows or frosted glass.

---

## 2. GRID & SPATIAL DISCIPLINE
- **Base Grid:** Strict 12-column CSS Grid with fluid gutters (`clamp(16px, 3vw, 32px)`).
- **Margins:** Exterior padding clamped between `20px` (mobile) and `64px` (desktop), max-width bounded at `1380px`.
- **Vertical Rhythm:** Multiples of 8px (8, 16, 24, 32, 48, 64, 96, 128px).
- **Hairlines:** Continuous 1px borders dividing structural sections. In dark mode: `rgba(255, 255, 255, 0.08)` / `#232321`; in light mode: `rgba(0, 0, 0, 0.08)` / `#dedad4`.
- **Asymmetry:** Intentional placement along column tracks (e.g. 3-col label / 9-col content, or 7-col narrative / 5-col technical figure).

---

## 3. TYPOGRAPHY SCALE
Dual-font system loaded with `font-display: swap`:
- **Primary / Display:** *Inter Tight* (tight tracking `-0.03em` to `-0.05em` on headline sizes, balanced geometric sans).
- **Secondary / Technical:** *JetBrains Mono* (labels, figures, status markers, commit hashes, captions).

### Fluid Type Scale
- **Display 01 (Hero Name):** `clamp(3.5rem, 8.5vw, 8rem)` — Inter Tight, 600 weight, -0.04em tracking, 0.95 line-height.
- **Section Headings (H2):** `clamp(2rem, 4vw, 3.5rem)` — Inter Tight, 500 weight, -0.03em tracking, 1.1 line-height.
- **Subheadings (H3):** `clamp(1.25rem, 2vw, 1.75rem)` — Inter Tight, 500 weight, -0.02em tracking.
- **Body Text:** `clamp(1rem, 1.1vw, 1.125rem)` (16px–18px) — Inter Tight, 400 weight, 1.6 line-height, max measure `65ch`.
- **Mono Labels / Micro:** `clamp(0.75rem, 0.85vw, 0.8125rem)` (12px–13px) — JetBrains Mono, 400 & 500 weight, uppercase, +0.06em tracking.
- **Metrics / Figures:** `clamp(2.5rem, 5vw, 4.5rem)` — Inter Tight / Mono hybrid, tabular numerals (`font-variant-numeric: tabular-nums`).

---

## 4. COLOR SYSTEM & DESIGN TOKENS
Designed for warm ambient light and strict contrast compliance (WCAG AA minimum, AAA for body copy).

| Token Name | Dark Theme (Default) | Light Theme ("Warm Paper") | Role |
| :--- | :--- | :--- | :--- |
| `--bg-canvas` | `#0d0d0c` (warm soot) | `#f4f2ed` (bleached craft) | Page backdrop |
| `--bg-surface` | `#141413` | `#eae7e0` | Hover states, palette panels |
| `--fg-primary` | `#e9e7e2` (warm off-white) | `#171716` (warm near-black) | Display headings, primary copy |
| `--fg-secondary` | `#8e8c85` (weathered stone) | `#696760` (faded ink) | Descriptions, subtext |
| `--fg-muted` | `#585651` | `#99968d` | Timestamps, index numbers |
| `--border-hairline` | `#232321` | `#dedad4` | Structural lines & dividers |
| `--accent-vermilion` | `#ff5b2e` | `#e04316` | Singular functional accent (links, focus ring, active state, status) |
| `--accent-subtle` | `rgba(255, 91, 46, 0.12)` | `rgba(224, 67, 22, 0.12)` | Tag fills, interactive highlights |

---

## 5. MOTION BUDGET & EXECUTION RULES
- **Philosophy:** Motion clarifies sequence, state change, and spatial position. No decorative bounce or gratuitous spring.
- **Smooth Scroll:** Powered by `lenis`, locked to the `gsap` ticker, destroyed completely on component unmount.
- **Reduced Motion:** If `prefers-reduced-motion: reduce`, disable Lenis, bypass SplitType slide-up animations, and present all content immediately in its final state.
- **Primary Reveal:** SplitType masked slide-up (`overflow: hidden` parent, text slides up `y: '100%' -> '0%'`, 600ms duration, `power3.out` / `cubic-bezier(0.22, 1, 0.36, 1)`, 50ms character/word stagger).
- **Secondary Block Reveal:** Subtle 12px vertical drift with opacity fade (500ms duration).
- **Interactive State Transitions:** 150ms–200ms duration, linear or subtle ease. Max scale transform `1.02`.

---

## 6. DELIBERATE EXCLUSIONS ("WHAT WE ARE LEAVING OUT")
1. **NO Neon/Cyberpunk Gradients:** No cyan/purple/pink radial background glows or text gradient clips.
2. **NO Faux Mac Chrome:** No fake dots (red/yellow/green), no fake code editor frames.
3. **NO Floating Tech Badges:** No rotating rings of React/Node icons orbiting in 3D.
4. **NO Testimonial/Statistic Inventions:** Only verified figures from Aryan's actual professional track record (e.g. 500+ test cases, 40% automated reduction, 50% prep time).
5. **NO Custom Cursor Follower:** Keeps the native OS cursor for speed, accessibility, and precision.
6. **NO Infinite Scroll Carousel:** Work is presented as a clean, high-density index table with instantaneous hover states.
7. **NO Backdrop Blur Clutter:** Flat opaque surfaces with hairline borders provide structural depth.
