# 05 — References

## Referensi utama: Perry Wang

URL: <https://perryw-2023.webflow.io/>
Info: <https://perryw-2023.webflow.io/info>

Portofolio product designer (Discord, ex-Google, ex-RBC). Dark-only,
monokrom, sangat craft-oriented.

### Fakta teknis

| Item          | Detail                                                |
| ------------- | ----------------------------------------------------- |
| Platform      | Webflow                                               |
| Library       | jQuery, Locomotive Scroll 4.1.1, Webflow Interactions |
| Preloader     | GIF “Just a moment” + loading dots                    |
| Gambar        | 25 `<img>`                                            |
| Smooth scroll | Ya, mengambil alih scroll                             |
| Tema          | Dark only                                             |

### Sistem visual

**Warna:** `#101010` background, `#F2F2F2` teks, sisanya putih transparan
4–20%. Tidak ada warna aksen; warna muncul dari glow tiap project.

**Tipografi (3 peran):**

1. **PP Neue Montreal** — headline & body
2. **Gloock italic** — satu kata aksen: _“…interactions & **stories.**”_
3. **JetBrains Mono** — label mikro (`SWIPE TO SEE WORK`)

**Hero:**

- Teks 80–96px, line-height 90%, letter-spacing `-2px`.
- Dibungkus mockup jendela browser: traffic lights, plus icon, address bar.
- Garis glare 1px di atas window, grain overlay.
- Gradient fade di bawah teks.
- Text-shadow biru/oranye tipis (chromatic aberration).
- Noise overlay `opacity .2`, `mix-blend-mode: overlay`.

**Project card:**

- Radius 24px, `background rgba(255,255,255,.04)`.
- Outline 1px putih 5%, double bezel dengan padding 8px.
- Garis glare gradient 1px di atas.
- Glow radial berbeda per project (biru untuk Stadia/RBC).
- Shadow `0 40px 80px rgba(0,0,0,.5)`.
- Tinggi 696px, gap 64px.

**Halaman Info:**

- Tentang naratif + foto perjalanan.
- Experience berupa baris: company, role, periode, 1 paragraf.
- Daftar “Friends” berisi link portofolio lain.
- Footer dengan kepribadian: “Made with love and Mango Green Teas
  (50% sugar, less ice).”

---

## Yang diambil

| Elemen                    | Alasan                                            |
| ------------------------- | ------------------------------------------------- |
| Triple type system        | Kontras sans + serif italic + mono sangat efektif |
| Hero statement besar      | Langsung menyampaikan identitas                   |
| Satu kata serif italic    | Detail kecil yang bikin tidak generik             |
| Browser window frame      | Familiar, memberi konteks “karya digital”         |
| Double bezel + glare card | Craft terasa tanpa berlebihan                     |
| Baris experience ringkas  | Mudah dipindai recruiter                          |
| Footer berkepribadian     | Menambah kesan manusia                            |
| Noise & grain             | Memberi tekstur, cocok untuk oxblood              |

## Yang diadaptasi

| Referensi                    | Versi kita                                                  |
| ---------------------------- | ----------------------------------------------------------- |
| `#101010` / `#F2F2F2`        | `#140B0A` / `#F4EDEA` (dark), `#FAF7F4` / `#1C1414` (light) |
| Glow biru per project        | Tint hangat: amber, olive, oxblood — lebih halus            |
| PP Neue Montreal (komersial) | **Geist** (open source)                                     |
| Instrument Serif italic      | Pengganti Gloock (Gloock tidak punya italic asli)           |
| JetBrains Mono               | Tetap                                                       |
| Locomotive Scroll            | Native scroll + Motion, tanpa hijack                        |
| Preloader                    | Dihilangkan; fade-in < 400ms                                |
| Chromatic aberration         | Diganti shadow hangat sangat halus                          |
| Dark-only                    | Light default + dark toggle                                 |
| Card 24px / 696px            | 20px / 520–640px, lebih ringan                              |

## Yang dihindari

- Mengambil layout/isi mentah (ini portofolio desainer, struktur kita beda).
- Menyalin teks atau aset.
- Efek kaca di light mode (tidak terbaca; gunakan surface solid + border).
- Animasi yang menunda konten atau mengganggu keyboard.

---

## Style tile (final)

Tiga file HTML mandiri di `design/style-tiles/`, tidak ikut build Next.js.
Semua memakai palet oxblood yang sama; yang dibandingkan adalah tipografi,
kepadatan, dan karakter.

**Arah terpilih: A — Editorial Oxblood.** B dan C disimpan sebagai arsip.

### A — Editorial Oxblood ✅ dipilih

- Paling dekat dengan referensi.
- Display `clamp(3.25rem, 7.5vw, 6rem)`, Instrument Serif italic di kata terakhir.
- Hero browser window besar, noise terasa.
- Card tinggi dengan cover dominan.
- Banyak kontras ukuran; section label mono.
- Kesan: berani, artistik, berkarakter.

### B — Quiet Luxury (arsip)

- Display lebih kecil (`~4rem`), whitespace lebih lega.
- Heading section memakai serif (Instrument Serif) untuk semua H2.
- Card lebih pendek, border tipis, tanpa glow.
- Noise sangat halus (`.08`).
- Kesan: tenang, senior, premium.

### C — Warm Technical (arsip)

- Label mono lebih dominan, grid samar di background.
- Hero window bergaya terminal/browser dengan readout data.
- Card menampilkan metrik besar (`F1 0.91`, `48k rows`).
- Section memakai penomoran `01 / 02 / 03`.
- Kesan: engineer, presisi, cocok untuk data/AI.

### Isi tiap tile

- Navbar + theme toggle
- Hero window (headline, meta, CTA)
- Section heading
- Satu project card
- Satu baris experience
- Tiga tech badge
- Footer strip
- Light/dark toggle
- Responsive

### Kriteria penilaian (dipakai saat memilih A)

1. Apakah hero langsung terasa “ini saya”? → A paling kuat, window dominan.
2. Apakah nyaman dibaca untuk konten panjang? → A menjaga isi di ivory.
3. Apakah dark mode sama kuatnya dengan light? → A lolos, maroon tetap jadi aksen.
4. Apakah terasa dibuat manusia, bukan template? → serif italic + label mono.
5. Apakah masih cocok untuk recruiter konservatif? → palet oxblood tetap tenang.

---

## Sumber referensi lain (opsional)

- <https://godly.website>
- <https://www.awwwards.com>
- <https://land-book.com>
- <https://minimal.gallery>
- <https://www.siteinspire.com>

Cari portofolio di bidang data/AI agar konteksnya relevan.

---

## Catatan

Referensi ini kuat di **craft visual**, bukan di struktur informasi. Kita
mengambil sistemnya, bukan meniru halamannya. Struktur akhir tetap:
hero → about → experience → projects → stack → education → organization → contact.
