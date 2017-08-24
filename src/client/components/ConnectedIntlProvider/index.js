import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import AppError from '../AppError';

const ConnectedIntlProvider = ({ children, locale, message, messages = {} }) => {
  if (locale) {
    return (
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    );
  }
  return <AppError isErrorFound={message.header ? true : false} />; //eslint-disable-line 
};

const mapStateToProps = state => ({
  locale: state.intl.locale,
  messages: state.intl.messages[state.intl.locale] || {},
  message: state.message,
});

ConnectedIntlProvider.propTypes = {
  children: PropTypes.node,
  locale: PropTypes.string,
  messages: PropTypes.object,
  message: PropTypes.object,
};

const enhance = onlyUpdateForKeys(['locale']);

export default enhance(connect(mapStateToProps)(ConnectedIntlProvider));
