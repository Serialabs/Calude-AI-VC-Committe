# Design Tokens - Site B (VoxYZ)

This document defines the complete design token system extracted from Site B. Use these tokens as CSS custom properties or design system variables when implementing the styled site.

---

## Color Tokens

### Backgrounds

| Token | Value | Use |
|-------|-------|-----|
| `color-bg-cream` | `#FFFAF2` | Base page background on light pages. Warm cream used on most pages. Forms the dotted grid base. |
| `color-bg-dark` | `#141414` | Stage background. Near-black tone used on the stage page, allowing colourful cards to pop. |

### Primary Accents

| Token | Value | Use |
|-------|-------|-----|
| `color-primary-red` | `#FF4466` | Primary accent for buttons, links and highlights. Bright coral/red used for calls to action and important text. |
| `color-primary-green` | `#2EB67D` | Secondary accent. Mint green used for positive statuses (e.g., BUILDING cards) and some agent panels. |
| `color-primary-yellow` | `#F7D548` | Secondary accent. Soft yellow used in caution badges and for pinned flags. |
| `color-primary-blue` | `#65A9E6` | Secondary accent. Sky blue used for WATCHING status and some backgrounds. |
| `color-primary-purple` | `#9373B2` | Secondary accent. Lavender used for SHIPPED status and decorative elements. |

### Neutrals

| Token | Value | Use |
|-------|-------|-----|
| `color-neutral-light` | `#FFF7F2` | Card backgrounds. Very pale cream for panels and cards, contrasting gently with the main background. |
| `color-neutral-dark` | `#1A1A1A` | Primary text. Very dark grey/black for high contrast text on light backgrounds. |
| `color-muted-gray` | `#666666` | Secondary text. Mid-grey for descriptions and metadata. |

### Status Colors

| Token | Value | Use |
|-------|-------|-----|
| `color-alert-caution` | `#FFDD95` | Cautionary badges. Warm orange/yellow used to signal cautionary tales. |
| `color-success` | `#2ECC71` | Success indicators. Rich green used for "Live" or successful status. |
| `color-warning` | `#F39C12` | Warning indicators. Golden orange used for warnings or "Validating" status. |
| `color-error` | `#E74C3C` | Error indicators. Brick red used for error or "Pass" states. |

---

## Typography Scale

| Token | Size | Intent | Where Used |
|-------|------|--------|------------|
| `display-xxl` | ~72px | 404 headings, huge numbers | Creates dramatic impact on minimal pages |
| `display-xl` | ~64px | Home hero script words | Used for "Agents" and "One Company" |
| `display-lg` | ~48px | Section headers | Titles such as "Meet the Agents" |
| `heading-md` | ~32px | Sub-section headings | Used in Demand Radar and Insights pages |
| `heading-sm` | ~24px | Card titles | E.g., titles on success story cards and article cards |
| `body-lg` | ~18px | Editorial paragraphs | Used in article pages for comfortable reading |
| `body-md` | ~16px | Standard body copy | Default text for descriptions and metadata on cards |
| `body-sm` | ~14px | Small metadata | Used for watchers counts, date stamps |
| `label-xs` | ~12px | Labels and badges | Used for status badges, category tags and small caps labels |

### Font Weights

| Context | Weight |
|---------|--------|
| Script headings | Bold / Heavy |
| Sans-serif display | Medium (500) |
| Body copy | Regular (400) |
| Labels | Semi-bold (600) |

### Line Heights

| Context | Line Height |
|---------|-------------|
| Headings | ~1.2 - 1.3 |
| Body copy | ~1.4 - 1.6 |
| Script headings | Tighter spacing |

### Font Families

```css
--font-script: 'Caveat', 'Kalam', 'Patrick Hand', cursive;
--font-sans: 'Inter', 'SF Pro', -apple-system, sans-serif;
--font-mono: 'Fira Code', 'Monaco', monospace;
```

---

## Spacing Scale

| Token | Value | Role |
|-------|-------|------|
| `spacing-1` | 4px | Micro spacing between elements, e.g., between icons and text |
| `spacing-2` | 8px | Small gaps in lists and between labels and values |
| `spacing-3` | 16px | Base unit for internal card padding and small margins |
| `spacing-4` | 24px | Standard gap between cards and list items |
| `spacing-5` | 32px | Section padding inside pages; gap between major elements in cards |
| `spacing-6` | 40px | Large separation between sections, particularly on light pages |
| `spacing-7` | 64px | Very large margin used to separate major sections on the home page |

---

## Radius Tokens

| Token | Value | Where Used |
|-------|-------|------------|
| `radius-xs` | 4px | Pill labels and small buttons. Provides subtle rounding. |
| `radius-sm` | 8px | Standard buttons, small cards. Gives a soft feel to basic elements. |
| `radius-md` | 12px | Medium panels and modals. Used for article bodies and callout panels. |
| `radius-lg` | ~16px (irregular) | Hand-drawn panels and cards. Cards use intentionally uneven corners; treat as conceptual rather than precise. |

