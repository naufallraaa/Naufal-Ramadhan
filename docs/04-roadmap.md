# 04 — Roadmap

Urutan kerja, bukan estimasi waktu. Setiap fase harus selesai dan dicek
sebelum lanjut.

---

## Fase 0 — Perencanaan ✅

- [x] Tentukan stack (Next.js + Bun + Vercel)
- [x] Tentukan bahasa (ID/EN)
- [x] Tentukan struktur section
- [x] Tentukan warna inti `#4A0404`
- [x] Tentukan layout _oxblood statement_
- [x] Pilih referensi utama (Perry Wang)
- [x] Tentukan hero browser window
- [x] Tulis dokumen ini

**Output:** 7 file markdown di folder plan.

---

## Fase 1 — Scaffold & tooling ✅

- [x] `bun create next-app@latest` dengan TS, Tailwind, ESLint, App Router, `src/`
      (di-scaffold di folder lowercase lalu dipindah, karena npm menolak nama
      folder `Portofolio`)
- [x] `bun add next-intl zod lucide-react motion`
- [x] `bun add -d prettier prettier-plugin-tailwindcss`
- [x] Set scripts `bun --bun next dev/build/start` + `typecheck`/`format`
- [x] Konfigurasi Prettier + format seluruh file
- [x] `git init` + commit awal
- [x] `bun --bun next build` berhasil (Next 16.4.3, 6 halaman statis)

**Selesai jika:** halaman default Next.js tampil, lint & typecheck bersih,
`bun --bun next build` berhasil (atau fallback Node didokumentasikan).
→ Terpenuhi. Build lokal pakai Bun, Vercel tetap `next build` dengan Node.

---

## Fase 2 — Style tiles & keputusan visual ✅

- [x] Buat `design/style-tiles/a-editorial.html`
- [x] Buat `design/style-tiles/b-quiet.html`
- [x] Buat `design/style-tiles/c-technical.html`
- [x] Tiap tile: navbar, hero browser window, satu project card, satu baris
      experience, badge stack, footer, toggle light/dark
- [x] Buka di browser desktop + mobile, bandingkan
- [x] Pilih satu arah, catat revisi
- [x] Finalisasi token warna & tipografi

**Selesai jika:** satu arah dipilih dan daftar revisi disetujui.
→ Arah dipilih: **A — Editorial Oxblood**. Tile B dan C disimpan sebagai arsip
di `design/style-tiles/`, tidak dipakai. Token warna & tipografi di
`docs/02-design-system.md` sudah sesuai tile A, jadi tidak ada perubahan token.

---

## Fase 3 — Fondasi ✅

- [x] Pasang `next-intl` (`routing.ts`, `request.ts`, `navigation.ts`, `proxy.ts`)
- [x] `messages/id.json` + `messages/en.json`
- [x] `src/app/[locale]/layout.tsx` + `generateStaticParams`
- [x] Font: Geist, Instrument Serif (italic), JetBrains Mono via `next/font`
- [x] `globals.css`: `@theme`, token light/dark, reset dasar
- [x] Theme toggle tanpa flash (`localStorage` + inline script)
- [x] Header, footer, locale switcher
- [x] Komponen dasar: Container, Section, SectionHeading, Button/ButtonLink, Badge
- [x] Skip link + landmark

**Selesai jika:** `/` redirect ke `/id`, `/en` berfungsi, toggle tema persist,
tidak ada flash, keyboard navigation dasar berjalan.

---

## Fase 4 — Section homepage

Urutan implementasi:

1. [x] Hero (browser window, noise, glare, CTA)
2. [ ] About
3. [ ] Experience (timeline)
4. [x] Projects (featured grid + card)
5. [ ] Tech Stack (badge per kategori)
6. [ ] Education (timeline)
7. [ ] Organization (timeline)
8. [x] Contact + footer

Catatan: card project belum me-link ke detail karena route
`/[locale]/projects/[slug]` baru dibuat di Fase 5 — `ProjectCard` menerima prop
`href` opsional agar tidak ada link ke 404. Nav header sementara hanya memuat
anchor yang sudah ada (`#work`, `#contact`).

**Selesai jika:** semua section terisi konten placeholder, responsif 360–1440,
tidak ada overflow horizontal, light/dark sama-sama rapi.

---

## Fase 5 — Halaman detail project

- [ ] Route `/[locale]/projects/[slug]`
- [ ] `generateStaticParams` untuk semua slug × locale
- [ ] Layout: cover, judul, meta, metrik, isi, links
- [ ] `generateMetadata` per project
- [ ] 404 untuk slug tidak dikenal
- [ ] Tombol kembali + next/previous project

**Selesai jika:** semua project bisa dibuka di kedua locale, metadata benar,
tidak ada broken link.

---

## Fase 6 — SEO, a11y, performa

- [ ] Metadata + hreflang + canonical
- [ ] `sitemap.ts` + `robots.ts`
- [ ] OG image dinamis
- [ ] JSON-LD `Person`
- [ ] Audit keyboard & screen reader dasar
- [ ] Cek kontras semua pasangan
- [ ] `prefers-reduced-motion`
- [ ] Optimasi gambar (`next/image`, WebP/AVIF)
- [ ] Lighthouse mobile ≥ 95 (perf & a11y)
- [ ] Uji layout dengan teks EN 1.3× lebih panjang

**Selesai jika:** target di `00-brief.md` terpenuhi.

---

## Fase 7 — Deploy

- [ ] Push ke GitHub
- [ ] Import ke Vercel
- [ ] Set Build Command `next build`
- [ ] Set `NEXT_PUBLIC_SITE_URL`
- [ ] Cek preview deployment
- [ ] Smoke test production: `/id`, `/en`, project detail, toggle, switcher
- [ ] Pasang domain (opsional)

**Selesai jika:** production hijau, semua route 200, tidak ada console error.

---

## Definition of Done (global)

- Tidak ada teks hardcoded di komponen.
- Semua konten lewat validasi Zod.
- Light & dark sama-sama diuji.
- ID & EN sama-sama diuji.
- Keyboard-only bisa menyelesaikan semua tugas.
- Tidak ada layout shift saat font/gambar dimuat.
- `bun run lint` dan `bun run typecheck` bersih.
- README repo berisi cara menjalankan & menambah konten.

---

## Status saat ini

| Fase            | Status                                  |
| --------------- | --------------------------------------- |
| 0 — Perencanaan | ✅ selesai                              |
| 1 — Scaffold    | ✅ selesai                              |
| 2 — Style tiles | ✅ selesai — arah A (Editorial Oxblood) |
| 3 — Fondasi     | ✅ selesai                              |
| 4 — Homepage    | ⏳ Hero, Projects, Contact selesai      |
| 5–7             | ⏳ menunggu                             |

**Aksi berikutnya:** lanjutkan Fase 4 — About, Experience, Tech Stack,
Education, Organization.
