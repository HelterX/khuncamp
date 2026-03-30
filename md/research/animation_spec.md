---
name: Animation & Interaction Specification
date: 26/03/2026
project: Khun Shawn Website Enhancements
status: For Review
---

# Animation Specification – Khun Shawn's Website

## Overview
Eight focused enhancements that add elegance and engagement without feeling tech-heavy. All animations respect `prefers-reduced-motion` for accessibility.

---

## 1. **Hero Section Fade-In + Parallax**

**What:** As page loads, hero content fades in. Hero image has subtle parallax (moves slower than scroll).

**Where:** `.hero-content` + `.hero-image`

**Technical:**
- Content: opacity 0 → 1 (500ms on page load)
- Image: parallax at 0.5x scroll speed
- Easing: `ease-out`

**Visual Impact:** Elegant entry, hero feels dynamic without distraction

**Example:**
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.hero-content { animation: fadeInUp 0.7s ease-out; }
```

---

## 2. **Section Scroll-In Animations**

**What:** Each major section (Value Props, Services, Experience) fades + slides in as user scrolls to it.

**Where:** `.section`, `.value-props`, `.services-grid`

**Technical:**
- Opacity: 0 → 1
- Transform: translateY(40px) → translateY(0)
- Duration: 600ms
- Trigger: Intersection Observer (when 20% visible)
- Easing: `ease-out`

**Visual Impact:** Page feels alive, smooth reveal as you scroll

**Example:**
```css
@keyframes slideUpFade {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
.scroll-fade { animation: slideUpFade 0.6s ease-out forwards; }
```

---

## 3. **Value Prop Cards – Hover Lift & Glow**

**What:** On hover, card lifts higher, shadow deepens, subtle gold accent glows.

**Current:** `translateY(-4px)` on hover
**Enhanced:**
- Lift: `translateY(-8px)` (double current)
- Shadow: `0 16px 32px rgba(0,0,0,0.15)` (deeper)
- Add: Subtle gold border glow (`box-shadow` with gold inset)
- Duration: 300ms
- Easing: `cubic-bezier(0.34, 1.56, 0.64, 1)` (bounce)

**Visual Impact:** Cards feel pressable, more premium

---

## 4. **Service Cards – Staggered Hover**

**What:** Four service cards hover together in staggered wave pattern.

**Where:** `.service-card`

**Technical:**
- Each card gets `transition-delay` (0s, 0.1s, 0.2s, 0.3s)
- On parent hover, all cards lift simultaneously
- Shadow + scale on individual hover

**Visual Impact:** Cohesive, rhythmic feel

---

## 5. **Button Micro-Interactions**

**What:** CTAs (`.btn`) have enhanced feedback.

**Hover State:**
- Background: Slight darker gold (`#b88d1a`)
- Shadow: `0 4px 12px rgba(202, 156, 31, 0.3)` (gold glow)
- Scale: `1.02x`
- Duration: 200ms

**Active State:**
- Scale: `0.98x` (press down)
- Shadow: `0 2px 4px rgba(0,0,0,0.1)` (compressed)

**Visual Impact:** Satisfying press feedback, feels responsive

**Example:**
```css
.btn {
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.btn:hover {
  background-color: #b88d1a;
  box-shadow: 0 4px 12px rgba(202, 156, 31, 0.3);
  transform: scale(1.02);
}
.btn:active {
  transform: scale(0.98);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

---

## 6. **Text Reveal on Headings**

**What:** Main headings (h1, h2) stagger their letters in smoothly.

**Where:** `.hero-content h1`, section `.h2` elements

**Technical:**
- Each heading letter wrapped or uses `word-spacing` effect
- Opacity: 0 → 1, staggered 50ms per letter
- Duration: 400ms total
- Easing: `ease-out`

**Visual Impact:** Premium, cinematic feel without being cheesy

**Note:** Optional — requires mild HTML restructure (wrap heading in span per word, or use CSS animation on ::first-letter)

---

## 7. **Navigation Indicator**

**What:** Active nav link has underline animation.

**Where:** `.nav-links a`

**Technical:**
- Underline appears on hover (width 0 → 100%)
- Duration: 300ms
- Easing: `ease-out`
- Color: Gold

**Visual Impact:** Clear, elegant interaction feedback

**Example:**
```css
.nav-links a {
  position: relative;
  overflow: hidden;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--gold);
  transition: width 0.3s ease-out;
}
.nav-links a:hover::after {
  width: 100%;
}
```

---

## 8. **Testimonial Card – Subtle Border Glow**

**What:** `.testimonial` has soft gold border glow on hover.

**Technical:**
- Border: subtle gold (already present)
- On hover, add: `box-shadow: inset 0 0 12px rgba(202, 156, 31, 0.2)`
- Duration: 300ms

**Visual Impact:** Emphasizes social proof, feels warm

---

## 9. **Footer Link Hover – Colour Transition**

**What:** Footer links fade from white → gold on hover (already coded).

**Enhancement:** Add slight lift/scale
- Transform: `translateY(-2px)` on hover
- Duration: 200ms

**Visual Impact:** Consistent with rest of site

---

## Implementation Priority

### Must-Have (Phase 2a)
1. Hero fade-in + parallax
2. Section scroll-in animations
3. Value prop card hover lift + glow
4. Button micro-interactions
5. Nav underline animation

### Nice-to-Have (Phase 2b)
6. Service card staggered hover
7. Text reveal on headings (requires minor HTML changes)
8. Testimonial glow

### Skip (Too Flashy)
- Auto-animating backgrounds
- Particle effects
- Complex 3D transforms
- Spinning elements

---

## Technical Approach

### CSS Animations
- `@keyframes` for load animations
- Transitions for hover/interaction states
- CSS variables for timing/easing consistency

### JavaScript (Minimal)
- Intersection Observer for scroll-triggered animations
- CSS class toggle (`on-scroll`) when element enters viewport
- No external libraries

### Performance Targets
- 60fps on all interactions
- Lighthouse Performance: 90+
- Mobile: Smooth on iPhone 12+ / high-end Android

### Accessibility
- All animations opt-in for `prefers-reduced-motion: reduce`
- Keyboard navigation unaffected
- Focus states preserved

---

## File Structure
```
khun-shawn/
├── index.html (enhanced with animation markup)
├── css/
│   └── animations.css (new file with all @keyframes)
├── js/
│   └── scroll-animations.js (Intersection Observer)
└── research/
    └── animation_spec.md (this file)
```

---

## Next Steps
1. **Review** — Does this feel right? Too much? Too little?
2. **Adjust** — Change timing, add/remove animations based on feedback
3. **Build** — Implement Phase 2

**Questions for Khun Shawn:**
- Any animations that feel out of brand?
- Any specific interactions she wants emphasized?
- Performance priority (animations vs. load speed)?
