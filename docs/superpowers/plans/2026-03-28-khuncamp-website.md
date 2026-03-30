# KhunCamp Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the full-spec KhunCamp single-page website — dark "Underground Lab" aesthetic, Three.js golden grid, GSAP animations, magnetic CTAs, and complete SEO setup.

**Architecture:** Static HTML5/CSS3/JS — `index.html` for all markup, `css/style.css` for the design system and section layouts, `js/main.js` for all GSAP and Three.js interactions. No build pipeline — all dependencies loaded from CDN. Sections are built static-first, then animated.

**Tech Stack:** HTML5 · CSS3 custom properties · GSAP 3.12.5 + ScrollTrigger · Three.js r160 · Lenis 1.0.42 · Google Fonts Inter · Vanilla JS (ES6+)

**Spec:** `docs/superpowers/specs/2026-03-28-khuncamp-website-design.md`

---

## File Map

| File | Responsibility |
|------|---------------|
| `index.html` | All semantic markup, CDN links, asset references |
| `css/style.css` | Design system variables · component styles · section layouts · responsive |
| `js/main.js` | Lenis · GSAP · Three.js · all interaction functions |
| `robots.txt` | Crawler permissions |
| `sitemap.xml` | Single URL index |

---

## Task 1: Scaffold project structure

**Files:**
- Create: `index.html`
- Create: `css/style.css`
- Create: `js/main.js`
- Create: `robots.txt`
- Create: `sitemap.xml`

- [ ] **Step 1: Create index.html boilerplate**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khun Camp | Done-For-You YouTube Growth Systems & Team Building</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- PRELOADER -->
  <!-- NAV -->
  <!-- MAIN -->
  <!-- FOOTER -->

  <!-- CDN SCRIPTS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r160/three.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Create css/style.css with CSS variable scaffold**

```css
/* KHUN CAMP — DESIGN SYSTEM v1.0 */

:root {
  --bg-deep: #0a0a0a;
  --bg-charcoal: #121212;
  --gold-primary: #D4AF37;
  --gold-glow: rgba(212, 175, 55, 0.3);
  --text-main: #e0e0e0;
  --text-dim: #a0a0a0;
  --glass: rgba(255, 255, 255, 0.03);
  --glass-border: rgba(212, 175, 55, 0.15);
  --ease-smooth: cubic-bezier(0.23, 1, 0.32, 1);
  --font-main: 'Inter', sans-serif;
}
```

- [ ] **Step 3: Create js/main.js with init scaffold**

```javascript
/* KHUN CAMP — INTERACTION ENGINE v1.0 */

document.addEventListener('DOMContentLoaded', () => {
  // Functions called here after DOM is ready
  console.log('Khun Camp: System initialising');
});
```

- [ ] **Step 4: Create robots.txt**

```
User-agent: *
Allow: /
Sitemap: https://khuncamp.com/sitemap.xml
```

- [ ] **Step 5: Create sitemap.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://khuncamp.com/</loc>
    <lastmod>2026-03-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

- [ ] **Step 6: Open index.html in browser — verify blank dark page loads, no console errors**

- [ ] **Step 7: Commit**

```bash
git add "Team Inbox/KhunCamp/index.html" "Team Inbox/KhunCamp/css/style.css" "Team Inbox/KhunCamp/js/main.js" "Team Inbox/KhunCamp/robots.txt" "Team Inbox/KhunCamp/sitemap.xml"
git commit -m "feat: scaffold KhunCamp project structure"
```

---

## Task 2: CSS design system — reset, base, typography, utilities

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Add CSS reset and base body styles after the :root block**

```css
/* RESET */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg-deep);
  color: var(--text-main);
  font-family: var(--font-main);
  font-size: 16px;
  line-height: 1.6;
  overflow-x: hidden;
  cursor: none; /* replaced by custom crosshair cursor */
}

img, video {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}
```

- [ ] **Step 2: Add typography rules**

```css
/* TYPOGRAPHY */
h1, h2, h3, h4 {
  font-family: var(--font-main);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1.05;
}

h1 { font-size: clamp(2.5rem, 6vw, 5rem); }
h2 { font-size: clamp(2rem, 4vw, 3.5rem); }
h3 { font-size: clamp(1.2rem, 2vw, 1.5rem); }
h4 { font-size: 1rem; letter-spacing: 0.05em; }

p { color: var(--text-dim); line-height: 1.7; }
```

- [ ] **Step 3: Add layout utilities**

```css
/* LAYOUT UTILITIES */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

section {
  padding: 100px 0;
  position: relative;
}
```

- [ ] **Step 4: Add gold gradient text utility**

```css
/* UTILITIES */
.gold-gradient-text {
  background: linear-gradient(135deg, #fff 0%, var(--gold-primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gold { color: var(--gold-primary); }
.text-dim { color: var(--text-dim); }
.text-center { text-align: center; }
```

- [ ] **Step 5: Verify in browser — open index.html, body should be near-black background**

- [ ] **Step 6: Commit**

```bash
git add "Team Inbox/KhunCamp/css/style.css"
git commit -m "feat: add CSS design system reset, typography, and utilities"
```

---

## Task 3: CSS components — buttons, glass cards, bento items

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Add primary button component**

```css
/* BUTTONS */
.btn-primary {
  display: inline-block;
  background: var(--gold-primary);
  color: #000;
  padding: 1.2rem 2.5rem;
  border: none;
  border-radius: 0; /* hard edges = engineering precision */
  font-family: var(--font-main);
  font-weight: 900;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: none;
  transition: transform 0.4s var(--ease-smooth), box-shadow 0.4s var(--ease-smooth), filter 0.4s var(--ease-smooth);
  box-shadow: 0 0 0 var(--gold-glow);
  position: relative;
  z-index: 1;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px var(--gold-glow);
  filter: brightness(1.1);
}

.btn-sm {
  padding: 0.8rem 1.5rem;
  font-size: 0.8rem;
}
```

- [ ] **Step 2: Add glass card component**

```css
/* GLASS CARDS */
.system-card {
  background: var(--glass);
  border: 1px solid var(--glass-border);
  padding: 2.5rem;
  border-radius: 4px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: border-color 0.4s ease;
}

.system-card:hover {
  border-color: var(--gold-primary);
}

.card-icon {
  color: var(--gold-primary);
  font-size: 1.4rem;
  margin-bottom: 1rem;
  display: block;
}
```

