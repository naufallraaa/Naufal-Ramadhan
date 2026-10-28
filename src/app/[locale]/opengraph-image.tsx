import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { profile } from "@/content";
import { pick } from "@/lib/content";
import type { Locale } from "@/i18n/routing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "OpenGraph image";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(145deg, #2e0202, #4a0404 55%, #6b0808)",
          color: "#faf7f4",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            opacity: 0.65,
            textTransform: "uppercase",
          }}
        >
          Portfolio / 2026
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 84, fontWeight: 600, letterSpacing: -3 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 40, opacity: 0.85 }}>
            {pick(profile.role, locale)}
          </div>
        </div>

        <div style={{ fontSize: 26, opacity: 0.65 }}>{t("description")}</div>
      </div>
    ),
    size,
  );
}
