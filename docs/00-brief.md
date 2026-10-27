# 00 — Project Brief

## Tujuan

Membangun website portofolio pribadi yang:

1. Menampilkan profil, pengalaman, project, dan kemampuan secara profesional.
2. Bisa dibaca dalam dua bahasa (Indonesia & English).
3. Terasa seperti karya desain, bukan template generik.
4. Mudah diperbarui tanpa menyentuh komponen (konten terpisah dari UI).
5. Cepat, accessible, dan siap deploy ke Vercel.

## Audiens

- Recruiter dan hiring manager (terutama data/AI dan software).
- Klien freelance / komunitas.
- Teman sesama builder yang ingin melihat detail project.

## Scope v1

- Satu homepage panjang dengan section:
  Hero → About → Experience → Projects → Tech Stack → Education → Organization → Contact.
- Halaman detail project: `/[locale]/projects/[slug]`.
- Bilingual ID/EN dengan language switcher.
- Light + dark mode.
- Konten placeholder yang mudah diganti.
- SEO dasar: metadata, hreflang, sitemap, robots, OG image, JSON-LD.
- Deploy ke Vercel.

## Non-goals v1

- CMS / admin panel.
- Blog atau newsletter.
- Contact form dengan backend (cukup email + sosial links).
- Authentication.
- Analytics dashboard.
- Komentar atau fitur sosial.

## Kriteria sukses

| Aspek                    | Target                                                |
| ------------------------ | ----------------------------------------------------- |
| Lighthouse Performance   | ≥ 95 (mobile)                                         |
| Lighthouse Accessibility | ≥ 95                                                  |
| LCP                      | < 2.5s pada koneksi 4G                                |
| CLS                      | < 0.05                                                |
| Responsive               | 360px – 1440px tanpa horizontal scroll                |
| Kontras teks             | WCAG AA (≥ 4.5:1)                                     |
| Keyboard                 | Semua interaksi bisa diakses tanpa mouse              |
| Bahasa                   | Tidak ada teks UI yang bocor ke locale lain           |
| Konten                   | Mengganti data di `src/content/` tidak merusak layout |

## Batasan teknis

- Mesin saat ini hanya punya **Bun 1.4.4**; Node.js belum terpasang.
- Repo masih kosong dan belum diinisialisasi sebagai git.
- Konten asli belum tersedia → semua pakai placeholder.
- Deploy target Vercel (build di Vercel memakai Node).

## Prinsip desain

- **Crafted, bukan generik.** Hindari pola template AI: gradient ungu-biru,
  glassmorphism berlebihan, kartu bertumpuk, ikon acak.
- **Tenang tapi berkarakter.** Oxblood sebagai identitas, ivory sebagai ruang baca.
- **Detail kecil yang bermakna.** Garis glare 1px, label mono, noise halus.
- **Konten dulu.** Tipografi dan layout harus melayani keterbacaan, bukan sebaliknya.
- **Motion seperlunya.** Tidak mengambil alih scroll, hormati `prefers-reduced-motion`.

## Risiko

| Risiko                                 | Mitigasi                                                      |
| -------------------------------------- | ------------------------------------------------------------- |
| Next.js kurang stabil di runtime Bun   | Fallback install Node 24 LTS; Vercel tetap build dengan Node  |
| Konten bilingual bikin layout rusak    | Validasi Zod + uji teks panjang di locale EN                  |
| Dark mode terasa seperti afterthought  | Token warna disiapkan bersamaan, bukan ditambahkan belakangan |
| Terlalu banyak section → halaman berat | Static rendering, minim JS client, animasi CSS                |
| Referensi terlalu mirip                | Ambil sistem & craft, bukan layout/isi mentah                 |
