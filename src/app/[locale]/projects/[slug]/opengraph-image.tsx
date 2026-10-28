import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { profile, projects } from "@/content";
import { pick } from "@/lib/content";
import type { Locale } from "@/i18n/routing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "OpenGraph image";

export default async function ProjectOpengraphImage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

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
          {`${pick(project.role, locale)} · ${project.year}`}
        </div>

        <div style={{ fontSize: 76, fontWeight: 600, letterSpacing: -3 }}>
          {pick(project.title, locale)}
        </div>

        <div style={{ fontSize: 32, opacity: 0.8 }}>
          {pick(project.summary, locale)}
        </div>

        <div style={{ fontSize: 24, opacity: 0.6 }}>
          {`${profile.name} — ${profile.site}`}
        </div>
      </div>
    ),
    size,
  );
}
