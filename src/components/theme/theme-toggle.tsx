"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  return () => observer.disconnect();
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

export function ThemeToggle({ label }: { label: string }) {
  const isDark = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  function toggle() {
    const next = !isDark;

    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";

    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Storage can be unavailable; the class toggle still works.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={isDark}
      className="inline-flex size-10 items-center justify-center rounded-lg border border-line text-ink transition-colors hover:bg-surface"
    >
      {isDark ? (
        <Sun className="size-4" aria-hidden="true" />
      ) : (
        <Moon className="size-4" aria-hidden="true" />
      )}
    </button>
  );
}
