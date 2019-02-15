import React from 'react';
import PropTypes from 'prop-types';
import { createPath } from 'router-path';
import { NavLink } from 'react-router-dom';
import LocaleContext from '../LocaleContext';

/**
 * This component proxies the react router NavLink so you don't have to add
 * the localization every time you want to render out a link.
 */
const LocalizedNavLink = ({ path, params, children, ...props }) => (
  <LocaleContext.Consumer>
    {({ activeLocale }) => (
      <NavLink to={createPath(path, { locale: activeLocale, ...(params || {}) })} {...props}>
        {children}
      </NavLink>
    )}
  </LocaleContext.Consumer>
);

LocalizedNavLink.defaultProps = {
  params: null,
};

LocalizedNavLink.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  params: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default LocalizedNavLink;
