"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type NavItem = { key: string; href: string; label: string };

type MobileNavProps = {
  items: NavItem[];
  label: string;
  closeLabel: string;
  openLabel: string;
};

export function MobileNav({
  items,
  label,
  closeLabel,
  openLabel,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const sheet = sheetRef.current;
    sheet?.querySelector<HTMLElement>("a, button")?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !sheet) return;

      const focusable = sheet.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={openLabel}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="inline-flex size-10 items-center justify-center rounded-lg border border-line text-ink transition-colors hover:bg-surface lg:hidden"
      >
        <Menu className="size-4" aria-hidden="true" />
      </button>

      <div
        id="mobile-nav"
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className={cn(
          "fixed inset-0 z-[100] flex-col bg-bg lg:hidden",
          open ? "flex" : "hidden",
        )}
      >
        <div className="flex h-16 items-center justify-end px-5 sm:px-8">
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              triggerRef.current?.focus();
            }}
            aria-label={closeLabel}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-line text-ink transition-colors hover:bg-surface"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-5 pt-6 sm:px-8">
          {items.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 text-2xl font-medium tracking-[-0.02em] text-ink transition-colors hover:text-brand-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
