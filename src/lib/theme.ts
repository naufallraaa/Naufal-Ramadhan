export const themeScript = `(() => {
  try {
    const stored = localStorage.getItem("theme");
    const dark = stored === "dark";
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  } catch {}
})();`;

export const preloaderScript = `(() => {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.classList.remove("has-preloader");
    }
  } catch {}
})();`;

