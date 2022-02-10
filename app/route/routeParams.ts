import { QueryParams } from './types';

/**
 * @example
 * replaceRouteParams('/some-route/:id', { id: 5 }) // Output: '/some-route/5'
 */
export const replaceRouteParams = <T extends QueryParams>(
  pathname: string,
  params: T
): string => {
  const segments = pathname.split('/');

  return segments
    .map((segment) => {
      const offset = segment.indexOf(':') + 1;

      if (!offset) {
        return segment;
      }

      const key = segment.slice(offset);

      return params[key];
    })
    .join('/');
};
