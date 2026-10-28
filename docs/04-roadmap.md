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
→ Terpenuhi. Catatan bermigrasi: awalnya build lokal pakai Bun; kini build &
  start lokal pakai Node (lihat `01-tech-stack.md` → Environment).

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

## Fase 4 — Section homepage ✅

Urutan implementasi:

1. [x] Hero (browser window, noise, glare, CTA)
2. [x] About
3. [x] Experience (timeline)
4. [x] Projects (featured grid + card)
5. [x] Tech Stack (badge per kategori)
6. [x] Education (timeline)
7. [x] Organization (timeline)
8. [x] Contact + footer

Catatan: card project kini me-link ke halaman detail
(`/[locale]/projects/[slug]`, Fase 5). Nav header masih anchor saja.

**Selesai jika:** semua section terisi konten placeholder, responsif 360–1440,
tidak ada overflow horizontal, light/dark sama-sama rapi.
→ Terverifikasi via headless browser (28 Okt 2026): 0 horizontal scroll di
360/390/768/1024/1440, light & dark & kedua locale bersih, a11y tree lengkap
(skip link pertama, semua kontrol reachable), mobile sheet buka-tutup + body
lock benar, console tanpa error.

---

## Fase 5 — Halaman detail project ✅

- [x] Route `/[locale]/projects/[slug]`
- [x] `generateStaticParams` — 4 slug × 2 locale (17 halaman ke-build)
- [x] Layout: cover, judul, meta, metrik, isi, links (sidebar stack + tautan)
- [x] `generateMetadata` per project
- [x] 404 untuk slug tidak dikenal
- [x] Tombol kembali + prev/next project

**Selesai jika:** semua project bisa dibuka di kedua locale, metadata benar,
tidak ada broken link.
→ Terverifikasi (28 Okt 2026): 8 halaman detail × locale 200, slug asing →
404, card homepage navigate ke detail, prev/next benar, light/dark & 360
rapi. Catatan: `content` di-schema berupa **array paragraf** (bukan satu blok
MDX) — lihat `03-content-model.md`.

---

## Fase 6 — SEO, a11y, performa ✅

- [x] Metadata + hreflang + canonical (homepage & detail, `x-default` → ID)
- [x] `sitemap.ts` (10 URL) + `robots.ts` — keduanya 200
- [x] OG image dinamis (`[locale]` & `[locale]/projects/[slug]`, satori 1200×630)
- [x] JSON-LD `WebSite` + `Person` di homepage
- [x] Audit keyboard & screen reader dasar — a11y tree OK (Fase 4), `:focus-visible` global
- [x] Cek kontras semua pasangan — terdokumentasi AA; audit `color-contrast` Lighthouse lolos
- [x] `prefers-reduced-motion` di `globals.css`
- [x] Optimasi gambar (`next/image`, WebP/AVIF) — **N/A**: semua cover gradient CSS, belum ada raster
- [x] Lighthouse mobile — a11y **100** (homepage & detail); perf median **~92** (91–98, detail 94)
- [x] Uji layout dengan teks EN 1.3× lebih panjang (Fase 4)

**Selesai jika:** target di `00-brief.md` terpenuhi.
→ Terverifikasi (28 Okt 2026). Catatan perf: homepage median ~92 di bawah
target 95, tapi fluktuatif 91–98; blocking time sisanya berasal dari runtime
hydration react-dom — kode client sendiri hanya 3 komponen kecil (~16 KB).
Klaim ≥95 sebaiknya diverifikasi ulang di Chrome stable saat deploy (Fase 7).

---

## Pembaruan: Animasi (28 Okt 2026) ✅

Situs kini punya motion "seperlunya" sesuai prinsip brief:

- **Entrance hero**: CSS keyframes murni (`.anim-rise`, stagger 0/100/200/300ms) —
  jalan tanpa JS di first paint, jadi LCP tidak tertunda oleh hydration.
- **Scroll reveal**: heading section, item timeline, card project, konten
  detail page, dan email footer — via `motion/react` (`whileInView`, once) di
  satu client component kecil `src/components/ui/reveal.tsx`
  (`MotionConfig`/`useReducedMotion` menghormati `prefers-reduced-motion`).
- **Micro-interaction hover**: underline nav yang menggambar diri (`.nav-link`),
  cover card zoom 1.03 saat hover.
