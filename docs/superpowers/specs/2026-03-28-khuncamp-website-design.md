# KhunCamp Website — Design Specification
**Date:** 2026-03-28
**Project:** KhunCamp — Done-For-You YouTube Growth Systems
**Build Type:** Full-spec, single-page, pure HTML/CSS/JS

---

## 1. Project Overview

KhunCamp is positioned as an **Engineering Firm for Creators** — not a course, not a consultancy. The website must feel like a dashboard or blueprint, not a blog or coaching landing page.

**Primary CTA:** "$500 Audit" (placeholder link `#audit` — to be wired to booking system post-launch)
**Secondary CTA:** "Apply to Join Khun Camp" (placeholder link `#apply`)

---

## 2. File Structure

```
Team Inbox/KhunCamp/
├── index.html          ← Single-page site
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css       ← Design system + all layout
├── js/
│   └── main.js         ← GSAP + Three.js interactive engine
├── pages/              ← Future: audit page, apply page
└── images/             ← All existing assets
```

---

## 3. Design System

### Colour Palette
```css
--bg-deep:        #0a0a0a
--bg-charcoal:    #121212
--gold-primary:   #D4AF37
--gold-glow:      rgba(212, 175, 55, 0.3)
--text-main:      #e0e0e0
--text-dim:       #a0a0a0
--glass:          rgba(255, 255, 255, 0.03)
--glass-border:   rgba(212, 175, 55, 0.15)
```

### Typography
- **Font:** Inter (Google Fonts) — weights 400, 700, 900
- **Headers:** Uppercase, letter-spacing -0.02em, weight 900
- **Body:** Clean, spacious, 1.6 line-height
- **Gold gradient text:** `linear-gradient(135deg, #fff 0%, #D4AF37 100%)`

### UI Principles
- Hard edges on buttons (no border-radius) — signals precision and engineering
- `backdrop-filter: blur(10px)` on glass cards — layered "Control Room" feel
- No rounded corners on primary interactive elements
- WCAG 2.2 AA contrast maintained throughout

---

## 4. Page Architecture (Section Order)

### 4.1 Preloader
- Full-screen dark overlay
- Numeric counter: 000 → 100 (GSAP)
- Ring spinner animation
- Logo pulses as counter completes
- Exits with clip-path wipe revealing the page

### 4.2 Navigation (Sticky)
- Left: `KhunCamp Khun Camp Logo.jpg`
- Right: "$500 Audit" CTA button (`.btn-primary`, small variant)
- Transparent → solid charcoal on scroll

### 4.3 Hero (`#hero`)
- **Layout:** CSS Grid — 1.2fr (text) / 1fr (visual)
- **Left:** H1 "Still stuck under 50K?" (gold gradient), subtext, bullet points, CTA group
- **Right:** `#threejs-container` — Three.js Golden Grid (floating nodes)
- **Effect:** Spotlight flashlight follows mouse across entire hero section
- **Class:** `.spotlight-section` on the section element

### 4.4 Problem (`#problem`)
- Dark background (`--bg-charcoal`)
- H2: "You're posting. The growth just isn't showing up."
- 3 glassmorphism `.system-card` elements:
  1. "The Growth Stall" — videos plateau at a few hundred views
  2. "Reactive Guesswork" — no predictive data behind creative choices
  3. "The Solo Grind" — built a job, not a channel
- Card icon: gold ✕ symbol, card reveals via `.reveal-up` ScrollTrigger

### 4.5 Reframe (`#reframe`)
- Centred layout, deep background
- H2: "You don't have a content problem. **You have a system problem.**" (gold gradient on second line)
- Supporting paragraph: channels that scale run on strategy + feedback loops + team

### 4.6 Solution (`#solution`)
- H2: "The Khun Camp System"
- **SVG Infrastructure Diagram:** Central "Creator" node connecting outward to: Editors · Thumbnails · SEO · Strategy · AI Workflows
- Nodes animate in on scroll (GSAP stagger from centre outward)
- Lines draw with SVG `stroke-dasharray` animation

### 4.7 How It Works (`#how-it-works`)
- H2: "How Khun Camp Works"
- **Vertical timeline** with 3 phases, gold glow on active step:
  1. `01. $500 Audit` — break down channel, library, data
  2. `02. Join the Camp` — assemble team, design growth system
  3. `03. Scale` — publish + team handles the rest
- Steps animate in sequentially via ScrollTrigger

### 4.8 What You Get (`#deliverables`)
- H2: "Inside the Engineering Lab"
- **Bento grid** (non-uniform layout using `grid-column: span X`):
  - Weekly Strategy Guidance (span 2)
  - Full Content System
  - Editor & Thumbnail Direction
  - SEO & Optimisation
  - AI-Assisted Workflows
  - Website & Creator Infrastructure (span 3, gold gradient bg, "OPTIONAL MODULE" badge)
- **Golden border-draw on hover:** GSAP animates border from transparent → gold

