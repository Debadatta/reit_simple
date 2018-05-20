import React from 'react';

import './index.css';

export default class CustomDropdown extends React.Component {
  state = {
    isOpen: false
  };

  handleOnChange = (e) => {
    e.preventDefault();
    const value = e.target.dataset.value;
    this.props.handleOnChange(this.props.name, value);
  }

  toggleList = () => this.setState({ isOpen: !this.state.isOpen });

   renderOptions() {
    return (
      <div className="filter-select-dropdown match-trigger-width open-as-modal custom-dropdown">
        <div className="filter-options selection-filter-options">
          <ul>
            {this.props.options.map(option => (
              <li onClick={this.handleOnChange} data-value={option.key} className={`item ${this.props.value.toLocaleLowerCase() === option.key.toLocaleLowerCase() ? "selected" : ""}`} key={option.value}>
                {option.key}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
   }

  render() {
    const { title, value } = this.props;

    return (
      <div className="filter-control selection-filter" onClick={this.toggleList}>
        <div className="filter-select __rs-controls__filters__filter-select__033c2">
          <div className="title outside-title">
            {title}
          </div>
          <div className={`filter-select-trigger ${this.state.isOpen ? "is-open" : ''}`}>
            {value}
          </div>
          {this.state.isOpen ? this.renderOptions() : null}          
        </div>
      </div>
    )
  }
}