- [ ] **Step 3: Add bento grid and bento item components**

```css
/* BENTO GRID */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.bento-item {
  background: var(--bg-charcoal);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  min-height: 180px;
  transition: border-color 0.4s ease, background-color 0.4s ease;
}

.bento-item h4 {
  margin-bottom: 0.75rem;
}

.bento-item p {
  font-size: 0.9rem;
}
```

- [ ] **Step 4: Add section label badge**

```css
/* BADGES */
.badge {
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  border: 1px solid var(--gold-primary);
  padding: 4px 10px;
  border-radius: 4px;
  color: var(--gold-primary);
  text-transform: uppercase;
  display: inline-block;
}
```

- [ ] **Step 5: Commit**

```bash
git add "Team Inbox/KhunCamp/css/style.css"
git commit -m "feat: add CSS component library — buttons, glass cards, bento grid"
```

---

## Task 4: HTML — preloader, nav, head SEO meta tags

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace `<title>` and add full SEO meta block inside `<head>` before `</head>`**

```html
  <title>Khun Camp | Done-For-You YouTube Growth Systems & Team Building</title>
  <meta name="description" content="Stop guessing. Khun Camp builds the infrastructure, team, and strategy behind your YouTube channel so you can scale past 50K subscribers. Get your $500 audit today.">
  <meta name="robots" content="index, follow">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://khuncamp.com/">
  <meta property="og:title" content="Khun Camp | Engineer Your YouTube Growth">
  <meta property="og:description" content="We build your YouTube team for you. Audit, Strategy, and Execution for serious creators.">
  <meta property="og:image" content="https://khuncamp.com/images/KhunCamp Khun Camp Logo.jpg">

  <!-- Twitter Card -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:title" content="Khun Camp | Still Stuck Under 50K?">
  <meta property="twitter:description" content="Turn your channel into a system. We build the team, you hit record.">

  <!-- Schema.org -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Khun Camp YouTube Audit & Systems",
    "serviceType": "YouTube Growth Consultancy",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Khun Camp",
      "image": "https://khuncamp.com/images/KhunCamp Khun Camp Logo.jpg"
    },
    "offers": {
      "@type": "Offer",
      "price": "500.00",
      "priceCurrency": "USD"
    },
    "description": "Professional YouTube channel audits and full-service growth infrastructure for creators."
  }
  </script>
```

- [ ] **Step 2: Add preloader markup inside `<body>` replacing the `<!-- PRELOADER -->` comment**

```html
  <!-- PRELOADER -->
  <div id="preloader">
    <div class="preloader-inner">
      <div class="loader-logo">
        <img src="images/KhunCamp Khun Camp Logo.jpg" alt="Khun Camp" class="eye-glow">
      </div>
      <div class="loader-ring"></div>
      <div class="loader-progress">
        <span id="percentage-counter">000</span>
      </div>
      <p class="loader-label">INITIALISING GROWTH SYSTEM</p>
    </div>
  </div>
```

- [ ] **Step 3: Add custom cursor elements before preloader**

```html
  <!-- CURSOR -->
  <div id="cursor-dot"></div>
  <div id="cursor-ring"></div>
```

- [ ] **Step 4: Add navigation replacing `<!-- NAV -->` comment**

```html
  <!-- NAV -->
  <header id="site-header">
    <nav class="container nav-inner">
      <a href="#hero" class="nav-logo">
        <img src="images/KhunCamp Khun Camp Logo.jpg" alt="Khun Camp Logo" height="46">
      </a>
      <a href="#audit" class="btn-primary btn-sm magnetic-item">Get Your $500 Audit</a>
    </nav>
  </header>
```

- [ ] **Step 5: Verify — open in browser, logo should be visible in top-left, gold button top-right, preloader overlay covers page**

- [ ] **Step 6: Commit**

```bash
git add "Team Inbox/KhunCamp/index.html"
git commit -m "feat: add HTML preloader, nav, and SEO meta tags"
```

---

## Task 5: HTML — hero section

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add hero section inside `<main>` (replace `<!-- MAIN -->` comment with `<main>` and add hero)**

```html
  <!-- MAIN -->
  <main>

    <!-- HERO -->
    <section id="hero" class="spotlight-section">
      <div class="spotlight-bg"></div>
      <div class="container hero-grid">
        <div class="hero-content reveal-up">
          <p class="hero-eyebrow">YOUTUBE GROWTH ENGINEERING</p>
          <h1 class="gold-gradient-text">Still stuck under 50K?</h1>
          <p class="hero-subtext">Khun Camp turns serious creators into scalable brands by building the system, team, and strategy behind your content — so you can focus on hitting record.</p>
          <ul class="hero-bullets">
            <li><span class="text-gold">⚡</span> Done-for-you growth infrastructure</li>
            <li><span class="text-gold">⚡</span> Editors, thumbnails, and SEO built around you</li>
            <li><span class="text-gold">⚡</span> You publish. We engineer the rest.</li>
          </ul>
          <div class="hero-cta-group">
            <a href="#audit" class="btn-primary magnetic-item">Get Your $500 Audit</a>
            <p class="hero-cta-sub">Or <a href="#apply" class="text-gold">apply to join Khun Camp</a></p>
          </div>
        </div>
        <div class="hero-visual eye-glow" id="threejs-container"></div>
      </div>
    </section>
```

- [ ] **Step 2: Commit**

```bash
git add "Team Inbox/KhunCamp/index.html"
git commit -m "feat: add HTML hero section"
```

---

## Task 6: HTML — problem, reframe, solution sections

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add problem section after hero section**

```html
    <!-- PROBLEM -->
    <section id="problem">
      <div class="container">
        <div class="section-header reveal-up">
          <h2>You're posting.<br>The growth just isn't showing up.</h2>
        </div>
        <div class="problem-grid">
          <div class="system-card reveal-up">
            <span class="card-icon">✕</span>
            <h3>The Growth Stall</h3>
            <p>Videos go live and plateau at a few hundred views. You're posting, but the algorithm isn't catching your content.</p>
          </div>
          <div class="system-card reveal-up">
            <span class="card-icon">✕</span>
            <h3>Reactive Guesswork</h3>
            <p>You're guessing titles and thumbnails on the day of upload. There is no predictive data behind your creative choices.</p>
          </div>
          <div class="system-card reveal-up">
            <span class="card-icon">✕</span>
            <h3>The Solo Grind</h3>
            <p>You are the scriptwriter, editor, and manager. You've built a job, not a channel. It's not a system; it's a burden.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- REFRAME -->
    <section id="reframe">
      <div class="container text-center">
        <div class="reveal-up">
          <h2>You don't have a content problem.<br><span class="gold-gradient-text">You have a system problem.</span></h2>
          <p class="reframe-body">The channels that blow past 50K don't just post more. They run on clear strategy, tight feedback loops, and a team that executes the same way every week.</p>
        </div>
      </div>
    </section>
```

