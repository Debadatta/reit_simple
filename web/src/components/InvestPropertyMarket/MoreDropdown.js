import React from 'react';
import RangeSlider from '../common/RangeSlider';
import CustomDropdown from '../common/CustomDropdown';

const RATING_OPTIONS = [
  {key: "All", value: "all"},
  {key: "5 Stars+", value: "5"},
  {key: "4 Stars+", value: "4"},
  {key: "3 Stars+", value: "3"},
  {key: "2 Stars+", value: "2"},
  {key: "1 Stars+", value: "1"}
];

const MIN_SQFT_OPTIONS = [
  {key: "All", value: "all"},
  {key: "500+", value: "500"},
  {key: "750+", value: "750"},
  {key: "1000+", value: "1000"},
  {key: "1500+", value: "1500"},
  {key: "2000+", value: "2000"},
  {key: "2500+", value: "2500"},
];

const OCCUPANCY_OPTIONS = [
  {key: "All", value: "all"},
  {key: "Vacant", value: "vacant"},
  {key: "Occupied", value: "occupied"},
  {key: "Owner Occupied", value: "ownerOccupied"}
];

const DEAL_STATUS_OPTIONS = [
  {key: "All", value: "all"},
  {key: "Coming Up", value: "comingUp"},
  {key: "Pending Acquisition", value: "pendingAcquisition"},
  {key: "For Sale", value: "forSale"},
  {key: "Pending Sale", value: "pendingSale"},
  {key: "Sold", value: "sold"}
];

const PROPERTY_TYPES = [
  {key: "All", value: "all"},
  {key: "Single Family Residence", value: "singleFamily"},
  {key: "Multi-family Residence", value: "multiFamily"},
  {key: "Condo", value: "condo"}
];

const SELLER_OPTIONS = [
  {key: "All", value: "all"},
  {key: "Brahman Holdings LLC", value: 1}
];

const MINYR_BUILT_OPTIONS = [{key: "All", value: "all"}];

let dt = new Date();
for (let i = 1890; i < dt.getFullYear(); i = i + 10) {
  MINYR_BUILT_OPTIONS.push({key: `${i}+`, value: i});
}

if ((dt.getFullYear ()- 1890) % 10 > 5) {
  let lastYear = dt.getFullYear() - (((dt.getFullYear() - 1890) % 10) - 5);
  MINYR_BUILT_OPTIONS.push({key: `${lastYear}+`, value: lastYear});
}

export default class MoreDropdown extends React.Component {
  state = {
    sellerRating: "All",
    dealRating: "All",
    minYrBuilt: "All",
    minSqft: "All",
    occupancy: "All",
    dealStatus: "For Sale",
    propertyType: "All",
    seller: "All",
    showMore: false
  };

  handleChange = (type, value) => this.setState({ [type]: value });
  toggleShowMore = () => this.setState({ showMore: !this.state.showMore });

  renderMore() {
    if (!this.state.showMore) return null;

    return (
      <div className="row">
        <div className="col-sm-4">
          <CustomDropdown 
            title="Deal Status" 
            value={this.state.dealStatus} 
            handleOnChange={this.handleChange} 
            name="dealStatus" 
            options={DEAL_STATUS_OPTIONS}
          />
          
          <CustomDropdown 
            title="Property Type" 
            value={this.state.propertyType} 
            handleOnChange={this.handleChange} 
            name="propertyType" 
            options={PROPERTY_TYPES}
          />

          <CustomDropdown 
            title="Seller" 
            value={this.state.seller} 
            handleOnChange={this.handleChange} 
            name="seller" 
            options={SELLER_OPTIONS}
          />
        </div>        
      </div>
    )
  }

