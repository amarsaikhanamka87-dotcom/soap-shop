import type { Metadata } from "next";
import { Old_Standard_TT, PT_Mono, PT_Serif } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { siteConfig } from "@/config/site";
import "./globals.css";

// Newspaper-style faces with Cyrillic support.
const displayFont = Old_Standard_TT({
  variable: "--font-old-standard",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});

const bodyFont = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const monoFont = PT_Mono({
  variable: "--font-pt-mono",
  subsets: ["latin", "cyrillic"],
  weight: "400",
});

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s · ${siteConfig.name}` },
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="mn" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
