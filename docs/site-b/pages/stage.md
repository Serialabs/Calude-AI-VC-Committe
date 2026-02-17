# Site B: Stage Page Taste Reference

**URL:** `/stage`  
**Slug:** `stage`  
**Purpose:** Display the live "stage" where VoxYZ's AI agents collaborate on tasks. Users can observe agent workflows and navigate between Inbox, Doing, Done and Future columns.

---

## Taste Signature Rules

### 1. Dark Board Aesthetic
- Unlike other pages, uses dark canvas
- Emphasizes colorful task cards and avatars
- Background is nearly black with faint noise or gradients

### 2. Color-Coded Columns
| Column | Color |
|--------|-------|
| Inbox | Coral |
| Doing | Mint |
| Done | Lavender |
| Future | (varies) |

Column headers in industrial monospaced font, separated by thin sketchy lines.

### 3. Floating Cards
- Task cards appear as floating panels
- Subtle drop shadows
- Status indicator bar on one edge matching column color
- Small avatar circles within cards

### 4. Live Movement
- Avatars traverse horizontally between columns at slow speeds
- Indicates progress
- Hovering reveals assignment details

### 5. Minimal Chrome
- Navigation bar reduced in visual weight
- Stage emphasizes content over decorative backgrounds

### 6. Micro Animations
- New tasks fade and scale into view
- Completed tasks slide off board
- Column headers pulse subtly to indicate activity

---

## Visual Treatment

### Background System
- Dark grey/black background with faint noise texture
- Columns separated by lightly tinted pastel stripes

### Card/Panel Styling
- Rectangular shapes with slightly rounded corners (~8px)
- Borders subtle, lighten on hover
- Small avatars and icons aligned left
- Vertical status bar on one side

### Border/Stroke Rules
- Columns have hand-drawn vertical separators
- Cards use thin solid borders
- Active column may have thicker underline or glowing edge

### Shadow/Blur Rules
- Cards have small soft shadow to lift off dark background
- Hover increases shadow intensity

### Highlight/Active Rules
- Clicking/hovering adds colored glow
- Completed tasks fade to lower opacity

---

## Typography System

| Element | Size | Style |
|---------|------|-------|
| Column headings | ~20px | Uppercase sans-serif, wide tracking |
| Task titles | ~16px | Regular weight |
| Metadata | ~12px | Muted color |

### Weights
- Column headings: Bold
- Task titles: Medium
- Metadata: Regular

### Line Heights
- Headings: 1.2 (tight)
- Card text: 1.4

### Link Styling
- Links within cards underlined on hover

### Label/Meta Styling
- Status labels color-coded
- Uppercase small caps

---

## Motion + Interaction

### Hover Behavior
- Card enlarges slightly, increases opacity
- Tooltip appears showing task details and assigned agent(s)

### Transition Durations
- Card hover: ~150ms
- Avatar movement across columns: 1-2s (calm feel)

### Easing
- `ease-in-out` cubic for card interactions
- `linear` for continuous avatar movement

### Scroll Triggers
- Board horizontally scrollable on small screens
- Columns snap into place when scrolling

### Sticky Elements
- Column headers stick to top when scrolling vertically

---

## Responsive Behavior

### Small Screens
- Columns collapse into single horizontal scroll container
- Swipe horizontally to view each column
- Task cards resize but maintain status bar

### Medium Screens
- May display in two columns (Inbox/Doing, Done/Future)
- Horizontal scroll for second pair
- Avatars shrink proportionally

### Navigation
- Sticky header remains accessible
- Back button may appear for previous page

---

## Key Patterns for AIVC

### Dark Theme Usage
The stage page is the only dark-themed page. For AIVC, we're NOT using the dark theme, but some patterns are useful:

### Column Layout
Could be used for:
- Showing the 4 stages as columns (visual pipeline)
- Kanban-style view of evaluation progress

### Status Indicators
- Colored bars on cards
- Maps to decision badges (INVEST = green bar, PASS = red bar)

### Floating Cards
- The elevated card effect with shadows works on light backgrounds too
- Good for making evaluator cards feel interactive

### Avatar Movement
- Could animate transitions between stages
- Show VCs "moving" through the evaluation process

---

## CSS Patterns to Extract

### Dark Background (Reference Only)
```css
/* Not using in AIVC, but for reference */
.stage-board {
  background: #141414;
  min-height: 100vh;
}
```

### Column Layout
```css
.column-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.column {
  scroll-snap-align: start;
  min-width: 280px;
}

.column-header {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: var(--space-3);
  border-bottom: 2px solid var(--column-color);
  position: sticky;
  top: 0;
  background: inherit;
}
```

### Task Card (Adapted for Light Theme)
```css
.task-card {
  background: var(--color-neutral-light);
  border: 1px solid var(--color-muted-gray);
  border-radius: var(--radius-sm);
  padding: var(--space-3);
  position: relative;
  transition: 
    transform 150ms ease-out,
    box-shadow 150ms ease-out;
}

.task-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--status-color);
  border-radius: 4px 0 0 4px;
}

.task-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
```

### Avatar
```css
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--avatar-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: white;
}

.avatar--gliding {
  animation: glide 2s linear forwards;
}

@keyframes glide {
  from { transform: translateX(0); }
  to { transform: translateX(var(--glide-distance)); }
}
```

### Column Glow (Active State)
```css
.column--active {
  box-shadow: inset 0 0 20px rgba(var(--column-color-rgb), 0.2);
}

.column--active .column-header {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
```
