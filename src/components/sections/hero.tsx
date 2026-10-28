import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { ButtonLink, buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { profile } from "@/content";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";

export async function Hero({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale });

  return (
    <section className="noise-overlay relative overflow-hidden bg-brand pt-[clamp(3rem,7vw,6rem)] pb-[clamp(4rem,9vw,8rem)] text-on-brand">
      <Container>
        <div className="glare-line relative z-1 max-w-[1100px] overflow-hidden rounded-2xl border border-on-brand/18 bg-brand-deep/35 shadow-[0_40px_80px_-40px_rgb(0_0_0/70%)]">
          <div className="flex h-10 items-center gap-3.5 border-b border-on-brand/12 px-4">
            <div className="flex gap-1.5" aria-hidden="true">
              {/* Traffic lights: standard macOS close/minimize/maximize colors. */}
              <i className="block size-2 rounded-full bg-[#ff5f57]" />
              <i className="block size-2 rounded-full bg-[#febc2e]" />
              <i className="block size-2 rounded-full bg-[#28c840]" />
            </div>
            <div className="max-w-[18rem] flex-1 rounded-full bg-on-brand/7 px-3 py-1 text-center font-mono text-[10px] tracking-[0.06em] text-on-brand/55">
              {profile.site}
            </div>
          </div>

          <div className="p-[clamp(1.5rem,5vw,4rem)]">
            <div
              className="anim-rise"
              style={{ animationDelay: "100ms" }}
            >
              <h1 className="max-w-[18ch] text-[clamp(3.25rem,7.5vw,6rem)] leading-[0.92] font-medium tracking-[-0.035em] text-balance">
                {t("hero.title")}{" "}
                <em className="font-serif font-normal tracking-[-0.01em]">
                  {t("hero.titleAccent")}
                </em>
              </h1>
            </div>

            <div
              className="anim-rise"
              style={{ animationDelay: "200ms" }}
            >
              <p className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] tracking-[0.12em] text-on-brand/60 uppercase">
              {[
                pick(profile.role, locale),
                profile.location,
              ].map((item, index) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-4 whitespace-nowrap"
                >
                  {index > 0 ? (
                    <span aria-hidden="true" className="text-on-brand/30">
                      ·
                    </span>
                  ) : null}
                  {item}
                </span>
              ))}
              </p>
            </div>

            <div
              className="anim-rise"
              style={{ animationDelay: "300ms" }}
            >
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/cv-naufal-ramadhan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonStyles({ variant: "solid" })}
                >
                  {t("hero.ctaCv")}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
                <ButtonLink href="/#work" variant="ghost">
                  {t("hero.ctaWork")}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
