Build a Premium Industrial Trading & Manufacturing Landing Page
Build a production-ready, highly polished B2B industrial trading + manufacturing company website using:

Astro

JavaScript

Tailwind CSS v4

SVG

GSAP only where genuinely useful

Lenis or lightweight smooth scrolling if it does not hurt performance

Native browser APIs where possible

No unnecessary React

React only for genuinely interactive components

The website must feel like a serious, established industrial supplier/manufacturer, not a generic startup landing page.

The visual direction should be:

Industrial + Premium + Trustworthy + Technical + Modern + Engineering-focused

Avoid generic AI-generated website aesthetics.

Do NOT use:

Purple gradients

Excessive glassmorphism

Huge rounded cards everywhere

Cartoon illustrations

Generic SaaS dashboard design

Excessive animations

Fake statistics

Fake customer logos

Fake certifications

Fake testimonials

Fake company claims

The design should communicate:

Reliability → Product Quality → Industrial Expertise → Availability → Professional Service → Trust

1. Business Context
The company is an industrial trading company that also manufactures selected components/products.

Main business:

Industrial product trading

Industrial components

Welding products

Welding machines

Cutting products

Material handling products

Motors

Gears / gearboxes

Conveyor belts

Electrical panels

Selected manufactured components

Example product/brand relationships:

Welding Rods
Brand:

Mangalam

Welding Machines
Brand:

Vulcan Welding

Cutting Discs
Brand:

Yuri Smart Engineering

Chain Pulley
Motors
Brands:

Crompton

Bharat Bijlee

Gears / Gearboxes
Conveyor Belts
Electrical Panels
Manufactured Products
Do not invent specifications, certifications, capacity, years of experience, customer counts, or other facts.

Use clearly marked placeholder content where real company information is not yet available.

2. Overall Design Direction
Create an industrial editorial / engineering aesthetic.

Color palette:

Deep charcoal / near-black

Graphite

Steel gray

Warm off-white

Industrial orange as the main accent

Small amounts of safety yellow only where appropriate

Suggested colors:

Background:
#0B0F12
#11171B

Surface:
#151C21
#1B2328

Text:
#F4F5F2
#AAB4BA

Accent:
#F97316
#FF8A1F

Secondary accent:
#FACC15

Borders:
rgba(255,255,255,0.10)

The orange accent should feel like:

industrial sparks / safety equipment / machinery warning markings

rather than a bright startup color.

Use typography with a strong industrial character.

Suggested combination:

Headings: Space Grotesk / Manrope / Geist-like geometric sans

Body: Inter / Manrope

Use a proper local/self-hosted font strategy where possible.

Do not load unnecessary font weights.

3. Header
Create a premium sticky navigation.

Desktop:

LOGO

Products
Manufacturing
Brands
About
Catalogue

                 Contact Us

Header behavior:

Transparent over hero initially

Changes to dark solid background after scrolling

Subtle backdrop blur

1px bottom border

Smooth transition

Compact height after scrolling

Mobile:

Logo

Menu button

Full-screen/mobile navigation drawer

Navigation should remain extremely fast.

Do not load heavy menu libraries.

4. Hero Section
Create a visually powerful industrial hero.

Use a large industrial manufacturing/welding background image or muted background video.

The hero should communicate:

Industrial Products. Reliable Supply. Engineered for Work.

Possible copy:

Eyebrow:

INDUSTRIAL TRADING & MANUFACTURING

Headline:

Industrial Products Built Around Reliability.

Supporting text:

A trusted source for welding, material handling, power transmission, conveyor and electrical products — with selected components manufactured in-house.

Primary CTA:

Explore Products

Secondary CTA:

Request a Quote

Additional small trust line:

Trading • Manufacturing • Industrial Supply

Hero composition:

Full viewport but not unnecessarily oversized

Dark image overlay

Strong text contrast

Industrial grid/SVG details

Subtle orange accent

Small technical coordinates / line decorations

Minimal motion

Do NOT make the hero look like a gaming website.

5. Hero Image / Video Performance
The hero may use a free industrial/welding video.

