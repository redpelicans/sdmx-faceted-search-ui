import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import AppError from '../AppError';

const ConnectedIntlProvider = ({ children, locale, messages }) => {
  if (locale) {
    return (
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    );
  }
  return (
    <IntlProvider locale="en" messages={{}}>
      <AppError />
    </IntlProvider>
  );
};

// connecter AppError au store

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
