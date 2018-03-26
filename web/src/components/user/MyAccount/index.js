import React from 'react';
import LeftMenu from "./LeftMenu";
import ProfileForm from "./ProfileForm";

import "../../../styles/MyAccount.css";

class MyAccount extends React.Component {
  state = {
    type: "profile"
  };

  changeView = (e) => {
    const type = e.target.dataset.value;
    this.setState({type});
  }

  renderMainContent() {
    const type = this.state.type;

    switch(type) {
    case "profile":
      return <ProfileForm/>;
    default:
      return null;
    }
  }

  render() {
    return (
      <section className="body-content adjust-body container">
        <div className="body-wrapper">
          <LeftMenu type={this.state.type} changeView={this.changeView}/>
          <div className="body-wrapper-content my-account">
            {this.renderMainContent()}
            <h3 className="page-title">
              Trusted Connections
            </h3>
            <div className="panel panel-default">
              <div className="panel-body">
                <p>
                  Connect your ReitSimple account to these trusted identity providers and login with ease.
                </p>
                <div className="btn-wrapper">
                  <button disabled className="btn social facebook">
                    Connected
                  </button>
                  </div>
                <div className="btn-wrapper">
                  <button className="btn social google-oauth2">
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default MyAccount;
