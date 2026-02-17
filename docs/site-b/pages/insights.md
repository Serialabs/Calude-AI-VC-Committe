# Site B: Insights Page Taste Reference

**URL:** `/insights` (also `/social`, `/blog`)  
**Slug:** `insights`  
**Purpose:** Aggregate and showcase written outputs—insights, blog posts, field notes and reports—in a single listing page.

---

## Taste Signature Rules

### 1. Editorial Feel
- Clean editorial layout with generous margins
- Articles have room to breathe

### 2. Hand-Drawn Headings
- "Field Notes from the Machine" uses large script font
- Subheadings and meta in small caps

### 3. Info Panels
- Key statistics (total publications, active agents, year) as pastel pills with icons
- Beneath the hero area

### 4. Article Cards
- Each card resembles newspaper clipping
- Sketchy border and pastel background
- Tags (INSIGHT, BLOG) and pinned badges at top
- Arrow icon at bottom right encourages navigation

### 5. Pinned Highlighting
- Yellow "pinned" flag in top right corner
- Slightly darker border to draw attention

### 6. Category Color Coding
| Category | Color |
|----------|-------|
| Insight | Blue |
| Blog | Green |
| Other | Custom pastels |

Category tags appear as small capsules in card header.

---

## Visual Treatment

### Background System
- Cream dotted grid as other light pages
- Hero separated from list by lightly tinted panel

### Card/Panel Styling
- Irregular, sketchy borders with pastel fills
- Titles large and medium weight
- Descriptions lighter
- Arrow icon on irregular patch overlapping card corner

### Border/Stroke Rules
- Card outlines vary in thickness (~2px)
- Occasionally break to enhance hand-drawn impression
- Pinned flags are small rectangles with triangular tails

### Shadow/Blur Rules
- Cards drop subtle shadow, increasing on hover
- No blurs on this page

### Highlight/Active Rules
- Hovering darkens border and lifts card
- Active categories invert colors or adopt darker pastel

---

## Typography System

| Element | Size | Style |
|---------|------|-------|
| Hero heading | ~56px | Script |
| Subheading | ~18px | Sans-serif |
| Article titles | ~24px | Medium sans-serif |
| Descriptions | ~16px | Regular |
| Tags | ~12px | Uppercase small caps |

### Weights
- Heading: Bold
- Article title: Semi-bold
- Description: Regular
- Tags: Semi-bold
- Pinned badge: Bold

### Line Heights
- Titles: ~1.2
- Descriptions: ~1.4

### Link Styling
- Arrow at bottom right acts as link
- Entire card is clickable
- Arrow rotates slightly on hover

### Label/Meta Styling
- Category pills use pastel backgrounds matching category color
- Date stamps use muted grey and small caps

---

## Motion + Interaction

### Hover Behavior
- Cards lift and cast deeper pastel shadow
- Arrow icon rotates ~45° and darkens
- Pinned flags remain static

### Transition Durations
- Hover transitions: ~150-200ms
- Arrow rotation: ~200ms

### Easing
- `ease-out` cubic for card lift and arrow rotation

### Scroll Triggers
- Cards fade up as user scrolls into list
- Hero section slides in from below on page load

### Sticky Elements
- Header remains at top as on other pages

---

## Responsive Behavior

### Grid Collapse
- Single column on small screens
- Margins reduce from 40px to 20px
- Titles wrap earlier

### Hero Scaling
- Script headings: 56px → 36px
- Info pills wrap to two lines if necessary

### Arrow Repositioning
- Moves to bottom center on mobile for accessibility

---

## Key Patterns for AIVC

### Article Cards → Report Cards
Direct mapping:
- Category pill → Stage/Year tags
- Title → Company name
- Description → Teaser
- Arrow → Navigation indicator
- Pinned → Featured reports

### Statistics Pills
Could show:
- Total reports analyzed
- Companies evaluated
- Average committee size

### Category Filtering
Could filter by:
- Investment decision (INVEST/PASS/DIG DEEPER)
- Industry category
- Year

---

## CSS Patterns to Extract

### Article Card
```css
.article-card {
  background: var(--color-neutral-light);
  border: 2px solid var(--color-muted-gray);
  border-radius: 10px 14px 12px 8px;
  padding: var(--space-4);
  position: relative;
  transition: 
    transform 200ms ease-out,
    box-shadow 200ms ease-out;
}

.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}
```

### Category Pill
```css
.category-pill {
  display: inline-block;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 4px;
}

.category-pill--insight {
  background: var(--color-primary-blue);
  color: white;
}

.category-pill--blog {
  background: var(--color-primary-green);
  color: white;
}
```

### Pinned Badge
```css
.pinned-badge {
  position: absolute;
  top: -8px;
  right: 16px;
  background: var(--color-primary-yellow);
  color: var(--color-neutral-dark);
  padding: 4px 8px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
}

.pinned-badge::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid var(--color-primary-yellow);
}
```

### Arrow Icon
```css
.arrow-icon {
  width: 24px;
  height: 24px;
  transition: transform 200ms ease-out;
}

.article-card:hover .arrow-icon {
  transform: rotate(45deg);
}
```

### Hero Stats
```css
.stat-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--color-neutral-light);
  border-radius: 20px;
  font-size: 14px;
}

.stat-pill__icon {
  width: 20px;
  height: 20px;
  opacity: 0.7;
}

.stat-pill__value {
  font-weight: 700;
}
```
