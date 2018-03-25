import React from 'react';

export default class InvestmentHeader extends React.Component {
  render() {
    return (
      <div className="inverstments-header">
        <h3>My Investments</h3>
        <div id="tabs-secondary" className="mar-t-30">
          <ul className="nav nav-tabs" role="tablist">
            <li><span>In Contract</span></li>
            <li className="active"><span>Owned Properties</span></li>
          </ul>
        </div>
      </div>
    )
  }
}
