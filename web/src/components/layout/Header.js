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
    if (e.target) {
      if (e.target !== this.aboutUsDom && !this.learnDom.contains(e.target) && e.target !== this.aboutUsDom && !this.aboutUsDom.contains(e.target)) {
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
