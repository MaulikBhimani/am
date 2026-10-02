# AM Industrial — Website Report

## 1. Project Overview

**Framework:** Astro (static site generation)
**Styling:** Tailwind CSS v4
**Content:** Astro Content Collections (Markdown files)
**JavaScript:** Minimal — vanilla JS only for header scroll, mobile menu, form handling
**Fonts:** Space Grotesk (headings) + Inter (body) via Google Fonts

**Business:** AM Enterprise — Industrial trading company + manufacturer of rotary kilns and mixture machines.

**Live dev server:** `npm run dev` → http://localhost:4321
**Production build:** `npm run build`

---

## 2. Visual Design System

Defined in `src/styles/global.css`

| Token | Value | Usage |
|---|---|---|
| Background base | `#0B0F12` | Page background |
| Background deep | `#11171B` | Alternate sections |
| Surface 1 | `#151C21` | Cards, inputs |
| Surface 2 | `#1B2328` | Image placeholders |
| Text primary | `#F4F5F2` | Headings, body |
| Text muted | `#AAB4BA` | Descriptions, labels |
| Accent orange | `#F97316` | CTAs, borders, indicators |
| Accent bright | `#FF8A1F` | Hover state of orange |
| Yellow | `#FACC15` | Secondary accent (minimal use) |
| Border | `rgba(255,255,255,0.10)` | Card/section borders |
| Font heading | Space Grotesk | All headings, labels, buttons |
| Font body | Inter | Paragraph text |

**Scroll reveal animation:** `.reveal` class — elements fade + slide up when entering viewport via `IntersectionObserver` in `BaseLayout.astro`.

**Reduced motion:** `@media (prefers-reduced-motion: reduce)` disables all animations globally.

---

## 3. Project File Structure

```
D:\am enter\A M\
├── src/
│   ├── assets/images/products/        ← Original source images (not served directly)
│   ├── components/                    ← All UI components
│   ├── content/                       ← Markdown content (products, categories, brands)
│   ├── layouts/                       ← Page shell layouts
│   ├── pages/                         ← URL routes
│   ├── styles/global.css              ← Design tokens + base styles
│   └── content.config.ts              ← Content collection schemas
│
├── public/
│   ├── images/products/               ← Served product images (used by .md files + components)
│   ├── images/manufacturing/          ← Old manufacturing images (not actively used)
│   ├── images/hero/                   ← Hero background assets
│   ├── catalogue/                     ← PDF catalogue goes here
│   ├── favicon.svg
│   └── robots.txt
```

> **Rule:** Images referenced in `.md` frontmatter and `.astro` components must be in `public/` with paths starting `/images/...`. Images in `src/assets/` are the originals — keep them as backup.

---

## 4. Page Routes

| URL | File | Purpose |
|---|---|---|
| `/` | `src/pages/index.astro` | Homepage |
| `/products/` | `src/pages/products/index.astro` | All product categories |
| `/products/[category]/` | `src/pages/products/[category]/index.astro` | Products in a category |
| `/products/[category]/[product]/` | `src/pages/products/[category]/[product].astro` | Single product detail |
| `/manufacturing/` | `src/pages/manufacturing/index.astro` | Manufacturing page (kiln + mixture) |
| `/brands/` | `src/pages/brands/index.astro` | All brands |
| `/brands/[brand]/` | `src/pages/brands/[brand].astro` | Single brand page |
| `/about/` | `src/pages/about/index.astro` | About company |
| `/catalogue/` | `src/pages/catalogue/index.astro` | Catalogue download + browse |
| `/contact/` | `src/pages/contact/index.astro` | Contact form + info |
| `/enquiry/` | `src/pages/enquiry/index.astro` | Enquiry form |
| `/404` | `src/pages/404.astro` | Not found page |

---

## 5. Homepage Section Flow

`src/pages/index.astro` assembles these components in order:

