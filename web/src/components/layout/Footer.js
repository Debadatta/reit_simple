import React from 'react';

/* eslint-disable react/jsx-no-target-blank */
const Footer = () => (
  <footer className="no-margin-top">
        <div className="container">
          <div className="d-flex">
            <div className="col">
              <ul className="list-unstyled">
                <li className="group-header">Business</li>
                <li><a href="/investment-property-marketplace">Buy Properties</a></li>
                <li><a href="/seller-services">Sell</a></li>
                <li><a href="/manage-properties">Manage</a></li>
                <li><a href="/agents-brokers">Agents &amp; Brokers</a></li>
              </ul>
            </div>
            <div className="col">
              <ul className="list-unstyled">
                <li className="group-header">About Us</li>
                <li><a href="/about-us">What We Do</a></li>
                <li><a href="/about-us/#team">Our Team</a></li>
                <li><a href="/about-us/press">Press</a></li>
                <li><a href="https://learn.roofstock.com/reviews">Reviews</a></li>
                <li><a href="/about-us/partners">Partners</a></li>
                <li><a href="/about-us/careers">Careers</a></li>
              </ul>
            </div>
            <div className="col">
              <ul className="list-unstyled">
                <li className="group-header">Learn</li>
                <li><a href="/how-it-works">How It Works</a></li>
                <li><a href="/portfolios/overview">Portfolio Investments</a></li>
                <li><a href="https://learn.roofstock.com/blog">Blog</a></li>
                <li><a href="/investment-property/roofstock-coverage">Markets</a></li>
                <li><a href="/financing">Financing</a></li>
                <li><a href="https://learn.roofstock.com/certification-guarantee/">Certification &amp; Guarantee</a></li>
                <li><a href="/get-neighborhood-rating">Neighborhoods</a></li>
                <li><a href="/learn/faq">FAQ</a></li>
                <li><a href="/learn/glossary">Glossary</a></li>
              </ul>
            </div>
            <div className="col">
              <ul className="list-unstyled">
                <li className="group-header">Services</li>
                <li><a href="https://join.roofstock.com/advisory-services">Advisory Services</a></li>
                <li><a href="https://join.roofstock.com/1031-exchange">1031 Exchange</a></li>
                <li><a href="/sdira">IRA Investing</a></li>
              </ul>
            </div>
            <div className="col">
              <ul className="list-unstyled">
                <li className="group-header">Contact Us</li>
                <li><a href="/about-us/contact">General Inquiries</a></li>
                <li className="info">(800) 339-8511</li>
                <li>
                  <a className="info" href="mailto:support@roofstock.com" target="_top">support@reitsimple.com</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className="list-unstyled">
                <li className="group-header" style={{border: 0}}>Questions?</li>
                <li>
                  <a className="btn btn-sm btn-primary" href="#" onclick="return SnapEngage.startLink();">
                    <img src="https://roofstock-cdn.azureedge.net/assets/images/homepage-201710a/chat.svg" alt="chat icon" style={{paddingRight: 5}} />
                    Chat Now!
                  </a>
                </li>
              </ul>
              <div className="social-media-links">
                <a href="https://www.facebook.com/Roofstock" target="facebook">
                  <i className="fa fa-facebook" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://www.linkedin.com/company/roofstock" target="linkedin">
                  <i className="fa fa-linkedin" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://twitter.com/roofstock" target="twitter">
                  <i className="fa fa-twitter" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </div>{/* /row */}
          <div className="copyright">
            <a href="/privacy">Privacy Policy</a> &nbsp; | &nbsp; <a href="/terms">Terms &amp; Conditions</a> &nbsp; | &nbsp; <a href="/">ReitSimple, Inc.</a> &nbsp; | &nbsp; <a href="mailto:realty@roofstock.com">Reitsimple Realty LLC</a> &nbsp; | &nbsp; <a>© 2018 Reitsimple, Inc.</a>
          </div>
        </div>
      </footer>
);
export default Footer;
