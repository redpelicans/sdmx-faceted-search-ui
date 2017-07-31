import React from 'react';
import PropTypes from 'prop-types';

const connect = Component => {
  class Connector extends React.PureComponent {
    lint = {};
    render() {
      const { store: { getState } } = this.context;
      const props = { ...getState() };
      return <Component {...props} />;
    }
  }
  Connector.contextTypes = {
    store: PropTypes.object.isRequired,
  };
  return Connector;
};

export default connect;