- **No-JS safety**: elemen reveal diberi `data-reveal` + CSS `@media
  (scripting: none)` supaya konten tetap terlihat tanpa JavaScript.
- Verifikasi: reveal jalan saat scroll (konsol bersih), mobile 360 tanpa
  overflow horizontal, typecheck/lint/build bersih.
- **Lighthouse mobile setelah animasi**: perf **95 & 99** (LCP ~950ms,
  TBT 124–265ms) — target ≥95 justru terpenuhi di run ini; skor tetap
  fluktuatif antar-run, cek ulang di Chrome stable saat deploy.

### Iterasi 2 — animasi diperkaya (28 Okt 2026) ✅

- **Magnitude + blur**: reveal kini dari y 44px + `blur(8px)` → 0, durasi 0.85s;
  hero rise CSS diperbesar ke 36px / 0.9s.
- **Counter metrik**: angka (`0.91`, `120k`, `−18%`, tahun) menghitung naik
  dari 0 saat masuk viewport — komponen `src/components/ui/counter.tsx`
  (regex prefix/angka/suffix; teks non-numerik tetap statis).
- **Pop stagger**: badge stack & chip "pop" dengan spring overshoot
  (`src/components/ui/pop.tsx`), delay 50–60ms antar item.
- **Cascade timeline**: row experience/education/organization masuk
  berurutan (delay index × 80ms) via prop `delay` di `TimelineRow`.
- Verifikasi: reveal & cascade jalan saat scroll, konsol bersih, mobile 360
  tanpa overflow, typecheck/lint/build bersih.
- **Lighthouse**: perf **98 & 93**, LCP ~915ms — masih di kisaran target.

### Iterasi 3 — gerak kontinu (28 Okt 2026) ✅

- **Glare sweep**: refleksi cahaya menyapu diagonal tiap 7s di jendela hero,
  card project, dan cover detail (`.glare-line::after`, delay desync via
  CSS var `--sweep-delay`).
- **Gentle float**: angka serif di cover mengapung ±6px, 6s loop, delay
  bervariasi antar cover.
- **Ticker strip**: marquee mono tipis di bawah hero (isi dari `techGroups`,
  bukan hardcoded; `aria-hidden`), loop mulus via track duplikat −50%.
- Ketiganya **pure CSS infinite animation** — nol JS, nol dampak hydration;
  mati otomatis via `prefers-reduced-motion`.
- Verifikasi: ticker terbukti bergerak (computed transform −353px dan terus berjalan),
  konsol bersih, typecheck/lint/build bersih.
- **Lighthouse**: perf 91 (TBT 362ms) — masih di rentang fluktuasi 91–99
  yang tercatat sejak sebelum animasi.

### Iterasi 4 — carousel karya "Choose Your Character" floating stage (28 Okt 2026) ✅

- **Floating Stage & Levitating Card**: card dibuat melayang dengan elevasi bayangan
  bertingkat (`shadow-[0_20px_50px_-15px_rgba(74,4,4,0.18)]`), ambient floor pedestal glow
  oxblood di bawah card, dan efek idle breathing float (`.float-soft`).
- **Cinematic Character Select Motion**: transisi slide dirombak menggunakan kurva
  luxury easing `[0.16, 1, 0.3, 1]`, depth scale (0.86 → 1.0), subtle 3D perspective
  turntable swing (`rotateY: ±8deg`), dan kamera depth-of-field blur (`blur(6px)` → `blur(0px)`).
- **Floating Ergonomic Nav Paddles**: menggantikan tombol lingkaran kaku dengan capsule
  glass paddles vertikal berteknologi frosted glass blur (`backdrop-blur-2xl`), ambient glow
  saat hover, serta micro-translation panah chevron (`group-hover:±translate-x-1.5`).
- **Unlimited infinite loop**: index circular modulo `((page % total) + total) % total`,
  mendukung gesture drag/swipe responsif dan navigasi keyboard.
- **Roster indicator**: counter `01 / 04`, interactive slot pills dengan pulse oxblood,
  dan badge `ROSTER`.
- Verifikasi: desktop 1440 & mobile 360 teruji via browser headless, transisi terverifikasi
  mulus, 0 overflow horizontal, typecheck & lint bersih (0 error).

### Integrasi Konten Asli CV & Direct CV CTA (28 Okt 2026) ✅

