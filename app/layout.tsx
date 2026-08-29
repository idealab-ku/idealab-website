import type { Metadata } from "next";
import "./globals.css";
import { siteInfo } from "./content/site";
import { sitePath } from "./site-path";

export const metadata: Metadata = {
  metadataBase: new URL(siteInfo.url),
  title: `${siteInfo.shortName} — ${siteInfo.university}`,
  description: `${siteInfo.fullName} at ${siteInfo.university}.`,
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4SCQF7FXG3" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4SCQF7FXG3');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
