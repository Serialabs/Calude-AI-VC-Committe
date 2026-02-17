# Codex Plan Mode Handoff

The goal is to build a new web experience that keeps Site A's simulation structure but adopts Site B's visual style. Codex should use the specification files in this handoff to generate code.

---

## Goal

1. **Build a multi-page static site** that replicates the content and information architecture of Site A (AIVC) while applying the pastel, hand-drawn aesthetic and motion system of Site B (VoxYZ).

2. **Ensure semantic HTML and accessibility** are preserved. Do not change the underlying data or sequence of the simulation.

3. **Leverage a component-driven approach** with reusable tokens, layout rules and components defined in this pack.

---

## Inputs

Codex should refer to these markdown files:

| File | Purpose |
|------|---------|
| `01_site-a_page-map.md` | Map of all AIVC pages, sections, and anchors |
| `02_site-b_page-map.md` | Map of VoxYZ pages for taste reference |
| `03_tokens_site-b.md` | Color, typography, spacing, radius, border, shadow, blur tokens |
| `04_motion_system_site-b.md` | Motion tokens, easing rules, and interaction grammar |
| `05_components_library.md` | Component specifications with slots, props, states |
| `06_layout_system.md` | Grid system, containers, breakpoints, section cadence |
| `07_style-transfer_rules.md` | Maps Site A components to Site B style translations |

---

## Build Sequence

### Phase 1: Foundation

1. **Define tokens and variables**
   - Implement color, spacing, typography, radius and motion tokens from `03_tokens_site-b.md`
   - Use CSS custom properties
   - Create utility classes for common patterns

2. **Implement the layout system**
   - Set up containers, grid and breakpoints based on `06_layout_system.md`
   - Establish section rhythm and responsive behaviors
   - Create the dotted grid background pattern

### Phase 2: Components

3. **Build the component library**
   - Implement each component defined in `05_components_library.md`
   - Start with foundational components:
     1. `Button`
     2. `TagPill`
     3. `HandDrawnPanel`
   - Then build composite components:
     4. `HeaderNav`
     5. `HeroBanner`
     6. `Footer`
   - Finally, page-specific components:
     7. `ReportCard`
     8. `MemoCard`
     9. `EvaluatorCard`
     10. `DebateTranscript`
   - Ensure slots and states are supported

### Phase 3: Pages

4. **Assemble pages**
   - Use the per-page definitions in `01_site-a_page-map.md` to structure each page
   - For each component instance, apply the style translation rules in `07_style-transfer_rules.md`
   - Use components from the library

   **Page build order:**
   1. `index.html` - Landing page with report cards
   2. `prompt.html` - Simulation instructions
   3. `uber_2008.html` - First report (template for all reports)
   4. Duplicate report template for remaining companies

### Phase 4: Polish

5. **Apply motion and interaction grammar**
   - Integrate hover effects, scroll-reveal animations
   - Follow `04_motion_system_site-b.md` for durations and easing curves

6. **Test responsiveness**
   - Verify design behaves correctly across breakpoints
   - Test mobile hamburger menu
   - Ensure cards stack properly

7. **Validate accessibility**
   - Check heading levels and landmarks
   - Verify alt text and ARIA labels
   - Test keyboard navigation
   - Run contrast checks

---

## Constraints

### Must Do
- Use the tokens and components as defined
- Maintain all simulation content unchanged
- Apply hand-drawn borders to cards and panels
- Use pastel color palette throughout
- Implement scroll-reveal animations
- Ensure mobile responsiveness

### Must Not Do
- Copy CSS verbatim from reference sites
- Alter simulation content or stage sequence
- Introduce new design elements outside defined tokens
- Use heavy animations or 3D effects
- Use more than two accent colors per component
- Skip accessibility requirements

---

## Acceptance Criteria

### Visual

- [ ] The final site renders all pages defined in `01_site-a_page-map.md` with structure intact
- [ ] Pastel color palette from Site B is evident across all pages
- [ ] Hand-drawn borders and script typography are consistently applied
- [ ] Cards use `shadow-xs` by default and `shadow-sm` on hover
- [ ] Dotted grid background is visible on page backgrounds

