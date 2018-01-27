import React from 'react';
import { connect } from 'react-redux';

import Steps from './steps';

import { headerTransparent } from '../../actions/index';
import '../../styles/learn.css';

class Learn extends React.Component {
  componentWillMount() {
    this.props.dispatch(headerTransparent(true));
  }

  componentDidMount() {
    window.addEventListener("scroll", this.autoShowHeaderOnScroll);
    this.scrollToHashId();
  }

  componentDidUpdate () {
    this.scrollToHashId();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.autoShowHeaderOnScroll);
    this.props.dispatch(headerTransparent(false));
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

  autoShowHeaderOnScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 50) {
      document.querySelector('.home header .navbar').classList.remove('transparent')
    } else {
      document.querySelector('.home header .navbar').classList.add('transparent')
    }
  }

  renderTop() {
    return (
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-5">
              <h1>Everything you need, <br className="hidden-sm" />all in one place</h1>
              <h4>Find the right investment property for you. Here’s how to buy on REITSimple</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
        <section className="body-content adjust-body adjust-no-submenu">
        <div className="how-it-works">
        <div className="wrapper-hero-steps">
        {this.renderTop()}
        <Steps/>
        </div>
        </div>
      </section>
    )
  }
}

export default connect()(Learn);
