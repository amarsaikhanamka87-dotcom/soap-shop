import type { mainNav } from "@/config/site";

type NavItem = (typeof mainNav)[number];

/**
 * Whether a menu item should be highlighted.
 * On the home page it follows the section in view (`activeSection`, null at the hero);
 * on other pages it matches the URL.
 */
export function isNavItemActive(item: NavItem, pathname: string, activeSection: string | null): boolean {
  if (pathname === "/") {
    if ("section" in item) return item.section === activeSection;
    return item.href === "/" && activeSection === null;
  }
  if ("page" in item) return pathname.startsWith(item.page);
  return item.href !== "/" && pathname.startsWith(item.href);
}
