import { chromaticScale, modes } from './constants';
import { GetScale, Mode } from './interfaces';
import { getEnharmonic, getRootIndex } from './utils';

// Change these values when using `npm run dev` to test various inputs
let root: string = 'Bb';
let modeIndex: number = 2;

if (process.env.NODE_ENV === 'production') {
  root = process.argv[2];
  modeIndex = Number(process.argv[3]);
}

if (isNaN(modeIndex) || modeIndex < 0) {
  throw new Error('Invalid mode index');
}

export const getScale = (root: string, { name, steps }: Mode): GetScale => {
  const rootIndex = getRootIndex(root);
  const scale: string[] = [];
  let currentDegree = rootIndex;

  if (!root || rootIndex < 0) {
    throw new Error('Invalid root note');
  }

  steps.forEach(step => {
    const note = chromaticScale[currentDegree % chromaticScale.length];
    scale.push(getEnharmonic(root, note));
    currentDegree += step;
  });

  return { root, mode: name, scale };
};

console.log('result', getScale(root, modes[modeIndex]));
