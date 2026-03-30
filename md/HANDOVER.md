# Khun Camp – Website Handover & Maintenance Guide

**Project:** Khun Camp Educational Platform Website
**URL:** khun-camp.com
**For:** Khun Camp Team
**Last Updated:** March 28, 2026

***

## Overview

This guide explains how to update, maintain, and manage your educational platform and training courses website using:

- A **local project folder** on your computer
- **Claude Code** for editing files and managing Git
- **Git + GitHub** for version control
- **Cloudflare Pages** for automatic deployment

You do not need to log into a hosting panel or upload files manually. Most work happens on your computer in one folder.

***

## 1. How the system is set up

### Main components

1. **Local project folder**
   - Lives on your computer
   - Contains:
     - `index.html`, `/pages`, `/images`, `/css`, `/js`, `/fonts`, `/logos`
     - Configuration files for deployment

2. **Claude Code**
   - Your local code editor and AI assistant
   - Used to open and edit the project folder
   - Handles Git commits and pushes to GitHub
   - Can help with content updates and technical questions

3. **GitHub repository**
   - Stores a copy of the project in the cloud
   - Keeps full history of changes
   - Triggers website updates when you push new commits

4. **Cloudflare Pages**
   - Watches the GitHub repo
   - Automatically rebuilds and publishes the website when new commits arrive

5. **Domain (khun-camp.com)**
   - Points to Cloudflare so visitors see the latest version

### Update flow (high level)

1. Edit files **locally** with Claude Code
2. Prepare and optimize images (WebP format)
3. Copy processed images into `/images`
4. Commit and push changes from Claude Code to GitHub
5. Cloudflare automatically deploys the updated site

***

## 2. Project folder structure (local)

On your computer you will see something like:

```text
/khun-camp
  index.html
  /pages
  /images
  /assets
  /css
  /js
  /fonts
  /mp3                (audio/video content)
  .git                (hidden Git folder)
  .gitignore          (Git configuration)
```

### Files you will edit often

- `index.html` – Home page with hero, value propositions, key offerings
- `pages/about.html` – About Khun Camp, mission, philosophy
- `pages/services.html` – Courses, training programs, learning pathways
- Text and copy updates
- Content updates for creator systems and AI topics

### Files you might touch occasionally

- `/images` – Website images (WebP format)
- Contact information
- Social links

### Files to leave to a developer

- `/css/` – Design system and styling
- `/js/` – Scripts and interactivity
- `sitemap.xml` and `robots.txt` – SEO configuration
- Build and deployment configuration

***

## 3. Opening the project in Claude Code

1. Open **Claude Code** on your computer.
2. Choose **Open Folder** and select the `khun-camp` folder.
3. You should see:
   - `index.html` and all folders (`pages`, `images`, `assets`, `css`, `js`, etc.) in the sidebar
   - A main editor area for editing files
   - Git controls for committing and pushing changes

From now on you will make all content changes inside Claude Code, then commit and push from there.

***

## 4. Updating text content

### General rule

Only change the text between the tags, not the tags themselves.

Example:

```html
<p>Old text here.</p>
```

Change to:

```html
<p>New text here.</p>
```

Do not remove `<p>` or `</p>`.

### Step-by-step example: update a service description

1. In Claude Code, open `pages/services.html`.
2. Use the **Find** function (Ctrl+F) to search for the service name you want to update.
3. Edit the text description directly.
4. Save the file (Ctrl+S).

You have edited it locally; later you will commit and push (see deployment section).

### Common edits

**Change a heading**

```html
<h2>Old Heading</h2>
```

to

```html
<h2>New Heading</h2>
```

**Change a paragraph**

```html
<p>Old paragraph text.</p>
```

to

```html
<p>New paragraph text.</p>
```

**Change a link or CTA button**

```html
<a href="pages/services.html">Old Button</a>
```

to

```html
<a href="pages/services.html">New Button</a>
```

***

## 5. Image workflow and optimization

Images on the site should be in WebP format for fast loading.

### Step 1 – Prepare new images

1. Export or take your images at good quality.
2. Consider the size:
   - Hero/featured images: ~1200–1600px wide
   - Inline content: ~800–1000px wide
   - Small icons/logos: ~200–400px

### Step 2 – Optimize to WebP

Use any tool to convert images to WebP format (or ask a developer):

