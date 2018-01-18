import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import { logout } from '../../actions/authentication';
import Dashboard from '../dashboard';
import Login from '../authentication/Login';
import Signup from '../authentication/Signup';

class Layout extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-content">
          <Header history={this.props.history} />
          <section className="content-wrapper">
            <Switch>
              <Route path="/" exact={true} component={Dashboard} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </section>
        </div>
      </div>
    );
  }
}

export default connect()(Layout);
