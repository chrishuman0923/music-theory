import { chromaticScale, Mode, modes } from './constants';
import { getEnharmonic, getRootIndex } from './utils';

interface GetScale {
  root: string;
  mode: Mode['name'];
  scale: string[];
}

export const getScale = (root: string, { name, steps }: Mode): GetScale => {
  const rootIndex = getRootIndex(root);
  const scale: string[] = [];
  let currentDegree = rootIndex;

  steps.forEach(step => {
    const note = chromaticScale[currentDegree % chromaticScale.length];
    scale.push(getEnharmonic(root, note));
    currentDegree += step;
  });

  return { root, mode: name, scale };
};

console.log('result', getScale('C', modes[2]));
