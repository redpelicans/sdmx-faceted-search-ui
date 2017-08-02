import React, { Component } from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import connect from '../../connect';
import Container from '../Container';
import SidePanel from '../SidePanel';
import { search, filter, facetedSearch } from '../../actions';
import './App.css';

class App extends Component {
  state = {
    showSidePanel: true,
  }

  displayShowPanel = () => {
    this.setState(({ showSidePanel }) => ({ showSidePanel: !showSidePanel }));
  }

  Search = ({ target: { value } }) => {
    const { search: srch } = this.props;
    srch(value);
  };

  Filter = (value) => {
    const { filter: fltr } = this.props;
    fltr(value);
  }

  FacetedSearch = (value) => {
    const { facetedSearch: fct } = this.props;
    fct(value);
  }

  render() {
    const { showSidePanel } = this.state;
    const { facetedbox, filterbox, title, searchValue, language, list } = this.props;

    return (
      <div className="App">
        <Media query="(max-width: 599px)">
          {matches => matches ? (
            <SidePanel
              facetedbox={facetedbox}
              filterbox={filterbox}
              showSidePanel={showSidePanel}
              displayShowPanel={this.displayShowPanel}
              behavior="absolute"
              Filter={this.Filter}
              FacetedSearch={this.FacetedSearch}
            />
         ) : (
           <SidePanel
             facetedbox={facetedbox}
             filterbox={filterbox}
             showSidePanel={showSidePanel}
             displayShowPanel={this.displayShowPanel}
             behavior="relative"
             Filter={this.Filter}
             FacetedSearch={this.FacetedSearch}
           />
         )}
        </Media>
        <Container
          title={title}
          list={list}
          Search={this.Search}
          searchValue={searchValue}
          language={language}
          showSidePanel={showSidePanel}
          displayShowPanel={this.displayShowPanel}
        />
      </div>
    );
  }
}

App.propTypes = {
  facetedbox: PropTypes.array.isRequired,
  filterbox: PropTypes.array.isRequired,
  list: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  language: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  facetedSearch: PropTypes.func.isRequired,
};

App.childContextTypes = {
  store: PropTypes.object.isRequired,
};

const filterList = ({ list, searchValue, filterValue, facetedValue }) => {
  let newList = list;
  if (facetedValue && facetedValue !== 'All') {
    newList = newList.filter((li) => (li.Categories === facetedValue));
  }
  if (!searchValue && (!filterValue || filterValue === 'All')) {
    return newList;
  } else if (searchValue && (!filterValue || filterValue === 'All')) {
    return newList.filter((li) => (li.Name.toLowerCase().match(searchValue.toLowerCase())));
  } else if (filterValue && searchValue) {
    return newList.filter((li) => (li.Name.toLowerCase().match(searchValue.toLowerCase()) && filterValue === li.Type));
  } else if (!searchValue && (filterValue && filterValue !== 'All')) {
    return newList.filter((li) => (filterValue === li.Type));
  }
};

const mapStateToProps = state => ({
  title: state.title,
  facetedbox: state.facetedbox,
  filterbox: state.filterbox,
  language: state.language,
  list: filterList(state),
  searchValue: state.searchValue,
  filterValue: state.filterValue,
  facetedValue: state.facetedValue,
});

const mapDispatchToProps = dispatch => ({
  facetedSearch: (value) => dispatch(facetedSearch(value)),
  search: (value) => dispatch(search(value)),
  filter: (value) => dispatch(filter(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
