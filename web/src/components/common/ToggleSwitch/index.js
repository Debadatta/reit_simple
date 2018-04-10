import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class ToggleSwitch extends Component {
  onChange = event => {
    this.props.onChange(this.props.name, event.target.checked);
  };

  render() {
    return (
      <div className={`switch-wrapper ${this.props.className || ''}`} title={this.props.title}>
        <label className="switch">
          <input type="checkbox" onChange={this.onChange} checked={this.props.checked} />
          <div className="slider" />
          {this.props.children ? <span className="switch-label">{this.props.children}</span> : null}
        </label>
      </div>
    );
  }
}

ToggleSwitch.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  checked: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};