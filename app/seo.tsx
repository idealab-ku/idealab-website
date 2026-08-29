import type { Metadata } from "next";
import { siteInfo } from "./content/site";
import { sitePath } from "./site-path";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function pageMetadata({ title, description, path, image = "/favicon-512.png" }: PageMetadataInput): Metadata {
  const canonical = new URL(path, `${siteInfo.url}/`).toString();
  const imageUrl = new URL(sitePath(image), `${siteInfo.url}/`).toString();

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: siteInfo.shortName,
      title,
      description,
      url: canonical,
      images: [{ url: imageUrl, width: 512, height: 512, alt: `${siteInfo.shortName} logo` }],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function legacyPageMetadata(canonicalPath: string): Metadata {
  return {
    alternates: { canonical: new URL(canonicalPath, `${siteInfo.url}/`).toString() },
    robots: { index: false, follow: true },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
