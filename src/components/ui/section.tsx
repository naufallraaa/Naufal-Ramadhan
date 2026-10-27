import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  /** Adds a 1px top border, matching the tile's section rhythm. */
  divided?: boolean;
};

export function Section({
  children,
  id,
  className,
  containerClassName,
  divided = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-[clamp(4.5rem,9vw,9rem)]",
        divided && "border-t border-line",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
