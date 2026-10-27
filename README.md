# Portofolio — Naufal Ramadhan

Portofolio pribadi bilingual (Indonesia / English) dengan fokus data & AI.
Dibangun dengan Next.js 16 App Router, Tailwind CSS v4, dan next-intl.

> Status: fondasi siap (i18n, tema, layout dasar), arah visual terkunci —
> **A · Editorial Oxblood** (`design/style-tiles/a-editorial.html`). Section
> konten dan halaman detail project menyusul. Lihat
> [`docs/04-roadmap.md`](./docs/04-roadmap.md).

---

## Stack

| Layer           | Pilihan                               |
| --------------- | ------------------------------------- |
| Framework       | Next.js 16.4 (App Router, Turbopack)  |
| Bahasa          | TypeScript strict                     |
| Styling         | Tailwind CSS 4.3 (CSS-first `@theme`) |
| i18n            | next-intl 4.14 — `/id`, `/en`         |
| Validasi konten | Zod 4                                 |
| Ikon            | lucide-react                          |
| Animasi         | motion                                |
| Package manager | Bun                                   |
| Deploy          | Vercel                                |

## Menjalankan

```bash
bun install
bun run dev        # http://localhost:3000 → redirect ke /id
```

Script lain:

```bash
bun run build      # production build
bun run start      # jalankan hasil build
bun run typecheck  # tsc --noEmit
bun run lint       # eslint
bun run format     # prettier --write .
```

> Butuh Bun 1.4+. Node.js belum terpasang di mesin pengembangan saat ini,
> jadi semua script memakai `bun --bun`. Di Vercel, gunakan Build Command
> `next build` dengan Node bawaan Vercel.

## Struktur singkat

```text
docs/                 Dokumen perencanaan & desain
messages/             String UI per locale (id.json, en.json)
src/app/[locale]/     Layout + halaman per locale
src/components/       layout, theme, ui
src/i18n/             routing, request config, navigation helpers
src/lib/              utility, theme script, helper build-time
src/proxy.ts          next-intl middleware (Next 16: proxy, bukan middleware)
```

## Environment

Salin `.env.example` → `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Dokumentasi

| Dokumen                                                  | Isi                                      |
| -------------------------------------------------------- | ---------------------------------------- |
| [`docs/README.md`](./docs/README.md)                     | Index & keputusan yang dikunci           |
| [`docs/00-brief.md`](./docs/00-brief.md)                 | Tujuan, audiens, scope, kriteria sukses  |
| [`docs/01-tech-stack.md`](./docs/01-tech-stack.md)       | Stack, arsitektur, routing, deploy       |
| [`docs/02-design-system.md`](./docs/02-design-system.md) | Palet, tipografi, komponen, motion, a11y |
| [`docs/03-content-model.md`](./docs/03-content-model.md) | Tipe konten & schema Zod                 |
| [`docs/04-roadmap.md`](./docs/04-roadmap.md)             | Fase pengerjaan & definition of done     |
| [`docs/05-references.md`](./docs/05-references.md)       | Analisis referensi & spek style tile     |

Style tile eksplorasi ada di `design/style-tiles/` (HTML mandiri, tidak ikut
build). Arah terpilih: `a-editorial.html`; `b-quiet.html` dan `c-technical.html`
disimpan sebagai arsip.

## Lisensi

Konten dan identitas pribadi — semua hak dilindungi.
