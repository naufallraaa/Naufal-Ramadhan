import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { Container } from "@/components/ui/container";
import { LocaleSwitcher } from "./locale-switcher";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const navItems = [
  { key: "work", href: "/#work" },
  { key: "contact", href: "/#contact" },
] as const;

export async function SiteHeader({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale });

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-baseline gap-2.5 text-[15px] font-medium tracking-[-0.02em] text-ink transition-colors hover:text-brand-text"
        >
          Naufal Ramadhan
          <span className="text-brand-text">/ 01</span>
        </Link>

        <nav
          aria-label={t("a11y.primaryNav")}
          className="hidden items-center gap-7 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher label={t("a11y.switchLocale")} />
          <ThemeToggle label={t("a11y.toggleTheme")} />
        </div>
      </Container>
    </header>
  );
}
