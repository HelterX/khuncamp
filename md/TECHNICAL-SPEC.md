# Khun Camp – Technical Specification

**Project:** Khun Camp Educational Platform Website
**URL:** khun-camp.com
**Type:** Static HTML website with media assets
**Version:** 1.0
**Last Updated:** March 28, 2026

---

## 1. Technology Stack

### Core Technologies

- **HTML5** – Semantic markup, pure HTML structure
- **CSS3** – Single stylesheet architecture, no preprocessors
- **JavaScript** – Minimal, optional enhancements only (smooth scroll, animations)
- **WebP** – All images in WebP format for performance

### Hosting & Deployment

- **Version Control:** GitHub repository
- **CDN/Hosting:** Cloudflare Pages
- **DNS:** Managed via Cloudflare
- **SSL/TLS:** Automatic via Cloudflare (Full SSL)

### Performance Targets

- **First Contentful Paint:** < 1.2s
- **Largest Contentful Paint:** < 2.0s
- **Time to Interactive:** < 3.0s
- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals:** All green (LCP, FID, CLS)

---

## 2. File Structure

```
/khun-camp
  /index.html              # Homepage (root)
  /pages
    /about.html            # About Khun Camp & mission
    /services.html         # Courses, training programs, certifications
  /images
    /*.webp                # All images in WebP format
  /assets
    /favicon.png           # Site favicon
    /*.webp                # Logo and branding assets
  /mp3
    /*.mp3                 # Audio content, recordings, demos
  /css
    /style.css             # Main stylesheet
    /animations.css        # Animation styles
  /js
    /main.js               # Core JavaScript
    /scroll-animations.js  # Scroll effects
    /cursor.js             # Custom cursor logic
  /fonts
    /*.woff2               # Local font files (Geist Mono, Lusitana, Lato)
  /md
    /HANDOVER.md           # Maintenance guide (this guide)
    /TECHNICAL-SPEC.md     # This document
    /README.md             # Project overview
  /sitemap.xml             # SEO sitemap
  /robots.txt              # Crawler permissions
  .gitignore               # Git configuration
```

---

## 3. URL Structure & Routing

### URLs

- Home: `/` or `/index.html`
- About: `/pages/about.html`
- Services & Offerings: `/pages/services.html`

**Future expansion URLs (if added):**
- Case Studies/Portfolio: `/pages/portfolio.html`
- Content Systems Course: `/pages/content-systems.html`
- AI Strategy Guide: `/pages/ai-strategy.html`

### Relative Path Rules

**From index.html (root):**
- Internal pages: `href="pages/services.html"`
- Images: `src="images/khun-camp-hero.webp"`
- CSS: `href="css/style.css"`
- Fonts: `href="fonts/geist-mono.woff2"`
- Audio: `src="mp3/demo-audio.mp3"`

