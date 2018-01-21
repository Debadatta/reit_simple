import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'

import Home from './home';
import Layout from './layout';

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
    }
  }
}

function mapStateToProps(state, props) {
  return {
    authentication: state.authentication
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
