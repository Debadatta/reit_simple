import React from 'react';
import { Link } from 'react-router-dom';

import FilterDropdown from './FilterDropdown';
import LocationDropdown from './LocationDropdown';
import MoreDropdown from './MoreDropdown';

const FILTERS = ["All", "Featured", "New", "Higher ROI", "Quicker Turn", "Unoccupied"];
const defaultView = "All";

export default class PropertyFilter extends React.Component {
  state = { active: "All" };

  toggleDropdown = (type, e) => {
    e.preventDefault();
    this.setState({ dropdown: type === this.state.dropdown ? null : type });
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-9 col-sm-12">
          <div className="slot quick-find-filters">
            <div className="filters-quick-find __marketplace__marketplace-component__filters__quick-find__ae739">
              <div className="ember-modal-dialog ember-modal-dialog-in-place emd-in-place ember-modal-dialog  modal-or-in-place--in-place-container">
                <div className="ember-view filters-quick-find-content __marketplace__marketplace-component__filters__quick-find__content__4edc1">
                  <div className="row filter-items">
                    <div className="col-xs-12 col-sm-10 col-md-10 col-lg-11">
                      <ul className="nav nav-pills">
                        { FILTERS.map(filter => (
                          <li className={`${this.state.active === filter ? "active" : null} ${defaultView === filter ? "is-default-view" : null}`}>
                            <Link to={`/investment-property-marketplace?filter=${filter}`}>{filter}</Link>
                          </li>
                          ))
                        }
                      </ul>
                    </div>
                    <div className="hidden-xs col-sm-2 col-md-2 col-lg-1 quick-find-settings">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-3 col-sm-12">
          <div className="slot filter-control-area">
            <div className="filters-main __marketplace__marketplace-component__filters__main__faaaa">
              <div className="filter-control price-filter main-filters--filter-control">
                <div className="filter-select __rs-controls__filters__filter-select__033c2 is-inline-title">
                  <div className="filter-select-trigger" onClick={this.toggleDropdown.bind(this, 'deal_price')}>
                    Deal Price
                  </div>
                  {this.state.dropdown === "deal_price" ? <FilterDropdown title="Deal Price" maxRange={25000}/> : null}
                </div>
              </div>
              <div className="filter-control slider-filter main-filters--filter-control">
                <div className="filter-select __rs-controls__filters__filter-select__033c2 is-inline-title">
                  <div className="filter-select-trigger" onClick={this.toggleDropdown.bind(this, 'turnaround_time')}>
                    Turnaround Time
                  </div>
                  {this.state.dropdown === "turnaround_time" ? <FilterDropdown title="Turnaround Time" maxRange={600000}/> : null}
                </div>
              </div>
              <div className="filter-control selection-filter main-filters--filter-control">
                <div className="filter-select __rs-controls__filters__filter-select__033c2 is-inline-title">
                  <div className="filter-select-trigger" onClick={this.toggleDropdown.bind(this, 'location')}>
                    Location
                  </div>
                  {this.state.dropdown === "location" ? <LocationDropdown/> : null}
                </div>
              </div>
              <div className="filter-control property-filters-control __rs-controls__filters__property-filters__2c15d main-filters--filter-control">
                <div className="property-filters-select">
                  <div className="title outside-title">
                  </div>
                  <div className="filter-select-trigger property-filters-select-trigger">
                    <div className="ember-view __rs-controls__filters__filter-select__placeholder__more__6e350" onClick={this.toggleDropdown.bind(this, 'more')}>More
                    </div>
                    {this.state.dropdown === "more" ? <MoreDropdown/> : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
