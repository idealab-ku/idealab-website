import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IDEA Lab — Korea University",
  description: "Intelligent Data Science and Applications Lab at Korea University.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
