# Site A: Report Page Template Specification

This template applies to all report pages:
- `/uber_2008.html`
- `/wework_2012.html`
- `/facebook_2004.html`
- `/youtube-2005.html`
- `/airbnb-2008.html`

---

## Page Identity

**URL Pattern:** `/<company>_<year>.html` or `/<company>-<year>.html`  
**Purpose:** Complete simulation report showing the 4-stage evaluation of a startup pitch.

---

## Section Order (Anchors)

1. **Hero Section** - Company name, tagline, tags
2. **Stage 1: Deal Memo Extraction** (`#stage-1`)
3. **Debate Triggers**
4. **Debate Panel Selection**
5. **Stage 2: Independent VC Evaluation** (`#stage-2`)
6. **Stage 2 Scoreboard**
7. **Stage 3: Investment Committee Debate** (`#stage-3`)
8. **Stage 4: Final Report** (`#stage-4`, `#final-report`)
9. **Footer with Back Link**

---

## Layout Skeleton

### Container Rules
- Central container (~1200px max width)
- Sections stacked vertically
- Generous padding between stages
- Dark background (Site A) → **Transform to:** cream with dotted grid (Site B)

### Grid Rules
- Memo cards: 2×4 or 4×2 grid
- Evaluator cards: 2-column grid on desktop, single column on mobile
- Debate transcript: single column, full width

### Spacing Rhythm
- Stage separations: `spacing-7` (64px)
- Card gaps: `spacing-4` (24px)
- Internal card padding: `spacing-4` (24px)

---

## Stage 1: Deal Memo Extraction

### Component: MemoCard (×8)

Each card represents one aspect of the pitch:

| Card | Content Type |
|------|--------------|
| **Problem** | Bullet list of pain points |
| **Solution** | Bullet list of how product solves it |
| **Business Model** | Revenue streams, pricing |
| **Stage** | Current stage (Seed, Series A, etc.) |
| **Market Size** | TAM, SAM, SOM figures |
| **Traction & Ask** | Current metrics, funding request |
| **Potential Outcomes** | Bull case, bear case scenarios |
| **Competition** | Competitive landscape |

### Style Transfer
- **Before:** Dark cards with labels
- **After:** HandDrawnPanel with pastel fill, TagPill for label, bullet content inside

### Layout
- 2×4 grid on desktop
- 2×2 grid on tablet
- 1 column on mobile

---

## Debate Triggers

### Component: TriggerList

A callout panel listing 4-6 key points that will drive the committee debate.

**Example triggers:**
- Large market opportunity
- Unproven business model
- Regulatory concerns
- Founder experience
- Competitive threats

### Style Transfer
- **Before:** Simple bullet list
- **After:** Callout component with pastel background, icon bullets, hand-drawn border

---

## Debate Panel Selection

### Component: PanelCard (×3)

Shows the three VCs selected for the debate committee.

| Role | Description |
|------|-------------|
| **Bull** | Strongest advocate |
| **Bear** | Most skeptical |
| **Wild Card** | Unexpected perspective |

### Style Transfer
- **Before:** Simple cards with names
- **After:** AgentCard-like layout with pastel backgrounds, role TagPill, persona icon

---

## Stage 2: Independent VC Evaluation

### Component: EvaluatorCard (×10)

Each of the 10 VC personas provides an independent evaluation.

**Card Structure:**
- Persona name (heading)
- Area of expertise (subtitle)
- Strengths (bullet list)
- Concerns (bullet list)
- Unique Perspective (paragraph)
- Decision badge (INVEST / PASS / DIG DEEPER)

### Decision Badge Colors
| Decision | Color |
|----------|-------|
| INVEST | `color-success` (green) |
| PASS | `color-error` (red) |
| DIG DEEPER | `color-warning` (orange) |

### Style Transfer
- **Before:** Dark cards, colored text for decisions
- **After:** HandDrawnPanel with pastel backgrounds, TagPill for decision, hover lift

### Layout
- 2 columns on desktop
- 1 column on mobile

---

## Stage 2 Scoreboard

### Component: Scoreboard

Summary table/chart showing decision distribution.

