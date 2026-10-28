"use client";

import type { ReactNode } from "react";
import { Link, usePathname } from "@/i18n/navigation";

type BrandLinkProps = {
  children: ReactNode;
  className?: string;
};

export function BrandLink({ children, className }: BrandLinkProps) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/" || pathname === "") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.hash) {
        window.history.pushState(null, "", window.location.pathname);
      }
    }
  };

  return (
    <Link href="/" onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