```
Header                  ← Fixed sticky nav
  │
Hero                    ← Full-viewport industrial background + headline + CTAs
  │
TrustStrip              ← Horizontal tag line: Trading • Manufacturing • Industrial Supply
  │
AboutSection            ← Company intro — left text, right image
  │
ProductCategories       ← 10-card grid of product categories
  │
FeaturedProducts        ← Horizontal strip of featured brand products
  │
BrandsSection           ← Brand name strip (Mangalam, Vulcan, Yuri, Crompton, Bharat Bijlee)
  │
ManufacturingSection    ← Split section — kiln image left, text right
  │
WhyUs                   ← 4 value cards (no fake stats)
  │
Applications            ← Industrial application cards (Fabrication, Maintenance, etc.)
  │
EnquiryCTA              ← "Looking for the right product?" band
  │
CatalogueCTA            ← Download catalogue CTA
  │
ContactSection          ← Contact form + company info
  │
Footer                  ← Links, contact, copyright
```

---

## 6. Component Reference

### Layout Components

**`src/layouts/BaseLayout.astro`**
- Page shell: `<html>`, `<head>`, `<body>`
- Injects: SEO meta tags, Open Graph, JSON-LD (Organization + WebSite), canonical URL
- Loads: Google Fonts, global.css
- Contains: skip-to-content link, scroll reveal IntersectionObserver script
- Props: `title`, `description`, `canonical`

**`src/components/Header.astro`**
- Fixed sticky navigation, `z-50`
- Transparent on hero → dark solid background after 60px scroll (via JS)
- Desktop: logo + nav links + Contact Us button
- Mobile: hamburger → full-screen slide-in drawer
- Active page highlighting: not yet implemented (future task)

**`src/components/Footer.astro`**
- 4-column grid: Company links, Product links, Contact info, Copyright
- Industrial SVG mark

**`src/components/PageHero.astro`**
- Reusable inner-page header (used on all non-homepage pages)
- Props: `eyebrow`, `title`, `subtitle`, `tight`, `noPadTop`
- `noPadTop` must be passed when `Breadcrumb` appears above it — prevents double top padding

**`src/components/Breadcrumb.astro`**
- Schema.org BreadcrumbList markup
- Has `pt-20 lg:pt-24` built in to clear the fixed header
- Always place this as the FIRST element inside `<main>` on inner pages

### Homepage Section Components

**`src/components/Hero.astro`**
- Full-viewport hero with background image/video
- Eyebrow + H1 headline + supporting text + 2 CTAs
- Industrial SVG grid decoration
- Video: `preload="metadata"`, `poster`, `autoplay muted loop playsinline`

**`src/components/TrustStrip.astro`**
- Single horizontal line of text tags
- Mobile: horizontal scroll

**`src/components/AboutSection.astro`**
- Left: large statement text + body paragraphs + CTA
- Right: company/facility image

**`src/components/ProductCategories.astro`**
- Renders 10 product category cards using `ProductCard`
- Data is hardcoded array in the component (not from content collection)
- Images served from `public/images/products/[folder]/[filename]`

**`src/components/ProductCard.astro`**
- Reusable card: image + number + name + description + arrow
- Props: `number`, `name`, `description`, `href`, `imageSrc`, `imageAlt`
- Hover: image scale 1.03, orange top line expands, arrow moves right

**`src/components/FeaturedProducts.astro`**
- Horizontal strip of featured brand+product combinations
- Data hardcoded in component

**`src/components/BrandsSection.astro`**
- Text-based brand name display
- Wording: "Brands We Supply" (not "Official Partner")

**`src/components/ManufacturingSection.astro`**
- Split layout: kiln image left, text right
- Links to `/manufacturing/`
- Image: `/images/products/kiln/rotary-kiln.jpg`

**`src/components/WhyUs.astro`**
- 4 factual value cards — no invented statistics

**`src/components/Applications.astro`**
- Industrial application cards: Fabrication, Manufacturing, Maintenance, etc.

**`src/components/EnquiryCTA.astro`**
- CTA band: "Looking for the right industrial product?"
- Buttons: Request a Quote + WhatsApp (hidden if `PUBLIC_WHATSAPP_NUMBER` not set)

**`src/components/CatalogueCTA.astro`**
- Download Catalogue + View Products buttons
- PDF path: `/catalogue/company-catalogue.pdf`

**`src/components/ContactSection.astro`**
- Contact info (name, address, phone, email, hours)
- Enquiry form with honeypot spam protection
- Form action: configure with Formspree/Resend endpoint

---

## 7. Content Collections

