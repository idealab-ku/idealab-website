import type { MetadataRoute } from "next";
import { siteInfo } from "./content/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
    ],
    sitemap: `${siteInfo.url}/sitemap.xml`,
    host: siteInfo.url,
  };
}
