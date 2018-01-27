import React from 'react';
import { connect } from 'react-redux';

import HomeAds from './HomeAds';
import HomeInstruct from './HomeInstruct';
import HomePromo from './HomePromo';
import HomeVideo from './HomeVideo';
import HomeProperty from './HomeProperty';
import HomeMarketingStrategyView from './HomeMarketingStrategyView';
import HomePressView from './HomePressView';
import HomeInvestmentView from './HomeInvestmentView';
import HomeServiceView from './HomeServiceView';
import HomeSingleFamilyInstruct from './HomeSingleFamilyInstruct';
import HomeCustomerStory from './HomeCustomerStory';
import HomeAdvisors from './HomeAdvisors';

import { headerTransparent } from '../../actions/index';

class Home extends React.Component {
  componentWillMount() {
    this.props.dispatch(headerTransparent(true));
  }

  componentDidMount() {
    window.addEventListener("scroll", this.autoShowHeaderOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.autoShowHeaderOnScroll);
    this.props.dispatch(headerTransparent(false));
  }

  autoShowHeaderOnScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 50) {
      document.querySelector('.home header .navbar').classList.remove('transparent')
    } else {
      document.querySelector('.home header .navbar').classList.add('transparent')
    }
  }

  render() {
    return (
        <div className="home3">
          <HomeAds/>
          <HomeInstruct/>
          <HomePromo/>
          <HomeVideo/>
          <HomeProperty/>
          <HomeMarketingStrategyView/>
          <HomePressView/>
          <HomeInvestmentView/>
          <HomeServiceView/>
          <HomeSingleFamilyInstruct/>
          <HomeCustomerStory/>
          <HomeAdvisors/>
        </div>
    );
  }
}

export default connect()(Home);
