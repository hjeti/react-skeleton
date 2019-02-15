import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { createPath } from 'router-path';
import LocaleContext from '../LocaleContext';

/**
 * This component proxies the react router Link so you don't have to add
 * the localization every time you want to render out a link.
 *
 * @param activeLocale The active locale mapped from the store
 * @param to The to path that will be localized with the active locale
 * @param children The children that will be rendered inside of the link
 * @param dispatch We do not want to apply this to the nav link so filter it out
 * @param props All the props we want to automatically pass to the children
 * @constructor
 */
const LocalizedLink = ({ path, params, children, ...props }) => (
  <LocaleContext.Consumer>
    {({ activeLocale }) => (
      <Link to={createPath(path, { locale: activeLocale, ...(params || {}) })} {...props}>
        {children}
      </Link>
    )}
  </LocaleContext.Consumer>
);

LocalizedLink.defaultProps = {
  params: null,
};

LocalizedLink.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  params: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default LocalizedLink;
