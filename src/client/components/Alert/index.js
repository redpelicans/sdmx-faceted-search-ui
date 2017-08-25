import React from 'react';
import PropTypes from 'prop-types';
import { Position, Toaster, Intent } from '@blueprintjs/core';

import './Alert.css';

class Alert extends React.Component {
  componentDidMount() {
    this.toaster = Toaster.create({
      position: Position.TOP_RIGHT,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { id } = this.props.message;
    if (id !== nextProps.message.id) {
      const { message: { header, label, status } } = nextProps;
      const message = <div><h3 className="alert-header">{header}</h3><p>{label}</p></div>;
      const iconName = this.getIcon(status);
      const intent = Intent[status];
      this.toaster.show({ iconName, message, intent });
    }
  }

  getIcon = (status) => status === 'DANGER' ? 'pt-icon-warning-sign' : 'pt-icon-tick';

  render() {
    return null;
  }
}

Alert.propTypes = {
  message: PropTypes.object,
};

export default Alert;
