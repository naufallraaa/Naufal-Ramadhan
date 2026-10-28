import { profileSchema, type Profile } from "@/lib/content";

const raw = {
  name: "Naufal Ramadhan",
  initials: "NR",
  role: {
    id: "Fullstack & AI-Augmented Engineer",
    en: "Fullstack & AI-Augmented Engineer",
  },
  location: "Indonesia",
  email: "naufalramadhang@gmail.com",
  site: "naufal-ramadhan.my.id",
  cv: "/cv-naufal-ramadhan.pdf",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/naufallraaa",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/naufal-ramadhan-0a084b270",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:naufalramadhang@gmail.com",
      icon: "mail",
    },
  ],
} satisfies Profile;

export const profile: Profile = profileSchema.parse(raw);
