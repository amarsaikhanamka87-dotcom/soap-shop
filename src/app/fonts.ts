import { Manrope, Playfair_Display, Unbounded } from "next/font/google";

// Site fonts (all with Cyrillic). Each exposes a CSS variable that globals.css maps to a Tailwind font.

/** Heavy, wide display face for headings and the wordmark (font-display). */
export const displayFont = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
});

/** Elegant serif used only for the big hero heading (font-hero). */
export const heroFont = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
});

/** Clean body face for all running text (font-sans). */
export const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

/** All font variables, to put on <html>. */
export const fontVariables = `${displayFont.variable} ${heroFont.variable} ${bodyFont.variable}`;
