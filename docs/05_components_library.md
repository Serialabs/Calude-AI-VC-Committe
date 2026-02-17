# Components Library

This library defines reusable UI components inferred from Site B's design. Each component includes its purpose, structure (slots), configurable props, states, motion rules, responsive rules and accessibility notes.

---

## Component: HeaderNav

### Purpose
Provide persistent navigation across all pages and brand identity.

### Structure (Slots)
- `logo` – Site name or logo graphic
- `navItems[]` – List of navigation links (label + href) displayed horizontally on large screens
- `actions[]` – Optional actions (e.g., Sign in button). Displayed on the right
- `hamburger` – Collapsible menu icon for small screens

### Props
| Prop | Type | Description |
|------|------|-------------|
| `current` | string | ID or slug of the active page to highlight |
| `items` | array | Array of nav items with label and URL |
| `showActions` | boolean | Whether to display additional action buttons |

### States
- **Default:** Full horizontal navigation
- **Mobile (collapsed):** Nav items hidden, accessible via hamburger menu

### Motion Rules
- On scroll, nav transitions from transparent to semi-opaque over 200ms using `ease-out-cubic`
- Hamburger transforms into a cross when opened (rotate lines) over `motion-medium`

### Responsive Rules
- Horizontal list on ≥768px
- Collapses into vertical overlay on smaller screens
- Use `position: sticky` and `top: 0` to keep nav pinned

### Accessibility
- Use `<nav>` with `aria-label="Main navigation"`
- Provide `aria-expanded` for hamburger menu state
- Ensure focus states are visible

---

## Component: HeroBanner

### Purpose
Introduce a page with a large headline, supporting text and primary call to action.

### Structure (Slots)
- `headline` – Primary message (may include script font words)
- `subheadline` – Secondary text explaining the purpose
- `cta` – Primary button or link
- `decorations[]` – Optional decorative elements (icons, scribbles, illustrations)

### Props
| Prop | Type | Description |
|------|------|-------------|
| `bgColor` | string | Background color token for the panel |
| `accentColor` | string | Accent color for the CTA |
| `illustration` | string | Optional illustration asset path |

### States
- **Default:** Static display
- **Hovered (for CTA):** Button lifts and glows

### Motion Rules
- On page load, headline fades in and slides up over `motion-slow`
- CTA button lifts on hover over `motion-fast`

### Responsive Rules
- Stack headline, subheadline and CTA vertically on narrow screens
- Scale down headline fonts according to typography scale

### Accessibility
- Use `<h1>` for the headline
- Ensure CTA has appropriate `aria-label`

---

## Component: SectionWrapper

### Purpose
Provide consistent spacing and max-width constraints for each page section.

### Structure (Slots)
- `children` – Nested content (cards, lists, grids, etc.)
- `id` – Optional anchor ID for navigation

### Props
| Prop | Type | Description |
|------|------|-------------|
| `paddingY` | string | Vertical padding (default: `spacing-6` or `spacing-7`) |
| `bgColor` | string | Optional background color or pattern |
| `maxWidth` | string | Maximum width of content area |

### States
- Static; no interactive states on the wrapper itself

### Motion Rules
- None; rely on nested components for motion

### Responsive Rules
- `maxWidth` adjusts according to breakpoints:
  - 100% on ≤640px
  - 90% on ≤1024px
  - Fixed at 1200px on larger screens

### Accessibility
- Use `<section>` element
- Provide `<h2>` headings within children for semantic landmarks

---

## Component: HandDrawnPanel

### Purpose
Represent cards and panels with sketchy, irregular borders.

### Structure (Slots)
- `header` – Optional area for a title or tags
- `content` – Main content of the card
- `footer` – Optional area for actions (buttons, links)

### Props
| Prop | Type | Description |
|------|------|-------------|
| `color` | string | Pastel fill color (from primary color tokens) |
| `borderColor` | string | Color of the sketchy border (often darker shade of fill) |
| `hoverGlow` | boolean | Whether to add a glow on hover |

### States
- **Default:** Static with subtle shadow
- **Hovered:** Increased shadow and brightened border
- **Active:** Pressed state for clickable cards

### Motion Rules
- Hover transition uses `motion-medium` with `ease-out-cubic`
- Cards lift by 3px and intensify shadow from `shadow-xs` to `shadow-sm`

### Responsive Rules
- Panel width is 100% on small screens
- Can be constrained using CSS Grid or Flexbox when part of a grid

### Accessibility
- Provide `role="button"` or `role="link"` when the panel is clickable
- Add `aria-label` describing its purpose

### CSS Example
```css
.hand-drawn-panel {
  background: var(--color-neutral-light);
  border: 2px solid var(--border-color);
  border-radius: 8px 12px 10px 14px; /* Irregular corners */
  padding: var(--space-4);
  box-shadow: var(--shadow-xs);
  transition: 
    transform var(--motion-medium) var(--ease-out-cubic),
    box-shadow var(--motion-medium) var(--ease-out-cubic);
}

.hand-drawn-panel:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-sm);
}
```