Use a locally hosted optimized asset whenever possible.

Preferred implementation:

<video
  autoplay
  muted
  loop
  playsinline
  preload="metadata"
  poster="/images/hero-poster.webp"
>

Important:

NEVER autoplay audio

NEVER load a huge 4K video unnecessarily

Prefer compressed WebM/MP4

Provide poster image

Respect prefers-reduced-motion

On slow/mobile connections, allow the poster image to replace the video

Do not make the video required for understanding the page

Use a static image fallback.

Possible free-source inspiration/assets can come from Unsplash and Pexels. For example, Pexels currently has free industrial welding footage suitable for this visual direction, and Unsplash has free industrial welding photography. 
P
Pexels
+1

Do not hotlink random image URLs in production.

Download/optimize assets and store them in the project where licensing permits.

6. Hero SVG System
Create custom SVG decoration instead of relying entirely on images.

Use:

Engineering grid

Technical measurement marks

Thin line diagrams

Conveyor-belt inspired curves

Gear outlines

Crosshair elements

Blueprint-style lines

Small animated orange indicators

SVG should be subtle.

Do not cover the page with decorative SVGs.

Animations should be:

opacity

transform

stroke-dashoffset

small positional movement

Avoid expensive continuous animations.

7. Trust Strip
Immediately after hero.

Create a clean horizontal section:

Industrial Supply
      •
Trading
      •
Manufacturing
      •
Technical Products
      •
B2B Enquiries

On mobile this should become a horizontal scroll or stacked layout.

Do not invent numerical achievements.

8. About / Company Introduction
Create an editorial section.

Left:

Large statement:

From industrial products to engineered components.

Right:

2–3 paragraphs explaining that the company combines trading/distribution with manufacturing of selected parts.

Include a CTA:

Know Our Company

Visual:

Industrial factory/product image.

Add subtle blueprint SVG.

9. Product Categories
This is one of the most important sections.

Heading:

Industrial Products

Subheading:

Products selected for demanding industrial applications.

Create a premium category grid.

Categories:

Welding Rods

Welding Machines

Cutting Discs

Chain Pulley Blocks

Motors

Gears & Gearboxes

Conveyor Belts

Electrical Panels

Industrial Pans

Manufactured Components

Each card:

Category image

Category number

Product name

Short description

Arrow

Hover interaction

Example:

01
WELDING RODS

Reliable welding consumables
for industrial fabrication.

Explore →

Use different image crops.

Do not use the same image repeatedly.

10. Product Visual Treatment
Product cards should feel like a professional industrial catalogue.

Use:

dark surfaces

subtle borders

large product photography

technical labels

orange hover indicator

small SVG corner marks

On hover:

image scale 1.03

border becomes slightly brighter

arrow moves 4–8px

orange line expands

Keep animation under approximately 250–400ms.

11. Featured Products
Create a horizontal featured-products section.

Example:

Featured Industrial Products

Mangalam
Welding Rods

Vulcan Welding
Welding Machine

Yuri Smart Engineering
Cutting Disc

Crompton
Industrial Motors

Bharat Bijlee
Motors

Do not claim these brands are officially partnered with the company unless actual company data confirms it.

Use wording such as:

Available brands

rather than:

Official partner

unless verified.

12. Brands Section
Create a professional brand strip.

Heading:

Brands We Supply

Use text-based brand names initially rather than fake logo SVGs.

Brands:

Mangalam

Vulcan Welding

Yuri Smart Engineering

Crompton

Bharat Bijlee

Allow future replacement with official brand logos.

Do not recreate trademarks inaccurately.

Create a subtle marquee only if it remains accessible and performant.

Provide static content for screen readers.

13. Manufacturing Section
This section differentiates the company from a normal trading company.

Create a strong visual split:

Left:

Large factory/component image.

Right:

Eyebrow:

MANUFACTURING

Heading:

Beyond Trading. We Manufacture Selected Components.

Body:

Alongside industrial product trading, we manufacture selected parts and components for specific requirements.

CTA:

Explore Manufacturing

Add a technical SVG drawing in the background.

Use placeholder language if exact manufactured products have not yet been supplied.

