import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Mono uppercase eyebrow, e.g. "01 — Experience". */
  label: string;
  title: ReactNode;
  description?: ReactNode;
  as?: "h2" | "h3";
  className?: string;
  id?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  as: Heading = "h2",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-[clamp(2.5rem,5vw,4rem)] grid gap-4 lg:grid-cols-2 lg:items-end lg:gap-12",
        className,
      )}
    >
      <div>
        <p className="mb-4 font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
          {label}
        </p>
        <Heading
          id={id}
          className="text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] font-medium tracking-[-0.03em] text-balance"
        >
          {title}
        </Heading>
      </div>

      {description ? (
        <p className="max-w-[34ch] leading-[1.7] text-muted lg:justify-self-end">
          {description}
        </p>
      ) : null}
    </div>
  );
}
