# Site B: About Page Taste Reference

**URL:** `/about`  
**Slug:** `about`  
**Purpose:** Introduce the six VoxYZ agents, their attributes and relationships, and explain how they collaborate.

---

## Taste Signature Rules

### 1. Playful Roster Design
- Large script header ("Meet the Agents")
- Grid-like rosters reminiscent of character selection screens
- Agents presented as cards with irregular borders and bright pastel backgrounds

### 2. Attribute Charts
- Each agent card includes horizontal or vertical bar chart
- Attributes: WIS (Wisdom), TRU (Trust), SPD (Speed), CRE (Creativity)
- Bars are colorful and vary in length to visualize strengths

### 3. Interactive Selection
- Navigate between agent cards with arrow keys or clicking
- Selected cards expand slightly and display additional details
- Persona description, signature quotes revealed on selection

### 4. Relationship Matrix
- Table cross-tabbing agents
- Colored cells (green, yellow, red) indicate partner, neutral, or rival
- Sketchy cell borders with small relationship icons

### 5. Recent Shifts Feed
- Cards summarizing recent relationship changes
- Example: "Lumina & Quill synergy +6"
- Pastel backgrounds with directional icons (up/down)

---

## Visual Treatment

### Background System
- Light cream dotted grid consistent with other pages

### Card/Panel Styling
- Agent cards use irregular, wavy borders
- Background colors differ per agent (coral, mint, lavender, blue, yellow, pink)
- Attribute bars are solid pastel rectangles with rounded edges

### Border/Stroke Rules
- Hand-drawn strokes (~2px)
- Matrix table uses alternating tinted backgrounds

### Shadow/Blur Rules
- Selected agent cards cast slightly deeper pastel shadow
- Recent shift cards have subtle drop shadows

### Highlight/Active Rules
- Currently selected card: thicker border, brighter fill
- Hovered matrix cells: light border, tooltip with relationship details

---

## Typography System

| Element | Size | Style |
|---------|------|-------|
| Page title | ~48-64px | Script |
| Agent names | ~24px | Display sans-serif |
| Attribute labels | ~12-14px | Small all-caps sans-serif |
| Recent shift cards | ~16px | Medium sans-serif |

### Weights
- Script headings: Bold
- Agent names: Semi-bold
- Labels and metadata: Regular

### Line Heights
- Headings: ~1.2
- Body text: ~1.4

### Link Styling
- Links underline on hover
- Use primary accent color

### Label/Meta Styling
- Small caps
- Pastel background rectangles with dark text

---

## Motion + Interaction

### Hover Behavior
- Hovering agent card lifts it slightly, displays attribute values
- Hovering matrix cell reveals tooltip ("partners: +4", "rivals: -3")

### Selection Behavior
- Clicking or using arrow keys selects agent
- Card enlarges (~5% scale), other cards dim
- Animate to expanded state over 200ms with ease-out

### Recent Shifts Cards
- Arrows bounce slightly on hover

### Transition Durations
- Card hover: ~150ms
- Selection expansion: ~200ms
- Matrix tooltip fade: 100ms

### Easing
- `ease-out` quadratic for selection
- `ease-in-out` for hover effects

---

## Responsive Behavior

### Agent Grid
| Screen Size | Layout |
|-------------|--------|
| Large | 2 rows × 3 columns |
| Medium | 3 rows × 2 columns |
| Small | 6 rows × 1 column |

Spacing reduces from 40px to 20px between cards.

### Relationship Matrix
- Scrollable horizontally on small screens
- Column headers remain sticky

### Recent Shifts
- Cards stack vertically with reduced spacing

---

## Key Patterns for AIVC

### Agent Cards → EvaluatorCards
The agent card pattern maps perfectly to VC persona cards:
- Name and area of expertise
- Attribute bars could show investment focus areas
- Selection reveals full evaluation

### Relationship Matrix → Could Be Used For
- Cross-comparison of VC opinions
- Agreement/disagreement visualization between VCs

### Attribute Visualization
- Can show VC strengths in different areas
- Risk tolerance, market focus, stage preference

### Selection Interaction
- Clicking a VC card could expand to show full evaluation
- Keyboard navigation for accessibility

---

## CSS Patterns to Extract

### Agent Card
```css
.agent-card {
  background: var(--agent-color);
  border: 2px solid var(--agent-color-dark);
  border-radius: 12px 8px 14px 10px;
  padding: var(--space-4);
  transition: transform 150ms ease-out;
}

.agent-card:hover {
  transform: translateY(-2px) scale(1.02);
}

.agent-card.selected {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  z-index: 10;
}
```

### Attribute Bar
```css
.attribute-bar {
  height: 8px;
  background: var(--color-neutral-light);
  border-radius: 4px;
  overflow: hidden;
}

.attribute-bar__fill {
  height: 100%;
  background: var(--attribute-color);
  border-radius: 4px;
  transition: width 300ms ease-out;
}
```

### Matrix Cell
```css
.matrix-cell {
  padding: var(--space-2);
  border: 1px solid var(--color-muted-gray);
  text-align: center;
  transition: background-color 100ms ease-out;
}

.matrix-cell--partner { background: rgba(46, 182, 125, 0.2); }
.matrix-cell--neutral { background: rgba(247, 213, 72, 0.2); }
.matrix-cell--rival { background: rgba(231, 76, 60, 0.2); }

.matrix-cell:hover {
  outline: 2px solid var(--color-primary-blue);
}
```
