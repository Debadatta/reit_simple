import React from 'react';
import { connect } from 'react-redux';

import Header from '../layout/Header';
import Footer from '../layout/Footer';

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

import { logout } from '../../actions/authentication';

class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="main-content">
        <Header history={this.props.history} currentUser={this.props.currentUser} logout={this.props.logout}/>
        <div id="top-nav-filler"></div>
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
          <Footer />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let currentUser;
  if (state.authentication.currentUserId) {
    currentUser = state.entities.users[state.authentication.currentUserId];
  }

  return {
    currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout() {
      dispatch(logout());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
