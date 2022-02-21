export type Scale = [string, string[]];

export const majorScales: Scale[] = [
  ['C', ['C', 'D', 'E', 'F', 'G', 'A', 'B']],
  ['G', ['G', 'A', 'B', 'C', 'D', 'E', 'F#/Gb']],
  ['D', ['D', 'E', 'F#/Gb', 'G', 'A', 'B', 'C#/Db']],
  ['A', ['A', 'B', 'C#/Db', 'D', 'E', 'F#/Gb', 'G#/Ab']],
  ['E', ['E', 'F#/Gb', 'G#/Ab', 'A', 'B', 'C#/Db', 'D#/Eb']],
  ['F', ['F', 'G', 'A', 'A#/Bb', 'C', 'D', 'E']],
  ['Bb', ['A#/Bb', 'C', 'D', 'D#/Eb', 'F', 'G', 'A']],
  ['Eb', ['D#/Eb', 'F', 'G', 'G#/Ab', 'A#/Bb', 'C', 'D']],
  ['Ab', ['G#/Ab', 'A#/Bb', 'C', 'C#/Db', 'D#/Eb', 'F', 'G']],
];

export const minorScales: Scale[] = [
  ['A', ['A', 'B', 'C', 'D', 'E', 'F', 'G']],
  ['E', ['E', 'F#/Gb', 'G', 'A', 'B', 'C', 'D']],
  ['B', ['B', 'C#/Db', 'D', 'E', 'F#/Gb', 'G', 'A']],
  ['F#/Gb', ['F#/Gb', 'G#/Ab', 'A', 'B', 'C#/Db', 'D', 'E']],
  ['C#/Db', ['C#/Db', 'D#/Eb', 'E', 'F#/Gb', 'G#/Ab', 'A', 'B']],
  ['F', ['F', 'G', 'G#/Ab', 'A#/Bb', 'C', 'C#/Db', 'D#/Eb']],
  ['C', ['C', 'D', 'D#/Eb', 'F', 'G', 'G#/Ab', 'A#/Bb']],
  ['G', ['G', 'A', 'A#/Bb', 'C', 'D', 'D#/Eb', 'F']],
  ['D', ['D', 'E', 'F', 'G', 'A', 'A#/Bb', 'C']],
];
