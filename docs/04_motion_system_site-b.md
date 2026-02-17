# Motion System - Site B (VoxYZ)

This document defines the complete motion vocabulary for Site B. Use these patterns to create consistent, playful animations across the site.

---

## Motion Tokens

| Token | Duration | Typical Use |
|-------|----------|-------------|
| `motion-fast` | 100–150ms | Quick feedback transitions such as button hover, icon wiggle or list item highlight |
| `motion-medium` | 200–300ms | Standard card hover lifts, tab underline slides, small modal opening animations |
| `motion-slow` | 400–600ms | Section reveal animations as they scroll into view, hero entrance animations |
| `motion-loop` | 1–2s (repeating) | Continuous animations such as avatar movement across the stage or subtle pulsing of active columns |

---

## Easing Functions

| Easing | Cubic Bezier | Use Case |
|--------|--------------|----------|
| `ease-out-cubic` | `cubic-bezier(0.22, 1, 0.36, 1)` | Quick interactions (card lifts, button hover) - snappy start, smooth finish |
| `ease-in-out-quad` | `cubic-bezier(0.45, 0, 0.55, 1)` | Tabs sliding and selection animations - equal importance to start and finish |
| `linear` | `cubic-bezier(0, 0, 1, 1)` | Continuous, looped animations like stage avatars gliding horizontally |

### CSS Implementation

```css
:root {
  --ease-out-cubic: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out-quad: cubic-bezier(0.45, 0, 0.55, 1);
  --ease-linear: linear;
  
  --motion-fast: 150ms;
  --motion-medium: 250ms;
  --motion-slow: 500ms;
}
```

---

## Hover Grammar

### Buttons

**Behavior:** On hover, buttons translate up by 2–3px, increase shadow from `shadow-xs` to `shadow-sm`, and darken their fill color slightly.

**Timing:** `motion-fast` with `ease-out-cubic`

```css
.button {
  transition: 
    transform var(--motion-fast) var(--ease-out-cubic),
    box-shadow var(--motion-fast) var(--ease-out-cubic),
    background-color var(--motion-fast) var(--ease-out-cubic);
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
  background-color: /* slightly darker */;
}

.button:active {
  transform: translateY(-1px);
}
```

### Cards

**Behavior:** On hover, cards lift by 2–4px, their border becomes more saturated, and a subtle pastel glow appears.

**Timing:** `motion-medium` with `ease-out-cubic`

```css
.card {
  transition: 
    transform var(--motion-medium) var(--ease-out-cubic),
    box-shadow var(--motion-medium) var(--ease-out-cubic),
    border-color var(--motion-medium) var(--ease-out-cubic);
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 
    var(--shadow-sm),
    0 0 20px rgba(var(--accent-color), 0.15);
  border-color: /* more saturated */;
}
```

### Icons/Avatars

**Behavior:** Hovering over agent icons triggers a small rotation or wiggle animation. The icon rotates ±5° around its center and then returns.

**Timing:** `motion-fast` with yoyo repeat for one or two cycles

```css
@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
}

.icon:hover {
  animation: wiggle 300ms ease-in-out 2;
}
```

### Link Underlines

**Behavior:** Underlines slide in from left to right when a link is hovered.

**Timing:** `motion-fast` with `ease-out-cubic`

```css
.link {
  position: relative;
  text-decoration: none;
}

.link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width var(--motion-fast) var(--ease-out-cubic);
}

.link:hover::after {
  width: 100%;
}
```

### Row Highlights

**Behavior:** List items highlight their background on hover using a color fade.

**Timing:** `motion-fast`

```css
.list-item {
  transition: background-color var(--motion-fast) var(--ease-out-cubic);
}

.list-item:hover {
  background-color: rgba(var(--accent-color), 0.1);
}
```

---

## Scroll/Reveal Patterns

### Fade-Up Reveal

**Behavior:** Elements start with `opacity: 0` and `transform: translateY(30px)`. When they enter the viewport (using Intersection Observer), they transition to visible state.

**Timing:** `motion-slow` with `ease-out-cubic`

```css
.reveal-element {
  opacity: 0;
  transform: translateY(30px);
  transition: 
    opacity var(--motion-slow) var(--ease-out-cubic),
    transform var(--motion-slow) var(--ease-out-cubic);
}

.reveal-element.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**JavaScript Implementation:**

```javascript
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal-element').forEach(el => {
  observer.observe(el);
});
```

### Slide-In from Sides

**Behavior:** Success story cards and radar idea cards may slide in from the left or right when they first appear. The horizontal translation is ~40px.

**Timing:** `motion-medium` with `ease-out-cubic`

```css
.slide-in-left {
  opacity: 0;
  transform: translateX(-40px);
  transition: 
    opacity var(--motion-medium) var(--ease-out-cubic),
    transform var(--motion-medium) var(--ease-out-cubic);
}

