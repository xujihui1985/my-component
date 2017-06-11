import React from 'react';
import PropTypes from 'prop-types';

class Label extends React.Component {

  static propTypes = {
    /** HTML ID for associated input */
    htmlFor: PropTypes.string.isRequired,

    /** Label text*/
    label: PropTypes.string.isRequired,

    /** is required */
    required: PropTypes.bool,
  }

  render() {
    const { htmlFor, label, required } = this.props;
    return (
      <label style={{ display: 'block' }} htmlFor={htmlFor}>
        {label} {required && (<span style={{ color: 'red' }}> *</span>)}
      </label>
    );
  }

}

export default Label;