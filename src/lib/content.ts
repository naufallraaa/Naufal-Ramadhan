import { z } from "zod";
import type { Locale } from "@/i18n/routing";

const localized = z.object({
  id: z.string().min(1),
  en: z.string().min(1),
});

export type Localized = z.infer<typeof localized>;

export const profileSchema = z.object({
  name: z.string().min(1),
  initials: z.string().min(2).max(3),
  role: localized,
  location: z.string().min(1),
  email: z.email(),
  availability: localized,
  site: z.string().min(1),
  cv: z.string().min(1),
  socials: z
    .array(
      z.object({
        label: z.string().min(1),
        href: z.string().min(1),
        icon: z.enum(["github", "linkedin", "mail", "x", "scholar", "kaggle"]),
      }),
    )
    .min(1),
});

export const projectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: localized,
  summary: localized,
  year: z.number().int().min(2000).max(2100),
  role: localized,
  category: z.enum(["data", "ai", "web", "other"]),
  stack: z.array(z.string().min(1)).min(1),
  metrics: z
    .array(z.object({ label: localized, value: z.string().min(1) }))
    .optional(),
  links: z
    .object({
      live: z.url().optional(),
      repo: z.url().optional(),
      paper: z.url().optional(),
    })
    .optional(),
  cover: z.string().min(1),
  featured: z.boolean(),
});

export type Profile = z.infer<typeof profileSchema>;
export type Project = z.infer<typeof projectSchema>;

export function pick(value: Localized, locale: Locale): string {
  return value[locale];
}
