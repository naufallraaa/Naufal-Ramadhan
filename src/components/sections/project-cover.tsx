import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { Locale } from "@/i18n/routing";
import type { Project } from "@/lib/content";
import { pick } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Counter } from "@/components/ui/counter";

type ProjectCoverProps = {
  project: Project;
  /** Alternates the gradient so stacked covers do not look identical. */
  alternate?: boolean;
  className?: string;
  locale?: Locale;
};

export function ProjectCover({
  project,
  alternate = false,
  className,
  locale = "id",
}: ProjectCoverProps) {
  // Check if image file actually exists in public folder
  const cleanPath = project.cover.replace(/^\//, "");
  const fullPath = path.join(process.cwd(), "public", cleanPath);
  const hasImage = fs.existsSync(fullPath);

  if (hasImage) {
    return (
      <div
        className={cn(
          "relative grid aspect-4/3 w-full overflow-hidden bg-brand-deep",
          className,
        )}
      >
        <Image
          src={project.cover}
          alt={pick(project.title, locale)}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 920px"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          priority={project.featured}
        />
        {/* Subtle cinematic gradient overlay to preserve contrast and depth */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40"
        />
      </div>
    );
  }

  // Graceful editorial gradient fallback when image is not yet available
  return (
    <div
      className={cn(
        "grid aspect-4/3 place-items-center",
        alternate
          ? "bg-[radial-gradient(circle_at_70%_30%,rgb(226_106_94/28%),transparent_55%),radial-gradient(circle_at_25%_75%,rgb(107_8_8/95%),transparent_60%),linear-gradient(200deg,#2e0202,#4a0404_60%,#2e0202)]"
          : "bg-[radial-gradient(circle_at_30%_25%,rgb(226_106_94/35%),transparent_55%),radial-gradient(circle_at_75%_70%,rgb(74_4_4/90%),transparent_60%),linear-gradient(145deg,#2e0202,#4a0404_55%,#6b0808)]",
        className,
      )}
    >
      <span
        className="float-soft font-serif text-[clamp(2.25rem,4vw,3.25rem)] text-on-brand/85 italic"
        style={{ animationDelay: alternate ? "1.8s" : "0.9s" }}
      >
        <Counter text={String(project.metrics?.[0]?.value ?? project.year)} />
      </span>
    </div>
  );
}
