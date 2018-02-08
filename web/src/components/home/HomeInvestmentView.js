import React from 'react';

export default class HomeInvestmentView extends React.Component {
  render() {
    return (
      <section className="value-prop-1" style={{paddingTop: "0px"}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-5">
              <div className="max-455-lg">
                <h2 className="accent-bar-orange">
                  Access great investment properties, no matter where you live
                </h2>
                <div className="hidden-xs">
                  <p>
                    At REITSimple, we empower you to buy in top U.S. flip markets that provide solid returns.
                  </p>
                  <p>
                    Our properties are inspected, appraised and title insured so you can invest remotely with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div> {/* /.row */}
        </div>
      </section>
    )
  }
}
