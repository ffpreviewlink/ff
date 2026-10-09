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
    /** Language the review was written in. Never translated: it is shown as written. */
    lang: z.enum(["it", "en"]).default("it"),
  }),
});

export const collections = { reviews };
