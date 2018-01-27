import React from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';
import Analyze from './Analyze';
import Checkout from './Checkout';
import Close from './Close';
import Track from './Track';
import Earn from './Earn';

export default class Steps extends React.Component {
  renderFinance() {
    return (
      <div className="cash-or-finance container">
        <h2 className="h2-pill">
          <span>Cash or Financing?</span>
        </h2>
        <ul className="list-style-square-orange">
          <li>How much do you want to spend?</li>
          <li>How much do you want to put down?</li>
          <li>Are you financing or paying with cash?</li>
        </ul>
        <hr />
      </div>
    )
  }

  render() {
    return (
        <div>
        <div className="steps container">
        <ol className="list-unstyled">
          <li>
            <Link to="#step1">					<img src="https://roofstock-cdn3.azureedge.net/rs-apps/assets/images/how-it-works/1-search-ee089b3ea1d3a4dc29b563d8a45d687b.svg" alt />
              <h3>Search</h3>
            </Link>			</li>
          <li>
            <Link to="#step2">					<img src="https://roofstock-cdn3.azureedge.net/rs-apps/assets/images/how-it-works/2-analyze-25a7369c9a76f71cd2c5f224fdc9c695.svg" alt />
              <h3>Analyze</h3>
            </Link>			</li>
          <li>
            <Link to="#step3">					<img src="https://roofstock-cdn3.azureedge.net/rs-apps/assets/images/how-it-works/3-checkout-0b00b52c4da4d7242064bc81f9c83f6a.svg" alt />
              <h3>Check out</h3>
            </Link>			</li>
          <li>
            <Link to="#step4">					<img src="https://roofstock-cdn3.azureedge.net/rs-apps/assets/images/how-it-works/4-close-e9be3951f65e9bfd33e1a262e416e5ec.svg" alt />
              <h3>Close</h3>
          </Link>			</li>
          <li>
        <Link to="#step5">
				<img src="#" alt="Track" />
              <h3>Track</h3>
        </Link>			</li>
        <li>
        <Link to="#step6">
				<img src="#" alt="Dispose" />
              <h3>Dispose</h3>
            </Link>			</li>
        </ol>
        </div>
        {this.renderFinance()}
        <Search/>
        <Analyze/>
        <Checkout/>
        <Close/>
        <Track/>
        <Earn/>
        </div>
    )
  }
}
