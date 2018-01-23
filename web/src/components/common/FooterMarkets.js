import React from 'react';

export default class FooterMarkets extends React.PureComponent {
  render() {
    return (
      <div className="footer-markets">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Roofstock Markets</h3>
              <ul className="list-unstyled list-inline market-names">
                <li><a href="/investment-property-marketplace?market=alabama">Alabama</a></li>
                <li><a href="/investment-property-marketplace?market=arizona">Arizona</a></li>
                <li><a href="/investment-property-marketplace?market=california">California</a></li>
                <li><a href="/investment-property-marketplace?market=florida">Florida</a></li>
                <li><a href="/investment-property-marketplace?market=georgia">Georgia</a></li>
                <li><a href="/investment-property-marketplace?market=illinois">Illinois</a></li>
                <li><a href="/investment-property-marketplace?market=indiana">Indiana</a></li>
                <li><a href="/investment-property-marketplace?market=michigan">Michigan</a></li>
                <li><a href="/investment-property-marketplace?market=northcarolina">N Carolina</a></li>
                <li><a href="/investment-property-marketplace?market=nevada">Nevada</a></li>
                <li><a href="/investment-property-marketplace?market=ohio">Ohio</a></li>
                <li><a href="/investment-property-marketplace?market=tennessee">Tennessee</a></li>
                <li><a href="/investment-property-marketplace?market=texas">Texas</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
