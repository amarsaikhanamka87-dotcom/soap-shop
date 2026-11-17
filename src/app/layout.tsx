import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { siteConfig } from "@/config/site";
import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s · ${siteConfig.name}` },
  description: siteConfig.description,
};

// Shell shared by every page: phone strip, header, page content, footer.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="mn"
      // Smooth scrolling for menu links to home sections; data-scroll-behavior keeps
      // page-to-page navigation an instant jump to the top.
      data-scroll-behavior="smooth"
      className={`scroll-smooth motion-reduce:scroll-auto ${fontVariables}`}
    >
      <body className="flex min-h-screen flex-col">
        <AnnouncementBar />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
