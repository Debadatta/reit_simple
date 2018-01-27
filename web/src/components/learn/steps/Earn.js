import React from 'react';

export default class Earn extends React.PureComponent {
  render() {
    return (
      <div className="earn pad-t-b-30-50">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-sm-push-5 col-lg-5 col-lg-push-7">
              <div className="wrapper-copy">
                <h2 className="accent-bar-orange">Earn</h2>
                <ul className="hidden-xs list-style-square-orange">
                  <li>Start collecting rental income as soon as you close.</li>
                  <li>Your <a id="ember1449" href="/manage-properties" className="purple underline ember-view">property manager</a> handles the day-to-day operations</li>
                  <li>REITSimple continues to provide support while you earn</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-5 col-sm-pull-7 col-lg-6 col-lg-pull-5">
              <table>
                <tbody><tr>
                    <td className="text-center"><img src="https://roofstock-cdn3.azureedge.net/rs-apps/assets/images/how-it-works/illus-cash-54dec309fd8f85f2131717719ac7f9a3.svg" alt /></td>
                    <td>Consistent monthly cash flow</td>
                  </tr>
                  <tr>
                    <td className="text-center"><img src="https://roofstock-cdn3.azureedge.net/rs-apps/assets/images/how-it-works/illus-best-a6ae64eb9f71ae7d5797c434b16dd1ec.svg" alt /></td>
                    <td>Best-in-class local property manager</td>
                  </tr>
                  <tr>
                    <td className="text-center"><img src="https://roofstock-cdn3.azureedge.net/rs-apps/assets/images/how-it-works/illus-support-26d17a2813d7ffd6d906760f2c904da0.svg" alt /></td>
                    <td>Continued support from REITSimple</td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
