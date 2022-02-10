import { SxTheme } from './types';

export const typedSx = <D extends string>(
  obj: Record<D, SxTheme>
): Record<D, SxTheme> => {
  return obj;
};
