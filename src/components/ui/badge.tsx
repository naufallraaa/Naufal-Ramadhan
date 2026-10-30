import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  interactive?: boolean;
  className?: string;
};

export function Badge({
  children,
  interactive = false,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-ink",
        interactive &&
          "group cursor-default transition-colors duration-150 ease-out hover:border-brand hover:bg-brand hover:text-on-brand",
        className,
      )}
    >
      {children}
    </span>
  );
}
