"use client";

import { useEffect, useState } from "react";

/**
 * Id of the section currently crossing the middle band of the screen, or null
 * when none is (for example at the hero). Only watches while `enabled` is true.
 */
export function useActiveSection(sectionIds: readonly string[], enabled: boolean): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // Sections are in page order, so the first visible one wins.
        setActiveId(sectionIds.find((id) => visible.has(id)) ?? null);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      setActiveId(null);
    };
  }, [sectionIds, enabled]);

  return enabled ? activeId : null;
}
