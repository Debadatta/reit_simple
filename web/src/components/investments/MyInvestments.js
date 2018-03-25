import React from 'react';
import InvestmentHeader from "./InvestmentHeader";
import '../../styles/investments.css';

export default class MyInvestments extends React.Component {
  render() {
    return (
      <section className="body-content adjust-body container investments">
        <InvestmentHeader/>
        <div className="investments-content">
          <div className="table-responsive">
            <table className="table properties">
              <tbody>
                <div className="no-investments-container">
                  <div className="finding-roofs-full">
                    <div className="title">You do not have any listings yet</div>
                    <div className="seller-actions">
                      <div className="action">
                        <a href="/investment-property-marketplace">Browse properties</a>
                      </div>
                    </div>
                  </div>
                </div>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    )
  }
}
