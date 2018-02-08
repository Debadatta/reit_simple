import React from 'react';

export default class HomeServiceView extends React.Component {
  render() {
    return (
      <section className="value-prop-3">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-5">
              <div className="max-455-lg">
                <h2 className="accent-bar-purple">
                  Enjoy long-term, expert support
                </h2>
                <div className="hidden-xs">
                  <p>
                    Our team is here for you all the way. We set you up with a “Customer Delight Officer”, and continue to work on your behalf to help everything go smoothly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-md-offset-1">
              <ul className="list-style-box">
                <li onclick="void(0)">
                  <div className="visual-wrapper online-icon">
                    <img src="https://roofstock-cdn.azureedge.net/assets/images/homepage-201710a/buy-online-icon.svg" alt className="img-responsive" />
                  </div>
                  <div className="text-wrapper">
                    <h4>100% online</h4>
                    <p>
                      <small>
                        Browse, close, manage and sell from the comfort of your home.
                      </small>
                    </p>
                  </div>
                </li>
                <li onclick="void(0)">
                  <div className="visual-wrapper vetted-partners-icon">
                    <img src="https://roofstock-cdn.azureedge.net/assets/images/homepage-201710a/diligence-icon.svg" alt className="img-responsive" />
                  </div>
                  <div className="text-wrapper">
                    <h4>Vetted Partners</h4>
                    <p>
                      <small>
                        Choose top providers for Contractors, lending &amp; insurance.
                      </small>
                    </p>
                  </div>
                </li>
                <li onclick="void(0)">
                  <div className="visual-wrapper support-icon">
                    <img src="https://roofstock-cdn.azureedge.net/assets/images/homepage-201710a/mini-house-icon-v2.svg" alt className="img-responsive" />
                  </div>
                  <div className="text-wrapper">
                    <h4>Long-term support</h4>
                    <p>
                      <small>
                        From purchase to disposition, our dedicated officers are with you every step of the way.
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
