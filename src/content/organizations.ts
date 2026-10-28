import { organizationSchema, type Organization } from "@/lib/content";

const raw: Organization[] = [
  {
    id: "gdg-widyatama",
    name: "Google Developer Groups On Campus Universitas Widyatama",
    role: { id: "Vice Lead Team Event", en: "Vice Lead Team Event" },
    start: "2025-04",
    end: null,
    summary: {
      id: "Memimpin perancangan dan operasional acara teknologi kampus, workshop developer Google, serta kolaborasi antar divisi komunitas.",
      en: "Leading planning and execution for campus developer events, Google tech workshops, and cross-division coordination.",
    },
  },
  {
    id: "gdg-bandung",
    name: "Google Developer Groups Bandung",
    role: { id: "Event & Community Team", en: "Event & Community Team" },
    start: "2024-09",
    end: "2025-07",
    summary: {
      id: "Berkontribusi dalam penyelenggaraan konferensi developer skala regional dan meetup teknologi komunitas GDG Bandung.",
      en: "Contributed to organizing regional developer conferences and tech community meetups across Bandung.",
    },
  },
];

export const organizations: Organization[] = organizationSchema
  .array()
  .parse(raw);
