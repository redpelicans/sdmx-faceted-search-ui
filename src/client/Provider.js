import { Component } from 'react';
import PropTypes from 'prop-types';

class Provider extends Component {
  getChildContext() {
    const { store } = this.props;
    return { store };
  }
  render() {
    const { children } = this.props;
    return children;
  }
}

Provider.propTypes = {
  store: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

Provider.childContextTypes = {
  store: PropTypes.object.isRequired,
};

export default Provider;