**From /pages/*.html (inner pages):**
- Home: `href="../index.html"`
- Other pages: `href="services.html"` (same folder)
- Images: `src="../images/khun-camp-hero.webp"`
- CSS: `href="../css/style.css"`
- Audio: `src="../mp3/demo-audio.mp3"`

---

## 4. Design System

### Visual Theme

- **Style:** Modern, sophisticated creator/systems brand with tech edge
- **Typography:** Monospace primary (Geist Mono) for futuristic feel, serif for accents (Lusitana)
- **Color Palette:**
  - Background: #0F1215 (dark navy)
  - Surface: #14181E
  - Surface2: #1C2028
  - Text: #EEF2F9 (off-white)
  - Muted: #999EA6 (grey)
  - Accent: #C8A86B (gold)
  - Accent2: #E8C887 (light gold)
  - Borders: rgba(200,168,107,0.15) (gold with transparency)
- **Spacing:** Generous white space, 24-40px minimum between sections
- **Visual Effects:** Glow effects on accent elements, custom cursor, smooth animations

### Layout Patterns

- **Header:** Sticky navigation with logo, responsive menu
- **Hero Section:** Full-width, high-impact introduction with imagery
- **Sections:** Full-width containers, max-width 1200px centered, clear section breaks
- **Cards:** Minimal borders, accent color accents, hover effects with subtle lift
- **Images:** 16:9 or custom ratios, responsive sizing, WebP format only
- **Footer:** Dark background (#1a1a1a), multi-column layout (desktop), stacked (mobile)
- **Special Elements:** Custom cursor (circles with accent color), scroll progress indicator

### CSS Architecture

- Single main file: `/css/style.css`
- Optional animations file: `/css/animations.css`
- No CSS frameworks (no Bootstrap, Tailwind, etc.)
- Mobile-first responsive design
- Breakpoints: 480px, 768px, 1024px+

### Component Standards

**Header/Navigation:**
- Logo area with Khun Shawn branding
- Nav links: Responsive, stacked on mobile
- CTA buttons: Accent color with hover effects
- Sticky on scroll with optional background fade

**Hero Section:**
- Full-width image background with text overlay
- Call-to-action buttons prominently featured
- Responsive typography with clear hierarchy
- Optional video background support

**Service/Offering Cards:**
- Title + description format
- Accent color accents or borders
- Hover effects (lift, color shift)
- Grid layout: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)

**Content Sections:**
- Mix of text and imagery
- Testimonials with client names/outcomes
- Feature highlights with icons
- Call-to-action sections

**Audio/Media Components:**
- Playable audio files (mp3)
- Custom player styling matching brand
- Responsive sizing

**Footer:**
- Background: Dark (#0F1215 or #1a1a1a)
- Multi-column layout with links and info
- Social links to YouTube, Instagram, Facebook
- Copyright and contact information

---

## 5. SEO Implementation

### On-Page SEO

**Required on every page:**
- Unique `<title>` (50-60 characters)
- Unique `<meta name="description">` (140-155 characters)
- `<meta charset="UTF-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Canonical URL: `<link rel="canonical" href="https://khun-shawn.com/">`

**Content Requirements:**
- One H1 per page (unique, descriptive)
- Hierarchical headings (H2, H3, no skipping levels)
- Alt text on every image (descriptive + natural keywords)
- Internal linking between related pages
- External links: `target="_blank" rel="noopener"`

### Target Keywords (Primary)

- AI strategy consultant
- Creator revenue systems
- Content systems framework
- AI workflow automation
- Creator monetization strategy
- Personal brand building
- Digital systems architecture
- AI implementation for creators
- Content creator tools
- Business automation with AI

### Schema Markup

**Organization schema on every page:**
```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Khun Camp",
  "url": "https://khun-camp.com",
  "image": "https://khun-camp.com/images/khun-camp-hero.webp",
  "sameAs": [
    "https://www.youtube.com/@KhunCamp",
    "https://www.instagram.com/khuncamp/",
    "https://www.facebook.com/khuncamp/"
  ],
  "description": "Educational platform offering professional training courses and certifications"
}
```

### Technical SEO

**sitemap.xml structure:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://khun-camp.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://khun-camp.com/pages/services.html</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://khun-camp.com/pages/about.html</loc>
    <priority>0.8</priority>
  </url>
  <!-- Additional pages as added -->
</urlset>
```

**robots.txt:**
```
User-agent: *
Allow: /
Sitemap: https://khun-camp.com/sitemap.xml
```

---

## 6. Performance Optimization

### Images

- **Format:** WebP only
- **Compression:** 70-85% quality
- **Naming:** Descriptive, lowercase, hyphens (e.g., `khun-camp-hero.webp`, `course-diagram.webp`)
- **Sizes:**
  - Hero images: ~1600px wide minimum
  - Content images: 800-1200px wide
  - Logo/icons: 200-400px wide
- **Lazy loading:** `loading="lazy"` on below-fold images
- **Alt text:** Always present, descriptive, includes keywords naturally (AI systems, creator revenue, etc.)

### CSS

- Single file, minified for production
- No unused rules
- CSS variables for theming (already implemented)
- Mobile-first approach

### JavaScript

- Minimal or vanilla only
- Defer loading: `<script src="..." defer></script>`
- No external libraries (jQuery, etc.)
- Focus on progressive enhancement

### Caching

- Cloudflare automatic caching (all static assets)
- Cache-Control: 1 year for versioned assets
- HTML cache: 1 hour or on-demand purge
- Browser cache: Leverage Cloudflare's defaults

---

## 7. Forms & Integrations

### Contact Forms

**Current implementation:**
- Contact form (if implemented)
- Direct email links
- Calendly booking for strategy calls

**Contact Information Points:**
- Email: contact@khun-camp.com (or preferred contact email)
- Booking: Calendly link for course consultations
- Social: YouTube, Instagram, Facebook direct messages

### External Integrations

- **Calendly:** Booking link for strategy sessions
- **Email:** Contact via form or direct email
- **Social:** YouTube (@KhunCamp), Instagram (@khuncamp), Facebook (@khuncamp)
- **Analytics:** Google Analytics 4 (GA4) for traffic tracking
- **Chat Widget:** Optional chat integration for visitor engagement
- **Newsletter:** Optional email list integration for content updates

### Email Processing via Cloudflare Workers

**Architecture:**
- Form submissions sent to Cloudflare Workers endpoint
- Workers validates and processes the form data
- Email sent to Gmail SMTP server
- Response returned to client
- Logs stored in Cloudflare (optional)

**Form Submission Flow:**
1. User fills contact form on website
2. JavaScript submits to Cloudflare Workers endpoint: `https://khun-shawn.com/api/contact`
3. Worker validates required fields
4. Worker constructs email and sends via Gmail SMTP
5. Response returned (success/error) to user

**Required Gmail Configuration:**

**Step 1: Enable 2-Step Verification**
- Go to myaccount.google.com
- Select "Security" in left menu
- Under "How you sign in to Google," enable "2-Step Verification"
- Complete verification steps

**Step 2: Create App Password**
- Go to myaccount.google.com/apppasswords
- Select "Mail" and "Windows Computer" (or relevant)
- Google generates 16-character password
- Copy this password (used in Workers secret)

**Step 3: Gmail "Send as" Configuration**
- Go to gmail.com settings (gear icon)
- Select "See all settings" → "Accounts and Import" tab
- Under "Send mail as:" click "Add another email address"
- Enter:
  - **Name:** Khun Camp
  - **Email:** [contact email address]
  - **Reply-to:** [contact email address] (optional)
  - Check "Treat as an alias"
- Click "Next Step"
- Select "Send through Gmail's SMTP server"
- Gmail generates verification link in inbox
- Click verification link to confirm

**SMTP Server Details:**
- **SMTP Server:** smtp.gmail.com
- **Port:** 587 (TLS)
- **Username:** [Gmail account]
- **Password:** [App Password from Step 2, 16 characters]
- **From Email:** [contact email address]
- **Sender Name:** Khun Camp

**Cloudflare Workers Configuration:**

**Environment Variables (set in Cloudflare Pages settings):**
```
GMAIL_SMTP_SERVER=smtp.gmail.com
GMAIL_SMTP_PORT=587
GMAIL_USERNAME=[Gmail username]
GMAIL_PASSWORD=[16-char-app-password]
GMAIL_FROM_EMAIL=[contact email address]
GMAIL_FROM_NAME=Khun Camp
CONTACT_TO_EMAIL=[contact email address]
```

**Worker Script Location:**
- File: `/functions/contact.js` or `_worker.js` (Cloudflare Pages Function)
- Handles POST requests from `/api/contact`
- Validates form data
- Connects to Gmail SMTP
- Sends email
- Returns JSON response

**Form Fields Processed:**
```javascript
{
  name: String (required),
  email: String (required, valid email),
  phone: String (optional),
  company: String (optional),
  message: String (required, min 20 chars),
  subject: String (optional, defaults to "New Consultation Inquiry"),
  timestamp: Date (auto-generated)
}
```

**Email Template (sent to Khun Shawn):**
```
Subject: New Consultation Inquiry – [Name]

From: [Name] <[Email]>
Phone: [Phone]
Company: [Company]

Message:
[Message]

---
Submitted: [Timestamp]
```

**Response to User (success):**
```json
{
  "status": "success",
  "message": "Your message has been sent. I'll get back to you within 24 hours.",
  "timestamp": "2026-03-27T10:30:00Z"
}
```

**Response to User (error):**
```json
{
  "status": "error",
  "message": "Failed to send message. Please try again or email directly.",
  "timestamp": "2026-03-27T10:30:00Z"
}
```

**Security Measures:**
- Rate limiting: 5 requests per IP per hour
- CORS enabled for domain only
- Input validation and sanitization
- No sensitive data logged
- HTTPS only (enforced by Cloudflare)
- Honeypot field (hidden spam trap)

**Testing:**
- Test form locally before deployment
- Monitor Cloudflare Workers logs for errors
- Verify emails arrive in your Gmail inbox
- Check spam folder first time
- Mark as "not spam" in Gmail if needed

### Links & CTAs

- Primary CTA: "Explore Our Courses" or "Enroll Now" (links to course page or Calendly)
- Secondary CTA: "Learn More" or "View Curriculum"
- Email CTA: Direct email link or contact form
- Social links: YouTube, Instagram, Facebook (all in new tabs with noopener)

---

## 7.5 Email Processing System Setup Guide

### Quick Setup Checklist

- [ ] Gmail account created and accessible
- [ ] 2-Step Verification enabled on Gmail
- [ ] App Password generated for SMTP access
- [ ] Gmail "Send as" alias configured (if using custom domain)
- [ ] Cloudflare Workers function deployed
- [ ] Environment variables set in Cloudflare
- [ ] Form HTML includes proper input fields
- [ ] CORS headers configured in Worker
- [ ] Rate limiting enabled
- [ ] Test form submission completed
- [ ] Verify email received in Gmail inbox
- [ ] Spam folder checked and message marked as "not spam"

### Detailed Gmail Setup (Step-by-Step)

**1. Enable 2-Step Verification:**
```
1. Go to myaccount.google.com
2. Click "Security" in left sidebar
3. Scroll to "How you sign in to Google"
4. Click "2-Step Verification"
5. Click "Get Started"
6. Enter password when prompted
7. Add recovery phone number
8. Verify code sent to phone
9. Save backup codes in safe location
10. Click "Turn On"
```

**2. Generate App Password:**
```
1. Go to myaccount.google.com/apppasswords
2. Sign in if prompted
3. Select "Mail" in dropdown
4. Select "Windows Computer" (or device type)
5. Click "Generate"
6. Google displays 16-character password (no spaces)
7. Copy and save password immediately
8. Password example: abcd efgh ijkl mnop (without spaces: abcdefghijklmnop)
9. Use this in GMAIL_PASSWORD environment variable
```

**3. Configure Gmail Send-As Alias:**
```
1. Go to gmail.com
2. Click gear icon (Settings) → "See all settings"
3. Go to "Accounts and Import" tab
4. Under "Send mail as:" click "Add another email address"
5. Fill in:
   - Name: Khun Shawn
   - Email address: shayneinthailan@gmail.com (or custom domain)
   - Click "Treat as an alias" checkbox
   - Leave "Reply-to" blank (optional)
6. Click "Next Step"
7. Select "Send through Gmail's SMTP servers"
8. Username auto-fills: shayneinthailan@gmail.com
9. Click "Add account"
10. Gmail sends verification email to the alias address
11. Open that email and click verification link
12. Return to Settings and confirm alias is now active
13. Set as default if desired
```

**4. Cloudflare Workers Environment Variables:**

In Cloudflare Dashboard:
```
1. Go to Pages > khun-camp > Settings
2. Navigate to Environment Variables
3. Add Production variables:

Name: GMAIL_SMTP_SERVER
Value: smtp.gmail.com

Name: GMAIL_SMTP_PORT
Value: 587

Name: GMAIL_USERNAME
Value: [Gmail account username]

Name: GMAIL_PASSWORD
Value: [16-character app password, no spaces]

Name: GMAIL_FROM_EMAIL
Value: [contact email address]

Name: GMAIL_FROM_NAME
Value: Khun Camp

Name: CONTACT_TO_EMAIL
Value: [contact email address]

Name: RATE_LIMIT_REQUESTS
Value: 5

Name: RATE_LIMIT_WINDOW
Value: 3600
```

**5. Deploy Worker Function:**

Create `/functions/contact.js`:
```javascript
// Simplified email sending via Gmail SMTP
export async function onRequest(context) {
  const { request } = context;

  // Only accept POST
  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, phone, company, message, subject } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400 }
      );
    }

    // Construct email body
    const emailBody = `
From: ${name} <${email}>
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}

Message:
${message}

---
Submitted: ${new Date().toISOString()}
    `.trim();

    // Send via Gmail SMTP (using SendGrid or similar service as fallback)
    // This is a simplified example - use a proper email library

    return new Response(
      JSON.stringify({
        status: 'success',
        message: 'Your message has been sent. I\'ll get back to you within 24 hours.'
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://khun-camp.com'
        }
      }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({
        status: 'error',
        message: 'Failed to send message. Please try again or email directly.'
      }),
      { status: 500 }
    );
  }
}
```

**Note:** For production, use a proper email library like `nodemailer` or `resend` instead of raw SMTP.

### Alternative: Use SendGrid or Resend (Recommended)

For simplicity, consider using:

**Option A: SendGrid**
- Free tier: 100 emails/day
- Setup: Create API key, use in Worker
- Simpler than raw SMTP

**Option B: Resend**
- Free tier: 100 emails/day
- Email built for developers
- Easy integration with Workers

**Option C: Mailgun**
- Free tier: 300 emails/day
- Reliable delivery
- Good for transactional email

All three are more reliable than Gmail SMTP for bulk/automated sending.

---

## 8. Browser & Device Support

### Browsers (Desktop)

- Chrome 90+ (latest 2 versions)
- Firefox 88+ (latest 2 versions)
- Safari 14+ (latest 2 versions)
- Edge 90+ (latest 2 versions)

### Browsers (Mobile)

- Safari iOS 14+
- Chrome Android 90+
- Samsung Internet 14+

### Devices

- Desktop: 1920x1080 down to 1280x720
- Tablet: 1024x768, 768x1024
- Mobile: 375x667 up to 428x926

### Accessibility

- WCAG 2.1 Level AA minimum
- Keyboard navigation support
- Sufficient color contrast (4.5:1 for text)
- Screen reader friendly (semantic HTML)
- Focus indicators visible
- Semantic HTML5 structure

---

## 9. Content Guidelines

### Word Count Targets

- Home: 800-1,200 words
- Services: 1,000-1,500 words
- About: 800-1,200 words
- CV: 500-800 words
- Voice Over: 400-600 words
- Creative: 400-600 words

### Writing Style

- Professional yet approachable
- Short paragraphs (2-4 sentences)
- Active voice preferred
- No em dashes (use commas or periods)
- Natural keyword integration (no stuffing)
- Focus on benefits and outcomes
- Clear value propositions

### Image Requirements

- All images WebP format
- Descriptive filenames (e.g., `khun-shawn-hero.webp`, `ai-systems-diagram.webp`)
- Alt text always present
- Minimum 1200px wide for hero images
- 600-1000px wide for content images
- Aspect ratios: 1:1 for hero, 16:9 or 4:3 for content

---

## 10. Security & Privacy

### SSL/HTTPS

- Enforced via Cloudflare (Full SSL mode)
- HTTP redirects to HTTPS automatically
- HSTS header enabled
- Certificate auto-renewal

### Form Security

- No sensitive data stored in static files
- Form submissions via Calendly (third-party)
- Email handled via standard SMTP
- No CAPTCHA needed (low volume)

### Privacy Considerations

- No cookies (unless GA4 enabled)
- If using GA4: add privacy policy page
- External links: `rel="noopener"` on target="_blank"
- No tracking pixels or third-party scripts (besides GA4)

### Data Handling

- Contact information: Email only (no CRM stored)
- Phone: Display only (no collection)
- No user accounts or login system
- No data persistence

---

## 11. Deployment Workflow

### GitHub to Cloudflare Pages

1. Code changes pushed to `main` branch on GitHub
2. Cloudflare Pages webhook triggered automatically
3. Build process: None (static files served as-is)
4. Deploy to production (< 1 minute)
5. Cloudflare CDN distributes globally

### Branch Strategy

- **main** branch: Production (live site)
- Feature branches for major updates (optional)
- Pull requests for review before merge to main

### Pre-Deployment Checklist

- [ ] All images compressed and in WebP format
- [ ] Alt text on all images
- [ ] All internal links tested
- [ ] Meta titles and descriptions unique per page
- [ ] sitemap.xml updated with all pages
- [ ] Mobile responsive on all pages (test at 375px, 768px, 1200px)
- [ ] No console errors in browser dev tools
- [ ] Lighthouse score 90+ on all metrics
- [ ] Contact/booking links functional
- [ ] External links open in new tab

---

## 12. Maintenance Schedule

### Regular Updates

- **Content updates:** As needed (new services, experience, testimonials)
- **Security updates:** Monitor Cloudflare security advisories (monthly)
- **Performance checks:** Quarterly Lighthouse audit
- **Broken link checks:** Quarterly
- **Analytics review:** Monthly (traffic, popular pages, conversions)

### Backup Strategy

- Git repository is version control (full history)
- Cloudflare Pages keeps deployment history (30 days)
- Download static files monthly for local backup
- Image files: Archive in cloud storage

---

## 13. Known Limitations

- No dynamic content (all static HTML)
- No user accounts or login system
- Form submissions require third-party service (Calendly)
- No real-time availability calendar
- No blog/CMS (would require separate solution)
- No e-commerce or payment processing

---

## 14. Future Enhancements (Optional)

- Add blog section via static site generator (Hugo, Jekyll)
- Implement case studies or client testimonials carousel
- Add video portfolio (YouTube embeds)
- Integrate real-time booking calendar
- Add multi-language support (Spanish + English)
- Progressive Web App (PWA) features
- Advanced schema markup (LocalBusiness, etc.)
- Newsletter signup integration

---

## 15. File Size & Performance Budget

### Target Sizes (per page load)

- **HTML:** < 50 KB
- **CSS:** < 30 KB
- **JavaScript:** < 20 KB
- **Images:** < 500 KB combined per page
- **Fonts:** < 100 KB (WOFF2, subset)
- **Total:** < 700 KB per page

### Optimization Checklist

- [ ] Gzip/Brotli compression enabled
- [ ] Image compression verified (WebP 70-85% quality)
- [ ] CSS minified
- [ ] JavaScript minified (if used)
- [ ] Fonts subset to necessary characters only
- [ ] Lazy loading on images below fold

---

## 16. Contact & Support

**Primary Maintainer:** Khun Camp Team
**Repository:** GitHub (khun-camp/website or similar)
**Hosting Dashboard:** Cloudflare Pages
**Domain Registrar:** Cloudflare
**Email:** contact@khun-camp.com
**Calendly:** For booking course consultations

For technical issues, refer to the Handover Guide or contact Claude Code for assistance.

---

**Document Version:** 1.0
**Last Updated:** March 28, 2026
**Next Review:** June 2026
