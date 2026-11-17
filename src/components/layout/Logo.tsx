// Logo: green circle seal with a cream "Э" for Ээл Brand. Two leaves sprout from the top
// of the letter, its middle bar is a light green soap bar, and two small bubbles float beside it.
// Keep in sync with src/app/icon.svg (the browser tab icon uses the same drawing with hex colors).

export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {/* Seal */}
      <circle cx="32" cy="32" r="30" fill="var(--color-grass)" />
      <circle cx="32" cy="32" r="26.5" fill="none" stroke="var(--color-grass-light)" strokeWidth="1.2" />

      {/* Leaves on top of the Э */}
      <path d="M30 18.5 C26 17.5 24 14 24 10 C28 11 30 14 30 18.5 Z" fill="var(--color-paper)" />
      <path d="M32 19 C32 13.5 35.5 10 41 9.5 C41 15 37 19 32 19 Z" fill="var(--color-grass-light)" />
      <path d="M33 18 Q36 14 39.5 11" stroke="var(--color-grass-deep)" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Э: open curve + soap-bar middle stroke */}
      <path d="M21 22 A13.5 13.5 0 1 1 21 44" fill="none" stroke="var(--color-paper)" strokeWidth="5.5" strokeLinecap="round" />
      <rect x="25" y="30" width="17" height="6.5" rx="3.2" fill="var(--color-grass-light)" />
      <rect x="31" y="31.9" width="8" height="2.7" rx="1" fill="none" stroke="var(--color-grass-deep)" strokeWidth="0.8" />

      {/* Bubbles */}
      <circle cx="48" cy="20" r="1.6" fill="var(--color-paper)" />
      <circle cx="51" cy="16" r="1.1" fill="var(--color-paper)" />
    </svg>
  );
}
