import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';

const ConnectedIntlProvider = ({ children, locale, messages }) => {
  if (!locale) return null;
  return <IntlProvider locale={locale} message={messages}>{children}</IntlProvider>;
};

const mapStateToProps = state => ({
  locale: state.intl.locale,
  messages: state.intl.messages[state.intl.locale],
});

ConnectedIntlProvider.propTypes = {
  children: PropTypes.node,
  locale: PropTypes.string,
  messages: PropTypes.object,
};

const enhance = onlyUpdateForKeys(['locale']);

export default enhance(connect(mapStateToProps)(ConnectedIntlProvider));
