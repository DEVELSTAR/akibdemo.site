# AkibDemo — Project Showcase

A minimal, fast portfolio website showcasing 18+ demo projects built for business, apps, and portfolio use cases.

**Live Site:** [https://akibdemo.site](https://akibdemo.site)

---

## Features

- ⚡ **Fast** — Static HTML/CSS/JS, no build step required
- 📱 **Responsive** — Mobile-first, works on all devices
- 🎨 **Clean Design** — Light theme with blue accent (#3B82F6)
- 🔍 **SEO Ready** — Meta tags, Open Graph, Twitter Cards
- 🎯 **Filterable** — Filter projects by category (All/Business/Apps/Portfolio)
- ♿ **Accessible** — Semantic HTML, ARIA labels

---

## Project Structure

```
akibdemo/
├── index.html          # Main HTML file
├── styles.css          # All styles (production-ready)
├── script.js           # Filter functionality
├── README.md           # This file
└── (og-image.png)     # Social preview image (create before deploy)
```

---

## Deployment

### Option 1: Netlify (Recommended)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the folder into Netlify
3. Add custom domain: `akibdemo.site`
4. Done! Auto-HTTPS enabled.

### Option 2: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Option 3: Cloudflare Pages

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Create new Pages project
3. Upload the folder
4. Set custom domain

### Option 4: Traditional Hosting (cPanel/FTP)

Upload these files to your `public_html` folder:
- `index.html`
- `styles.css`
- `script.js`

---

## Pre-Deploy Checklist

- [ ] Create `og-image.png` (1200×630px) for social sharing
- [ ] Update domain in meta tags (if not using akibdemo.site)
- [ ] Test all project links work
- [ ] Verify mobile responsiveness
- [ ] Check page speed (should be 90+ on Lighthouse)

---

## Performance

- **Lighthouse Score:** 95+ (expected)
- **Load Time:** < 1s
- **Bundle Size:** ~12KB (gzipped)

---

## Tech Stack

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter + Poppins)

---

## Credits

Built by **AkibWorks** | [akibworks.in](https://akibworks.in)

---

## License

© AkibWorks. All rights reserved.