### Motion

- [ ] Hover states use `motion-fast` (150ms) transitions
- [ ] Cards lift 2-3px on hover
- [ ] Scroll-reveal animations fade content up over `motion-slow` (500ms)
- [ ] Tab/selection changes animate over `motion-medium` (250ms)
- [ ] All animations use appropriate easing curves

### Layout

- [ ] Layout adapts gracefully at each breakpoint (sm, md, lg, xl)
- [ ] Cards grid: 3 columns → 2 columns → 1 column
- [ ] Navigation collapses to hamburger on mobile
- [ ] Section spacing follows the rhythm in `06_layout_system.md`
- [ ] Container max-width is 1200px on large screens

### Accessibility

- [ ] All interactive components are keyboard accessible
- [ ] Appropriate ARIA attributes are present
- [ ] Heading hierarchy is correct (h1 → h2 → h3)
- [ ] Color contrast meets WCAG AA standards
- [ ] Focus states are visible
- [ ] `prefers-reduced-motion` is respected

### Functionality

- [ ] All navigation links work
- [ ] Copy-to-clipboard buttons function correctly
- [ ] External links open in new tabs
- [ ] Anchor links scroll to correct sections

---

## File Structure (Suggested)

```
/
├── index.html
├── prompt.html
├── uber_2008.html
├── wework_2012.html
├── facebook_2004.html
├── youtube_2005.html
├── airbnb_2008.html
├── css/
│   ├── tokens.css          # Design tokens as CSS custom properties
│   ├── base.css            # Reset, typography, dotted grid background
│   ├── layout.css          # Grid, containers, utilities
│   ├── components.css      # All component styles
│   └── animations.css      # Motion and transitions
├── js/
│   ├── main.js             # Scroll reveals, hamburger menu
│   └── copy.js             # Copy-to-clipboard functionality
├── assets/
│   ├── fonts/              # Script and sans-serif fonts
│   └── icons/              # SVG icons
└── docs/                   # This documentation folder
```

---

## Technology Recommendations

### CSS Approach
- **Recommended:** Vanilla CSS with custom properties
- **Alternative:** Tailwind CSS (would need custom configuration for hand-drawn effects)

### JavaScript
- Minimal vanilla JS for:
  - Intersection Observer (scroll reveals)
  - Hamburger menu toggle
  - Copy-to-clipboard
  - Sticky header detection

### Fonts
- **Script:** Caveat, Kalam, or Patrick Hand (Google Fonts)
- **Sans-serif:** Inter or system fonts

### No Build Step Required
- Static HTML files
- Can be served directly or with simple local server
- No framework dependencies

---

## Next Steps

After implementing according to this plan:

1. Generate HTML, CSS and minimal JavaScript
2. Use the component library to assemble final pages
3. Verify every element aligns with specifications
4. Test across browsers and devices
5. Run accessibility audit
6. Deploy to static hosting

---

## Quick Reference: Key Tokens

```css
/* Colors */
--color-bg-cream: #FFFAF2;
--color-primary-red: #FF4466;
--color-primary-green: #2EB67D;
--color-primary-blue: #65A9E6;
--color-primary-yellow: #F7D548;
--color-primary-purple: #9373B2;

/* Typography */
--font-script: 'Caveat', cursive;
--font-sans: 'Inter', sans-serif;

/* Spacing */
--space-3: 1rem;    /* 16px - base */
--space-4: 1.5rem;  /* 24px - card gaps */
--space-6: 2.5rem;  /* 40px - section spacing */

/* Motion */
--motion-fast: 150ms;
--motion-medium: 250ms;
--motion-slow: 500ms;
--ease-out-cubic: cubic-bezier(0.22, 1, 0.36, 1);

/* Borders */
border-radius: 8px 12px 10px 14px; /* Hand-drawn irregular */
```