- Online converters: [Convertio](https://convertio.co) or similar
- Desktop tools: Photoshop, GIMP, XnConvert
- Command line: ImageMagick or cwebp

### Step 3 – Name descriptively

Name files clearly and descriptively. Your current images show good examples:

- ✅ `khun-camp-hero.webp` – Hero section image
- ✅ `khun-camp-logo-banner.webp` – Logo/branding banner
- ✅ `khun-camp-classroom.webp` – Classroom/course image
- ❌ `2a1adc_ae30a94503b74984b4e06fbe2806360d~mv2.webp` – Auto-generated filename
- ❌ `Screenshot 2026-03-23 16.06.37.webp` – Generic screenshot name

### Step 4 – Place in `/images`

Copy the processed WebP images into:

```text
/khun-camp/images
```

### Step 5 – Use in HTML

From `index.html` (root):

```html
<img src="images/khun-camp-classroom.webp" alt="Khun Camp educational classroom and training environment">
```

From any file inside `/pages`:

```html
<img src="../images/khun-camp-logo-banner.webp" alt="Khun Camp educational platform branding logo">
```

Always:

- Use the WebP filenames (not .jpg or .png)
- Add descriptive `alt` text with relevant keywords
- Match your existing filename patterns

***

## 6. Updating services and offerings

### Service descriptions

1. Open `pages/services.html` in Claude Code.
2. Search for the service name or description.
3. Edit the text directly.
4. Save the file.

Key services to keep updated:
- **Training Programs** – Course descriptions, learning objectives, instructor profiles
- **Workshops** – Practical training sessions, hands-on learning, group programs
- **Certifications** – Certification details, prerequisites, completion requirements

If service details appear on `index.html` as well, update there too.

### Adding or removing services

If you want to add a completely new service:

- Ask a developer, as this requires HTML structure changes

***

## 7. Updating contact info and social links

### Email and phone

1. Use search within Claude Code to find your current email or contact methods.
2. Update each occurrence across pages:
   - `index.html` (contact section)
   - `pages/` (any page with contact info)
   - Footer on all pages
3. Save the files.

### Calendly and booking links

Look for lines like:

```html
<a href="https://calendly.com/khun-camp/" target="_blank">Book a Consultation</a>
```

To update:

- Replace only the Calendly URL if you change your booking link.
- Leave the rest of the link structure as is.

### Social media links

Look for lines like:

```html
<a href="https://www.youtube.com/@KhunCamp" target="_blank">YouTube</a>
<a href="https://www.instagram.com/khuncamp/" target="_blank">Instagram</a>
<a href="https://www.facebook.com/khuncamp/" target="_blank">Facebook</a>
```

To update:

- Replace only the URL inside `href="..."`.
- Leave the rest of the link structure as is.

***

## 8. Updating testimonials and case studies

### Adding a new testimonial

1. Open `index.html`.
2. Search for the testimonial section (look for testimonial blocks).
3. Find and follow the existing format for adding new testimonials.
4. Include details like:
   - Client name
   - What they achieved (e.g., "Built AI workflow saving 10 hours/week")
   - Their business or role
   - Impact or outcome
5. Save the file.

***

## 9. SEO and meta information

### Page titles and descriptions

At the top of each HTML file, inside `<head>`, you will see:

```html
<title>Page Title – Khun Shawn</title>
<meta name="description" content="Short description here">
```

You can:

- Adjust titles to accurately describe each page
- Adjust descriptions to be clear and compelling
- Include keywords like "AI strategy", "content systems", "creator revenue", "digital transformation"

Keep titles under about 60 characters and descriptions under about 155.

### Alt text for images

Every image should have descriptive alt text:

```html
<img src="..." alt="Clear description of what the image shows">
```

Good alt text:

- Describes what the image shows
- Includes relevant keywords naturally (e.g., "Khun Shawn AI systems architect", "creator revenue strategy")

When you add new images, always add alt text at the same time.

***

## 10. Deployment – making changes live

Once you have finished local changes and checked that pages look correct:

### Step 1 – Check locally

1. In Claude Code, use any available preview or open `index.html` directly in a browser to confirm:
   - Text is correct
   - New images appear
   - Links work
   - Layout looks good on mobile and desktop
   - Videos or audio content (if applicable) play correctly

### Step 2 – Commit in Claude Code

Inside Claude Code:

1. Open the **Source Control / Git** view (left sidebar).
2. Review the list of changed files.
3. Enter a clear commit message, for example:
   - `Update AI strategy service description`
   - `Add new case study or project outcome`
   - `Refresh homepage messaging`
   - `Update content systems framework details`
4. Click **Commit**.

### Step 3 – Push to GitHub

Still in Claude Code:

1. Use the **Push** command to send your commit to GitHub.
2. Wait until it completes with no errors.

### Step 4 – Cloudflare deployment

After the push:

1. Cloudflare detects the new commit and starts a new build.
2. Within 1–2 minutes the change is visible on `https://khun-camp.com`.
3. Hard refresh your browser if you do not see it immediately (Ctrl+Shift+R or Cmd+Shift+R).

If something looks wrong, you can either:

- Fix locally and push another commit
- Or ask a developer to revert to a previous commit if needed

***

## 11. Troubleshooting common issues

### Changes not showing on the live site

- Hard refresh the browser (Ctrl+Shift+R on Windows / Cmd+Shift+R on Mac).
- Wait another minute (Cloudflare CDN needs time to update).
- Confirm that:
  - You saved the file locally (Ctrl+S)
  - You committed the changes
  - You pushed to GitHub successfully

### Image not appearing

Check:

- File is in `/images` folder
- Filename in HTML matches exactly (case-sensitive)
- File format is WebP
- Path is correct:
  - `images/...` from `index.html`
  - `../images/...` from `/pages`

### Layout looks broken or text is missing

- You might have accidentally removed a closing tag (`</div>`, `</section>`, `</p>`, etc.).
- Use Codex's Find & Replace to check for matching opening/closing tags.
- If unsure, revert to the previous working commit or ask a developer.

### Links not working

- Check that the path is correct (see Quick Reference section).
- Ensure the target file exists.
- Confirm there are no typos in filenames or URLs.

***

## 12. Maintenance checklist

### Weekly

- Check that your Calendly booking link works.
- Verify contact information is accurate.

### Monthly

- Review and update service descriptions if needed.
- Check site appearance on mobile and desktop.
- Click through navigation and links to ensure none are broken.

### Quarterly

- Review all copy for accuracy and relevance.
- Update experience or testimonials if appropriate.
- Check for any broken images or missing alt text.

### Yearly

- Larger content refresh: homepage value propositions, service offerings, background.
- Update images if needed to keep the site feeling current.
- Review SEO titles and descriptions for all pages.

***

## 13. When to ask for developer help

Ask for help when you want to:

- Add a completely new page or change the main navigation
- Adjust the design system (colours, fonts, layout, animations)
- Integrate new forms, booking systems, or payment tools
- Debug persistent errors in deployment
- Troubleshoot issues you cannot resolve locally
- Add new page sections with custom layouts

You can usually handle:

- Text and copy edits
- Service descriptions
- Testimonials and quotes
- Contact information and social link updates
- Adding new images (once they are in WebP format)
- SEO titles and descriptions
- Updating existing sections with new content

***

## 14. Quick reference

### File paths

- From `index.html` to a page in `/pages`: `href="pages/filename.html"`
- From `/pages` back to home: `href="../index.html"`
- From `/pages` to another page in `/pages`: `href="filename.html"`
- Images:
  - From `index.html`: `src="images/filename.webp"`
  - From `/pages`: `src="../images/filename.webp"`
- Audio/video files:
  - From `index.html`: `src="mp3/filename.mp3"`
  - From `/pages`: `src="../mp3/filename.mp3"`

### Essential HTML tags

- `<h1>`, `<h2>`, `<h3>` – Headings
- `<p>` – Paragraph
- `<a href="...">` – Link
- `<img src="..." alt="...">` – Image
- `<section>`, `<div>` – Layout containers
- `<footer>` – Footer
- `<ul>`, `<li>` – Lists

### Git basics in Codex

- **Commit**: Save your changes locally with a message
- **Push**: Send commits to GitHub
- **Pull**: Get latest changes from GitHub
- **Status**: See which files have changed

***

## 15. Getting help

If you encounter issues or want to make changes beyond this guide:

- **For technical questions**: Ask Claude Code or contact the developer
- **For design changes or new layouts**: Reach out to a developer
- **For content strategy questions**: Review your strategy docs or consult with your team
- **For urgent issues**: Check the troubleshooting section first, then reach out

Remember: It is always better to ask than to accidentally break something. The Git history keeps a backup of all previous versions, so minor mistakes can be fixed.

***

**Happy maintaining your educational platform website!**
