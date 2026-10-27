# 03 — Content Model

Semua konten disimpan di `src/content/` sebagai objek TypeScript, divalidasi
Zod saat build. Tidak ada CMS di v1.

---

## Urutan section homepage

1. Hero
2. About
3. Experience
4. Projects (featured)
5. Tech Stack
6. Education
7. Organization
8. Contact

Nav header: `Work · Experience · Stack · About · Contact`.

---

## Tipe dasar

```ts
export type Locale = "id" | "en";

export type Localized = {
  id: string;
  en: string;
};
```

---

## Profile

```ts
export type SocialIcon =
  "github" | "linkedin" | "mail" | "x" | "scholar" | "kaggle";

export type Social = {
  label: string;
  href: string;
  icon: SocialIcon;
};

export type Profile = {
  name: string;
  initials: string;
  role: Localized;
  tagline: Localized;
  location: string;
  email: string;
  availability: Localized;
  photo: string;
  cv: string;
  socials: Social[];
};
```

Contoh:

```ts
export const profile: Profile = {
  name: "Nama Kamu",
  initials: "NK",
  role: { id: "Data & AI Enthusiast", en: "Data & AI Enthusiast" },
  tagline: {
    id: "Mengubah data menjadi keputusan yang bisa dipakai.",
    en: "Turning data into decisions people can actually use.",
  },
  location: "Jakarta, Indonesia",
  email: "hello@example.com",
  availability: {
    id: "Terbuka untuk peluang",
    en: "Open to opportunities",
  },
  photo: "/images/profile.jpg",
  cv: "/cv.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/username", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/username",
      icon: "linkedin",
    },
    { label: "Email", href: "mailto:hello@example.com", icon: "mail" },
  ],
};
```

---

## Experience

```ts
export type Experience = {
  id: string;
  company: string;
  role: Localized;
  location?: string;
  start: string; // format YYYY-MM
  end: string | null; // null = sekarang
  summary: Localized;
  highlights: Localized[];
  stack: string[];
  url?: string;
  logo?: string;
};
```

Aturan:

- `summary` maksimal ~160 karakter agar rapi di timeline.
- `highlights` 1–3 poin, opsional.
- `stack` hanya teknologi yang benar-benar dipakai.
- Urutkan dari yang terbaru.

---

## Education

```ts
export type Education = {
  id: string;
  institution: string;
  degree: Localized;
  field: Localized;
  start: string;
  end: string | null;
  gpa?: string;
  highlights?: Localized[];
  logo?: string;
  url?: string;
};
```

---

## Organization

```ts
export type Organization = {
  id: string;
  name: string;
  role: Localized;
  start: string;
  end: string | null;
  summary: Localized;
  highlights?: Localized[];
  logo?: string;
  url?: string;
};
```

Contoh: organisasi kampus, komunitas data/AI, kepanitiaan, volunteer.

---

## Project

```ts
export type ProjectCategory = "data" | "ai" | "web" | "other";

export type ProjectMetric = {
  label: Localized;
  value: string;
};

export type Project = {
  slug: string;
  title: Localized;
  summary: Localized;
  year: number;
  role: Localized;
  category: ProjectCategory;
  stack: string[];
  metrics?: ProjectMetric[];
  links?: {
    live?: string;
    repo?: string;
    paper?: string;
  };
  cover: string;
  gallery?: string[];
  featured: boolean;
  content?: Localized; // long-form, menyusul (MDX)
};
```

Aturan:

- `slug` unik, lowercase, hyphen.
- `summary` 1–2 kalimat, maksimal ~140 karakter.
- Untuk project data/AI, isi `metrics` (mis. akurasi, jumlah data, latency).
- `cover` rasio 4:3, minimal 1200×900.
- `featured: true` tampil di homepage; sisanya di arsip.

Contoh:

```ts
export const projects: Project[] = [
  {
    slug: "churn-prediction",
    title: {
      id: "Prediksi Churn Pelanggan",
      en: "Customer Churn Prediction",
    },
    summary: {
      id: "Model gradient boosting untuk memprediksi churn dengan F1 0.91.",
      en: "Gradient boosting model that predicts churn with 0.91 F1.",
    },
    year: 2025,
    role: { id: "Data Scientist", en: "Data Scientist" },
    category: "data",
    stack: ["Python", "XGBoost", "pandas", "FastAPI"],
    metrics: [
      { label: { id: "F1 Score", en: "F1 Score" }, value: "0.91" },
      { label: { id: "Data", en: "Rows" }, value: "48k" },
    ],
    links: { repo: "https://github.com/username/churn" },
    cover: "/images/projects/churn.jpg",
    featured: true,
  },
];
```

