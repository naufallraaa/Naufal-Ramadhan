import { cacheLife } from "next/cache";

export async function getCopyrightYear(): Promise<number> {
  "use cache";
  cacheLife("max");

  return new Date().getFullYear();
}
