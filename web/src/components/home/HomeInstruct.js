import React from 'react';

export default class HomeInstruct extends React.Component {
  render() {
    return (
      <section className="value-prop-trio">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <table>
                <tbody><tr>
                    <td>
                      <img src="https://roofstock-cdn.azureedge.net/assets/images/homepage-201710a/map-icon.svg" alt />
                    </td>
                    <td>
                      <h3>Buy, Fix and Flip</h3>
                      <br className="visible-sm" />
                      <p>Access high volume fix and flip markets across the U.S. to find the right property<span className="hidden-md"> for you</span>.</p>
                    </td>
                  </tr>
                </tbody></table>
            </div>
            <br className="visible-xs" />
            <div className="col-sm-4">
              <table>
                <tbody><tr>
                    <td>
                      <img src="https://roofstock-cdn.azureedge.net/assets/images/homepage-201710a/analytics-icon.svg" alt />
                    </td>
                    <td>
                      <h3>Make data-driven decisions</h3>
                      <p>Evaluate listings with our tools, data &amp; analytics. All in one place.</p>
                    </td>
                  </tr>
                </tbody></table>
            </div>
            <br className="visible-xs" />
            <div className="col-sm-4">
              <table>
                <tbody><tr>
                    <td>
                      <img src="https://roofstock-cdn.azureedge.net/assets/images/homepage-201710a/buy-online-icon.svg" alt />
                    </td>
                    <td>
                      <h3>Transact 100% online</h3>
                      <br className="visible-sm" />
                      <p>We make everything easy, including property management.</p>
                    </td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
