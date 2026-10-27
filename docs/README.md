# Portofolio — Project Docs

**Status:** Fase 0–1 selesai, Fase 3 hampir selesai. Berikutnya: style tiles.

Portofolio pribadi bilingual (Indonesia/English) dengan fokus data & AI.
Satu halaman panjang untuk profil, experience, projects, tech stack, education,
dan organization — plus halaman detail per project.

---

## Quick facts

| Item                      | Keputusan                                           |
| ------------------------- | --------------------------------------------------- |
| Framework                 | Next.js 16.4 (App Router)                           |
| UI                        | React 19.3 + TypeScript strict                      |
| Styling                   | Tailwind CSS 4.3 (CSS-first `@theme`)               |
| i18n                      | next-intl 4.14 (`/id`, `/en`)                       |
| Validasi konten           | Zod 4.6                                             |
| Runtime / package manager | Bun 1.4.4                                           |
| Deploy                    | Vercel                                              |
| Warna inti                | `#4A0404` (oxblood)                                 |
| Display                   | Geist 500                                           |
| Aksen serif               | Instrument Serif italic                             |
| Label / meta              | JetBrains Mono                                      |
| Mode warna                | Light default + dark toggle                         |
| Layout                    | Oxblood statement (hero & footer maroon, isi ivory) |
| Referensi utama           | [Perry Wang](https://perryw-2023.webflow.io/)       |

---

## Daftar dokumen

1. [00-brief.md](./00-brief.md) — tujuan, audiens, scope, kriteria sukses
2. [01-tech-stack.md](./01-tech-stack.md) — stack, arsitektur, routing, deploy
3. [02-design-system.md](./02-design-system.md) — palet, tipografi, komponen, motion
4. [03-content-model.md](./03-content-model.md) — struktur konten & schema
5. [04-roadmap.md](./04-roadmap.md) — fase pengerjaan & definition of done
6. [05-references.md](./05-references.md) — analisis referensi & rencana style tile

---

## Keputusan yang sudah dikunci

- Next.js + App Router, bukan Astro/HTML murni.
- Bilingual dengan URL berprefix `/id` dan `/en`, default `id`.
- Satu halaman penuh + halaman detail project (tanpa CMS).
- Kontak berupa email + sosial links (tanpa backend/form).
- Tech stack ditampilkan sebagai badge per kategori (tanpa progress bar).
- Warna inti `#4A0404` dengan layout _oxblood statement_.
- Hero memakai mockup browser window.
- Light + dark toggle.
- Referensi visual utama: Perry Wang.

---

## Yang masih terbuka

- Role final: data/AI (akan dibahas lebih lanjut).
- Nama, bio, sosial links, dan isi konten asli.
- Referensi visual tambahan (opsional).
- Pemilihan style tile A/B/C sebelum implementasi.
