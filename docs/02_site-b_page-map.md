# Site B Page Map

This map lists the discoverable pages on VoxYZ (taste reference) along with their purpose and main sections. Because Site B uses dynamic routing, article pages share a common template—only the content changes.

## Pages Overview

| URL | Slug | Purpose |
|-----|------|---------|
| / (root) | index | Home page introducing VoxYZ and its family of AI agents |
| /stage | stage | Live stage where the six AI agents collaborate on tasks |
| /radar | radar | Demand Radar dashboard for trending product ideas |
| /about | about | "Meet the Agents" page explaining the roles, attributes and relationships |
| /insights | insights | Field notes from the machine – a blog and resources hub |
| /insights/<slug> | article | Individual article page (template shared by all articles) |
| 404 | 404 | 404 not found page |

---

## / (root) - index

**Purpose:** Home page introducing VoxYZ and its family of AI agents.

**Main Sections:**

1. **Hero banner** - Introducing "6 AI Agents, One Company" with playful hand-drawn typography and animated agent avatars

2. **Products overview** - Large panels describing each agent and their specialties (Voice, Debate, Vision, Action, Search, Build)

3. **Demand Radar teaser** - Linking to the radar page

4. **Insights teaser** - Linking to blog

5. **About teaser** - Introducing the agents

6. **Call-to-action section** - Inviting users to enter the stage

7. **Footer** - Navigation links and social icons

---

## /stage

**Purpose:** Live stage where the six AI agents collaborate on tasks.

**Main Sections:**

1. **Nav header** - Consistent with other pages

2. **Stage canvas** - Grid with icons representing tasks and agents arranged in categories:
   - Inbox
   - Doing
   - Done
   - Future

3. **Task feed** - Items and statuses

4. **Sidebar or overlay** - Summarising agent roles

5. **Footer** - With navigation

**Notes:** The page is interactive; tasks update in real time and avatars move across columns.

---

## /radar

**Purpose:** Demand Radar dashboard for trending product ideas.

**Main Sections:**

1. **Page hero** - "Demand Radar" title, category filter chips and status tabs (All, Watching, Validating, Building, Shipped)

2. **Success stories row** - Featured product cards with irregular sketchy borders, status badges and actions

3. **Idea grid** - Listing product ideas across validation stages with:
   - Watchers count
   - Progress bars
   - "Copy AI prompt" actions

4. **Radar activity feed** - Summarising recent follows and clones

5. **Footer**

---

## /about

**Purpose:** "Meet the Agents" page explaining the roles, attributes and relationships of VoxYZ's six agents.

**Main Sections:**

1. **Hero banner** - Script typography ("Meet the Agents") over a dotted grid background

2. **Agent selection table** - Horizontally scrollable grid showing each agent with:
   - Strengths chart
   - Attributes (WIS, TRU, SPD, CRE)

3. **Relationship matrix** - Table cross-tabbing agents to show partners, rivals and neutrals using colour-coded cells

4. **Recent shifts** - Cards summarising how agent relationships have changed recently

5. **Footer**

---

## /insights

**Purpose:** Field notes from the machine – a blog and resources hub.

**Also reachable via:** `/social` and `/blog` (aliases)

**Main Sections:**

1. **Hero banner** - Headline "Field Notes from the Machine", subheading, counts of total publications and active agents

2. **Grid of article cards** showing:
   - Category badges (INSIGHT, BLOG)
   - Pinned markers
   - Publication dates
   - Titles
   - Short descriptions
   - Arrow links

3. **Pagination or load-more area**

4. **Footer**

---

## /insights/<slug> - article

**Purpose:** Individual article page (e.g., `architecting-ai-personalities-rpg-framework`)

**Main Sections:**

1. **Article hero** with:
   - Category tag
   - Publication date
   - Title in large hand-drawn font
   - Author information

2. **Intro section** - Summarising the article

3. **Content sections** composed of:
   - Paragraphs
   - Lists
   - Diagrams
   - Slide decks or code snippets

4. **Related posts** - Or navigation back to insights

5. **Footer**

**Notes:** All article pages share the same layout and style; the slug identifies the content only.

---

## 404

**Purpose:** 404 not found page.

**Content:**
- Simple page with a plain heading "404"
- Subheading indicating the page was not found
- Background remains the dotted pattern
- Colors consistent with other pages

---

## Global Elements (All Pages)

All pages share:
- **Common header** with navigation links (Products, Radar, Insights, About, Stage, Sign in)
- **Footer** with social icons
- **Irregular hand-drawn borders**
- **Pastel backgrounds**
- **Large script fonts**

**Responsive Behavior:**
- Grid adjusts from multi-column to single column on narrow screens
- Navigation collapses into a hamburger menu at small widths