---

## Component: Button

### Purpose
Provide call-to-action or secondary actions.

### Structure (Slots)
- `text` – Button label
- `icon` – Optional leading or trailing icon

### Props
| Prop | Type | Description |
|------|------|-------------|
| `variant` | string | 'primary', 'secondary', 'tertiary' mapping to color tokens |
| `size` | string | 'sm', 'md', 'lg' controlling padding and font size |
| `fullWidth` | boolean | Expands to container width |

### States
- **Default:** Static
- **Hovered:** Lift + color darken
- **Active:** Pressed, slight sink
- **Disabled:** Reduced opacity and no pointer events

### Motion Rules
- Use `motion-fast` for hover/active transitions
- Buttons translate upward by 2px on hover and downward by 1px on active

### Responsive Rules
- Button size and spacing adjust based on `size` prop
- `fullWidth` ensures accessibility on mobile

### Accessibility
- Use `<button>` with proper `type`
- Provide `aria-disabled` when disabled
- Ensure sufficient color contrast

### CSS Example
```css
.button {
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-sm);
  font-weight: 600;
  cursor: pointer;
  transition: 
    transform var(--motion-fast) var(--ease-out-cubic),
    background-color var(--motion-fast) var(--ease-out-cubic);
}

.button-primary {
  background: var(--color-primary-red);
  color: white;
}

.button-primary:hover {
  transform: translateY(-2px);
  background: /* darker shade */;
}

.button-primary:active {
  transform: translateY(-1px);
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

---

## Component: TagPill

### Purpose
Display categorical or status information as small capsules.

### Structure (Slots)
- `text` – Label text
- `icon` – Optional icon preceding the text

### Props
| Prop | Type | Description |
|------|------|-------------|
| `color` | string | Background color token (e.g., `color-primary-blue`) |
| `size` | string | 'sm' or 'md' controlling padding and font size |

### States
- **Default:** Static display
- **Selected (for filter pills):** Background and text invert
- **Hovered:** Slight darken

### Motion Rules
- Transition background color and text color over `motion-fast` with `ease-out-cubic`

### Responsive Rules
- Pill size shrinks slightly on small screens
- Horizontal scroll may be enabled for many pills

### Accessibility
- Use `<span role="status">` or `<button>` when interactive
- Provide `aria-pressed` state for selectable pills

### CSS Example
```css
.tag-pill {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-xs);
  font-size: var(--text-label-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: 
    background-color var(--motion-fast) var(--ease-out-cubic),
    color var(--motion-fast) var(--ease-out-cubic);
}

.tag-pill--blue {
  background: var(--color-primary-blue);
  color: white;
}