Defined in `src/content.config.ts`. Three collections:

### 7a. Products — `src/content/products/`

Each `.md` file = one product. Frontmatter schema:

```yaml
name: "Product Name"               # required — display name
slug: "product-slug"               # required — URL segment
category: "category-slug"          # required — must match a category slug
brand: "Brand Name"                # optional
shortDescription: "..."            # required — shown on cards and meta
description: "..."                 # optional — shown on detail page
images:                            # array of public paths
  - "/images/products/folder/file.jpg"
specifications:                    # optional key-value pairs
  Key: "Value"
applications:                      # optional list
  - "Application name"
datasheet: "/path/to/file.pdf"     # optional
featured: true                     # shows in FeaturedProducts
available: true                    # hides from listings if false
```

**Body text** (below `---`) renders as the Product Description section on the detail page.

**URL generated:** `/products/[category]/[slug]/`

### 7b. Categories — `src/content/categories/`

Each `.md` file = one product category. Frontmatter schema:

```yaml
name: "Category Name"              # required — display name
slug: "category-slug"              # required — URL segment
description: "..."                 # required — shown on category page
image: "/images/products/..."      # optional — shown on /products/ grid
order: 1                           # controls sort order on /products/ page
```

**URL generated:** `/products/[slug]/`

### 7c. Brands — `src/content/brands/`

Each `.md` file = one brand. Frontmatter schema:

```yaml
name: "Brand Name"                 # required
slug: "brand-slug"                 # required — URL segment
description: "..."                 # required
categories:                        # product categories this brand covers
  - "welding-rods"
logo: "/images/brands/logo.svg"    # optional
website: "https://..."             # optional
```

**URL generated:** `/brands/[slug]/`

---

## 8. Current Products in System

| File | Product | Category | Brand |
|---|---|---|---|
| `mangalam-7018.md` | Mangalam 7018 Welding Rod | welding-rods | Mangalam |
| `vulcan-arc-machine.md` | Vulcan Arc Welding Machine | welding-machines | Vulcan Welding |
| `yuri-cutting-disc.md` | Yuri Cutting Disc | cutting-discs | Yuri Smart Engineering |
| `crompton-3-phase-motor.md` | Crompton 3-Phase Induction Motor | motors | Crompton |
| `bharat-bijlee-motor.md` | Bharat Bijlee Industrial Motor | motors | Bharat Bijlee |
| `industrial-helical-gear.md` | Industrial Helical Gearbox | gears | — |
| `rubber-conveyor-belt.md` | Rubber Conveyor Belt | conveyor-belts | — |
| `industrial-control-panel.md` | Industrial Control Panel | electrical-panels | — |
| `rotary-kiln.md` | Rotary Kiln | manufactured-components | — |
| `mixture-machine-2ton.md` | Industrial Mixture Machine 2 Ton | manufactured-components | — |

---

## 9. Current Categories in System

| File | Name | Slug | Notes |
|---|---|---|---|
| `manufactured-components.md` | Manufactured Components | manufactured-components | Only category file created so far |

> **Missing category files:** welding-rods, welding-machines, cutting-discs, chain-pulley, motors, gears, conveyor-belts, electrical-panels. The `/products/[category]/` pages for these will 404 until their `.md` files are created. The homepage `ProductCategories` component works independently (hardcoded data) so the homepage is unaffected.

---

## 10. Public Image File Map

All images served to the browser live in `public/images/products/`:

```
public/images/products/
├── welding-rods/
│   └── welding-rods.png
├── welding-machines/
│   ├── welding-mechine.jpg          ← primary
│   ├── welding-mechine-2.jpg
│   ├── welding-mechine-3.jpg
│   └── welding-mechine-4.jpg
├── cutting-discs/
│   └── cutting-discs.jpg
├── chain-pulley/
│   └── chain-pulley.jpg
├── motors/
│   ├── motor-10hp.jpg
│   └── motor-100hp.jpg
├── gearbox/
│   ├── horizontal-gearbox.jpg       ← primary
│   └── horizontal-gearbox-2.jpg
├── conveyor-belts/
│   ├── conveyor-belt-1.jpg          ← primary
│   └── conveyors-belts.jpg
├── electrical-panels/
│   ├── electric-panel.jpg           ← primary
│   └── electric-panel-2.jpg
├── kiln/
│   ├── rotary-kiln.jpg              ← primary
│   └── rotary-kiln-2.jpeg
└── mixture/
    ├── mixture-mechine-1.jpg        ← primary
    ├── mixture-mechine-2.jpeg
    ├── mixture-mechine-3.jpeg
    └── mixture-machine.mp4
```

