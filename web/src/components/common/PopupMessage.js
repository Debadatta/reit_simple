import React from 'react';
import PropTypes from 'prop-types';
export default class PopupMessage extends React.Component {
  static defaultProps = {
    type: 'primary',
    time: 8000
  };

  static propTypes = {
    type: PropTypes.oneOf(['primary', 'info', 'success', 'error', 'warning']),
    time: PropTypes.number,
    hideHandler: PropTypes.func
  };

  componentDidMount() {
    if (this.props.hideHandler) {
      const { time } = this.props;

      if (time > 0) {
        this.timeoutObj = setTimeout(() => {
          this.containerDiv.classList.toggle('flash-message--hide');
          setTimeout(this.props.hideHandler, 3000);
        }, time - 3000);
      }
    }
  }

  componentWillUnmount() {
    if (this.timeoutObj) {
      clearTimeout(this.timeoutObj);
    }
  }

  render() {
    return (
      <div className={`flash-message toast-top-right ${this.props.type}`} ref={d => {
          this.containerDiv = d;
        }}>
        <div className={`toast toast-${this.props.type}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
