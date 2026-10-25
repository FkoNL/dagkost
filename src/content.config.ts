import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    servings: z.number().int().positive(),
    prepTime: z.number().int().nonnegative(),
    cookTime: z.number().int().nonnegative(),
    tags: z.array(z.string()).default([]),
    diet: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    ingredients: z.array(z.object({
      amount: z.number().optional(),
      unit: z.string().optional(),
      item: z.string(),
      note: z.string().optional()
    })),
    steps: z.array(z.string()).min(1),
    notes: z.array(z.string()).default([])
  })
});

export const collections = { recipes };
