import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import Alert from '../Alert';
import LanguageSelector from '../LanguageSelector';
import { changeLang } from '../../actions/lang';
import './App.css';

const App = ({ message, changeLang: doChangeLang }) => (
  <div className="App">
    <LanguageSelector languages={['fr', 'en']} changeLang={doChangeLang} />
    <Alert message={message} />
  </div>
);

App.propTypes = {
  changeLang: PropTypes.func.isRequired,
  message: PropTypes.object,
};

const actions = { changeLang };

const mapStateToProps = state => ({
  message: state.message,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('showSidePanel', 'toggleshowSidePanel', true),
  withHandlers({ toggleshowSidePanelHandler: ({ toggleshowSidePanel }) => () => toggleshowSidePanel((showSidePanel) => !showSidePanel) }),
);

export default enhance(App);
