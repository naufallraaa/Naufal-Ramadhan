# Portofolio — Naufal Ramadhan

Portofolio pribadi bilingual (Indonesia / English) oleh **Naufal Ramadhan** — **Fullstack & AI-Augmented Engineer** berbasis di Indonesia.

Dibangun dengan arsitektur modern berkinerja tinggi menggunakan **Next.js 16.4 (App Router & Turbopack)**, **Tailwind CSS v4 (CSS-first `@theme`)**, **next-intl (i18n)**, dan **motion (Motion for React)** dengan sistem validasi konten tipe-ketat berbasis **Zod 4**.

> **Status: Siap Deploy (Fase 7)** — Arah visual **Editorial Oxblood**, konten kurasi riil bilingual (ID/EN), tautan langsung CV, panggung interaktif *"Choose Your Character"* floating stage, SEO & OpenGraph dinamis, serta lulus audit performa & aksesibilitas. Lihat [`docs/04-roadmap.md`](./docs/04-roadmap.md).

---

## Fitur Utama

- **Panggung "Choose Your Character"**: Carousel single-card 3D perspective dengan infinite circular loop, easing glide ala luxury editorial (`[0.16, 1, 0.3, 1]`), depth-of-field blur, ambient floor glow oxblood, dan floating frosted glass paddles.
- **Koleksi Karya Riil**:
  1. **Skin Cancer & Disease Detection AI** *(2026)* — Deep Learning CNN, FastAPI, TensorFlow, OpenCV (Akurasi 94.2%, Latensi 120ms).
  2. **Modular Enterprise Fullstack Platform** *(2026)* — Monorepo modular, React 18, Vite 6, Tailwind v4, Express.js v5, PostgreSQL 16 via Prisma, Docker, Nginx, JWT cookie auth.
  3. **Public IT Service & Ticketing Platform** *(2025)* — Diskominfo Jawa Barat, Laravel, PHP, MySQL, RESTful API.
  4. **Heart Disease Risk Analytics & Dashboard** *(2025)* — Python, Pandas, Seaborn, Tableau interactive dashboard.
- **Direct CV Link**: Tombol hero CTA solid langsung membuka salinan dokumen CV (`public/cv-naufal-ramadhan.pdf`) di tab baru secara aman.
- **AI-Augmented Stack**: Dokumentasi workflow harian berbasis AI engineering (Cursor, GitHub Copilot, Claude, ChatGPT, Gemini, Hermes AI Automation).
- **Infrastruktur & DevOps**: Teruji untuk deployment containerized Docker Compose, reverse proxy Nginx, dan Linux VPS Hosting.
- **Tipe-Ketat & Nol String Hardcoded**: Seluruh teks UI dikelola via `messages/{id,en}.json`, dan seluruh data profil/proyek divalidasi dengan skema Zod sebelum di-render.

---

## Tech Stack

| Layer | Teknologi |
| --- | --- |
| **Framework** | Next.js 16.4.3 (App Router, Turbopack, Partial Prerendering) |
| **Bahasa** | TypeScript 5 (Strict Mode) |
| **Styling** | Tailwind CSS v4.3 (`@import "tailwindcss"`, CSS variables `@theme`) |
| **Internasionalisasi** | next-intl 4.14 (`/id`, `/en`) |
| **Animasi & Interaksi** | motion (Motion for React) + CSS keyframes hardware-accelerated |
| **Validasi Konten** | Zod 4.6 |
| **Ikonografi** | Lucide React |
| **Package Manager** | Bun 1.4 |
| **Target Deploy** | Vercel / Linux VPS |

---

## Menjalankan Proyek

### Kebutuhan Sistem
- [Bun](https://bun.sh/) (disarankan) atau Node.js v20+

### Instalasi & Dev Server

```bash
# Pasang dependensi
bun install

# Jalankan server pengembangan lokal (default: http://localhost:3000 -> redirect ke /id)
bun run dev
```

### Script Kualitas & Build

```bash
bun run typecheck   # Validasi tipe TypeScript (tsc --noEmit)
bun run lint        # Linter kode ESLint
bun run format      # Format kode Prettier
bun run build       # Production build (menghasilkan 19 static routes)
bun run start       # Menjalankan preview production build lokal
```

---

## Struktur Direktori

```text
├── docs/                     # Dokumentasi teknis, brief, arsitektur, & roadmap
├── messages/                 # Kamus terjemahan bilingual (id.json, en.json)
├── public/                   # Asset statis, ikon SVG, dan CV (cv-naufal-ramadhan.pdf)
├── src/
│   ├── app/                  # Routing Next.js App Router ([locale], sitemap, robots, OG)
│   ├── components/
│   │   ├── layout/           # Header navigasi, footer, locale switcher, theme toggle
│   │   ├── sections/         # Hero, About, Experience, Education, Projects Carousel, Tech Stack
│   │   └── ui/               # Atomik UI: Button, Badge, Container, Counter, Motion primitives
│   ├── content/              # Konten sumber (projects, profile, experience, education, stack)
│   ├── i18n/                 # Routing, middleware, dan navigation helpers next-intl
│   ├── lib/                  # Schema validasi Zod (content.ts) dan utility styling (cn)
│   └── proxy.ts              # Proxy middleware routing next-intl untuk Next.js 16
```

---

## Cara Menambah atau Mengubah Konten

Seluruh data konten berada di folder `src/content/` dan divalidasi oleh skema Zod di `src/lib/content.ts`:

1. **Menambah/Mengubah Proyek** (`src/content/projects.ts`):
   Tambahkan objek baru yang mengikuti skema `projectSchema` (memiliki `slug`, `title`, `summary`, `year`, `role`, `category`, `stack`, `metrics`, `links`, dan `content`). Detail halaman di `/projects/[slug]` akan otomatis digenerate statis saat build.
2. **Memperbarui Profil & Kontak** (`src/content/profile.ts`):
   Ubah data nama, peran, email, dan akun media sosial.
3. **Memperbarui Pengalaman Kerja & Pendidikan** (`src/content/experience.ts` & `src/content/education.ts`):
   Tambahkan riwayat instansi, periode (`YYYY-MM`), ringkasan, dan poin sorotan (`highlights`).
4. **Memperbarui Tech Stack** (`src/content/stack.ts`):
   Tambahkan nama alat ke dalam grup yang sesuai. Item stack otomatis mengalir pada pita running text (marquee ticker) di bawah Hero.
5. **Memperbarui String Tampilan / Label UI** (`messages/id.json` & `messages/en.json`):
   Pastikan setiap kunci teks baru ditambahkan di kedua file bahasa secara konsisten.

---

## Dokumentasi Perencanaan

Dokumen lengkap perancangan arsitektur dan sistem desain tersimpan di direktori `docs/`:

- [`docs/00-brief.md`](./docs/00-brief.md) — Tujuan proyek, audiens, dan kriteria sukses
- [`docs/01-tech-stack.md`](./docs/01-tech-stack.md) — Pilihan arsitektur dan konvensi Next.js 16
- [`docs/02-design-system.md`](./docs/02-design-system.md) — Palet warna, tipografi, dan prinsip gerak
- [`docs/03-content-model.md`](./docs/03-content-model.md) — Kontrak tipe data dan skema Zod
- [`docs/04-roadmap.md`](./docs/04-roadmap.md) — Pelacakan fase rilis dan catatan verifikasi
- [`docs/05-references.md`](./docs/05-references.md) — Riset referensi visual dan style tile

---

## Lisensi

Konten portofolio dan identitas pribadi © 2026 Naufal Ramadhan. Seluruh hak cipta dilindungi.
