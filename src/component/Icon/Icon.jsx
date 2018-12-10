/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.module.scss';

const svgContext = require.context('../../asset/svg/?inline', false, /\.svg/);

const Icon = ({ name }) => (
  <span
    className={styles.container}
    dangerouslySetInnerHTML={{ __html: svgContext(`./${name}.svg`) }}
  />
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
