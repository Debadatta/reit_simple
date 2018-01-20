import React from 'react';

export default class HomeInvestmentView extends React.Component {
  render() {
    return (
      <section className="value-prop-1">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-5">
              <div className="max-455-lg">
                <h2 className="accent-bar-purple">
                  Access great investment properties, no matter where you live
                </h2>
                <div className="hidden-xs">
                  <p>
                    At REITSimple, we empower you to buy in top U.S. flip markets that provide solid returns.
                  </p>
                  <p>
                    Our <a href="https://learn.roofstock.com/certification-guarantee/">certified properties</a> are inspected and come with a 30-Day, Money-Back Guarantee, so you can invest remotely with confidence.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-md-offset-1 visual-wrapper">
              <img src="https://roofstock-cdn.azureedge.net/assets/images/homepage-201710a/market-map-xs.svg" alt="With REITSimple anyone can Fix and Flip from anywhere" className="img-responsive center-block map-xs" />
              <img src="https://roofstock-cdn.azureedge.net/assets/images/homepage-201710a/market-map.svg" alt="With REITSimple anyone can Fix and Flip from anywhere" className="img-responsive center-block map-default" />
            </div>
          </div> {/* /.row */}
        </div>
      </section>
    )
  }
}