.tag-pill--green {
  background: var(--color-primary-green);
  color: white;
}
```

---

## Component: SuccessStoryCard

### Purpose
Represent a shipped or popular product idea within the Demand Radar page.

### Structure (Slots)
- `statusBadge` – Indicates whether the story is LIVE or another status
- `title` – Name of the product
- `description` – Short summary of what the product does
- `actions` – Links or buttons (Visit, Clone)

### Props
| Prop | Type | Description |
|------|------|-------------|
| `statusColor` | string | Pastel color based on status (green for Live, etc.) |
| `pinned` | boolean | Whether the card is highlighted as pinned |

### States
- **Default:** Static
- **Hovered:** Lift and glow
- **Pinned:** Distinct border and background color

### Motion Rules
- On hover, card lifts and shadow intensifies over `motion-medium`
- Buttons inside fade from hidden to visible over `motion-fast`

### Responsive Rules
- Cards shrink and stack vertically on small screens
- Buttons become full width

### Accessibility
- Use semantic `<article>` element
- Each action link should have clear `aria-label` ("Visit [product]", "Clone prompt for [product]")

---

## Component: RadarIdeaCard

### Purpose
Display a product idea with status, watchers count and a copy-prompt action.

### Structure (Slots)
- `title` – Idea name
- `tags[]` – Category pills
- `watchersCount` – Number with icon
- `progressBar` – Visual representation of validation progress
- `copyButton` – Hidden button that appears on hover

### Props
| Prop | Type | Description |
|------|------|-------------|
| `status` | string | One of Watching/Validating/Building/Shipped determining color scheme |
| `watchers` | number | Watchers count |
| `description` | string | Optional, for tooltips |

### States
- **Default:** Static
- **Hovered:** Reveals copy button, lifts card
- **Copied:** Temporary confirmation message

### Motion Rules
- Hover effect: card lifts and reveals copy button using `motion-medium` with `ease-out-cubic`
- Copy confirmation fades in/out over `motion-fast`

### Responsive Rules
- Grid arrangement adjusts across breakpoints
- Card stacks vertical elements on mobile

### Accessibility
- Ensure `copyButton` has `aria-label` explaining its function
- Provide `aria-live="polite"` region for copy confirmation

---

## Component: AgentCard

### Purpose
Present an AI agent with attributes, description and selection behavior.

### Structure (Slots)
- `name` – Agent name
- `icon` – Graphic representing the agent
- `attributes` – Bar chart or list of attribute values (WIS, TRU, SPD, CRE)
- `description` – Short bio of the agent
- `actions` – Optional actions (e.g., select)

### Props
| Prop | Type | Description |
|------|------|-------------|
| `color` | string | Pastel fill color unique to each agent |
| `selected` | boolean | Whether the card is currently selected |

### States
- **Default:** Static
- **Hovered:** Lift and glow
- **Selected:** Scaled up, bright border

### Motion Rules
- Hover effect uses `motion-medium`
- Selection scales card by ~5% and dims others over `motion-medium` with `ease-out-quad`

### Responsive Rules
- Cards arrange in grid that stacks from 3×2 to 1×6 on small screens
- Attribute bars shrink on small screens

### Accessibility
- Support keyboard navigation via arrow keys
- Provide `aria-selected` on selected cards
- Ensure color contrast is sufficient

---

## Component: RelationshipMatrix

### Purpose
Visualize the relationship strength between pairs of agents.

### Structure (Slots)
- `agents[]` – List of agent identifiers used to generate rows and columns
- `cells[][]` – Two-dimensional array of relationship data (partner, neutral, rival + numeric strength)

### Props
| Prop | Type | Description |
|------|------|-------------|
| `cellSize` | string | Dimensions of each matrix cell |

### States
- **Default:** Static display
- **Hovered cell:** Show tooltip
- **Selected row/column:** Highlighting when hovering over agent name

### Motion Rules
- On hover, cells slightly enlarge and reveal tooltip over `motion-fast`
- Row/column highlights fade in/out over `motion-fast`

### Responsive Rules
- Matrix scrolls horizontally on small screens
- Column headers remain sticky

### Accessibility
- Use `<table>` semantics
- Provide `aria-label` for the matrix
- Add `aria-describedby` for each cell to describe the relationship

---

## Component: ArticleCard

### Purpose
Represent an article preview within the insights list.

### Structure (Slots)
- `category` – Category pill (INSIGHT, BLOG), color coded
- `pinned` – Pinned badge (boolean)
- `title` – Article title
- `excerpt` – Short description
- `author` – Author name
- `date` – Publication date
- `ctaIcon` – Arrow icon that acts as link indicator

### Props
| Prop | Type | Description |
|------|------|-------------|
| `pinned` | boolean | Display pinned flag; uses slightly darker border |
| `categoryColor` | string | Pastel color for the category pill |

### States
- **Default:** Static
- **Hovered:** Lift, border darken, arrow rotates

### Motion Rules
- On hover, card lifts and arrow rotates 45° over `motion-medium`
- Tinted glow appears around border

### Responsive Rules
- Cards stack on small screens with internal elements wrapping
- Arrow moves to bottom center on mobile

### Accessibility
- Wrap entire card in `<a>` with descriptive href
- Use `aria-label` with the article title
- Provide `role="article"` for semantics

---

## Component: ArticleHeader

### Purpose
Present metadata and the headline of an individual article page.

### Structure (Slots)
- `category` – Category pill
- `date` – Publication date
- `title` – Large hand-drawn headline
- `subtitle` – Descriptive tagline or summary
- `author` – Author name and avatar

### Props
| Prop | Type | Description |
|------|------|-------------|
| `categoryColor` | string | Pastel color for the category pill |

### States
- Static; no hover behavior on header itself

### Motion Rules
- Fade in and slide up on page load over `motion-slow`
- Author avatar may fade in slightly delayed

### Responsive Rules
- Scale down title and reposition author info below title on narrow screens

### Accessibility
- Use `<header>` with appropriate `<h1>` and `<p>` tags
- Provide `aria-label` for category pill

---

## Component: Callout

### Purpose
Highlight key quotes or important messages within an article.

### Structure (Slots)
- `content` – Quoted text or callout message

### Props
| Prop | Type | Description |
|------|------|-------------|
| `color` | string | Pastel background color for the callout panel |

### States
- **Default:** Static
- **Hovered:** Slightly scales up

### Motion Rules
- Hover scaling uses `motion-fast` with `ease-out`
- May fade in with staggered delay relative to adjacent paragraphs when scrolling into view

### Responsive Rules
- Callouts expand to full width on mobile

### Accessibility
- Use `<blockquote>` for quotes; include `cite` attribute if relevant
- Provide `role="note"` for non-quoted callouts

---

## Component: CodeBlock

### Purpose
Display code snippets with syntax highlighting and copy functionality.

### Structure (Slots)
- `code` – The code content
- `language` – Programming language for syntax highlighting
- `copyButton` – Copy-to-clipboard action

### Props
| Prop | Type | Description |
|------|------|-------------|
| `language` | string | Language identifier for highlighting |
| `showLineNumbers` | boolean | Whether to display line numbers |

### States
- **Default:** Code visible, copy button hidden or subtle
- **Hovered:** Copy button appears prominently
- **Copied:** Temporary "Copied!" confirmation

### Motion Rules
- Copy button fades in over `motion-fast`
- Copy confirmation appears instantly and fades out over 1s

### Responsive Rules
- Code block scrolls horizontally if content overflows
- Font size may decrease slightly on mobile

### Accessibility
- Use `<pre><code>` semantics
- Ensure copy button has clear `aria-label`
- Provide `aria-live` region for copy confirmation

---

## Component: ReportCard (for AIVC Index)

### Purpose
Display a report preview on the AIVC index page.

### Structure (Slots)
- `title` – Company name
- `tags[]` – Stage, year, category pills
- `teaser` – Short description
- `ctaIcon` – Arrow indicating navigation

### Props
| Prop | Type | Description |
|------|------|-------------|
| `stage` | string | Funding stage (Seed, Series A, etc.) |
| `year` | number | Year of the pitch |
| `category` | string | Industry category |

### States
- **Default:** Static
- **Hovered:** Lift, arrow rotates

### Motion Rules
- Card lifts and arrow rotates 45° over `motion-medium`
- Shadow intensifies on hover

### Responsive Rules
- Grid collapses to single column on mobile
- Full-width cards on small screens

### Accessibility
- Entire card is clickable link
- Provide `aria-label` with full context

---

## Component: EvaluatorCard (for AIVC Reports)

### Purpose
Display a VC persona's evaluation of a startup.

### Structure (Slots)
- `personaName` – VC name
- `personaRole` – Area of expertise
- `strengths[]` – List of identified strengths
- `concerns[]` – List of concerns raised
- `perspective` – Unique viewpoint
- `decision` – INVEST / PASS / DIG DEEPER badge

### Props
| Prop | Type | Description |
|------|------|-------------|
| `decisionType` | string | Controls badge color (success/error/warning) |

### States
- **Default:** Expanded view
- **Hovered:** Subtle lift

### Motion Rules
- Card lifts slightly on hover over `motion-medium`
- Decision badge may pulse briefly when card enters viewport

### Responsive Rules
- Stack content vertically on mobile
- Lists wrap as needed

### Accessibility
- Use semantic lists for strengths/concerns
- Decision badge should have `aria-label` explaining meaning

---

## Component: DebateTranscript

### Purpose
Display multi-round investment committee discussions.

### Structure (Slots)
- `rounds[]` – Array of debate rounds, each containing:
  - `roundNumber` – Round identifier
  - `messages[]` – Array of speaker messages with name and content

### Props
| Prop | Type | Description |
|------|------|-------------|
| `highlightSpeaker` | string | Optional speaker to highlight |

### States
- **Default:** All rounds visible
- **Collapsed (optional):** Only headers visible, expand on click

### Motion Rules
- Use scroll-reveal to fade in each round as it enters viewport
- Speaker name tags use colored backgrounds matching agent colors

### Responsive Rules
- Reduce padding on mobile
- Speaker names may wrap above messages

### Accessibility
- Use semantic structure for dialogue
- Provide clear speaker identification for screen readers

---

## Component: MemoCard (for AIVC Deal Memo)

### Purpose
Display a section of the deal memo (Problem, Solution, etc.).

### Structure (Slots)
- `label` – Section title (Problem, Solution, Business Model, etc.)
- `content` – Bullet list or paragraph content

### Props
| Prop | Type | Description |
|------|------|-------------|
| `labelColor` | string | Color for the label tag |

### States
- **Default:** Static display
- **Hovered:** Subtle lift

### Motion Rules
- Fade up when entering viewport
- Label tag uses consistent pill styling

### Responsive Rules
- Full width on mobile
- Grid arrangement on desktop

### Accessibility
- Use heading for label
- Use list semantics for bullet content

---

## Component: Footer

### Purpose
Provide site-wide footer with navigation and copyright.

### Structure (Slots)
- `links[]` – Navigation links
- `socialIcons[]` – Social media icons
- `copyright` – Copyright text

### Props
| Prop | Type | Description |
|------|------|-------------|
| `variant` | string | 'minimal' or 'full' |

### States
- Static; minimal interaction

### Motion Rules
- Links underline on hover

### Responsive Rules
- Stack elements vertically on mobile
- Center-align on small screens

### Accessibility
- Use `<footer>` element
- Links should have descriptive text
