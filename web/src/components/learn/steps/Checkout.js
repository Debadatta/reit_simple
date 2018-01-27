import React from 'react';

export default class Step3 extends React.PureComponent {
  render() {
    return (
      <div id="step3" className="pad-t-b-30-50">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-lg-6">
              <div className="wrapper-copy">
                <h4 className="underline orange"><span>3</span></h4>
                <h2>Check out</h2>
                <p>Making an offer is free. The 0.5% marketplace fee is charged only if your offer is accepted.</p>
                <p className="smaller orange">
                  <strong>Buy Now</strong>
                </p>
                <p className="small">
                  Make an offer at full list price and proceed through checkout. This will take a property off the market so no one else can buy it.
                </p>
                <p className="smaller purple">
                  <strong>Negotiate</strong>
                </p>
                <p className="small">
                  Make an offer to see if you can get a better price. You’ll be notified when the seller makes a decision.
                </p>
              </div>
            </div>
            <div className="col-sm-5 col-lg-4 col-xl-4">
              <div className="wrapper-img" onclick="void(0)">
                <img src="https://roofstock-cdn3.azureedge.net/rs-apps/assets/images/how-it-works/buy-now-1c8944f9216ed9b2a22e42dd9edb84e8.png" alt className="img-responsive" />
                </div>
              <div className="wrapper-img" onclick="void(0)">
                <img src="https://roofstock-cdn3.azureedge.net/rs-apps/assets/images/how-it-works/negotiate-9c331581420cea0e8f310f6d10d0fd87.png" alt className="img-responsive" />
               </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
