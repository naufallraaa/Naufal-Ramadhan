# 02 — Design System

## Arah: “Oxblood Editorial”

Arah final: **A — Editorial Oxblood** (dipilih dari 3 style tile di
`design/style-tiles/`; B dan C diarsipkan). Spesifikasi di bawah adalah kontrak
implementasi untuk tile A.

Portofolio yang terasa seperti majalah digital: tipografi besar, ruang lega,
detail craft kecil, dan satu warna identitas yang kuat. Referensi utama
[Perry Wang](https://perryw-2023.webflow.io/), diadaptasi ke palet oxblood
dan mode terang/gelap.

### Prinsip

1. **Satu warna, banyak peran.** `#4A0404` jadi identitas, bukan cat seluruh halaman.
2. **Kontras tipografi.** Sans besar + serif italic + mono kecil.
3. **Craft terasa, bukan dipamerkan.** Garis 1px, glare, noise — semua halus.
4. **Ruang baca diutamakan.** Section isi tetap ivory, bukan maroon.
5. **Motion tidak mengganggu.** Tidak ada scroll hijack.

---

## Palet

### Light (default)

| Token           | Hex       | Pemakaian                      |
| --------------- | --------- | ------------------------------ |
| `--bg`          | `#FAF7F4` | background halaman             |
| `--surface`     | `#F2EAE6` | kartu, section alternatif      |
| `--ink`         | `#1C1414` | body text                      |
| `--muted`       | `#6B5D59` | teks sekunder, caption         |
| `--line`        | `#E5D8D3` | border 1px                     |
| `--brand`       | `#4A0404` | heading, CTA, hero, footer     |
| `--brand-hover` | `#6B0808` | hover state                    |
| `--brand-deep`  | `#2E0202` | footer bawah / deepest surface |
| `--on-brand`    | `#FAF7F4` | teks di atas maroon            |

### Dark

| Token          | Hex                     | Pemakaian                             |
| -------------- | ----------------------- | ------------------------------------- |
| `--bg`         | `#140B0A`               | background halaman                    |
| `--surface`    | `#1E1110`               | kartu netral                          |
| `--card`       | `#4A0404`               | kartu project (brand sebagai surface) |
| `--ink`        | `#F4EDEA`               | body text                             |
| `--muted`      | `#A8938D`               | teks sekunder                         |
| `--line`       | `rgba(244,237,234,.12)` | border                                |
| `--brand-text` | `#E26A5E`               | link & aksen teks                     |
| `--on-brand`   | `#F4EDEA`               | teks di atas maroon                   |

### Kontras (WCAG)

| Pasangan               | Rasio   | AA normal |
| ---------------------- | ------- | --------- |
| `#4A0404` di `#FAF7F4` | 15.02:1 | ✅        |
| `#FAF7F4` di `#4A0404` | 15.02:1 | ✅        |
| `#1C1414` di `#FAF7F4` | 16.97:1 | ✅        |
| `#6B5D59` di `#FAF7F4` | 5.90:1  | ✅        |
| `#F4EDEA` di `#140B0A` | 16.77:1 | ✅        |
| `#E26A5E` di `#140B0A` | 5.97:1  | ✅        |
| `#F4EDEA` di `#4A0404` | 13.85:1 | ✅        |
| `#E26A5E` di `#4A0404` | 4.93:1  | ✅        |
| `#A8938D` di `#140B0A` | 6.68:1  | ✅        |

Aturan: jangan pernah memakai `#4A0404` sebagai teks di atas background gelap
(rasio ~1.2:1). Gunakan `#E26A5E`.

---

## Tipografi

| Peran           | Font                    | Weight | Ukuran                                    |
| --------------- | ----------------------- | ------ | ----------------------------------------- |
| Display (hero)  | Geist                   | 500    | `clamp(3.25rem, 7.5vw, 6rem)`             |
| Aksen serif     | Instrument Serif italic | 400    | `0.95em` dari display                     |
| H2 section      | Geist                   | 500    | `clamp(2rem, 3.5vw, 3rem)`                |
| H3 / card title | Geist                   | 500    | `1.5rem`                                  |
| Body            | Geist                   | 400    | `1rem` / line-height 1.7                  |
| Body large      | Geist                   | 400    | `1.125rem`                                |
| Meta / label    | JetBrains Mono          | 400    | `0.6875rem`, uppercase, tracking `0.12em` |
| Caption         | Geist                   | 400    | `0.875rem`                                |

Aturan:

- Display line-height `0.92`, letter-spacing `-0.035em`.
- Maksimal 2 baris untuk hero di desktop, 3 baris di mobile.
- Serif hanya untuk **satu kata/frasa** per halaman — jangan dipakai untuk body.
- Angka besar (metrik project) memakai Geist 500 dengan `tabular-nums`.

---

## Layout & Spacing

- Base unit: `4px`.
- Container: `max-width: 1200px`, gutter `1.25rem` mobile / `2.5rem` desktop.
- Section padding: `clamp(4.5rem, 9vw, 9rem)` atas-bawah.
- Jarak antar elemen: 8 / 12 / 16 / 24 / 32 / 48 / 64.
- Grid: 12 kolom desktop, 4 kolom mobile.
- Breakpoint: `640`, `768`, `1024`, `1280`.

### Radius & border

| Elemen       | Radius  | Border                      |
| ------------ | ------- | --------------------------- |
| Project card | `20px`  | `1px var(--line)`           |
| Inner bezel  | `14px`  | `1px rgba(255,255,255,.10)` |
| Button       | `10px`  | —                           |
| Badge / pill | `999px` | `1px var(--line)`           |
| Hero window  | `16px`  | `1px rgba(250,247,244,.18)` |

### Shadow

- Light card: `0 24px 48px -24px rgba(46,2,2,.28)`
- Dark card: `0 32px 64px -24px rgba(0,0,0,.6)`
- Hindari shadow tebal di semua elemen; hanya card & hero window.

---

## Efek khas

**Noise overlay** — SVG/PNG noise, `opacity .12` (light) / `.18` (dark),
`mix-blend-mode: overlay`. Hanya di hero, footer, dan project cover.

**Glare line** — garis 1px di atas card/window:

```css
background: linear-gradient(
  to right,
  transparent 10%,
  #fff 50%,
  transparent 90%
);
height: 1px;
```

Di light mode gunakan `rgba(255,255,255,.8)`; di dark `rgba(244,237,234,.65)`.

**Double bezel** — card dibungkus padding 6px dengan border tipis, lalu card
dalam punya border sendiri. Ini yang bikin terasa “dibuat”, bukan template.

**Hero gradient fade** — teks hero memudar sedikit di bawah:

```css
background: linear-gradient(to bottom, var(--on-brand) 60%, transparent 100%);
-webkit-background-clip: text;
color: transparent;
```

Dipakai hati-hati; pastikan tetap lolos kontras untuk teks penting.

---

## Komponen

### Header

- Tinggi 72px, fixed, transparan di atas hero (teks cream).
- Setelah scroll > 24px: background ivory/night + border bawah 1px.
- Kiri: wordmark nama (Geist 500, tracking rapat).
- Kanan: nav anchor, `ID / EN` switcher, theme toggle.
- Mobile: tombol menu → sheet full-screen, fokus terperangkap, Esc menutup.

### Hero — browser window

- Blok `#4A0404` full-bleed, padding atas mengikuti header.
- Window: max-width 1100px, title bar 40px berisi 3 dot + address pill
  (`namakamu.dev`), body padding `clamp(1.5rem, 5vw, 4rem)`.
- Headline 2 baris; kata terakhir Instrument Serif italic.
- Meta line mono: role · location · availability.
- CTA: `View work` (cream solid) + `Download CV` (outline cream).
- Scroll cue di bawah window.
- Noise + glare line + gradient fade.

### Section heading

```text
01 — EXPERIENCE
What I've been building
```

Label mono uppercase, H2 di bawahnya, opsional deskripsi 1 kalimat di kanan.

### Project card

- Grid 2 kolom desktop, 1 kolom mobile.
- Cover rasio 4:3, `object-fit: cover`, radius dalam.
- Baris atas: title + arrow icon (bergerak 4px saat hover).
- Meta mono: company/context · year.
- Summary maksimal 2 baris (`line-clamp-2`).
- Metrik (opsional): 2–3 chip angka, mis. `F1 0.92`, `12k rows`.
- Hover: border naik kontras, cover `scale(1.02)`, arrow bergeser.
- Fokus keyboard sama dengan hover.

### Timeline row (Experience / Education / Organization)

- Grid 12 kolom: periode (2) · role + organisasi (4) · deskripsi (6).
- Border-top 1px; padding 24px 0.
- Hover: background `var(--surface)` tipis.
- Mobile: stack vertikal, periode jadi label mono di atas.
- Periode memakai format `Jul 2023 — Present` / `Jul 2023 — Sekarang`.

### Tech badge

- Pill, border 1px, mono 12px, padding `0.375rem 0.75rem`.
- Dikelompokkan per kategori; judul grup mono uppercase.
- Hover: background brand, teks cream.

### Footer

- Full `#4A0404`, teks cream.
- Wordmark besar, nav, email, sosial.
- Satu baris kepribadian (contoh: “Dibuat sambil ngopi, 2 shot, tanpa gula.”).
- Copyright + locale.

### Tombol

| Varian    | Light                      | Dark                         |
| --------- | -------------------------- | ---------------------------- |
| Primary   | bg cream, teks maroon      | bg `#E26A5E`, teks `#140B0A` |
| Secondary | border maroon, teks maroon | border cream, teks cream     |
| Focus     | ring 2px offset 3px        | sama                         |

### Theme & locale

- Theme toggle 40×40, ikon sun/moon, `aria-pressed`.
- Locale switcher teks `ID / EN`, bukan dropdown; link mempertahankan path.

---

## Motion

| Aksi               | Durasi | Easing                      |
| ------------------ | ------ | --------------------------- |
| Hover / focus      | 160ms  | ease-out                    |
| Reveal section     | 500ms  | `cubic-bezier(.22,1,.36,1)` |
| Hero masuk         | 700ms  | sama                        |
| Stagger antar item | 60ms   | —                           |

- Reveal: `opacity 0→1`, `translateY(16px→0)`.
- Tidak ada parallax pada teks.
- `prefers-reduced-motion: reduce` → matikan transform & stagger, sisakan opacity.
- Tidak memakai Locomotive Scroll atau scroll hijack.

---

## Aksesibilitas

- Skip link ke konten utama.
- Landmark: `header`, `nav`, `main`, `footer`.
- `aria-current="page"` untuk nav aktif.
- Semua ikon dekoratif `aria-hidden="true"`.
- Gambar punya alt deskriptif; cover dekoratif `alt=""`.
- Target sentuh minimal 44×44px.
- Informasi tidak boleh hanya lewat warna.
- Urutan heading tidak melompat.
- Uji keyboard penuh: tab, enter, esc, arrow di menu.

---

## Responsive

| Lebar     | Perilaku                                         |
| --------- | ------------------------------------------------ |
| 360–639   | 1 kolom, hero 3 baris, nav sheet, timeline stack |
| 640–767   | 1 kolom, card lebih lebar                        |
| 768–1023  | 2 kolom project, timeline 12 kolom               |
| 1024–1279 | layout penuh, container 1200                     |
| ≥1280     | whitespace tambahan, hero max 1100               |

Uji wajib: 360, 390, 768, 1024, 1440. Tidak boleh ada horizontal scroll.
