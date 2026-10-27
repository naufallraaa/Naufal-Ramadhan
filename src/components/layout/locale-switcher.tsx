"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ label }: { label: string }) {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <nav
      aria-label={label}
      className="flex items-center gap-1 rounded-lg border border-line p-1"
    >
      {routing.locales.map((item) => {
        const isActive = item === locale;

        return (
          <Link
            key={item}
            href={pathname}
            locale={item}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "rounded-md px-2.5 py-1.5 font-mono text-[11px] tracking-[0.08em] uppercase transition-colors",
              isActive ? "bg-brand text-on-brand" : "text-muted hover:text-ink",
            )}
          >
            {item}
          </Link>
        );
      })}
    </nav>
  );
}
