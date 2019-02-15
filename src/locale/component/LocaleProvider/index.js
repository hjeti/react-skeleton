import { connect } from 'react-redux';

import LocaleProvider from './LocaleProvider';

const mapStateToProps = ({ locale }) => ({
  activeLocale: locale.activeLocale,
  translations: locale.translations[locale.activeLocale] || {},
});

export default connect(mapStateToProps)(LocaleProvider);
