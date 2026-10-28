const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const MONTHS_ID = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

/**
 * Formats a `YYYY-MM` value as `Jul 2023`. Deliberately not Intl-based: the
 * output must be identical on server and client, and short month names vary
 * between ICU versions.
 */
function formatMonth(value: string, locale: "id" | "en"): string {
  const [year, month] = value.split("-");
  const index = Number(month) - 1;
  const names = locale === "id" ? MONTHS_ID : MONTHS;

  return `${names[index]} ${year}`;
}

export function formatPeriod(
  start: string,
  end: string | null,
  locale: "id" | "en",
  presentLabel: string,
): string {
  const from = formatMonth(start, locale);
  const to = end ? formatMonth(end, locale) : presentLabel;

  return `${from} — ${to}`;
}
