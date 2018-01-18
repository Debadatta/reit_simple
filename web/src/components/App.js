import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import 'react-dates/lib/css/_datepicker.css';

import Login from './authentication/Login';

import Layout from './layout';

class App extends Component {
  render() {
    return <Route path="/" component={Layout} />;
  }
}

export default connect()(App);
