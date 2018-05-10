import React from 'react';

import PropertyFilter from './PropertyFilter';
import '../../styles/investPropertyMarket.css';

class InvestPropertyMarket extends React.Component {
  render() {
    return (
      <section className="body-content adjust-body container">
        <div className="body-wrapper invest-property-market">
          <PropertyFilter/>
        </div>
      </section>
    )
  }
}

export default InvestPropertyMarket;