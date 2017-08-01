  import React, { Component } from 'react';
  import PropTypes from 'prop-types';
  import Media from 'react-media';
  import DataFlow from '../DataFlow';
  import SearchInfo from './SearchInfo';
  import SearchParams from '../SearchParams';
  import EmptySearch from './EmptySearch';

  import './ResultPanel.css';

  const ResultSize = (list, searchValue) => {
    let size = list.length;

    list.map(lis => {
      if (lis.Name.toLowerCase().match(encodeURIComponent(searchValue).toLowerCase()) === null) { (size -= 1); }
      return (0);
    });
    return size;
  };

  class ResultPanel extends Component {
    state = {
      typeOfSale: '',
    };

    handleChangeTypeOfSale = (typeOfSale) => {
      if (typeOfSale === 1) {
        this.setState({ typeOfSale: '' });
      } else if (typeOfSale === 2) {
        this.setState({ typeOfSale: 'enchère' });
      } else if (typeOfSale === 3) {
        this.setState({ typeOfSale: 'achat immédiat' });
      }
    }

    render() {
      const { displayShowPanel, searchValue, list } = this.props;
      const { typeOfSale } = this.state;

      return (
        <div className="resultpanel">
          <SearchInfo
            list={list}
            searchValue={searchValue}
            searchsize={ResultSize(list, searchValue)}
          />
          <SearchParams
            displayShowPanel={displayShowPanel}
            handleChangeTypeOfSale={this.handleChangeTypeOfSale}
          />
          {list.map(lis => ((
          (lis.Name.toLowerCase().match(encodeURIComponent(searchValue).toLowerCase())
        && lis.Vente.toLowerCase().match(typeOfSale))
          || (!searchValue && lis.Vente.toLowerCase().match(typeOfSale))) &&
          <Media query={{ maxWidth: 599 }}>
            {matches => matches ? (
              <DataFlow key={lis.id} data={lis} direction="column" />
          ) : (
            <DataFlow key={lis.id} data={lis} direction="row" />
          )}
          </Media>
    )) }
          {ResultSize(list, searchValue) === 0 && <EmptySearch />}
        </div>
      );
    }
}

  ResultPanel.propTypes = {
    displayShowPanel: PropTypes.func.isRequired,
    searchValue: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
  };

  export default ResultPanel;
