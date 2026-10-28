import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/content";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import { TimelineList, TimelineRow } from "./timeline";

export async function EducationSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale });

  return (
    <Section id="education">
      <Reveal>
        <SectionHeading
          label={t("sections.educationLabel")}
          title={t("sections.educationTitle")}
        />
      </Reveal>

      <TimelineList>
        {education.map((item, index) => {
          const startYear = item.start.split("-")[0];
          const endYear = item.end
            ? item.end.split("-")[0]
            : t("common.present");
          const yearPeriod = `${startYear} — ${endYear}`;

          return (
            <TimelineRow
              key={item.id}
              delay={index * 0.08}
              period={yearPeriod}
              title={pick(item.field, locale)}
              subtitle={[item.institution, pick(item.degree, locale)]
                .filter(Boolean)
                .join(" · ")}
            >
              {item.highlights?.length ? (
                <ul className="mt-3 space-y-2">
                  {item.highlights.map((highlight, index) => (
                    <li key={index} className="flex gap-2">
                      <span aria-hidden="true" className="text-brand-text">
                        —
                      </span>
                      <span>{pick(highlight, locale)}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </TimelineRow>
          );
        })}
      </TimelineList>
    </Section>
  );
}
