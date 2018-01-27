import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="no-margin-top">
    <div className="container">
      <div className="d-flex">
        <div className="col">
          <ul className="list-unstyled">
            <li className="group-header">About Us</li>
            <li><Link to="/about-us">What We Do</Link></li>
            <li><Link to="/about-us/#team">Our Team</Link></li>
          </ul>
        </div>
        <div className="col">
          <ul className="list-unstyled">
            <li className="group-header">Learn</li>
            <li><Link to="/how-it-works">How It Works</Link></li>
          </ul>
        </div>
        <div className="copyright">
          <Link to="/privacy">Privacy Policy</Link> &nbsp; | &nbsp; <Link to="/terms">Terms &amp; Conditions</Link> &nbsp; | &nbsp; <Link to="/">ReitSimple, Inc.</Link> &nbsp; | &nbsp; <a href="mailto:realty@roofstock.com">Reitsimple Realty LLC</a> &nbsp; | &nbsp; <a>© 2018 Reitsimple, Inc.</a>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
