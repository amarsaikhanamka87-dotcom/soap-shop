"use client";

import { useEffect, useRef, useState } from "react";
import { MusicBox } from "../lib/musicBox";

// Browsers only allow sound after a tap, so music starts from this button.
// Unmounting (leaving the home page) stops the music.
export function SoundToggle() {
  const musicBoxRef = useRef<MusicBox | null>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => () => musicBoxRef.current?.stop(), []);

  async function toggle() {
    musicBoxRef.current ??= new MusicBox();
    const musicBox = musicBoxRef.current;
    if (musicBox.isPlaying) {
      musicBox.stop();
      setPlaying(false);
      return;
    }
    try {
      await musicBox.start();
      setPlaying(true);
    } catch {
      setFailed(true);
    }
  }

  const label = failed ? "Дуу тоглуулах боломжгүй" : playing ? "Аялгуу унтраах" : "Аялгуу асаах";

  return (
    <button type="button" onClick={toggle} aria-pressed={playing} className="sound-toggle">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-5.5" aria-hidden="true">
        <path d="M4 9h4l5-4v14l-5-4H4z" />
        <path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" />
      </svg>
      <span className="sound-toggle__bars" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>{label}</span>
    </button>
  );
}