.slide-in-right {
  opacity: 0;
  transform: translateX(40px);
  transition: 
    opacity var(--motion-medium) var(--ease-out-cubic),
    transform var(--motion-medium) var(--ease-out-cubic);
}

.slide-in-left.visible,
.slide-in-right.visible {
  opacity: 1;
  transform: translateX(0);
}
```

### Tab Underline Slide

**Behavior:** When switching between radar tabs or agent selections, an underline or selection border slides horizontally to the newly active tab.

**Timing:** `motion-medium` with linear easing

```css
.tab-container {
  position: relative;
}

.tab-indicator {
  position: absolute;
  bottom: 0;
  height: 3px;
  background: var(--color-primary-red);
  transition: 
    left var(--motion-medium) linear,
    width var(--motion-medium) linear;
}
```

### Stage Avatar Glide

**Behavior:** On the stage page, avatar icons glide from one column to another when a task changes status.

**Timing:** `motion-loop` (1-2s) with linear easing for constant speed

```css
@keyframes glide-across {
  from { transform: translateX(0); }
  to { transform: translateX(var(--glide-distance)); }
}

.avatar-gliding {
  animation: glide-across 1.5s linear forwards;
}
```

---

## Sticky/Parallax Behavior

### Sticky Headers

**Behavior:** Navigation bars become sticky after scrolling past the hero. Their background color gradually changes from transparent to semi-opaque.

**Timing:** `motion-medium`

```css
.header {
  position: sticky;
  top: 0;
  background: transparent;
  transition: background-color var(--motion-medium) var(--ease-out-cubic);
}

.header.scrolled {
  background: rgba(255, 250, 242, 0.95);
  backdrop-filter: blur(var(--blur-overlay));
}
```

**JavaScript:**

```javascript
const header = document.querySelector('.header');
const heroHeight = document.querySelector('.hero').offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY > heroHeight - 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
```

### Parallax Diagrams

**Behavior:** In article pages, diagrams and callouts can move at a slower rate than the scroll (e.g., 20% slower). Creates subtle depth.

```css
.parallax-element {
  will-change: transform;
}
```

```javascript
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  document.querySelectorAll('.parallax-element').forEach(el => {
    const rate = 0.2;
    el.style.transform = `translateY(${scrolled * rate}px)`;
  });
});
```

### Important Note

**No heavy parallax:** Do not use large parallax shifts or 3D transforms. Keep animations subtle and avoid motion sickness.

---

## Animation States Summary

| Element | Default | Hover | Active | Entering Viewport |
|---------|---------|-------|--------|-------------------|
| Button | Static | Lift 2px, darken | Sink 1px | N/A |
| Card | Static | Lift 3px, glow | Pressed state | Fade up 30px |
| Icon | Static | Wiggle ±5° | N/A | N/A |
| Link | No underline | Underline slides in | N/A | N/A |
| Tab | No indicator | N/A | Indicator slides | N/A |
| Section | Hidden (0 opacity, 30px down) | N/A | N/A | Fade to visible |

---

## Performance Considerations

1. **Use `transform` and `opacity`** - These properties are GPU-accelerated and won't trigger layout recalculations

2. **Add `will-change` sparingly** - Only on elements that will actually animate

3. **Prefer CSS transitions over JS animations** - For simple state changes, CSS is more performant

4. **Debounce scroll handlers** - When using JavaScript for parallax or scroll effects

5. **Respect `prefers-reduced-motion`:**

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Complete Motion CSS

```css
:root {
  /* Timing */
  --motion-fast: 150ms;
  --motion-medium: 250ms;
  --motion-slow: 500ms;
  
  /* Easing */
  --ease-out-cubic: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out-quad: cubic-bezier(0.45, 0, 0.55, 1);
}

/* Base transitions */
.transition-all {
  transition: all var(--motion-medium) var(--ease-out-cubic);
}

.transition-fast {
  transition: all var(--motion-fast) var(--ease-out-cubic);
}

.transition-slow {
  transition: all var(--motion-slow) var(--ease-out-cubic);
}

/* Hover utilities */
.hover-lift:hover {
  transform: translateY(-3px);
}

.hover-glow:hover {
  box-shadow: 0 0 20px rgba(255, 68, 102, 0.2);
}

/* Reveal animations */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: 
    opacity var(--motion-slow) var(--ease-out-cubic),
    transform var(--motion-slow) var(--ease-out-cubic);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered reveals */
.reveal:nth-child(1) { transition-delay: 0ms; }
.reveal:nth-child(2) { transition-delay: 100ms; }
.reveal:nth-child(3) { transition-delay: 200ms; }
.reveal:nth-child(4) { transition-delay: 300ms; }
```
