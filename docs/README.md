# AIVC Style Transfer Documentation

This folder contains the complete specification for building an AI-Powered VC Investment Committee website with a playful, hand-drawn visual style.

## Quick Start

1. **Read `claude.md`** in the parent folder for project overview
2. **Start with `08_codex_plan_mode_handoff.md`** for build sequence
3. **Reference other files** as needed during implementation

## Folder Structure

```
docs/
├── README.md                    # This file
├── 01_site-a_page-map.md        # Structure source: all pages & sections
├── 02_site-b_page-map.md        # Taste source: visual reference pages
├── 03_tokens_site-b.md          # Design tokens (colors, typography, spacing)
├── 04_motion_system_site-b.md   # Animation & interaction patterns
├── 05_components_library.md     # Component specifications
├── 06_layout_system.md          # Grid, breakpoints, containers
├── 07_style-transfer_rules.md   # How to apply Site B style to Site A
├── 08_codex_plan_mode_handoff.md # Build plan & acceptance criteria
├── site-a/
│   └── pages/
│       ├── index.md             # Landing page structure
│       ├── prompt.md            # Prompt page structure
│       └── report_template.md   # Report page template
└── site-b/
    └── pages/
        ├── index.md             # Home page taste patterns
        ├── radar.md             # Dashboard patterns
        ├── about.md             # Agent card patterns
        ├── insights.md          # Article list patterns
        ├── article.md           # Article detail patterns
        ├── stage.md             # Column layout patterns
        └── 404.md               # Error page patterns
```

## Document Purposes

### Core Specs (01-08)

| # | File | When to Use |
|---|------|-------------|
| 01 | site-a_page-map | Understanding what pages to build |
| 02 | site-b_page-map | Understanding visual reference |
| 03 | tokens_site-b | Setting up CSS variables |
| 04 | motion_system_site-b | Implementing animations |
| 05 | components_library | Building reusable components |
| 06 | layout_system | Setting up grid & responsive |
| 07 | style-transfer_rules | Mapping old → new style |
| 08 | codex_plan_mode_handoff | Overall build plan |

### Site A Pages (Structure)
Detailed specs for each page that needs to be built, including sections, components, and content structure.

### Site B Pages (Taste)
Visual patterns to extract and apply, including CSS examples and interaction details.

## Key Design Tokens

```css
/* Colors */
--color-bg-cream: #FFFAF2;
--color-primary-red: #FF4466;
--color-primary-green: #2EB67D;
--color-primary-blue: #65A9E6;
--color-primary-yellow: #F7D548;
--color-primary-purple: #9373B2;

/* Motion */
--motion-fast: 150ms;
--motion-medium: 250ms;
--motion-slow: 500ms;
--ease-out-cubic: cubic-bezier(0.22, 1, 0.36, 1);

/* Typography */
--font-script: 'Caveat', cursive;
--font-sans: 'Inter', sans-serif;
```

## Build Order

1. **Foundation**: Tokens, base styles, dotted grid background
2. **Layout**: Containers, grid system, responsive breakpoints
3. **Components**: Button → TagPill → HandDrawnPanel → Cards
4. **Pages**: Index → Prompt → Report template → Individual reports
5. **Polish**: Animations, accessibility, testing

## Pages to Build

| Page | Priority | Template |
|------|----------|----------|
| index.html | High | Unique |
| prompt.html | High | Unique |
| uber_2008.html | High | Report |
| facebook_2004.html | Medium | Report |
| youtube_2005.html | Medium | Report |
| airbnb_2008.html | Medium | Report |
| wework_2012.html | Medium | Report |

## Style Principles

1. **Cream background** with dotted grid pattern
2. **Hand-drawn borders** on all cards (irregular corners)
3. **Script typography** for company names and major headings
4. **Pastel accents** for status colors and highlights
5. **Subtle shadows** that increase on hover
6. **Scroll-reveal animations** for sections entering viewport
7. **Generous whitespace** between sections
