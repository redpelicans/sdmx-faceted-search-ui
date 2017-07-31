import React, { Component } from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import connect from '../../connect';
import Container from '../Container';
import SidePanel from '../SidePanel';

import './App.css';

class App extends Component {
  state = {
    showSidePanel: true,
  }

  displayShowPanel = () => {
    this.setState(({ showSidePanel }) => ({ showSidePanel: !showSidePanel }));
  }

  render() {
    const { showSidePanel } = this.state;
    const { facetedbox, filterbox, title, language, list } = this.props;

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
            />
         ) : (
           <SidePanel
             facetedbox={facetedbox}
             filterbox={filterbox}
             showSidePanel={showSidePanel}
             displayShowPanel={this.displayShowPanel}
             behavior="relative"
           />
         )}
        </Media>
        <Container
          title={title}
          list={list}
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
};

App.childContextTypes = {
  store: PropTypes.object.isRequired,
};

export default connect(App);
