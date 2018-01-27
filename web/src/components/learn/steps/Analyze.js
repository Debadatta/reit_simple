import React from 'react';

export default class Step2 extends React.Component {
  render() {
    return (
      <div id="step2" className="bg-purple-20 pad-t-b-30-50">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-sm-push-5 col-lg-6 col-lg-push-6">
              <div className="wrapper-copy">
                <h4 className="underline purple"><span>2</span></h4>
                <h2>Analyze</h2>
                <p>Review details and learn more about the property.</p>
                <ul className="list-style-check-purple small">
                  <li>Pictures, floor plans, curb view</li>
                  <li>Property valuation, appraisal, inspection, title report & insurance quote</li>
                  <li>Interactive tools for visualizing return and cost estimates</li>
                  <li className="hidden-xs">Comparative analysis and annualized returns</li>
                  <li className="hidden-xs">Property Rehab plans and cost sheets</li>
                  <li className="hidden-xs">Neighborhood Rating and unique selling points</li>
                  <li className="hidden-xs">Local project management options</li>
                  <li className="hidden-xs">Local Brokerage options</li>
                </ul>
                <br className="visible-xs" />
              </div>
            </div>
            <div className="col-sm-5 col-sm-pull-7 col-lg-6 col-lg-pull-6">
              <div className="wrapper-img center-block">
                <div className="swiper-slide">
                  <a href="/investment-property-details/detroit-michigan/25886-rose-st-roseville-48066/1643899" onclick="trackPropertyCardClicked(1643899);" className="link-to-details">
                    <div className="roof-card card">
                      <div align="center" className="embed-responsive">
                        <img className="property-img" src="https://roofstock-cdn.azureedge.net/public/properties/1643899/photo/66db553c-d9ef-4301-90b4-e3bda3f49778_1-front-modified-20171116185222_640.jpg" />
                        <div className="overlay ">
                          <div className="price">
                            <div>
                              <div className="price-value tentative-adjust  ">
                                <span className="symbol-dollar">$</span>100,000
                              </div>
                            </div>
                          </div>
                          <div>
                            <span className="details">
                              3bd, 1ba | 996 sqft | Built in 1930
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
                          <h6>Current Rent</h6>
                          <span className="symbol-dollar">$</span>1,000
                        </div>
                        <div className="property-stats-item total-return">
                          <h6>Total Return</h6>
                          <span className="nowrap">
                            <span className="symbol-dollar">$</span>25,094
                            <span className="field-note">/5 Yr</span>
                          </span>
                        </div>
                        <div className="property-stats-item nh">
                          <h6>Neighborhood</h6>
                          <span className="stars">
                            <i className="fa fa-star fa-1" aria-hidden="true" />
                            <i className="fa fa-star fa-1" aria-hidden="true" />
                            <i className="fa fa-star fa-1" aria-hidden="true" />
                            <i className="fa fa-star-o fa-1" aria-hidden="true" />
                            <i className="fa fa-star-o fa-1" aria-hidden="true" />
                          </span>
                        </div>
                      </div>
                      <div className="property-address">
                        <span className="street">25886 Rose St</span><br />
                        <span className="csz">Roseville, MI 48066</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
