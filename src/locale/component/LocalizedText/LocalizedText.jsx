import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../LocaleContext';

/**
 * The localized text component is used to render out translated strings
 * from the provided matching json files. .
 */
class LocalizedText extends PureComponent {
  applyFormatters = translation => {
    const { formatters } = this.props;

    return formatters.reduce((currentTranslation, { formatter, args }) => {
      return formatter(currentTranslation, args);
    }, translation);
  };

  /**
   * Render the translation either through the render method or return the
   * translated string if no render method is provided.
   *
   * @param context The context of the LocaleContext that provides the translation data.
   */
  renderTranslation = ({ getTranslation }) => {
    const { id, render } = this.props;

    // Localization is disabled so we cannot get a translation;
    if (!getTranslation) return id;
    // Get the translation from the context
    const translation = getTranslation(id);
    // Use the custom render method if it's provided
    if (render) {
      return render(translation, this.applyFormatters);
    }

    // Return the translation if no custom render method is provided
    return this.applyFormatters(translation);
  };

  render() {
    return <LocaleContext.Consumer>{this.renderTranslation}</LocaleContext.Consumer>;
  }
}

LocalizedText.defaultProps = {
  formatters: [],
  render: null,
};

LocalizedText.propTypes = {
  id: PropTypes.string.isRequired,
  render: PropTypes.func,
  formatters: PropTypes.arrayOf(PropTypes.func),
};

export default LocalizedText;
