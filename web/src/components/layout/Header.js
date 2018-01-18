import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import UserNavigation from './UserNavigation';

class Header extends Component {
  render() {
    let parentClass = 'navbar navbar-default site-header';
    return (
      <nav className={parentClass}>
        <div className="navbar-header">
          <h3 className="page-title-bar">
            REITSimple
          </h3>
        </div>
        <ul className="nav navbar-nav navbar-right site-header-icons">
          <li>
            <span>Buy Properties</span>
          </li>
          <li className="site-header__link icon-action-wrapper circle-divider-icon hide" />
          <li className="site-header__user-menu">
            <span>Learn</span>
        </li>
        <li className="site-header__user-menu">
            <span>About Us</span>
        </li>
        <li className="site-header__user-menu">
            <Link to="/login">Log In</Link>
        </li>
        <li className="site-header__user-menu">
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect()(Header);
