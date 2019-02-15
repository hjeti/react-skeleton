import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import LocaleContext from '../LocaleContext';

class LocaleProvider extends PureComponent {
  getTranslation = id => {
    const { translations } = this.props;

    return get(translations, id) || id;
  };

  render() {
    const { children, translations, activeLocale } = this.props;

    return (
      <LocaleContext.Provider
        value={{
          activeLocale,
          translations,
          getTranslation: this.getTranslation,
        }}
      >
        {children}
      </LocaleContext.Provider>
    );
  }
}

LocaleProvider.propTypes = {
  translations: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  activeLocale: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LocaleProvider;
