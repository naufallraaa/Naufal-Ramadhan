"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

/**
 * Counts a stat up from 0 when scrolled into view, e.g. "0.91", "120k", "−18%".
 * Anything that is not a number stays static, so labels/units pass through.
 */
export function Counter({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView || reduced || !ref.current) {
      return;
    }

    const match = text.match(/^([^\d.-]*)(-?\d+(?:\.\d+)?)(.*)$/);
    if (!match) {
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const target = Number.parseFloat(numStr);
    const decimals = numStr.includes(".")
      ? numStr.split(".")[1]!.length
      : 0;

    const controls = animate(0, target, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (value) => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [inView, reduced, text]);

  return <span ref={ref}>{text}</span>;
}
