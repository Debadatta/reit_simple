import React from 'react';

export default class HomeMarketingStrategyView extends React.Component {
  render() {
    return (
      <section className="value-prop-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-push-6 col-md-5 col-md-push-7">
              <h2 className="accent-bar-orange">
                Find the right property with ease
              </h2>
              <ul className="list-style-check-orange hidden-xs">
                <li>Market, neighborhood, and local school insights</li>
                <li>Interior &amp; exterior inspection reports</li>
                <li>Property valuation &amp; comparables</li>
                <li>Tenant payment history &amp; lease details</li>
                <li>Preliminary title report</li>
                <li>Major repair cost estimates, if applicable</li>
                <li>Visualizations of appreciation, income &amp; total returns</li>
                <li>Detailed financial pro forma &amp; return estimates</li>
              </ul>
            </div>
            <div className="col-sm-6 col-sm-pull-6 col-md-pull-5">
              <ul className="list-style-box">
                <li onclick="void(0)">
                  <div className="visual-wrapper">
                    <img src="https://roofstock-cdn.azureedge.net/assets/images/homepage-201710a/analytics-icon.svg" alt className="img-responsive" />
                  </div>
                  <div className="text-wrapper">
                    <h4>Market Overview</h4>
                    <p>
                      <small>
                        <a href="/investment-property/roofstock-coverage">Explore our markets</a>. We provide research and data analysis to help you determine which locations meet your investing objectives.
                      </small>
                    </p>
                  </div>
                </li>
                <li onclick="void(0)">
                  <div className="visual-wrapper">
                    <img src="https://roofstock-cdn.azureedge.net/assets/images/homepage-201710a/neighborhood-icon.svg" alt className="img-responsive" />
                  </div>
                  <div className="text-wrapper">
                    <h4>Neighborhood Insights</h4>
                    <p>
                      <small>
                        Learn the investing appeal of different neighborhoods. Compare homes across similar areas with our <a href="//learn.roofstock.com/neighborhood-rating">Proprietary Neighborhood Rating</a>.
                      </small>
                    </p>
                  </div>
                </li>
                <li onclick="void(0)">
                  <div className="visual-wrapper">
                    <img src="https://roofstock-cdn.azureedge.net/assets/images/homepage-201710a/report-icon.svg" alt className="img-responsive" />
                  </div>
                  <div className="text-wrapper">
                    <h4>Property Analysis</h4>
                    <p>
                      <small>
                        Review inspection reports, take a 3-D tour, see estimated returns based on your financial criteria, and more.
                      </small>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div> {/* /.row */}
        </div>
      </section>
    )
  }
}
