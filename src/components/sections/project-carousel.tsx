"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { cn } from "@/lib/utils";

type ProjectCarouselProps = {
  children: ReactNode[];
  label: string;
  prevLabel: string;
  nextLabel: string;
};

/**
 * "Choose Your Character" stage slide:
 * - Glides with a weighted cinematic ease [0.16, 1, 0.3, 1].
 * - Depth scale (0.86 -> 1.0) and subtle 3D perspective swing.
 * - Out-of-focus blur simulation for non-active cards.
 */
const characterSlideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "70%" : "-70%",
    scale: 0.86,
    opacity: 0,
    rotateY: direction > 0 ? 8 : -8,
    filter: "blur(6px)",
  }),
  center: {
    zIndex: 1,
    x: 0,
    scale: 1,
    opacity: 1,
    rotateY: 0,
    filter: "blur(0px)",
    transition: {
      x: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
      scale: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
      rotateY: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.45, ease: "easeOut" },
      filter: { duration: 0.45, ease: "easeOut" },
    },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "70%" : "-70%",
    scale: 0.86,
    opacity: 0,
    rotateY: direction < 0 ? 8 : -8,
    filter: "blur(6px)",
    transition: {
      x: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      scale: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      rotateY: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.35, ease: "easeIn" },
      filter: { duration: 0.35, ease: "easeIn" },
    },
  }),
};

export function ProjectCarousel({
  children,
  label,
  prevLabel,
  nextLabel,
}: ProjectCarouselProps) {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const reduced = useReducedMotion();
  const total = children.length;

  // Modulo index for infinite looping (supports negative numbers seamlessly)
  const currentIndex = ((page % total) + total) % total;

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setPage((prev) => prev + newDirection);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        paginate(-1);
      } else if (e.key === "ArrowRight") {
        paginate(1);
      }
    },
    [paginate]
  );

  return (
    <div
      role="region"
      aria-label={label}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="relative mx-auto max-w-[920px] px-2 py-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-text"
    >
      {/* Floating Ambient Floor Glow / Pedestal Shadow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 h-16 w-3/4 rounded-full bg-brand-text/15 blur-3xl transition-all duration-700 dark:bg-brand-text/25"
      />

      {/* Floating Nav Paddle: Left */}
      <button
        type="button"
        onClick={() => paginate(-1)}
        aria-label={prevLabel}
        className="group absolute -left-2 sm:-left-16 lg:-left-20 top-[28%] sm:top-1/2 -translate-y-1/2 z-20 flex h-14 w-10 sm:h-20 sm:w-13 items-center justify-center rounded-2xl sm:rounded-3xl border border-line/70 bg-surface/75 backdrop-blur-2xl text-ink shadow-[0_12px_32px_rgba(74,4,4,0.12)] transition-all duration-300 hover:scale-108 hover:border-brand-text hover:bg-surface hover:text-brand-text hover:shadow-[0_16px_40px_rgba(74,4,4,0.25)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-text dark:bg-surface/55 dark:shadow-[0_16px_40px_rgba(0,0,0,0.6)] dark:hover:shadow-[0_16px_40px_rgba(226,106,94,0.3)]"
      >
        <ChevronLeft
          className="size-5 sm:size-6 transition-transform duration-200 ease-out group-hover:-translate-x-1.5"
          strokeWidth={2.25}
          aria-hidden="true"
        />
      </button>

      {/* Floating Nav Paddle: Right */}
      <button
        type="button"
        onClick={() => paginate(1)}
        aria-label={nextLabel}
        className="group absolute -right-2 sm:-right-16 lg:-right-20 top-[28%] sm:top-1/2 -translate-y-1/2 z-20 flex h-14 w-10 sm:h-20 sm:w-13 items-center justify-center rounded-2xl sm:rounded-3xl border border-line/70 bg-surface/75 backdrop-blur-2xl text-ink shadow-[0_12px_32px_rgba(74,4,4,0.12)] transition-all duration-300 hover:scale-108 hover:border-brand-text hover:bg-surface hover:text-brand-text hover:shadow-[0_16px_40px_rgba(74,4,4,0.25)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-text dark:bg-surface/55 dark:shadow-[0_16px_40px_rgba(0,0,0,0.6)] dark:hover:shadow-[0_16px_40px_rgba(226,106,94,0.3)]"
      >
        <ChevronRight
          className="size-5 sm:size-6 transition-transform duration-200 ease-out group-hover:translate-x-1.5"
          strokeWidth={2.25}
          aria-hidden="true"
        />
      </button>

      {/* 3D Perspective Stage Viewport */}
      <div className="relative overflow-hidden rounded-[26px] [perspective:1200px]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={reduced ? undefined : characterSlideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (offset.x < -50 || swipe < -600) {
                paginate(1);
              } else if (offset.x > 50 || swipe > 600) {
                paginate(-1);
              }
            }}
            className="w-full select-none cursor-grab active:cursor-grabbing [transform-style:preserve-3d]"
          >
            <div className="float-soft">
              {children[currentIndex]}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Character Roster Status & Selection Controls */}
      <div className="mt-8 flex items-center justify-between px-3 font-mono text-xs text-muted">
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-brand-text animate-pulse" />
          <span className="tabular-nums font-medium text-ink">
            0{currentIndex + 1}
          </span>
          <span className="text-line">/</span>
          <span className="tabular-nums">0{total}</span>
        </div>

        {/* Interactive Character Slot Indicators */}
        <div className="flex gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setPage((prev) => prev + (i - currentIndex));
              }}
              aria-label={`Pilih karya 0${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === currentIndex
                  ? "w-9 bg-brand-text shadow-[0_0_12px_rgba(74,4,4,0.4)] dark:shadow-[0_0_12px_rgba(226,106,94,0.5)]"
                  : "w-2.5 bg-line hover:bg-muted/70"
              )}
            />
          ))}
        </div>

        <span className="text-[11px] tracking-widest uppercase text-muted">
          ROSTER
        </span>
      </div>
    </div>
  );
}
