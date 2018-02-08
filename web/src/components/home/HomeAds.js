import React from 'react';

export default class HomeAds extends React.Component {
  render() {
  return (
    <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-md-7 col-lg-6">
              <h1 className="text-blue">
                Invest in Real Estate like a Pro<br />
                Diversify your investment portfolio<br />
              </h1>
              <h4>Buy undervalued homes across US.</h4>
              <div className="btn-wrap">
                <a href="/investment-property-marketplace" onclick="trackCtaClicked('See Our Properties');" className="btn btn-solid btn-primary btn-lg">
                  See Our Properties
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
  }
}