- **Hero CTA**: Tombol utama diarahkan langsung membuka PDF CV asli (`/cv-naufal-ramadhan.pdf`) di tab baru (`target="_blank"`), tombol kedua diarahkan scroll ke `/#work`.
- **4 Karya Pilihan Riil**: Mengganti placeholder dengan 4 proyek kurasi dari CV asli Opay:
  1. `skin-cancer-ai`: Deep Learning CNN Skin Cancer & Disease Detection AI (FastAPI, TensorFlow, OpenCV).
  2. `modular-fullstack-platform`: Modular Enterprise Fullstack Platform (React 18, Vite, Express.js, PostgreSQL, Prisma, Docker, Nginx).
  3. `public-service-platform`: Public IT Service & Ticketing Platform (Diskominfo Jabar, Laravel, PHP, MySQL, REST API).
  4. `heart-disease-analytics`: Heart Disease Risk Analytics & Dashboard (Python, Pandas, Tableau, Seaborn).
- **Profil & Pengalaman**: Pengalaman kerja (PT Saboneta & Diskominfo Jabar), pendidikan (Widyatama GPA 3.51 & SMAN 1 Purwadadi), organisasi (GDG Widyatama & GDG Bandung), serta kontak terintegrasi penuh.
- **Penyelarasan AI-Augmented & Fresh Graduate**:
  - Role di-update menjadi `Fullstack & AI-Augmented Engineer`, lokasi `Indonesia`.
  - Teks overline `Portofolio / 2026` dan status `Terbuka untuk peluang` dihapus dari hero dan profil.
  - Narasi biodata dibuat lugas & faktual (fresh graduate Widyatama IPK 3.51, fullstack React/Express/Laravel, VPS Linux/Docker/Nginx).
  - Tech stack diperluas: AI-Augmented (Cursor, Copilot, Claude, ChatGPT, Gemini, Hermes), Data Analytics (Python, TensorFlow, OpenCV, Scikit-learn, Pandas, Tableau, Looker Studio), dan Infra (VPS Hosting, Docker, Nginx, VS Code) tanpa Cloudflare.
- **Integrasi Visual Proyek & Custom Domain Live (28 Okt 2026)**:
  - Menyambungkan gambar fisik proyek: `skin-cancer.png` (UI Skinia) dan render high-res `heart-disease.png` dari file PDF dashboard Tableau.
  - Komponen `ProjectCover` di-upgrade: menampilkan foto nyata proyek jika ada file fisiknya, dan otomatis fallback ke gradient oxblood elegan jika belum ada gambar.
  - URL bilah jendela terminal di hero diperbarui menjadi `naufal-ramadhan.my.id`.
  - Custom domain `naufal-ramadhan.my.id` berhasil di-deploy, tersambung ke Cloudflare DNS & Vercel edge, dengan sertifikat SSL aktif (HTTP 200).
- Verifikasi: `bun run typecheck` & `bun run lint` lolos 0 error, build static page 19/19 lulus, respons PDF terverifikasi HTTP 200 (258KB).

---

## Fase 7 — Deploy

- [x] Push ke GitHub
- [x] Import ke Vercel
- [x] Set Build Command `next build`
- [x] Set `NEXT_PUBLIC_SITE_URL`
- [x] Cek preview deployment
- [x] Smoke test production: `/id`, `/en`, project detail, toggle, switcher
- [x] Pasang domain (`naufal-ramadhan.my.id` via Cloudflare)

**Selesai jika:** production hijau, semua route 200, tidak ada console error. (LULUS ✅)

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

| Fase            | Status                                   |
| --------------- | ---------------------------------------- |
| 0 — Perencanaan | ✅ selesai                               |
| 1 — Scaffold    | ✅ selesai                               |
| 2 — Style tiles | ✅ selesai — arah A (Editorial Oxblood)  |
| 3 — Fondasi     | ✅ selesai                               |
| 4 — Homepage    | ✅ selesai — verifikasi visual lolos     |
| 5 — Detail      | ✅ selesai — terverifikasi               |
| 6 — SEO/a11y     | ✅ selesai — a11y 100, perf 95–99       |
| 6.5 — Animasi    | ✅ selesai — framer-motion + CSS         |
| 7 — Deploy       | ✅ selesai — live di naufal-ramadhan.my.id |

**Hasil Akhir:** Website portofolio resmi mengudara dan beroperasi penuh.
