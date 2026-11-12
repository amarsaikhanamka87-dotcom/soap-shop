// Cheerful music-box tune with birdsong, synthesized with the Web Audio API.
// Placeholder until a real sound file is chosen.

type NoteName = "C4" | "E4" | "G4" | "A4" | "C5" | "D5" | "E5" | "G5" | "A5" | "C6";

const FREQUENCIES: Record<NoteName, number> = {
  C4: 261.63, E4: 329.63, G4: 392, A4: 440,
  C5: 523.25, D5: 587.33, E5: 659.25, G5: 783.99, A5: 880, C6: 1046.5,
};

const MELODY: (NoteName | null)[] = [
  "E5", "G5", "A5", "G5", "E5", "D5", "C5", "D5", "E5", "E5", "G5", "A5", "C6", "A5", "G5", null,
  "A5", "G5", "E5", "G5", "A5", "G5", "E5", "D5", "C5", "D5", "E5", "G5", "E5", "D5", "C5", null,
];
const BASS: (NoteName | null)[] = ["C4", null, "G4", null, "A4", null, "E4", null];

const BEAT_SECONDS = 0.27;
const BIRD_CHANCE_PER_BEAT = 0.12;

export class MusicBox {
  private context: AudioContext | null = null;
  private master: GainNode | null = null;
  private timer: ReturnType<typeof setTimeout> | null = null;
  private step = 0;

  get isPlaying() {
    return this.timer !== null;
  }

  async start() {
    if (this.isPlaying) return;
    this.context ??= new AudioContext();
    await this.context.resume();
    this.master = this.context.createGain();
    this.master.gain.value = 0.7;
    this.master.connect(this.context.destination);
    this.step = 0;
    this.tick();
  }

  stop() {
    if (this.timer) clearTimeout(this.timer);
    this.timer = null;
    this.master?.disconnect();
    this.master = null;
  }

  private tick = () => {
    const context = this.context!;
    const at = context.currentTime + 0.05;

    const melodyNote = MELODY[this.step % MELODY.length];
    if (melodyNote) this.playNote(FREQUENCIES[melodyNote], at, 0.9, "triangle", 0.16);

    if (this.step % 2 === 0) {
      const bassNote = BASS[(this.step / 2) % BASS.length];
      if (bassNote) this.playNote(FREQUENCIES[bassNote], at, 1.2, "sine", 0.12);
    }

    if (Math.random() < BIRD_CHANCE_PER_BEAT) {
      this.playChirp(at + 0.05);
      this.playChirp(at + 0.22);
    }

    this.step++;
    this.timer = setTimeout(this.tick, BEAT_SECONDS * 1000);
  };

  private playNote(frequency: number, at: number, duration: number, type: OscillatorType, volume: number) {
    const context = this.context!;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = type;
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0, at);
    gain.gain.linearRampToValueAtTime(volume, at + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, at + duration);
    oscillator.connect(gain).connect(this.master!);
    oscillator.start(at);
    oscillator.stop(at + duration + 0.05);
  }

  private playChirp(at: number) {
    const context = this.context!;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const base = 2400 + Math.random() * 1200;
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(base, at);
    oscillator.frequency.exponentialRampToValueAtTime(base * 1.5, at + 0.07);
    oscillator.frequency.exponentialRampToValueAtTime(base * 0.9, at + 0.14);
    gain.gain.setValueAtTime(0, at);
    gain.gain.linearRampToValueAtTime(0.05, at + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, at + 0.16);
    oscillator.connect(gain).connect(this.master!);
    oscillator.start(at);
    oscillator.stop(at + 0.2);
  }
}
