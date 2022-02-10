import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { DEFAULT_LOCALE } from './constants';
import { AvailableLocales, Translations } from './types';

export const makeTranslations = async (
  appLocale: AvailableLocales | undefined,
  namespaces: string[] = []
): Promise<Translations> => {
  const locale = appLocale || DEFAULT_LOCALE;
  const translations = await serverSideTranslations(locale, [
    'common',
    ...namespaces,
  ]);

  return { translations, locale };
};
