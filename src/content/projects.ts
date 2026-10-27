import { projectSchema, type Project } from "@/lib/content";

const raw: Project[] = [
  {
    slug: "churn-prediction",
    title: {
      id: "Prediksi Churn Pelanggan",
      en: "Customer Churn Prediction",
    },
    summary: {
      id: "Model gradient boosting yang menandai pelanggan berisiko sebulan lebih awal, lengkap dengan dashboard untuk tim retensi.",
      en: "Gradient boosting model that flags at-risk customers a month ahead, paired with a review dashboard for the retention team.",
    },
    year: 2025,
    role: { id: "Data Scientist", en: "Data Scientist" },
    category: "data",
    stack: ["Python", "XGBoost", "pandas", "FastAPI"],
    metrics: [
      { label: { id: "F1", en: "F1" }, value: "0.91" },
      { label: { id: "Baris", en: "Rows" }, value: "48k" },
      { label: { id: "Fitur", en: "Features" }, value: "42" },
    ],
    links: { repo: "https://github.com/username/churn" },
    cover: "/images/projects/churn.jpg",
    featured: true,
  },
  {
    slug: "demand-forecast",
    title: {
      id: "Peramalan Permintaan Realtime",
      en: "Realtime Demand Forecast",
    },
    summary: {
      id: "Peramalan streaming yang diperbarui tiap lima menit, menekan stockout barang mudah rusak sepertiga pada kuartal pertama.",
      en: "Streaming forecast that refreshes every five minutes, cutting stockouts on perishable goods by a third in the first quarter.",
    },
    year: 2024,
    role: { id: "ML Engineer", en: "ML Engineer" },
    category: "ai",
    stack: ["Python", "PyTorch", "Kafka", "BigQuery"],
    metrics: [
      { label: { id: "Latensi", en: "Latency" }, value: "3.2s" },
      { label: { id: "Stockout", en: "Stockouts" }, value: "-34%" },
    ],
    links: { repo: "https://github.com/username/forecast" },
    cover: "/images/projects/forecast.jpg",
    featured: true,
  },
  {
    slug: "document-search",
    title: {
      id: "Pencarian Dokumen Semantik",
      en: "Semantic Document Search",
    },
    summary: {
      id: "Pencarian hibrida BM25 + embedding di atas 120 ribu dokumen internal, dengan evaluasi relevansi berbasis anotasi manusia.",
      en: "Hybrid BM25 + embedding search over 120k internal documents, with human-annotated relevance evaluation.",
    },
    year: 2024,
    role: { id: "AI Engineer", en: "AI Engineer" },
    category: "ai",
    stack: ["Python", "PostgreSQL", "pgvector", "Next.js"],
    metrics: [
      { label: { id: "Dokumen", en: "Documents" }, value: "120k" },
      { label: { id: "Recall@10", en: "Recall@10" }, value: "0.88" },
    ],
    links: { live: "https://example.com" },
    cover: "/images/projects/search.jpg",
    featured: true,
  },
  {
    slug: "ops-dashboard",
    title: {
      id: "Dashboard Operasional",
      en: "Operations Dashboard",
    },
    summary: {
      id: "Dashboard internal yang menyatukan enam sumber data menjadi satu tampilan harian untuk tim operasional.",
      en: "Internal dashboard that folds six data sources into a single daily view for the operations team.",
    },
    year: 2023,
    role: { id: "Full-stack Developer", en: "Full-stack Developer" },
    category: "web",
    stack: ["TypeScript", "Next.js", "PostgreSQL", "dbt"],
    metrics: [
      { label: { id: "Sumber", en: "Sources" }, value: "6" },
      { label: { id: "Pengguna", en: "Users" }, value: "80+" },
    ],
    links: { repo: "https://github.com/username/ops" },
    cover: "/images/projects/ops.jpg",
    featured: true,
  },
];

export const projects: Project[] = projectSchema.array().parse(raw);

export const featuredProjects: Project[] = projects.filter(
  (project) => project.featured,
);
