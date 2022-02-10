import { NextRouter } from 'next/router';

export type QueryParams =
  | NextRouter['query']
  | Record<string, string | number | boolean | string[] | number[]>;
