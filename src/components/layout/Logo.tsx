// Placeholder logo: a dandelion seed head with a leaf over a steppe line.

export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="none" stroke="var(--color-ink)" strokeWidth="2" />
      <g stroke="var(--color-grass-deep)" strokeWidth="1.4" strokeLinecap="round">
        <line x1="32" y1="30" x2="32" y2="12" />
        <line x1="32" y1="30" x2="45" y2="17" />
        <line x1="32" y1="30" x2="19" y2="17" />
        <line x1="32" y1="30" x2="50" y2="27" />
        <line x1="32" y1="30" x2="14" y2="27" />
        <line x1="32" y1="30" x2="40" y2="13" />
        <line x1="32" y1="30" x2="24" y2="13" />
      </g>
      <g fill="var(--color-grass-deep)">
        <circle cx="32" cy="11" r="2" />
        <circle cx="46" cy="16" r="2" />
        <circle cx="18" cy="16" r="2" />
        <circle cx="51" cy="27" r="2" />
        <circle cx="13" cy="27" r="2" />
        <circle cx="41" cy="12" r="1.6" />
        <circle cx="23" cy="12" r="1.6" />
      </g>
      <path d="M32 30 C32 40 30 46 32 54" stroke="var(--color-ink)" strokeWidth="1.8" fill="none" />
      <path d="M31.5 46 C26 45 22 41 21 36 C27 37 31 41 31.5 46Z" fill="var(--color-grass)" />
      <path d="M8 50 Q20 43 32 48 T56 47" stroke="var(--color-grass)" strokeWidth="1.6" fill="none" />
    </svg>
  );
}
