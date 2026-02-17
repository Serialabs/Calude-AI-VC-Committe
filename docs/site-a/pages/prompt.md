# Site A: Prompt Page Specification

**URL:** `/prompt.html`  
**Slug:** `prompt`  
**Purpose:** Present the full simulation prompt and explain the investment committee pipeline and VC personas so that users understand how the AI simulation works.

---

## Section Order

1. **Overview of the pipeline**
2. **Investment committee debate structure**
3. **VC personas**
4. **Full prompt text**
5. **Footer**

---

## Layout Skeleton

### Container Rules
- Centered container (~1200px max width) wraps all content
- Sections stack vertically with generous breathing space
- Background is dark (Site A) → **Transform to:** cream with dotted grid (Site B)
- Cards use slightly lighter panels

### Grid Rules
- Personas section uses responsive grid:
  - 4 columns on large screens
  - 2 columns on tablets
  - 1 column on mobile

### Column Behavior
- Each persona card contains:
  - Heading (persona name)
  - Subheading (role)
  - Bullet lists for strengths, concerns, perspective
- Lists are aligned left within each card

### Spacing Rhythm
- Large top and bottom padding (~64-80px) separates sections
- Persona cards have internal padding (~24px)
- Code block spans full container width with top/bottom margin

### Alignment Rules
- Section titles left-aligned
- Persona cards and code block align with container's left edge

---

## Component Instances

| Component | Location | Structure | States & Behavior |
|-----------|----------|-----------|-------------------|
| **HeaderNav** | Top of page | Same nav as index page | Sticky, highlights active link |
| **SectionHeader** | For "Overview", "Debate structure", "VC personas" | `<h2>` and optional subtitle | None |
| **OrderedList** | Pipeline overview | Four numbered items with title and description | None |
| **DebateStructure** | Debate structure section | Paragraphs and sublists describing roles and rounds | None |
| **PersonaCard** | VC personas grid | Persona name, area, bullet lists (strengths, concerns, perspective) | Cards lift on hover; copy button appears |
| **PromptCodeBlock** | Full prompt text | Scrollable container with monospaced text, copy button | Copy icon appears on hover; clicking copies text |
| **Footer** | Bottom of page | Simple footer | Static |

---

## Interaction Notes

### Hover
- Persona cards raise by ~2px and border glows
- Small clipboard icon appears on card (if copy functionality available)
- Code block displays copy icon in top-right corner on hover

### Click
- Copy icons copy respective text to clipboard
- No other interactive controls

### Scroll
- Code block scrolls independently if content exceeds available height
- Page uses standard vertical scrolling
- No parallax effects

---

## SEO/Semantic Notes

### Heading Hierarchy
- `<h1>` at top ("Full Prompt" or "How It Works")
- `<h2>` for pipeline overview, debate structure, VC personas
- `<h3>` for persona names inside each card

### Landmark Structure
- Main content wrapped in `<main>`
- Personas grid uses `<section>` with `role="grid"` for accessibility
- Lists use `<ol>` and `<ul>` appropriately

### Repeated Patterns
- Persona cards repeat identical markup for consistency
- Code block uses `<pre><code>` semantics for proper syntax highlighting

---

## Style Transfer Notes

### Background
- **Before:** Dark
- **After:** Cream with dotted grid

### Section Headers
- **Before:** Plain sans-serif
- **After:** Script font for main title, sans-serif for section headings

### Persona Cards
- **Before:** Dark cards with solid borders
- **After:** Pastel backgrounds (rotate through palette), hand-drawn borders, hover lift

### Code Block
- **Before:** Dark background with light text
- **After:** Light tinted background, monospace font, pastel border

---

## Content Structure

### Pipeline Overview (4 Steps)

1. **Deal Memo Extraction**
   - AI analyzes the pitch deck
   - Extracts: Problem, Solution, Business Model, Stage, Market Size, Traction, Competition

2. **VC Evaluation**
   - 10 AI personas independently evaluate
   - Each provides: Strengths, Concerns, Unique Perspective, Decision

3. **Investment Committee Debate**
   - 5 rounds of structured discussion
   - Roles: Bull (advocate), Bear (skeptic), Wild Card (contrarian)
   - Builds toward consensus

4. **Final Report**
   - 5 Key Insights
   - Critical Questions for Founder
   - Action Plans
   - Executive Summary with final recommendation

### Debate Structure

**Roles:**
- **Bull:** Strongest advocate for the investment
- **Bear:** Most skeptical voice
- **Wild Card:** Brings unexpected perspectives

**Rounds:**
1. Initial positions stated
2. Cross-examination and challenges
3. New information introduced
4. Position refinement
5. Final consensus building

### VC Personas (20 total)

Each card includes:
- **Name:** e.g., "Marc Andreessen"
- **Area:** e.g., "Software/Platform"
- **Strengths:** 3-5 bullet points
- **Concerns:** 3-5 bullet points
- **Unique Perspective:** 1-2 sentences

---

## Rebuild Checklist

- [ ] Reuse HeaderNav from index page
- [ ] Implement SectionHeader component with consistent styling
- [ ] Build OrderedList for pipeline overview with numbered badges
- [ ] Create DebateStructure container with paragraphs and nested lists
- [ ] Build responsive PersonaCard component with hover effects
- [ ] Implement PromptCodeBlock with scrollable `<pre><code>` and copy button
- [ ] Add Footer
- [ ] Ensure sections separated by large vertical margins
- [ ] Make persona grid responsive (4 → 2 → 1 columns)
- [ ] Add scroll-reveal animations
