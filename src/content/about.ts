import { aboutSchema, type About } from "@/lib/content";

const raw: About = {
  paragraphs: [
    {
      id: "Lulusan baru (Fresh Graduate) S1 Teknik Informatika dari Universitas Widyatama (IPK 3.51). Terbiasa membangun aplikasi fullstack menggunakan React, Express.js, dan Laravel, serta mengelola deployment pada VPS Linux, Nginx, dan Docker.",
      en: "Fresh graduate in Informatics Engineering from Widyatama University (GPA 3.51). Experienced in building fullstack web applications using React, Express.js, and Laravel, alongside managing deployments across Linux VPS, Nginx, and Docker.",
    },
    {
      id: "Memanfaatkan alur kerja AI-augmented development (Cursor, GitHub Copilot, Claude, dan otomasi workflow) serta analitika data untuk mempercepat proses pengembangan perangkat lunak secara terukur.",
      en: "Leveraging AI-augmented development workflows (Cursor, GitHub Copilot, Claude, and workflow automation) alongside data analytics to accelerate scalable software engineering.",
    },
  ],
  facts: [
    {
      label: { id: "Fokus", en: "Focus" },
      value: {
        id: "Fullstack & AI-Augmented",
        en: "Fullstack & AI-Augmented",
      },
    },
    {
      label: { id: "Lokasi", en: "Location" },
      value: { id: "Indonesia", en: "Indonesia" },
    },
    {
      label: { id: "Pendidikan", en: "Education" },
      value: {
        id: "S1 Teknik Informatika (IPK 3.51)",
        en: "B.Sc. Informatics (GPA 3.51)",
      },
    },
    {
      label: { id: "Bahasa", en: "Languages" },
      value: { id: "Indonesia, Inggris", en: "Indonesian, English" },
    },
  ],
};

export const about: About = aboutSchema.parse(raw);
