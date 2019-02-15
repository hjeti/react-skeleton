import trim from 'lodash/trim';
import Params from '../../data/enum/Params';

/**
 * Check if a locale is supported
 */
export function isValidLocale(locale, locales) {
  return locales.includes(locale);
}

/**
 * Prefix the current path with the provided prefix
 * @param path
 * @param prefix
 */
export function prefixPath(path, prefix = `:${Params.LOCALE}?`) {
  return `/${prefix}/${trim(path, '/')}`;
}