14. Why Customers Work With Us
Do not use fake numerical statistics.

Instead create four factual-value cards:

Product Knowledge
Industrial products selected with application requirements in mind.

Multi-Category Supply
A broad range of industrial products from one supplier.

Trading + Manufacturing
Trading capability combined with selected in-house manufacturing.

Enquiry Support
A straightforward process for product and requirement enquiries.

These should communicate trust without inventing claims.

15. Industrial Application Section
Create visual application cards.

Examples:

Fabrication

Manufacturing

Maintenance

Material Handling

Power Transmission

Electrical Systems

Workshop Requirements

Each card can use a monochrome industrial photograph with orange overlay details.

16. Product Enquiry CTA
Create a strong CTA band.

Headline:

Looking for the right industrial product?

Text:

Send us your requirement and our team can help identify the appropriate product or specification.

Buttons:

Request a Quote

WhatsApp Us

Do not fabricate a WhatsApp number.

Use a configuration variable:

PUBLIC_WHATSAPP_NUMBER

If it is not configured, hide the WhatsApp button rather than showing fake data.

17. Catalogue Section
Create a catalogue CTA:

PRODUCT CATALOGUE

Explore our industrial product range.

[ Download Catalogue ]
[ View Products ]

Use a real PDF path:

/catalogue/company-catalogue.pdf

If the file doesn't exist yet, use a clearly marked placeholder and don't create a fake PDF.

18. Contact Section
Create a premium contact section.

Include placeholders for:

Company Name
Address
Phone
Email
WhatsApp
Business Hours
Google Maps

Form fields:

Name

Company

Phone

Email

Product / Requirement

Message

Submit button:

Send Enquiry

Form must have:

proper labels

keyboard accessibility

validation

error states

success state

spam protection strategy

no exposed secrets

Do not create a fake backend.

Use a configurable form endpoint or clearly document where to connect Formspree / Resend / custom backend later.

19. Footer
Footer structure:

Company

About
Manufacturing
Products
Brands
Catalogue
Contact

Products

Welding Rods
Welding Machines
Cutting Discs
Motors
Gears
Conveyor Belts
Electrical Panels

Contact

Phone
Email
Address
WhatsApp

© Company Name
Privacy Policy
Terms

Include a small industrial SVG mark.

20. Scroll Animations
Use animation carefully.

Preferred:

IntersectionObserver

CSS transitions

GSAP only where it provides clear value

transform

opacity

Avoid animating:

width

height

top

left

box-shadow continuously

Use:

transform: translate3d(...)
opacity

Animation philosophy:

The page should feel alive, not animated.

Sections should reveal naturally as the user scrolls.

Examples:

Heading slides/fades upward

Product image reveals

Orange technical line draws

Cards stagger slightly

Do not animate every element independently.

21. Respect Reduced Motion
Implement:

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

Also ensure JavaScript animations are disabled when reduced motion is requested.

22. Image Loading Strategy
This is extremely important.

DO NOT load all website images immediately.

Hero:

priority / eager

Below-fold images:

loading="lazy"
decoding="async"

Use Astro's image optimization.

Prefer:

AVIF

WebP

responsive sizes

correct width/height

aspect-ratio containers

Example concept:

<Image
  src={image}
  alt={alt}
  width={1200}
  height={800}
  loading="lazy"
  decoding="async"
/>

The browser should NOT download every product image when the homepage opens.

23. Advanced Image Loading
For image-heavy sections:

Load only when near viewport

Use native lazy loading first

Use IntersectionObserver only when necessary

Never implement custom lazy loading if native browser behavior is sufficient

For image galleries below the fold:

initial page
    ↓
HTML loads
    ↓
hero image loads
    ↓
above-fold images load
    ↓
user scrolls
    ↓
browser loads nearby lazy images

Do not preload all product images.

24. Image Placeholder / Blur
Use low-cost placeholders where useful.

For example:

blur placeholder
      ↓
optimized WebP/AVIF
      ↓
full image

Do not ship large base64 placeholders everywhere.

Keep HTML lightweight.

