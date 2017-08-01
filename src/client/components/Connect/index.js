import React from 'react';
import PropTypes from 'prop-types';

const connect = (mapStateToProps, mapDispatchToProps) => Component => {
  class Connector extends React.PureComponent {
    componentWillMount() {
      const { store } = this.context;
      store.subscribe(() => this.forceUpdate());
    }
    render() {
      const { store: { getState, dispatch } } = this.context;
      const props = { ...mapStateToProps(getState()), ...mapDispatchToProps(dispatch) };
      return <Component {...props} />;
    }
  }
  Connector.contextTypes = {
    store: PropTypes.object.isRequired,
  };
  return Connector;
};

export default connect;
