# Deployment Guide — Khun Camp Website

Static HTML/CSS/JS site deployment instructions.

---

## Pre-Deployment Checklist

- [ ] All internal links test without 404s
- [ ] `#audit` CTA links point to real booking system
- [ ] `#apply` links point to real application form
- [ ] Social sharing image (og:image) is valid URL
- [ ] Mobile responsive tested (320px, 768px, 1024px widths)
- [ ] All animations smooth on target devices
- [ ] SEO meta tags match final domain
- [ ] Analytics tracking configured (if needed)
- [ ] Email signup/contact form tested (if applicable)

---

## Deploy to Vercel (Recommended)

**Best for:** Simplicity, automatic deployments from git, instant SSL

### Option 1: CLI

```bash
npm i -g vercel
cd "Team Inbox/KhunCamp"
vercel deploy --prod
```

### Option 2: GitHub Connected

1. Push to GitHub: `git push origin main`
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Vercel auto-detects it's a static site
6. Click "Deploy"

**Result:** Automatic deploys on every push to main branch.

---

## Deploy to Netlify

**Best for:** Drag-and-drop simplicity

### Option 1: Drag & Drop

1. Go to [netlify.com](https://netlify.com)
2. Drag the `Team Inbox/KhunCamp` folder onto the deploy area
3. Netlify generates a live URL

### Option 2: GitHub Connected

1. Push to GitHub
2. Connect Netlify to your repo
3. Set build settings:
   - **Build command:** (leave empty)
   - **Publish directory:** `/` (root)
4. Deploy

---

## Deploy to GitHub Pages

**Best for:** Free hosting, `.github.io` domain

```bash
# Create gh-pages branch
git checkout --orphan gh-pages
git rm -rf .
git add index.html css js images robots.txt sitemap.xml
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# Configure repo settings:
# Settings → Pages → Source: gh-pages branch → Save
```

**Result:** Live at `https://username.github.io/khuncamp`

---

## Deploy to Cloudflare Pages

**Best for:** Edge network performance, free tier generous limits

1. Push repo to GitHub
2. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
3. Pages → Create a project
4. Select GitHub repo
5. Build settings:
   - **Build command:** (leave empty)
   - **Build output directory:** `/` (root)
6. Deploy

**Result:** Automatic deployments on git push.

---

## Custom Domain Setup

After deploying to any platform:

### Update DNS

Point your domain's nameservers or A record to your hosting provider:

| Provider | DNS Target |
|----------|-----------|
| Vercel | `cname.vercel-dns.com` |
| Netlify | Your assigned Netlify domain |
| Cloudflare | Cloudflare nameservers |
| GitHub Pages | `<username>.github.io` |

### Update SEO Tags

In `index.html`, update:

```html
<meta property="og:url" content="https://your-domain.com/">
<link rel="canonical" href="https://your-domain.com/">
```

In `sitemap.xml`:

```xml
<loc>https://your-domain.com/</loc>
```

### SSL/TLS

- **Vercel, Netlify, Cloudflare Pages:** Automatic (free)
- **GitHub Pages:** Automatic (free)

---

## Environment Variables (If Needed)

If you add a booking system with API keys:

```bash
# Create .env.local (not committed)
NEXT_PUBLIC_BOOKING_API=https://api.example.com
BOOKING_SECRET_KEY=sk_live_...
```

Reference in HTML as needed (frontend keys only in Next.js).

---

## Testing After Deploy

1. **Links** — Click every CTA, nav link, footer link
2. **Mobile** — View on iPhone/Android, test touch interactions
3. **Animations** — Scroll through full page, check preloader, Three.js particles
4. **Performance** — Run [PageSpeed Insights](https://pagespeed.web.dev)
5. **SEO** — Check [Google Search Console](https://search.google.com/search-console)
6. **Analytics** — Verify tracking pixel fires (if configured)

---

## Monitoring

### Weekly

- Check error logs (platform dashboard)
- Monitor bounce rate (if analytics enabled)

### Monthly

- Run performance audit
- Test all CTAs still work
- Check for broken images/videos

### Quarterly

- Full accessibility audit
- SEO keyword performance
- User analytics trends

---

## Rollback

If issues post-deploy:

**Vercel/Netlify:** Click "Deployments" → select previous version → "Rollback"

**GitHub Pages:** Revert commit, push to `gh-pages` branch

**Cloudflare:** Rollback via deployment history

---

## Support

- **Build fails?** Check your platform's build logs
- **Domain not working?** Verify DNS propagation (propagation.com)
- **Performance issues?** Use [WebPageTest](https://webpagetest.org) to diagnose
- **SEO issues?** Check [Google Search Console](https://search.google.com/search-console)

---

**Latest Deploy:** 2026-03-28 (Ready for production)
