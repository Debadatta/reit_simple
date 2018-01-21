import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import UserNavigation from './UserNavigation';

export default class Header extends Component {
  state = {
    currentMenu: null
  };

  componentDidMount() {
    document.addEventListener("click", this.hideMenu);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.hideMenu);
  }

  hideMenu = (e) => {
    // if (e.target && e.target !== this.learnDom && e.target !== this.aboutUsDom && !e.target.contains(this.learnDom) && !e.target.contains(this.aboutUsDom)) {
    //   this.learnDom.classList.remove('open');
    //   this.aboutUsDom.classList.remove('open');
    // }
  }

  setCurrentDropdown = (menu) => {
    this.setState({currentMenu: this.state.currentMenu === menu ? '' : menu});
  }

  checkMenuDropdownShow = (menu) => {
    if (this.state.currentMenu === menu) {
      return 'open';
    } else {
      return '';
    }
  }

  render() {
    return (
      <header>
      <div className="navbar-fixed-top">
        <div className={`prerender-overwrite navbar navbar-rs ${this.props.transperency ? 'transparent' : ''}`}>
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link to="/" className="navbar-brand" style={{color: 'blue', fontWeight: 'bold', fontSize: 28}}>
                REITSimple
              </Link>
              <ul className="nav navbar-nav visible-xs visible-sm pull-right">
                <li className="pull-right" style={{border: 'none'}}>
                  <a href="/signup" className="btn-sm">Sign Up</a>
                </li>
              </ul>
            </div>
            <div className="navbar-collapse collapse">
              <button type="button" className="navbar-toggle hidden-md hidden-lg" data-toggle="collapse" data-target=".navbar-collapse">
                <img src="//roofstock-cdn.azureedge.net/assets/images/close.png" alt="Close" />
              </button>
              <ul className="nav navbar-nav rs-header">
                <li>
                  <a href="javascript:void(0)" className="top top-menu-item">Buy Properties</a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right rs-header">
        <li className={`dropdown ${this.checkMenuDropdownShow('learn')}`} onClick={this.setCurrentDropdown.bind(this, 'learn')} ref={ref => this.learnDom = ref}>
                  <a className="dropdown-toggle top-menu-item" role="button" aria-haspopup="true" aria-expanded="false" >
                    Learn
                    <i className="fa fa-angle-down" />
                  </a>
                  <ul className={`dropdown-menu dropdown-menu-left`}>
                    <li><a href="/how-it-works">How It Works</a></li>
                    <li><a href="/portfolios/overview">Portfolio Investments</a></li>
                    <li><a href="https://learn.roofstock.com/blog">Blog</a></li>
                    <li><a href="/investment-property/roofstock-coverage">Markets</a></li>
                    <li><a href="/financing">Financing</a></li>
                  </ul>
                </li>
                <li className={`dropdown ${this.checkMenuDropdownShow('aboutUs')}`} onClick={this.setCurrentDropdown.bind(this, 'aboutUs')} ref={ref => this.aboutUsDom = ref}>
                  <a className="dropdown-toggle top-menu-item" role="button" aria-haspopup="true" aria-expanded="false" >
                    About Us
                    <i className="fa fa-angle-down" />
                  </a>
                  <ul aria-labelledby="list-of-about-us" className={`dropdown-menu dropdown-menu-left ${this.checkMenuDropdownShow('aboutUs')}`}>
                    <li><a href="/about-us">What We Do</a></li>
                    <li><a href="/about-us/#team">Our Team</a></li>
                    <li><a href="/about-us/press">Press</a></li>
                    <li className="last"><a href="https://learn.roofstock.com/reviews">Reviews</a></li>
                    <li><a href="/about-us/partners">Partners</a></li>
                  </ul>
                </li>
        {this.props.currentUser ? <li><a href="javascript:void(0);" className="top-menu-item btn-sm" onClick={this.props.logout}>Logout</a></li> : <li><Link to="/login" className="top-menu-item">Log In</Link></li>}
                {this.props.currentUser ? null : <li><Link to="/signup" className="btn-sm">Sign Up</Link></li>}
              </ul>
            </div>
          </div>
        </div>
        </div>
      </header>
    );
  }
}
