import React from 'react';
import PropTypes from 'prop-types';

export default class PropertyCard extends React.Component {
  render() {
    return (
      <div className={`roof-card card ${this.props.className}`}>
        <div className="roof-card--inner">
          <div align="center" className="embed-responsive">
            <img className="property-img" src="https://roofstock-cdn.azureedge.net/public/properties/1643899/photo/66db553c-d9ef-4301-90b4-e3bda3f49778_1-front-modified-20171116185222_640.jpg" />
            <div className="overlay ">
              <div className="price">
                <div>
                  <div className="price-value tentative-adjust  ">
                    <span className="symbol-dollar">$</span>120,000
                  </div>
                </div>
              </div>
              <div>
                <span className="details">
                  2 bed, 1.5 bath | 1099 sqft | Built in 1943
                </span>
              </div>
            </div>
          </div>
          <div className="property-stats">
            <div className="property-stats-item initial-investment">
              <h6>Initial Investment</h6>
              <span className="nowrap"><span className="symbol-dollar">$</span>27,500</span>
            </div>
            <div className="property-stats-item current-rent">
              <h6>Avg. Turnaround</h6>
              <span className="symbol-dollar">180 days</span>
            </div>
            <div className="property-stats-item total-return">
              <h6>Total ROI</h6>
              <span className="nowrap">
                <span className="symbol-dollar">19%</span>
              </span>
            </div>
            <div className="property-stats-item nh">
              <h6>Cash on Cash</h6>
              <span className="symbol-dollar">$</span>4560
            </div>
          </div>
          <div className="property-address">
            <span className="street">50 Wallace Avenue</span><br />
            <span className="csz">Chicopee, MA 01020</span>
          </div>
        </div>
      </div>
    )
  }
}

PropertyCard.defaultProps = {
  className: "roof-card card"
};