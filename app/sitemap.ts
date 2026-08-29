import type { MetadataRoute } from "next";
import { publicRoutes } from "../site.config.mjs";
import { siteInfo } from "./content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const canonicalRoutes = publicRoutes.filter((route) => ![
    "/publication",
    "/lab-life",
    "/research/tutorial-continual-recommender-systems",
    "/events/dasfaa26-tutorial-continual-recommender-systems",
    "/events/cikm25-tutorial-continual-recommender-systems",
  ].includes(route));

  return canonicalRoutes.map((route) => ({
    url: new URL(route.replace(/^\//, ""), `${siteInfo.url}/`).toString(),
    changeFrequency: route === "/news" ? "weekly" : route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : ["/research", "/people", "/publications", "/join"].includes(route) ? 0.8 : 0.6,
  }));
}
