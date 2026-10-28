import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

type TimelineRowProps = {
  period: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  /** Stagger so rows cascade instead of popping together. */
  delay?: number;
};

export function TimelineRow({
  period,
  title,
  subtitle,
  children,
  delay = 0,
}: TimelineRowProps) {
  return (
    <Reveal
      as="li"
      delay={delay}
      className="group grid gap-2 border-t border-line py-6 transition-colors duration-150 ease-out md:grid-cols-[10rem_1fr_1.2fr] md:items-baseline md:gap-8 hover:md:bg-surface"
    >
      <p className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
        {period}
      </p>

      <div>
        <p className="text-[17px] font-medium tracking-[-0.01em]">{title}</p>
        {subtitle ? (
          <span className="mt-1 block text-sm font-normal text-muted">
            {subtitle}
          </span>
        ) : null}
      </div>

      {children ? (
        <div className="text-[15px] leading-[1.7] text-muted">{children}</div>
      ) : null}
    </Reveal>
  );
}

export function TimelineList({ children }: { children: ReactNode }) {
  return <ul className="border-b border-line">{children}</ul>;
}
