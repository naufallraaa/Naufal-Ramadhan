import { educationSchema, type Education } from "@/lib/content";

const raw: Education[] = [
  {
    id: "widyatama-university",
    institution: "Universitas Widyatama",
    degree: { id: "S1", en: "Bachelor's Degree" },
    field: {
      id: "Teknik Informatika",
      en: "Informatics Engineering",
    },
    start: "2022-09",
    end: "2026-08",
    gpa: "3.51 / 4.00",
    highlights: [
      {
        id: "Fokus pada rekayasa perangkat lunak, arsitektur web modern, dan sistem basis data.",
        en: "Focusing on software engineering, modern web architectures, and database systems.",
      },
    ],
  },
  {
    id: "sman-1-purwadadi",
    institution: "SMAN 1 Purwadadi",
    degree: { id: "SMA", en: "High School" },
    field: { id: "MIPA", en: "Natural Sciences" },
    start: "2019-07",
    end: "2022-06",
  },
];

export const education: Education[] = educationSchema.array().parse(raw);
