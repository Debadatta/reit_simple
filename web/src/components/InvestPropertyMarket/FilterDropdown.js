import React from 'react';

import RangeSlider from '../common/RangeSlider';

export default class FilterDropdown extends React.Component {
  render() {
    const { title, maxRange } = this.props;

    return (
      <div className="filter-select-dropdown inside-title-adjustment open-as-modal main-filters--filter-select-dropdown">
        <div className="filter-options price-filter-options">
          <div>
            <div className="clearfix">
              <div className="pull-left">
                <div className="radio-container purple-checkboxes">
                  <label className="ember-radio-button checked">
                    <input type="radio" defaultValue="ListPrice" checked/>
                    <label><span><span /></span></label>
                    <span className="ie-radio-fix">
                      {title}
                    </span>
                  </label>
                </div>
              </div>
              <div className="pull-right option-text-align">
                ${maxRange/1000}k +
              </div>
            </div>
            <div className="option-slider-align">
              <RangeSlider/>
            </div>
          </div>
        </div>
        <div className="filter-modal-footer">
          <div className="clearfix buttons">
            <div className="pull-left">
              <button className="btn btn-link-default" disabled>
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