**Columns:**
| Decision | Count |
|----------|-------|
| INVEST | X |
| PASS | Y |
| DIG DEEPER | Z |

### Style Transfer
- **Before:** Simple table
- **After:** Horizontal bar chart with pastel bars, or stylized table with sketchy borders

---

## Stage 3: Investment Committee Debate

### Component: DebateTranscript

Multi-round discussion between the 3 panel members.

**Structure:**
```
Round 1: Initial Positions
  - [Bull Name]: "..."
  - [Bear Name]: "..."
  - [Wild Card Name]: "..."

Round 2: Cross-Examination
  ...

Round 3: New Information
  ...

Round 4: Position Refinement
  ...

Round 5: Final Consensus
  ...
```

### Style Transfer
- **Before:** Plain text with names
- **After:** 
  - Color-coded speaker tags (TagPill style)
  - Light callout backgrounds behind each round
  - Important statements highlighted
  - Scroll-reveal animation for each round

### Layout
- Single column, full width
- Each round as separate section
- Collapsible (optional) for mobile

---

## Stage 4: Final Report

### Subsections

#### 4.1 Key Insights
- 5 numbered insights
- Each with title and explanation
- **Component:** Numbered list in HandDrawnPanel

#### 4.2 Questions for the Founder
- 5-10 critical questions
- **Component:** Bullet list in HandDrawnPanel with question icon

#### 4.3 Action Plans
- Specific recommendations
- **Component:** Checklist-style in HandDrawnPanel

#### 4.4 Executive Summary
- Final recommendation
- Summary paragraph
- **Component:** Large callout panel with final verdict

### Style Transfer
- **Before:** Dark sections with headers
- **After:** Pastel HandDrawnPanels, script headings, icons for each subsection

---

## Footer

### Component: Footer

- "Back to Reports" link
- Copyright
- Simple styling

---

## Company-Specific Data

### Uber (2008)
- **Stage:** Seed
- **Year:** 2008
- **Accent Color:** `color-primary-blue`
- **Problem:** Taxi hailing inefficiency
- **Solution:** Black car service via app

### WeWork (2012)
- **Stage:** Series A
- **Year:** 2012
- **Accent Color:** `color-primary-yellow`
- **Special Tag:** "Cautionary Tale"
- **Problem:** Expensive, inflexible office space
- **Solution:** Co-working with community

### thefacebook (2004)
- **Stage:** Launch
- **Year:** 2004
- **Accent Color:** `color-primary-blue`
- **Problem:** Physical face books on paper
- **Solution:** Verified online social network

### YouTube (2005)
- **Stage:** Seed
- **Year:** 2005
- **Accent Color:** `color-primary-red`
- **Problem:** Video hosting limitations
- **Solution:** Upload-convert-community model

### AirBed&Breakfast (2008)
- **Stage:** Seed
- **Year:** 2008
- **Accent Color:** `color-primary-green`
- **Problem:** Expensive hotels
- **Solution:** Peer-to-peer home rentals

---

## Interaction Notes

### Hover
- MemoCards lift slightly
- EvaluatorCards lift with glow
- Decision badges may pulse on hover

### Scroll
- Each stage fades in as it enters viewport
- Debate rounds reveal sequentially
- Sticky navigation (optional) showing current stage

### Click
- Anchor links jump to stages
- Copy buttons for key sections (optional)

---

## Accessibility Requirements

- Proper heading hierarchy: `<h1>` for company, `<h2>` for stages, `<h3>` for subsections
- Semantic lists throughout
- Decision badges have `aria-label`
- Debate speakers clearly identified
- Skip link to main content
- Anchor navigation accessible

---

## Rebuild Checklist

- [ ] Build Hero with script company name and TagPills
- [ ] Create MemoCard component for Stage 1
- [ ] Implement TriggerList as Callout
- [ ] Build PanelCard for debate panel selection
- [ ] Create EvaluatorCard with decision badges
- [ ] Implement Scoreboard visualization
- [ ] Build DebateTranscript with colored speaker tags
- [ ] Create Final Report subsections
- [ ] Add scroll-reveal animations to all stages
- [ ] Implement anchor navigation
- [ ] Test responsive behavior
- [ ] Add back link in footer