25. Video Loading Strategy
Videos below the fold must NOT load immediately.

Use:

poster image first
      ↓
intersection observer
      ↓
when near viewport
      ↓
load video
      ↓
play muted

For mobile or slow connections:

prefer poster image

Use:

navigator.connection?.saveData

where appropriate.

If Save-Data is enabled, avoid loading decorative video.

26. SEO
SEO must be built into the architecture from day one.

Every page must support:

title

description

canonical URL

Open Graph

Twitter/X metadata

robots metadata

structured data

breadcrumbs

semantic HTML

Generate:

sitemap.xml
robots.txt

Use Astro's static generation.

27. Homepage SEO
Suggested title:

Industrial Products & Manufacturing Solutions | [Company Name]

Suggested description:

Industrial trading and manufacturing company supplying welding products, machines, motors, gears, conveyor belts, electrical panels and industrial components.

Do not keyword-stuff.

28. Structured Data
Implement JSON-LD.

Homepage:

Organization
WebSite

Product pages:

Product
BreadcrumbList

Company/contact page:

Organization
LocalBusiness

only where appropriate.

Do not create fake:

ratings

reviews

prices

availability

certifications

29. Semantic HTML
Use:

<header>
<nav>
<main>
<section>
<article>
<footer>

Use only one meaningful H1 per page.

Heading hierarchy:

H1
 ├── H2
 │    ├── H3
 │    └── H3
 └── H2

30. Accessibility
Target WCAG-friendly implementation.

Must include:

keyboard navigation

visible focus

proper labels

alt text

sufficient contrast

aria labels where required

skip-to-content link

accessible mobile menu

accessible dialogs

reduced motion support

Do not rely on color alone.

31. Performance Budget
Treat performance as a first-class feature.

Target:

LCP: excellent
CLS: near zero
INP: excellent

Avoid:

giant JS bundles

unnecessary React

huge animation libraries

autoplay background video on poor connections

loading all images

unnecessary third-party scripts

icon libraries that import everything

Astro should render most of the page as static HTML.

The site should ship minimal JavaScript.

32. JavaScript Architecture
Use Astro islands only where required.

Example:

Static Astro
    ↓
Product cards
    ↓
No JS

Interactive:
    ↓
Mobile menu
    ↓
React/JS island

Interactive:
    ↓
Enquiry form
    ↓
Small JS

Interactive:
    ↓
Video lazy loading
    ↓
Small vanilla JS

Do not turn the entire homepage into a React application.

33. SVG Icons
Use lightweight SVG icons.

Preferred:

inline SVG

sprite

icon components

Avoid loading a huge icon library for 10 icons.

Create custom industrial SVG elements where appropriate:

gear

conveyor

welding spark

engineering ruler

electrical circuit

factory outline

Keep them optimized.

34. Responsive Design
Design mobile-first.

Breakpoints should support:

360px
390px
640px
768px
1024px
1280px
1440px+

Check:

iPhone-sized screens

Android phones

tablets

laptops

1440px desktop

wide monitors

Do not simply shrink the desktop layout.

Mobile hero must remain readable.

35. Component Architecture
Use reusable Astro components:

src/
├── components/
│   ├── Header.astro
│   ├── MobileMenu.astro
│   ├── Hero.astro
│   ├── TrustStrip.astro
│   ├── AboutSection.astro
│   ├── ProductCategories.astro
│   ├── ProductCard.astro
│   ├── FeaturedProducts.astro
│   ├── BrandsSection.astro
│   ├── ManufacturingSection.astro
│   ├── WhyUs.astro
│   ├── Applications.astro
│   ├── CatalogueCTA.astro
│   ├── ContactSection.astro
│   ├── Footer.astro
│   └── icons/
│
├── layouts/
│   └── BaseLayout.astro
│
├── pages/
│   ├── index.astro
│   ├── products/
│   ├── brands/
│   ├── manufacturing/
│   ├── about/
│   ├── catalogue/
│   └── contact/
│
├── content/
│   └── products/
│
├── styles/
│   └── global.css
│
└── utils/

Keep components small and composable.

