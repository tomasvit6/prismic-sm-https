import { SSRConfig } from 'next-i18next';

export interface Translations {
  translations: SSRConfig;
  locale: AvailableLocales;
}

export type AvailableLocales = 'en-gb';
