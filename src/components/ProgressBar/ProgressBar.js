import React from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends React.Component {

  static propTypes = {
    percent: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number,
  }

  static defaultProps = {
    height: 5
  };

  getColor = (percent) => {
    if (this.props.percent === 100) {
      return 'green';
    }
    return this.props.percent > 50 ? 'lightgreen' : 'red';
  }

  getWidthAsPercentOfTotalWidth = () => {
    return parseInt(this.props.width * (this.props.percent / 100), 10);
  }

  render() {
    const { percent, width, height } = this.props;
    return (
      <div style={{ border: 'solid 1px lightgrey', width }}>
        <div style={{
          width: this.getWidthAsPercentOfTotalWidth(),
          height,
          backgroundColor: this.getColor(percent)
        }}>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
