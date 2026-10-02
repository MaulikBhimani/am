import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    category: z.string(),
    brand: z.string().optional(),
    shortDescription: z.string(),
    description: z.string().optional(),
    images: z.array(z.string()).default([]),
    specifications: z.record(z.string()).optional(),
    applications: z.array(z.string()).default([]),
    datasheet: z.string().optional(),
    featured: z.boolean().default(false),
    available: z.boolean().default(true),
  }),
});

const categories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/categories' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    image: z.string().optional(),
    order: z.number().default(99),
  }),
});

const brands = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/brands' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    categories: z.array(z.string()).default([]),
    logo: z.string().optional(),
    website: z.string().optional(),
  }),
});

export const collections = { products, categories, brands };
