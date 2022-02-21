import { chromaticScale } from './constants';

const isNaturalRegExp = new RegExp(/[A-G](?![#b])/);

export const getRootIndex = (root: string) => {
  if (isNaturalRegExp.test(root)) {
    return chromaticScale.findIndex(note => new RegExp(`${root}(?![#b])`).test(note));
  }

  return chromaticScale.findIndex(note => new RegExp(root, 'i').test(note));
};

export const getEnharmonic = (root: string, note: string): string => {
  console.log(root, note);
  return note;
};
