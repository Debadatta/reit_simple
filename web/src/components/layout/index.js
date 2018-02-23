import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Header from '../layout/Header';
import Footer from '../layout/Footer';

import { logout } from '../../actions/authentication';

import Login from '../authentication/Login';
import Home from '../home';
import Signup from '../authentication/Signup';
import AboutUs from '../aboutUs';
import Learn from '../learn';
import TermAggrement from '../TermAggrement';
import ForgetPassword from '../user/ForgetPassword';
import ResetPassword from '../user/ResetPassword';

class Layout extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="main-content">
        <Header history={this.props.history} currentUser={this.props.currentUser} logout={this.props.logout} transperency={this.props.transperency} location={this.props.location}/>
        <div id="top-nav-filler"></div>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/how-it-works" component={Learn} />
            <Route path="/terms" component={TermAggrement} />
            <Route path="/password/forgot" component={ForgetPassword} />
            <Route path="/password/reset/:token" component={ResetPassword} />
          </Switch>
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
    currentUser,
    transperency: state.init.transperency
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout() {
      dispatch(logout());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
