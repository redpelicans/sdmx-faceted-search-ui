import React from 'react';
import PropTypes from 'prop-types';
import { toastr } from 'react-redux-toastr';

class Alert extends React.Component {
  // componentDidMount() {
  //   this.toaster = Toaster.create({
  //     position: Position.TOP_RIGHT,
  //   });
  // }

  componentWillReceiveProps(nextProps) {
    const { id } = this.props.message;
    if (id !== nextProps.message.id) {
      const { message: { header, label, status } } = nextProps;
      if (status === 'SUCCESS') {
        toastr.success(header, label);
      } else {
        toastr.error(header, label);
      }
    }
  }

  render() {
    return null;
  }
}

Alert.propTypes = {
  message: PropTypes.object,
};

export default Alert;
