# Style Transfer Rules

This document outlines how to apply Site B's visual system to Site A's structure. Keep the simulation flow and content of Site A intact while adopting the color palette, typography, spacing, borders and motion grammar of Site B.

---

## Preserve from Site A (Structure)

### 1. Page Hierarchy
Maintain the four-stage narrative on report pages:
- Deal Memo Extraction
- Independent VC Evaluation
- Committee Debate
- Final Report

Retain section headings and their semantic order.

### 2. Information Architecture
Keep the content grouping:
- Cards summarizing problems, evaluation lists
- Debate transcripts
- Final report subsections

Keep anchor IDs (e.g., `#stage-1`, `#stage-2`) for navigation.

### 3. VC Personas and Data Fields
Preserve the persona names, strengths, concerns, decisions and final insights. **Do not change text or data fields.**

### 4. Navigation Flow
- Keep the index page linking to report pages
- Provide a prompt page explaining the simulation
- Ensure back links remain functional

### 5. Accessibility and Semantics
- Preserve proper heading hierarchy
- Maintain landmarks (`nav`, `main`, `section`, `footer`)
- Keep lists and tables semantically correct

---

## Borrow from Site B (Taste)

### 1. Color Palette
Replace Site A's dark theme with Site B's pastel palette:
- Use `color-bg-cream` for page backgrounds
- Use pastel fills on cards
- Use accent colors to differentiate stages and statuses:
  - `color-primary-red` for CTAs
  - `color-primary-blue` for WATCHING/info
  - `color-primary-green` for BUILDING/success
  - `color-primary-yellow` for caution/pinned
  - `color-primary-purple` for SHIPPED/special

### 2. Hand-Drawn Borders
Swap straight panel outlines for irregular, sketchy borders (`border-hand-drawn`). Give cards and stage panels a playful, imperfect feel.

### 3. Typography
- Introduce script headings for company names and major section titles
- Use Site B's typography scale for headings and body text
- Maintain a clear hierarchy

### 4. Spacing and Layout
- Adopt the generous spacing and grid system of Site B
- Increase whitespace around sections
- Allow cards to breathe
- Use the spacing tokens from `03_tokens_site-b.md`

### 5. Badges and Pills
Replace flat badges with pastel pills and wavy outlines. Use `TagPill` components with appropriate colors to mark stages, categories and statuses.

### 6. Motion Grammar
Apply hover lifts, glows and scroll-reveal animations from Site B:
- Stage transitions fade and slide in
- Debate transcripts appear with scroll reveals
- Card appearances use the motion tokens from `04_motion_system_site-b.md`

### 7. Micro Interactions
Add subtle interactions:
- Hover lifts on report cards
- Clickable badges that glow
- Copy-to-clipboard icons that appear on hover for prompt text
- **Avoid heavy animations**

---

## Component Mapping Table

| Site A Component | Keep (Structure) | Replace with (Site B Taste) | Notes |
|------------------|------------------|------------------------------|-------|
| **HeaderNav** | Navigation links and sticky behavior | Use Site B HeaderNav styling: dotted background, pastel accent for active link, collapsible hamburger on mobile | Apply accent color scheme and script logo styling |
| **Hero Section (report pages)** | Company name, tags, subtitle | Use Site B HeroBanner design: pastel background block with hand-drawn border, script font for company name, TagPill for stage/year tags | Choose accent colors per company |
| **MemoCard** | Title and bullet lists summarizing problem, solution, etc. | Render using HandDrawnPanel with pastel fill and irregular border. Use TagPill components for labels (e.g., "Problem"). Increase spacing. | Keep bullet list content identical |
| **TriggerList** | List of debate triggers | Present as a pastel callout or pull-quote panel. Use icon bullets and irregular borders. | Use Callout component from article styling |
| **PanelCard** | Debate panel selection | Replace with AgentCard-like layout: pastel backgrounds, icons representing personas, attribute bars to hint at roles. | Use TagPill to label roles (Bull, Bear, Wild Card) |
| **EvaluatorCard** | VC evaluation cards | Use variant of HandDrawnPanel with pastel backgrounds; include TagPill for decision badges (INVEST, PASS, DIG DEEPER) color-coded via success/error/warning colors | Introduce subtle hover lifts |
| **Scoreboard** | Table summarizing decision counts | Render as a horizontal bar chart with pastel bars or stylised table using sketchy borders. | Each bar or cell uses colors corresponding to decisions |
| **DebateTranscript** | Multi-round discussion transcripts | Keep structure (speaker names, messages) but add color-coded speaker names using TagPill style and lighten backgrounds behind each round. Use light callout backgrounds behind important statements. | Use scroll-reveal animations to fade in each round |
| **Final report sections** | Content and ordering (Insights, Questions, Action Plans, Executive Summary) | Style as pastel HandDrawnPanels with script headings and lists using Site B typography. Use icons to denote key insights and questions. | Add hover highlights to actionable items |
| **ReportCard (index page)** | Title, tags, teaser | Use SuccessStoryCard-like design: pastel backgrounds, irregular borders, TagPills for tags, and an arrow icon. On hover, card lifts and arrow rotates. | Use colors based on industry category |
| **PromptCard** | Summary of prompt instructions | Style as pastel panel with irregular border and a copy button. Use script headings and callout for the full prompt link. | Add copy-to-clipboard icon on hover |
| **Footer** | Simple copyright and links | Use minimal dotted background and pastel accent lines; small caps text and icons matching Site B's footer style. | Keep content unchanged |

