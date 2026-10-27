import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Container } from "@/components/ui/container";
import { getCopyrightYear } from "@/lib/date";

export async function SiteFooter({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale });
  const year = await getCopyrightYear();

  return (
    <footer className="border-t border-line bg-brand text-on-brand">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[11px] tracking-[0.12em] text-on-brand/60 uppercase">
            {t("footer.note")}
          </p>
          <p className="mt-4 text-2xl font-medium tracking-tight">
            Naufal Ramadhan
          </p>
        </div>

        <p className="font-mono text-[11px] tracking-[0.08em] text-on-brand/60 uppercase">
          © {year} — {t("footer.rights")}
        </p>
      </Container>
    </footer>
  );
}
