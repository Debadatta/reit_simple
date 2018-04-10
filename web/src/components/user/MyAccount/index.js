import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LeftMenu from "./LeftMenu";
import Profile from "./Profile";
import CompanyProfile from "./CompanyProfile";
import Ira from "./Ira";
import EmailSettings from './EmailSettings';

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
            <Route path="/my-account/ira" component={Ira} />
            <Route path="/my-account/email-settings" component={EmailSettings} />
          </Switch>
        </div>
      </section>
    )
  }
}

export default MyAccount;
