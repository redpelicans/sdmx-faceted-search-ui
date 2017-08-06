import React from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import Container from '../Container';
import SidePanel from '../SidePanel';
import { search, filter, facetedSearch, moveSidePanel, sortByMark } from '../../actions';
import './App.css';

const App = ({ facetedbox, sortTypes, filterbox, title, searchValue, marques,
  language, dataflows, showSidePanel, facetedSearch: doFacetedSearch, filter: doFilter,
  search: doSearch, toggleshowSidePanelHandler: doMoveSidePanel, sortByMark: doSortByMark }) => (
    <div className="App">
      <Media query="(max-width: 599px)">
        {matches => matches ? (
          <SidePanel
            facetedbox={facetedbox}
            filterbox={filterbox}
            showSidePanel={showSidePanel}
            moveSidePanel={doMoveSidePanel}
            behavior="absolute"
            filter={doFilter}
            FacetedSearch={doFacetedSearch}
          />
         ) : (
           <SidePanel
             facetedbox={facetedbox}
             filterbox={filterbox}
             showSidePanel={showSidePanel}
             moveSidePanel={doMoveSidePanel}
             behavior="relative"
             filter={doFilter}
             facetedSearch={doFacetedSearch}
           />
         )}
      </Media>
      <Container
        title={title}
        dataflows={dataflows}
        marques={marques}
        search={doSearch}
        searchValue={searchValue}
        language={language}
        showSidePanel={showSidePanel}
        displayShowPanel={doMoveSidePanel}
        sortByMark={doSortByMark}
        sortTypes={sortTypes}
      />
    </div>
);

App.propTypes = {
  facetedbox: PropTypes.array.isRequired,
  filterbox: PropTypes.array.isRequired,
  dataflows: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  language: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  facetedSearch: PropTypes.func.isRequired,
  toggleshowSidePanelHandler: PropTypes.func.isRequired,
  showSidePanel: PropTypes.bool.isRequired,
  marques: PropTypes.array.isRequired,
  sortByMark: PropTypes.func.isRequired,
  sortTypes: PropTypes.array.isRequired,
};

const getDataFlows = state => state.dataflows;
const getSearchValue = state => state.searchValue;
const getFilterValue = state => state.filterValue;
const getFacetedValue = state => state.facetedValue;
const getMarkValue = state => state.markValue;

const filterDataFlows = createSelector(
  [getDataFlows, getSearchValue, getFilterValue, getFacetedValue, getMarkValue],
  (dataflows, searchValue, filterValue, facetedValue, markValue) => {
    let newDataflows = dataflows;
    if (markValue) {
      newDataflows = newDataflows.filter(li => (li.Mark === markValue));
    }
    if (facetedValue && facetedValue !== 'All') {
      newDataflows = newDataflows.filter(li => (li.Categories === facetedValue));
    }
    if (!searchValue && (!filterValue || filterValue === 'All')) {
      return newDataflows;
    } else if (searchValue && (!filterValue || filterValue === 'All')) {
      return newDataflows.filter((li) => (li.Name.toLowerCase().match(searchValue.toLowerCase())));
    } else if (filterValue && searchValue) {
      return newDataflows.filter((li) => (li.Name.toLowerCase().match(searchValue.toLowerCase()) && filterValue === li.Type));
    } else if (!searchValue && (filterValue && filterValue !== 'All')) {
      return newDataflows.filter((li) => (filterValue === li.Type));
    }
  },
);


const actions = { search, filter, facetedSearch, moveSidePanel, sortByMark };

const mapStateToProps = state => ({
  title: state.title,
  facetedbox: state.facetedbox,
  filterbox: state.filterbox,
  language: state.language,
  dataflows: filterDataFlows(state),
  searchValue: state.searchValue,
  filterValue: state.filterValue,
  facetedValue: state.facetedValue,
  marques: state.marques,
  sortTypes: state.sortTypes,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('showSidePanel', 'toggleshowSidePanel', true),
  withHandlers({ toggleshowSidePanelHandler: ({ toggleshowSidePanel }) => () => toggleshowSidePanel((showSidePanel) => !showSidePanel) }),
);


export default enhance(App);
