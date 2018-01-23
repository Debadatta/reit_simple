import React from 'react';
import TeamMembers from './TeamMembers';
import Investors from './Investors';
import PressNews from './PressNews';
import Careers from './Careers';
import FooterMarkets from '../common/FooterMarkets';

import '../../styles/aboutUs.css';

export default class AboutUs extends React.PureComponent {
  componentDidMount () {
    this.scrollToHashId()
  }

  componentDidUpdate () {
    this.scrollToHashId()
  }

  // emulate URL anchor page scroll functionality
  scrollToHashId () {
    const removeHash = this.removeHash
    // get URL hash (minus the hash mark)
    const hash = window.location.hash.substring(1)

    // if there's a hash, scroll to that ID
    if (hash && hash.length) {
      // setTimeout and requestAnimationFrame help ensure a true DOM repaint/reflow before we try to scroll
      // - reference: http://stackoverflow.com/a/34999925
      setTimeout(
        window.requestAnimationFrame(function () {
          const el = document.getElementById(hash)
          el.scrollIntoView()
          // clean up the hash, so we don't scroll on every prop update
          removeHash()
        }),
        0
      )
    }
  }

  // borrowed from http://stackoverflow.com/questions/1397329/how-to-remove-the-hash-from-window-location-with-javascript-without-page-refresh/5298684#5298684
  removeHash () {
    const loc = window.location
    const hist = window.history

    // use modern browser history API
    if (hist && 'pushState' in hist) {
      hist.replaceState('', document.title, loc.pathname + loc.search)
    // fallback for older browsers
    } else {
      // prevent scrolling by storing the page's current scroll offset
      const scrollV = document.body.scrollTop
      const scrollH = document.body.scrollLeft

      loc.hash = ''

      // restore the scroll offset, should be flicker free
      document.body.scrollTop = scrollV
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
          <li><a href="#news">Press</a></li>
          <li><a href="#careers">Careers</a></li>
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
              <h2>Innovation Built on Experience</h2>
              <p>The single-family rental sector has stuck to the old way of doing things for far too long – it’s an industry ripe for disruption. REITSimple is leading the way.</p>
              <p>REITSimple is the first online marketplace created exclusively for investing in leased single-family rental homes that generate cash flow day one. Created by investors for investors, REITSimple provides research, analytics, and insights to evaluate and purchase independently certified properties.</p>
              <p>REITSimple turns the old way of investing on its head, bringing transparency and efficiency to create a better way to transact. Buyers access vetted homes with current cash flow. Sellers market homes without lost income or disrupting tenants. Neighborhoods avoid signs in yards which could depress values. It’s win-win all around.</p>
              <p>The most revolutionary aspect of the REITSimple marketplace is enabling investors to treat their real estate investments more like stock portfolios, focusing on asset allocation, rather than dealing with the hassles of researching and buying vacant homes that need to be repaired and leased. This creates significant time and cost savings for all parties.</p>
              <p>The leadership team at REITSimple brings together some of the top players from the single-family rental industry under one “roof” (pun intended), including a top principal investor, the CEO of one of the largest public single-family rental companies, the leading investment banker in the space and one of the sector’s most active financiers. Add some of Silicon Valley’s top tech talent and investors, and you have REITSimple!</p>
            </div>
          </article>
          <TeamMembers/>
          <Investors/>
          <PressNews/>
          <Careers/>
        </main>
        <FooterMarkets/>
      </div>
    )
  }
}
