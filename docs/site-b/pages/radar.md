# Site B: Radar Page Taste Reference

**URL:** `/radar`  
**Slug:** `radar`  
**Purpose:** Present a pipeline of product ideas ranked by validation status. Users can discover trending ideas, clone prompts and follow progress.

---

## Taste Signature Rules

### 1. Notebook Meets Dashboard Aesthetic
- Light dotted background with panels resembling hand-drawn notes
- Mixes playful typography with structured dashboard elements

### 2. Status Colors
Each pipeline column and card uses its own pastel color scheme:
| Status | Color |
|--------|-------|
| Watching | Blue (`#65A9E6`) |
| Validating | Yellow (`#F7D548`) |
| Building | Green (`#2EB67D`) |
| Shipped | Purple (`#9373B2`) |

### 3. Irregular Card Outlines
- Product cards have sketchy borders with slightly offset corners
- Reinforces hand-crafted feel

### 4. Badges and Tokens
- Small badges indicate statuses (LIVE, VALIDATING, BUILDING)
- Tags show categories
- High-contrast backgrounds, uppercase text

### 5. Data Visualization
- Mini progress bars and counters
- Pastel fills matching column colors

### 6. Micro Interactions
- Cards lift on hover
- Badges brighten
- "Copy AI prompt" buttons appear when hovered
- Tabs animate with sliding underline

---

## Visual Treatment

### Background System
- Light cream base with dotted grid
- Tabs and filters on lightly tinted panels

### Card/Panel Styling
- Irregular, hand-drawn frames
- Pastel backgrounds per status
- Varying corner radii
- Rounded button corners with dark text on pastel

### Border/Stroke Rules
- Wavy borders (~2px thick)
- Pill-shaped filter outlines
- Bottom border indicates tab selection

### Shadow/Blur Rules
- Faint pastel shadows on cards, increasing on hover
- No shadows on filters/tabs

### Highlight/Active Rules
- Active tabs: thick pastel underline
- Selected filters: fill color change
- Hovered cards: light glow

---

## Typography System

| Element | Size | Style |
|---------|------|-------|
| Page title | ~40px | Hand-drawn display |
| Tab labels | ~14-16px | All-caps sans-serif |
| Card titles | ~18-20px | Medium sans-serif |
| Body copy | 14px | Regular sans-serif |

### Weights
- Titles: Bold
- Card titles: Medium
- Body: Regular
- Metadata: Semi-bold

### Link Styling
- "Visit" and "Clone" styled as small buttons
- "Copy AI prompt" uses pill button, darkens on hover

### Label/Meta Styling
- Status badges: uppercase white text on colored backgrounds
- Metadata: small grey text with icon

---

## Motion + Interaction

### Hover Behavior
- Cards and success stories lift and brighten
- "Copy AI prompt" pill appears/slides in
- Category pills invert colors when selected

### Transition Durations
- Hover: 150-200ms
- Tab underline slide: 200ms
- Copy-button reveal: 300ms

### Easing
- `ease-out` cubic for card lifts
- `ease-in-out` for tab sliding

### Scroll Triggers
- New cards fade up into view
- Success stories may animate from sides

### Sticky Elements
- Status tabs remain visible at top when scrolling

---

## Responsive Behavior

### Tabs and Filters
- Collapse into horizontal scroll on small screens
- Users swipe to view hidden categories

### Grid Collapse
- 3 columns → 2 columns → 1 column
- Progress bars and buttons rearrange for narrower widths

### Typography Scaling
- Headings: 40px → 28px

### Sticky Tabs
- Row becomes sticky at viewport top on mobile

---

## Key Patterns for AIVC

### Status Tabs
Can be adapted for:
- Filtering reports by company
- Filtering by decision type (INVEST/PASS/DIG DEEPER)

### Progress Visualization
Can be used for:
- Showing stage progress through the 4 stages
- Visualizing decision distribution

### Success Story Cards
Map directly to:
- Report cards on AIVC index page
- Featured company highlights

### Copy-to-Clipboard Pattern
Use for:
- Copying prompt text
- Copying key insights from reports
