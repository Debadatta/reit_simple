import React from 'react';

import PropertyCard from '../common/PropertyCard';

export default class HomeProperty extends React.Component {
  renderRoofCard() {
    return (
      <PropertyCard/>
    )
  }

  render() {
    return (
      <section className="cards">
        <div className="container">
          <h2 className="accent-bar-orange">
            Buy an investment property with as little as 20% down
          </h2>
          <div className="property-cards margin-t-b-20">
            <div className="property-cards-swiper-container swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a href="#" className="link-to-details">
                   {this.renderRoofCard()}
                  </a>
                </div>
              </div>
              <div className="property-cards-swiper-pagination swiper-pagination" />
            </div>
          </div>
          <div className="text-center">
            <a href="/" className="btn btn-solid btn-primary btn-lg margin-t-20">
              Browse Our Properties
            </a>
          </div>
        </div>
      </section>
    )
  }
}
