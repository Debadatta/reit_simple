import React from 'react';

export default class Testimonials extends React.Component {
  render() {
    return (
      <div className="testimonials cards social-proofs">
            <div className="social-proofs-swiper-container swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a className="story-card" href="/" target="_blank">
                    <h3>Bought sight unseen</h3>
                    <blockquote>
                      I never needed to see the property in person. The certification process provided everything I was looking for to help me find the right investment property.
                    </blockquote>
                    <cite>
                      <span className="cite-img">
                        <img src="https://roofstock-cdn.azureedge.net/assets/images/homepage-201710a/thumb-bryce.png" alt />
                      </span>
                      <span className="cite-text">
                        <span className="line">2 properties purchased in FL </span>
                        <span className="line">Bryce H. - New York City, NY</span>
                      </span>
                    </cite>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a className="story-card" href="/" target="_blank">
                    <h3>Invested with confidence</h3>
                    <blockquote>
                      Roofstock’s website is a dream come true for property investors, offering properties that are both certified and occupied, with detailed inspection reports &amp; property management company recommendations
                    </blockquote>
                    <cite>
                      <span className="cite-img">
                        <img src="https://roofstock-cdn.azureedge.net/assets/images/homepage-201710a/thumb-linda-dalton.png" alt />
                      </span>
                      <span className="cite-text">
                        <span className="line">1 property purchased in GA </span>
                        <span className="line">Linda D. - Seattle, WA</span>
                      </span>
                    </cite>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a className="story-card" href="https://learn.roofstock.com/reviews/josh-l-customer-review" target="_blank">
                    <h3>Partnered with the right providers</h3>
                    <blockquote>
                      After looking around at property management and financing options on my own, I decided to go with Roofstock’s certified partners which really smoothed out the whole closing process.
                    </blockquote>
                    <cite>
                      <span className="cite-img">
                        <img src="https://roofstock-cdn.azureedge.net/assets/images/homepage-201710a/thumb-josh-lawlor.png" alt />
                      </span>
                      <span className="cite-text">
                        <span className="line">4 properties purchased in FL &amp; GA </span>
                        <span className="line">Josh L. - New York, NY</span>
                      </span>
                    </cite>
                  </a>
                </div>
              </div>
              <div className="social-proofs-swiper-pagination swiper-pagination" />
            </div>
          </div>
    )
  }
}
