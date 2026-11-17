"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { homeSectionIds, mainNav } from "@/config/site";
import { CartCount } from "@/features/cart/components/CartCount";
import { isNavItemActive } from "./isNavItemActive";
import { useActiveSection } from "./useActiveSection";

const SECTION_IDS = Object.values(homeSectionIds);

// Main menu links; the highlight follows the page, or the section in view on the home page.
export function MainNav() {
  const pathname = usePathname();
  const activeSection = useActiveSection(SECTION_IDS, pathname === "/");

  return (
    <nav
      aria-label="Үндсэн цэс"
      className="-mx-4 flex w-[calc(100%+32px)] items-center gap-1 overflow-x-auto px-4 [scrollbar-width:none] md:mx-0 md:w-auto md:px-0"
    >
      {mainNav.map((item) => {
        const active = isNavItemActive(item, pathname, activeSection);
        const isCart = item.href === "/cart";
        const colors = isCart
          ? "ml-auto bg-grass text-white hover:bg-grass-deep md:ml-2"
          : active
            ? "bg-grass-light text-grass-deep"
            : "hover:bg-mist hover:text-grass-deep";
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? (pathname === "/" && "section" in item ? "location" : "page") : undefined}
            className={`nav-link ${colors}`}
          >
            {item.label}
            {item.href === "/cart" && <CartCount />}
          </Link>
        );
      })}
    </nav>
  );
}
