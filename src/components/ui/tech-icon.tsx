import type { ComponentType, SVGProps } from "react";
import {
  SiAnthropic,
  SiCss,
  SiCursor,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiGnubash,
  SiGooglegemini,
  SiGraphql,
  SiHermes,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLaravel,
  SiLinux,
  SiLooker,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOpencv,
  SiPandas,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiRadixui,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiSupabase,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiUbuntu,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { IoLogoTableau } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { FaAws } from "react-icons/fa6";
import { ChartLine, Code2, Database, Globe, Server } from "lucide-react";
import { cn } from "@/lib/utils";

type IconComponent = ComponentType<
  SVGProps<SVGSVGElement> & { className?: string; size?: number | string }
>;

const ICON_MAP: Record<string, IconComponent> = {
  // AI & Augmented Tools
  cursor: SiCursor,
  "github copilot": SiGithubcopilot,
  copilot: SiGithubcopilot,
  claude: SiAnthropic,
  anthropic: SiAnthropic,
  chatgpt: RiOpenaiFill,
  openai: RiOpenaiFill,
  gemini: SiGooglegemini,
  "google gemini": SiGooglegemini,
  hermes: SiHermes,

  // AI, ML & Data
  python: SiPython,
  tensorflow: SiTensorflow,
  opencv: SiOpencv,
  "scikit-learn": SiScikitlearn,
  sklearn: SiScikitlearn,
  pandas: SiPandas,
  tableau: IoLogoTableau,
  "looker studio": SiLooker,
  looker: SiLooker,
  seaborn: ChartLine,

  // Frontend
  react: SiReact,
  "next.js": SiNextdotjs,
  nextjs: SiNextdotjs,
  next: SiNextdotjs,
  vite: SiVite,
  "tailwind css": SiTailwindcss,
  tailwind: SiTailwindcss,
  tailwindcss: SiTailwindcss,
  "radix ui": SiRadixui,
  radix: SiRadixui,
  typescript: SiTypescript,
  ts: SiTypescript,
  javascript: SiJavascript,
  js: SiJavascript,
  html: SiHtml5,
  html5: SiHtml5,
  css: SiCss,
  css3: SiCss,

  // Backend & API
  "node.js": SiNodedotjs,
  nodejs: SiNodedotjs,
  node: SiNodedotjs,
  "express.js": SiExpress,
  expressjs: SiExpress,
  express: SiExpress,
  laravel: SiLaravel,
  php: SiPhp,
  fastapi: SiFastapi,
  "rest api": Globe,
  rest: Globe,
  api: Globe,
  jwt: SiJsonwebtokens,
  graphql: SiGraphql,

  // Databases & ORM
  postgresql: SiPostgresql,
  postgres: SiPostgresql,
  "prisma orm": SiPrisma,
  prisma: SiPrisma,
  mysql: SiMysql,
  mongodb: SiMongodb,
  redis: SiRedis,
  supabase: SiSupabase,
  sql: Database,

  // DevOps & Tools
  "vps hosting": Server,
  vps: Server,
  docker: SiDocker,
  "docker compose": SiDocker,
  nginx: SiNginx,
  git: SiGit,
  github: SiGithub,
  "vs code": VscVscode,
  vscode: VscVscode,
  postman: SiPostman,
  bash: SiGnubash,
  linux: SiLinux,
  ubuntu: SiUbuntu,
  aws: FaAws,
  vercel: SiVercel,
  figma: SiFigma,
};

type TechIconProps = {
  name: string;
  className?: string;
  size?: number | string;
};

export function TechIcon({ name, className, size }: TechIconProps) {
  const normalized = name.toLowerCase().trim();
  const Icon = ICON_MAP[normalized] ?? Code2;

  return (
    <Icon
      className={cn(
        "size-3.5 shrink-0 transition-transform duration-150 ease-out group-hover:scale-110",
        className,
      )}
      size={size}
      aria-hidden="true"
    />
  );
}