- [ ] **Step 2: Add solution section with SVG infrastructure diagram**

```html
    <!-- SOLUTION -->
    <section id="solution">
      <div class="container">
        <div class="section-header reveal-up">
          <p class="section-eyebrow">THE SYSTEM</p>
          <h2>The Khun Camp<br><span class="gold-gradient-text">Infrastructure</span></h2>
          <p>One creator at the centre. A full team executing around you.</p>
        </div>
        <div class="solution-diagram-wrapper reveal-up">
          <svg id="solution-diagram" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" aria-label="Khun Camp growth system diagram">
            <!-- Connection lines -->
            <line class="node-line" x1="300" y1="200" x2="300" y2="60" />
            <line class="node-line" x1="300" y1="200" x2="490" y2="130" />
            <line class="node-line" x1="300" y1="200" x2="490" y2="280" />
            <line class="node-line" x1="300" y1="200" x2="300" y2="340" />
            <line class="node-line" x1="300" y1="200" x2="110" y2="280" />
            <line class="node-line" x1="300" y1="200" x2="110" y2="130" />
            <!-- Centre node -->
            <circle class="node-center" cx="300" cy="200" r="50" />
            <text class="node-label node-label-center" x="300" y="196" text-anchor="middle">CREATOR</text>
            <text class="node-label node-label-center-sub" x="300" y="212" text-anchor="middle">YOU</text>
            <!-- Satellite nodes -->
            <circle class="node-satellite" cx="300" cy="60" r="36" />
            <text class="node-label" x="300" y="56" text-anchor="middle">STRATEGY</text>
            <text class="node-label-sub" x="300" y="70" text-anchor="middle">WEEKLY</text>

            <circle class="node-satellite" cx="490" cy="130" r="36" />
            <text class="node-label" x="490" y="126" text-anchor="middle">SEO</text>
            <text class="node-label-sub" x="490" y="140" text-anchor="middle">TRAFFIC</text>

            <circle class="node-satellite" cx="490" cy="280" r="36" />
            <text class="node-label" x="490" y="276" text-anchor="middle">EDITORS</text>
            <text class="node-label-sub" x="490" y="290" text-anchor="middle">QUALITY</text>

            <circle class="node-satellite" cx="300" cy="340" r="36" />
            <text class="node-label" x="300" y="336" text-anchor="middle">THUMBNAILS</text>
            <text class="node-label-sub" x="300" y="350" text-anchor="middle">CTR</text>

            <circle class="node-satellite" cx="110" cy="280" r="36" />
            <text class="node-label" x="110" y="276" text-anchor="middle">AI</text>
            <text class="node-label-sub" x="110" y="290" text-anchor="middle">WORKFLOWS</text>

            <circle class="node-satellite" cx="110" cy="130" r="36" />
            <text class="node-label" x="110" y="126" text-anchor="middle">SYSTEM</text>
            <text class="node-label-sub" x="110" y="140" text-anchor="middle">CALENDAR</text>
          </svg>
        </div>
      </div>
    </section>
```

- [ ] **Step 3: Commit**

```bash
git add "Team Inbox/KhunCamp/index.html"
git commit -m "feat: add HTML problem, reframe, solution sections"
```

---

## Task 7: HTML — timeline and deliverables sections

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add how it works timeline section**

```html
    <!-- HOW IT WORKS -->
    <section id="how-it-works">
      <div class="container">
        <div class="section-header reveal-up">
          <p class="section-eyebrow">THE PROCESS</p>
          <h2>How Khun Camp <span class="gold-gradient-text">Works</span></h2>
        </div>
        <div class="timeline">
          <div class="timeline-step reveal-up" data-step="01">
            <div class="step-number gold-gradient-text">01</div>
            <div class="step-connector"></div>
            <div class="step-content">
              <h3>$500 Audit</h3>
              <p>We break down your channel, library, and data to find exactly what's blocking your growth. You receive a prioritised action plan.</p>
            </div>
          </div>
          <div class="timeline-step reveal-up" data-step="02">
            <div class="step-number gold-gradient-text">02</div>
            <div class="step-connector"></div>
            <div class="step-content">
              <h3>Join the Camp</h3>
              <p>We assemble your core team — editors, thumbnail designers, SEO — and design your entire growth system around your channel goals.</p>
            </div>
          </div>
          <div class="timeline-step reveal-up" data-step="03">
            <div class="step-number gold-gradient-text">03</div>
            <div class="step-connector"></div>
            <div class="step-content">
              <h3>Scale</h3>
              <p>You publish. Your team handles the rest while we watch the numbers and iterate every week. The system compounds.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
```

- [ ] **Step 2: Add deliverables bento section**

```html
    <!-- DELIVERABLES -->
    <section id="deliverables">
      <div class="container">
        <div class="section-header reveal-up">
          <p class="section-eyebrow">WHAT YOU GET</p>
          <h2>Inside the <span class="gold-gradient-text">Engineering Lab</span></h2>
        </div>
        <div class="bento-grid">
          <div class="bento-item reveal-up bento-span-2">
            <h4 class="gold-gradient-text">Weekly Strategy Guidance</h4>
            <p>Direct access to high-level strategy. We hold weekly calls or async breakdowns focused on the Three Pillars: Titles, Hooks, and Offers.</p>
          </div>
          <div class="bento-item reveal-up">
            <h4 class="gold-gradient-text">Full Content System</h4>
            <p>A mapped content calendar and pillars designed for sustainable, compounding growth.</p>
          </div>
          <div class="bento-item reveal-up">
            <h4 class="gold-gradient-text">Editor & Thumbnail Direction</h4>
            <p>Creative briefs and feedback loops that ensure quality rises every month.</p>
          </div>
          <div class="bento-item reveal-up">
            <h4 class="gold-gradient-text">SEO & Optimisation</h4>
            <p>Upload checklists, metadata, and internal linking optimised for Search and Suggested traffic.</p>
          </div>
          <div class="bento-item reveal-up">
            <h4 class="gold-gradient-text">AI-Assisted Workflows</h4>
            <p>Proprietary workflows for idea expansion and scripting — leveraging AI without losing your human voice.</p>
          </div>
          <div class="bento-item reveal-up bento-span-3 bento-highlight">
            <div class="bento-highlight-inner">
              <div>
                <h4 class="gold-gradient-text">Website & Creator Infrastructure</h4>
                <p>When you're ready to scale beyond the platform, we build the offer pages and funnels to capture your audience.</p>
              </div>
              <span class="badge">OPTIONAL MODULE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
```

