import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      kind: z.enum(['work', 'side']),
      order: z.number(),
      stack: z.array(z.string()),
      role: z.string().optional(),
      org: z.string().optional(),
      period: z.string().optional(),
      /** Short wins shown on the homepage slip (work projects). */
      highlights: z.array(z.string()).default([]),
      links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = { projects };
