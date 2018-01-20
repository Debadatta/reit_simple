import React from 'react';

export default class HomeCustomer extends React.Component {
  render() {
    return (
      <section className="media-proof cards">
        <div className="container">
          <div className="testimonials">
            <div className="media-proofs-swiper-container swiper-container">
              {/* Additional required wrapper */}
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="story-card">
                    <h3>
                      <img src="https://roofstock-cdn.azureedge.net/assets/images/homepage-201710a/pr-logo-forbes-black.png" alt className="img-responsive center-block" />
                    </h3>
                    <blockquote className="text-center">
                      The only online marketplace that allows investors to buy leased single-family homes without interrupting tenant occupancy.
                    </blockquote>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="story-card">
                    <h3>
                      <img src="https://roofstock-cdn.azureedge.net/assets/images/homepage-201710a/pr-logo-recode-black.png" alt className="img-responsive center-block" />
                    </h3>
                    <blockquote className="text-center">
                      The way Roofstock works is pretty straightforward. If you want to buy a single-tenant home that’s already leased, Roofstock’s marketplace offers a variety of properties at different price points.
                    </blockquote>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="story-card">
                    <h3>
                      <img src="https://roofstock-cdn.azureedge.net/assets/images/homepage-201710a/pr-logo-wsj-black.png" alt className="img-responsive center-block" />
                    </h3>
                    <blockquote className="text-center">
                      Roofstock has the potential to introduce liquidity into a market that has traditionally been illiquid.
                    </blockquote>
                  </div>
                </div>
              </div>
              {/* If we need pagination */}
              <div className="media-proofs-swiper-pagination swiper-pagination" />
            </div> {/* /.media-proofs-swiper-container */}
          </div> {/* /.testimonials */}
          <br /><br />
          <div className="text-center">
            <a href="/about-us/press" onclick="trackCtaClicked('Read More Press');" className="btn btn-lg btn-outline-primary">
              Read More Press
            </a>
          </div>
        </div>
      </section>
    )
  }
}
