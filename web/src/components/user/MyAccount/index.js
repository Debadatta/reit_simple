import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LeftMenu from "./LeftMenu";
import Profile from "./Profile";
import CompanyProfile from "./CompanyProfile";

import "../../../styles/MyAccount.css";

class MyAccount extends React.Component {
  changeView = (e) => {
    const type = e.target.dataset.value;
    this.setState({type});
  }

  render() {
    return (
      <section className="body-content adjust-body container">
        <div className="body-wrapper">
          <LeftMenu location={this.props.location} changeView={this.changeView}/>
          <Switch>
            <Route path="/my-account" exact={true} component={Profile} />
            <Route path="/my-account/company" component={CompanyProfile} />
          </Switch>
        </div>
      </section>
    )
  }
}

export default MyAccount;
