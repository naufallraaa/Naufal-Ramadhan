import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/content";
import { getCopyrightYear } from "@/lib/date";

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "github") {
    return (
      <svg
        className="size-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    );
  }
  if (icon === "linkedin") {
    return (
      <svg
        className="size-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
  return (
    <svg
      className="size-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

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

          <ul className="flex items-center gap-3">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex size-10 items-center justify-center rounded-xl border border-on-brand/15 bg-on-brand/5 text-on-brand/75 transition-all duration-200 hover:scale-110 hover:border-on-brand/40 hover:bg-on-brand/15 hover:text-on-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-brand"
                >
                  <SocialIcon icon={social.icon} />
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