---

## 11. How to Add a New Product

**Step 1 — Add image(s)**
Copy image to `public/images/products/[category-folder]/filename.jpg`
- No spaces in filename — use hyphens
- Keep extension lowercase: `.jpg`, `.jpeg`, `.png`, `.webp`

**Step 2 — Create the `.md` file**
Create `src/content/products/your-product-slug.md`:

```yaml
---
name: "Your Product Name"
slug: "your-product-slug"
category: "welding-rods"
brand: "Brand Name"
shortDescription: "One sentence description for cards and SEO."
description: "Longer description shown on detail page."
images:
  - "/images/products/welding-rods/your-image.jpg"
specifications:
  Type: "Value"
  Size: "Value"
applications:
  - "Application 1"
  - "Application 2"
featured: false
available: true
---

Optional body text here. Renders as Product Description on the detail page.
Supports **bold**, lists, and standard Markdown.
```

**Step 3 — Ensure category file exists**
Check `src/content/categories/` for a file with matching slug.
If missing, create `src/content/categories/your-category.md`:

```yaml
---
name: "Category Display Name"
slug: "your-category-slug"
description: "Short description of this category."
image: "/images/products/your-category/primary-image.jpg"
order: 5
---
```

**Step 4 — Done**
The product automatically appears at `/products/[category]/[slug]/` and on the `/products/[category]/` listing page. No other files need editing.

---

## 12. How to Add a New Manufactured Product

Manufactured products use `category: "manufactured-components"` and also get a dedicated section on the `/manufacturing/` page.

**Step 1 — Add images and video (if any)**
```
public/images/products/[new-folder]/image-1.jpg
public/images/products/[new-folder]/image-2.jpg
public/images/products/[new-folder]/demo-video.mp4   ← optional
```

**Step 2 — Create the product `.md` file**
```yaml
---
name: "Your Machine Name"
slug: "your-machine-slug"
category: "manufactured-components"
shortDescription: "One sentence."
images:
  - "/images/products/new-folder/image-1.jpg"
  - "/images/products/new-folder/image-2.jpg"
specifications:
  Capacity: "Value"
  Motor Power: "Value"
  Frame: "Structural steel"
applications:
  - "Application 1"
featured: true
available: true
---
Body description text here.
```

**Step 3 — Add to manufacturing page**
Open `src/pages/manufacturing/index.astro`.
Add a new object to the `products` array:

```js
{
  number: '03',
  name: 'Your Machine Name',
  eyebrow: 'Short Category Label',
  description: 'Paragraph shown on the page.',
  specs: [
    { label: 'Capacity', value: 'Value' },
    { label: 'Motor Power', value: 'Value' },
  ],
  applications: ['Application 1', 'Application 2'],
  images: ['/images/products/new-folder/image-1.jpg'],
  video: '/images/products/new-folder/demo-video.mp4',  // optional — remove if no video
  href: '/products/manufactured-components/your-machine-slug/',
},
```

**Step 4 — Done**
The machine appears on `/manufacturing/` and at `/products/manufactured-components/your-machine-slug/`.

---

## 13. How to Add a New Brand

**Step 1 — Create the brand `.md` file**
Create `src/content/brands/brand-slug.md`:

```yaml
---
name: "Brand Name"
slug: "brand-slug"
description: "One or two sentences about what this brand supplies."
categories:
  - "welding-rods"
  - "welding-machines"
logo: "/images/brands/brand-logo.svg"   # optional — add when logo available
website: "https://brandwebsite.com"     # optional
---
```

**Step 2 — Add logo image (optional)**
Create folder `public/images/brands/` and place the logo SVG or PNG there.

**Step 3 — Update BrandsSection (homepage)**
Open `src/components/BrandsSection.astro` and add the brand name to the display list.

**Step 4 — Done**
Brand appears at `/brands/brand-slug/` and on `/brands/` listing automatically.