---

## Tech Stack

```ts
export type TechGroup = {
  id: string;
  label: Localized;
  items: string[];
};
```

Grup yang direncanakan:

1. `languages` — Python, TypeScript, SQL, R
2. `data-ml` — pandas, scikit-learn, PyTorch, XGBoost
3. `web` — Next.js, React, Tailwind
4. `tools` — Jupyter, Git, Docker, dbt
5. `databases` — PostgreSQL, BigQuery, Redis
6. `cloud` — Vercel, GCP, AWS

Tampilan: badge per kategori, tanpa level/persentase.

---

## Schema Zod

`src/lib/content.ts`:

```ts
import { z } from "zod";

const localized = z.object({
  id: z.string().min(1),
  en: z.string().min(1),
});

const projectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: localized,
  summary: localized,
  year: z.number().int().min(2000).max(2100),
  role: localized,
  category: z.enum(["data", "ai", "web", "other"]),
  stack: z.array(z.string().min(1)).min(1),
  metrics: z
    .array(z.object({ label: localized, value: z.string().min(1) }))
    .optional(),
  links: z
    .object({
      live: z.string().url().optional(),
      repo: z.string().url().optional(),
      paper: z.string().url().optional(),
    })
    .optional(),
  cover: z.string().min(1),
  gallery: z.array(z.string()).optional(),
  featured: z.boolean(),
  content: localized.optional(),
});

export const projects = z.array(projectSchema).parse(rawProjects);
```

Prinsip: **gagal saat build**, bukan saat runtime. Pesan error harus menyebut
file dan field yang salah.

---

## File layout

```text
src/content/
├── profile.ts
├── experience.ts
├── projects.ts
├── education.ts
├── organizations.ts
├── stack.ts
└── index.ts        # re-export + validasi
```

---

## Messages (UI strings)

`messages/id.json` dan `messages/en.json`:

```json
{
  "meta": {
    "title": "Nama Kamu — Data & AI",
    "description": "Portofolio ..."
  },
  "nav": {
    "work": "Work",
    "experience": "Experience",
    "stack": "Stack",
    "about": "About",
    "contact": "Contact"
  },
  "hero": {
    "ctaWork": "Lihat karya",
    "ctaCv": "Unduh CV",
    "scroll": "Scroll untuk melihat"
  },
  "sections": {
    "about": "Tentang",
    "experience": "Pengalaman",
    "projects": "Project Pilihan",
    "stack": "Tech Stack",
    "education": "Pendidikan",
    "organization": "Organisasi",
    "contact": "Kontak"
  },
  "footer": {
    "note": "Dibuat sambil ngopi, 2 shot, tanpa gula.",
    "rights": "Semua hak dilindungi."
  },
  "theme": { "toggle": "Ganti tema", "light": "Terang", "dark": "Gelap" },
  "locale": { "switch": "Ganti bahasa" }
}
```

Aturan:

- Nama teknologi, nama perusahaan, dan gelar tidak diterjemahkan.
- Format tanggal dilokalkan: `Jul 2023 — Sekarang` / `Jul 2023 — Present`.
- Tidak ada string UI yang ditulis langsung di komponen.

---

## Placeholder yang akan dibuat

| Konten            | Jumlah |
| ----------------- | ------ |
| Profile           | 1      |
| Experience        | 3      |
| Featured projects | 4      |
| Education         | 2      |
| Organization      | 2      |
| Tech groups       | 6      |
| Social links      | 4      |

Semua memakai data realistis untuk data/AI agar layout teruji dengan konten
yang panjang, bukan “Lorem ipsum”.

---

## SEO per halaman

| Halaman        | Title                            | Description                |
| -------------- | -------------------------------- | -------------------------- |
| Home           | `Nama — Data & AI`               | Ringkasan 150–160 karakter |
| Project detail | `Judul Project — Nama`           | Summary project            |
| 404            | `Halaman tidak ditemukan — Nama` | —                          |

Tambahan: canonical, `hreflang` id/en/x-default, OG image, JSON-LD `Person`.
