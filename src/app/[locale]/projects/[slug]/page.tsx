import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Counter } from "@/components/ui/counter";
import { Pop } from "@/components/ui/pop";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { profile, projects } from "@/content";
import { pick } from "@/lib/content";
import { ProjectCover } from "@/components/sections/project-cover";

type ProjectDetailProps = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${pick(project.title, locale)} — ${profile.name}`,
    description: pick(project.summary, locale),
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: {
        id: `/id/projects/${slug}`,
        en: `/en/projects/${slug}`,
        "x-default": `/id/projects/${slug}`,
      },
    },
    openGraph: {
      title: pick(project.title, locale),
      description: pick(project.summary, locale),
      type: "article",
      url: `/${locale}/projects/${slug}`,
      locale: locale === "id" ? "id_ID" : "en_US",
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailProps) {
  // Suspense menjaga shell tetap instant saat navigasi (Cache Components).
  return (
    <Suspense>
      <ProjectDetail params={params} />
    </Suspense>
  );
}

async function ProjectDetail({ params }: ProjectDetailProps) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "project" });

  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];
  if (index === -1 || !project) {
    notFound();
  }

  const prev = projects[(index + projects.length - 1) % projects.length]!;
  const next = projects[(index + 1) % projects.length]!;
  const paragraphs = project.content ?? [project.summary];

  const links = [
    { href: project.links?.live, label: t("linksLive") },
    { href: project.links?.repo, label: t("linksRepo") },
    { href: project.links?.paper, label: t("linksPaper") },
  ].filter((link): link is { href: string; label: string } =>
    Boolean(link.href),
  );

  return (
    <Section divided={false}>
      <Container>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-muted uppercase transition-colors hover:text-ink"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          {t("back")}
        </Link>

        <Reveal>
          <header className="mt-10">
          <h1 className="max-w-[20ch] text-[clamp(2.5rem,5.5vw,4.25rem)] leading-[0.95] font-medium tracking-[-0.03em] text-balance">
            {pick(project.title, locale)}
          </h1>
          <p className="mt-6 font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
            {pick(project.role, locale)} · {project.year} ·{" "}
            {t(`category.${project.category}`)}
          </p>

          {project.metrics?.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <span
                  key={`${metric.label.en}-${metric.value}`}
                  className="inline-flex items-baseline gap-2 rounded-full border border-line px-3 py-1.5"
                >
                  <b className="text-sm font-medium tabular-nums">
                    <Counter text={metric.value} />
                  </b>
                  <span className="text-xs text-muted">
                    {pick(metric.label, locale)}
                  </span>
                </span>
              ))}
            </div>
          ) : null}
          </header>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glare-line relative mt-12 overflow-hidden rounded-[22px] border border-line bg-surface p-1.5">
            <div className="overflow-hidden rounded-2xl">
              <ProjectCover project={project} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-[clamp(3rem,6vw,5rem)] grid gap-10 lg:grid-cols-[1fr_16rem] lg:gap-16">
          <div className="max-w-[62ch] space-y-6 text-[17px] leading-[1.75]">
            {paragraphs.map((paragraph, paragraphIndex) => (
              <p
                key={paragraph.en}
                className={paragraphIndex === 0 ? "text-ink" : "text-muted"}
              >
                {pick(paragraph, locale)}
              </p>
            ))}
          </div>

          <aside className="h-fit space-y-8 lg:sticky lg:top-24">
            <div>
              <p className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
                {t("stackLabel")}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech, index) => (
                  <Pop key={tech} delay={index * 0.06}>
                    <Badge>{tech}</Badge>
                  </Pop>
                ))}
              </div>
            </div>

            {links.length ? (
              <div>
                <p className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
                  {t("linksLabel")}
                </p>
                <div className="mt-3 flex flex-col items-start gap-2">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-[10px] border border-line px-4 py-2.5 text-sm transition-colors hover:border-brand-text"
                    >
                      {link.label}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <nav
            aria-label={t("navLabel")}
            className="mt-[clamp(3rem,6vw,5rem)] grid gap-8 border-t border-line pt-8 sm:grid-cols-2"
          >
          <Link href={`/projects/${prev.slug}`} className="group">
            <span className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
              ← {t("prev")}
            </span>
            <span className="mt-2 block text-lg font-medium tracking-[-0.02em] transition-colors group-hover:text-brand-text">
              {pick(prev.title, locale)}
            </span>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group sm:text-right"
          >
            <span className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
              {t("next")} →
            </span>
            <span className="mt-2 block text-lg font-medium tracking-[-0.02em] transition-colors group-hover:text-brand-text">
              {pick(next.title, locale)}
            </span>
          </Link>
          </nav>
        </Reveal>
      </Container>
    </Section>
  );
}
