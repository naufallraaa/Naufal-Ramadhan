# 01 — Tech Stack & Arsitektur

## Stack final

| Layer         | Pilihan              | Versi  | Alasan                                                    |
| ------------- | -------------------- | ------ | --------------------------------------------------------- |
| Framework     | Next.js (App Router) | 16.4.3 | SSG, image/font optimization, deploy native Vercel        |
| UI            | React                | 19.3.1 | Server Components → JS client minimal                     |
| Bahasa        | TypeScript (strict)  | —      | Konten & props type-safe                                  |
| Styling       | Tailwind CSS         | 4.3.3  | Config CSS-first via `@theme`, tanpa `tailwind.config.js` |
| i18n          | next-intl            | 4.14.9 | Routing locale, metadata, static rendering                |
| Validasi      | Zod                  | 4.6.7  | Cek data konten saat build                                |
| Ikon          | lucide-react         | 1.62.0 | Ringan, konsisten                                         |
| Animasi       | motion               | 14.7.1 | Hanya micro-interaction & reveal                          |
| Runtime lokal | Bun                  | 1.4.4  | Sudah tersedia di mesin                                   |
| Deploy        | Vercel               | —      | Preview per branch, gratis untuk personal                 |

## Environment

Saat ini terpasang:

```text
bun 1.4.4
git 2.43.0
```

Node.js **belum ada**. Next.js secara resmi menargetkan Node ≥ 20.9.

**Strategi:**

- Development lokal: `bun --bun next dev` (Bun sebagai runtime).
- Build lokal: `bun --bun next build`.
- Build Vercel: `next build` dengan Node bawaan Vercel (bukan `bun --bun`).
- Jika `bun --bun next build` bermasalah: install Node 24 LTS (Krypton) via
  `nvm`/`fnm`, tetap pakai Bun untuk install dependency.

## Setup awal

```bash
# di folder project (kosong)
bun create next-app@latest . \
  --ts --tailwind --eslint --app --src-dir \
  --import-alias "@/*" --use-bun --yes

bun add next-intl zod lucide-react motion
bun add -d prettier prettier-plugin-tailwindcss

git init
```

`package.json` scripts:

```jsonc
{
  "scripts": {
    "dev": "bun --bun next dev",
    "build": "bun --bun next build",
    "start": "bun --bun next start",
    "lint": "eslint",
    "typecheck": "tsc --noEmit",
  },
}
```

> Vercel: override Build Command menjadi `next build` di project settings.
> Biarkan Install Command mengikuti `bun.lock` (Bun install).

## Struktur folder

```text
.
├── messages/
│   ├── id.json
│   └── en.json
├── public/
│   ├── images/
│   ├── cv.pdf
│   └── og/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── projects/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── not-found.tsx
│   │   │   └── opengraph-image.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/          # Container, Button, Badge, SectionHeading
│   │   ├── layout/      # Header, Footer, LocaleSwitcher, ThemeToggle
│   │   └── sections/    # Hero, About, Experience, Projects, Stack, Education, Organization, Contact
│   ├── content/         # profile, experience, projects, education, organizations, stack
│   ├── i18n/            # routing.ts, request.ts, navigation.ts
│   ├── lib/             # seo.ts, content.ts, utils.ts
│   └── proxy.ts
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

## Routing

| Route                       | Isi                                              |
| --------------------------- | ------------------------------------------------ |
| `/`                         | Redirect ke `/id`                                |
| `/[locale]`                 | Homepage satu halaman                            |
| `/[locale]/projects`        | Arsip semua project (opsional, bisa jadi anchor) |
| `/[locale]/projects/[slug]` | Detail project                                   |
| `/sitemap.xml`              | Sitemap dua locale                               |
| `/robots.txt`               | Robots                                           |

`localePrefix: 'always'`, `defaultLocale: 'id'`, locales `['id', 'en']`.

## i18n dengan next-intl

File kunci:

```ts
// src/i18n/routing.ts
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["id", "en"],
  defaultLocale: "id",
  localePrefix: "always",
});
```

```ts
// src/proxy.ts  (Next.js 16: middleware.ts sudah diganti proxy.ts)
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
```

```ts
// next.config.ts
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
```

- Teks UI → `messages/id.json` & `messages/en.json`.
- Konten (project, experience, dll) → objek bilingual di `src/content/`.
- Static rendering: `generateStaticParams()` di `[locale]/layout.tsx`.
- Metadata per locale via `getTranslations({ locale })`.

## Styling

Tailwind v4, CSS-first:

```css
/* src/app/globals.css */
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-brand-900: #4a0404;
  --color-brand-950: #2e0202;
  --color-brand-700: #6b0808;
  --color-brand-300: #e26a5e;
  --color-ivory: #faf7f4;
  --color-surface: #f2eae6;
  --color-ink: #1c1414;
  --color-muted: #6b5d59;
  --color-line: #e5d8d3;
  --color-night: #140b0a;
  --color-night-surface: #1e1110;
  --color-cream: #f4edea;
  --color-night-muted: #a8938d;
}
```

Dark mode memakai class `.dark` di `<html>` + localStorage, dengan inline script
kecil di `<head>` untuk mencegah flash.

## Font

| Peran                  | Font             | Sumber                            |
| ---------------------- | ---------------- | --------------------------------- |
| Sans (headline & body) | Geist            | Google Fonts / `next/font/google` |
| Serif italic (aksen)   | Instrument Serif | Google Fonts                      |
| Mono (label & meta)    | JetBrains Mono   | Google Fonts                      |

Dimuat via `next/font` supaya self-hosted, tanpa request ke Google saat runtime.

## SEO

- `generateMetadata()` per halaman & locale.
- `alternates.languages` untuk hreflang `id` / `en` / `x-default`.
- `sitemap.ts` berisi kedua locale.
- `robots.ts` mengizinkan crawl.
- `opengraph-image.tsx` dinamis (ImageResponse) dengan nama + role.
- JSON-LD `Person` + `WebSite`.
- Canonical memakai `NEXT_PUBLIC_SITE_URL`.

## Deploy

1. Push ke GitHub.
2. Import repo di Vercel.
3. Framework preset: Next.js.
4. Install Command: `bun install` (otomatis jika `bun.lock` terdeteksi).
5. Build Command: `next build`.
6. Set `NEXT_PUBLIC_SITE_URL`.
7. Preview deployment untuk tiap PR; production dari `main`.

## Risiko teknis

| Risiko                                       | Mitigasi                                                                                         |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Turbopack/Next build gagal di Bun            | Fallback Node 24 LTS; Vercel build tetap Node                                                    |
| `proxy.ts` salah konfigurasi → redirect loop | Uji `/`, `/id`, `/en`, `/id/projects/x`, file statis                                             |
| Font Gloock tidak punya italic asli          | Sudah dicek: Gloock hanya weight 400 normal. Diganti **Instrument Serif** italic (tersedia asli) |
| Bundle motion terlalu besar                  | Import `motion/react` hanya di komponen client yang perlu                                        |
| Konten EN lebih panjang                      | Uji layout dengan teks 1.3× panjang versi ID                                                     |
