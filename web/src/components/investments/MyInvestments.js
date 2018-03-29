import React from 'react';
import InvestmentHeader from "./InvestmentHeader";
import '../../styles/investments.css';

export default class MyInvestments extends React.Component {
  state = {
    currentTab: "myInvest"
  }

  handleTabChange = (currentTab, e) => this.setState({currentTab});

  renderNoContent() {
    return (
      <div className="no-investments-container">
        <div className="finding-roofs-full">
          <div className="title">You do not have any investments yet</div>
          <div className="seller-actions">
            <div className="action">
              <a href="/investment-property-marketplace">Browse properties</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderMyInvestments() {
    return this.renderNoContent();
  }

  renderContracts() {
    return null;
  }

  renderContent() {
    switch(this.state.currentTab) {
    case "contract":
      return this.renderContracts();
    default:
      return this.renderMyInvestments();
    }
  }

  render() {
    return (
      <section className="body-content adjust-body container investments">
        <InvestmentHeader onTabChange={this.handleTabChange} currentTab={this.state.currentTab}/>
        <div className="investments-content">
          <div className="table-responsive">
            <table className="table properties">
              <tbody>
                {this.renderContent()}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    )
  }
}
