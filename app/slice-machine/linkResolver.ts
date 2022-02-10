import { DEFAULT_LOCALE } from '@app/localization/constants';
import { APP_ROUTES } from '@app/route/constants';

import { LinkType } from './types';

// Manages the url links to internal Prismic documents
export const linkResolver = (doc: LinkType): string => {
  const langPrefix = DEFAULT_LOCALE === doc.lang ? '' : `/${doc.lang}`;

  if ((doc.link_type === 'Web' || doc.link_type === 'Media') && doc?.url) {
    return doc.url;
  }

  return langPrefix + APP_ROUTES.home.path;
};
