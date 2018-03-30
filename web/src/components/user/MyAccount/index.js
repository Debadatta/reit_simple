import React from 'react';
import LeftMenu from "./LeftMenu";
import Profile from "./Profile";

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
      return <Profile/>;
    default:
      return null;
    }
  }

  render() {
    return (
      <section className="body-content adjust-body container">
        <div className="body-wrapper">
          <LeftMenu type={this.state.type} changeView={this.changeView}/>
          {this.renderMainContent()}
        </div>
      </section>
    )
  }
}

export default MyAccount;
