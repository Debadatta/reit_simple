import React from 'react';

const STATES = ["All Markets", "Alabama", "Arizona", "California", "Delaware", "Florida", "Georgia", "Illinois", "Indiana", "Michigan", "Missouri", "N Carolina", "Nevada", "New Jersey", "Ohio", "Pennsylvania", "South Carolina", "Tennessee", "Texas", "Wisconsin"];

export default class LocationDropdown extends React.Component {
  renderOption(state) {
    return (
      <li>
        <div className="checkbox-container __rs-controls__checkbox__cac59">
          <input type="checkbox" disabled />
          <label>
            <span className="ie-radio-fix">
              {state}
            </span>
          </label>
        </div>
      </li>
    )
  }

  render() {
    return (
      <div className="filter-select-dropdown inside-title-adjustment match-trigger-width open-as-modal main-filters--filter-select-dropdown market-dropdown">
        <div className="filter-options selection-filter-options __rs-controls__filters__selection-filter__filter-options__5edeb is-multi-select">
          <ul>
            {STATES.map(this.renderOption)}
          </ul>
        </div>
        <div lassName="__rs-controls__filters__actions__apply__af40d">  <div className="clearfix buttons">
            <div className="pull-left">
              <button className="btn btn-link-default">
                Clear
              </button>
            </div>
            <div className="pull-right">
              <button className="btn btn-link-secondary" disabled>
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
