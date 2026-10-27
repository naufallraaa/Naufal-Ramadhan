import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProjects } from "@/content";
import type { Locale } from "@/i18n/routing";
import { ProjectCard, ProjectGrid } from "./project-card";

export async function ProjectsSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale });

  return (
    <Section id="work" divided={false}>
      <SectionHeading
        label={t("sections.workLabel")}
        title={t("sections.workTitle")}
        description={t("sections.workDescription")}
      />

      <ProjectGrid>
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            locale={locale}
            alternate={index % 2 === 1}
          />
        ))}
      </ProjectGrid>
    </Section>
  );
}