### 4.9 Founder Block (`#proof`)
- Glass card container
- **Left:** `KhunCamp by window in black blazer.webp` — styled as lead engineer headshot
- **Right:** "Led by KhunShawn", "47K+ Subscribers | Content Systems Engineer", authority copy
- Supporting: "This isn't theory. It's the same operating system used to build and scale creator channels."

### 4.10 Social Proof (`#social-proof`)
- Bento-style layout using available assets:
  - `On Camera KhunCamp Khun Camp.webp`
  - `KhunCamp Khun Camp Da Nang Nomad Fest.jpg`
  - `Volunteer Content Curator at Danang Nomad Fest.webp`
  - `highlights KhunCamp Khun Camp.mp4` — autoplaying muted loop
- Stats or caption overlays on images (gold text)

### 4.11 Authority Bar (`#authority-marks`)
- "AS SEEN IN / FEATURED ON:"
- INTRO.CO · YOUTUBE CERTIFIED · CREATOR ESSENTIALS
- Greyscale, 60% opacity — understated credibility signal

### 4.12 Final CTA (`#final-cta`)
- H2: "Stop guessing. Start growing."
- Massive centred gold button (font-size 1.5rem)
- **Breathing glow effect:** GSAP keyframe pulsing `box-shadow`
- Generous vertical padding (150px)

### 4.13 Footer
- Copyright: "© 2026 Khun Camp. All Rights Reserved."
- Border-top: `--glass-border`

---

## 5. Animation Engine (main.js)

### 5.1 Dependencies (CDN)
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r160/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>
```

### 5.2 Animation Inventory

| # | Name | Trigger | Implementation |
|---|------|---------|----------------|
| 1 | Preloader counter | Page load | GSAP counter tween 0→100, clip-path exit |
| 2 | Golden Grid | Hero mount | Three.js BufferGeometry, 1500 gold particles, slow rotation |
| 3 | Spotlight | mousemove on hero | CSS radial-gradient mask + GSAP position update |
| 4 | ScrollTrigger reveals | `.reveal-up` scroll | GSAP `clipPath: "inset(100% 0% 0% 0%)"` → `inset(0%)`, `power4.out` |
| 5 | Solution diagram | `#solution` scroll | SVG stroke-dasharray draw + node stagger |
| 6 | Timeline steps | `#how-it-works` scroll | Sequential GSAP stagger, gold glow highlight |
| 7 | Golden border-draw | Bento hover | GSAP mouseenter/leave border + bg transition |
| 8 | Magnetic CTA | mousemove near button | GSAP `x/y` offset within button bounds |
| 9 | Breathing CTA | Final CTA | GSAP `yoyo: true` box-shadow pulse |
| 10 | Crosshair cursor | Global | CSS custom cursor + GSAP smooth follower |
| 11 | Nav scroll behaviour | Window scroll | GSAP `backgroundColor` toggle |

### 5.3 Performance Constraints
- All animations use hardware-accelerated properties only: `transform`, `opacity`, `clip-path`
- Three.js uses `alpha: true` and `AdditiveBlending` — no heavy background layering
- `BufferGeometry` for particles — not individual objects
- Lenis smooth scroll for 60fps feel without jank

---

## 6. SEO Files

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://khuncamp.com/sitemap.xml
```

### sitemap.xml
Single URL entry for `https://khuncamp.com/` — expandable when pages/ is populated.

### Meta Tags (in `<head>`)
- Title: "Khun Camp | Done-For-You YouTube Growth Systems & Team Building"
- Description: "Stop guessing. Khun Camp builds the infrastructure, team, and strategy behind your YouTube channel so you can scale past 50K subscribers."
- OG tags: title, description, image (`KhunCamp-Social-Share.jpg`)
- Twitter card: `summary_large_image`
- Schema.org: `Service` type, `$500` offer, `LocalBusiness` provider

---

## 7. Asset Map

| File | Section | Treatment |
|------|---------|-----------|
| `KhunCamp Khun Camp Logo.jpg` | Nav + Preloader | Height 50px in nav, pulsed in preloader |
| `KhunCamp by window in black blazer.webp` | Founder block | Engineer headshot, contained in glass card |
| `On Camera KhunCamp Khun Camp.webp` | Social proof bento | Bento item with caption overlay |
| `KhunCamp Khun Camp Da Nang Nomad Fest.jpg` | Social proof bento | Bento item |
| `Volunteer Content Curator at Danang Nomad Fest.webp` | Social proof bento | Bento item |
| `highlights KhunCamp Khun Camp.mp4` | Social proof bento | Autoplaying muted loop, largest bento cell |

---

## 8. Decisions & Rationale

- **Modular file structure** over single-file: mirrors how the spec was authored (CSS layer, HTML layer, JS layer independently)
- **CDN libraries** over npm/build: no build pipeline needed, instant deployment
- **CTA links as placeholders** (`#audit`, `#apply`): to be wired to booking system post-launch
- **Inter font** over Space Grotesk: spec explicitly names Inter, better weight range for condensed 900
- **No extra pages created now**: `pages/` folder scaffolded but empty — populated when audit/apply pages are ready