---

## Border Tokens

| Token | Value | Where Used |
|-------|-------|------------|
| `border-hand-drawn` | ~2px, wavy | Primary card outlines and dividers. Use SVG paths or border-image to simulate irregular strokes. |
| `border-solid` | 1px solid | Subtle separators and tab underlines. When a straight line is needed. |

### Hand-Drawn Border Implementation

```css
/* Option 1: SVG border-image */
.hand-drawn-panel {
  border: 2px solid transparent;
  border-image: url('sketchy-border.svg') 2 round;
}

/* Option 2: CSS with slight variations */
.hand-drawn-panel {
  border: 2px solid currentColor;
  border-radius: 8px 12px 10px 14px; /* Irregular corners */
}

/* Option 3: Box-shadow with offset */
.hand-drawn-panel {
  box-shadow: 
    2px 1px 0 0 currentColor,
    -1px 2px 0 0 currentColor;
}
```

---

## Shadow Tokens

| Token | Value | Where Used |
|-------|-------|------------|
| `shadow-xs` | `0 2px 4px rgba(primaryColor, 0.1)` | Small cards and buttons. Provides a gentle lift effect. |
| `shadow-sm` | `0 4px 8px rgba(primaryColor, 0.15)` | Hover state for cards. Deepens on hover to emphasise interactivity. |

### Shadow Usage Notes

- Shadows are subtle and often tinted with pastel colors
- Apply `shadow-xs` by default on cards
- Apply `shadow-sm` on hover or active states
- Avoid heavy shadows; the aesthetic relies on light pastel lifts

---

## Blur Tokens

| Token | Value | Where Used |
|-------|-------|------------|
| `blur-overlay` | 4px | Overlays or modal backgrounds. Rarely used; apply to darken content behind pop-ups while maintaining context. |

---

## Token Usage Rules

### 1. Color Assignment
- Assign accent colors by context rather than randomly
- Use `color-primary-red` for primary calls to action and urgent highlights
- Use `color-primary-green`, `color-primary-blue`, `color-primary-yellow` to distinguish statuses (Building, Watching, Validating, etc.)
- Avoid using more than two accent colors within a single component

### 2. Background Hierarchy
- Use `color-bg-cream` for light pages
- Use `color-bg-dark` exclusively for the stage board
- Card interiors use `color-neutral-light`
- Never place text directly on `color-bg-cream` without a card or panel

### 3. Typography Scale
- Maintain clear hierarchy: script/display fonts for headlines, medium weight sans-serif for subheadings, body copy at `body-md`
- Scale down fonts responsively according to viewport width

### 4. Spacing Rhythm
- Use multiples of the spacing tokens to separate elements
- Large sections always start and end with at least `spacing-6`
- Cards use `spacing-3` or `spacing-4` for internal padding

### 5. Borders and Radii
- All major cards should use the `border-hand-drawn` style
- Smaller elements (badges, buttons) can use regular radius tokens with solid borders

### 6. Shadows
- Apply `shadow-xs` by default on cards
- Apply `shadow-sm` on hover or active states
- Avoid heavy shadows

### 7. Blur
- Use `blur-overlay` only for modal backgrounds or overlays
- Do not blur primary content

---

## CSS Custom Properties Template

```css
:root {
  /* Colors - Backgrounds */
  --color-bg-cream: #FFFAF2;
  --color-bg-dark: #141414;
  
  /* Colors - Primary */
  --color-primary-red: #FF4466;
  --color-primary-green: #2EB67D;
  --color-primary-yellow: #F7D548;
  --color-primary-blue: #65A9E6;
  --color-primary-purple: #9373B2;
  
  /* Colors - Neutrals */
  --color-neutral-light: #FFF7F2;
  --color-neutral-dark: #1A1A1A;
  --color-muted-gray: #666666;
  
  /* Colors - Status */
  --color-success: #2ECC71;
  --color-warning: #F39C12;
  --color-error: #E74C3C;
  --color-caution: #FFDD95;
  
  /* Typography */
  --font-script: 'Caveat', cursive;
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'Fira Code', monospace;
  
  --text-display-xxl: 4.5rem;
  --text-display-xl: 4rem;
  --text-display-lg: 3rem;
  --text-heading-md: 2rem;
  --text-heading-sm: 1.5rem;
  --text-body-lg: 1.125rem;
  --text-body-md: 1rem;
  --text-body-sm: 0.875rem;
  --text-label-xs: 0.75rem;
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 1rem;
  --space-4: 1.5rem;
  --space-5: 2rem;
  --space-6: 2.5rem;
  --space-7: 4rem;
  
  /* Radius */
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  
  /* Shadows */
  --shadow-xs: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-sm: 0 4px 8px rgba(0, 0, 0, 0.15);
  
  /* Blur */
  --blur-overlay: 4px;
}
```
