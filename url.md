├── products/
│
│   └── [category]/
│       └── [product]
│
├── brands/
│   └── [brand]
│
├── manufacturing/
├── catalogue/
├── about/
├── contact/
└── enquiry/
/products/welding-rods/mangalam-7018/
/products/welding-machines/vulcan-arc-machine/
/products/cutting-discs/yuri-cutting-disc/
/products/motors/crompton-3-phase-motor/
/products/motors/bharat-bijlee-motor/
/products/gears/industrial-helical-gear/
/products/conveyor-belts/rubber-conveyor-belt/
/products/electrical-panels/industrial-control-panel/

src/pages/products/[category]/[product].astro

products/
├── mangalam-7018.md
├── vulcan-arc-machine.md
├── yuri-cutting-disc.md
├── crompton-3-phase-motor.md
├── bharat-bijlee-motor.md
└── rubber-conveyor-belt.md

---
name: "Mangalam 7018 Welding Rod"
slug: "mangalam-7018"
category: "welding-rods"
brand: "Mangalam"

description: "Industrial welding electrode..."

images:
  - "/images/products/mangalam-7018-1.webp"
  - "/images/products/mangalam-7018-2.webp"

specifications:
  diameter: "3.15 mm"
  material: "..."
  type: "..."

applications:
  - "Fabrication"
  - "Maintenance"
  - "Engineering"

featured: true
---

                     PRODUCT DATABASE
                           │
                           ▼
                ┌─────────────────────┐
                │   PRODUCT TEMPLATE  │
                └─────────────────────┘
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
     Welding Rod       Motor            Cutting Disc
          │                │                │
          ▼                ▼                ▼
       Product           Product          Product
        Page              Page             Page
Same thing for brands
One brand template:

src/pages/brands/[brand].astro

Then:

/brands/mangalam/
/brands/vulcan-welding/
/brands/yuri-smart-engineering/
/brands/crompton/
/brands/bharat-bijlee/

Same page structure.

The brand data changes.

Same thing for categories
One category template:

src/pages/products/[category]/index.astro

Then:

/products/welding-rods/
/products/welding-machines/
/products/cutting-discs/
/products/motors/
/products/gears/
/products/conveyor-belts/
/products/electrical-panels/

Same design.

Your actual Astro structure
I'd therefore build it approximately like this:

src/
│
├── content/
│   │
│   ├── products/
│   │   ├── mangalam-7018.md
│   │   ├── vulcan-arc-machine.md
│   │   ├── yuri-cutting-disc.md
│   │   ├── crompton-motor.md
│   │   └── ...
│   │
│   ├── categories/
│   │   ├── welding-rods.md
│   │   ├── welding-machines.md
│   │   ├── motors.md
│   │   └── ...
│   │
│   └── brands/
│       ├── mangalam.md
│       ├── crompton.md
│       └── ...
│
├── pages/
│   │
│   ├── index.astro
│   ├── about.astro
│   ├── contact.astro
│   ├── catalogue.astro
│   ├── manufacturing.astro
│   │
│   ├── products/
│   │   ├── index.astro
│   │   ├── [category]/
│   │   │   ├── index.astro
│   │   │   └── [product].astro
│   │
│   ├── brands/
│   │   ├── index.astro
│   │   └── [brand].astro
│   │
│   └── enquiry.astro
│
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── ProductCard.astro
│   ├── ProductGrid.astro
│   ├── ProductGallery.astro
│   ├── ProductSpecifications.astro
│   ├── ProductEnquiry.astro
│   ├── CategoryCard.astro
│   ├── BrandCard.astro
│   └── ...
│
└── layouts/
    └── Layout.astro

This is much cleaner.

Product detail page
Every product gets the same structure:

┌──────────────────────────────────────────┐
│ Breadcrumb                               │
│ Home / Products / Motors / Product       │
├──────────────────────────────────────────┤
│                                          │
│ Product Images       Product Information │
│                                          │
│ [IMAGE]               Brand              │
│ [IMAGE]               Product Name       │
│ [IMAGE]               Short Description  │
│                       Specifications      │
│                       [Request Quote]     │
│                       [WhatsApp]          │
│                                          │
├──────────────────────────────────────────┤
│ Product Description                      │
├──────────────────────────────────────────┤
│ Technical Specifications                 │
├──────────────────────────────────────────┤
│ Applications                             │
├──────────────────────────────────────────┤
│ Datasheet / Catalogue                   │
├──────────────────────────────────────────┤
│ Related Products                         │
├──────────────────────────────────────────┤
│ Request Product Enquiry                  │
└──────────────────────────────────────────┘

Whether it is a motor, welding rod, conveyor belt or electrical panel, the template remains the same.

If a particular product doesn't have a specification, that field simply doesn't render.

This is also better for SEO
For example:

/products/motors/crompton-3-phase-motor/

Google sees a proper individual product page.

That page has:

Unique title

Unique description

Product schema

Product images

Specifications

Applications

Breadcrumb

Internal links

Related products

Enquiry CTA

But your developer only maintains one product template.

The important distinction
There are three different things:

1. URL
Different:

/products/motors/crompton-motor/
/products/motors/bharat-bijlee-motor/

2. Data
Different:

Crompton
Bharat Bijlee

3. Template
Same:

[ProductDetailTemplate]

That's exactly how I would build your site.

Final architecture
Your mental model should be:

                  ASTRO WEBSITE
                       │
        ┌──────────────┼───────────────┐
        │              │               │
     Products        Brands       Manufacturing
        │
        ▼
    Categories
        │
        ▼
     Products
        │
        ▼
 ONE PRODUCT TEMPLATE
        │
        ├── Product A
        ├── Product B
        ├── Product C
        ├── Product D
        └── Product 500