---

## Stage-Specific Color Mapping

| Stage/Status | Site A Style | Site B Replacement |
|--------------|--------------|-------------------|
| Deal Memo Extraction | Dark panel | Cream background with blue accents |
| VC Evaluation | Dark cards | Pastel cards, decision badges colored by outcome |
| Committee Debate | Dark transcript | Light callout backgrounds, colored speaker tags |
| Final Report | Dark sections | Cream panels with green/success accents |
| INVEST decision | Green text | `color-success` pill with green background |
| PASS decision | Red text | `color-error` pill with red background |
| DIG DEEPER decision | Yellow text | `color-warning` pill with orange/yellow background |

---

## Decision Badge Colors

| Decision | Color Token | Background | Text |
|----------|-------------|------------|------|
| INVEST | `color-success` | `#2ECC71` (green) | White |
| PASS | `color-error` | `#E74C3C` (red) | White |
| DIG DEEPER | `color-warning` | `#F39C12` (orange) | White or dark |

---

## Do's

✅ **Do** implement the simulation's four stages exactly as structured in Site A, but wrap each card or section in a hand-drawn panel with pastel backgrounds and wavy borders.

✅ **Do** use Site B's color tokens consistently. Assign each report page a dominant accent color to differentiate companies but maintain harmony across the site.

✅ **Do** adopt generous spacing, clear typographic hierarchy and pastel callouts to improve readability and friendliness.

✅ **Do** enhance the user experience with micro-interactions (hover lifts, copy icons, subtle reveals) without overwhelming the user.

✅ **Do** maintain semantic HTML structure for accessibility.

✅ **Do** use scroll-reveal animations for section entrances.

✅ **Do** apply hand-drawn borders to all major cards and panels.

---

## Don'ts

❌ **Don't** retain Site A's dark, hard-edged panels or compact spacing. The new design should feel airy and playful.

❌ **Don't** change the actual content or sequence of the simulation (do not swap or remove stages or data fields).

❌ **Don't** introduce heavy animations or 3D effects; keep motions subtle and in line with Site B's motion system.

❌ **Don't** use more than two accent colors within a single component.

❌ **Don't** place text directly on `color-bg-cream` without a card or panel container.

❌ **Don't** skip the hand-drawn border treatment on cards.

❌ **Don't** use heavy drop shadows; keep shadows pastel-tinted and subtle.

---

## Typography Transfer Rules

| Site A Element | Site B Treatment |
|----------------|------------------|
| Page title | Script font, `display-xl` (64px) |
| Company name | Script font, `display-lg` (48px) |
| Section headings (Stage 1, Stage 2, etc.) | Sans-serif display, `heading-md` (32px) |
| Card titles | Sans-serif medium, `heading-sm` (24px) |
| Body content | Sans-serif regular, `body-md` (16px) |
| Metadata (dates, counts) | Sans-serif, `body-sm` (14px), muted color |
| Labels/badges | Uppercase, `label-xs` (12px), letter-spacing |

---

## Spacing Transfer Rules

| Site A Element | Site B Spacing |
|----------------|----------------|
| Page padding | `spacing-5` (32px) on desktop, `spacing-3` (16px) on mobile |
| Section separation | `spacing-6` (40px) to `spacing-7` (64px) |
| Card internal padding | `spacing-4` (24px) |
| Card gap in grids | `spacing-4` (24px) |
| Between heading and content | `spacing-3` (16px) |
| Between list items | `spacing-2` (8px) |

---

## Border Transfer Rules

| Site A Element | Site B Border Treatment |
|----------------|------------------------|
| Card borders | 2px wavy/sketchy stroke, irregular corners |
| Section dividers | Hand-drawn horizontal lines |
| Badge/pill borders | Solid 1px with `radius-xs` (4px) |
| Table borders | Sketchy strokes, alternating tinted rows |

---

## Example: Report Card Transformation

### Before (Site A)
```html
<div class="report-card dark-bg">
  <h3>Uber</h3>
  <span class="tag">Seed</span>
  <span class="tag">2008</span>
  <p>Black car service...</p>
  <a href="/uber_2008.html">View →</a>
</div>
```

### After (Site B Style)
```html
<article class="hand-drawn-panel report-card" style="--accent: var(--color-primary-blue);">
  <header class="report-card__header">
    <h3 class="script-heading">Uber</h3>
    <div class="tags">
      <span class="tag-pill tag-pill--blue">Seed</span>
      <span class="tag-pill tag-pill--gray">2008</span>
    </div>
  </header>
  <p class="report-card__teaser">Black car service...</p>
  <a href="/uber_2008.html" class="report-card__link">
    <span class="sr-only">View Uber report</span>
    <svg class="arrow-icon"><!-- arrow --></svg>
  </a>
</article>
```

### CSS Changes
```css
.report-card {
  /* Before */
  background: #1a1a1a;
  border: 1px solid #333;
  
  /* After */
  background: var(--color-neutral-light);
  border: 2px solid var(--color-muted-gray);
  border-radius: 8px 12px 10px 14px;
  box-shadow: var(--shadow-xs);
  transition: transform var(--motion-medium) var(--ease-out-cubic);
}

.report-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-sm);
}
```