- [ ] **Step 3: Commit**

```bash
git add "Team Inbox/KhunCamp/index.html"
git commit -m "feat: add HTML timeline and deliverables sections"
```

---

## Task 8: HTML — proof, social, authority, final CTA, footer

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add founder proof section**

```html
    <!-- FOUNDER PROOF -->
    <section id="proof">
      <div class="container">
        <div class="founder-block reveal-up">
          <div class="founder-image">
            <img src="images/KhunCamp by window in black blazer KhunCamp Khun Camp.webp" alt="KhunShawn — Content Systems Engineer">
          </div>
          <div class="founder-info">
            <p class="section-eyebrow">LED BY</p>
            <h2 class="gold-gradient-text">KhunShawn</h2>
            <p class="founder-title">47K+ Subscribers · Content Systems Engineer</p>
            <p class="founder-body">This isn't theory. It's the same operating system used to build and scale creator channels from scratch. Every system inside Khun Camp has been tested on a real channel, with real data.</p>
            <a href="#audit" class="btn-primary magnetic-item" style="margin-top: 2rem;">Get Your $500 Audit</a>
          </div>
        </div>
      </div>
    </section>

    <!-- SOCIAL PROOF -->
    <section id="social-proof">
      <div class="container">
        <div class="section-header reveal-up text-center">
          <p class="section-eyebrow">IN THE FIELD</p>
          <h2>The Work <span class="gold-gradient-text">In Action</span></h2>
        </div>
        <div class="proof-bento">
          <div class="proof-item proof-item-video reveal-up">
            <video src="images/highlights KhunCamp Khun Camp.mp4" autoplay muted loop playsinline></video>
            <div class="proof-overlay"><span>HIGHLIGHTS REEL</span></div>
          </div>
          <div class="proof-item reveal-up">
            <img src="images/On Camera KhunCamp Khun Camp.webp" alt="KhunShawn on camera">
            <div class="proof-overlay"><span>ON CAMERA</span></div>
          </div>
          <div class="proof-item reveal-up">
            <img src="images/KhunCamp Khun Camp  Da Nang Nomad Fest.jpg" alt="KhunCamp at Da Nang Nomad Fest">
            <div class="proof-overlay"><span>DA NANG NOMAD FEST</span></div>
          </div>
          <div class="proof-item reveal-up">
            <img src="images/Volunteer Content Curator at Danang Nomad Fest KhunCamp Khun Camp.webp" alt="Volunteer Content Curator at Da Nang">
            <div class="proof-overlay"><span>CONTENT CURATOR</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- AUTHORITY MARKS -->
    <section id="authority-marks">
      <div class="container authority-inner">
        <span class="authority-label">AS SEEN IN / FEATURED ON:</span>
        <div class="authority-logos">
          <span class="authority-name">INTRO.CO</span>
          <span class="authority-name">YOUTUBE CERTIFIED</span>
          <span class="authority-name">CREATOR ESSENTIALS</span>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section id="final-cta">
      <div class="container text-center reveal-up">
        <p class="section-eyebrow">READY?</p>
        <h2>Stop guessing.<br><span class="gold-gradient-text">Start growing.</span></h2>
        <a href="#audit" class="btn-primary btn-final magnetic-item" id="breathing-cta">Get Your $500 Audit</a>
        <p class="cta-footnote">Audits are limited. Serious creators only.</p>
      </div>
    </section>

  </main><!-- /MAIN -->
```

- [ ] **Step 2: Add footer after `</main>`**

```html
  <footer id="site-footer">
    <div class="container footer-inner">
      <p>&copy; 2026 Khun Camp. All Rights Reserved.</p>
      <p><a href="#audit" class="text-gold">Get Your $500 Audit</a></p>
    </div>
  </footer>
```

- [ ] **Step 3: Verify — open in browser. All sections should be visible, stacked vertically. No console errors.**

- [ ] **Step 4: Commit**

```bash
git add "Team Inbox/KhunCamp/index.html"
git commit -m "feat: add HTML proof, social, authority, CTA, and footer sections"
```

---

## Task 9: CSS — preloader, cursor, nav, hero

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Add preloader styles**

```css
/* PRELOADER */
#preloader {
  position: fixed;
  inset: 0;
  background: var(--bg-deep);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preloader-inner {
  text-align: center;
  position: relative;
}

.loader-logo {
  margin-bottom: 2rem;
}

.loader-logo img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin: 0 auto;
  filter: grayscale(0.3);
}

.loader-ring {
  width: 80px;
  height: 80px;
  border: 2px solid rgba(212, 175, 55, 0.2);
  border-top-color: var(--gold-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1.5rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loader-progress {
  font-size: 3rem;
  font-weight: 900;
  color: var(--gold-primary);
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.1em;
}

.loader-label {
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: var(--text-dim);
  margin-top: 1rem;
}
```

- [ ] **Step 2: Add custom cursor styles**

```css
/* CUSTOM CURSOR */
#cursor-dot,
#cursor-ring {
  position: fixed;
  pointer-events: none;
  z-index: 10000;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

#cursor-dot {
  width: 6px;
  height: 6px;
  background: var(--gold-primary);
  top: 0;
  left: 0;
}

#cursor-ring {
  width: 32px;
  height: 32px;
  border: 1px solid rgba(212, 175, 55, 0.6);
  top: 0;
  left: 0;
  transition: width 0.2s ease, height 0.2s ease;
}

#cursor-ring.hover {
  width: 48px;
  height: 48px;
}
```

- [ ] **Step 3: Add nav styles**

```css
/* NAVIGATION */
#site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0;
  background: transparent;
  transition: background 0.4s ease, backdrop-filter 0.4s ease;
}

#site-header.scrolled {
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--glass-border);
}

.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.nav-logo img {
  height: 46px;
  width: auto;
  object-fit: contain;
}
```

