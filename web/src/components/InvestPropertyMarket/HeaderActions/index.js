import React from 'react';

import './index.css';

const SORT_OPTIONS = [
  {key: "Price (Low to High)", value: "priceLowToHigh"},
  {key: "Price (High to Low)", value: "priceHighToLow"},
  {key: "Turnaround Time (Low to High)", value: "turnarounfTimeLowToHigh"},
  {key: "Seller Rating (Low to High)", value: "sellerRatingLowToHigh"},
  {key: "Deal Rating (Low to High)", value: "dealRatingLowToHigh"}
];

export default class HeaderActions extends React.Component {
  state = { showSortOption: false };

  toggleSortLists = () => this.setState({showSortOption: !this.state.showSortOption});
  
  render() {
    return (
      <div className="row">
        <div className="col-sm-6">
          <div className="slot">
            <div className="slot--counter">Showing 431 properties</div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="slot additional-controls">
            <div className="inline-block">
              <div className="sort">
                <div className="selections-dropdown sort-by-selections responsive-adjust">
                  <span className="selections-title">Sort by:</span>
                  <div className={`${this.state.showSortOption ? "open" : ""} dropdown`} onClick={this.toggleSortLists}>
                    <button type="button" id="list-of-sortable-fields" className="btn btn-link dropdown-toggle">
                      <span className="selected-btn-display">
                      </span>
                    </button>
                    <ul className="dropdown-menu">
                      { SORT_OPTIONS.map(option => (
                        <li key={option.value}>
                          <span className="sort-selection-options">
                            {option.key}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-block display-styles">
              <div className="inline-block">
                <ul className="nav nav-pills nav-bordered nav-condensed-items data-views-nav action-item-nav hidden-xs">
                  <li>
                    <a href="/investment-property-marketplace" onClick={this.props.onViewChange.bind(null, 'grid')} className={this.props.view === 'grid' ? "active" : ''}>
                      <i className={`fa fa-th-large fa-lg ${this.props.view === 'list' ? "active" : ''}`}/>
                    </a>
                  </li>
                  <li>
                    <a href="/investment-property-marketplace?dv=list" onClick={this.props.onViewChange.bind(null, 'list')} className={this.props.view === 'list' ? "active" : ''} >
                      <i className={`fa fa-bars fa-lg ${this.props.view === 'list' ? "active" : ''}`} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inline-block">
                <ul className="nav nav-pills nav-bordered nav-condensed-items visual-views-nav action-item-nav">
                  <li>
                    <a href="/investment-property-marketplace?vv=map">
                      <span className="hidden-xs">Map</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inline-block"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}