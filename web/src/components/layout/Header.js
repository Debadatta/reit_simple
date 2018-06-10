import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SubHeader from "./SubHeader";

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
    if (e.target) {
      if (e.target !== this.aboutUsDom && !this.learnDom.contains(e.target) && e.target !== this.aboutUsDom && !this.aboutUsDom.contains(e.target) && e.target !== this.userInfo && this.userInfo && !this.userInfo.contains(e.target)) {
        this.setState({currentMenu: null});
      }
    }
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

  renderSubmenu() {
    const pathname = this.props.location.pathname;
    if (['terms', 'password', "investments", "my-account", "investment-property-marketplace", "sell-deals", "invests", "lends"].indexOf(pathname.split('/')[1]) === -1) return null;

    return <SubHeader/>;
  }

  renderLeftMenu() {
    if (this.props.currentUser) {
      return (
        <ul className="nav navbar-nav rs-header">
          <li>
            <Link to="/investment-property-marketplace" className="top top-menu-item">Buy Deals</Link>
          </li>
          <li>
            <Link to="/sell-deals" className="top top-menu-item">Sell Deals</Link>
          </li>
          <li>
            <Link to="/invests" className="top top-menu-item">Invest</Link>
          </li>
          <li>
            <Link to="/lends" className="top top-menu-item">Lend</Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav navbar-nav rs-header">
          <li>
            <Link to="/investment-property-marketplace" className="top top-menu-item">Buy Deals</Link>
          </li>
        </ul>
      );
    }
  }

  render() {
    let userNevigation = null, title;

    if (this.props.currentUser) {
      if (this.props.currentUser.loginCount === 1) {
        title = 'Welcome';
      } else {
        title = "Welcome back";
      }

      userNevigation = (
        <li className={`dropdown ${this.checkMenuDropdownShow('userInfo')}`} onClick={this.setCurrentDropdown.bind(this, 'userInfo')} ref={ref => this.userInfo = ref}>
          <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            {title}, {this.props.currentUser.firstName}
            <i className="fa fa-angle-down" />
          </a>
          <ul className="dropdown-menu dropdown-menu-left">
            <li><a href="/my-properties/in-certification">My Properties</a></li>
            <li><Link to="/investments/my-investments">My Investments</Link></li>
            <li><Link to="/my-account">My Account</Link></li>
            <li className="last"><a href="javascript:void(0);" onClick={this.props.logout}><i className="fa fa-sign-out" /> Log off</a></li>
          </ul>
        </li>
      )
    }

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
              <Link to="/" className="navbar-brand" style={{color: "#337ab7", fontWeight: 'bold', fontSize: 28}}>
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
              { this.renderLeftMenu() }
              <ul className="nav navbar-nav navbar-right rs-header">
                <li className={`dropdown ${this.checkMenuDropdownShow('learn')}`} onClick={this.setCurrentDropdown.bind(this, 'learn')} ref={ref => this.learnDom = ref}>
                  <a className="dropdown-toggle top-menu-item" role="button" aria-haspopup="true" aria-expanded="false" >
                    Learn
                    <i className="fa fa-angle-down" />
                  </a>
                  <ul className={`dropdown-menu dropdown-menu-left`}>
                    <li><Link to="/how-it-works">How It Works</Link></li>
                  </ul>
                </li>
                <li className={`dropdown ${this.checkMenuDropdownShow('aboutUs')}`} onClick={this.setCurrentDropdown.bind(this, 'aboutUs')} ref={ref => this.aboutUsDom = ref}>
                  <a className="dropdown-toggle top-menu-item" role="button" aria-haspopup="true" aria-expanded="false" >
                    About Us
                    <i className="fa fa-angle-down" />
                  </a>
                  <ul aria-labelledby="list-of-about-us" className={`dropdown-menu dropdown-menu-left ${this.checkMenuDropdownShow('aboutUs')}`}>
                    <li><Link to="/about-us">What We Do</Link></li>
                    <li><Link to="/about-us#team">Our Team</Link></li>
                    <li><Link to="/about-us#story">Our Story</Link></li>
                  </ul>
                </li>
                {userNevigation}
                {!this.props.currentUser ? [<li key="1"><Link to="/login" className="top-menu-item">Log In</Link></li>, <li key="2"><Link to="/signup" className="btn-sm">Sign Up</Link></li>] : null}
              </ul>
            </div>
          </div>
          {this.renderSubmenu()}
        </div>
        </div>
      </header>
    );
  }
}
