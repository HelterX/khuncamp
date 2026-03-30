# Khun Camp – Educational Platform

**Learn. Grow. Succeed.**

A modern educational platform website showcasing professional training courses, certifications, and learning pathways.

**Live Site:** [khun-camp.com](https://khun-camp.com)

---

## Overview

This is a modern static HTML website featuring:

- **Homepage** – Platform introduction, course offerings, value propositions, and social proof
- **About Page** – Khun Camp's mission, values, and educational philosophy
- **Course Pages** – Training programs, certifications, learning pathways, and curriculum details
- **Modern Branding** – Sophisticated dark theme with gold/bronze accent colour, monospace typography, custom cursor effects

---

## Structure

```
.
├── index.html                 # Homepage with hero & course offerings
├── pages/
│   ├── about.html            # About Khun Camp & mission
│   └── services.html         # Training programs, certifications, courses
├── images/                   # Hero images, diagrams, assets (WebP)
├── assets/                   # Logos, favicons, branding
├── mp3/                      # Audio content and demos
├── css/
│   ├── style.css            # Main stylesheet
│   └── animations.css       # Animation effects
├── js/
│   ├── main.js              # Core functionality
│   ├── scroll-animations.js # Scroll effects
│   └── cursor.js            # Custom cursor logic
├── fonts/                   # Local font files (Geist Mono, Lusitana, Lato)
├── robots.txt               # SEO robots config
├── sitemap.xml              # XML sitemap
└── README.md                # This file
```

---

## Design System

**Colour Palette:**
- Background: `#0F1215` (dark navy)
- Surface: `#14181E`
- Text: `#EEF2F9` (off-white)
- Accent: `#C8A86B` (gold/bronze) with hover states
- Accent Light: `#E8C887`
- Muted Text: `#999EA6`
- Borders: `rgba(200,168,107,0.15)` (accent with transparency)
- Glow Effects: `rgba(200,168,107,0.25)`

**Typography:**
- Primary Font: Geist Mono (monospace, futuristic)
- Serif Accent: Lusitana (elegant headers)
- Secondary: Lato (fallback)

**Interactive Elements:**
- Custom cursor (gold circle on hover)
- Smooth scroll animations
- Hover lift effects on cards and links
- Accent colour highlights

**Spacing & Layout:**
- Max-width container: 1200px
- Responsive grid layouts (mobile-first)
- Generous white space between sections (24-40px)
- Section separator patterns

---

## Development

### Local Development

No build process required – this is a static HTML site.

1. Open `index.html` in your browser to preview
2. Edit `.html` files directly in Claude Code or your preferred editor
3. Use live server for development:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx http-server

   # Claude Code built-in preview
   # Open index.html and use Claude Code's preview feature
   ```

### File Naming Standards

- **Images:** Lowercase, hyphenated (e.g., `khun-shawn-hero.webp`, `ai-systems-diagram.webp`)
- **Pages:** Lowercase, single-word slugs (e.g., `about.html`, `services.html`)
- **Audio:** Descriptive names (e.g., `creator-revenue-intro.mp3`)
- **Alt text:** Descriptive and meaningful for accessibility and SEO

### Image Optimization

All images must be:
- **WebP format only** (no PNG/JPG fallbacks)
- Compressed for web (70-85% quality)
- Named descriptively (e.g., `khun-shawn-at-desk.webp`)
- Include proper alt text with keywords
- 1600px+ wide for hero images, 800-1200px for content images

**Tools:**
- Online: [Convertio](https://convertio.co), [Tinypng.com](https://tinypng.com)
- CLI: `cwebp` or ImageMagick
- Desktop: Photoshop, GIMP, XnConvert

---

## Deployment

### Deployed to Cloudflare Pages

This site is automatically deployed via GitHub → Cloudflare Pages pipeline.

**Deployment Flow:**
1. Make changes locally in Claude Code
2. Commit and push to GitHub: `git push origin main`
3. Cloudflare automatically detects the push
4. Build runs (< 1 minute)
5. Changes live at khun-shawn.com

**No manual steps required** – Cloudflare handles everything automatically.

**Pre-deployment Checklist:**
- [ ] All images are WebP format
- [ ] Alt text on all images
- [ ] Internal links tested
- [ ] Mobile responsive (test at 375px, 768px, 1200px)
- [ ] Lighthouse score 95+ on all metrics

---

## SEO & Metadata

- **Sitemap:** `sitemap.xml` (auto-indexed by search engines)
- **Robots:** `robots.txt` (allows all crawlers)
- **Meta tags:** Unique titles and descriptions per page
- **Schema markup:** Person schema with job title, social profiles
- **Open Graph:** Social sharing metadata for previews
- **Target keywords:** AI strategy, creator revenue, content systems, digital transformation

---

## Accessibility

- **WCAG 2.2 AA** compliant minimum
- **Semantic HTML5** structure
- **Descriptive alt text** for all images (includes keywords naturally)
- **Keyboard navigation** fully supported
- **Colour contrast:** 4.5:1 ratio for text (meets WCAG AAA)
- **Focus indicators:** Visible on all interactive elements
- **Screen reader friendly:** All content accessible

---

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Contact & Inquiries

**Khun Camp Team**

- 📧 Email: [contact@khun-camp.com](mailto:contact@khun-camp.com)
- 📍 Location: Bangkok, Thailand (global audience)
- 🎬 YouTube: [@KhunCamp](https://www.youtube.com/@KhunCamp)
- 📸 Instagram: [@khuncamp](https://www.instagram.com/khuncamp/)
- 👤 Facebook: [@khuncamp](https://www.facebook.com/khuncamp/)
- 📅 Course Consultations: [Calendly](https://calendly.com/khun-camp/)

---

## License

© 2026 Khun Camp. All rights reserved.

This website and its contents are the exclusive property of Khun Camp. Unauthorised reproduction or distribution is prohibited.

---

## Credits

**Built with:** Static HTML, CSS3, JavaScript
**Design System:** Modern dark theme with monospace typography
**Deployment:** Cloudflare Pages (auto-deploy from GitHub)
**Typography:** Geist Mono, Lusitana, Lato
**Last Updated:** March 28, 2026

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-03-28 | Initial launch with homepage, services, about pages, and modern AI systems branding |

---

**Questions?** Get in touch via [email](mailto:contact@khun-camp.com) or visit social channels (YouTube, Instagram, Facebook).
