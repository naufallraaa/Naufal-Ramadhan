import { z } from "zod";
import type { Locale } from "@/i18n/routing";

export const localizedSchema = z.object({
  id: z.string().min(1),
  en: z.string().min(1),
});

export type Localized = z.infer<typeof localizedSchema>;

/** `YYYY-MM`; validated so the period formatter never gets a bad string. */
const period = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/);

export const profileSchema = z.object({
  name: z.string().min(1),
  initials: z.string().min(2).max(3),
  role: localizedSchema,
  location: z.string().min(1),
  email: z.email(),
  availability: localizedSchema.optional(),
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

export const aboutSchema = z.object({
  paragraphs: z.array(localizedSchema).min(1),
  facts: z
    .array(
      z.object({
        label: localizedSchema,
        value: localizedSchema,
      }),
    )
    .min(1),
});

export const experienceSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  company: z.string().min(1),
  role: localizedSchema,
  location: z.string().optional(),
  start: period,
  end: period.nullable(),
  summary: localizedSchema,
  highlights: z.array(localizedSchema).max(3).optional(),
  stack: z.array(z.string().min(1)).min(1),
  url: z.url().optional(),
});

export const educationSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  institution: z.string().min(1),
  degree: localizedSchema,
  field: localizedSchema,
  start: period,
  end: period.nullable(),
  gpa: z.string().optional(),
  highlights: z.array(localizedSchema).optional(),
});

export const organizationSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  role: localizedSchema,
  start: period,
  end: period.nullable(),
  summary: localizedSchema,
});

export const techGroupSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  label: localizedSchema,
  items: z.array(z.string().min(1)).min(1),
});

export const projectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: localizedSchema,
  summary: localizedSchema,
  year: z.number().int().min(2000).max(2100),
  role: localizedSchema,
  category: z.enum(["data", "ai", "web", "other"]),
  stack: z.array(z.string().min(1)).min(1),
  metrics: z
    .array(z.object({ label: localizedSchema, value: z.string().min(1) }))
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
  // Long-form sebagai array paragraf (bukan satu blok MDX) supaya render
  // detail page tidak butuh parser.
  content: z.array(localizedSchema).optional(),
});

export type Profile = z.infer<typeof profileSchema>;
export type About = z.infer<typeof aboutSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Education = z.infer<typeof educationSchema>;
export type Organization = z.infer<typeof organizationSchema>;
export type TechGroup = z.infer<typeof techGroupSchema>;
export type Project = z.infer<typeof projectSchema>;

export function pick(value: Localized, locale: Locale): string {
  return value[locale];
}
