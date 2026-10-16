import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Client reviews collected on Trustpilot, copied here by hand (free plan, no widgets).
// How to add one: see src/content/reviews/README.md
const reviews = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/reviews" }),
  schema: z.object({
    author: z.string().min(1),
    rating: z.number().int().min(1).max(5),
    title: z.string().min(1),
    text: z.string().min(1),
    /** Day the review was published on Trustpilot, as YYYY-MM-DD. */
    date: z.coerce.date(),
    /** Link to this review on Trustpilot. */
    url: z
      .url()
      .refine((u) => new URL(u).hostname.endsWith("trustpilot.com"), "must be a trustpilot.com link"),
    /** Project or client the review is about (optional). */
    project: z.string().optional(),
    /** Short description of the author shown instead of their name (2-6 words), per site language. Optional: the UI falls back to a neutral label. */
    descriptor: z.object({ it: z.string().min(1), en: z.string().min(1) }).optional(),
    /** Show `author` as the bold name above the descriptor. Off by default: names are hidden unless the author agreed. */
    showAuthor: z.boolean().default(false),
    /** Position in the section: lowest first, the first one is shown large. Ties fall back to newest first. */
    order: z.number().int().default(100),
    /** Language the review was written in. Never translated: it is shown as written. */
    lang: z.enum(["it", "en"]).default("it"),
  }),
});

export const collections = { reviews };
