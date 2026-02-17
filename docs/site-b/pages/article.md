# Site B: Article Page Taste Reference

**URL:** `/insights/<slug>`  
**Slug:** `article`  
**Purpose:** Present a detailed article, insight or blog post. The slug determines the content, but all articles share the same layout and design.

---

## Taste Signature Rules

### 1. Narrative Pacing
- Opens with category tag, publication date
- Oversized, hand-drawn headline
- Subtitle summarizes the piece

### 2. Immersive Content
- Sections alternate between text, lists, images, diagrams
- Embedded slide decks or code snippets
- Hand-drawn divider lines separate sections

### 3. Color-Coded Highlights
- Pull quotes, callouts, code blocks use pastel backgrounds
- Category colors reused in headings and highlights

### 4. Hand-Drawn Embellishments
- Small doodles (arrows, stars)
- Script annotations alongside diagrams
- Reinforces playful style

### 5. Persistent Navigation
- Breadcrumb at top links back to insights list
- Related posts section at bottom with miniature article cards

---

## Visual Treatment

### Background System
- Light cream dotted grid
- Article body sits on white panel with subtle irregular outline

### Card/Panel Styling
- Article wrapper uses sketchy border
- Pull quotes and callouts in pastel panels with irregular outlines
- Code blocks use monospaced font on tinted background

### Border/Stroke Rules
- Hand-drawn strokes delineate sections and wrap callouts
- Horizontal lines are wavy
- Side notes connected with scribbled arrows

### Shadow/Blur Rules
- Minimal shadows; focus on content
- Callouts cast slight pastel shadow to lift them

### Highlight/Active Rules
- Code block lines highlight on hover for copying
- Links underline on hover

---

## Typography System

| Element | Size | Style |
|---------|------|-------|
| Article title | ~48-60px | Script font |
| Subtitle | ~20px | Sans-serif |
| Section headings | ~28px | Display sans-serif |
| Body text | ~16px | Sans-serif |
| Captions/footnotes | ~12px | Sans-serif |

### Weights
- Title: Bold
- Subtitles: Semi-bold
- Body: Regular
- Captions: Light

### Line Heights
- Headings: ~1.3
- Body copy: ~1.6 (generous for readability)

### Link Styling
- Underlined on hover
- Colored using primary accent
- Code block links: monospaced underlined text

### Label/Meta Styling
- Category tags: uppercase, small caps, pastel backgrounds
- Author info: small italic text

---

## Motion + Interaction

### Hover Behavior
- Pull quotes subtly enlarge when hovered
- Code blocks display copy icon on hover
- Clicking copies to clipboard

### Embedded Slide Decks
- Allow horizontal navigation
- Next/prev slides trigger 200ms transitions

### Transition Durations
- Section reveal: ~300ms (fade + translate)
- Copy tooltip: appears instantly, fades out over 1s

### Easing
- `ease-out` for reveals
- `ease-in-out` for slide transitions

### Scroll Triggers
- Sections fade in as reader scrolls
- Slight parallax on diagrams and callouts

### Sticky Elements
- Breadcrumb at top until scroll past hero

---

## Responsive Behavior

### Text Reflow
- Single column on narrow screens
- Images and slide decks scale to 100% width
- Tables scroll horizontally

### Headings Scaling
- Script/display headings: 60px → 36px
- Subtitle wraps to multiple lines

### Sidebar Removal
- Side notes and annotations move inline below related paragraph

### Breadcrumb Collapsing
- Becomes simple "Back to insights" link on small screens

---

## Key Patterns for AIVC

### Article Layout → Report Layout
The article page structure maps well to report pages:
- Hero with company name (script)
- Sections for each stage
- Content alternating between cards and text
- Callouts for key insights

### Pull Quotes → Key Insights
- Highlight important findings from each stage
- Use pastel backgrounds

### Code Blocks → Prompt Display
- For showing the full prompt
- Copy-to-clipboard functionality

### Related Posts → Other Reports
- Show other company reports at bottom
- Mini card format

### Section Dividers
- Use wavy lines between stages
- Hand-drawn aesthetic

---

## CSS Patterns to Extract

### Article Container
```css
.article-container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border: 2px solid var(--color-muted-gray);
  border-radius: 12px 16px 14px 10px;
  padding: var(--space-6);
}
```

### Article Header
```css
.article-header {
  margin-bottom: var(--space-6);
}

.article-header__category {
  display: inline-block;
  padding: 4px 12px;
  background: var(--category-color);
  color: white;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 4px;
  margin-bottom: var(--space-2);
}

.article-header__date {
  font-size: 14px;
  color: var(--color-muted-gray);
  margin-bottom: var(--space-3);
}

.article-header__title {
  font-family: var(--font-script);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: var(--space-3);
}

.article-header__subtitle {
  font-size: 20px;
  color: var(--color-muted-gray);
  line-height: 1.5;
}
```

### Callout/Pull Quote
```css
.callout {
  background: var(--callout-color, #FFF7F2);
  border: 2px solid var(--callout-border, #FFE0D0);
  border-radius: 8px 12px 10px 14px;
  padding: var(--space-4);
  margin: var(--space-5) 0;
  position: relative;
}

.callout::before {
  content: '"';
  font-family: var(--font-script);
  font-size: 48px;
  color: var(--callout-border);
  position: absolute;
  top: -10px;
  left: 16px;
}

.callout:hover {
  transform: scale(1.01);
}
```

### Code Block
```css
.code-block {
  background: #F8F4F0;
  border: 1px solid var(--color-muted-gray);
  border-radius: var(--radius-sm);
  padding: var(--space-4);
  overflow-x: auto;
  position: relative;
}

.code-block__copy {
  position: absolute;
  top: var(--space-2);
  right: var(--space-2);
  opacity: 0;
  transition: opacity 150ms ease-out;
}

.code-block:hover .code-block__copy {
  opacity: 1;
}

.code-block code {
  font-family: var(--font-mono);
  font-size: 14px;
  line-height: 1.6;
}
```

### Section Divider
```css
.section-divider {
  height: 2px;
  background: url("data:image/svg+xml,..."); /* wavy line SVG */
  margin: var(--space-6) 0;
  opacity: 0.3;
}
```

### Breadcrumb
```css
.breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: 14px;
  color: var(--color-muted-gray);
  margin-bottom: var(--space-4);
}

.breadcrumb a {
  color: var(--color-primary-red);
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}
```

### Related Posts
```css
.related-posts {
  margin-top: var(--space-7);
  padding-top: var(--space-6);
  border-top: 2px solid var(--color-muted-gray);
}

.related-posts__title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: var(--space-4);
}

.related-posts__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-4);
}
```
