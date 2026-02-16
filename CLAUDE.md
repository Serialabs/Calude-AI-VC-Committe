# AIVC Style Transfer Project

## Project Overview

Build an **AI-Powered VC Investment Committee** website that displays startup evaluations through simulated investor debates. The site structure comes from **Site A (AIVC)** while the visual style comes from **Site B (VoxYZ)**.

## Core Concept

- **Structure (Site A):** Multi-page static site with report pages showing 4-stage startup evaluations (Deal Memo → VC Evaluation → Committee Debate → Final Report)
- **Style (Site B):** Playful hand-drawn aesthetic with pastel colors, sketchy borders, script typography, and generous whitespace

## Documentation Reference

The `/docs` folder contains the complete site audit pack. Here's what each file covers:

| Document | Purpose |
|----------|---------|
| `01_site-a_page-map` | All AIVC pages, sections, and anchor structure |
| `02_site-b_page-map` | VoxYZ pages for taste reference |
| `03_tokens_site-b` | Design tokens: colors, typography, spacing, shadows |
| `04_motion_system_site-b` | Animation timings, easing, hover/scroll behaviors |
| `05_components_library` | Reusable component specs with props and states |
| `06_layout_system` | Grid, breakpoints, container rules |
| `07_style-transfer_rules` | Maps Site A components → Site B style |
| `08_codex_plan_mode_handoff` | Build sequence and acceptance criteria |

## Key Style Tokens (Quick Reference)

```
Colors:
- Background: #FFFAF2 (cream with dotted grid)
- Primary Red: #FF4466 (CTAs, highlights)
- Success Green: #2EB67D
- Warning Yellow: #F7D548
- Info Blue: #65A9E6
- Purple: #9373B2

Typography:
- Script font for headlines (playful, hand-drawn)
- Sans-serif for body (clean, readable)
- Display sizes: 72px → 48px → 32px → 24px

Borders:
- Hand-drawn/sketchy style (~2px wavy strokes)
- Irregular corners, imperfect shapes
```

## Build Priorities

1. **Preserve content integrity** - All simulation text, data, and stages remain unchanged
2. **Apply pastel palette** - Replace dark theme with cream/pastel backgrounds
3. **Use sketchy borders** - Hand-drawn panel outlines instead of hard rectangles
4. **Add micro-interactions** - Hover lifts, scroll reveals, subtle animations
5. **Maintain accessibility** - Semantic HTML, keyboard navigation, ARIA labels

## What NOT to Do

- Don't change simulation content or stage sequence
- Don't use heavy animations or 3D effects
- Don't apply more than 2 accent colors per component
- Don't skip the hand-drawn border treatment on cards

---

# Plan Mode Prompt

Use this prompt to kick off the deep analysis and planning phase:

```
I'm building an AI-Powered VC Investment Committee website. I have comprehensive documentation from a site audit that covers:

1. **Structure Source (Site A - AIVC):** A VC simulation site with report pages showing startup evaluations across 4 stages: Deal Memo Extraction, Independent VC Evaluation, Committee Debate, and Final Report. Each report covers companies like Uber (2008), Facebook (2004), YouTube (2005), Airbnb (2008), and WeWork (2012).

2. **Style Source (Site B - VoxYZ):** A playful, hand-drawn aesthetic with:
   - Cream background with dotted grid pattern
   - Pastel color palette (coral, mint, lavender, yellow, blue)
   - Sketchy, irregular borders on cards and panels
   - Script typography for headlines
   - Generous whitespace and breathing room
   - Subtle hover lifts and scroll-reveal animations

**Your task:**

Phase 1 - Analysis:
- Review all documentation files in `/docs`
- Map out the complete page structure needed
- Identify all reusable components required
- Note the design tokens that need to be implemented

Phase 2 - Architecture Plan:
- Propose a file/folder structure
- List components in order of dependency (build order)
- Identify which CSS approach to use (CSS modules, Tailwind, vanilla CSS with custom properties)
- Plan the motion system implementation

Phase 3 - Implementation Roadmap:
- Break down into discrete tasks
- Estimate complexity for each task
- Identify potential challenges (hand-drawn borders, responsive behavior)
- Propose a build sequence

Start by reading through the documentation, then present your analysis with a clear implementation plan. Focus on practical decisions - I want to actually build this.
```

---

# Quick Start Commands

```bash
# After setting up the project structure:

# 1. Initialize project
npm init -y

# 2. If using Vite + vanilla:
npm create vite@latest . -- --template vanilla

# 3. Copy documentation
mkdir -p docs
# Move all Site_audit PDFs to /docs as markdown (or keep as reference)
```

---

# Component Checklist

Core components to build (in order):

- [ ] `HeaderNav` - Sticky navigation with hamburger mobile menu
- [ ] `HandDrawnPanel` - Base card with sketchy borders
- [ ] `Button` - Primary/secondary variants with hover lift
- [ ] `TagPill` - Category/status badges with pastel backgrounds
- [ ] `HeroBanner` - Page intro with script typography
- [ ] `MemoCard` - Deal memo sections (problem, solution, etc.)
- [ ] `EvaluatorCard` - VC persona evaluation display
- [ ] `DebateTranscript` - Multi-round discussion viewer
- [ ] `ReportCard` - Index page report listing
- [ ] `Footer` - Simple footer with links

---

# Notes

- The hand-drawn border effect can be achieved with SVG `border-image` or CSS clip-path with slight randomization
- For script typography, consider fonts like: Caveat, Kalam, or Patrick Hand
- Motion uses `ease-out cubic` for most interactions (150-300ms)
- The dotted grid background is a repeating radial gradient
