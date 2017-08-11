import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
// import Container from '../Container';
// import SidePanel from '../SidePanel';
import Alert from '../Alert';
import { search } from '../../actions/dataflows';
import { alert } from '../../actions/message';
import './App.css';

const App = ({ alert: doAlert, message }) => (
  <div className="App">
    {/*
      <SidePanel
        facetedbox={facetedbox}
        showSidePanel={showSidePanel}
        moveSidePanel={doMoveSidePanel}
      />
      */}
    <Alert alert={doAlert} message={message} />
    {/*
    <Container
      title={title}
      dataflows={dataflows}
      handleSearch={goHandleSearch}
      languages={languages}
      showSidePanel={showSidePanel}
      displayShowPanel={doMoveSidePanel}
      searchValue={searchValue}
      />
      */}
  </div>
);

App.propTypes = {
  alert: PropTypes.func.isRequired,
  message: PropTypes.object,
};

const actions = { search, alert };

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
