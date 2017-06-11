import React from 'react';
import PropTypes from 'prop-types';


/**
 * A super lame component that says hello
 */
function HelloWorld({ message }) {
  return (
    <div>
      Hello {message}
    </div>
  );
}

HelloWorld.propTypes = {
  /**
   * Message to display
   */
  message: PropTypes.string,
};

HelloWorld.defaultProps = {
  message: 'World'
};

export default HelloWorld;
