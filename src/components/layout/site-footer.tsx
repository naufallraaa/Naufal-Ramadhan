import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/content";
import { getCopyrightYear } from "@/lib/date";

export async function SiteFooter({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale });
  const year = await getCopyrightYear();

  return (
    <footer
      id="contact"
      className="noise-overlay relative overflow-hidden border-t border-line bg-brand text-on-brand"
    >
      <Container className="relative z-1 py-16">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.12em] text-on-brand/60 uppercase">
            {t("footer.contactLabel")}
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-5 inline-block text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] font-medium tracking-[-0.03em] break-all transition-colors hover:text-on-brand/70"
          >
            {profile.email}
          </a>
        </Reveal>

        <div className="mt-10 flex flex-col gap-8 border-t border-on-brand/12 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[11px] tracking-[0.12em] text-on-brand/60 uppercase">
              {t("footer.note")}
            </p>
            <p className="mt-4 text-2xl font-medium tracking-tight">
              {profile.name}
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="text-sm text-on-brand/70 transition-colors hover:text-on-brand"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="font-mono text-[11px] tracking-[0.08em] text-on-brand/60 uppercase">
            © {year} — {t("footer.rights")}
          </p>
        </div>
      </Container>
    </footer>
  );
}
