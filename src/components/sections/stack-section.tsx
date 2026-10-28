import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Pop } from "@/components/ui/pop";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { techGroups } from "@/content";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";

export async function StackSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale });

  return (
    <Section id="stack">
      <Reveal>
        <SectionHeading
          label={t("sections.stackLabel")}
          title={t("sections.stackTitle")}
          description={t("sections.stackDescription")}
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="space-y-6">
        {techGroups.map((group) => (
          <div
            key={group.id}
            className="grid gap-3 border-t border-line pt-5 sm:grid-cols-[10rem_1fr] sm:gap-8"
          >
            <h3 className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
              {pick(group.label, locale)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, index) => (
                <Pop key={item} delay={index * 0.05}>
                  <Badge interactive>
                    {item}
                  </Badge>
                </Pop>
              ))}
            </div>
          </div>
        ))}
        </div>
      </Reveal>
    </Section>
  );
}
