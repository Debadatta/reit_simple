import React from 'react';

export default class Close extends React.PureComponent {
  render() {
    return (
      <div id="step4" className="bg-purple-20 pad-t-b-30-50">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-sm-push-5 col-lg-5 col-lg-push-7 top-30">
              <div className="wrapper-copy">
                <h4 className="underline purple"><span>4</span></h4>
                <h2>Close</h2>
                <p>Our service and transaction team guides you through escrow until the place is officially yours.</p>
                <a className="purple" href="#">Learn about the closing process</a>
              </div>
              <br className="visible-xs" />
            </div>
            <div className="col-sm-5 col-sm-pull-7 col-lg-6 col-lg-pull-5">
              <ul className="list-style-box">
                <li onclick="void(0)">
                  <div className="visual-wrapper">
                    <img src="https://roofstock-cdn3.azureedge.net/rs-apps/assets/images/how-it-works/illus-connect-1bd3dbdc0585a348c21e5738a171bd88.svg" alt />
                  </div>
                  <div className="text-wrapper">
                    <h4>Connect with providers</h4>
                    <p className="small">During the closing period, we’ll help you finalize your partners for lending, insurance and property management.</p>
                  </div>
                </li>
                <li onclick="void(0)">
                  <div className="visual-wrapper">
                    <img src="https://roofstock-cdn3.azureedge.net/rs-apps/assets/images/how-it-works/illus-transact-ease-1b5c98f3fac68eef0f3bf8233e43bc35.svg" alt />
                  </div>
                  <div className="text-wrapper">
                    <h4>Transact with ease</h4>
                    <p className="small">Closing typically takes around 15 days if you’re paying cash and 30 days if you’re financing.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
