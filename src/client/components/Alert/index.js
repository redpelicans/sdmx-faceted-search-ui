import React from 'react';
import PropTypes from 'prop-types';
import { Intent, Position, Toaster } from '@blueprintjs/core';

class Alert extends React.Component {
  state = {
    show: false,
  }

  componentDidMount() {
    this.toaster = Toaster.create({
      position: Position.TOP_RIGHT,
    });
  }

  componentWillReceiveProps() {
    if (!this.state.show) {
      this.setState({ show: true });
    }
  }

  componentDidUpdate() {
    const { label, status } = this.props.message;
    this.toaster.update(this.toaster.show({ label }), { label, intent: status === 'DANGER' ? Intent.DANGER : Intent.SUCCESS });
  }

  render() {
    return (
      <input onChange={event => {
        event.preventDefault();
        this.props.alert('SUCCESS', event.target.value);
      }}
      />
    );
  }
}

Alert.propTypes = {
  message: PropTypes.object,
  alert: PropTypes.func.isRequired,
};

export default Alert;