  render() {
    return(
      <div className="filter-select-dropdown match-trigger-width open-as-modal property-filters-select-dropdown">
        <div className="filter-control property-filters-options __rs-controls__filters__property-filters__filter-options__a9da9">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4">
                <div className="filter-options slider-filter-options __rs-controls__filters__slider-filter__filter-options__4b318">
                  <div>
                    <div className="clearfix">
                      <div className="pull-left">
                        <div className="radio-container purple-checkboxes __rs-controls__radio__be248">
                          <label className="no-radio">
                            <span>
                              <span>&nbsp;</span>
                            </span>
                          </label>
                          <span className="ie-radio-fix">
                            Net Profit
                          </span>
                        </div>
                      </div>
                      <div className="pull-right option-text-align">                        
                        0% +
                      </div>
                    </div>
                    <div className="option-slider-align">
                      <RangeSlider/>
                    </div>
                  </div>
                </div>
                <div className="filter-options slider-filter-options __rs-controls__filters__slider-filter__filter-options__4b318">
                  <div>
                    <div className="clearfix">
                      <div className="pull-left">
                        <div className="radio-container purple-checkboxes __rs-controls__radio__be248">
                          <label className="no-radio">
                            <span>
                              <span>&nbsp;</span>
                            </span>
                          </label>
                          <span className="ie-radio-fix">
                            Return on Investment
                          </span>
                        </div>
                      </div>
                      <div className="pull-right option-text-align">
                        0% +
                      </div>
                    </div>
                    <div className="option-slider-align">
                      <RangeSlider/>
                    </div>
                  </div>
                </div>
                <div className="filter-options slider-filter-options __rs-controls__filters__slider-filter__filter-options__4b318">
                  <div>
                    <div className="clearfix">
                      <div className="pull-left">
                        <div className="radio-container purple-checkboxes __rs-controls__radio__be248">
                          <label className="no-radio">
                            <span>
                              <span>&nbsp;</span>
                            </span>
                          </label>
                          <span className="ie-radio-fix">
                            Annual Turns
                          </span>
                        </div>
                      </div>
                      <div className="pull-right option-text-align">
                        0% +
                      </div>
                    </div>
                    <div className="option-slider-align">
                      <RangeSlider/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <CustomDropdown 
                  title="Seller Rating" 
                  value={this.state.sellerRating} 
                  handleOnChange={this.handleChange} 
                  name="sellerRating" 
                  options={RATING_OPTIONS}
                />
                <CustomDropdown 
                  title="Deal Rating"
                  value={this.state.dealRating}
                  handleOnChange={this.handleChange}
                  name="dealRating"
                  options={RATING_OPTIONS}
                />                
                <div className="row">
                  <div className="col-xs-6">
                    <div className="filter-control up-down-filter __rs-controls__filters__up-down-filter__781c4">
                      <div className="title">
                        Min Beds
                      </div>
                      <div className="input-group">
                        <span className="input-group-btn">
                          <button className="btn btn-outline-light" type="button">
                            <i className="fa fa-minus" />
                          </button>
                        </span>
                        <input type="text" value="All" />
                        <span className="input-group-btn">
                          <button className="btn btn-outline-light" type="button">
                            <i className="fa fa-plus" />
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 plus-minus-input-group-right">
                    <div className="filter-control up-down-filter __rs-controls__filters__up-down-filter__781c4">
                      <div className="title">
                        Min Baths
                      </div>
                      <div className="input-group">
                        <span className="input-group-btn">
                          <button className="btn btn-outline-light" type="button" disabled>
                            <i className="fa fa-minus" />
                          </button>
                        </span>
                        <input type="text" value="All" />
                        <span className="input-group-btn">
                          <button className="btn btn-outline-light" type="button">
                            <i className="fa fa-plus" />
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <CustomDropdown 
                  title="Min Yr Built" 
                  value={this.state.minYrBuilt} 
                  handleOnChange={this.handleChange} 
                  name="minYrBuilt" 
                  options={MINYR_BUILT_OPTIONS}
                />
                <CustomDropdown 
                  title="Min SqFt" 
                  value={this.state.minSqft} 
                  handleOnChange={this.handleChange} 
                  name="minSqft" 
                  options={MIN_SQFT_OPTIONS}
                />
                <CustomDropdown 
                  title="Occupancy" 
                  value={this.state.occupancy} 
                  handleOnChange={this.handleChange} 
                  name="occupancy" 
                  options={OCCUPANCY_OPTIONS}
                />
              </div>
            </div>
            <div className="row no-bottom-padding">
              <div className="col-xs-12">
                <div className="clearfix other-filter-toggle">
                  <div className="pull-right">
                    <div className="expand-toggle __rs-controls__expand-toggle__05013" onClick={this.toggleShowMore}>
                      <button className="btn btn-link-default">
                        {this.state.showMore ? "Less" : "More"}
                        <i className={`toggle-icon fa ${this.state.showMore ? "fa-chevron-up" : "fa-chevron-down"}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {this.renderMore()}
          </div>
        </div>
        <div className="actions-btn-group">
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
