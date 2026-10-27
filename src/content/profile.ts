import { profileSchema, type Profile } from "@/lib/content";

const raw = {
  name: "Naufal Ramadhan",
  initials: "NR",
  role: {
    id: "Data & AI Engineer",
    en: "Data & AI Engineer",
  },
  location: "Jakarta, Indonesia",
  email: "hello@example.com",
  availability: {
    id: "Terbuka untuk peluang",
    en: "Open to opportunities",
  },
  site: "naufal.dev",
  cv: "/cv.pdf",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/username",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/username",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:hello@example.com",
      icon: "mail",
    },
  ],
} satisfies Profile;

export const profile: Profile = profileSchema.parse(raw);
