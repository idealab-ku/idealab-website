import type { Metadata } from "next";
import "./globals.css";
import { siteInfo } from "./content/site";
import { sitePath } from "./site-path";

export const metadata: Metadata = {
  metadataBase: new URL(siteInfo.url),
  title: {
    default: `${siteInfo.shortName} — ${siteInfo.university}`,
    template: `%s | ${siteInfo.shortName}`,
  },
  description: `${siteInfo.fullName} at ${siteInfo.university}, researching recommender systems, information retrieval, data mining, and large language models.`,
  applicationName: siteInfo.shortName,
  keywords: [
    "IDEA Lab",
    "Korea University",
    "recommender systems",
    "information retrieval",
    "data mining",
    "large language models",
    "artificial intelligence",
  ],
  authors: [{ name: siteInfo.fullName, url: siteInfo.url }],
  creator: siteInfo.fullName,
  publisher: siteInfo.university,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: sitePath("/favicon.ico") },
      { url: sitePath("/favicon-16.png"), sizes: "16x16", type: "image/png" },
      { url: sitePath("/favicon-32.png"), sizes: "32x32", type: "image/png" },
      { url: sitePath("/favicon-192.png"), sizes: "192x192", type: "image/png" },
      { url: sitePath("/favicon-512.png"), sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: sitePath("/apple-touch-icon.png"), sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5RXZS3JK9S" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5RXZS3JK9S');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
