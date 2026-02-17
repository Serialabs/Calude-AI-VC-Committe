# Layout System

This document details the grid, spacing and composition rules inferred from Site B. Use these patterns when structuring pages and components.

---

## Grid System

### Base Grid

- **Columns:** 12-column responsive grid
- **Column Width:** Each column is `1fr` wide
- **Gap:** Equal to `spacing-3` (16px) by default

### Column Behavior by Breakpoint

| Breakpoint | Width | Columns | Container |
|------------|-------|---------|-----------|
| xl | ≥1280px | 12 columns | Max 1200px, centered |
| lg | ≥1024px | 8 columns | 90% width |
| md | ≥640px | 4-6 columns | 90% width |
| sm | <640px | 1 column | 100% width minus padding |

### Row Height

- No fixed row height; content defines height
- Row gaps use `spacing-4` (24px) or larger depending on context

### CSS Implementation

```css
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-3);
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(8, 1fr);
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

---

## Containers

### Max Width

| Page Type | Max Width |
|-----------|-----------|
| Light pages (most) | 1200px, centered |
| Stage page | 100% width |

### Padding

| Breakpoint | Horizontal Padding |
|------------|-------------------|
| Desktop (≥1024px) | `spacing-5` (32px) |
| Tablet (640-1024px) | `spacing-4` (24px) |
| Mobile (<640px) | `spacing-3` (16px) |

### Section Separation

| Page Type | Vertical Margin |
|-----------|-----------------|
| Content-rich pages | `spacing-6` (40px) minimum |
| Landing pages | `spacing-7` (64px) or more |

### CSS Implementation

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-5);
}

@media (max-width: 1024px) {
  .container {
    padding: 0 var(--space-4);
  }
}

@media (max-width: 640px) {
  .container {
    padding: 0 var(--space-3);
  }
}
```

---

## Breakpoints

| Name | Width | Changes |
|------|-------|---------|
| `sm` | ≥0px | Single-column layouts; navigation collapses into hamburger; cards stack vertically; icons shrink |
| `md` | ≥640px | Two-column grids for cards; nav items may still collapse; hero elements shrink; Stage page shows two columns of tasks |
| `lg` | ≥1024px | Three-column grids for report cards and radar ideas; nav items display horizontally; hero headings use larger type |
| `xl` | ≥1280px | Full 12-column grid; max container width enforced; Stage board displays four columns at once |

### CSS Custom Properties for Breakpoints

```css
:root {
  --breakpoint-sm: 0px;
  --breakpoint-md: 640px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}
```

### Media Query Mixins (SCSS)

```scss
@mixin sm {
  @media (min-width: 0px) { @content; }
}

@mixin md {
  @media (min-width: 640px) { @content; }
}

@mixin lg {
  @media (min-width: 1024px) { @content; }
}

@mixin xl {
  @media (min-width: 1280px) { @content; }
}
```

---

## Section Cadence

### Vertical Rhythm Rules

1. **Start each new section** with a top margin equal to at least `spacing-6`
2. **Finish each section** with bottom margin equal to `spacing-6`
3. **On landing pages**, extend this to `spacing-7` or more for prominent separation
4. **Within a section**, maintain consistent vertical rhythm using multiples of `spacing-3` or `spacing-4`

### Background Alternation

- Alternate section backgrounds (light tinted vs. plain cream) to visually separate content groups
- Avoids need for strong borders between sections

### Visual Rhythm Pattern

```
┌─────────────────────────────────────────┐
│         HERO SECTION                    │  ← Full viewport height
│         (spacing-7 bottom)              │
├─────────────────────────────────────────┤
│                                         │  ← spacing-7 gap
├─────────────────────────────────────────┤
│         SECTION 1                       │
│         (tinted background)             │
│         (spacing-6 top/bottom)          │
├─────────────────────────────────────────┤
│                                         │  ← No gap (backgrounds touch)
├─────────────────────────────────────────┤
│         SECTION 2                       │
│         (cream background)              │
│         (spacing-6 top/bottom)          │
├─────────────────────────────────────────┤
│         FOOTER                          │
└─────────────────────────────────────────┘
```

