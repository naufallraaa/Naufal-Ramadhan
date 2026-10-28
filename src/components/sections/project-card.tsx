import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { pick, type Project } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Counter } from "@/components/ui/counter";
import { ProjectCover } from "./project-cover";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  /** Omit until the project detail route exists, so no card links to a 404. */
  href?: string;
  /** Alternates the cover gradient so stacked cards do not look identical. */
  alternate?: boolean;
  coverClassName?: string;
};

export function ProjectCard({
  project,
  locale,
  href,
  alternate = false,
  coverClassName,
}: ProjectCardProps) {
  const interactive = Boolean(href);

  const body = (
    <div
      className="glare-line relative overflow-hidden rounded-2xl border border-line bg-surface"
      style={
        { "--sweep-delay": alternate ? "2.5s" : "0s" } as CSSProperties
      }
    >
      <ProjectCover
        project={project}
        alternate={alternate}
        className={cn(
          interactive &&
            "transition-transform duration-300 ease-out group-hover:scale-[1.03]",
          coverClassName,
        )}
      />

      <div className="border-t border-line p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-2xl font-medium tracking-[-0.02em]">
            {pick(project.title, locale)}
          </h3>
          {interactive ? (
            <ArrowUpRight
              className="size-5 shrink-0 text-brand-text transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          ) : null}
        </div>

        <p className="mt-2 font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
          {pick(project.role, locale)} · {project.year}
        </p>

        <p className="mt-4 line-clamp-2 max-w-[46ch] leading-[1.7] text-muted">
          {pick(project.summary, locale)}
        </p>

        {project.metrics?.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
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
      </div>
    </div>
  );

  const shell =
    "block rounded-[24px] border border-line/80 bg-surface/50 p-2 shadow-[0_20px_50px_-15px_rgba(74,4,4,0.18),0_10px_25px_-5px_rgba(28,20,20,0.06)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_40px_-10px_rgba(226,106,94,0.1)] transition-[border-color,box-shadow,transform] duration-300 ease-out";

  if (!href) {
    return <article className={shell}>{body}</article>;
  }

  return (
    <Link
      href={href}
      className={cn(
        shell,
        "group hover:-translate-y-1 hover:border-brand-text hover:shadow-[0_28px_65px_-12px_rgba(74,4,4,0.25)] dark:hover:shadow-[0_32px_75px_-15px_rgba(0,0,0,0.85)] focus-visible:-translate-y-1 focus-visible:border-brand-text",
      )}
    >
      {body}
    </Link>
  );
}