- [ ] **Step 4: Add hero styles**

```css
/* HERO */
#hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 100px;
  overflow: hidden;
  position: relative;
}

.spotlight-section {
  position: relative;
}

.spotlight-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212, 175, 55, 0.07) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
  transition: background 0.1s ease;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-eyebrow {
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--gold-primary);
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-subtext {
  font-size: 1.15rem;
  margin: 1.5rem 0;
  color: var(--text-dim);
  max-width: 520px;
}

.hero-bullets {
  margin-bottom: 2rem;
}

.hero-bullets li {
  padding: 0.4rem 0;
  font-size: 1rem;
  color: var(--text-main);
}

.hero-cta-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
}

.hero-cta-sub {
  font-size: 0.8rem;
  color: var(--text-dim);
}

#threejs-container {
  width: 100%;
  aspect-ratio: 1;
  position: relative;
}

#threejs-container canvas {
  display: block;
  width: 100% !important;
  height: 100% !important;
}

.eye-glow {
  position: relative;
}

.eye-glow::after {
  content: '';
  position: absolute;
  inset: -20%;
  background: var(--gold-primary);
  filter: blur(80px);
  opacity: 0.06;
  z-index: -1;
  pointer-events: none;
}
```

- [ ] **Step 5: Verify — open in browser, nav sits at top, hero has correct two-column layout. No layout breaks.**

- [ ] **Step 6: Commit**

```bash
git add "Team Inbox/KhunCamp/css/style.css"
git commit -m "feat: add CSS preloader, cursor, nav, and hero styles"
```

---

## Task 10: CSS — problem, reframe, solution, timeline sections

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Add problem and reframe section styles**

```css
/* PROBLEM */
#problem {
  background: var(--bg-charcoal);
}

.section-header {
  margin-bottom: 3.5rem;
}

.section-eyebrow {
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--gold-primary);
  font-weight: 700;
  margin-bottom: 0.75rem;
  display: block;
}

.problem-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* REFRAME */
#reframe {
  background: var(--bg-deep);
  padding: 120px 0;
}

.reframe-body {
  max-width: 700px;
  margin: 2rem auto 0;
  font-size: 1.15rem;
  color: var(--text-dim);
}
```

- [ ] **Step 2: Add solution section styles**

```css
/* SOLUTION */
#solution {
  background: var(--bg-charcoal);
}

.solution-diagram-wrapper {
  max-width: 600px;
  margin: 3rem auto 0;
}

#solution-diagram {
  width: 100%;
  height: auto;
}

.node-line {
  stroke: var(--gold-primary);
  stroke-width: 1;
  opacity: 0.3;
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
}

.node-center {
  fill: var(--gold-primary);
  opacity: 0.15;
  stroke: var(--gold-primary);
  stroke-width: 1.5;
}

.node-satellite {
  fill: var(--bg-deep);
  stroke: var(--gold-primary);
  stroke-width: 1.5;
  opacity: 0.8;
}

.node-label {
  fill: var(--gold-primary);
  font-family: var(--font-main);
  font-size: 7px;
  font-weight: 900;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.node-label-center {
  font-size: 9px;
}

.node-label-center-sub {
  fill: var(--text-dim);
  font-size: 7px;
  font-weight: 400;
}

.node-label-sub {
  fill: var(--text-dim);
  font-family: var(--font-main);
  font-size: 6px;
  font-weight: 400;
  text-anchor: middle;
}
```

- [ ] **Step 3: Add how it works timeline styles**

```css
/* HOW IT WORKS */
#how-it-works {
  background: var(--bg-deep);
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 700px;
}

.timeline-step {
  display: grid;
  grid-template-columns: 80px 40px 1fr;
  gap: 1.5rem;
  align-items: flex-start;
  padding: 2.5rem 0;
  border-bottom: 1px solid var(--glass-border);
}

.timeline-step:last-child {
  border-bottom: none;
}

.step-number {
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1;
}

.step-connector {
  width: 2px;
  background: linear-gradient(to bottom, var(--gold-primary), transparent);
  margin: 0.5rem auto 0;
  height: 100%;
  min-height: 60px;
}

.step-content h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.step-content p {
  font-size: 0.95rem;
}
```

- [ ] **Step 4: Verify — open in browser, all four sections display correctly with correct backgrounds, SVG diagram visible**

- [ ] **Step 5: Commit**

```bash
git add "Team Inbox/KhunCamp/css/style.css"
git commit -m "feat: add CSS problem, reframe, solution, and timeline styles"
```

---

## Task 11: CSS — deliverables, proof, social, authority, CTA, footer

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Add deliverables bento and span modifiers**

```css
/* DELIVERABLES */
#deliverables {
  background: var(--bg-charcoal);
}

.bento-span-2 {
  grid-column: span 2;
}

.bento-span-3 {
  grid-column: span 3;
}

.bento-highlight {
  background: linear-gradient(to right, var(--bg-charcoal), rgba(212, 175, 55, 0.05));
}

.bento-highlight-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}
```

- [ ] **Step 2: Add founder proof styles**

```css
/* FOUNDER PROOF */
#proof {
  background: var(--bg-deep);
}

.founder-block {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 4rem;
  align-items: center;
  background: var(--glass);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  padding: 3rem;
  backdrop-filter: blur(10px);
}

.founder-image img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  object-position: top center;
  border-radius: 4px;
  filter: grayscale(0.2);
}

.founder-title {
  color: var(--gold-primary);
  font-size: 0.9rem;
  margin: 0.5rem 0 1.5rem;
  font-weight: 700;
}

.founder-body {
  font-size: 1rem;
  line-height: 1.8;
}
```

- [ ] **Step 3: Add social proof bento styles**

```css
/* SOCIAL PROOF */
#social-proof {
  background: var(--bg-charcoal);
}

.proof-bento {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 280px 280px;
  gap: 1.5rem;
  margin-top: 3rem;
}

.proof-item-video {
  grid-row: span 2;
}

.proof-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: var(--bg-deep);
}

.proof-item img,
.proof-item video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s var(--ease-smooth);
}

.proof-item:hover img,
.proof-item:hover video {
  transform: scale(1.04);
}

.proof-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%);
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
}

.proof-overlay span {
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  font-weight: 700;
  color: var(--gold-primary);
}
```

