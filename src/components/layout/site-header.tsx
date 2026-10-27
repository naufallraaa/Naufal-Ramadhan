import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { Container } from "@/components/ui/container";
import { LocaleSwitcher } from "./locale-switcher";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export async function SiteHeader({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale });

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-ink transition-colors hover:text-brand-text"
        >
          Naufal Ramadhan
        </Link>

        <div className="flex items-center gap-2">
          <LocaleSwitcher label={t("a11y.switchLocale")} />
          <ThemeToggle label={t("a11y.toggleTheme")} />
        </div>
      </Container>
    </header>
  );
}
