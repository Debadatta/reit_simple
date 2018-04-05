import React from 'react';
import PropTypes from 'prop-types';
export default class PopupMessage extends React.Component {
  static defaultProps = {
    time: 8000,
    type: "warning",
    position: "top"
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

  getIcon() {
    switch(this.props.type) {
      case "warning":
        return "exclamation-triangle";
      default:
        return "check";
    }
  }

  render() {
    return (
      <div className={`flash-message toast-right ${this.props.position} ${this.props.type}`} ref={d => {
          this.containerDiv = d;
        }}>
        <i className={`fa fa-${this.getIcon()} fa-2`}></i>
        <div className={`toast toast-${this.props.type}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}