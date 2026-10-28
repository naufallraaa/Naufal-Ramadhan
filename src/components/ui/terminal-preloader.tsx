"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const FULL_COMMAND = "naufal init --runtime=fullstack-ai";

export function TerminalPreloader() {
  const [active, setActive] = useState(true);
  const [commandText, setCommandText] = useState("");
  const [step, setStep] = useState<number>(0);
  const dismissedRef = useRef(false);

  const dismiss = useCallback(() => {
    if (dismissedRef.current) return;
    dismissedRef.current = true;
    try {
      document.documentElement.classList.remove("has-preloader");
    } catch {}
    setActive(false);
  }, []);

  // Ensure cleanup on unmount
  useEffect(() => {
    return () => {
      try {
        document.documentElement.classList.remove("has-preloader");
      } catch {}
    };
  }, []);

  // Keyboard shortcut listener (ESC, Space, Enter to skip)
  useEffect(() => {
    if (!active) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      dismiss();
      return;
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        dismiss();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, dismiss]);

  // Terminal animation progression
  useEffect(() => {
    if (!active) return;

    const timeouts: ReturnType<typeof setTimeout>[] = [];
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (dismissedRef.current) {
        clearInterval(typeInterval);
        return;
      }

      charIndex += 1; // Relaxed natural typing pace (1 char per 42ms)
      if (charIndex >= FULL_COMMAND.length) {
        setCommandText(FULL_COMMAND);
        clearInterval(typeInterval);

        // Step 1: Services loaded (pause 500ms after typing)
        timeouts.push(
          setTimeout(() => {
            if (dismissedRef.current) return;
            setStep(1);

            // Step 2: System status 200 OK (read for 1000ms)
            timeouts.push(
              setTimeout(() => {
                if (dismissedRef.current) return;
                setStep(2);

                // Step 3: Prompt ready (read for 1000ms)
                timeouts.push(
                  setTimeout(() => {
                    if (dismissedRef.current) return;
                    setStep(3);

                    // Step 4: Auto exit after showing ready (hold for 1400ms)
                    timeouts.push(
                      setTimeout(() => {
                        dismiss();
                      }, 1400),
                    );
                  }, 1000),
                );
              }, 1000),
            );
          }, 500),
        );
      } else {
        setCommandText(FULL_COMMAND.slice(0, charIndex));
      }
    }, 42);

    return () => {
      clearInterval(typeInterval);
      timeouts.forEach(clearTimeout);
    };
  }, [active, dismiss]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="terminal-preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#100101] px-4 select-none"
          style={{
            backgroundColor: "#100101",
            backgroundImage:
              "radial-gradient(circle at 50% 40%, rgba(107, 8, 8, 0.28), transparent 70%), linear-gradient(180deg, #160202 0%, #0d0101 100%)",
          }}
        >
          {/* macOS Terminal Window */}
          <motion.div
            initial={{ opacity: 1, scale: 1, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: -12,
              transition: { duration: 0.25, ease: "easeIn" },
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[560px] overflow-hidden rounded-2xl border border-white/12 bg-[#180303]/90 shadow-[0_35px_90px_-15px_rgba(0,0,0,0.9),0_0_50px_-10px_rgba(226,106,94,0.18)] backdrop-blur-2xl ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* macOS Window Header */}
            <div className="flex h-10 items-center justify-between border-b border-white/8 bg-white/[0.03] px-4">
              {/* Traffic Light Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={dismiss}
                  aria-label="Tutup dan lewati intro"
                  className="size-3 cursor-pointer rounded-full border border-[#e0443e]/70 bg-[#ff5f56] transition-transform hover:scale-110 active:scale-95"
                />
                <span className="size-3 rounded-full border border-[#dea123]/70 bg-[#ffbd2e]" />
                <span className="size-3 rounded-full border border-[#1aab29]/70 bg-[#27c93f]" />
              </div>

              {/* Window Title */}
              <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-white/55">
                <span className="text-white/30">~/portfolio</span>
                <span>—</span>
                <span className="text-white/70">zsh</span>
              </div>

              {/* Skip Button */}
              <button
                type="button"
                onClick={dismiss}
                className="cursor-pointer rounded border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] tracking-wider text-white/40 uppercase transition-all duration-150 hover:border-white/30 hover:bg-white/[0.08] hover:text-white/90 active:scale-95"
                title="Lewati (Tekan ESC)"
              >
                ESC
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-[13px] leading-relaxed text-white/90 sm:p-6 sm:text-[13.5px]">
              {/* Command Line */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-semibold text-[#e26a5e]">➜</span>
                <span className="font-medium text-[#ffbd2e]">~</span>
                <span className="text-white/90">{commandText}</span>
                {step === 0 && (
                  <span className="inline-block h-4 w-2 animate-pulse bg-[#e26a5e] align-middle" />
                )}
              </div>

              {/* Line 1: Services */}
              {step >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className="mt-2.5 flex items-start gap-2 text-white/75"
                >
                  <span className="text-[#27c93f]">✔</span>
                  <span>
                    modules loaded:{" "}
                    <span className="text-white/95">
                      [react, express, docker, deep-learning]
                    </span>
                  </span>
                </motion.div>
              )}

              {/* Line 2: Status */}
              {step >= 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className="mt-1.5 flex items-start gap-2 text-white/75"
                >
                  <span className="text-[#27c93f]">✔</span>
                  <span>
                    status:{" "}
                    <span className="font-semibold text-[#27c93f]">
                      200 OK
                    </span>
                    <span className="text-white/40"> — </span>
                    <span className="text-[#e26a5e]">naufal-ramadhan.my.id</span>
                  </span>
                </motion.div>
              )}

              {/* Line 3: Ready prompt */}
              {step >= 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  className="mt-3 flex items-center gap-2 text-white/60"
                >
                  <span className="text-[#e26a5e]">naufal@macbook:~$</span>
                  <span className="text-white/40">ready</span>
                  <span className="inline-block h-4 w-2 animate-pulse bg-white/75 align-middle" />
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