- [ ] **Step 4: Add authority bar, final CTA, and footer styles**

```css
/* AUTHORITY BAR */
#authority-marks {
  background: rgba(0, 0, 0, 0.4);
  padding: 2.5rem 0;
  border-top: 1px solid var(--glass-border);
  border-bottom: 1px solid var(--glass-border);
}

.authority-inner {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.authority-label {
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  color: var(--text-dim);
  white-space: nowrap;
}

.authority-logos {
  display: flex;
  gap: 3rem;
  opacity: 0.5;
  filter: grayscale(1);
}

.authority-name {
  font-size: 1rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  color: var(--text-main);
}

/* FINAL CTA */
#final-cta {
  background: var(--bg-deep);
  padding: 150px 0;
}

.btn-final {
  font-size: 1.25rem;
  padding: 1.6rem 4rem;
  margin-top: 3rem;
  display: inline-block;
}

.cta-footnote {
  margin-top: 1.5rem;
  font-size: 0.8rem;
  color: var(--text-dim);
  letter-spacing: 0.05em;
}

/* FOOTER */
#site-footer {
  padding: 2.5rem 0;
  border-top: 1px solid var(--glass-border);
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-inner p {
  font-size: 0.8rem;
  color: var(--text-dim);
}
```

- [ ] **Step 5: Verify — open in browser, scroll through entire page. All sections visible, layout intact.**

- [ ] **Step 6: Commit**

```bash
git add "Team Inbox/KhunCamp/css/style.css"
git commit -m "feat: add CSS deliverables, proof, social, authority, CTA, footer styles"
```

---

## Task 12: CSS — responsive breakpoints

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Add tablet and mobile responsive rules at the end of style.css**

```css
/* ==============================
   RESPONSIVE
============================== */

@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }

  #threejs-container {
    height: 300px;
    aspect-ratio: auto;
  }

  .founder-block {
    grid-template-columns: 1fr;
  }

  .founder-image img {
    height: 300px;
  }

  .bento-span-2 {
    grid-column: span 1;
  }

  .bento-span-3 {
    grid-column: span 1;
  }

  .bento-highlight-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  section {
    padding: 70px 0;
  }

  .bento-grid {
    grid-template-columns: 1fr;
  }

  .proof-bento {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .proof-item-video {
    grid-row: span 1;
    height: 260px;
  }

  .proof-item {
    height: 220px;
  }

  .timeline-step {
    grid-template-columns: 60px 24px 1fr;
    gap: 1rem;
  }

  .authority-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .authority-logos {
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .footer-inner {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  #final-cta {
    padding: 100px 0;
  }

  .btn-final {
    font-size: 1rem;
    padding: 1.2rem 2.5rem;
  }

  #cursor-dot,
  #cursor-ring {
    display: none; /* hide crosshair on touch devices */
  }

  body {
    cursor: auto;
  }

  .btn-primary {
    cursor: pointer;
  }
}
```

- [ ] **Step 2: Open index.html and resize browser to 768px width — verify bento grid stacks to 1 column, hero stacks vertically**

- [ ] **Step 3: Commit**

```bash
git add "Team Inbox/KhunCamp/css/style.css"
git commit -m "feat: add responsive breakpoints for tablet and mobile"
```

---

## Task 13: main.js — setup, Lenis smooth scroll, GSAP registration

**Files:**
- Modify: `js/main.js`

- [ ] **Step 1: Replace main.js with full setup including Lenis, GSAP plugin registration, and utility functions**

```javascript
/* KHUN CAMP — INTERACTION ENGINE v1.0 */

/* ============================================================
   1. GSAP PLUGIN REGISTRATION
============================================================ */
gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   2. LENIS SMOOTH SCROLL
============================================================ */
function initLenis() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Connect Lenis to ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.lagSmoothing(0);

  return lenis;
}

/* ============================================================
   3. UTILITY: IS TOUCH DEVICE
============================================================ */
function isTouchDevice() {
  return window.matchMedia('(max-width: 768px)').matches ||
         ('ontouchstart' in window);
}

/* ============================================================
   4. INIT — called after DOM is ready
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const lenis = initLenis();

  initPreloader();
  initNav();
  initCursor();
  initSpotlight();
  initThreeBackground();
  initRevealAnimations();
  initSolutionDiagram();
  initTimelineAnimation();
  initMagneticButtons();
  initBentoHover();
  initBreathingCTA();
});
```

- [ ] **Step 2: Verify — open in browser, smooth scroll should be active (page glides), console shows no errors**

- [ ] **Step 3: Commit**

```bash
git add "Team Inbox/KhunCamp/js/main.js"
git commit -m "feat: add main.js setup with Lenis smooth scroll and GSAP init"
```

---

## Task 14: Preloader GSAP animation

**Files:**
- Modify: `js/main.js`

- [ ] **Step 1: Add initPreloader function before the init section**

```javascript
/* ============================================================
   5. PRELOADER
============================================================ */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const counter = document.getElementById('percentage-counter');
  const logo = preloader.querySelector('.loader-logo img');

  if (!preloader || !counter) return;

  // Logo pulse on load
  gsap.to(logo, {
    opacity: 0.5,
    duration: 0.8,
    yoyo: true,
    repeat: -1,
    ease: 'power1.inOut'
  });

  // Count 0 → 100
  const obj = { val: 0 };
  gsap.to(obj, {
    val: 100,
    duration: 2.2,
    ease: 'power2.inOut',
    onUpdate() {
      const formatted = String(Math.floor(obj.val)).padStart(3, '0');
      counter.textContent = formatted;
    },
    onComplete() {
      // Exit animation: clip-path wipe upward
      gsap.to(preloader, {
        clipPath: 'inset(0% 0% 100% 0%)',
        duration: 0.9,
        delay: 0.2,
        ease: 'power4.inOut',
        onComplete() {
          preloader.style.display = 'none';
          // Trigger hero entrance after preloader
          gsap.fromTo('#hero .reveal-up',
            { opacity: 0, y: 40, clipPath: 'inset(100% 0% 0% 0%)' },
            { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)', duration: 1, stagger: 0.15, ease: 'power4.out' }
          );
        }
      });
    }
  });

  // Add initial clip-path to preloader for wipe exit
  gsap.set(preloader, { clipPath: 'inset(0% 0% 0% 0%)' });
}
```

- [ ] **Step 2: Verify — reload page. Counter should animate 000→100, then preloader wipes up revealing the page.**

