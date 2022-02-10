import { QueryParams } from './types';

export const removeQueryParams = <T extends QueryParams>(
  path: string,
  paramsToRemove: (keyof T)[]
): string => {
  const pathParts = path.split('?');
  let preservedQueryParams = '';

  if (pathParts.length === 2) {
    preservedQueryParams = pathParts[1]
      .split('&')
      .filter((queryParam) => {
        const [key] = queryParam.split('=');

        return !paramsToRemove.includes(key);
      })
      .join('&');
  }

  return pathParts[0] + (preservedQueryParams && '?' + preservedQueryParams);
};

export const hasQueryParams = <T extends QueryParams>(
  params: T,
  matchParams: (keyof T)[]
): boolean => {
  const hasQueryParam = Object.keys(params).some((queryKey) =>
    matchParams.includes(queryKey)
  );

  return hasQueryParam;
};

export const extractQueryParams = (pathname: string): QueryParams => {
  const result: QueryParams = {};
  const params = (pathname.split('?')[1] || '').split('&');

  if (!params[0]) {
    return {};
  }

  for (const param in params) {
    if (params.hasOwnProperty(param)) {
      const paramParts = params[param].split('=');
      result[paramParts[0]] = decodeURIComponent(paramParts[1] || '');
    }
  }

  return result;
};

export const withQueryParams = (
  pathname: string,
  queryParams: Record<string, any> = {}
): string => {
  const existingQueryParams = extractQueryParams(pathname);
  const mergedParams = { ...existingQueryParams, ...queryParams };
  const stringifiedQueryParams = stringify(mergedParams);
  const hasParams = !!Object.keys(stringifiedQueryParams).length;
  const pathnameWithoutParams = withoutQueryParams(pathname);

  return hasParams
    ? `${pathnameWithoutParams}?${stringifiedQueryParams}`
    : pathname;
};

export const withoutQueryParams = (pathname: string): string => {
  const pathnameWithoutQueryParams = pathname.split('?')[0];

  return pathnameWithoutQueryParams;
};

export const stringify = (input: QueryParams): string => {
  const params = new URLSearchParams();

  Object.entries(input).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((val) => {
        params.append(key, val.toString());
      });
    } else {
      params.append(key, value.toString());
    }
  });

  return params.toString();
};
