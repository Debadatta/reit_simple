import React from 'react';

import PropertyFilter from './PropertyFilter';
import HeaderActions from './HeaderActions';

import GridView from '../common/GridView';

import '../../styles/investPropertyMarket.css';

class InvestPropertyMarket extends React.Component {
  render() {
    return (
      <section className="body-content adjust-body container">
        <div className="body-wrapper invest-property-market">
          <PropertyFilter/>
          <HeaderActions/>
          <div className="row property-items">
            <div className="col-xs-12">
              <div>
                <div className="roof-cards-list ember-view">
                  <div className="row roof-cards-container">
                    <GridView/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default InvestPropertyMarket;