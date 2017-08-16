import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import Alert from '../Alert';
import LanguageSelector from '../LanguageSelector';
import { setLang } from '../../actions/config';
import './App.css';

const App = ({ message, setLang: doSetLang, config = {} }) => (
  <div className="App">
    <LanguageSelector langs={config.langs} setLang={doSetLang} />
    <Alert message={message} />
  </div>
);

App.propTypes = {
  setLang: PropTypes.func.isRequired,
  message: PropTypes.object,
  config: PropTypes.object,
};

const actions = { setLang };

const mapStateToProps = state => ({
  message: state.message,
  config: state.config,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('showSidePanel', 'toggleshowSidePanel', true),
  withHandlers({ toggleshowSidePanelHandler: ({ toggleshowSidePanel }) => () => toggleshowSidePanel((showSidePanel) => !showSidePanel) }),
);

export default enhance(App);
