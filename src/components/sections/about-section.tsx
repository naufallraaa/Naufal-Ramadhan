import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { about } from "@/content";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";

export async function AboutSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale });

  return (
    <Section id="about" divided={false}>
      <Reveal>
        <SectionHeading
          label={t("sections.aboutLabel")}
          title={t("sections.aboutTitle")}
        />
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div className="max-w-[62ch] space-y-6">
          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <p className="text-[17px] leading-[1.75] text-muted first:text-ink">
                {pick(paragraph, locale)}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <dl className="grid h-fit gap-0 self-start border-t border-line">
            {about.facts.map((fact) => (
              <div
                key={fact.label.en}
                className="flex items-baseline justify-between gap-6 border-b border-line py-4"
              >
                <dt className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
                  {pick(fact.label, locale)}
                </dt>
                <dd className="text-right text-sm">{pick(fact.value, locale)}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
