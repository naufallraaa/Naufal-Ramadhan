import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProjects } from "@/content";
import type { Locale } from "@/i18n/routing";
import { ProjectCard } from "./project-card";
import { ProjectCarousel } from "./project-carousel";

export async function ProjectsSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale });

  const cards = featuredProjects.map((project, index) => (
    <ProjectCard
      key={project.slug}
      project={project}
      locale={locale}
      href={`/projects/${project.slug}`}
      alternate={index % 2 === 1}
      coverClassName="aspect-16/10 sm:aspect-16/9"
    />
  ));

  return (
    <Section id="work">
      <Reveal>
        <SectionHeading
          label={t("sections.workLabel")}
          title={t("sections.workTitle")}
          description={t("sections.workDescription")}
        />
      </Reveal>

      <Reveal delay={0.1}>
        <ProjectCarousel
          label={t("project.carouselLabel")}
          prevLabel={t("project.prev")}
          nextLabel={t("project.next")}
        >
          {cards}
        </ProjectCarousel>
      </Reveal>
    </Section>
  );
}
