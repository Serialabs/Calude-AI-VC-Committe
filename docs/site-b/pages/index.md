# Site B: Index Page Taste Reference

**URL:** `/` (root)  
**Slug:** `index`  
**Purpose:** Welcome visitors to VoxYZ, introduce the six AI agents and preview the company's products, radar and insights.

---

## Taste Signature Rules

### 1. Playful Hand-Drawn Feel
- Use large, expressive script fonts for key words ("Agents", "One Company")
- Irregular, sketchy borders around panels

### 2. Dotted Grid Background
- Entire page sits on light cream backdrop with subtle grey dotted grid pattern
- Unifies sections and gives technical notebook vibe

### 3. Pastel Palette with Bright Accents
- Colors include: off-white backgrounds, black type
- Pastel highlights: reds, greens, blues, yellows
- Accent reds (#FF4466) draw attention to CTA buttons

### 4. Irregular Panel Outlines
- Cards and panels drawn with wavy, hand-drawn lines
- Corners are uneven
- Strokes vary in thickness (~2px)

### 5. Large Spacing and Vertical Rhythm
- Sections generously spaced
- Hero occupies ~70% of initial viewport height
- Sections separated by 80-120px whitespace

### 6. Icons and Illustration Accents
- Agent icons are simple line drawings with bold fills
- Accent illustrations (arrows, scribbles) near section titles

### 7. Micro Interactions
- Buttons glow and lift on hover
- Agent icons wiggle slightly
- Panels gain subtle shadow and highlight border when hovered

### 8. Scroll-Reveals
- Sections fade in and slide upward entering viewport
- Hero content may animate in from bottom on page load

---

## Visual Treatment

### Background System
- Light cream canvas with faint grey dotted grid
- Some sections add slightly tinted pastel overlays (pale pink, blue)

### Card/Panel Styling
- Hand-drawn, irregular outlines (~2px line weight)
- Corners vary in radius
- Interiors use pastel fills (soft coral, mint, lavender)
- Shadows are faint and pastel-tinted

### Border/Stroke Rules
- Primary borders are hand-drawn strokes
- Secondary strokes around sub-elements (tags)
- No solid straight lines

### Shadow/Blur Rules
- Shadows subtle and colored (light pink drop shadow for coral panels)
- Blur rarely used—mostly backdrop filters for overlays

### Highlight/Active Rules
- Active buttons invert colors (dark background with light text) and gain glowing outline
- Hovering over panels increases shadow intensity and adds pastel glow

---

## Typography System

### Type Scale Usage
| Element | Size | Font |
|---------|------|------|
| Hero keywords | ~64px | Script |
| Section headings | ~48px | Sans-serif display |
| Subheadings | ~24px | Sans-serif |
| Body copy | ~16px | Sans-serif |
| Small labels | 12-14px | Sans-serif |

### Weights
- Script font: Bold/heavy
- Sans-serif display: Medium
- Body copy: Regular
- Labels: Semi-bold

### Line Heights
- Generous (~1.4) for readability
- Script headings have tighter spacing

### Link Styling
- Underlined only on hover
- Default link color matches accent red
- Visited links remain same

### Label/Meta Styling
- All-caps
- Letter spacing (~0.05em)
- Pastel backgrounds with darker text

---

## Motion + Interaction

### Hover Behavior
- Buttons translate upward 2-3px, change fill to darker pastel
- Panels lift slightly, borders brighten
- Icons wiggle or rotate few degrees

### Transition Durations
- Hover transitions: 150-200ms
- Section reveals: 300-400ms fades + 30px upward movement

### Easing
- `ease-out` cubic for playful, responsive feel

### Scroll Triggers
- Each section triggers fade-up animation entering viewport
- Hero heading and CTA slide in from below on load

### Sticky Elements
- Navigation bar sticks after scrolling past hero
- Gains slightly opaque background for contrast

---

## Responsive Behavior

### Navigation
- < 768px: Horizontal nav collapses into hamburger menu
- Expands vertically over content

### Grid Collapse
- Six agent panels: 3 columns → 2 columns → 1 column
- Spacing reduces to 40-60px on small devices

### Typography Scaling
- Script and display fonts scale down (64px → 40px)
- Body text remains at 16px

### Image Scaling
- Agent icons: 80px → 48px on mobile
- Maintain aspect ratio

---

## Key Visual Elements to Extract

### Dotted Grid Background
```css
.dotted-grid {
  background-color: #FFFAF2;
  background-image: radial-gradient(#ccc 1px, transparent 1px);
  background-size: 20px 20px;
}
```

### Hand-Drawn Panel
```css
.hand-drawn-panel {
  background: var(--color-neutral-light);
  border: 2px solid currentColor;
  border-radius: 8px 12px 10px 14px; /* Irregular */
  box-shadow: 0 2px 4px rgba(255, 68, 102, 0.1);
}
```

### Script Heading
```css
.script-heading {
  font-family: 'Caveat', cursive;
  font-weight: 700;
  font-size: clamp(2.5rem, 5vw, 4rem);
}
```

### Hover Lift
```css
.hover-lift {
  transition: transform 150ms ease-out, box-shadow 150ms ease-out;
}

.hover-lift:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
```

### Scroll Reveal
```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 400ms ease-out, transform 400ms ease-out;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## Screenshot Reference Points

The VoxYZ index page demonstrates:
1. Large script typography in hero ("6 AI Agents, One Company")
2. Pastel agent cards with irregular borders
3. Generous whitespace between sections
4. Subtle shadows and hover effects
5. Dotted grid visible through sections
6. Playful, approachable aesthetic

---

## Applicable to AIVC

### Direct Applications
- Dotted grid background
- Script font for company names in reports
- Pastel card backgrounds for memo cards
- Hand-drawn borders on all panels
- Hover lift effects on cards
- Scroll-reveal animations for sections

### Modifications for AIVC
- Use pastel colors to distinguish different stages (blue for Stage 1, green for Stage 2, etc.)
- Decision badges use status colors (success/error/warning)
- Maintain professional tone while adding playfulness
