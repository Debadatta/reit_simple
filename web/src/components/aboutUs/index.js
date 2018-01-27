import React from 'react';
import TeamMembers from './TeamMembers';
import OurStory from './OurStory';
import FooterMarkets from '../common/FooterMarkets';

import '../../styles/aboutUs.css';

export default class AboutUs extends React.PureComponent {
  componentDidMount () {
    this.scrollToHashId()
  }

  componentDidUpdate () {
    this.scrollToHashId()
  }

  scrollToHashId () {
    const removeHash = this.removeHash
    const hash = window.location.hash.substring(1)

    if (hash && hash.length) {
      setTimeout(
        window.requestAnimationFrame(function () {
          const el = document.getElementById(hash)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            window.scrollBy(0, -100);
          }
          removeHash()
        }),
        0
      )
    }
  }

  removeHash () {
    const loc = window.location
    const hist = window.history

    if (hist && 'pushState' in hist) {
      hist.replaceState('', document.title, loc.pathname + loc.search)
    } else {
      const scrollV = document.body.scrollTop
      const scrollH = document.body.scrollLeft

      loc.hash = ''

      document.body.scrollTop = scrollV;
      document.body.scrollLeft = scrollH
    }
  }

  renderHeader() {
    return (
      <h1 className="bkg-header" style={{background: 'url("https://www.roofstock.com/wp-content/uploads/2016/06/header-about-us.jpg") no-repeat center', backgroundSize: 'cover'}}>
        <span>About REITSimple</span>
      </h1>
    )
  }

  renderMenuList() {
    return (
      <div className="child-nav">
        <ul className="container">
          <li><a href="#about">About</a></li>
          <li><a href="#team">Our Team</a></li>
          <li><a href="#story">Our Story</a></li>
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="body-content container-fluid nopadding page-about">
        <main id="main" className="site-main" role="main">
          {this.renderHeader()}
          {this.renderMenuList()}
          <article id="about" style={{background: 'url("") no-repeat left top, url("") no-repeat right top', backgroundSize: 'auto 100%, auto 100%'}}>
            <div className="container">
              <h2>New Generation Investing bolstered by Technology</h2>
              <p>The residential real estate investing model has been fragmented for way too long. Investors new to real estate investing have to mull around in the dark, searching the web trying to find nuggets of truth about the process for sourcing and completing real investment grade properties. Charlatans are all over spouting how you can make money with no money down. There is too much noise and not enough clarity – it’s an industry ripe for disruption. REITSimple has made the dream a reality.</p>
              <p>REITSimple is the first online marketplace created to connecting individual investors with all points along the real estate investment lifecycle. It does this while putting its money where its mouth is and investing in these deals alongside the individual investor. In short - REITSimple is created by investors for investors. The team understands the fear and risk points throughout the entire REI lifecycle. REITSimple provides inventory, research, analytics, and insights to evaluate and make buying decisions on independently certified investment grade single family properties. It continues this process after the purchase by providing clarity to the investor through online access to live financial and project management tools and analytics.</p>
              <p>REITSimple turns the old way of investing on its head, bringing transparency and efficiency to create a better way to transact. Buyers have access to vetted real estate investment deals that REITSimple is willing to co-invest alongside, in a joint-venture limited-partnership. REITSimple finds the deals, acquires the deals, manages the rehab and dispositions on the joint-ventures behalf. Investors are updated regularly, via online access, and can visit the sites while work is in progress.</p>
              <p>The most revolutionary piece of the REITSimple model is that investors are connected to lenders that are experienced and understanding of the real estate investing flip model. These banks also understand the experience and management value of the REITSimple team. So individual investors with limited experience and knowledge and can invest with only 20% of the total investment project. This allows investors to be able to access their 401k, IRA, or other qualified funds to use as investments in these deals.</p>
            </div>
          </article>
          <TeamMembers/>
        </main>
      </div>
    )
  }
}
