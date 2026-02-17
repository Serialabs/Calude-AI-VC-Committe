# Site A: Index Page Specification

**URL:** `/index.html`  
**Slug:** `index`  
**Purpose:** Landing page listing the AI-powered VC investment committee simulation and linking to all reports.

---

## Section Order

1. **Hero banner**
2. **Submit your pitch deck**
3. **How it works**
4. **AIVC Prompt — System Instructions**
5. **Published reports**
6. **About this project**
7. **Footer**

---

## Layout Skeleton

### Container Rules
- Single central container with max width ~1200px
- Sections stacked vertically with generous vertical padding (~80px) between sections
- Background is dark (Site A) → **Transform to:** cream with dotted grid (Site B)
- Cards use lighter panels for contrast

### Grid Rules
- Report cards arranged in responsive grid
- Large screens: 2-3 columns
- Tablets: 2 columns
- Mobile: single column

### Spacing Rhythm
- Larger spacing (4× base unit) separates major sections
- Inner card padding uses 2-3× base unit
- 16-20px space between rows of cards
- 24-32px margin around cards

### Alignment Rules
- All headings and body copy left-aligned
- Buttons centered within their sections
- Cards use equal width with consistent gaps

---

## Component Instances

| Component | Location | Structure | States & Behavior |
|-----------|----------|-----------|-------------------|
| **HeaderNav** | Top of page | Site name left, navigation links right (Prompt, Reports) | Sticky at top on scroll; links highlight on hover |
| **HeroBanner** | Section 1 | Large `<h1>`, descriptive paragraph, primary button linking to external form | Button changes color on hover; heading uses gradient text → **Transform to:** script font |
| **CallToAction** | Section 2 | Secondary CTA repeating "Submit your pitch deck" with supporting copy | Button opens external link; darkens on hover |
| **FourStepList** | Section 3 | Four items with icon, heading, description | Icons animate on hover; equal width on large, stack on small |
| **PromptCard** | Section 4 | Card summarizing prompt with "Read full prompt" link | Lifts on hover; border brightens |
| **ReportCard** | Section 5 | For each report: title, tags, stage, year, teaser, arrow | Lifts on hover; tags have colored backgrounds; clicking navigates |
| **Footer** | Section 7 | Copyright notice, links | Static; minimal |

---

## Interaction Notes

### Hover
- Report cards and CTA buttons scale up by ~3% and increase shadow
- Tags change background shade slightly
- Navigation links underline on hover

### Click
- Report card → navigates to report page
- CTA buttons → open external Google Form in new tab

### Scroll
- Header remains fixed at top
- No scroll-triggered animations (Site A) → **Add:** fade-up reveals (Site B)

---

## SEO/Semantic Notes

### Heading Hierarchy
- `<h1>` for hero heading only
- `<h2>` for subsequent sections ("How it works", "AIVC Prompt", "Published reports")
- `<h3>` for each item within multi-card sections

### Landmark Structure
- Main content wrapped in `<main>`
- Navigation bar inside `<nav>`
- Footer uses `<footer>`
- Each major section wrapped in `<section>` with `id` for anchor linking

### Repeated Patterns
- Each report card uses same markup structure
- Metadata (year, stage) marked with `<span>` elements and semantic classes

---

## Style Transfer Notes

### Background
- **Before:** Dark (#1a1a1a)
- **After:** Cream (#FFFAF2) with dotted grid

### Hero
- **Before:** Dark panel, gradient text
- **After:** Script font for headline, pastel background block, hand-drawn border

### Cards
- **Before:** Dark with solid borders
- **After:** Light pastel fill, sketchy borders, hover lift + glow

### Buttons
- **Before:** Dark with light text
- **After:** `color-primary-red` background, lift on hover

---

## Content Structure

### Hero Banner
```
Heading: "AI-Powered VC Investment Committee"
Subheading: "See how 10 legendary VCs would evaluate famous pitch decks using AI simulation"
CTA: "Submit Your Pitch Deck" → [external form]
```

### How It Works (4 Steps)
1. **Deal Memo Extraction** - AI extracts key information from pitch deck
2. **VC Evaluation** - 10 AI personas independently evaluate the startup
3. **Investment Committee Debate** - Personas debate across 5 rounds
4. **Final Report** - Synthesized insights, questions, and recommendations

### Published Reports
- Uber (2008) - Seed
- WeWork (2012) - Cautionary Tale
- thefacebook (2004) - Launch
- YouTube (2005) - Seed
- AirBed&Breakfast (2008) - Seed

---

## Rebuild Checklist

- [ ] Build sticky HeaderNav with Site B styling
- [ ] Create HeroBanner with script headline and pastel background
- [ ] Implement CallToAction section with secondary button
- [ ] Build FourStepList with icons and hover animations
- [ ] Create PromptCard with link to prompt.html
- [ ] Render grid of ReportCard instances from data
- [ ] Add About paragraph
- [ ] Implement Footer
- [ ] Add scroll-reveal animations to sections
- [ ] Test responsive behavior at all breakpoints
