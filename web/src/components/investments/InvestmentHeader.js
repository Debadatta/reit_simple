import React from 'react';

export default class InvestmentHeader extends React.Component {
  getActiveClass(tab) {
    return this.props.currentTab === tab ? "active" : "";
  }

  render() {
    return (
      <div className="inverstments-header">
        <h3>My Investments</h3>
        <div id="tabs-secondary" className="mar-t-30">
          <ul className="nav nav-tabs" role="tablist">
            <li onClick={this.props.onTabChange.bind(null, "contract")} className={this.getActiveClass("contract")}><span>In Contract</span></li>
            <li onClick={this.props.onTabChange.bind(null, "myInvest")} className={this.getActiveClass("myInvest")}><span>Owned Properties</span></li>
          </ul>
        </div>
      </div>
    )
  }
}
