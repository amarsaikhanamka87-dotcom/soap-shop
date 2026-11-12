"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/config/site";
import { CartCount } from "@/features/cart/components/CartCount";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Үндсэн цэс"
      className="flex flex-wrap justify-center border-t border-ink py-1.5"
    >
      {mainNav.map(({ href, label }) => {
        const active = isActive(pathname, href);
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`nav-link ${active ? "bg-ink text-paper" : "hover:text-grass"}`}
          >
            {label}
            {href === "/cart" && <CartCount />}
          </Link>
        );
      })}
    </nav>
  );
}
