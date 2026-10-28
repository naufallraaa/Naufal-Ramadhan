import { techGroups } from "@/content";

/**
 * Decorative marquee strip; content mirrors the stack section, so it is
 * aria-hidden for screen readers and reads from content data, not copy.
 */
export function TickerStrip() {
  const items = techGroups.flatMap((group) => group.items);
  const track = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-line bg-surface py-3"
    >
      <div className="ticker-track flex w-max gap-8">
        {track.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-8 font-mono text-[11px] tracking-[0.12em] whitespace-nowrap text-muted uppercase"
          >
            {item}
            <span className="text-brand-text">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
