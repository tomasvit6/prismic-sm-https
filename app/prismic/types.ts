import ApiSearchResponse from '@prismicio/client/types/ApiSearchResponse';
import { Document } from '@prismicio/client/types/documents';

export type PrismicDocument<T extends Record<string, any>> = Omit<
  Document,
  'data'
> & {
  data: T;
};

export type PrismicApiSearchResponse<T extends Record<string, any>> = Omit<
  ApiSearchResponse,
  'results'
> & {
  results: PrismicDocument<T>[];
};
