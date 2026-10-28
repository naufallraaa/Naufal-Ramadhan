import { experienceSchema, type Experience } from "@/lib/content";

const raw: Experience[] = [
  {
    id: "saboneta-fullstack",
    company: "PT Saboneta Kreasi Prima",
    role: { id: "Fullstack Developer", en: "Fullstack Developer" },
    location: "Bandung",
    start: "2026-09",
    end: null,
    summary: {
      id: "Mengembangkan arsitektur aplikasi web fullstack monorepo modular (React 18, Vite 6, Tailwind v4, Express.js v5, PostgreSQL 16 via Prisma ORM v6).",
      en: "Architected and built a modular monorepo fullstack application (React 18, Vite 6, Tailwind v4, Express.js v5, PostgreSQL 16 via Prisma ORM v6).",
    },
    highlights: [
      {
        id: "Mengimplementasikan containerization Docker & reverse proxy Nginx yang mengorkestrasi frontend SPA dan backend API.",
        en: "Configured Docker containerization and Nginx reverse proxy serving the SPA frontend and proxying API traffic.",
      },
      {
        id: "Membangun sistem otentikasi JWT via HTTP-only cookie, middleware keamanan (Helmet, CORS, rate limiting), serta automasi ekspor dokumen Excel & PDF.",
        en: "Built secure JWT HTTP-only cookie auth, security middleware (Helmet, CORS, rate-limiting), and Excel & PDF document pipelines.",
      },
    ],
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Nginx",
    ],
  },
  {
    id: "diskominfo-jabar-backend",
    company: "Diskominfo Jawa Barat",
    role: { id: "Backend Developer Intern", en: "Backend Developer Intern" },
    location: "Bandung",
    start: "2025-09",
    end: "2025-12",
    summary: {
      id: "Mengembangkan dan memelihara backend service serta RESTful API menggunakan Laravel (PHP) untuk kebutuhan integrasi layanan publik.",
      en: "Developed and maintained backend services and RESTful APIs using Laravel (PHP) to support public service platform integrations.",
    },
    highlights: [
      {
        id: "Merancang API endpoint terstruktur, migrasi database, dan pengujian sistem backend.",
        en: "Engineered structured API endpoints, database migrations, and comprehensive backend tests.",
      },
    ],
    stack: ["Laravel", "PHP", "MySQL", "REST API"],
  },
];

export const experiences: Experience[] = experienceSchema.array().parse(raw);
