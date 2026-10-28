import type { MetadataRoute } from "next";
import { projects } from "@/content";
import { routing } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    entries.push({
      url: `${base}/${locale}`,
      changeFrequency: "monthly",
      priority: 1,
    });

    for (const project of projects) {
      entries.push({
        url: `${base}/${locale}/projects/${project.slug}`,
        changeFrequency: "yearly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
