import { projectSchema, type Project } from "@/lib/content";

const raw: Project[] = [
  {
    slug: "skin-cancer-ai",
    title: {
      id: "Skin Cancer & Disease Detection AI",
      en: "Skin Cancer & Disease Detection AI",
    },
    summary: {
      id: "Sistem klasifikasi citra medis berbasis Deep Learning CNN untuk deteksi dini lesi kanker dan penyakit kulit via REST API berlatensi rendah.",
      en: "Deep Learning CNN medical imaging platform for early detection of skin lesions and dermatological conditions via low-latency REST APIs.",
    },
    year: 2026,
    role: {
      id: "Software & ML Engineer",
      en: "Software & ML Engineer",
    },
    category: "ai",
    stack: [
      "Python",
      "FastAPI",
      "TensorFlow",
      "OpenCV",
      "Scikit-learn",
    ],
    metrics: [
      { label: { id: "Akurasi", en: "Accuracy" }, value: "94.2%" },
      { label: { id: "Latensi", en: "Latency" }, value: "120ms" },
      { label: { id: "Kelas", en: "Classes" }, value: "7" },
    ],
    links: { repo: "https://github.com/naufallraaa" },
    cover: "/images/projects/skin-cancer.jpg",
    featured: true,
    content: [
      {
        id: "Sistem klasifikasi citra medis berbasis Deep Learning (Convolutional Neural Network) untuk mendeteksi potensi kanker dan penyakit kulit secara dini. Dirancang dengan pipeline pemrosesan citra otomatis menggunakan OpenCV, teknik augmentasi data klinis, serta inferensi berkecepatan tinggi melalui REST API.",
        en: "A Deep Learning (Convolutional Neural Network) medical imaging system designed for early detection of potential skin cancer and dermatological conditions. Built with an automated image processing pipeline via OpenCV, clinical data augmentation, and high-speed REST API inference.",
      },
      {
        id: "Model terintegrasi penuh ke dalam backend berkinerja tinggi menggunakan FastAPI, menghasilkan waktu inferensi rata-rata 120ms per citra. Evaluasi performa dilakukan secara menyeluruh menggunakan metrik presisi, recall, dan confusion matrix untuk meminimalkan risiko false negative pada kasus kritis.",
        en: "Fully integrated into a high-performance FastAPI backend, achieving an average inference latency of 120ms per image. Evaluated comprehensively with precision, recall, and confusion matrix metrics to minimize false negative risks in critical cases.",
      },
    ],
  },
  {
    slug: "modular-fullstack-platform",
    title: {
      id: "Modular Enterprise Fullstack Platform",
      en: "Modular Enterprise Fullstack Platform",
    },
    summary: {
      id: "Aplikasi web fullstack monorepo modular berkinerja tinggi dengan autentikasi JWT HTTP-only, containerization Docker, dan reverse proxy Nginx.",
      en: "High-performance modular monorepo fullstack application featuring secure JWT HTTP-only auth, Docker containerization, and Nginx reverse proxy.",
    },
    year: 2026,
    role: {
      id: "Fullstack Developer",
      en: "Fullstack Developer",
    },
    category: "web",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Nginx",
    ],
    metrics: [
      { label: { id: "Arsitektur", en: "Architecture" }, value: "Monorepo" },
      { label: { id: "Layanan", en: "Services" }, value: "Docker" },
      { label: { id: "Keamanan", en: "Security" }, value: "JWT Cookie" },
    ],
    links: { repo: "https://github.com/naufallraaa" },
    cover: "/images/projects/fullstack.jpg",
    featured: true,
    content: [
      {
        id: "Pengembangan arsitektur aplikasi web fullstack monorepo modular menggunakan React 18, Vite 6, Tailwind CSS v4, Express.js v5, dan PostgreSQL 16 via Prisma ORM v6. Dilengkapi orkestrasi container Docker Compose dan Nginx reverse proxy untuk menyajikan frontend SPA sekaligus meneruskan traffic API.",
        en: "Engineered a modular monorepo fullstack web platform using React 18, Vite 6, Tailwind CSS v4, Express.js v5, and PostgreSQL 16 via Prisma ORM v6. Containerized with Docker Compose and fronted by an Nginx reverse proxy serving the SPA client and proxying API traffic.",
      },
      {
        id: "Mengimplementasikan sistem keamanan menyeluruh dengan JWT HTTP-only cookie, middleware hardening (Helmet, CORS, rate limiting), pipeline ekspor dokumen otomatis (Excel via ExcelJS & invoice PDF via PDFKit), serta skrip automasi pemeliharaan dan backup database rutin.",
        en: "Implemented robust security protocols including JWT HTTP-only cookies, security hardening middleware (Helmet, CORS, rate limiting), automated document pipelines (ExcelJS and PDFKit), and automated database backup routines.",
      },
    ],
  },
  {
    slug: "public-service-platform",
    title: {
      id: "Public IT Service & Ticketing Platform",
      en: "Public IT Service & Ticketing Platform",
    },
    summary: {
      id: "RESTful API teruji untuk sistem ticketing dan otomatisasi alur pengajuan layanan TI pemerintahan di Diskominfo Jawa Barat.",
      en: "Robust RESTful API powering government IT service ticketing and complaint management workflows at Diskominfo West Java.",
    },
    year: 2025,
    role: {
      id: "Backend Developer",
      en: "Backend Developer",
    },
    category: "web",
    stack: ["Laravel", "PHP", "MySQL", "REST API", "Postman"],
    metrics: [
      { label: { id: "Endpoint", en: "Endpoints" }, value: "20+" },
      { label: { id: "Layanan", en: "Services" }, value: "Ticketing" },
      { label: { id: "Pengujian", en: "Testing" }, value: "Postman" },
    ],
    links: { repo: "https://github.com/naufallraaa" },
    cover: "/images/projects/ticketing.jpg",
    featured: true,
    content: [
      {
        id: "Membangun RESTful API backend menggunakan framework Laravel (PHP) dan basis data relasional MySQL untuk sistem ticketing dan manajemen pengajuan layanan TI di lingkungan Diskominfo Jawa Barat. Memfasilitasi alur pelaporan komplain dan otomatisasi permohonan layanan digital kedinasan.",
        en: "Engineered a RESTful API backend using Laravel (PHP) and MySQL relational database for an IT service ticketing and complaint management system at Diskominfo West Java. Streamlined digital public service requests and incident reporting workflows.",
      },
      {
        id: "Merancang struktur database relasional yang ternormalisasi, menulis logika bisnis otomatisasi penanganan tiket, serta melakukan pengujian dan validasi seluruh endpoint API menggunakan Postman untuk memastikan keandalan integrasi sebelum sistem diluncurkan ke pengguna.",
        en: "Designed normalized relational database schemas, authored automated ticket processing business logic, and conducted end-to-end API endpoint validation using Postman to guarantee integration reliability prior to public rollout.",
      },
    ],
  },
  {
    slug: "heart-disease-analytics",
    title: {
      id: "Heart Disease Risk Analytics & Dashboard",
      en: "Heart Disease Risk Analytics & Dashboard",
    },
    summary: {
      id: "Analisis data klinis eksploratif (EDA) dan visualisasi dashboard interaktif untuk identifikasi korelasi faktor risiko kardiovaskular.",
      en: "Exploratory clinical data analysis (EDA) and interactive dashboard visualizations identifying key cardiovascular risk factors.",
    },
    year: 2025,
    role: {
      id: "Data Analyst",
      en: "Data Analyst",
    },
    category: "data",
    stack: ["Python", "Pandas", "Seaborn", "Tableau", "SQL"],
    metrics: [
      { label: { id: "Dataset", en: "Dataset" }, value: "Clinical" },
      { label: { id: "Metode", en: "Method" }, value: "EDA & Stat" },
      { label: { id: "Output", en: "Output" }, value: "Dashboard" },
    ],
    links: { repo: "https://github.com/naufallraaa" },
    cover: "/images/projects/heart-disease.jpg",
    featured: true,
    content: [
      {
        id: "Analisis data eksploratif (EDA) terhadap dataset klinis multivariabel untuk mengidentifikasi korelasi antara parameter medis, kebiasaan gaya hidup, dan indikator risiko penyakit jantung kardiovaskular.",
        en: "Exploratory data analysis (EDA) conducted across multivariable clinical datasets to identify key correlations between medical parameters, lifestyle factors, and cardiovascular disease risk indicators.",
      },
      {
        id: "Melakukan pembersihan dan transformasi data menggunakan Python dan Pandas, memvisualisasikan korelasi statistik dengan Seaborn, serta merancang dashboard analitik interaktif di Tableau yang mempermudah interpretasi temuan klinis bagi pemangku kepentingan.",
        en: "Performed data cleaning and transformation using Python and Pandas, visualized statistical correlations with Seaborn, and designed interactive analytics dashboards in Tableau to simplify clinical risk interpretation for stakeholders.",
      },
    ],
  },
];

export const projects: Project[] = projectSchema.array().parse(raw);

export const featuredProjects: Project[] = projects.filter(
  (project) => project.featured,
);
