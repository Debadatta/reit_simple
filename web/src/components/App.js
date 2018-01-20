import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'

import Home from './home';
import Login from './authentication/Login';
import Signup from './authentication/Signup';

import 'react-dates/lib/css/_datepicker.css';
import '../styles/common.css';
import '../styles/home.css';

import { logout, loadCurrentUser } from '../actions/authentication';

class App extends Component {
  componentWillMount() {
    this.props.loadCurrentUser();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.authentication.currentUserId !== nextProps.authentication.currentUserId) {
      this.props.history.push('/');
    }
  }

  render() {
    if (this.props.authentication && this.props.authentication.status === 'authenticated') {
      return <Switch>
        <Route path="/" exact={true} component={Home} />
      </Switch>
    }

    return (
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadCurrentUser: () => {
      dispatch(loadCurrentUser()).then(response => {
        if (response.error) {
          localStorage.removeItem('jwtToken');
        }
      });
    }
  }
}

function mapStateToProps(state, props) {
  console.log(state.authentication)
  return {
    authentication: state.authentication
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
