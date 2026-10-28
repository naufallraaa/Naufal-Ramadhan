import { AboutSection } from "@/components/sections/about-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Hero } from "@/components/sections/hero";
import { OrganizationSection } from "@/components/sections/organization-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { StackSection } from "@/components/sections/stack-section";
import { TickerStrip } from "@/components/sections/ticker-strip";

import { profile } from "@/content";
import { pick } from "@/lib/content";
import { getSiteUrl } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: profile.name,
        url: getSiteUrl(),
        inLanguage: typedLocale,
      },
      {
        "@type": "Person",
        name: profile.name,
        url: `${getSiteUrl()}/${typedLocale}`,
        email: `mailto:${profile.email}`,
        jobTitle: pick(profile.role, typedLocale),
        address: {
          "@type": "PostalAddress",
          addressLocality: profile.location,
        },
        sameAs: profile.socials
          .filter((social) => social.icon !== "mail")
          .map((social) => social.href),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero locale={typedLocale} />
      <TickerStrip />
      <AboutSection locale={typedLocale} />
      <ExperienceSection locale={typedLocale} />
      <ProjectsSection locale={typedLocale} />
      <StackSection locale={typedLocale} />
      <EducationSection locale={typedLocale} />
      <OrganizationSection locale={typedLocale} />
    </>
  );
}