- [ ] **Step 3: Commit**

```bash
git add "Team Inbox/KhunCamp/js/main.js"
git commit -m "feat: add preloader GSAP counter and clip-path exit animation"
```

---

## Task 15: Three.js golden grid background

**Files:**
- Modify: `js/main.js`

- [ ] **Step 1: Add initThreeBackground function before the init section**

```javascript
/* ============================================================
   6. THREE.JS GOLDEN GRID
============================================================ */
function initThreeBackground() {
  const container = document.getElementById('threejs-container');
  if (!container || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    container.offsetWidth / container.offsetHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Particle geometry
  const count = 1500;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    size: 0.025,
    color: 0xD4AF37,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);
  camera.position.z = 3;

  // Mouse influence
  let mouseX = 0;
  let mouseY = 0;
  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.5;
    mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 0.5;
  });

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.001;
    particles.rotation.x += 0.0005;
    // Subtle mouse follow
    particles.rotation.y += (mouseX - particles.rotation.y) * 0.02;
    renderer.render(scene, camera);
  };
  animate();

  // Resize handler
  window.addEventListener('resize', () => {
    if (!container) return;
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
  });
}
```

- [ ] **Step 2: Verify — hero right panel should show animated gold particles. No console errors.**

- [ ] **Step 3: Commit**

```bash
git add "Team Inbox/KhunCamp/js/main.js"
git commit -m "feat: add Three.js golden grid particle system to hero"
```

---

## Task 16: GSAP ScrollTrigger reveal animations

**Files:**
- Modify: `js/main.js`

- [ ] **Step 1: Add initRevealAnimations function before the init section**

```javascript
/* ============================================================
   7. SCROLL TRIGGER REVEALS
============================================================ */
function initRevealAnimations() {
  const elements = document.querySelectorAll('.reveal-up');

  elements.forEach((el) => {
    // Skip hero elements — those are handled by preloader exit
    if (el.closest('#hero')) return;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 40,
        clipPath: 'inset(100% 0% 0% 0%)'
      },
      {
        opacity: 1,
        y: 0,
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
}
```

- [ ] **Step 2: Verify — scroll down page. Cards and headings should "assemble" into view with the clip-path wipe effect.**

- [ ] **Step 3: Commit**

```bash
git add "Team Inbox/KhunCamp/js/main.js"
git commit -m "feat: add GSAP ScrollTrigger clip-path reveal animations"
```

---

## Task 17: Spotlight hero effect

**Files:**
- Modify: `js/main.js`

- [ ] **Step 1: Add initSpotlight function before the init section**

```javascript
/* ============================================================
   8. SPOTLIGHT HERO EFFECT
============================================================ */
function initSpotlight() {
  const hero = document.getElementById('hero');
  const bg = hero ? hero.querySelector('.spotlight-bg') : null;
  if (!hero || !bg) return;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    bg.style.background = `radial-gradient(
      circle 350px at ${x}% ${y}%,
      rgba(212, 175, 55, 0.1) 0%,
      rgba(212, 175, 55, 0.03) 40%,
      transparent 70%
    )`;
  });

  hero.addEventListener('mouseleave', () => {
    bg.style.background = 'radial-gradient(circle 300px at 50% 50%, rgba(212, 175, 55, 0.04) 0%, transparent 70%)';
  });
}
```

- [ ] **Step 2: Verify — hover over hero section. A subtle gold radial glow should follow the cursor.**

- [ ] **Step 3: Commit**

```bash
git add "Team Inbox/KhunCamp/js/main.js"
git commit -m "feat: add spotlight mousemove effect to hero section"
```

---

## Task 18: Custom crosshair cursor

**Files:**
- Modify: `js/main.js`

- [ ] **Step 1: Add initCursor function before the init section**

```javascript
/* ============================================================
   9. CUSTOM CROSSHAIR CURSOR
============================================================ */
function initCursor() {
  if (isTouchDevice()) return;

  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Dot follows instantly
    gsap.set(dot, { x: mouseX, y: mouseY });
  });

  // Ring follows with lag
  gsap.ticker.add(() => {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    gsap.set(ring, { x: ringX, y: ringY });
  });

  // Expand ring on hoverable elements
  const hoverables = document.querySelectorAll('a, button, .btn-primary, .system-card, .bento-item');
  hoverables.forEach((el) => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
  });
}
```

- [ ] **Step 2: Verify — custom gold dot and lagging ring should appear instead of default cursor. Ring expands over buttons and cards.**

- [ ] **Step 3: Commit**

```bash
git add "Team Inbox/KhunCamp/js/main.js"
git commit -m "feat: add custom crosshair cursor with GSAP lag ring"
```

---

## Task 19: Magnetic CTA buttons

**Files:**
- Modify: `js/main.js`

- [ ] **Step 1: Add initMagneticButtons function before the init section**

```javascript
/* ============================================================
   10. MAGNETIC CTA BUTTONS
============================================================ */
function initMagneticButtons() {
  if (isTouchDevice()) return;

  const buttons = document.querySelectorAll('.magnetic-item');

  buttons.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * 0.35;
      const deltaY = (e.clientY - centerY) * 0.35;

      gsap.to(btn, {
        x: deltaX,
        y: deltaY,
        duration: 0.4,
        ease: 'power2.out'
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.5)'
      });
    });
  });
}
```

- [ ] **Step 2: Verify — hover slowly toward a "$500 Audit" button. The button should pull toward the cursor and snap back elastically on leave.**

- [ ] **Step 3: Commit**

```bash
git add "Team Inbox/KhunCamp/js/main.js"
git commit -m "feat: add magnetic pull effect to all CTA buttons"
```

---

## Task 20: Bento hover, solution SVG, timeline animation

**Files:**
- Modify: `js/main.js`

- [ ] **Step 1: Add initBentoHover function**

```javascript
/* ============================================================
   11. BENTO GOLDEN BORDER-DRAW HOVER
============================================================ */
function initBentoHover() {
  const items = document.querySelectorAll('.bento-item');

  items.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        borderColor: '#D4AF37',
        backgroundColor: 'rgba(212, 175, 55, 0.04)',
        duration: 0.35,
        ease: 'power2.out'
      });
    });

    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        borderColor: 'rgba(255, 255, 255, 0.05)',
        backgroundColor: 'var(--bg-charcoal)',
        duration: 0.35,
        ease: 'power2.out'
      });
    });
  });
}
```

