export const themeScript = `(() => {
  try {
    const stored = localStorage.getItem("theme");
    const dark = stored === "dark";
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  } catch {}
})();`;
