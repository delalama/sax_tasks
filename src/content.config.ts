import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			tags: z.array(z.string()).default([]),
			objective: z.string().optional(),
			durationMinutes: z.number().int().positive().optional(),
			status: z.enum(['pendiente', 'en progreso', 'hecho']).default('pendiente'),
			heroImage: z.string().optional(),
			attachments: z.array(z.string()).default([]),
		}),
});

export const collections = { blog };
