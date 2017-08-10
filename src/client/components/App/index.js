import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import Container from '../Container';
import SidePanel from '../SidePanel';
import { handleSearch, filter, facetedSearch, moveSidePanel } from '../../actions';
import './App.css';

const App = ({ facetedbox, title, languages, dataflows, showSidePanel, searchValue,
  handleSearch: goHandleSearch, toggleshowSidePanelHandler: doMoveSidePanel }) => (
    <div className="App">
      <SidePanel
        facetedbox={facetedbox}
        showSidePanel={showSidePanel}
        moveSidePanel={doMoveSidePanel}
      />
      <Container
        title={title}
        dataflows={dataflows}
        handleSearch={goHandleSearch}
        languages={languages}
        showSidePanel={showSidePanel}
        displayShowPanel={doMoveSidePanel}
        searchValue={searchValue}
      />
    </div>
);

App.propTypes = {
  facetedbox: PropTypes.object.isRequired,
  dataflows: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleshowSidePanelHandler: PropTypes.func.isRequired,
  showSidePanel: PropTypes.bool.isRequired,
  searchValue: PropTypes.string.isRequired,
};

const actions = { handleSearch, filter, facetedSearch, moveSidePanel };

const mapStateToProps = state => ({
  title: state.title,
  facetedbox: state.facetedbox,
  filterbox: state.filterbox,
  languages: state.languages,
  dataflows: state.dataflows,
  searchValue: state.searchValue,
  filterValue: state.filterValue,
  facetedValue: state.facetedValue,
  sortTypes: state.sortTypes,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('showSidePanel', 'toggleshowSidePanel', true),
  withHandlers({ toggleshowSidePanelHandler: ({ toggleshowSidePanel }) => () => toggleshowSidePanel((showSidePanel) => !showSidePanel) }),
);


export default enhance(App);
