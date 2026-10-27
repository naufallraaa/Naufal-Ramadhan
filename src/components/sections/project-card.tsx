import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { pick, type Project } from "@/lib/content";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  /** Omit until the project detail route exists, so no card links to a 404. */
  href?: string;
  /** Alternates the cover gradient so stacked cards do not look identical. */
  alternate?: boolean;
};

export function ProjectCard({
  project,
  locale,
  href,
  alternate = false,
}: ProjectCardProps) {
  const interactive = Boolean(href);

  const body = (
    <div className="glare-line relative overflow-hidden rounded-2xl border border-line bg-surface">
      <div
        className={cn(
          "grid aspect-4/3 place-items-center",
          alternate
            ? "bg-[radial-gradient(circle_at_70%_30%,rgb(226_106_94/28%),transparent_55%),radial-gradient(circle_at_25%_75%,rgb(107_8_8/95%),transparent_60%),linear-gradient(200deg,#2e0202,#4a0404_60%,#2e0202)]"
            : "bg-[radial-gradient(circle_at_30%_25%,rgb(226_106_94/35%),transparent_55%),radial-gradient(circle_at_75%_70%,rgb(74_4_4/90%),transparent_60%),linear-gradient(145deg,#2e0202,#4a0404_55%,#6b0808)]",
        )}
      >
        <span className="font-serif text-[clamp(2.25rem,4vw,3.25rem)] text-on-brand/85 italic">
          {project.metrics?.[0]?.value ?? project.year}
        </span>
      </div>

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
                  {metric.value}
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
    "block rounded-[22px] border border-line p-1.5 transition-[border-color,transform] duration-200 ease-out";

  if (!href) {
    return <article className={shell}>{body}</article>;
  }

  return (
    <Link
      href={href}
      className={cn(
        shell,
        "group hover:-translate-y-0.5 hover:border-brand-text focus-visible:-translate-y-0.5 focus-visible:border-brand-text",
      )}
    >
      {body}
    </Link>
  );
}

export function ProjectGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-6 md:grid-cols-2">{children}</div>;
}