---

## 14. How to Add a New Product Category

**Step 1 — Create category file**
Create `src/content/categories/new-category.md`:

```yaml
---
name: "Category Name"
slug: "new-category"
description: "Short description for SEO and page subtitle."
image: "/images/products/new-category/primary.jpg"
order: 11
---
```

**Step 2 — Add to ProductCategories homepage component**
Open `src/components/ProductCategories.astro` and add to the `categories` array:

```js
{ number: '11', name: 'Category Name', description: 'Short card description.', href: '/products/new-category/', image: '/images/products/new-category/primary.jpg' },
```

**Step 3 — Add products**
Follow Section 11 above using `category: "new-category"` in product `.md` files.

---

## 15. Environment Variables

Create `.env` in project root for configuration:

```env
PUBLIC_WHATSAPP_NUMBER=919999999999
```

- `PUBLIC_WHATSAPP_NUMBER` — WhatsApp number in international format without `+`. If not set, the WhatsApp button is hidden automatically on EnquiryCTA and contact pages.

---

## 16. Form / Contact Setup

The contact form at `/contact/` and enquiry form at `/enquiry/` currently have `action="#"` — they will show a "not configured" message on submit.

**To connect to Formspree:**
1. Create account at https://formspree.io
2. Create a new form — copy the endpoint URL (e.g. `https://formspree.io/f/xxxxxxxx`)
3. In `src/pages/contact/index.astro`, change: `action="#"` → `action="https://formspree.io/f/xxxxxxxx"`
4. Same for `src/pages/enquiry/index.astro`

---

## 17. Catalogue PDF

Place the PDF at:
```
public/catalogue/company-catalogue.pdf
```

The download button on `/catalogue/` already points to this path. No code change needed.

---

## 18. SEO Architecture

Every page has:
- `<title>` and `<meta name="description">` via `BaseLayout.astro` props
- Canonical URL
- Open Graph tags
- JSON-LD structured data

| Page type | JSON-LD schema |
|---|---|
| Homepage | Organization + WebSite |
| Product detail | Product + BreadcrumbList |
| Category page | CollectionPage + BreadcrumbList |
| Contact | ContactPage |
| Brands | CollectionPage |

`robots.txt` is at `public/robots.txt`.
Sitemap: add `@astrojs/sitemap` integration for auto-generation.

---

## 19. Missing Category Files (Action Required)

These category `.md` files need to be created for `/products/[category]/` pages to work:

| Slug needed | Create file |
|---|---|
| `welding-rods` | `src/content/categories/welding-rods.md` |
| `welding-machines` | `src/content/categories/welding-machines.md` |
| `cutting-discs` | `src/content/categories/cutting-discs.md` |
| `chain-pulley` | `src/content/categories/chain-pulley.md` |
| `motors` | `src/content/categories/motors.md` |
| `gears` | `src/content/categories/gears.md` |
| `conveyor-belts` | `src/content/categories/conveyor-belts.md` |
| `electrical-panels` | `src/content/categories/electrical-panels.md` |

Use this template for each:
```yaml
---
name: "Display Name"
slug: "slug-here"
description: "Short description."
image: "/images/products/folder/primary.jpg"
order: 1
---
```

---

## 20. Quick Reference — Common Tasks

| Task | Where |
|---|---|
| Change company name | `src/layouts/BaseLayout.astro` (JSON-LD), `src/components/Header.astro`, `src/components/Footer.astro` |
| Change phone / email / address | `src/pages/contact/index.astro` |
| Change WhatsApp number | `.env` → `PUBLIC_WHATSAPP_NUMBER` |
| Add hero background image | `public/images/hero/` → update `src/components/Hero.astro` |
| Add catalogue PDF | `public/catalogue/company-catalogue.pdf` |
| Connect contact form | `src/pages/contact/index.astro` → change `action="#"` |
| Add new product | Section 11 above |
| Add new manufactured product | Section 12 above |
| Add new brand | Section 13 above |
| Add new category | Section 14 above |
| Change accent color | `src/styles/global.css` → `--color-accent` |
| Change fonts | `src/layouts/BaseLayout.astro` (Google Fonts link) + `src/styles/global.css` |
