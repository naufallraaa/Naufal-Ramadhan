import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { organizations } from "@/content";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import { formatPeriod } from "@/lib/period";
import { TimelineList, TimelineRow } from "./timeline";

export async function OrganizationSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale });

  return (
    <Section id="organization">
      <Reveal>
        <SectionHeading
          label={t("sections.organizationLabel")}
          title={t("sections.organizationTitle")}
        />
      </Reveal>

      <TimelineList>
        {organizations.map((item, index) => (
          <TimelineRow
            key={item.id}
            delay={index * 0.08}
            period={formatPeriod(item.start, item.end, locale, t("common.present"))}
            title={pick(item.role, locale)}
            subtitle={item.name}
          >
            <p>{pick(item.summary, locale)}</p>
          </TimelineRow>
        ))}
      </TimelineList>
    </Section>
  );
}
