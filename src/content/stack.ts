import { techGroupSchema, type TechGroup } from "@/lib/content";

const raw: TechGroup[] = [
  {
    id: "ai-tools",
    label: {
      id: "AI-Augmented & Workflows",
      en: "AI-Augmented & Workflows",
    },
    items: [
      "Cursor",
      "GitHub Copilot",
      "Claude",
      "ChatGPT",
      "Gemini",
      "Hermes",
    ],
  },
  {
    id: "data-analytics",
    label: {
      id: "AI, ML & Analisis Data",
      en: "AI, ML & Data Analytics",
    },
    items: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "Scikit-learn",
      "Pandas",
      "Tableau",
      "Looker Studio",
    ],
  },
  {
    id: "frontend",
    label: { id: "Frontend", en: "Frontend" },
    items: [
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Radix UI",
      "TypeScript",
    ],
  },
  {
    id: "backend",
    label: { id: "Backend & API", en: "Backend & API" },
    items: ["Node.js", "Express.js", "Laravel", "PHP", "REST API", "JWT"],
  },
  {
    id: "databases",
    label: { id: "Basis data & ORM", en: "Databases & ORM" },
    items: ["PostgreSQL", "Prisma ORM", "MySQL"],
  },
  {
    id: "devops",
    label: {
      id: "DevOps & Infrastruktur",
      en: "DevOps & Infrastructure",
    },
    items: [
      "VPS Hosting",
      "Docker",
      "Docker Compose",
      "Nginx",
      "Git",
      "VS Code",
      "Postman",
      "Bash",
    ],
  },
];

export const techGroups: TechGroup[] = techGroupSchema.array().parse(raw);
