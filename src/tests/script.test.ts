import { getScale } from '../script';
import { Mode, modes } from '../constants';
import { majorScales, minorScales, Scale } from './scales';

type TestSuite = [string, Scale[], Mode];

const suites: TestSuite[] = [
  ['Major scales', majorScales, modes[2]],
  ['Minor scales', minorScales, modes[0]],
];

describe.each(suites)('%s', (_name, scales, mode) => {
  test.each(scales)('%s scale should return correct notes', (root, testScale) => {
    const { scale } = getScale(root, mode);
    expect(scale).toEqual(testScale);
  });
});
