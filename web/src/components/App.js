import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'

import Home from './home';
import Layout from './layout';

import 'react-dates/lib/css/_datepicker.css';
import '../styles/common.css';
import '../styles/home.css';
import '../styles/fontAwsome.css';

import { logout, loadCurrentUser } from '../actions/authentication';
import { headerTransparent } from '../actions/index';

class App extends Component {
  componentWillMount() {
    this.props.headerTransparent();
    this.props.loadCurrentUser();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.authentication.currentUserId !== nextProps.authentication.currentUserId) {
      if (!window.location.pathname) {
        return <h2>This feature is not currently available.</h2>;
      } else {
        const pathArr = window.location.pathname.split('/');
        if (['login', 'password', 'signup'].indexOf(pathArr[1]) != -1) {
          this.props.history.push('/');
        } else {
          this.props.history.push(window.location.pathname);
        }
      }
    }
  }

  render() {
    return <Route path="/" component={Layout} />;
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
    },
    headerTransparent: () => {
      dispatch(headerTransparent(false));
    }
  }
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
