import React from 'react';
import PropTypes from 'prop-types';
import { Intent, Position, Toaster } from '@blueprintjs/core';

class Alert extends React.Component {
  state = {
    launchAlert: false,
  }

  componentDidMount() {
    this.toaster = Toaster.create({
      position: Position.TOP_RIGHT,
    });
  }

  componentWillReceiveProps() {
    if (!this.state.launchAlert) {
      this.setState({ launchAlert: true });
    }
  }

  componentDidUpdate() {
    const { message, status } = this.props.err;
    this.toaster.update(this.toaster.show({ message }), { message, intent: status === 'DANGER' ? Intent.DANGER : Intent.SUCCESS });
  }

  render() {
    return (
      <input onChange={event => {
        event.preventDefault();
        this.props.getAlertMessage('SUCCESS', event.target.value);
      }}
      />
    );
  }
}

Alert.propTypes = {
  err: PropTypes.object.isRequired,
  getAlertMessage: PropTypes.func.isRequired,
};

export default Alert;