- [ ] **Step 2: Add initSolutionDiagram function**

```javascript
/* ============================================================
   12. SOLUTION DIAGRAM SVG ANIMATION
============================================================ */
function initSolutionDiagram() {
  const lines = document.querySelectorAll('.node-line');
  const satellites = document.querySelectorAll('.node-satellite');
  const center = document.querySelector('.node-center');

  if (!lines.length) return;

  // Set initial states
  gsap.set(lines, { strokeDashoffset: 300, opacity: 0 });
  gsap.set(satellites, { scale: 0, transformOrigin: 'center', opacity: 0 });
  gsap.set(center, { scale: 0, transformOrigin: 'center', opacity: 0 });

  ScrollTrigger.create({
    trigger: '#solution-diagram',
    start: 'top 75%',
    once: true,
    onEnter() {
      // 1. Center node appears
      gsap.to(center, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)' });
      // 2. Lines draw outward
      gsap.to(lines, {
        strokeDashoffset: 0,
        opacity: 0.3,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.3
      });
      // 3. Satellite nodes pop in
      gsap.to(satellites, {
        scale: 1,
        opacity: 0.9,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(2)',
        delay: 0.8
      });
    }
  });
}
```

- [ ] **Step 3: Add initTimelineAnimation function**

```javascript
/* ============================================================
   13. TIMELINE GOLD GLOW ANIMATION
============================================================ */
function initTimelineAnimation() {
  const steps = document.querySelectorAll('.timeline-step');
  if (!steps.length) return;

  steps.forEach((step, i) => {
    ScrollTrigger.create({
      trigger: step,
      start: 'top 70%',
      once: true,
      onEnter() {
        gsap.fromTo(
          step.querySelector('.step-number'),
          { opacity: 0.2, textShadow: '0 0 0px transparent' },
          {
            opacity: 1,
            textShadow: '0 0 20px rgba(212, 175, 55, 0.6)',
            duration: 0.8,
            delay: i * 0.15,
            ease: 'power3.out'
          }
        );
        gsap.fromTo(
          step.querySelector('.step-connector'),
          { scaleY: 0, transformOrigin: 'top' },
          { scaleY: 1, duration: 0.6, delay: i * 0.15 + 0.3, ease: 'power2.out' }
        );
      }
    });
  });
}
```

- [ ] **Step 4: Verify — scroll to solution section: lines draw, nodes pop in. Scroll to timeline: numbers glow as they enter viewport.**

- [ ] **Step 5: Commit**

```bash
git add "Team Inbox/KhunCamp/js/main.js"
git commit -m "feat: add bento hover, solution SVG draw, and timeline glow animations"
```

---

## Task 21: Breathing CTA and nav scroll behaviour

**Files:**
- Modify: `js/main.js`

- [ ] **Step 1: Add initBreathingCTA function**

```javascript
/* ============================================================
   14. BREATHING CTA PULSE
============================================================ */
function initBreathingCTA() {
  const cta = document.getElementById('breathing-cta');
  if (!cta) return;

  gsap.to(cta, {
    boxShadow: '0 0 40px rgba(212, 175, 55, 0.6), 0 0 80px rgba(212, 175, 55, 0.2)',
    duration: 1.8,
    yoyo: true,
    repeat: -1,
    ease: 'power1.inOut'
  });
}
```

- [ ] **Step 2: Add initNav function**

```javascript
/* ============================================================
   15. NAV SCROLL BEHAVIOUR
============================================================ */
function initNav() {
  const header = document.getElementById('site-header');
  if (!header) return;

  ScrollTrigger.create({
    start: 'top -80px',
    onUpdate(self) {
      if (self.progress > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });
}
```

- [ ] **Step 3: Verify — scroll to final CTA: gold button pulses with a breathing glow. Scroll down from top: nav gains frosted glass background.**

- [ ] **Step 4: Commit**

```bash
git add "Team Inbox/KhunCamp/js/main.js"
git commit -m "feat: add breathing CTA glow and nav scroll behaviour"
```

---

## Task 22: Final polish and full review

**Files:**
- Review: `index.html`, `css/style.css`, `js/main.js`

- [ ] **Step 1: Open index.html in browser — run through full checklist:**

```
[ ] Preloader counts 000→100 and wipes up
[ ] Hero headline and bullets reveal after preloader exits
[ ] Three.js gold particles visible in hero right panel
[ ] Spotlight glow follows cursor over hero
[ ] Crosshair cursor visible, ring expands on hover
[ ] Nav becomes frosted glass on scroll past hero
[ ] Problem cards reveal on scroll (clip-path wipe)
[ ] Reframe section reveals on scroll
[ ] Solution SVG: center node → lines draw → satellites pop in
[ ] Timeline numbers glow gold as they enter view
[ ] Bento items highlight gold on hover
[ ] Founder photo and copy visible
[ ] Social proof grid: video autoplays, photos correct
[ ] Authority bar visible with logos
[ ] Final CTA button has breathing glow
[ ] "$500 Audit" buttons have magnetic pull effect
[ ] All CTA links go to #audit (no 404s)
[ ] Mobile at 768px: single column layout, no horizontal scroll
[ ] Console: zero JavaScript errors
```

- [ ] **Step 2: Check page title in browser tab reads: "Khun Camp | Done-For-You YouTube Growth Systems & Team Building"**

- [ ] **Step 3: Right-click → View Source — verify schema.org JSON-LD block is present**

- [ ] **Step 4: Final commit**

```bash
git add "Team Inbox/KhunCamp/index.html" "Team Inbox/KhunCamp/css/style.css" "Team Inbox/KhunCamp/js/main.js" "Team Inbox/KhunCamp/robots.txt" "Team Inbox/KhunCamp/sitemap.xml"
git commit -m "feat: KhunCamp website complete — full spec build with GSAP and Three.js"
```

---

## Summary

| Phase | Tasks | Output |
|-------|-------|--------|
| Scaffold | 1 | File structure + boilerplate |
| Design System | 2–3 | CSS variables, reset, typography, components |
| HTML Structure | 4–8 | All 13 sections marked up |
| CSS Layouts | 9–12 | All sections styled + responsive |
| JS Animations | 13–21 | All 11 interactions implemented |
| Polish | 22 | End-to-end QA checklist |

**22 tasks · ~55 steps · Deployable static site on completion**