36. Product Content Model
Create a content collection/schema.

Example:

{
  name,
  slug,
  category,
  brand,
  shortDescription,
  description,
  applications,
  specifications,
  images,
  datasheet,
  featured,
  available
}

Do not require every field.

Allow optional:

brand
model
datasheet
specifications

because trading products will vary.

37. Design System
Create centralized design tokens.

Define:

colors
spacing
container widths
border radius
shadows
typography
animation timing

Avoid random Tailwind values throughout components.

The visual system must remain consistent.

38. Micro-interactions
Use refined interactions:

nav underline

CTA arrow movement

product image zoom 1.02–1.04

technical line reveal

button press feedback

card border transition

scroll progress indicator

Avoid:

bouncing buttons

excessive parallax

rotating cards

flashy particle backgrounds

39. Industrial Details
Add subtle details that make the site feel engineered:

01 / PRODUCT RANGE
02 / MANUFACTURING
03 / INDUSTRIAL SUPPLY

Use:

tiny labels

technical grid

measurement marks

thin rules

orange status dots

section numbers

product codes

But keep them subordinate to the actual content.

40. Content Tone
Use professional B2B language.

Good:

Industrial products for demanding applications.

Product sourcing backed by technical understanding.

Trading and manufacturing under one roof.

Avoid exaggerated marketing:

The World's #1 Industrial Supplier

Unmatched Quality Guaranteed

India's Best Supplier

unless independently verified.

41. Free Image / Video Assets
Use reputable free sources such as:

Unsplash

Pexels

Industrial welding imagery is available from Unsplash, including free-to-use welding/factory photographs. 
U
Unsplash
+1

Pexels also has free industrial welding videos suitable for background/section footage. 
P
Pexels
+1

IMPORTANT:

Do not hotlink assets directly from those sites in production.

Instead:

Heading hierarchy:

H1
 ├── H2
 │    ├── H3
 │    └── H3
 └── H2

30. Accessibility
Target WCAG-friendly implementation.

Must include:

keyboard navigation

visible focus

proper labels

alt text

sufficient contrast

aria labels where required

skip-to-content link

accessible mobile menu

accessible dialogs

reduced motion support

31. Performance Budget
Treat performance as a first-class feature.

Target:

LCP: excellent
CLS: near zero
INP: excellent

Avoid:

giant JS bundles

unnecessary React

huge animation libraries

autoplay background video on poor connections

loading all images

unnecessary third-party scripts

icon libraries that import everything

The site should ship minimal JavaScript.

32. JavaScript Architecture
Use Astro islands only where required.

Example:

Static Astro
    ↓
Product cards
    ↓
No JS

Interactive:
    ↓
Mobile menu
    ↓
React/JS island

Interactive:
    ↓
Enquiry form
    ↓
Small JS

Interactive:
    ↓
Video lazy loading
    ↓
Small vanilla JS

Do not turn the entire homepage into a React application.

33. SVG Icons
Use lightweight SVG icons.

Preferred:

Create custom industrial SVG elements where appropriate:

gear

conveyor

welding spark

engineering ruler

electrical circuit

factory outline

34. Responsive Design
Design mobile-first.

360px
390px
640px
768px
1024px
1280px
1440px+

Check:

iPhone-sized screens

Android phones

tablets

laptops

1440px desktop

wide monitors

Select appropriate asset

Verify license

Download

Optimize

Rename descriptively

Store under /public/images or Astro-managed assets

Add correct attribution if the applicable license/source requires it

Suggested structure:

public/
├── images/
│   ├── hero/
│   ├── products/
│   ├── manufacturing/
│   ├── applications/
│   └── brands/
│
└── videos/
    └── hero/

42. Avoid Asset Bloat
Do NOT download 50 images just because they are available.

For the landing page initially use approximately:

1 hero image/video
1 company/manufacturing image
8–10 category images
3–5 supporting images

Optimize every image.

Do not use 5MB JPEGs.

43. SEO-Friendly URLs
Use:

/products/
 /products/welding-rods/
 /products/welding-machines/
 /products/cutting-discs/
 /products/motors/
 /products/gears/
 /products/conveyor-belts/
 /products/electrical-panels/
 /manufacturing/
 /brands/
 /catalogue/
 /about/
 /contact/

No:

/product?id=123

for the primary public URLs.

44. Final Quality Requirements
Before considering the work complete:

Run:

npm run build

Then test the production build.

Check:

no console errors

no broken images

no broken links

no layout shift

no hydration warnings

mobile menu works

keyboard navigation works

reduced motion works

images lazy-load

video does not block page load

sitemap exists

robots exists

metadata exists

JSON-LD is valid

canonical URL exists

Open Graph works

404 page exists

Run Lighthouse against the production build.

Aim for excellent:

Performance

Accessibility

Best Practices

SEO

Do not game Lighthouse by hiding meaningful content.

45. Skills.sh Instructions
Before implementing, inspect and use relevant skills from skills.sh.

Priority skills:

Astro Builder

Astro website architecture

SEO

Tailwind

content collections

business websites

Frontend Design

distinctive visual design

typography

spacing

motion

visual hierarchy

Web Design Guidelines

accessibility

interaction

responsive design

usability

Polish / Critique

final visual refinement

spacing

consistency

interaction quality

Do not blindly copy a skill's example design.

Use the skills as implementation/design guidance while maintaining the industrial visual direction specified in this prompt.

Relevant current skills.sh references include the Astro Builder skill for SEO-oriented Astro sites and the frontend-design skill for distinctive production interfaces. 
S
SkillsMP
+1

46. Important Implementation Rule
Do not stop after creating a generic first draft.

Iterate.

First:

Architecture
↓
Design system
↓
Hero
↓
Homepage sections
↓
Responsive implementation
↓
Animation
↓
Performance
↓
SEO
↓
Accessibility
↓
Visual polish

After implementation, inspect the page as a real user would.

Ask:

Does this immediately look like an industrial company?

Does it feel trustworthy?

Does the product hierarchy make sense?

Is the CTA obvious?

Does it look premium without looking flashy?

Are product images strong?

Is the typography professional?

Is the page too crowded?

Are animations helping or distracting?

Does mobile look intentionally designed?

Does the site feel fast?

Fix issues before finalizing.

47. Final Deliverable
Produce the actual working Astro project, not just a design description.

The homepage must be complete and production-oriented.

Include:

Astro setup

Tailwind CSS

components

responsive design

optimized images

lazy loading

video strategy

SVG decorations

smooth animations

SEO metadata

JSON-LD

sitemap

robots.txt

accessible navigation

contact/enquiry UI

product category architecture

catalogue CTA

reusable product-card architecture

Keep JavaScript minimal.

The final result should feel like a premium Indian industrial B2B supplier/manufacturer website, suitable for a company dealing with welding products, machinery, motors, gears, conveyor systems, electrical panels and industrial components.

The visual quality should be closer to a professionally designed industrial brand website than a template.

Do not use fake company facts.

Run Lighthouse against the production build.

Aim for excellent:

Performance

Accessibility

Best Practices

SEO

Do not game Lighthouse by hiding meaningful content.

45. Skills.sh Instructions
Before implementing, inspect and use relevant skills from skills.sh.

Priority skills:

Astro Builder

Astro website architecture

SEO

Tailwind

content collections

business websites

Frontend Design

distinctive visual design

typography

spacing

motion

visual hierarchy

Web Design Guidelines

accessibility

interaction

responsive design

usability

Polish / Critique

final visual refinement

spacing

consistency

interaction quality

Use placeholders where actual company information is required.

One important point about the image requirement
For “load images when user scrolls”, don't build a heavy custom lazy-loading system unnecessarily. Astro's image tooling + native loading="lazy" + responsive formats is the right baseline; use an IntersectionObserver mainly for things like below-the-fold video or special interactive media. This keeps the browser in control and reduces JavaScript. Astro is particularly suitable here because it can ship mostly static HTML with very little client JavaScript. 
A
Astro SEO Blog

47. Final Deliverable
Produce the actual working Astro project, not just a design description.

The homepage must be complete and production-oriented.  