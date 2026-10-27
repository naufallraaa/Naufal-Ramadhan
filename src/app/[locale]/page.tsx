import { Check } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const checks = [
  "framework",
  "language",
  "style",
  "i18n",
  "content",
  "runtime",
] as const;

const palette = [
  { name: "Brand", light: "#4A0404", dark: "#4A0404" },
  { name: "Background", light: "#FAF7F4", dark: "#140B0A" },
  { name: "Surface", light: "#F2EAE6", dark: "#1E1110" },
  { name: "Text", light: "#1C1414", dark: "#F4EDEA" },
  { name: "Muted", light: "#6B5D59", dark: "#A8938D" },
  { name: "Accent", light: "#6B0808", dark: "#E26A5E" },
];

export default async function HomePage() {
  const t = await getTranslations();

  return (
    <>
      <section className="bg-brand text-on-brand">
        <Container className="py-20 sm:py-28 lg:py-32">
          <p className="font-mono text-[11px] tracking-[0.14em] text-on-brand/60 uppercase">
            {t("hero.overline")}
          </p>

          <h1 className="mt-8 max-w-4xl text-[clamp(3.25rem,7.5vw,6rem)] leading-[0.92] font-medium tracking-[-0.035em] text-balance">
            {t("hero.title")}{" "}
            <em className="font-serif font-normal">{t("hero.titleAccent")}</em>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-on-brand/75 sm:text-lg">
            {t("hero.subtitle")}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="/#setup" variant="solid">
              {t("hero.ctaWork")}
            </ButtonLink>
            <span
              aria-disabled="true"
              title="CV placeholder — belum tersedia"
              className="inline-flex cursor-not-allowed items-center justify-center rounded-[10px] border border-on-brand/30 px-5 py-3 text-sm font-medium text-on-brand/50"
            >
              {t("hero.ctaCv")}
            </span>
          </div>
        </Container>
      </section>

      <Section id="setup" divided={false}>
        <SectionHeading
          label={t("setup.badge")}
          title={t("setup.title")}
          description={t("setup.description")}
        />

        <ul className="grid gap-3 sm:grid-cols-2">
          {checks.map((key) => (
            <li
              key={key}
              className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4"
            >
              <Check
                className="mt-0.5 size-4 shrink-0 text-brand-text"
                aria-hidden="true"
              />
              <span className="text-sm leading-relaxed">
                {t(`setup.checks.${key}`)}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-16 border-t border-line pt-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
              {t("setup.palette")}
            </h3>
            <Badge>{t("setup.direction")}</Badge>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {palette.map((item) => (
              <div
                key={item.name}
                className="overflow-hidden rounded-xl border border-line"
              >
                <div
                  className="h-20"
                  style={{
                    background: `linear-gradient(90deg, ${item.light} 50%, ${item.dark} 50%)`,
                  }}
                />
                <div className="bg-bg p-3">
                  <p className="text-xs font-medium">{item.name}</p>
                  <p className="mt-1 font-mono text-[10px] text-muted">
                    {item.light} / {item.dark}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
