export interface Mode {
  name: string;
  steps: number[];
}

export const chromaticScale = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];
export const modes: Mode[] = [
  { name: 'Aeolian/Minor', steps: [2, 1, 2, 2, 1, 2, 2] },
  { name: 'Dorian', steps: [2, 1, 2, 2, 2, 1, 2] },
  { name: 'Ionian/Major', steps: [2, 2, 1, 2, 2, 2, 1] },
  { name: 'Locrian', steps: [1, 2, 2, 1, 2, 2, 2] },
  { name: 'Lydian', steps: [2, 2, 2, 1, 2, 2, 1] },
  { name: 'Mixolydian', steps: [2, 2, 1, 2, 2, 1, 2] },
  { name: 'Phrygian', steps: [1, 2, 2, 2, 1, 2, 2] },
];
