import type { Project } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Counter } from "@/components/ui/counter";

type ProjectCoverProps = {
  project: Project;
  /** Alternates the gradient so stacked covers do not look identical. */
  alternate?: boolean;
  className?: string;
};

export function ProjectCover({
  project,
  alternate = false,
  className,
}: ProjectCoverProps) {
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
