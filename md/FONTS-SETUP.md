# Font Setup Guide – Fully Local Fonts

**Status:** Partially complete - Lusitana and Lato are fully local. Geist Mono needs to be added.

---

## Current Font Status

### ✅ Fully Local (no external dependencies)
- **Lusitana** (400, 700 weights) – Display/accent font
- **Lato** (400, 700 weights) – Fallback font

### ⏳ Needs Setup (currently missing)
- **Geist Mono** (300, 400, 500, 600, 700 weights) – Primary monospace font

---

## How to Add Geist Mono WOFF2 Files

### Option 1: Download from Vercel GitHub (Recommended)

1. **Go to the Geist GitHub repository:**
   ```
   https://github.com/vercel/geist-font/releases
   ```

2. **Download the latest release** (Geist Mono folder)

3. **Extract the WOFF2 files** you need:
   - `GeistMono-300.woff2`
   - `GeistMono-400.woff2`
   - `GeistMono-500.woff2`
   - `GeistMono-600.woff2`
   - `GeistMono-700.woff2`

4. **Place them in your `/fonts` directory:**
   ```
   khun-shawn/fonts/
   ├── GeistMono-300.woff2
   ├── GeistMono-400.woff2
   ├── GeistMono-500.woff2
   ├── GeistMono-600.woff2
   ├── GeistMono-700.woff2
   ├── Lato-400.woff2
   ├── Lato-700.woff2
   ├── Lusitana-400.woff2
   └── Lusitana-700.woff2
   ```

### Option 2: Download via NPM

```bash
# Install Geist fonts package
npm install geist

# Copy WOFF2 files to your fonts directory
# Files are usually in: node_modules/geist/dist/fonts/
# Copy only the Geist Mono WOFF2 files
```

### Option 3: Font Download Service

Use an online font converter:
1. Go to [Google Fonts](https://fonts.google.com) or [Fontsquirrel](https://www.fontsquirrel.com)
2. Search for "Geist Mono"
3. Download WOFF2 format for all weights
4. Place in `/fonts` directory

---

## Verify Setup

Once you've added the Geist Mono files, verify:

1. **All 9 files present in `/fonts`:**
   - 5 Geist Mono files (300-700 weights)
   - 2 Lusitana files (400, 700)
   - 2 Lato files (400, 700)

2. **Test in browser:**
   - Visit https://khun-shawn.com
   - Open DevTools → Network tab
   - Check that all fonts load (no 404 errors)
   - Fonts should show ~20-30KB file sizes

3. **Performance check:**
   - Lighthouse audit should show no external font requests
   - All fonts load from `khun-shawn.com` domain only

---

## HTML & CSS Setup

The `index.html` already has correct `@font-face` declarations:

```css
@font-face {
  font-family: 'Geist Mono';
  src: url('./fonts/GeistMono-400.woff2') format('woff2');
  font-weight: 400; font-display: swap;
}
```

No changes needed once font files are in place.

---

## Performance Benefits

Once fully local:
- ✅ **Faster first paint** (no external requests)
- ✅ **Works offline** (no dependency on CDNs)
- ✅ **Better Lighthouse scores** (local resources)
- ✅ **Consistent rendering** (no flash of unstyled text)
- ✅ **Privacy-friendly** (no Google Fonts tracking)

---

## Troubleshooting

### Fonts not loading?

1. **Check file names exactly match** (case-sensitive):
   - `GeistMono-400.woff2` (not `geistmono-400.woff2`)

2. **Check paths in @font-face:**
   - From `index.html`: `./fonts/GeistMono-400.woff2`
   - Path must match exactly

3. **Clear browser cache:**
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

4. **Check DevTools Network tab:**
   - Open DevTools → Network
   - Filter by "font"
   - Look for 404 errors
   - Font files should show 200 status code

### Files are large?

Geist Mono WOFF2 files are typically:
- 300 weight: ~15-20 KB
- 400 weight: ~20-25 KB
- 500 weight: ~20-25 KB
- 600 weight: ~20-25 KB
- 700 weight: ~20-25 KB
- **Total: ~100-125 KB** (all weights combined)

This is normal for a complete font family.

---

## Current Files in `/fonts`

```
fonts/
├── Lato-400.woff2         ✅ Ready
├── Lato-700.woff2         ✅ Ready
├── Lusitana-400.woff2     ✅ Ready
└── Lusitana-700.woff2     ✅ Ready
    (Add Geist Mono files here)
```

---

**Last Updated:** March 28, 2026
**Next Step:** Download and add Geist Mono WOFF2 files
