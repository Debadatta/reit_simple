import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './Layout';

class LayoutSwitcher extends Component {
  render() {
    return <Route path="/" component={Layout} />;
  }
}

export default connect()(LayoutSwitcher);
