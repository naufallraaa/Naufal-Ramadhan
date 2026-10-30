import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechIcon } from "@/components/ui/tech-icon";
import { experiences } from "@/content";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import { formatPeriod } from "@/lib/period";
import { TimelineList, TimelineRow } from "./timeline";

export async function ExperienceSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale });

  return (
    <Section id="experience">
      <Reveal>
        <SectionHeading
          label={t("sections.experienceLabel")}
          title={t("sections.experienceTitle")}
          description={t("sections.experienceDescription")}
        />
      </Reveal>

      <TimelineList>
        {experiences.map((item, index) => (
          <TimelineRow
            key={item.id}
            delay={index * 0.08}
            period={formatPeriod(
              item.start,
              item.end,
              locale,
              t("common.present"),
            )}
            title={pick(item.role, locale)}
            subtitle={[item.company, item.location].filter(Boolean).join(" · ")}
          >
            <p>{pick(item.summary, locale)}</p>

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

            <div className="mt-4 flex flex-wrap gap-1.5">
              {item.stack.map((tech) => (
                <Badge key={tech} className="px-2.5 py-1 text-[11px]">
                  <TechIcon name={tech} className="size-3" />
                  <span>{tech}</span>
                </Badge>
              ))}
            </div>
          </TimelineRow>
        ))}
      </TimelineList>
    </Section>
  );
}
