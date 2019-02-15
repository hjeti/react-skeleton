import * as React from 'react';

/**
 * The localeContext that is used to pass along the translations and the methods that
 * are required to easily retrieve the translations from the Redux store.
 */
const LocaleContext = React.createContext({
  activeLocale: null,
  translations: {},
  getTranslation: null,
});

export default LocaleContext;