---

## Composition Rules

### 1. Hero First

- Each page opens with a hero or header area that clearly states the page's purpose
- Hero generally fills the initial viewport height on large screens
- Shrinks gracefully on smaller devices

### 2. Narrative Flow

Organize content in a logical order:

1. **Introduction** – What is this page about?
2. **Details** – Core content
3. **Supporting evidence** – Examples, data, testimonials
4. **Actions** – CTAs, next steps

**Example (Radar Page):**
1. Descriptive heading and filters
2. Success stories
3. Idea grid
4. Activity feed

### 3. Responsive Repositioning

- Elements that appear side by side on desktop stack vertically on mobile
- Agent cards: 3×2 on large screens → 1×6 on mobile
- Report cards: 3 columns → 2 columns → 1 column

### 4. Sticky Elements

- Keep navigation visible using `position: sticky` at the top
- Keep filter tabs sticky when scrolling within long lists

### 5. Flexibility

- Avoid hard-coding absolute widths or heights
- Let the grid and spacing tokens handle resizing across breakpoints

---

## Common Layout Patterns

### Card Grid

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-4);
}

@media (max-width: 640px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
```

### Two-Column Content

```css
.two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
}

@media (max-width: 768px) {
  .two-column {
    grid-template-columns: 1fr;
  }
}
```

### Sidebar Layout

```css
.sidebar-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--space-5);
}

@media (max-width: 1024px) {
  .sidebar-layout {
    grid-template-columns: 1fr;
  }
}
```

### Centered Content

```css
.centered-content {
  max-width: 65ch; /* Optimal reading width */
  margin: 0 auto;
  padding: 0 var(--space-4);
}
```

---

## Page-Specific Layout Notes

### Index Page (Home)

- Hero: Full viewport height on desktop, auto height on mobile
- Agent cards: 3×2 grid on desktop, 2×3 on tablet, 1×6 on mobile
- Sections alternate between cream and tinted backgrounds

### Report Pages

- Two-column layout for Stage 2 evaluator cards
- Single column for debate transcripts
- Memo cards in 2×4 or 4×2 grid

### Insights Page

- Article cards in 2-3 column grid
- Filter pills horizontally scrollable on mobile

### Stage Page

- Four equal columns (Inbox, Doing, Done, Future)
- Columns become horizontally scrollable on mobile
- Full-width dark background

---

## Z-Index Scale

| Layer | Z-Index | Use |
|-------|---------|-----|
| Background | 0 | Dotted grid, page background |
| Content | 1 | Cards, sections |
| Elevated | 10 | Hovered cards, dropdowns |
| Sticky | 100 | Sticky header, filter tabs |
| Modal | 1000 | Overlays, modals |
| Toast | 1100 | Notifications, copy confirmations |

```css
:root {
  --z-background: 0;
  --z-content: 1;
  --z-elevated: 10;
  --z-sticky: 100;
  --z-modal: 1000;
  --z-toast: 1100;
}
```

---

## Spacing Utility Classes

```css
/* Margin utilities */
.mt-1 { margin-top: var(--space-1); }
.mt-2 { margin-top: var(--space-2); }
.mt-3 { margin-top: var(--space-3); }
.mt-4 { margin-top: var(--space-4); }
.mt-5 { margin-top: var(--space-5); }
.mt-6 { margin-top: var(--space-6); }
.mt-7 { margin-top: var(--space-7); }

.mb-1 { margin-bottom: var(--space-1); }
/* ... etc ... */

/* Padding utilities */
.p-1 { padding: var(--space-1); }
.p-2 { padding: var(--space-2); }
/* ... etc ... */

/* Gap utilities */
.gap-1 { gap: var(--space-1); }
.gap-2 { gap: var(--space-2); }
/* ... etc ... */

/* Section spacing */
.section {
  padding-top: var(--space-6);
  padding-bottom: var(--space-6);
}

.section-lg {
  padding-top: var(--space-7);
  padding-bottom: var(--space-7);
}
```
