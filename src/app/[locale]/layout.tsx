import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { TerminalPreloader } from "@/components/ui/terminal-preloader";
import { routing } from "@/i18n/routing";
import { themeScript, preloaderScript } from "@/lib/theme";
import { getSiteUrl } from "@/lib/seo";
import "../globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "meta" });
  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        id: "/id",
        en: "/en",
        "x-default": "/id",
      },
    },
    openGraph: {
      type: "website",
      url: `/${locale}`,
      title: t("title"),
      description: t("description"),
      locale: locale === "id" ? "id_ID" : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "a11y" });

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geist.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} has-preloader`}
    >
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
html.has-preloader, html.has-preloader body {
  background-color: #100101 !important;
  overflow: hidden !important;
  height: 100% !important;
}
html.has-preloader #main,
html.has-preloader header,
html.has-preloader footer {
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
}
`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript + "\n" + preloaderScript,
          }}
        />
      </head>
      <body className="flex min-h-dvh flex-col bg-bg text-ink antialiased">
        <NextIntlClientProvider>
          <TerminalPreloader />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:text-on-brand"
          >
            {t("skipToContent")}
          </a>

          <SiteHeader locale={locale} />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
