import type { MetadataRoute } from "next";
import { publicRoutes } from "../site.config.mjs";
import { siteInfo } from "./content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: new URL(route.replace(/^\//, ""), `${siteInfo.url}/`).toString(),
  }));
}
