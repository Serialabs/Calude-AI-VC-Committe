# Site A Page Map

This map lists all reachable pages and key anchors discovered on the AIVC site (structure reference). Each entry includes the URL, a human-friendly slug, the page's purpose and its main sections in order. Use this as a guide to understand how the simulation flows across pages.

## Pages Overview

| URL | Slug | Purpose |
|-----|------|---------|
| /index.html | index | Landing page listing the AI-powered VC investment committee simulation and linking to all reports |
| /prompt.html | prompt | Exposes the full simulation prompt and describes the evaluation pipeline |
| /uber_2008.html | uber_2008 | Complete simulation report for UberCab (2008) |
| /wework_2012.html | wework_2012 | Complete simulation report for WeWork (2012) |
| /facebook_2004.html | facebook_2004 | Simulation report for thefacebook (2004) |
| /youtube-2005.html | youtube_2005 | Simulation report for YouTube (2005) |
| /airbnb-2008.html | airbnb_2008 | Simulation report for AirBed&Breakfast (2008) |

---

## /index.html (index)

**Purpose:** Landing page listing the AI-powered VC investment committee simulation and linking to all reports.

**Main Sections:**

1. **Hero banner** - Large heading "AI-Powered VC Investment Committee," subheading describing the simulation, and a primary call-to-action button linking to an external pitch deck submission form.

2. **Submit your pitch deck** - Brief description and secondary call-to-action button duplicating the hero CTA; may include a disclaimer about privacy.

3. **How it works** - Four bullet cards explaining the pipeline:
   - Deal Memo Extraction
   - VC Evaluation
   - Investment Committee Debate
   - Final Report

4. **AIVC Prompt — System Instructions** - Card summarising what the underlying prompt does, with a link to the full prompt page.

5. **Published reports** - Grid of report cards (one per company) showing company name, year, funding stage, industry tags and a short teaser. Each card links to its detailed simulation page.

6. **About this project** - Short paragraph describing the project's goals and the authors. Includes a link to the author's biography.

7. **Footer** - Minimal footer with copyright and external links.

---

## /prompt.html (prompt)

**Purpose:** Present the full simulation prompt and explain the investment committee pipeline and VC personas so that users understand how the AI simulation works.

**Main Sections:**

1. **Overview of the pipeline** - Introduction explaining that the simulation runs in four stages (Deal Memo extraction, VC evaluation, Investment committee debate and Final report). This section often uses a simple numbered list or flow diagram.

2. **Investment committee debate structure** - Outlines how the debate unfolds over multiple rounds, describing roles such as Bull, Bear and Wild Card, and how final consensus is reached.

3. **VC personas** - Grid of 20 cards, one per AI persona. Each card shows the persona's name, area of expertise, bullet lists of strengths, concerns and unique perspectives. Some cards include an avatar or icon.

4. **Full prompt text** - A large code block containing the complete prompt instructions for the simulation. The code block is scrollable and includes a copy-to-clipboard button.

5. **Footer** - Simple footer linking back to the main page.

---

## Report Page Structure (shared by all report pages)

All report pages share the same anchor pattern: `#stage-1`, `#stage-2`, `#stage-3`, `#stage-4` and `#final-report`. Headings within each stage are semantically nested using `<h2>` and `<h3>` tags.

### Common Sections:

1. **Hero section** - Company name, tagline and tags (e.g., "Seed — 2008")

2. **Stage 1: Deal Memo Extraction** - Cards for:
   - Problem
   - Solution
   - Business model
   - Stage
   - Market size
   - Traction & ask
   - Potential outcomes
   - Competition

3. **Debate triggers list** - Key points that will drive discussion

4. **Debate panel selection** - Cards showing which VCs will participate

5. **Stage 2: Independent evaluation** - 10 VC cards, each with:
   - Persona name
   - Strengths identified
   - Concerns raised
   - Unique perspective
   - Decision (INVEST/PASS/DIG DEEPER)

6. **Stage 2 scoreboard** - Table summarising decision counts

7. **Stage 3: Investment committee debate** - Transcripts across five rounds

8. **Stage 4: Final report** containing:
   - 5 key insights
   - Questions for the founder
   - Action plans
   - Executive summary

9. **Footnotes and Back to main page link**

---

## /uber_2008.html (uber_2008)

**Purpose:** Complete simulation report for UberCab (2008)

**Specific Content:**
- Company: UberCab
- Year: 2008
- Stage: Seed
- All standard report sections apply

---

## /wework_2012.html (wework_2012)

**Purpose:** Complete simulation report for WeWork (2012)

**Specific Content:**
- Company: WeWork
- Year: 2012
- Tags include "Cautionary Tale"
- Highlights overvaluation risk
- All standard report sections apply

---

## /facebook_2004.html (facebook_2004)

**Purpose:** Simulation report for thefacebook (2004)

**Specific Content:**
- Company: thefacebook
- Year: 2004
- Stage: Launch
- Problem: Physical "face books" on paper
- Solution: Verified online network
- Business model: Ads
- Market size: College and global
- Debate triggers include: big market, social creep
- All standard report sections apply

---

## /youtube-2005.html (youtube_2005)

**Purpose:** Simulation report for YouTube (2005)

**Specific Content:**
- Company: YouTube
- Year: 2005
- Problem: Video hosting limitations
- Solution: Upload–convert–community model
- Debate triggers include: absence of revenue model, copyright risks
- Panel selection lists: Marc Andreessen, Bill Gurley, Peter Thiel
- All standard report sections apply

---

## /airbnb-2008.html (airbnb_2008)

**Purpose:** Simulation report for AirBed&Breakfast (2008)

**Specific Content:**
- Company: AirBed&Breakfast
- Year: 2008
- Problem: Expensive hotels and lack of local experiences
- Solution: Peer-to-peer rentals
- Business model: 10% commission
- Debate triggers include: trust & safety issues, little traction, unrealistic projections
- All standard report sections apply
