import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// A guide is one Markdown file in src/content/guides. The file name becomes the address.
// Every field below is required, so a guide with a missing date or answer fails the build instead of going live broken.
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    /** The answer to the guide's question, shown first on the page. */
    answer: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    author: z.string(),
    /** File names of other guides to link at the end. */
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { guides };
